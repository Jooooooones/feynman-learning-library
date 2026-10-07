# Jones の再进化库

> 输入一本书，生成一份可沉淀的费曼学习资产。
> *Turn a book title into a reusable Feynman learning asset.*

**Jones の再进化库** 是一个面向 AI-native 学习者的零依赖读书应用：输入书名，即可生成书籍定位、核心命题、主题模块、读书流水线、可带走结论和费曼学习解释，并可一键导出 Markdown 沉淀到本地知识库。

**Jones Re-Evolution Library** is a zero-dependency reading app for AI-native learners. Enter a book title and get a structured breakdown — positioning, core thesis, theme modules, a reading pipeline, takeaways, and a Feynman explanation — ready to export as Markdown into your personal knowledge base.

产品围绕一个观点：

**读书的终点不是做笔记，而是搭建一套属于自己的判断系统。**

The product is built around one idea:

**The end of reading is not note-taking. It is building a personal decision system.**

## 产品闭环 / Product Loop

```text
书名 / Book title
-> AI 结构化拆书 / AI structured breakdown
-> 六段式知识资产 / Six-part knowledge asset
-> 费曼学习解释 / Feynman explanation
-> 本地书库沉淀 / Local library persistence
-> 导出 Markdown / Markdown export
-> 个人知识地图 / Personal knowledge map
```

## 核心能力 / Core Capabilities

- **一书输入：** 输入书名，一键生成高密度拆书页面。
  *One-book input: enter a title, generate a high-density breakdown page.*
- **结构化拆解：** 书籍定位、核心命题、主题模块、行动清单、迁移场景、Alpha 笔记与费曼解释。
  *Structured output: positioning, thesis, theme modules, action checklist, transfer scenarios, alpha notes, and Feynman explanation.*
- **双模型渠道：** 同一入口支持 **Gemini** 与 **DeepSeek**，各自保存 API Key，随时切换。
  *Dual providers: Gemini and DeepSeek behind one switch, with per-provider saved keys.*
- **自带 Key 运行：** 在页面「API Key 设置」里粘贴你自己的 Key，仅存于本机浏览器，不落服务器文件。
  *Bring your own key: pasted in the UI, stored only in your browser, never in server files.*
- **本地书库：** 每本拆好的书自动入库，可回看、删除、导出 Markdown。
  *Local library: every parsed book is saved, re-readable, deletable, and exportable.*
- **输出规范化：** 服务端与前端双重校验，兼容模型返回的字符串/对象/数组混合结构。
  *Output normalization: both server and client coerce messy model JSON into a stable shape.*
- **多媒体学习页：** 内置《名人传》视频、音频、PDF 逐页学习、同步逐字稿与口播稿输出作为示范。
  *Multimedia demo: the bundled "Famous Men" book ships with video, audio, page-by-page PDF study, synced transcript, and script export.*
- **一书一文件夹：** 每拆成一本书，服务器自动在 `书本/<书名>/` 生成专属文件夹（`book.json` + `拆书笔记.md`）。把视频、音频、PPT、PDF 拖进文件夹，刷新后该书即获得与《名人传》同款的全部分栏学习界面（全书概览 / 视频学习 / 音频精读 / PDF 阅读 / 文档图片）。
  *One folder per book: every parsed book gets a server-side `书本/<title>/` folder. Drop video / audio / PPT / PDF into it, and the book instantly gains the same tabbed multimedia study UI as the demo book.*
- **删除不伤资料：** 移除拆书记录只清理记录文件，文件夹内的媒体永远保留。
  *Deleting a book record never touches your media files.*
- **零依赖后端：** 单个 `server.mjs` 同时提供静态服务、拆书 API、书库文件夹读写与媒体文件分发，无需框架。
  *Zero-dependency backend: one `server.mjs` serves the site, the parse API, the book folders, and media files — no frameworks.*

## AI 输出契约 / AI Output Contract

每本生成的书遵循稳定结构 / Every generated book follows a stable structure:

1. `一、书籍定位 / Positioning`
2. `二、核心命题 / Core Proposition`
3. `三、主题模块 / Theme Modules`
4. `四、读书流水线拆书 / Reading Pipeline`
5. `五、阅读后可直接带走的结论 / Takeaways`
6. `六、费曼学习解释 / Feynman Explanation`

费曼学习解释专为「讲给没读过这本书的人听」设计：先讲作者与时代背景，再用递进角度解释「是什么、为什么、和读者有什么关系」，最后一句话总结。

*The Feynman section is optimized for teaching the book to someone who has never read it: author and era context first, then progressive angles answering "what, why, and what it has to do with you", ending with a one-sentence takeaway.*

## 架构 / Architecture

```text
静态前端 / Static UI (dist/)
-> server.mjs 静态服务 + POST /api/parse-book + GET/POST/DELETE /api/books
-> Gemini / DeepSeek 结构化生成 / structured generation
-> 输出规范化 / normalization (normalizeBook / fixBook)
-> 服务器书本文件夹 / server-side 书本/<title>/ folders (book.json + notes + your media)
-> /书本/* 媒体分发 / media serving (video / audio / PDF in-page study)
-> Markdown 导出 / Markdown export
```

关键文件 / Key files:

- `server.mjs`：零依赖后端，静态服务 + 拆书 API + 双渠道路由 + 输出规范化。 *Zero-dependency backend: static serving, parse API, provider routing, output normalization.*
- `dist/index.html`：学习界面与 AI 拆书 / 我的书库面板。 *Learning UI with the AI breakdown and library panels.*
- `dist/app.js`：拆书请求、书库渲染、localStorage 持久化与 Markdown 导出。 *Parse requests, library rendering, persistence, and export.*
- `dist/styles.css`：暖色编辑部风格视觉系统。 *Warm editorial visual system.*
- `dist/assets/`：《名人传》示范多媒体素材。 *Bundled multimedia demo assets.*

## 本地运行 / Local Setup

**前置条件 / Prerequisite：** Node.js 18+

1. 启动服务 / Start the server:

```bash
node server.mjs
```

2. 打开应用 / Open the app:

```text
http://localhost:4173
```

3. 在「AI 拆书 → API Key 设置」选择渠道（Gemini / DeepSeek），粘贴你的 Key 并保存，即可开始拆书。
   *Go to "AI Breakdown → API Key Settings", pick a provider (Gemini / DeepSeek), paste your key, and start parsing.*

## 环境变量（可选）/ Environment Variables (optional)

如果不想在页面里填 Key，可在 `server.mjs` 同目录创建 `.env.local`：
*Prefer not to paste keys in the UI? Create `.env.local` next to `server.mjs`:*

```text
GEMINI_API_KEY
DEEPSEEK_API_KEY
PORT
```

请求时的 Key 优先级：页面保存的 Key > 服务器环境变量。
*Key precedence per request: browser-saved key > server environment variable.*

本仓库不提交任何真实密钥。`.env` / `.env.local` 已在 `.gitignore` 中排除。
*No real tokens are committed. `.env` / `.env.local` are gitignored.*

## 产品方向 / Product Direction

- 第一阶段：单书结构化拆解与本地沉淀。 *Stage 1: single-book breakdown and local persistence.*
- 第二阶段：多书书库与跨书知识地图。 *Stage 2: multi-book library and cross-book knowledge map.*
- 第三阶段：为每本书挂载视频 / 音频 / PDF 多媒体学习模块。 *Stage 3: per-book video / audio / PDF learning modules.*
- 第四阶段：复习卡片、间隔重复与个人决策系统。 *Stage 4: review cards, spaced repetition, and a personal decision system.*

长期目标很纯粹：让每一本书都成为个人判断、策略与创造操作系统里一个可复用的组件。
*The long-term goal is simple: make every book a reusable component in your personal operating system for judgment, strategy, and creation.*

## 关于 / Credits

- **作者 / Author：Jones** —— 本应用的全部实现（零依赖后端、双渠道拆书、服务器端书本文件夹、分栏多媒体学习界面）均由 Jones 独立完成并持续演进。
- **来源 / Origin：** 拆书功能的六段式输出结构与产品思路，源自一位朋友分享的拆书应用。本项目在其基础上被完全重写为 Jones の再进化库：更换后端架构、增加 DeepSeek 双渠道、输出规范化、书本文件夹与网页内多媒体学习，原项目的存储与同步方案未使用。
- *The six-part book-breakdown concept was inspired by a reading app shared by a friend. Everything running here — the zero-dependency server, dual-provider parsing, per-book folders, and the in-page multimedia study UI — is Jones' own rework.*
