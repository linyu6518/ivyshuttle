
import React from 'react';
import { NavItem, Article, Event, Program, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: { zh: '首页', en: 'Home' }, path: '/' },
  { id: 'insights', label: { zh: '我们观点', en: 'Insights' }, path: '/insights' },
  { id: 'events', label: { zh: '活动讲座', en: 'Events' }, path: '/events' },
  { id: 'programs', label: { zh: '项目中心', en: 'Programs' }, path: '/programs' },
  { id: 'ischoolx', label: { zh: 'iSchoolX系统', en: 'iSchoolX' }, path: '/ischoolx' },
  { id: 'resources', label: { zh: '资源中心', en: 'Resources' }, path: '/resources' },
  { id: 'about', label: { zh: '关于我们', en: 'About' }, path: '/about' },
  { id: 'contact', label: { zh: '联系我们', en: 'Contact' }, path: '/contact' },
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: { 
      zh: '真正的学习从"尊重自己的生物生长力"开始', 
      en: 'True Learning Begins with "Respecting One\'s Biological Growth Power"' 
    },
    summary: { 
      zh: '真正的学习，从"尊重自己的生物生长力"开始。当一个学生按照自己的节奏，把一个想法真正做成一个"有型成果"时，他会在无意识中装配一台属于自己的"输出与完成发动机"。', 
      en: 'True learning begins with respecting one\'s biological growth power. When a student follows their own rhythm and turns an idea into a tangible outcome, they unconsciously assemble their own "output and completion engine."' 
    },
    date: '2026-01-03',
    category: { zh: '校长分享', en: 'Principal\'s Insights' },
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200',
    content: {
      zh: `从生物节奏到实操发动机：一个学生如何在"把热爱做成作品"的过程中，装配自己的成长操作系统

很多人谈起学习、热爱、创造性时，习惯用一些听起来很美的词：
• 兴趣
• 自信
• 好奇心
• 创造力

但在真实成长中，这些东西并不会自动发生，它们也不是靠"被激发"就能出现的心理状态。它们只会在一个极其具体、却常被忽视的过程中出现——当一个学生，按照自己的节奏，把一个想法真正做成一个"有型成果"时。

一、真正的学习，一定从"尊重自己的生物生长力"开始

在原会议里，有一个非常重要却容易被忽略的事实：
• 项目没有被催促
• 时间被允许自然拉长
• 完成节奏完全由学生自己掌握

这不是放任，而是对个体生物生长力的尊重。每一个学生的认知成熟、表达欲望、行动耐力，都有自己的节律。一旦外部节奏强行压过内部节奏：
• mental faculty 会失调
• physical faculty 会被压缩
• 行动意愿会转化为逃避

真正的学习，不是快，而是"刚好"。

二、从想法到有型成果，是一次"精密零件的协调实验"

当一个学生尝试把热爱从"想法"推进到"作品"，他会第一次真实地经历一种以前从未经历过的状态：我的大脑、我的身体、我的判断、我的情绪，必须同时工作，否则事情就无法完成。

这是一个高度精密的协调过程：
• mental faculty 脑力：
  - 想清楚要表达什么
  - 判断哪里不成立
  - 决定是否值得继续打磨
• physical faculty 体力：
  - 实际操作工具
  - 反复修改
  - 坚持把事情做到"完成态"

这些能力在"听课"中是彼此分离的，只有在实操中才会被迫咬合在一起。

三、完成一个作品，本质是在装配一台"个人实操发动机"

当一个学生第一次把一个作品真正完成，他并不只是"多了一个成果"。他在无意识中，完成了三件极其重要的事情：
1. 装配了一台属于自己的"输出与完成发动机"
2. 验证了自己可以把抽象想法变成现实结果
3. 建立了"我可以再来一次"的内在确信

这台发动机不是抽象概念，而是一套真实存在的能力组合：
• 启动能力
• 推进能力
• 抵抗中断的能力
• 把事情推到终点的能力

四、从"信心、好奇、热爱"到"信心力、好奇力、热爱力"

很多人以为：
• 信心是情绪
• 好奇是性格
• 热爱是天赋

但在真实成长路径中，它们都会发生一次本质跃迁。一旦实操发动机形成：
• 信心不再是"我觉得我行"，而是"我做成过，我还能再做"——信心力
• 好奇不再是"我感兴趣"，而是"我知道怎么把兴趣推进成成果"——好奇力
• 热爱不再是"我喜欢"，而是"我愿意长期投入并不断升级"——热爱力

👉 这些"力"，全部来自完成，而不是感觉。

五、为什么大多数人"有创造意识"，却没有创造力

现实中有一个残酷现象：很多人一辈子都觉得自己"有创造性"，但几乎从未真正创造过什么。原因只有一个：
• 创造性停留在意识和概念层
• 从未经历过完整的"想法 → 想法创制 → 完成"循环

只有经历过完成的人，才尝到过哪怕一点点创造力的甜头。那种甜头不是掌声，而是："原来我真的可以，把不存在的东西带到世界上。"

六、输出与完成操作系统，是创造力成长的唯一核心

创造力不是灵感密度，而是一个可持续运行的系统。
• 能不断启动
• 能不断完成
• 能不断升级输出质量

这套系统一旦形成，成长将进入跃迁阶段：
• 每一次完成，都会让下一次更容易
• 每一次升级，都会让标准自动提高
• 每一次输出，都会重塑个体的自我认知

结语：真正的教育，是帮助学生装配那台"会越跑越快的发动机"

教育最重要的事情，从来不是把孩子"教好"，而是：在合适的节奏里，让他亲手装配出那台属于自己的——输出、完成、创造的实操发动机。

一旦这台发动机启动，它将不再需要外力推动。学生会自己前进，自己升级，自己成长。而这，才是学习真正发生的地方。`,
      en: `From Biological Rhythm to Practical Engine: How a Student Assembles Their Growth Operating System in the Process of "Turning Passion into Work"

Many people talk about learning, passion, and creativity using beautiful-sounding words:
• Interest
• Confidence
• Curiosity
• Creativity

But in real growth, these things don't happen automatically, nor are they psychological states that can be "inspired." They only appear in an extremely specific, yet often overlooked process—when a student, following their own rhythm, truly turns an idea into a "tangible outcome."

I. True Learning Must Begin with "Respecting One's Biological Growth Power"

In the original meeting, there was a very important yet easily overlooked fact:
• The project was not rushed
• Time was allowed to naturally extend
• The completion rhythm was entirely controlled by the student

This is not neglect, but respect for individual biological growth power. Every student's cognitive maturity, desire to express, and endurance for action have their own rhythms. Once external rhythms forcefully override internal rhythms:
• Mental faculty becomes disordered
• Physical faculty becomes compressed
• Willingness to act transforms into avoidance

True learning is not about speed, but about being "just right."

II. From Idea to Tangible Outcome: A "Precision Component Coordination Experiment"

When a student tries to advance their passion from "idea" to "work," they experience for the first time a state they've never experienced before: my brain, my body, my judgment, my emotions must all work together, otherwise the task cannot be completed.

This is a highly precise coordination process:
• Mental faculty:
  - Think clearly about what to express
  - Judge what doesn't work
  - Decide whether it's worth continuing to refine
• Physical faculty:
  - Actually operate tools
  - Repeatedly revise
  - Persist in bringing things to "completion state"

These abilities are separated in "listening to lectures," and only in practical operation are they forced to mesh together.

III. Completing a Work is Essentially Assembling a "Personal Practical Engine"

When a student completes a work for the first time, they don't just "have one more achievement." Unconsciously, they complete three extremely important things:
1. Assemble their own "output and completion engine"
2. Verify that they can turn abstract ideas into real results
3. Establish the inner certainty that "I can do it again"

This engine is not an abstract concept, but a real combination of abilities:
• Starting ability
• Advancing ability
• Ability to resist interruption
• Ability to push things to the end

IV. From "Confidence, Curiosity, Passion" to "Confidence Power, Curiosity Power, Passion Power"

Many people think:
• Confidence is an emotion
• Curiosity is a personality trait
• Passion is a talent

But in real growth paths, they all undergo an essential leap. Once the practical engine is formed:
• Confidence is no longer "I think I can," but "I've done it before, I can do it again"—confidence power
• Curiosity is no longer "I'm interested," but "I know how to advance interest into results"—curiosity power
• Passion is no longer "I like it," but "I'm willing to invest long-term and continuously upgrade"—passion power

👉 These "powers" all come from completion, not from feeling.

V. Why Most People "Have Creative Consciousness" but Lack Creativity

There's a cruel phenomenon in reality: many people feel they're "creative" their whole lives, but have almost never truly created anything. There's only one reason:
• Creativity stays at the level of consciousness and concepts
• They've never experienced the complete cycle of "idea → idea creation → completion"

Only those who have experienced completion have tasted even a little bit of the sweetness of creativity. That sweetness is not applause, but: "So I really can bring something that didn't exist into the world."

VI. The Output and Completion Operating System is the Only Core of Creative Growth

Creativity is not about density of inspiration, but a sustainable operating system.
• Can continuously start
• Can continuously complete
• Can continuously upgrade output quality

Once this system is formed, growth enters a leap stage:
• Each completion makes the next one easier
• Each upgrade automatically raises standards
• Each output reshapes the individual's self-perception

Conclusion: True Education is Helping Students Assemble the Engine That "Runs Faster and Faster"

The most important thing in education is never to "teach children well," but: at the right rhythm, let them personally assemble their own—output, completion, and creation—practical engine.

Once this engine starts, it will no longer need external force to push it. Students will advance on their own, upgrade on their own, and grow on their own. And this is where true learning happens.`
    }
  },
  {
    id: '2',
    title: { 
      zh: 'AI时代要守住那些底线？', 
      en: 'What Bottom Lines Must We Hold in the AI Era?' 
    },
    summary: { 
      zh: 'AI用得早，是优势还是风险？关键不在于用不用AI，而在于哪些能力绝不能交给AI来完成。AI越早介入，越容易"跳过关键成长步骤"。', 
      en: 'Is early AI use an advantage or a risk? The key is not whether to use AI, but which abilities must never be delegated to AI. The earlier AI intervenes, the easier it is to "skip critical growth steps."' 
    },
    date: '2026-01-22',
    category: { zh: '校长分享', en: 'Principal\'s Insights' },
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    content: {
      zh: `AI时代要守住那些底线？

A: 一个被严重误解的问题

AI 用得早，是优势，还是风险？

很多家长现在都有一种矛盾心理：

❓ 不让孩子用 AI，怕他将来落后
❓ 让孩子用 AI，又隐隐担心他会变"懒""空""没脑子"

这两种担心，其实都对。

关键不在于 👉 用不用 AI
而在于 👉 哪些能力，绝不能交给 AI 来完成

一、AI 越早介入，越容易"跳过关键成长步骤"

孩子的学习，本质上要经历一个不可跳过的认知过程：

理解 → 运用 → 分析 → 综合（synthesize） → 判断（critical thinking）

AI 的问题在于：
它太快、太完整、太像"正确答案"。

如果不设边界，孩子很容易：
还没形成理解 → 就看到"完美总结"
还没经历分析 → 就拿到"综合结论"
还没学会判断 → 就直接接受输出

结果是：
作业完成得更漂亮
表达看起来更高级
但能力并没有真正"长在孩子身上"

二、一个家长必须看清的分水岭

我们把孩子分成两种路径（非常关键）：

路径 A ｜ AI 是工具，孩子是主导

孩子先想、先卡、先试
AI 后进来辅助、挑战、加速
孩子完成综合与判断

👉 将来是：
"我能想，我能判断，我用 AI 放大自己"

路径 B ｜ AI 是主导，孩子是执行

孩子一上来就问 AI
综合、判断、结论都由 AI 给
孩子只负责"用""交""说出来"

👉 将来是：
"AI 咋地，我就咋地"

这两种孩子，短期看不出差别，
但 3–5 年后，差距会非常大。

三、家长最容易踩的 3 个"好心坏事"

❌ 误区 1："能用 AI 快点完成作业，不是挺好吗？"

问题是：
👉 快，是跳过过程的快

作业真正的价值，不在答案，而在：
思考路径，
判断过程，
卡住时的大脑挣扎

❌ 误区 2："孩子用 AI 写得比以前好了，说明进步了"

不一定。
要问一句：
这是孩子"想出来的"，还是 AI "写出来的"？

如果是后者，
语言进步了，但思维没有。

❌ 误区 3："反正将来工作都用 AI，现在早点习惯"

将来真正被淘汰的，不是"不会用 AI 的人"，
而是 ——
只能跟着 AI 走、却无法独立判断的人。

B: AI 时代，家长必须守住的「5 条底线」

底线 1 ｜ 想法，必须是孩子自己的

作文立意，
项目主题，
问题选择

👉 第一步，不能问 AI

家长可以问孩子：
"这是你真正关心的吗？"

底线 2 ｜ 综合与判断，绝不能让 AI 代劳

所有：
"帮我总结"
"帮我综合"
"你觉得哪个更好"

👉 在能力形成阶段，一律踩红线

因为：
synthesis 和 critical thinking 只会在孩子大脑里发生一次
—— 错过就没了

底线 3 ｜ AI 可以解释，但孩子必须重述

允许 AI：
解释概念，
换角度说明

但必须要求孩子：
"用你自己的话再说一遍"

不能重述 = 没理解

底线 4 ｜ 一定要有"没有 AI 的思考时间"

哪怕很慢、很乱、很不成熟。

因为：
迷茫，
卡住，
不确定

👉 正是能力生长的地方

底线 5 ｜ 结果不如过程重要

与其问：
"你得了多少分？"

不如问：
"你是怎么想的？"

给家长的一句话总结（非常重要）

AI 用得越早，
越要清楚哪些能力不能交出去。

AI 可以帮孩子跑得更快，
但方向盘一定要在孩子自己手里。

家长可以立刻做的 3 件小事（非常具体）

1. 问过程，不只看结果
2. 要求孩子先想，再用 AI
3. 允许孩子慢一点、笨一点、卡一会儿`,
      en: `What Bottom Lines Must We Hold in the AI Era?

A: A Severely Misunderstood Question

Is early AI use an advantage or a risk?

Many parents now have a contradictory psychology:

❓ Not letting children use AI, afraid they will fall behind in the future
❓ Letting children use AI, but worried they will become "lazy," "empty," "brainless"

Both concerns are actually valid.

The key is not 👉 whether to use AI
But 👉 which abilities must never be delegated to AI

I. The Earlier AI Intervenes, The Easier It Is to "Skip Critical Growth Steps"

Children's learning essentially goes through an unskippable cognitive process:

Understanding → Application → Analysis → Synthesis → Critical Thinking

The problem with AI is:
It's too fast, too complete, too much like "the correct answer."

Without boundaries, children easily:
Haven't formed understanding → See "perfect summary"
Haven't experienced analysis → Get "synthesized conclusion"
Haven't learned judgment → Directly accept output

The result is:
Homework completed more beautifully
Expression looks more advanced
But abilities haven't truly "grown on the child"

II. A Watershed Parents Must See Clearly

We divide children into two paths (very critical):

Path A ｜ AI is a tool, child is the leader

Child thinks first, gets stuck first, tries first
AI comes in later to assist, challenge, accelerate
Child completes synthesis and judgment

👉 Future is:
"I can think, I can judge, I use AI to amplify myself"

Path B ｜ AI is the leader, child is the executor

Child asks AI right away
Synthesis, judgment, conclusions all given by AI
Child only responsible for "using," "submitting," "saying"

👉 Future is:
"Whatever AI says, I do"

These two types of children show no difference in the short term,
But in 3–5 years, the gap will be very large.

III. The 3 "Good Intentions, Bad Results" Parents Most Easily Step Into

❌ Misconception 1: "Isn't it good if children can use AI to complete homework faster?"

The problem is:
👉 Fast is fast by skipping the process

The real value of homework is not in the answer, but in:
The thinking path,
The judgment process,
The brain's struggle when stuck

❌ Misconception 2: "Children write better with AI than before, doesn't that mean progress?"

Not necessarily.
Ask one question:
Is this what the child "thought of," or what AI "wrote"?

If it's the latter,
Language has improved, but thinking has not.

❌ Misconception 3: "Anyway, future work will all use AI, so get used to it early"

Those who will truly be eliminated in the future are not "people who can't use AI,"
But —
People who can only follow AI and cannot make independent judgments.

B: The "5 Bottom Lines" Parents Must Hold in the AI Era

Bottom Line 1 ｜ Ideas must be the child's own

Essay themes,
Project topics,
Problem selection

👉 The first step cannot ask AI

Parents can ask children:
"Is this what you really care about?"

Bottom Line 2 ｜ Synthesis and judgment must never be delegated to AI

All:
"Help me summarize"
"Help me synthesize"
"Which do you think is better"

👉 During the ability formation stage, all are red lines

Because:
Synthesis and critical thinking only happen once in a child's brain
— Miss it and it's gone

Bottom Line 3 ｜ AI can explain, but children must restate

Allow AI to:
Explain concepts,
Explain from different angles

But must require children:
"Say it again in your own words"

Cannot restate = didn't understand

Bottom Line 4 ｜ Must have "thinking time without AI"

Even if it's slow, messy, very immature.

Because:
Confusion,
Getting stuck,
Uncertainty

👉 Are exactly where abilities grow

Bottom Line 5 ｜ Process is more important than results

Rather than asking:
"How many points did you get?"

Ask:
"How did you think about it?"

One Sentence Summary for Parents (Very Important)

The earlier AI is used,
The clearer we must be about which abilities cannot be handed over.

AI can help children run faster,
But the steering wheel must be in the child's own hands.

3 Small Things Parents Can Do Immediately (Very Specific)

1. Ask about the process, don't just look at results
2. Require children to think first, then use AI
3. Allow children to be slower, "dumber," stuck for a while`
    }
  },
  {
    id: '3',
    title: { zh: '2025年常春藤盟校录取趋势深度分析', en: '2025 Ivy League Admission Trends Analysis' },
    summary: { zh: '解读最新的录取数据，探讨标化成绩与课外活动的新动态。', en: 'Deconstruct latest data and discuss trends in standardized tests and ECs.' },
    date: '2024-10-15',
    category: { zh: '大学录取趋势', en: 'Admission Trends' },
    image: 'https://picsum.photos/seed/ivy/600/400'
  },
  {
    id: '4',
    title: { zh: '美高申请指南：如何选择最适合的寄宿学校', en: 'US Prep School Guide: Finding the Right Fit' },
    summary: { zh: '从地理位置、课程设置、校园文化等多维度挑选理想美高。', en: 'How to choose schools based on location, curriculum, and culture.' },
    date: '2024-10-12',
    category: { zh: '美高申请', en: 'Prep School Application' },
    image: 'https://picsum.photos/seed/prep/600/400'
  },
  {
    id: '5',
    title: { 
      zh: '教育的本质：为每一个个体照亮紧闭之门', 
      en: 'The Essence of Education: Illuminating Closed Doors for Every Individual' 
    },
    summary: { 
      zh: '真正的教育，从来不是筛选、不是比较、不是贴标签。它的使命只有一个——在尊重个体的前提下，为每一个学生，照亮并打开那扇原本紧闭的视野之门。', 
      en: 'True education is never about screening, comparing, or labeling. Its mission is singular—to illuminate and open the door of vision that was originally closed for every student, while respecting the individual.' 
    },
    date: '2026-01-17',
    category: { zh: '校长分享', en: 'Principal\'s Insights' },
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200',
    content: {
      zh: `真正的教育，从来不是筛选、不是比较、不是贴标签。

它的使命只有一个——

在尊重个体的前提下，为每一个学生，照亮并打开那扇原本紧闭的视野之门。

不论这个学生是否被诊断为自闭症、多动症，

不论他的"特别需要"是否被说出口、被记录在案，只要给予正确的环境、节奏与持续陪伴，成长一定会发生。

一、沉默，是教育中最容易被误判的信号

这个A学生在十年级进入iSchoolx 个校时，

没有任何"特别需要"的信息。

家长没有说明，我们出于尊重，也没有追问。

直到 ECAT 基要首训第一天。

那天的一对一培训导师，是一位斯坦福毕业、经验丰富的资深导师。

五个小时的深度训练，原本是为"激活学生认知与表达"而设计的。

但意外发生了。

•  学生全程不回应
•  老师提问，他不说话
•  换表达方式、换节奏、换切入点
•  依然，没有任何反应

这是每一位真正负责任的老师，最担心的场景——

没有互动，就无法判断"个长个需个律"；

没有回应，就不知道下一步该怎么走。

最终，那次原定五小时的一对一训练，

在一小时四十分钟后提前结束。

不是放弃，

而是尊重当下的真实状态。

二、真正的教育，不在于"当下表现"，而在于"长期工程"

如果教育只是一次课程、一次训练、一次结果，

这个学生，可能早已被定义、被归类、被放弃。

但我们看到的不是"问题学生"，

而是一个尚未被点亮的个体。

于是，导师团队做了一个选择：

不放弃，不标签，不逼迫。

接下来的三年，是一条极其典型的——

"个长个需、工程师式、建廈型"的成长路径。

•  以一对一为核心
•  尊重他的节奏
•  在iSchoolx 为他设定自己的空间
•  不用"正常标准"衡量
•  不用"马上改变"作为目标
•  取而代之以个律

尤其是在胡老师和其他一对一老师持续的线上线下对话陪伴中，

递进叠加成长一层一层搭建出来的。

三、当安全感建立，成长和信心才会出现

真正令人动容的改变，不是成绩，

而是语言伴随着信心流畅地出现。

从最初的：
•  完全沉默
•  不回应
•  不表达

到后来：
•  开始点头
•  开始用短句
•  开始愿意说出自己的想法

再到最后——

能够完整表达自己的感受、理解与收获。

这不是训练技巧的胜利，

而是一个学生终于确信了一件事：

在这里，我是被理解的；

我不需要马上变成别人；

我可以按照自己的方式成长。

四、这段感言，本身就是最有力的"证据"

在最近一次 ECAT 培训结束时，这个学生留下了这样一段话：

"我原本完全没有准备好面对申请、写作这些事情，我甚至是害怕的。

但在这里，我得到的远远超过了预期。

我现在对写作、对申请流程有了非常清晰、扎实的理解。

你们给我的支持、陪伴，以及那些一步一步的引导，对我帮助非常大。"

请注意——

这是一个曾经在五小时一对一中，几乎不说一句话的学生。

而现在，他不仅在说，

而且在有逻辑、有信心地表达自己。

五、这正是教育应有的样子

真正的教育，从不问：
•  你"正不正常"
•  你"符不符合标准"

而是问：

在什么样的环境下，

这个学生的潜能，才会被允许出现？

当教育做到这三点：

1.  强大而稳定的一对一持续支持
2.  尊重个体节奏与空间
3.  以多年为单位的渐进"建廈式成长工程"

那么结论几乎是确定的——

成长和变化，一定会发生。

结语

教育，不是制造"合格样本"，

而是照亮一个个独立生命的世界入口。

当一个原本沉默的学生，

能够站出来、说出自己的收获、确认自己的成长，

这本身就是对教育最有力的回答。

真正的好教育，

不在于你教会了多少内容，

而在于——

你是否让一个人，因看见了自己而逐渐建立成长，以及成长后写在脸上的信心。`,
      en: `True education is never about screening, comparing, or labeling.

Its mission is singular—

To illuminate and open the door of vision that was originally closed for every student, while respecting the individual.

Regardless of whether a student has been diagnosed with autism or ADHD,

Regardless of whether their "special needs" have been spoken or recorded, as long as the right environment, rhythm, and continuous companionship are provided, growth will happen.

I. Silence is the Most Easily Misjudged Signal in Education

When this Student A entered iSchoolx in tenth grade,

There was no information about any "special needs."

The parents didn't mention it, and out of respect, we didn't ask.

Until the first day of ECAT foundational training.

That day's one-on-one training mentor was a Stanford graduate, an experienced senior mentor.

The five-hour intensive training was originally designed to "activate student cognition and expression."

But something unexpected happened.

•  The student didn't respond throughout
•  When the teacher asked questions, he didn't speak
•  Changed expression methods, changed rhythm, changed entry points
•  Still, no response at all

This is the scenario that every truly responsible teacher fears most—

Without interaction, we cannot judge "individual growth, individual needs, individual rhythm";

Without response, we don't know what the next step should be.

Finally, that originally scheduled five-hour one-on-one training

Ended early after one hour and forty minutes.

Not giving up,

But respecting the real state at that moment.

II. True Education is Not About "Current Performance," But About "Long-term Engineering"

If education were just one course, one training, one result,

This student might have already been defined, categorized, and given up on.

But what we saw was not a "problem student,"

But an individual who had not yet been illuminated.

So, the mentor team made a choice:

Don't give up, don't label, don't force.

The next three years were a very typical—

"Individual growth, individual needs, engineer-style, building-type" growth path.

•  One-on-one as the core
•  Respect his rhythm
•  Set his own space in iSchoolx
•  Don't measure with "normal standards"
•  Don't use "immediate change" as the goal
•  Instead, use individual rhythm

Especially in the continuous online and offline dialogue companionship of Principal Hu and other one-on-one teachers,

Growth was built layer by layer through progressive accumulation.

III. When Security is Established, Growth and Confidence Will Appear

The truly moving change is not grades,

But language appearing fluently along with confidence.

From the beginning:
•  Complete silence
•  No response
•  No expression

To later:
•  Started nodding
•  Started using short sentences
•  Started being willing to express their thoughts

To finally—

Being able to fully express their feelings, understanding, and gains.

This is not a victory of training techniques,

But a student finally believing one thing:

Here, I am understood;

I don't need to become someone else immediately;

I can grow in my own way.

IV. This Testimonial Itself is the Most Powerful "Evidence"

At the end of the most recent ECAT training, this student left these words:

"I was completely unprepared to face applications, writing, and these things. I was even afraid.

But here, what I received far exceeded expectations.

I now have a very clear and solid understanding of writing and the application process.

The support, companionship, and step-by-step guidance you gave me were extremely helpful."

Please note—

This is a student who, in a five-hour one-on-one session, barely said a word.

And now, he is not only speaking,

But expressing himself logically and confidently.

V. This is What Education Should Be

True education never asks:
•  Are you "normal"
•  Do you "meet the standards"

Instead, it asks:

In what environment

Will this student's potential be allowed to emerge?

When education achieves these three things:

1.  Strong and stable one-on-one continuous support
2.  Respect for individual rhythm and space
3.  Progressive "building-type growth engineering" measured in years

Then the conclusion is almost certain—

Growth and change will happen.

Conclusion

Education is not about manufacturing "qualified samples,"

But illuminating the world entrance for each independent life.

When a student who was originally silent

Can stand up, speak their gains, and confirm their growth,

This itself is the most powerful answer to education.

True good education

Is not about how much content you taught,

But about—

Whether you have allowed a person to gradually build growth because they saw themselves, and the confidence written on their face after growth.`
    }
  },
  {
    id: '6',
    title: { 
      zh: '一生的果效来自容易被忽视的Agency', 
      en: 'Lifelong Outcomes Come from the Easily Overlooked Agency' 
    },
    summary: { 
      zh: 'Agency（自主行动力），在最初的时候，往往只是一个概念、一种想法。但拥有agency的"概念"，并不等于拥有agency的"能力"。两者之间，隔着一条漫长、真实、不可跳过的行动之路。', 
      en: 'Agency, at first, is often just a concept, an idea. But having the "concept" of agency does not equal having the "ability" of agency. Between the two lies a long, real, and unskippable path of action.' 
    },
    date: '2026-01-14',
    category: { zh: '校长分享', en: 'Principal\'s Insights' },
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
    content: {
      zh: `Agency（自主行动力），在最初的时候，往往只是一个感念、一种想法、一句存在于头脑中的自我宣告：
" 我想做点什么。"
" 我不想只是被安排。"
" 我想掌控自己的方向。"

但必须清醒地指出一个常被混淆的事实：
拥有 agency 的 " 概念 " ，并不等于拥有 agency 的 " 能力 " 。
两者之间，隔着一条漫长、真实、不可跳过的行动之路。

一、 Agency 作为 " 概念 " ：它只存在于语言与意识中

当 agency 还停留在概念层面时，它通常以三种形式出现：
• 一段漂亮的文字
• 一次自我认同的表达
• 一种心理上的 " 我觉得我可以 "

在这个阶段， agency 没有重量、没有摩擦、没有风险。
它不需要失败，不需要承担后果，也不需要对世界产生任何影响。

所以，一个人完全可以：
• 写出非常成熟的想法
• 说出极具洞察力的观点
• 在头脑中完成完美的计划

但这一切，都还只是 " 概念 " 。

二、 Agency 之所以 " 没有能量 " ，是因为它尚未进入现实

真正的分水岭，发生在这一刻：
这个想法，是否被带进了现实世界？

一旦 agency 仍停留在纸面、语言、头脑中，
它就永远是 " 零能量 " 的。

因为世界并不会回应想法，
世界只回应 —— 行动所带来的变化。

这正是为什么：
• 很多人 " 想了很多年 "
• 却从未真正开始
• 更谈不上创造或影响

不是他们没有 agency 的概念，
而是他们的 agency 从未进入现实。

三、 Agency 能力的诞生：从想法 → 行动 → 创制

Agency 真正开始 " 带电 " ，
发生在一个不可逆的过程里：

思想 → 行动 → 创制 → 影响

这四个阶段，缺一不可。

从思想到行动

这是最难的一步。
因为行动意味着：
• 暴露不成熟
• 接受失败可能
• 承担真实后果

很多 agency 概念，正是在这一步被消耗掉的。

从行动到创制

行动本身并不等于 agency 能力。
只有当行动产生了一个可被指认的结果，
它才开始向 " 创制 " 转化。

创制意味着：
• 世界上多了一个之前不存在的东西
• 无论大小，它是真实的

从创制到影响

当这个成果：
• 被他人使用
• 被他人反馈
• 被他人讨论或引用

agency 才真正完成了 " 闭环 " 。
此时， agency 不再是内在感受，
而是一种对外释放的能力场。

四、为什么 " 展示 agency 概念 " 和 " 展示 agency 能力 " 完全不同

展示 agency 概念，通常靠：
• 陈述
• 观点
• 语言表达

展示 agency 能力，却只能靠：
• 项目
• 产品
• 研究
• 创作
• 影响记录

一个是 " 你怎么说你自己 " ，
另一个是 " 世界如何回应你 " 。

而这两者，在评估中完全不在同一个层级。

五、 Agency 能力一旦形成，就会持续放大

一旦一个人完整走过一次：
想法 → 行动 → 创制 → 影响，

他的 agency 会发生质变。

变化并不只是 " 做成了一件事 " ，
而是：
• 他不再害怕开始
• 他知道失败只是路径的一部分
• 他知道如何把抽象变成具体

此时， agency 不再是 " 我要不要做 " ，
而是：
" 我知道我能把事情推到结果。"
这，才是真正有能量的 agency。`,
      en: `Agency, at first, is often just a concept, an idea, a self-declaration that exists in the mind:
"I want to do something."
"I don't want to just be arranged."
"I want to control my own direction."

But we must clearly point out a fact that is often confused:
Having the "concept" of agency does not equal having the "ability" of agency.
Between the two lies a long, real, and unskippable path of action.

I. Agency as a "Concept": It Only Exists in Language and Consciousness

When agency still stays at the conceptual level, it usually appears in three forms:
• A beautiful piece of text
• An expression of self-identification
• A psychological "I think I can"

At this stage, agency has no weight, no friction, no risk.
It doesn't need to fail, doesn't need to bear consequences, and doesn't need to have any impact on the world.

So, a person can completely:
• Write very mature ideas
• Express extremely insightful views
• Complete perfect plans in their mind

But all of this is still just "concept."

II. Agency Has "No Energy" Because It Has Not Yet Entered Reality

The real watershed moment happens at this point:
Has this idea been brought into the real world?

Once agency still stays on paper, in language, in the mind,
It will always be "zero energy."

Because the world doesn't respond to ideas,
The world only responds to—changes brought by action.

This is exactly why:
• Many people "think for many years"
• But never truly start
• Let alone create or influence

It's not that they don't have the concept of agency,
But that their agency has never entered reality.

III. The Birth of Agency Ability: From Idea → Action → Creation

Agency truly begins to "carry charge"
In an irreversible process:

Thought → Action → Creation → Impact

These four stages are all indispensable.

From Thought to Action

This is the hardest step.
Because action means:
• Exposing immaturity
• Accepting the possibility of failure
• Bearing real consequences

Many agency concepts are consumed at exactly this step.

From Action to Creation

Action itself does not equal agency ability.
Only when action produces an identifiable result
Does it begin to transform into "creation."

Creation means:
• Something that didn't exist before now exists in the world
• No matter how small, it is real

From Creation to Impact

When this result:
• Is used by others
• Receives feedback from others
• Is discussed or cited by others

Agency truly completes the "closed loop."
At this point, agency is no longer an internal feeling,
But an ability field released outward.

IV. Why "Demonstrating Agency Concept" and "Demonstrating Agency Ability" Are Completely Different

Demonstrating agency concept usually relies on:
• Statements
• Views
• Language expression

Demonstrating agency ability can only rely on:
• Projects
• Products
• Research
• Creative works
• Impact records

One is "how you describe yourself,"
The other is "how the world responds to you."

And these two are completely not on the same level in evaluation.

V. Once Agency Ability is Formed, It Will Continue to Amplify

Once a person has completely gone through:
Idea → Action → Creation → Impact,

Their agency will undergo a qualitative change.

The change is not just "accomplishing one thing,"
But:
• They are no longer afraid to start
• They know failure is just part of the path
• They know how to turn abstract into concrete

At this point, agency is no longer "should I do it,"
But:
"I know I can push things to results."
This is truly energetic agency.`
    }
  },
  {
    id: '7',
    title: { 
      zh: '教育什么时候变成了一门"可建造的技术"？', 
      en: 'When Did Education Become a "Buildable Technology"?' 
    },
    summary: { 
      zh: '1896年，李鸿章在纽约看到高楼时帽子都掉了。他想不明白："他们怎么能把楼盖这么高？"这不是段子，这是一个时代第一次看见"技术的力量"。教育也可以从"靠天赋靠运气"，变成一门"可建造、可复制、可叠加"的技术。', 
      en: 'In 1896, when Li Hongzhang saw tall buildings in New York, his hat fell off. He couldn\'t understand: "How can they build buildings so tall?" This is not a joke, but an era\'s first glimpse of "the power of technology." Education can also transform from "relying on talent and luck" into a "buildable, replicable, and stackable" technology.' 
    },
    date: '2026-01-20',
    category: { zh: '校长分享', en: 'Principal\'s Insights' },
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
    content: {
      zh: `1896 年，一个清朝大人物李鸿章（相当于今天的 " 总理级 " 人物）到纽约访问。走在街头，他抬头看着一栋栋高楼，越看越震惊，最后连帽子都掉了。

他想不明白： " 他们怎么能把楼盖这么高？ "

这不是段子，这是一个时代第一次看见 " 技术的力量 " 。
因为在那之前，人类建房子靠经验、靠师傅、靠胆子、靠运气。房子能不能盖高，常常像赌博。

可美国的高楼让人意识到：原来高度不是胆量决定的，而是 数学与科学 决定的 —— 当结构学、材料学、力学、施工流程进入建筑，盖楼就从 " 玄学 " 变成 " 工程学 " ：你不需要祈祷它别塌，只需要按模型、按规律、按流程做，它就 一定能高 。

而今天我们谈教育，最应该被 " 帽子掉下来 " 的，不是看见谁拿了藤校 offer ，而是看见一件更本质的事：

教育也可以从 " 靠天赋靠运气 " ，变成一门 " 可建造、可复制、可叠加 " 的技术。

1. 大多数家庭的教育方式，仍然停留在 " 手艺时代 "

很多家长其实都在用一种 " 手艺时代 " 的方式养孩子：
• 孩子成绩好，就继续刷题；
• 孩子成绩差，就补课加量；
• 孩子没动力，就讲道理；
• 孩子不自信，就让他 " 多练练 " 。

这套办法也许能把孩子送到 " 还可以 " 的地方，但它最大的致命点是： 它无法保证孩子的成长结构会越来越高。

就像没有工程图纸、没有受力计算，你也能盖个平房，但你永远不敢保证它能盖到 50 层，更别说 100 层。

所以当家长看到某些孩子突然爆发、突然 " 开窍 " 、突然能做研究、能写作品、能带团队、能和教授沟通时，会本能地把它归因成一句话：

" 这孩子天赋太强了。 "

但很多时候，真正的差别不是天赋，而是： 有没有把成长变成工程。

2. 中国高考像 " 一根尺子 " ，美国体系像 " 二十项引擎 "

在我同家长的对话里有一句对比很刺耳，却非常真实：
• 高考主要看一件事：你会不会读书。
• 美国评估不是一件事，而是 " 二十项 " ：多种素质与能力交互在一起。

我们不讨论价值观，只讨论 机制 ： " 一根尺子 " 的体系，当然可以选出做题高手； " 二十项引擎 " 的体系，选出的往往是未来适应力更强的人 —— 因为他不是单点优秀，而是多引擎驱动。

这就是为什么美国教育看起来 " 接地气 " ：它更像在训练一个人未来能不能在真实世界里跑起来，而不是在考场上能不能写对标准答案。

3. 马斯克的秘密不是 " 聪明 " ，而是 " 多引擎同时运转 "

马斯克，说他文理都学、两个专业、手下同时跑十个项目。很多人听完会觉得那是天才故事，离自己孩子太远。

但如果我们把欣赏拿掉，会发现它其实在告诉我们一件非常朴素的事实： 未来世界的竞争，本质是多能力叠加后的适应力。

一个只会做题的人，进入真实世界会立刻卡住：
• 问题没有标准答案怎么办？
• 资源要自己找怎么办？
• 合作对象不靠谱怎么办？
• 计划改了三次怎么办？
• 失败了怎么复盘再来怎么办？

这些能力不在试卷里，却在未来每天都用得上。
所以 " 二十项能力 " 不是 " 全面发展 " 的口号，而是未来的生存方式。

4. 教育工程化的关键：从 " 输入 " 变成 " 可累积的输出结构 "

盖楼最怕什么？最怕砖头没落地、钢筋没入柱、结构没闭合。

教育也是一样。最怕的是孩子做了很多事，但全是 " 散沙式经历 " ：
• 上了很多课，没有作品；
• 参加很多活动，没有证据；
• 读了很多书，没有输出；
• 想了很多点子，没有完成。

工程化教育的核心不是 " 更忙 " ，而是让成长的每一步都变成 " 落地的构件 " ：
• 每一个好奇心 → 变成一个小研究 / 小文章 / 小视频
• 每一次尝试 → 留下记录、数据、反思
• 每一个项目 → 有成果、有迭代、有展示
• 每一次对话 → 有行动计划、有下周推进

当这些构件持续堆叠，孩子会发生一种很可怕的变化： 他开始 " 藏不住 " 。

因为一个人真正具备结构化能力时，他的思考、表达、解决问题方式会变得有层次、有力量。那种变化家长一眼就能看出来 —— 甚至会像我在对话里说到的那位妈妈所说的：

" 到了十二年级，我都不敢认，这还是我孩子吗？ "

那不是奇迹，是结构累积到临界点之后的 爆发性增长 。

5. 给九年级孩子的最优起手式：用一个问题开工

在对话里提到的 Fiona ，她有两个关键特征：
• 学术很强，成绩漂亮；
• 老师评价是 " 好奇、爱问 thoughtful que tion " ，但她也提到自己 " 不太舒服 public  peaking ，容易陷在细节里 " 。

这是一种典型的 " 楼已经有材料，但还缺结构设计 " 的状态。

最好的起手式不是再塞更多课程，而是做一件很工程的事： 从一个问题开始建楼。

比如她问的：
• "AI 会有自己的思想吗？ "
• " 为什么 COVID 能在几周内全球扩散，而一些疾病却局部化？ "

你看，这些问题自带三种价值：
• 有学术深度（能进研究）
• 有现实连接（能进社会议题）
• 有表达空间（能变文章、演讲、项目）

把一个问题做成一个成果，就是第一块 " 承重墙 " 。
一旦孩子体验到 " 我能把想法做出来 " ，那台最稀缺的发动机就启动了 ——

完成力。

结尾：真正的名校，不是目的，是 " 结构高度 " 的自然结果

当年那位清朝大人物的帽子掉了，是因为他第一次看见： 原来楼可以高到不讲道理。

今天我们也应该有一次 " 帽子掉下来 " 的时刻： 原来孩子也可以高到不讲道理 —— 不是靠鸡血，不是靠补课，不是靠运气，而是靠一套可复制的成长工程。

当教育变成技术，孩子的成长就不再是 " 听天由命 " 。
他可以像盖楼一样，一层层往上建：
• 能力是钢筋
• 输出是砖石
• 复盘是加固
• 资源链接是电梯与管网
• 好奇心是地基的桩

你会发现：升学只是副产品。
真正发生的是 —— 孩子被建成了一个走到哪都能创造、都能适应、都能把机会变资源的人。

这，才是那顶帽子掉下来的真正启示。`,
      en: `In 1896, a major Qing Dynasty figure Li Hongzhang (equivalent to today's "Prime Minister level") visited New York. Walking on the street, he looked up at building after building, becoming more and more shocked, until his hat fell off.

He couldn't understand: "How can they build buildings so tall?"

This is not a joke, but an era's first glimpse of "the power of technology."
Because before that, humans built houses relying on experience, masters, courage, and luck. Whether a house could be built tall was often like gambling.

But American tall buildings made people realize: height is not determined by courage, but by mathematics and science—when structural engineering, materials science, mechanics, and construction processes entered architecture, building went from "mysticism" to "engineering": you don't need to pray it won't collapse, you just need to follow the model, the rules, and the process, and it will definitely be tall.

And today when we talk about education, what should make our "hats fall off" is not seeing who got an Ivy League offer, but seeing something more fundamental:

Education can also transform from "relying on talent and luck" into a "buildable, replicable, and stackable" technology.

1. Most Families' Education Methods Still Stay in the "Craft Era"

Many parents are actually raising children in a "craft era" way:
• If the child's grades are good, continue doing practice problems;
• If the child's grades are poor, add more tutoring;
• If the child lacks motivation, give lectures;
• If the child lacks confidence, have them "practice more."

This approach might get the child to a "decent" place, but its biggest fatal flaw is: it cannot guarantee that the child's growth structure will get higher and higher.

Just like without engineering blueprints or stress calculations, you can build a bungalow, but you can never guarantee it can reach 50 stories, let alone 100.

So when parents see some children suddenly explode, suddenly "get it," suddenly able to do research, write works, lead teams, communicate with professors, they instinctively attribute it to one sentence:

"This child's talent is too strong."

But often, the real difference is not talent, but: whether growth has been turned into engineering.

2. Chinese Gaokao is Like "One Ruler," American System is Like "Twenty Engines"

In my conversations with parents, there's a comparison that's harsh but very true:
• Gaokao mainly looks at one thing: can you study.
• American evaluation is not one thing, but "twenty": multiple qualities and abilities interacting together.

We're not discussing values, only mechanisms: a "one ruler" system can of course select test-taking masters; a "twenty engines" system often selects people with stronger future adaptability—because they're not single-point excellent, but multi-engine driven.

This is why American education seems "down-to-earth": it's more like training whether a person can run in the real world in the future, not whether they can write the right standard answers in the exam hall.

3. Musk's Secret is Not "Smart," But "Multiple Engines Running Simultaneously"

Musk says he studied both arts and sciences, two majors, running ten projects simultaneously. Many people hear this and think it's a genius story, too far from their own children.

But if we remove the admiration, we'll find it's actually telling us a very simple fact: future world competition is essentially adaptability after multi-ability stacking.

A person who only knows how to take tests will immediately get stuck when entering the real world:
• What if the problem has no standard answer?
• What if resources need to be found yourself?
• What if collaborators are unreliable?
• What if plans change three times?
• What if you fail, how do you review and try again?

These abilities are not in test papers, but will be used every day in the future.
So "twenty abilities" is not a slogan of "all-round development," but a way of survival in the future.

4. The Key to Educational Engineering: From "Input" to "Accumulable Output Structure"

What does building fear most? Most fear bricks not landing, steel not entering columns, structure not closing.

Education is the same. What we most fear is children doing many things, but all are "scattered experiences":
• Took many classes, but no works;
• Participated in many activities, but no evidence;
• Read many books, but no output;
• Thought of many ideas, but nothing completed.

The core of engineering education is not "being busier," but making every step of growth into a "landed component":
• Every curiosity → becomes a small research/article/video
• Every attempt → leaves records, data, reflection
• Every project → has results, iterations, demonstrations
• Every conversation → has action plans, next week progress

When these components continuously stack, children will undergo a kind of terrible change: they begin to "can't hide it."

Because when a person truly has structured ability, their thinking, expression, and problem-solving methods become layered and powerful. That kind of change parents can see at a glance—even like the mother I mentioned in the conversation said:

"By twelfth grade, I didn't dare recognize, is this still my child?"

That's not a miracle, it's explosive growth after structure accumulation reaches a critical point.

5. The Optimal Starting Point for Ninth Graders: Start with One Question

The Fiona mentioned in the conversation has two key characteristics:
• Academically strong, beautiful grades;
• Teacher's evaluation is "curious, asks thoughtful questions," but she also mentioned she's "not comfortable with public speaking, easily gets stuck in details."

This is a typical state of "the building already has materials, but lacks structural design."

The best starting point is not stuffing in more courses, but doing something very engineering: start building from one question.

For example, what she asked:
• "Will AI have its own thoughts?"
• "Why can COVID spread globally in weeks, while some diseases stay localized?"

You see, these questions carry three values:
• Have academic depth (can enter research)
• Have real-world connections (can enter social issues)
• Have expression space (can become articles, speeches, projects)

Turning one question into one result is the first "load-bearing wall."
Once children experience "I can make my ideas happen," that most scarce engine starts—

Completion power.

Conclusion: True Elite Schools Are Not the Goal, But the Natural Result of "Structural Height"

When that Qing Dynasty figure's hat fell off, it was because he saw for the first time: buildings can be tall beyond reason.

Today we should also have a "hat falling off" moment: children can also be tall beyond reason—not by cramming, not by tutoring, not by luck, but by a replicable growth engineering.

When education becomes technology, children's growth is no longer "left to fate."
They can build layer by layer like buildings:
• Ability is steel
• Output is bricks
• Review is reinforcement
• Resource connections are elevators and pipelines
• Curiosity is the foundation piles

You'll find: college admission is just a byproduct.
What really happens is—children are built into people who can create, adapt, and turn opportunities into resources wherever they go.

This is the true revelation of that falling hat.`
    }
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 'e1',
    title: { zh: '哈佛学长经验分享会', en: 'Harvard Alumni Experience Sharing' },
    type: { zh: '线上直播', en: 'Online Webinar' },
    date: '2024-11-01',
    time: '19:30 - 21:00',
    description: { zh: '直接对话哈佛毕业生，听听真实的校园生活与申请心路历程。', en: 'Talk directly to Harvard graduates about campus life and application journeys.' }
  },
  {
    id: 'e2',
    title: { zh: '常春藤申请策略深度解析', en: 'Ivy League Application Strategy Deep Dive' },
    type: { zh: '线上直播', en: 'Online Webinar' },
    date: '2024-11-15',
    time: '20:00 - 21:30',
    description: { zh: '资深招生官解析常春藤盟校申请策略，揭秘录取委员会的真实评估标准。', en: 'Senior admissions officers analyze Ivy League application strategies and reveal the real evaluation criteria of admissions committees.' }
  },
  {
    id: 'e3',
    title: { zh: 'ECAT项目说明会', en: 'ECAT Program Information Session' },
    type: { zh: '线下活动', en: 'In-Person Event' },
    date: '2024-11-20',
    time: '14:00 - 16:00',
    description: { zh: '深入了解ECAT精英大学入学训练项目，与导师团队面对面交流。', en: 'Learn about the ECAT Elite College Admission Training program and meet the mentor team in person.' }
  },
  {
    id: 'e4',
    title: { zh: '文书写作工作坊', en: 'Essay Writing Workshop' },
    type: { zh: '线上直播', en: 'Online Webinar' },
    date: '2024-12-05',
    time: '19:00 - 20:30',
    description: { zh: '哈佛前招生官指导，学习如何写出打动招生官的优秀文书。', en: 'Guided by former Harvard admissions officers, learn how to write compelling essays that impress admissions committees.' }
  },
  {
    id: 'e5',
    title: { zh: '美高申请全攻略', en: 'US Prep School Application Guide' },
    type: { zh: '线上直播', en: 'Online Webinar' },
    date: '2024-12-12',
    time: '20:00 - 21:30',
    description: { zh: '全面解析美高申请流程，从选校到面试的完整指导。', en: 'Comprehensive guide to US prep school applications, from school selection to interview preparation.' }
  },
  {
    id: 'e6',
    title: { zh: '家长教育理念分享会', en: 'Parent Education Philosophy Sharing' },
    type: { zh: '线下活动', en: 'In-Person Event' },
    date: '2024-12-18',
    time: '15:00 - 17:00',
    description: { zh: 'Jack Hu校长分享教育理念，探讨如何培养孩子的自主成长能力。', en: 'Principal Jack Hu shares educational philosophy and discusses how to cultivate children\'s autonomous growth abilities.' }
  }
];

export const MOCK_PROGRAMS: Program[] = [
  {
    id: 'ecat',
    name: { zh: 'IvyShuttle ECAT', en: 'IvyShuttle ECAT' },
    grade: { zh: '9-12年级', en: 'Grades 9-12' },
    summary: { zh: '精英大学入学训练项目，专注于综合素质与申请竞争力的提升。', en: 'Elite College Admission Training focusing on holistic profile building.' },
    // Fix: Structured highlights to match the { zh: string[]; en: string[] } interface
    highlights: {
      zh: ['个性化背景提升', '藤校导师一对一', '深度学术研究'],
      en: ['Personalized background enhancement', '1-on-1 Ivy League mentoring', 'In-depth academic research support']
    },
    icon: '🎓'
  },
  {
    id: 'ap',
    name: { zh: 'AP 强化辅导', en: 'AP Enrichment' },
    grade: { zh: '10-12年级', en: 'Grades 10-12' },
    summary: { zh: '针对AP各科目进行深度辅导，助力冲刺5分。', en: 'Targeted coaching for AP subjects to help students achieve score 5.' },
    // Fix: Structured highlights to match the { zh: string[]; en: string[] } interface
    highlights: {
      zh: ['全科目覆盖', '历年真题演练', '名师小班授课'],
      en: ['All subjects covered', 'Real past exam practice', 'Small classes with expert teachers']
    },
    icon: '✍️'
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    question: { zh: 'IvyShuttle的服务流程是怎样的？', en: 'What is the service process of IvyShuttle?' },
    answer: { zh: '我们首先会进行深度评估，随后根据学生情况制定专属的ECAT计划，包含学术、活动、文书等全方位指导。', en: 'We start with a deep assessment, then create a personalized ECAT plan including academic, activity, and essay guidance.' }
  },
  {
    question: { zh: 'iSchoolX系统对学生有什么帮助？', en: 'How does iSchoolX help students?' },
    answer: { zh: 'iSchoolX is our LMS for homework submission, resource access, and mentor interaction.', en: 'iSchoolX is our LMS for homework submission, resource access, and mentor interaction.' }
  }
];
