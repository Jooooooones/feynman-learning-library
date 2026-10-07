const videoSegments = [
  { time: 0, stamp: '00:00', text: '《名人传》写的不是三个从胜利走向胜利的人，而是三个被苦难反复击中、却没有停止创造的人。', title: '先重新定义“英雄”', simple: '英雄不是没有困难的人，而是困难已经很大了，他仍然愿意继续做正确的事。', analogy: '就像停电时仍把重要的工作写在纸上：环境拿走了便利，却没有拿走你的选择。' },
  { time: 34, stamp: '00:34', text: '罗曼·罗兰真正关心的是：当外部世界不可控制时，人还能控制什么？答案是回应苦难的方式。', title: '我们控制不了遭遇，但能选择回应', simple: '你不一定能决定问题会不会来，但可以决定问题来了以后，你把力气用在抱怨、逃避，还是创造上。', analogy: '下雨无法取消，但你可以决定撑伞、改变路线，或者研究怎样收集雨水。' },
  { time: 62, stamp: '01:02', text: '贝多芬最残酷的处境，是一个音乐家逐渐失去听觉。他没有否认绝望，而是把绝望组织成了音乐。', title: '贝多芬：把限制变成语言', simple: '贝多芬不是因为痛苦才伟大，而是他把痛苦加工成了别人也能感受到的音乐。', analogy: '好比一块有裂纹的木头，工匠没有丢掉它，而是顺着裂纹做出独一无二的纹理。' },
  { time: 97, stamp: '01:37', text: '《第九交响曲》的意义在于，它不是来自一个快乐顺遂的人，却最终抵达了对全人类欢乐与团结的想象。', title: '作品可以大于个人处境', simple: '一个人此刻不快乐，也仍然可以创造让别人获得力量的东西。', analogy: '灯塔常常立在风浪最大的地方，但它发出的光不是只照自己。' },
  { time: 128, stamp: '02:08', text: '米开朗琪罗常常不能选择自己的任务。他厌恶差遣，却依旧用最高标准完成西斯廷教堂的天顶画。', title: '米开朗琪罗：在被迫中保留标准', simple: '你可能选不了今天要做什么，但你仍然能选择把它做到什么程度。', analogy: '厨师未必能决定客人点哪道菜，却可以决定端出去的菜是否对得起自己的手艺。' },
  { time: 164, stamp: '02:44', text: '真正的自由有时不是摆脱限制，而是在限制里面仍然保有创造的余地。', title: '自由也可以发生在边界之内', simple: '自由不只是想做什么就做什么，也包括条件不理想时，你仍能找到一个可以自主决定的小空间。', analogy: '诗有严格的字数与格律，但好诗并没有因此失去创造性。' },
  { time: 194, stamp: '03:14', text: '托尔斯泰的苦难来自生活与信念之间的裂缝。他拥有名望与财富，却无法停止追问这样的生活是否真实。', title: '托尔斯泰：把生活变成思想实验', simple: '他不满足于“道理说得对”，还想知道自己能不能真的照着道理生活。', analogy: '像一个研究健康的人，不只写饮食建议，还把自己的每一天都变成实验记录。' },
  { time: 229, stamp: '03:49', text: '三个人的共同结构是：外部苦难没有消失，但他们通过行动，让苦难不再只是损失，而成为作品的材料。', title: '共同结构：苦难、行动、转化', simple: '苦难本身不会自动让人成长。中间必须有行动，成长才可能发生。', analogy: '矿石不会自己变成钢。高温只是条件，还需要冶炼、锻打和塑形。' },
  { time: 264, stamp: '04:24', text: '这本书最后留下的问题是：你正在经历的限制，能否被转化成一种更独特、更诚实的创造？', title: '把问题带回自己', simple: '读完别只佩服名人，要找出自己当下最难的一件事，并决定下一步能做什么。', analogy: '地图的价值不在于好看，而在于你愿意在自己的路口用它做一次选择。' }
];

const audioSegments = [
  { time: 0, stamp: '00:00', text: '如果把《名人传》理解成成功学，就会错过罗曼·罗兰最重要的意思。' },
  { time: 42, stamp: '00:42', text: '这三个人在现实生活里都不圆满：贝多芬失聪，米开朗琪罗被权力驱使，托尔斯泰被自己的信念撕裂。' },
  { time: 91, stamp: '01:31', text: '他们的共同点不是苦难特别多，而是没有把苦难当成停止行动的最终理由。' },
  { time: 141, stamp: '02:21', text: '贝多芬给我们的不是“忍耐”两个字，而是一种转化能力：让不能说出口的痛苦进入作品。' },
  { time: 196, stamp: '03:16', text: '米开朗琪罗提醒我们，职业自主与专业尊严不是同一件事。任务可能来自别人，标准仍然属于自己。' },
  { time: 254, stamp: '04:14', text: '托尔斯泰最难的战场在内部。他不断检验财富、家庭、信仰与行动是否一致。' },
  { time: 316, stamp: '05:16', text: '费曼式地说，这本书只有一个公式：限制加行动，才有可能发生转化。限制本身并不高贵。' },
  { time: 378, stamp: '06:18', text: '现在请你想一件正在回避的困难：如果不要求立刻战胜它，能否先把它变成今天的一次具体行动？' }
];

const pageExplanations = [
  { title: '把困境当作精神材料', simple: '封面提出整套内容的中心问题：人生难免被击打，但我们可以学习把压力加工成作品、能力或更清楚的信念。', analogy: '石头放着只是石头；经过选择、切割和打磨，才可能成为雕像。困境是石头，行动才是雕刻。', why: '它把阅读目标从“认识三个名人”转成“学会三种处理困境的方法”。', question: '如果困境是一块原料，你希望最后把它加工成什么？' },
  { title: '外部失序时，保住内部秩序', simple: '罗曼·罗兰写作的时代充满战争和信仰危机。他相信，外部世界越不稳定，人越需要找到不完全依赖环境的内在力量。', analogy: '暴风雨里无法让海面安静，但船仍可以校准罗盘、收紧船帆。', why: '现代人的倦怠、被迫劳动和价值冲突，与当时的问题不同，却共享“外部难以控制”的结构。', question: '你的力量目前有多少依赖外部评价，有多少来自自己认可的标准？' },
  { title: '苦难不是结论，而是起点', simple: '同样的痛苦，既可能摧毁一个人，也可能被转化为创造。区别并不在痛苦本身，而在痛苦之后有没有持续行动。', analogy: '弹簧被压缩只是储存能量；它必须找到方向释放，才会推动某样东西。', why: '它纠正了“只要吃苦就会成功”的错误理解，强调人的回应方式。', question: '为什么苦难本身不能保证一个人变得更强？' },
  { title: '三阶段炼金术', simple: '这页给出统一模型：先承认真实的外部重压，再用不屈行动回应，最终才可能把损失转成具有公共价值的创造。', analogy: '矿石经过高温、冶炼和锻打才能成为钢，少了任何一步都只是原料。', why: '它把抽象的“坚强”拆成了可以观察的过程：压力、行动、输出。', question: '你正处于“重压、抗争、创造”中的哪一个阶段？' },
  { title: '贝多芬：向内听见音乐', simple: '失聪切断了贝多芬最重要的外部感官，他却依靠长期训练形成的内部音乐结构继续创作，把无声的痛苦写成《第九交响曲》。', analogy: '熟练棋手闭上眼仍能在脑中看到棋盘，因为能力已经从工具进入了身体和头脑。', why: '它提醒我们，真正可靠的能力不是拥有某个工具，而是工具拿走后仍留在你身上的东西。', question: '如果失去最依赖的工具，你还有哪项能力已经真正长在自己身上？' },
  { title: '米开朗琪罗：任务被迫，标准自主', simple: '他常被迫接受不喜欢的任务，但仍能决定作品达到什么标准。外部命令控制题目，没有完全控制他的专业尊严。', analogy: '考试题目由别人出，但答案认真到什么程度，仍有一部分由你决定。', why: '它为枯燥或无法拒绝的工作提供一种现实的主动性：把任务变成技艺训练场。', question: '在不能拒绝的任务里，哪一个质量标准仍然由你决定？' },
  { title: '托尔斯泰：让生活检验信念', simple: '托尔斯泰的痛苦来自生活与信念不一致。他不满足于把道理写得漂亮，而是不断用生活实验逼近自己相信的真理。', analogy: '指南针指向北方，双脚却往南走；越成功，方向错位带来的撕裂可能越强。', why: '它说明意义危机不只来自失败，也可能来自成功后发现生活不是自己真正认可的样子。', question: '你的时间分配，真的支持你口头上最看重的事情吗？' },
  { title: '先识别自己的枷锁', simple: '三位人物面对的是不同问题：资源被切断、任务被强迫、价值观冲突。不同枷锁需要不同的行动策略。', analogy: '看病不能只说“我不舒服”，必须先找到病因，药方才不会开错。', why: '行动之前先给困境分类，能避免用“再努力一点”应付所有问题。', question: '你的困难更像资源受限、被迫劳动，还是价值冲突？' },
  { title: '英雄主义是战胜自己的局限', simple: '书中的三个人在健康、人际或安宁上并不成功，但他们没有让这些失败决定精神作品的上限。', analogy: '雕刻不是战胜石头，而是不断拿掉阻碍形状显现的部分。', why: '它把英雄从征服别人，重新定义为看清现实后仍能持续创造意义的人。', question: '你最需要战胜的是外部对手，还是自己的一种局限？' },
  { title: '把困境调到对应行动', simple: '资源匮乏时向内聚焦，被迫劳动时守住匠心，意义虚无时做一个贴近信念的小实验。先判断困境类型，再选择行动。', analogy: '不同音轨需要不同的旋钮：音量、音色和均衡器不能互相替代。', why: '这让精神力量从一句鼓励，变成可以在低谷时直接使用的操作台。', question: '你现在最该推动的旋钮是向内聚焦、专业匠心，还是生活实验？' },
  { title: '雕像来自一次次具体凿击', simple: '最后一页不是让人祈求更多苦难，而是承认困难不可完全避免，并用一次次行动塑造自己。', analogy: '雕像不会因为石头想清楚了就出现，它来自每一次方向正确的凿击。', why: '它把全书收束到今天：真正重要的不是被故事感动，而是离开页面后的下一次行动。', question: '今天哪一个微小行动，能代表你没有向自己的局限投降？' }
];

const scriptProfiles = {
  baoliao: {
    name: '爆料体',
    title: '《名人传》：这三个人，现实里都输了',
    summary: '情绪开场、口语推进、连续反问、节奏断裂、金句收尾。',
    tags: ['情绪钩子', '反问链', '语气标注'],
    outline: ['情绪开场', '一句话钩子', '三位人物', '现实迁移', '态度收尾'],
    text: `[提高音量]
等一下，你先别把《名人传》当成那种“名人怎么成功”的书。

因为这本书里最吓人的地方是：
这三个人，现实里其实都输了。

一个音乐家，听不见了。
一个艺术家，被自己最讨厌的人和任务折磨了一辈子。
还有一个世界级大文豪，有钱、有名、有地位，最后却连自己为什么活着都想不明白。

[停顿]

但就是这三个“失败者”，一个写出了《欢乐颂》，一个画出了西斯廷教堂的天顶，另一个写出了《战争与和平》和《复活》。

你说怪不怪？
条件都被拿走了，作品怎么反而更大了？

[压低声音]
这就是罗曼·罗兰写《名人传》真正想爆给你的东西：
伟大不是条件好。伟大是条件已经烂成这样了，你还能把它炼成点什么。

[加速]
先说贝多芬。
一个靠耳朵吃饭的人，耳朵没了。
不是暂时耳鸣，不是戴个助听器就完事，是一点点地、不可逆地失去听觉。

你想想，一个音乐家看着别人说话，却不知道对方在说什么；站在自己作品的掌声里，却听不见掌声。换成你，你崩不崩？

贝多芬也崩。他绝望过，甚至想过结束生命。
但接下来才是最恐怖的。

他没有假装不痛苦。他把痛苦直接扔进音乐里。
骨传导、记忆、脑子里的声音，能用的全用上。
然后，一个听不见的人，写出了歌颂全人类欢乐的《第九交响曲》。

[停顿]
他自己没有欢乐，却给世界留下了《欢乐颂》。

再说米开朗琪罗。
你以为大艺术家每天就是灵感来了，拿起画笔，岁月静好？不是啊。
这哥们儿大量时间都在接自己不想接的活，被教皇催，被工期压，被迫在脚手架上仰着脖子画了好几年。

他恨不恨？恨。
他能不能不干？很多时候不能。
那怎么办？摆烂吗？糊弄吗？

他选了第三条路：任务我不一定能选，但标准我来定。

[加速]
于是，繁重的劳役变成了西斯廷天顶画，《创世纪》，《最后的审判》。别人交给他的是一份苦差事，他还回去的是几百年以后人类都要抬头看的东西。

你发现没有？
真正的自由有时候不是“我想干嘛就干嘛”。
是我没得选的时候，仍然能决定把这件事做到什么程度。

[严肃]
最后是托尔斯泰。
这位更麻烦。
他不是没钱，不是没名，是该有的都有了，然后突然发现：这些东西跟自己相信的道理对不上。

嘴上说平等，自己是贵族。
嘴上说简朴，家里有庄园。
写出了那么多道理，自己能不能照着活？

他开始折腾自己。放弃版权，亲自劳动，不停追问，不停失败，再继续追问。

你以为伟大的人最后都有答案？不是。
托尔斯泰最厉害的地方，不是他找到了终极答案，而是他不允许自己用一个漂亮答案，把真实矛盾盖过去。

[停顿]

所以这三个人到底有什么共同点？
不是苦难多。全世界苦难多的人太多了。
也不是天赋高。天赋如果不行动，最后也只是一个标签。

他们真正共同的，是一个三步结构：
外部重压。
不屈行动。
创造性转化。

注意，中间那一步不能省。
苦难不会自动让人成长。石头被压一万年还是石头。有人拿起凿子，它才可能变成雕像。

[压低声音]
那这个跟你有什么关系？

关系太大了。
资源突然没了，学贝多芬，看看什么能力已经真正长在你身上。
工作不能选，学米开朗琪罗，至少把标准握在自己手里。
成功了却越来越空，学托尔斯泰，做一个小小的生活实验，让行动靠近信念。

[停顿]

我的观点是，别崇拜苦难。
苦难本身不高贵，也不值得歌颂。

真正值得尊敬的，是一个人看清生活以后，没有把痛苦变成伤害别人的理由，也没有把限制变成放弃自己的借口。

[严肃]
命运给你的可能只是一块石头。
但最后留在这个世界上的，是石头，还是雕像。

这一凿，得你自己来。`
  },
  deep: {
    name: '深度解说',
    title: '《名人传》：苦难、行动与创造性超越',
    summary: '论点清晰、案例完整、节奏沉稳，适合中长视频知识解说。',
    tags: ['结构分析', '案例论证', '现实迁移'],
    outline: ['核心问题', '贝多芬', '米开朗琪罗', '托尔斯泰', '统一模型'],
    text: `《名人传》讨论的并不是名人如何取得成功，而是一个更根本的问题：当人无法摆脱持续而巨大的苦难时，如何不被它彻底定义？

罗曼·罗兰选择了三个人。贝多芬代表身体条件的剥夺，米开朗琪罗代表被迫劳动与权力压迫，托尔斯泰代表现实身份与内在信念的冲突。

贝多芬在创作高峰期逐渐失聪。对音乐家而言，这不是普通疾病，而是核心感官被切断。他的意义并不在于“忍住痛苦”，而在于把痛苦转化成新的表达。《第九交响曲》来自一个无法正常听见的人，却把个人绝境扩展成了全人类对欢乐与团结的想象。

米开朗琪罗面对的是另一种限制。他经常不能选择任务，被教皇、工期和繁重工程反复驱使。但他保留了对作品标准的决定权。西斯廷教堂天顶画因此说明：外部环境可以规定一个人做什么，却不一定能完全规定他做到什么程度。

托尔斯泰的战场位于内部。他已经拥有名望、财富和文学成就，却越来越无法接受生活与信念之间的裂缝。他不断尝试简朴生活、劳动和放弃部分既得利益。那些尝试并不总是成功，但他拒绝用漂亮的理论遮盖真实矛盾。

三个人形成了同一个模型：外部重压、不屈行动、创造性超越。这里最重要的是中间的行动。苦难本身不会自动生成伟大；只有经过选择、实践和长期塑形，它才可能变成作品与精神财富。

因此，《名人传》留给我们的并不是“感谢苦难”，而是三种现实策略：资源被切断时，寻找已经内化的能力；任务无法选择时，守住自己的专业标准；生活与信念冲突时，用一个具体行动检验真正的价值排序。

英雄主义不一定是征服别人。它也可以是在认清限制以后，仍然不停止创造、不停止求真。`
  },
  gentle: {
    name: '温和分享',
    title: '读完《名人传》，我重新理解了“坚强”',
    summary: '第一人称分享、克制真诚、陪伴感强，适合读书账号与播客。',
    tags: ['个人感受', '温和叙事', '陪伴语气'],
    outline: ['阅读感受', '三个触动', '重新理解', '回到自己'],
    text: `最近读《名人传》，我一直在想一个问题：我们为什么会被一些经历过巨大困难的人打动？

可能不是因为他们从不脆弱，而是因为他们也绝望、也矛盾，却没有因此停止创造。

贝多芬逐渐失去听觉。对一个音乐家来说，这几乎是最残酷的事情。但他没有等到痛苦消失以后再创作。他让痛苦进入音乐，最终写出了面向所有人的《欢乐颂》。

米开朗琪罗常常被迫接受自己不喜欢的任务。他不能完全选择工作，却依然选择用最高标准完成它。我很喜欢这个提醒：我们未必总能决定做什么，但还能决定怎样去做。

托尔斯泰拥有世俗意义上的成功，却不断被生活与信念的不一致困扰。他没有轻易给自己一个答案，而是用一生去检验那些相信的道理。

读到这里，我开始觉得，坚强并不是没有痛苦，也不是逼自己永远积极。坚强可能只是承认此刻真的很难，然后仍然做一个微小但诚实的行动。

《名人传》没有让我开始赞美苦难。相反，它让我更认真地区分：苦难是遭遇，成长是选择。两者之间隔着许多次具体行动。

如果你最近也在经历一段不容易的时间，希望这本书能给你一点安静的力量。你不必立刻战胜全部困难。先完成今天这一小步，就已经是在雕刻自己的作品。`
  },
  short: {
    name: '60 秒精简',
    title: '60 秒讲清《名人传》',
    summary: '一句一意、节奏快速、结论前置，适合短视频与开场预告。',
    tags: ['60 秒', '高密度', '强结尾'],
    outline: ['反常识开场', '三个案例', '一个公式', '金句收尾'],
    text: `[提高音量]
《名人传》里这三个人，现实中其实都输了。

贝多芬是音乐家，却失聪了。
米开朗琪罗是艺术家，却一辈子被不喜欢的任务和权力驱使。
托尔斯泰有钱、有名、有地位，却始终解决不了生活与信念的冲突。

[停顿]
但一个写出了《欢乐颂》，一个留下了西斯廷天顶画，另一个写出了《战争与和平》。

为什么？

因为罗曼·罗兰说的伟大，不是条件多好，而是三个步骤：
外部重压，不屈行动，创造性转化。

注意，苦难本身不会让人成长。中间没有行动，石头被压一万年也还是石头。

[严肃]
真正的英雄主义，不是征服别人。
是认清生活以后，仍然不让自己的局限决定作品的上限。

命运给你的是石头，最后留下的是石头还是雕像，这一凿，得你自己来。`
  }
};

// 一次性迁移：早期版本遗留的存储键改名为 jones-*，保留用户已有笔记/进度/草稿
for (const name of ['learning-notes', 'learning-mastered', 'script-style', 'script-drafts']) {
  const oldKey = `james-${name}`;
  const newKey = `jones-${name}`;
  if (localStorage.getItem(newKey) === null && localStorage.getItem(oldKey) !== null) {
    localStorage.setItem(newKey, localStorage.getItem(oldKey));
    localStorage.removeItem(oldKey);
  }
}

const state = {
  notes: JSON.parse(localStorage.getItem('jones-learning-notes') || '[]'),
  mastered: Number(localStorage.getItem('jones-learning-mastered') || 3),
  activeVideoIndex: 0,
  activeAudioIndex: 0,
  page: 1
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function setTab(tab) {
  exitStudy();
  $$('.content-tabs button').forEach((button) => button.classList.toggle('active', button.dataset.tab === tab));
  $$('.tab-panel').forEach((panel) => {
    const active = panel.dataset.panel === tab;
    panel.hidden = !active;
    panel.classList.toggle('active', active);
  });
}

function renderTranscript(container, segments, type) {
  container.innerHTML = segments.map((segment, index) => `
    <button class="transcript-item ${index === 0 ? 'active' : ''}" type="button" data-index="${index}" data-time="${segment.time}">
      <time>${segment.stamp}</time><span>${segment.text}</span>
    </button>`).join('');
  container.querySelectorAll('.transcript-item').forEach((button) => {
    button.addEventListener('click', () => {
      const player = type === 'video' ? $('#videoPlayer') : $('#audioPlayer');
      player.currentTime = Number(button.dataset.time);
      player.play().catch(() => {});
      activateSegment(type, Number(button.dataset.index));
    });
  });
}

function activateSegment(type, index) {
  const container = type === 'video' ? $('#videoTranscript') : $('#audioTranscript');
  container.querySelectorAll('.transcript-item').forEach((item, itemIndex) => item.classList.toggle('active', itemIndex === index));
  const active = container.querySelector('.transcript-item.active');
  active?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  if (type === 'video') {
    state.activeVideoIndex = index;
    renderVideoFeynman();
  } else {
    state.activeAudioIndex = index;
  }
}

function syncTranscript(player, segments, type) {
  player.addEventListener('timeupdate', () => {
    let index = 0;
    segments.forEach((segment, candidate) => { if (player.currentTime >= segment.time) index = candidate; });
    const key = type === 'video' ? 'activeVideoIndex' : 'activeAudioIndex';
    if (state[key] !== index) activateSegment(type, index);
  });
}

function renderVideoFeynman() {
  const segment = videoSegments[state.activeVideoIndex];
  $('#videoFeynman').innerHTML = `
    <span class="explain-kicker">费曼解释 · ${segment.stamp}</span>
    <h3>${segment.title}</h3>
    <p>${segment.simple}</p>
    <blockquote><strong>生活类比</strong><br>${segment.analogy}</blockquote>
    <p class="key-idea"><strong>关键公式：</strong> 苦难 + 主动行动 = 可能发生的精神转化</p>`;
}

function addNote(source, text) {
  const note = { id: Date.now(), source, text, time: new Date().toLocaleString('zh-CN', { hour12: false }) };
  state.notes.unshift(note);
  localStorage.setItem('jones-learning-notes', JSON.stringify(state.notes));
  renderNotes();
  showToast('已加入学习笔记');
}

function renderNotes() {
  $('#noteCount').textContent = state.notes.length;
  $('#notesList').innerHTML = state.notes.length ? state.notes.map((note) => `
    <article class="note-card"><small>${note.source} · ${note.time}</small><p>${note.text}</p></article>`).join('') :
    '<div class="empty-notes"><span>✎</span><h3>还没有笔记</h3><p>在视频、音频或 PDF 学习时，把真正触动你的片段留下来。</p></div>';
}

function updatePage(page) {
  state.page = Math.min(11, Math.max(1, Number(page) || 1));
  $('#pageInput').value = state.page;
  $('#pdfPage').src = `assets/pdf-pages/page-${String(state.page).padStart(2, '0')}.jpg`;
  $('#pdfPage').alt = `《名人传：苦难炼金术》第 ${state.page} 页`;
  const data = pageExplanations[state.page - 1];
  $('#pageBadge').textContent = `P. ${String(state.page).padStart(2, '0')}`;
  $('#pageTitle').textContent = data.title;
  $('#pageSimple').textContent = data.simple;
  $('#pageAnalogy').textContent = data.analogy;
  $('#pageWhy').textContent = data.why;
  $('#pageQuestion').textContent = data.question;
  $('#teachbackInput').value = '';
}

function updateProgress() {
  const percent = Math.round((state.mastered / 9) * 100);
  $('#masteredCount').textContent = state.mastered;
  $('#progressRing').style.background = `conic-gradient(var(--red) 0 ${percent}%, #d8d3cb ${percent}%)`;
  $('#progressRing strong').textContent = `${percent}%`;
  $('#sideProgress').style.width = `${percent}%`;
}

let activeScriptStyle = localStorage.getItem('jones-script-style') || 'baoliao';
let scriptDrafts = JSON.parse(localStorage.getItem('jones-script-drafts') || '{}');

function updateScriptStats() {
  const content = $('#scriptContent').value;
  const chars = content.replace(/\s/g, '').length;
  $('#scriptChars').textContent = chars;
  $('#scriptDuration').textContent = Math.max(1, Math.round((chars / 260) * 10) / 10);
}

function saveScriptDraft() {
  scriptDrafts[activeScriptStyle] = $('#scriptContent').value;
  localStorage.setItem('jones-script-drafts', JSON.stringify(scriptDrafts));
  $('#scriptSaveState').textContent = '本地草稿 · 已保存';
  updateScriptStats();
}

function renderScriptProfile(style, preserveCurrent = true) {
  if (preserveCurrent && $('#scriptContent').value) saveScriptDraft();
  activeScriptStyle = style;
  localStorage.setItem('jones-script-style', style);
  const profile = scriptProfiles[style];
  $('#scriptStyle').value = style;
  $('#scriptTitle').textContent = profile.title;
  $('#styleSummary').innerHTML = `<strong>${profile.name}</strong><p>${profile.summary}</p><div>${profile.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>`;
  $('#scriptOutline').innerHTML = profile.outline.map((item) => `<li>${item}</li>`).join('');
  $('#scriptContent').value = scriptDrafts[style] || profile.text;
  $('#scriptSaveState').textContent = scriptDrafts[style] ? '本地草稿 · 已恢复' : '默认稿 · 未修改';
  updateScriptStats();
}

renderTranscript($('#videoTranscript'), videoSegments, 'video');
renderTranscript($('#audioTranscript'), audioSegments, 'audio');
renderVideoFeynman();
renderNotes();
updatePage(1);
updateProgress();
renderScriptProfile(activeScriptStyle, false);
syncTranscript($('#videoPlayer'), videoSegments, 'video');
syncTranscript($('#audioPlayer'), audioSegments, 'audio');

$$('.content-tabs button').forEach((button) => button.addEventListener('click', () => setTab(button.dataset.tab)));
$$('[data-notice]').forEach((button) => button.addEventListener('click', () => showToast(button.dataset.notice)));
$$('[data-open-tab]').forEach((button) => button.addEventListener('click', () => setTab(button.dataset.openTab)));
$$('[data-video-time]').forEach((button) => button.addEventListener('click', () => {
  $('#videoPlayer').currentTime = Number(button.dataset.videoTime);
  $('#videoPlayer').play().catch(() => {});
  $$('[data-video-time]').forEach((item) => item.classList.toggle('active', item === button));
}));

$$('[data-side-tab]').forEach((button) => button.addEventListener('click', () => {
  $$('[data-side-tab]').forEach((item) => item.classList.toggle('active', item === button));
  const isFeynman = button.dataset.sideTab === 'feynman';
  $('#videoTranscript').hidden = isFeynman;
  $('#videoFeynman').hidden = !isFeynman;
}));

$('#explainVideoBtn').addEventListener('click', () => {
  $$('[data-side-tab]').forEach((item) => item.classList.toggle('active', item.dataset.sideTab === 'feynman'));
  $('#videoTranscript').hidden = true;
  $('#videoFeynman').hidden = false;
});
$('#saveVideoNote').addEventListener('click', () => addNote(`视频 ${videoSegments[state.activeVideoIndex].stamp}`, videoSegments[state.activeVideoIndex].text));
$('#saveAudioNote').addEventListener('click', () => addNote(`音频 ${audioSegments[state.activeAudioIndex].stamp}`, audioSegments[state.activeAudioIndex].text));
$('#audioSummaryBtn').addEventListener('click', () => {
  const segment = audioSegments[state.activeAudioIndex];
  addNote(`音频费曼解释 ${segment.stamp}`, `这段的核心不是赞美吃苦，而是区分“遭遇限制”和“主动转化”。请继续追问：我能采取的最小行动是什么？`);
  setTab('notes');
});
$('#prevPage').addEventListener('click', () => updatePage(state.page - 1));
$('#nextPage').addEventListener('click', () => updatePage(state.page + 1));
$('#pageInput').addEventListener('input', (event) => updatePage(event.target.value));
$('#checkAnswer').addEventListener('click', () => {
  const answer = $('#teachbackInput').value.trim();
  if (answer.length < 12) return showToast('再多讲一点，用自己的话说清因果关系');
  addNote(`PDF 第 ${state.page} 页 · 我的复述`, answer);
  showToast('复述已保存，这一页已标记为理解');
});
$('#completeBtn').addEventListener('click', () => {
  if (state.mastered < 9) state.mastered += 1;
  localStorage.setItem('jones-learning-mastered', state.mastered);
  updateProgress();
  showToast('本节已标记为理解');
});
$('#clearNotes').addEventListener('click', () => {
  state.notes = [];
  localStorage.removeItem('jones-learning-notes');
  renderNotes();
  showToast('案例笔记已清空');
});
$('#focusBtn').addEventListener('click', () => document.body.classList.toggle('focus-mode'));
$('#scriptStyle').addEventListener('change', (event) => renderScriptProfile(event.target.value));
$('#scriptContent').addEventListener('input', () => {
  $('#scriptSaveState').textContent = '本地草稿 · 保存中';
  updateScriptStats();
  clearTimeout(saveScriptDraft.timer);
  saveScriptDraft.timer = setTimeout(saveScriptDraft, 350);
});
$('#resetScript').addEventListener('click', () => {
  delete scriptDrafts[activeScriptStyle];
  localStorage.setItem('jones-script-drafts', JSON.stringify(scriptDrafts));
  $('#scriptContent').value = scriptProfiles[activeScriptStyle].text;
  $('#scriptSaveState').textContent = '默认稿 · 已恢复';
  updateScriptStats();
  showToast('已恢复当前风格的默认稿');
});
$('#copyScript').addEventListener('click', async () => {
  const content = $('#scriptContent').value;
  try {
    await navigator.clipboard.writeText(content);
  } catch (_) {
    $('#scriptContent').select();
    document.execCommand('copy');
  }
  showToast('口播稿已复制');
});
$('#downloadScript').addEventListener('click', () => {
  const profile = scriptProfiles[activeScriptStyle];
  const blob = new Blob([$('#scriptContent').value], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `名人传-${profile.name}-口播稿.txt`;
  link.click();
  URL.revokeObjectURL(url);
  showToast('TXT 已导出');
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') document.body.classList.remove('focus-mode');
});

function registerLearningTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const register = (tool) => {
    try { void Promise.resolve(context.registerTool(tool)).catch(() => {}); } catch (_) {}
  };

  register({
    name: 'open_learning_mode',
    title: '打开学习模式',
    description: '切换《名人传》的概览、视频、音频、PDF、笔记或口播输出界面。',
    inputSchema: {
      type: 'object',
      properties: { mode: { type: 'string', enum: ['overview', 'video', 'audio', 'pdf', 'notes', 'script'] } },
      required: ['mode'],
      additionalProperties: false
    },
    annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute({ mode }) {
      setTab(mode);
      return { mode, book: '名人传' };
    }
  });

  register({
    name: 'save_learning_note',
    title: '保存学习笔记',
    description: '把一条用户提供的内容保存到《名人传》的本地学习笔记。',
    inputSchema: {
      type: 'object',
      properties: {
        source: { type: 'string', minLength: 1, maxLength: 80 },
        text: { type: 'string', minLength: 1, maxLength: 2000 }
      },
      required: ['source', 'text'],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute({ source, text }) {
      if (!source?.trim() || !text?.trim()) throw new Error('来源和笔记内容不能为空');
      addNote(source.trim(), text.trim());
      return { saved: true, noteCount: state.notes.length };
    }
  });
}

registerLearningTools();

let serverBooks = [];
let studyOpen = false;

function esc(value) {
  const div = document.createElement('div');
  div.textContent = String(value ?? '');
  return div.innerHTML;
}

function formatSize(bytes) {
  if (typeof bytes !== 'number') return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function mediaBlockHtml(f) {
  const head = `<div class="media-block-head"><h4>${esc(f.name)}</h4><small>${formatSize(f.size)} · <a href="${f.url}" target="_blank" rel="noopener">新窗口打开</a></small></div>`;
  if (f.kind === 'video') return `<div class="media-block">${head}<video controls preload="none" data-src="${f.url}"></video></div>`;
  if (f.kind === 'audio') return `<div class="media-block">${head}<audio controls preload="none" data-src="${f.url}"></audio></div>`;
  if (f.kind === 'pdf') return `<div class="media-block">${head}<iframe class="pdf-frame" data-src="${f.url}" title="${esc(f.name)}"></iframe></div>`;
  if (f.kind === 'image') return `<div class="media-block">${head}<img class="media-image" src="${f.url}" alt="${esc(f.name)}" loading="lazy" /></div>`;
  return `<div class="media-block">${head}<p class="book-files-hint">浏览器无法直接预览此格式，请用「新窗口打开」下载后查看。</p></div>`;
}

function bookToMarkdown(book) {
  const lines = [`# ${book.positioning.title}`, '', `> ${book.positioning.oneLiner}`, ''];
  lines.push(`**作者**：${book.positioning.author}　**领域**：${book.positioning.field}`, '');
  lines.push('## 核心命题', book.coreProposition.mainTitle, ...book.coreProposition.explanation.map((p) => `\n${p}`), '');
  lines.push('## 主题模块');
  book.modules.forEach((m) => { lines.push(`\n### ${m.title}`, ...m.cards.map((c) => `- ${c}`)); });
  lines.push('', '## 读书流水线拆书', `核心问题：${book.readingPipeline.coreQuestion}`);
  ['keyModels: 关键模型', 'keyCases: 关键案例', 'transferScenarios: 迁移场景', 'actionChecklist: 行动清单', 'alphaNotes: Alpha 笔记'].forEach((pair) => {
    const [key, label] = pair.split(': ');
    lines.push(`\n**${label}**`, ...book.readingPipeline[key].map((c) => `- ${c}`));
  });
  lines.push('', '## 阅读后可直接带走的结论', ...book.conclusions.remember.map((c) => `- ${c}`), '', `现实用法：${book.conclusions.practicalUse}`);
  lines.push('', '## 费曼学习解释', ...book.feynmanExplanation.authorContext.map((p) => `\n${p}`));
  book.feynmanExplanation.explanationAngles.forEach((a) => lines.push(`\n### ${a.title}`, a.explanation));
  lines.push('', `一句话总结：${book.feynmanExplanation.oneSentenceSummary}`);
  return lines.join('\n');
}

function bookContentHtml(book) {
  const cp = book.coreProposition;
  const fe = book.feynmanExplanation;
  const rp = book.readingPipeline;
  return `
    <section class="overview-grid">
      <article class="overview-main">
        <p class="section-label">核心命题</p>
        <h2>${esc(cp.mainTitle)}</h2>
        ${cp.explanation.map((p) => `<p>${esc(p)}</p>`).join('')}
        <blockquote>${esc(fe.oneSentenceSummary)}</blockquote>
      </article>
      <div class="three-models">
        ${book.modules.slice(0, 3).map((m, i) => `<article><span>${String(i + 1).padStart(2, '0')}</span><h3>${esc(m.title)}</h3><p>${esc(m.cards[0] || '')}</p>${m.cards.length > 1 ? `<b>${esc(m.cards.slice(1).join(' · '))}</b>` : ''}</article>`).join('')}
      </div>
    </section>
    ${book.modules.slice(3).map((m, i) => `<section class="book-section"><p class="section-label">主题模块 ${String(i + 4).padStart(2, '0')}</p><h4>${esc(m.title)}</h4><ul>${m.cards.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></section>`).join('')}
    <section class="book-section feynman"><p class="section-label">费曼学习解释</p>${fe.authorContext.map((p) => `<p class="feynman-context">${esc(p)}</p>`).join('')}${fe.explanationAngles.map((a) => `<h5>${esc(a.title)}</h5><p>${esc(a.explanation)}</p>`).join('')}</section>
    <section class="book-section"><p class="section-label">行动清单</p><ul>${rp.actionChecklist.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></section>
    <section class="book-section"><p class="section-label">带走的结论</p><ul>${book.conclusions.remember.map((c) => `<li>${esc(c)}</li>`).join('')}</ul><p>${esc(book.conclusions.practicalUse)}</p></section>`;
}

function playlistButtons(files, kind) {
  return files.map((f, i) => `<button class="transcript-item${i === 0 ? ' active' : ''}" type="button" data-play="${kind}" data-src="${f.url}" data-title="${esc(f.name)}"><time>${String(i + 1).padStart(2, '0')}</time><span>${esc(f.name)}</span></button>`).join('');
}

function studyVideoHtml(videos) {
  return `<section class="media-learning-layout">
    <div class="media-column">
      <div class="video-frame"><video id="studyVideo" controls preload="none" data-src="${videos[0].url}"></video></div>
      <div class="media-heading"><div><p class="section-label">视频解析</p><h2 id="studyVideoTitle">${esc(videos[0].name)}</h2></div><span class="demo-label">书本文件夹</span></div>
    </div>
    <aside class="learning-panel">
      <div class="panel-tabs"><button class="active" type="button">视频列表</button><span class="demo-label">${videos.length} 个</span></div>
      <div class="transcript-list">${playlistButtons(videos, 'video')}</div>
    </aside>
  </section>`;
}

function studyAudioHtml(audios, book) {
  return `<section class="audio-layout">
    <div class="audio-stage">
      <div class="audio-art"><span>有声精读</span><strong>${esc(book.positioning.title)}</strong><small>${esc(book.positioning.author)}</small></div>
      <div class="audio-meta"><p class="section-label">音频精读</p><h2 id="studyAudioTitle">${esc(audios[0].name)}</h2><p>点击右侧列表切换音频。</p></div>
      <audio id="studyAudio" controls preload="none" data-src="${audios[0].url}"></audio>
    </div>
    <aside class="learning-panel audio-transcript-panel">
      <div class="panel-tabs"><button class="active" type="button">音频列表</button><span class="demo-label">${audios.length} 个</span></div>
      <div class="transcript-list">${playlistButtons(audios, 'audio')}</div>
    </aside>
  </section>`;
}

function studyPdfHtml(pdfs, book) {
  return `<section class="pdf-layout">
    <div class="pdf-toolbar">
      <div><p class="section-label">PDF 阅读器</p><h2 id="studyPdfTitle">${esc(pdfs[0].name)}</h2></div>
      <div class="pdf-tools"><a id="studyPdfLink" href="${pdfs[0].url}" target="_blank" rel="noopener">打开原始 PDF</a></div>
    </div>
    <div class="pdf-reader"><iframe id="studyPdf" title="${esc(pdfs[0].name)}" data-src="${pdfs[0].url}"></iframe></div>
    <aside class="page-explanation">
      <div class="explanation-head"><span class="page-badge">费曼</span><div><p class="section-label">本书费曼解释</p><h2>${esc(book.coreProposition.mainTitle)}</h2></div></div>
      <div class="explain-block"><h3>一句话总结</h3><p>${esc(book.feynmanExplanation.oneSentenceSummary)}</p></div>
      <div class="explain-block analogy"><h3>行动清单</h3><p>${esc(book.readingPipeline.actionChecklist.slice(0, 3).join(' '))}</p></div>
      ${pdfs.length > 1 ? `<div class="transcript-list">${playlistButtons(pdfs, 'pdf')}</div>` : ''}
    </aside>
  </section>`;
}

function wirePlaylist(scope, kind) {
  const buttons = scope.querySelectorAll(`[data-play="${kind}"]`);
  if (!buttons.length) return;
  const player = scope.querySelector(kind === 'video' ? '#studyVideo' : kind === 'audio' ? '#studyAudio' : '#studyPdf');
  const title = scope.querySelector(kind === 'video' ? '#studyVideoTitle' : kind === 'audio' ? '#studyAudioTitle' : '#studyPdfTitle');
  const link = scope.querySelector('#studyPdfLink');
  buttons.forEach((btn) => btn.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.toggle('active', b === btn));
    if (player) player.src = btn.dataset.src;
    if (title) title.textContent = btn.dataset.title || '';
    if (link) link.href = btn.dataset.src;
    if (player && kind !== 'pdf') player.play().catch(() => {});
  }));
}

function openStudy(entry) {
  const { book } = entry;
  const files = Array.isArray(entry.files) ? entry.files : [];
  const groups = {};
  files.forEach((f) => { (groups[f.kind] = groups[f.kind] || []).push(f); });
  const others = [...(groups.doc || []), ...(groups.image || [])];
  const tabs = [{ id: 'content', label: '全书概览', panel: bookContentHtml(book) + `<p class="book-files-hint folder-tip">把视频、音频、PPT、PDF 放进 <code>书本/${esc(entry.folder || '')}/</code> 文件夹，刷新后这里就会出现对应的学习栏目。</p>` }];
  if ((groups.video || []).length) tabs.push({ id: 'video', label: `视频学习 ${groups.video.length}`, panel: studyVideoHtml(groups.video) });
  if ((groups.audio || []).length) tabs.push({ id: 'audio', label: `音频精读 ${groups.audio.length}`, panel: studyAudioHtml(groups.audio, book) });
  if ((groups.pdf || []).length) tabs.push({ id: 'pdf', label: `PDF 阅读 ${groups.pdf.length}`, panel: studyPdfHtml(groups.pdf, book) });
  if (others.length) tabs.push({ id: 'others', label: `文档图片 ${others.length}`, panel: others.map(mediaBlockHtml).join('') });
  $('#studyCrumbTitle').textContent = book.positioning.title;
  $('#studyIntro').innerHTML = `
    <div class="book-cover">
      <span class="cover-kicker">${esc(book.positioning.author)}</span>
      <strong>${esc(book.positioning.title)}</strong>
      <span class="cover-rule"></span>
      <small>${esc(book.positioning.field)}</small>
    </div>
    <div class="intro-copy">
      <p class="eyebrow">${esc(book.positioning.field)}</p>
      <h1>${esc(book.positioning.title)}</h1>
      <p class="author">${esc(book.positioning.author)}</p>
      <p class="thesis">${esc(book.positioning.oneLiner)}</p>
      <div class="asset-status">
        ${(groups.video || []).length ? `<span><i class="status-video"></i>视频 ${groups.video.length}</span>` : ''}
        ${(groups.audio || []).length ? `<span><i class="status-audio"></i>音频 ${groups.audio.length}</span>` : ''}
        ${(groups.pdf || []).length ? `<span><i class="status-pdf"></i>PDF ${groups.pdf.length}</span>` : ''}
        <span><i class="status-ai"></i>费曼解析</span>
      </div>
    </div>`;
  $('#studyTabs').innerHTML = tabs.map((t, i) => `<button type="button" class="${i === 0 ? 'active' : ''}" data-study-tab="${t.id}">${esc(t.label)}</button>`).join('');
  $('#studyPanels').innerHTML = tabs.map((t, i) => `<div class="study-panel" data-study-panel="${t.id}"${i === 0 ? '' : ' hidden'}>${t.panel}</div>`).join('');
  const activate = (id) => {
    $$('#studyTabs [data-study-tab]').forEach((b) => b.classList.toggle('active', b.dataset.studyTab === id));
    $$('#studyPanels [data-study-panel]').forEach((p) => { p.hidden = p.dataset.studyPanel !== id; });
    const panel = $(`#studyPanels [data-study-panel="${id}"]`);
    if (panel) panel.querySelectorAll('[data-src]').forEach((el) => { el.src = el.dataset.src; el.removeAttribute('data-src'); });
  };
  $$('#studyTabs [data-study-tab]').forEach((b) => b.addEventListener('click', () => activate(b.dataset.studyTab)));
  ['video', 'audio', 'pdf'].forEach((kind) => {
    const panel = $(`#studyPanels [data-study-panel="${kind}"]`);
    if (panel) wirePlaylist(panel, kind);
  });
  $('#exportStudyMd').onclick = () => {
    const blob = new Blob([bookToMarkdown(book)], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${book.positioning.title}-拆书笔记.md`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Markdown 已导出');
  };
  studyOpen = true;
  document.body.classList.add('study-mode');
  $('#studyView').hidden = false;
  window.scrollTo(0, 0);
}

function exitStudy() {
  if (!studyOpen) return;
  studyOpen = false;
  document.body.classList.remove('study-mode');
  $('#studyView').hidden = true;
}

$('#backToLibrary').addEventListener('click', () => {
  exitStudy();
  setTab('library');
});

function renderLibraryList() {
  $('#libraryList').innerHTML = serverBooks.length
    ? serverBooks.map((entry, index) => `
      <div class="library-item">
        <button class="library-item-main" type="button" data-book-index="${index}">
          <strong>${esc(entry.book.positioning.title)}</strong>
          <small>${esc(entry.book.positioning.author)} · ${esc(entry.savedAt || '')}${entry.files && entry.files.length ? ` · ${entry.files.length} 个资料` : ''}</small>
        </button>
        <button class="library-item-del" type="button" data-del-index="${index}" aria-label="删除">✕</button>
      </div>`).join('')
    : '<div class="empty-notes"><span>▦</span><h3>书库还是空的</h3><p>输入一个书名开始拆书，每拆成一本书，服务器会在「书本/」目录下生成这本书专属的文件夹，媒体资料直接放进文件夹即可。</p></div>';
  $$('.library-item-main').forEach((button) => button.addEventListener('click', () => {
    openStudy(serverBooks[Number(button.dataset.bookIndex)]);
  }));
  $$('.library-item-del').forEach((button) => button.addEventListener('click', async () => {
    const entry = serverBooks[Number(button.dataset.delIndex)];
    if (!confirm(`移除《${entry.book.positioning.title}》的拆书记录？文件夹里的视频/音频等资料会保留。`)) return;
    try {
      const response = await fetch(`/api/books?dir=${encodeURIComponent(entry.folder)}`, { method: 'DELETE' });
      if (!response.ok) throw new Error((await response.json()).error || `请求失败（${response.status}）`);
      await loadLibrary();
      showToast('拆书记录已移除，文件夹资料已保留');
    } catch (error) {
      showToast(`移除失败：${error.message}`);
    }
  }));
}

async function loadLibrary() {
  const legacy = JSON.parse(localStorage.getItem('jones-library') || '[]');
  if (legacy.length) {
    try {
      const entries = legacy
        .map((e) => (e && e.book ? { book: fixBook(e.book), savedAt: e.savedAt } : null))
        .filter((e) => e && e.book.positioning.title.trim());
      await fetch('/api/books/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entries })
      });
      localStorage.removeItem('jones-library');
    } catch {
      // 导入失败时保留本地数据，下次打开页面重试
    }
  }
  try {
    const response = await fetch('/api/books');
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || `请求失败（${response.status}）`);
    serverBooks = (payload.books || []).filter((entry) => entry.book && entry.book.positioning);
  } catch (error) {
    serverBooks = [];
    $('#libraryStatus').textContent = `书库加载失败：${error.message}`;
  }
  renderLibraryList();
}

const PROVIDERS = {
  gemini: { label: 'Gemini', keyName: 'jones-parse-key-gemini', envName: 'GEMINI_API_KEY' },
  deepseek: { label: 'DeepSeek', keyName: 'jones-parse-key-deepseek', envName: 'DEEPSEEK_API_KEY' }
};

function getProvider() {
  return localStorage.getItem('jones-parse-provider') || 'gemini';
}

if (!localStorage.getItem('jones-parse-key-gemini') && localStorage.getItem('jones-gemini-key')) {
  localStorage.setItem('jones-parse-key-gemini', localStorage.getItem('jones-gemini-key'));
  localStorage.removeItem('jones-gemini-key');
}

function getParseKey() {
  return localStorage.getItem(PROVIDERS[getProvider()].keyName) || '';
}

function updateKeyState() {
  const provider = PROVIDERS[getProvider()];
  $('#parseProvider').value = getProvider();
  $('#geminiKeyInput').placeholder = `粘贴你的 ${provider.label} API Key（仅保存在本机浏览器，不会上传到任何服务器文件）`;
  const key = getParseKey();
  $('#keyState').textContent = key
    ? `已保存 ${provider.label} Key（尾号 ${key.slice(-4)}），拆书将优先使用它。`
    : `未保存 ${provider.label} Key：将回退到服务器环境变量 ${provider.envName}（如果有的话）。`;
}

$('#parseProvider').addEventListener('change', () => {
  localStorage.setItem('jones-parse-provider', $('#parseProvider').value);
  updateKeyState();
});

$('#saveKeyBtn').addEventListener('click', () => {
  const key = $('#geminiKeyInput').value.trim();
  if (!key) return showToast('请先粘贴 API Key');
  localStorage.setItem(PROVIDERS[getProvider()].keyName, key);
  $('#geminiKeyInput').value = '';
  updateKeyState();
  showToast(`${PROVIDERS[getProvider()].label} Key 已保存在本机浏览器`);
});

$('#clearKeyBtn').addEventListener('click', () => {
  localStorage.removeItem(PROVIDERS[getProvider()].keyName);
  updateKeyState();
  showToast(`已清除本机保存的 ${PROVIDERS[getProvider()].label} Key`);
});

updateKeyState();

function asText(item) {
  if (typeof item === 'string') return item.trim();
  if (Array.isArray(item)) return item.map(asText).filter(Boolean).join('；');
  if (item && typeof item === 'object') return Object.values(item).map(asText).filter(Boolean).join('：');
  return '';
}

function asArr(value) {
  if (Array.isArray(value)) return value.map(asText).filter(Boolean);
  if (typeof value === 'string') return value.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  if (value == null) return [];
  return [String(value)];
}

function fixBook(book) {
  if (!book || typeof book !== 'object') return null;
  book.positioning = typeof book.positioning === 'object' && book.positioning ? book.positioning : { title: String(book.positioning || '') };
  const cp = (book.coreProposition = typeof book.coreProposition === 'object' && book.coreProposition ? book.coreProposition : { mainTitle: String(book.coreProposition || '') });
  cp.explanation = asArr(cp.explanation);
  const rawModules = Array.isArray(book.modules) ? book.modules : asArr(book.modules);
  book.modules = rawModules.map((m) => {
    if (typeof m === 'string') return { title: m, cards: [] };
    if (m && typeof m === 'object') {
      const title = String(m.title ?? '');
      const cards = asArr(m.cards);
      return title || cards.length ? { title, cards } : { title: asText(m), cards: [] };
    }
    return null;
  }).filter(Boolean);
  const co = (book.conclusions = typeof book.conclusions === 'object' && book.conclusions ? book.conclusions : {});
  co.remember = asArr(co.remember);
  co.practicalUse = String(co.practicalUse ?? '');
  const fe = (book.feynmanExplanation = typeof book.feynmanExplanation === 'object' && book.feynmanExplanation ? book.feynmanExplanation : {});
  fe.authorContext = asArr(fe.authorContext);
  const rawAngles = Array.isArray(fe.explanationAngles) ? fe.explanationAngles : asArr(fe.explanationAngles);
  fe.explanationAngles = rawAngles.map((a) => {
    if (typeof a === 'string') return { title: '', explanation: a };
    if (a && typeof a === 'object') {
      const title = String(a.title ?? '');
      const explanation = String(a.explanation ?? '');
      return title || explanation ? { title, explanation } : { title: '', explanation: asText(a) };
    }
    return null;
  }).filter(Boolean);
  fe.oneSentenceSummary = String(fe.oneSentenceSummary ?? '');
  const rp = (book.readingPipeline = typeof book.readingPipeline === 'object' && book.readingPipeline ? book.readingPipeline : {});
  rp.coreQuestion = String(rp.coreQuestion ?? '');
  for (const key of ['keyModels', 'keyCases', 'transferScenarios', 'actionChecklist', 'alphaNotes']) rp[key] = asArr(rp[key]);
  return book;
}

$('#parseForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = $('#parseTitle').value.trim();
  if (!title) return showToast('请先输入书名');
  if (serverBooks.some((entry) => entry.book.positioning.title === title)) {
    setTab('library');
    return showToast('这本书已经在书库里了，点击下方列表查看');
  }
  $('#parseBtn').disabled = true;
  $('#libraryStatus').textContent = `正在拆解《${title}》……模型生成需要一点时间，请稍候。`;
  try {
    const response = await fetch('/api/parse-book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-parse-key': getParseKey(), 'x-parse-provider': getProvider() },
      body: JSON.stringify({ title })
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || `请求失败（${response.status}）`);
    const book = fixBook(payload.book);
    if (!book || !book.positioning.title.trim()) throw new Error('模型返回内容不完整（缺少书籍标题），请重试');
    await loadLibrary();
    const entry = serverBooks.find((e) => e.folder === payload.folder)
      || { book, savedAt: new Date().toLocaleDateString('zh-CN'), folder: payload.folder || '', files: [] };
    openStudy(entry);
    $('#libraryStatus').textContent = `拆解完成（模型：${payload.model}）。`;
    $('#parseTitle').value = '';
  } catch (error) {
    $('#libraryStatus').textContent = `拆书失败：${error.message}`;
  } finally {
    $('#parseBtn').disabled = false;
  }
});

$('#clearLibrary').addEventListener('click', async () => {
  if (!serverBooks.length) return showToast('书库已经是空的');
  if (!confirm('清空书库？服务器上的拆书记录会被删除，书本文件夹里的视频/音频等媒体资料会保留。')) return;
  for (const entry of serverBooks) {
    try {
      await fetch(`/api/books?dir=${encodeURIComponent(entry.folder)}`, { method: 'DELETE' });
    } catch {
      // 单个删除失败不阻断整体清空
    }
  }
  $('#libraryResults').innerHTML = '';
  await loadLibrary();
  showToast('书库已清空');
});

loadLibrary();
