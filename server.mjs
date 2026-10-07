import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, readdir, rm, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, 'dist');
const BOOKS_DIR = path.join(__dirname, '书本');
const PORT = Number(process.env.PORT || 4173);

for (const envFile of ['.env.local', '.env']) {
  const file = path.join(__dirname, envFile);
  if (!existsSync(file)) continue;
  for (const line of (await readFile(file, 'utf8')).split('\n')) {
    const match = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].replace(/^["']|["']$/g, '');
    }
  }
}

const API_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '';
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || '';
const MODELS = ['gemini-3.5-flash', 'gemini-3.7-flash', 'gemini-3.8-flash', 'gemini-2.5-flash-lite'];
const DEEPSEEK_MODELS = ['deepseek-chat'];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4',
  '.m4a': 'audio/mp4',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ppt': 'application/vnd.ms-powerpoint',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.epub': 'application/epub+zip',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mov': 'video/quicktime',
  '.webm': 'video/webm'
};

function buildBookGenerationPrompt(bookTitle) {
  return `你是一名“书籍内容整理师 + 交互内容策划师”。请只根据书名《${bookTitle}》，整理出一份适合网页展示的中文结构化拆书内容。

请严格输出 JSON。JSON 必须包含：
- positioning: title, author, field, oneLiner
- coreProposition: mainTitle, explanation
- modules: 3 到 5 个主题模块，每个模块 3 到 5 张观点卡片
- conclusions: remember, practicalUse
- feynmanExplanation: authorContext, explanationAngles, oneSentenceSummary
- readingPipeline: coreQuestion, keyModels, keyCases, transferScenarios, actionChecklist, alphaNotes
- displaySuggestions

内容要求：
1. 不要泛泛书评，要像“输入一本书后立刻读懂核心内容”的页面文案。
2. 优先提炼作者独特判断框架、经典实验/案例、现实迁移场景、行动清单和 Alpha 笔记。
3. 费曼学习解释要能讲给没读过这本书的人听：先讲作者与时代背景，再用 3 到 5 个递进角度解释“是什么、为什么、和读者有什么关系”，最后一句话总结。
4. 不要输出占位符，要输出可直接保存的完整内容。`;
}

const RESPONSE_SCHEMA = {
  type: 'OBJECT',
  properties: {
    positioning: {
      type: 'OBJECT',
      properties: { title: { type: 'STRING' }, author: { type: 'STRING' }, field: { type: 'STRING' }, oneLiner: { type: 'STRING' } },
      required: ['title', 'author', 'field', 'oneLiner']
    },
    coreProposition: {
      type: 'OBJECT',
      properties: { mainTitle: { type: 'STRING' }, explanation: { type: 'ARRAY', items: { type: 'STRING' } } },
      required: ['mainTitle', 'explanation']
    },
    modules: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: { title: { type: 'STRING' }, cards: { type: 'ARRAY', items: { type: 'STRING' } } },
        required: ['title', 'cards']
      }
    },
    conclusions: {
      type: 'OBJECT',
      properties: { remember: { type: 'ARRAY', items: { type: 'STRING' } }, practicalUse: { type: 'STRING' } },
      required: ['remember', 'practicalUse']
    },
    feynmanExplanation: {
      type: 'OBJECT',
      properties: {
        authorContext: { type: 'ARRAY', items: { type: 'STRING' } },
        explanationAngles: {
          type: 'ARRAY',
          items: {
            type: 'OBJECT',
            properties: { title: { type: 'STRING' }, explanation: { type: 'STRING' } },
            required: ['title', 'explanation']
          }
        },
        oneSentenceSummary: { type: 'STRING' }
      },
      required: ['authorContext', 'explanationAngles', 'oneSentenceSummary']
    },
    readingPipeline: {
      type: 'OBJECT',
      properties: {
        coreQuestion: { type: 'STRING' },
        keyModels: { type: 'ARRAY', items: { type: 'STRING' } },
        keyCases: { type: 'ARRAY', items: { type: 'STRING' } },
        transferScenarios: { type: 'ARRAY', items: { type: 'STRING' } },
        actionChecklist: { type: 'ARRAY', items: { type: 'STRING' } },
        alphaNotes: { type: 'ARRAY', items: { type: 'STRING' } }
      },
      required: ['coreQuestion', 'keyModels', 'keyCases', 'transferScenarios', 'actionChecklist', 'alphaNotes']
    },
    displaySuggestions: { type: 'STRING' }
  },
  required: ['positioning', 'coreProposition', 'modules', 'conclusions', 'feynmanExplanation', 'readingPipeline', 'displaySuggestions']
};

function asText(item) {
  if (typeof item === 'string') return item.trim();
  if (Array.isArray(item)) return item.map(asText).filter(Boolean).join('；');
  if (item && typeof item === 'object') return Object.values(item).map(asText).filter(Boolean).join('：');
  return '';
}

function asStringArray(value) {
  if (Array.isArray(value)) return value.map(asText).filter(Boolean);
  if (typeof value === 'string') return value.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  if (value == null) return [];
  return [String(value)];
}

function normalizeBook(book) {
  book.positioning = book.positioning || {};
  for (const key of ['title', 'author', 'field', 'oneLiner']) book.positioning[key] = String(book.positioning[key] ?? '');
  book.coreProposition = book.coreProposition || {};
  book.coreProposition.mainTitle = String(book.coreProposition.mainTitle ?? '');
  book.coreProposition.explanation = asStringArray(book.coreProposition.explanation);
  const rawModules = Array.isArray(book.modules) ? book.modules : asStringArray(book.modules);
  book.modules = rawModules.map((m) => {
    if (typeof m === 'string') return { title: m, cards: [] };
    if (m && typeof m === 'object') {
      const title = String(m.title ?? '');
      const cards = asStringArray(m.cards);
      return title || cards.length ? { title, cards } : { title: asText(m), cards: [] };
    }
    return null;
  }).filter(Boolean);
  book.conclusions = book.conclusions || {};
  book.conclusions.remember = asStringArray(book.conclusions.remember);
  book.conclusions.practicalUse = String(book.conclusions.practicalUse ?? '');
  book.feynmanExplanation = book.feynmanExplanation || {};
  book.feynmanExplanation.authorContext = asStringArray(book.feynmanExplanation.authorContext);
  const rawAngles = Array.isArray(book.feynmanExplanation.explanationAngles) ? book.feynmanExplanation.explanationAngles : asStringArray(book.feynmanExplanation.explanationAngles);
  book.feynmanExplanation.explanationAngles = rawAngles.map((a) => {
    if (typeof a === 'string') return { title: '', explanation: a };
    if (a && typeof a === 'object') {
      const title = String(a.title ?? '');
      const explanation = String(a.explanation ?? '');
      return title || explanation ? { title, explanation } : { title: '', explanation: asText(a) };
    }
    return null;
  }).filter(Boolean);
  book.feynmanExplanation.oneSentenceSummary = String(book.feynmanExplanation.oneSentenceSummary ?? '');
  book.readingPipeline = book.readingPipeline || {};
  book.readingPipeline.coreQuestion = String(book.readingPipeline.coreQuestion ?? '');
  for (const key of ['keyModels', 'keyCases', 'transferScenarios', 'actionChecklist', 'alphaNotes']) {
    book.readingPipeline[key] = asStringArray(book.readingPipeline[key]);
  }
  return book;
}

function validateBook(raw) {
  const book = normalizeBook(raw && typeof raw === 'object' ? raw : {});
  for (const key of ['positioning', 'coreProposition', 'modules', 'conclusions', 'feynmanExplanation', 'readingPipeline']) {
    if (!book[key]) throw new Error(`模型返回缺少「${key}」字段`);
  }
  if (!book.positioning.title) throw new Error('模型没有返回书籍定位（title 为空），请重试');
  return book;
}

function extractJson(text) {
  const cleaned = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
  return JSON.parse(cleaned);
}

async function generateBookWithDeepSeek(title, apiKey) {
  const model = DEEPSEEK_MODELS[0];
  const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: buildBookGenerationPrompt(title) }],
      response_format: { type: 'json_object' },
      temperature: 0.6
    })
  });
  if (!response.ok) {
    throw new Error(`${model}: HTTP ${response.status} ${(await response.text()).slice(0, 200)}`);
  }
  const payload = await response.json();
  const text = payload.choices?.[0]?.message?.content || '';
  if (!text.trim()) throw new Error(`${model} 没有返回内容`);
  return { book: validateBook(extractJson(text)), model };
}

async function generateBook(title, apiKey) {
  const errors = [];
  for (const model of MODELS) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
          body: JSON.stringify({
            contents: [{ parts: [{ text: buildBookGenerationPrompt(title) }] }],
            generationConfig: { responseMimeType: 'application/json', responseSchema: RESPONSE_SCHEMA }
          })
        }
      );
      if (!response.ok) {
        errors.push(`${model}: HTTP ${response.status} ${(await response.text()).slice(0, 120)}`);
        continue;
      }
      const payload = await response.json();
      const text = payload.candidates?.[0]?.content?.parts?.map((part) => part.text).join('') || '';
      if (!text.trim()) {
        errors.push(`${model}: 没有返回内容`);
        continue;
      }
      return { book: validateBook(JSON.parse(text)), model };
    } catch (error) {
      errors.push(`${model}: ${error.message}`);
    }
  }
  throw new Error(`所有候选模型都失败。${errors.join(' | ')}`);
}

const MEDIA_KINDS = {
  video: ['.mp4', '.mov', '.webm', '.mkv', '.avi'],
  audio: ['.m4a', '.mp3', '.wav', '.aac', '.flac', '.ogg'],
  pdf: ['.pdf'],
  doc: ['.ppt', '.pptx', '.key', '.epub', '.doc', '.docx'],
  image: ['.jpg', '.jpeg', '.png', '.webp', '.gif']
};

function mediaKind(ext) {
  for (const [kind, list] of Object.entries(MEDIA_KINDS)) if (list.includes(ext)) return kind;
  return 'other';
}

function sanitizeFolderName(title) {
  const cleaned = String(title)
    .replace(/[《》]/g, '')
    .replace(/[\\/:*?"<>|]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60);
  return cleaned || '未命名书籍';
}

function bookToMarkdown(book) {
  const lines = [`# ${book.positioning.title}`, '', `> ${book.positioning.oneLiner}`, ''];
  lines.push(`**作者**：${book.positioning.author}　**领域**：${book.positioning.field}`, '');
  lines.push('## 核心命题', book.coreProposition.mainTitle, ...book.coreProposition.explanation.map((p) => `\n${p}`), '');
  lines.push('## 主题模块');
  book.modules.forEach((m) => { lines.push(`\n### ${m.title}`, ...m.cards.map((c) => `- ${c}`)); });
  lines.push('', '## 读书流水线拆书', `核心问题：${book.readingPipeline.coreQuestion}`);
  [['keyModels', '关键模型'], ['keyCases', '关键案例'], ['transferScenarios', '迁移场景'], ['actionChecklist', '行动清单'], ['alphaNotes', 'Alpha 笔记']].forEach(([key, label]) => {
    lines.push(`\n**${label}**`, ...book.readingPipeline[key].map((c) => `- ${c}`));
  });
  lines.push('', '## 阅读后可直接带走的结论', ...book.conclusions.remember.map((c) => `- ${c}`), '', `现实用法：${book.conclusions.practicalUse}`);
  lines.push('', '## 费曼学习解释', ...book.feynmanExplanation.authorContext.map((p) => `\n${p}`));
  book.feynmanExplanation.explanationAngles.forEach((a) => lines.push(`\n### ${a.title}`, a.explanation));
  lines.push('', `一句话总结：${book.feynmanExplanation.oneSentenceSummary}`);
  return lines.join('\n');
}

async function saveBookFolder(book, savedAt) {
  const folder = sanitizeFolderName(book.positioning.title);
  const dir = path.join(BOOKS_DIR, folder);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'book.json'), JSON.stringify({ folder, savedAt, book }, null, 2), 'utf8');
  await writeFile(path.join(dir, '拆书笔记.md'), bookToMarkdown(book), 'utf8');
  return folder;
}

async function scanBookFiles(dirName) {
  const dir = path.join(BOOKS_DIR, dirName);
  const names = await readdir(dir);
  const files = [];
  for (const name of names) {
    if (name === 'book.json' || name === '拆书笔记.md' || name.startsWith('.')) continue;
    const st = await stat(path.join(dir, name));
    if (!st.isFile()) continue;
    files.push({
      name,
      size: st.size,
      kind: mediaKind(path.extname(name).toLowerCase()),
      url: `/书本/${encodeURIComponent(dirName)}/${encodeURIComponent(name)}`
    });
  }
  return files.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
}

async function listBooks() {
  if (!existsSync(BOOKS_DIR)) return [];
  const dirs = await readdir(BOOKS_DIR, { withFileTypes: true });
  const books = [];
  for (const d of dirs) {
    if (!d.isDirectory() || d.name.startsWith('.')) continue;
    const jsonPath = path.join(BOOKS_DIR, d.name, 'book.json');
    if (!existsSync(jsonPath)) continue;
    try {
      const entry = JSON.parse(await readFile(jsonPath, 'utf8'));
      entry.folder = d.name;
      entry.files = await scanBookFiles(d.name);
      books.push(entry);
    } catch {}
  }
  return books.sort((a, b) => String(b.savedAt || '').localeCompare(String(a.savedAt || '')));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > 1_000_000) {
        reject(new Error('请求体过大'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'));
      } catch {
        reject(new Error('无效的 JSON 请求体'));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

async function serveStatic(req, res, urlPath) {
  const decoded = decodeURIComponent(urlPath);
  let baseDir = DIST_DIR;
  let relative = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  if (decoded.startsWith('/书本/')) {
    baseDir = BOOKS_DIR;
    relative = decoded.replace(/^\/书本\//, '');
  }
  const filePath = path.resolve(baseDir, relative);
  if (filePath !== baseDir && !filePath.startsWith(baseDir + path.sep)) {
    sendJson(res, 403, { error: '禁止访问' });
    return;
  }
  try {
    const file = await readFile(filePath);
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(file);
  } catch {
    sendJson(res, 404, { error: '文件不存在' });
  }
}

const server = createServer(async (req, res) => {
  const urlPath = new URL(req.url, 'http://localhost').pathname;
  try {
    if (req.method === 'POST' && urlPath === '/api/parse-book') {
      const { title } = await readJsonBody(req);
      if (!title || !String(title).trim()) {
        sendJson(res, 400, { error: '请输入书名' });
        return;
      }
      const provider = String(req.headers['x-parse-provider'] || '').trim() || 'gemini';
      const clientKey = String(req.headers['x-parse-key'] || '').trim();
      const envKey = provider === 'deepseek' ? DEEPSEEK_API_KEY : API_KEY;
      const key = clientKey || envKey;
      if (!key) {
        sendJson(res, 400, { error: `未配置 ${provider} 的 API Key。请在页面「API Key 设置」中选择渠道并粘贴 Key。` });
        return;
      }
      const result = provider === 'deepseek'
        ? await generateBookWithDeepSeek(String(title).trim(), key)
        : await generateBook(String(title).trim(), key);
      result.book = validateBook(result.book);
      result.folder = await saveBookFolder(result.book, new Date().toLocaleDateString('zh-CN'));
      sendJson(res, 200, result);
      return;
    }
    if (req.method === 'GET' && urlPath === '/api/books') {
      sendJson(res, 200, { books: await listBooks() });
      return;
    }
    if (req.method === 'POST' && (urlPath === '/api/books' || urlPath === '/api/books/import')) {
      const body = await readJsonBody(req);
      const entries = urlPath === '/api/books' ? [body] : (Array.isArray(body.entries) ? body.entries : []);
      const saved = [];
      for (const entry of entries) {
        const book = entry && entry.book;
        if (!book || !book.positioning || !String(book.positioning.title || '').trim()) continue;
        saved.push(await saveBookFolder(validateBook(book), entry.savedAt || new Date().toLocaleDateString('zh-CN')));
      }
      sendJson(res, 200, { saved });
      return;
    }
    if (req.method === 'DELETE' && urlPath === '/api/books') {
      const dirName = sanitizeFolderName(new URL(req.url, 'http://localhost').searchParams.get('dir') || '');
      const dir = path.resolve(BOOKS_DIR, dirName);
      if (!dir.startsWith(BOOKS_DIR + path.sep) || !existsSync(path.join(dir, 'book.json'))) {
        sendJson(res, 404, { error: '未找到这本书' });
        return;
      }
      await rm(path.join(dir, 'book.json'), { force: true });
      await rm(path.join(dir, '拆书笔记.md'), { force: true });
      sendJson(res, 200, { removed: dirName, note: '拆书记录已移除；文件夹中的媒体文件仍保留在磁盘上。' });
      return;
    }
    if (req.method === 'GET' || req.method === 'HEAD') {
      await serveStatic(req, res, urlPath);
      return;
    }
    sendJson(res, 405, { error: '方法不允许' });
  } catch (error) {
    sendJson(res, 500, { error: error.message || '服务器内部错误' });
  }
});

server.listen(PORT, () => {
  console.log(`Jonesの再进化库 running at http://localhost:${PORT} (parse-book: ${API_KEY ? 'key loaded' : 'NO KEY'})`);
});
