import { FileCheck2, MailCheck, MessageCircle, Target } from "lucide-react";

export type Locale = "zh" | "en";

export type Copy = {
  nav: {
    locale: string,
    items: string[],
    primaryCta: string,
    secondaryCta: string
  },
  hero: {
    title: [string, string, string],
    body: string,
    cta: string
  },
  chat: Array<{
    prompt: string,
    reply: string,
    action: string,
    avatar?: "alt"
  }>,
  proof: {
    title: string,
    items: string[]
  },
  loop: {
    stripTitle: string,
    stripItems: Array<{
      avatar: string,
      photo: string,
      name: string,
      meta: string,
      quote: string,
      tone: "coral" | "violet" | "lime" | "cream"
    }>,
    title: [string, string],
    body: string,
    panelEyebrow: string,
    panelTitle: string,
    panelBody: string,
    cta: string,
    goal: string,
    day: string,
    taskTitle: string,
    taskBody: string,
    mentorLine: string,
    userLine: string,
    assessmentTitle: string,
    assessmentItems: string[],
    emailTitle: string,
    emailBody: string,
    stories: Array<{
      label: string,
      count: string,
      title: string,
      body: string
    }>
  },
  showcase: {
    title: string,
    body: string,
    stories: Array<{ name: string, metric: string, quote: string, cta: string }>
  },
  beforeAfter: {
    title: string,
    body: string,
    beforeLabel: string,
    beforeTitle: string,
    beforeItems: string[],
    afterLabel: string,
    afterTitle: string,
    afterItems: string[],
    cta: string
  },
  templates: {
    title: string,
    body: string,
    panelTitle: string,
    actionLabel: string,
    cta: string,
    scenes: Array<{
      title: string,
      mentor: string,
      status: string,
      tasks: string[],
      question: string,
      note: string
    }>
  },
  features: {
    title: string,
    body: string,
    cards: Array<{ icon: typeof Target, title: string, text: string }>
  },
  steps: {
    title: string,
    body: string,
    items: Array<[string, string, string]>,
    checklistDone: string,
    checklistPending: string,
    primaryCta: string,
    secondaryCta: string
  },
  faq: {
    eyebrow: string,
    title: string,
    items: Array<[string, string]>
  },
  finalCta: {
    title: string,
    body: string,
    cta: string,
    footerBody: string,
    footerLinks: string[]
  }
};

export const copy: Record<Locale, Copy> = {
  zh: {
    nav: {
      locale: "CN",
      items: ["产品", "方案", "场景", "定价", "资源"],
      primaryCta: "立即开始",
      secondaryCta: "登录"
    },
    hero: {
      title: ["让每一个", "目标对话", "真正推进"],
      body: "拆解目标、每日陪跑、提问验收，并在你断掉节奏时提醒你回来。让每一次和 AI 的对话都推动真实行动。",
      cta: "立即开始"
    },
    chat: [
      {
        prompt: "今天的目标是什么？我先帮你拆到可执行。",
        reply: "30 天基础英语口语",
        action: "生成计划"
      },
      {
        prompt: "今天只做 25 分钟，可以吗？",
        reply: "可以，先从咖啡店点单场景开始。",
        action: "开始验收",
        avatar: "alt"
      },
      {
        prompt: "完成后我会问你 3 个验收问题。",
        reply: "第 8 / 30 天，明天任务已调整。",
        action: "查看下一步"
      }
    ],
    proof: {
      title: "为那些总是开始，却很难坚持的人而设计。",
      items: ["目标拆解", "每日任务", "AI 验收", "邮件提醒"]
    },
    loop: {
      stripTitle: "被你的 AI 导师带回下一步。",
      stripItems: [
        { avatar: "林", photo: "https://randomuser.me/api/portraits/women/44.jpg", name: "英语口语导师", meta: "第 8 / 30 天", quote: "今天只练咖啡店点单，完成后用 3 个问题验收。", tone: "coral" },
        { avatar: "面", photo: "https://randomuser.me/api/portraits/men/32.jpg", name: "面试冲刺导师", meta: "15 天计划", quote: "先答一轮行为面试，再把薄弱点拆进明天任务。", tone: "violet" },
        { avatar: "睡", photo: "https://randomuser.me/api/portraits/women/68.jpg", name: "早睡节奏导师", meta: "21 天节奏", quote: "今晚只提前 20 分钟，明早邮件提醒复盘阻碍。", tone: "lime" },
        { avatar: "作", photo: "https://randomuser.me/api/portraits/men/75.jpg", name: "作品集导师", meta: "第 3 / 7 天", quote: "今天只交互一个页面，完成后说明你改了什么。", tone: "cream" },
        { avatar: "健", photo: "https://randomuser.me/api/portraits/women/12.jpg", name: "健身入门导师", meta: "100 天入门", quote: "降低难度也算推进，先完成 12 分钟基础训练。", tone: "coral" }
      ],
      title: ["把目标推进", "做成每天会发生的闭环"],
      body: "Helo 把计划、执行、验收和提醒连成一条线，让目标不再停在聊天里。",
      panelEyebrow: "Goal automation",
      panelTitle: "从目标，到今天真正要做的一步。",
      panelBody: "导师先把目标拆成周期计划，再每天推送任务、陪你执行，并用提问确认你真的完成。",
      cta: "查看闭环",
      goal: "30 天基础英语口语",
      day: "第 8 / 30 天",
      taskTitle: "今日任务",
      taskBody: "咖啡店点单场景：听 3 遍，复述 5 句，并录一次自己的回答。",
      mentorLine: "今天只需要 25 分钟。完成后我会问你 3 个问题，确认你能真的开口。",
      userLine: "我已经练完了，能复述点单和确认取餐。",
      assessmentTitle: "提问验收",
      assessmentItems: ["用英文点一杯冰拿铁", "说明是否堂食", "听懂取餐提醒"],
      emailTitle: "明早 08:30",
      emailBody: "如果今天中断，邮件会把你带回下一步，而不是让计划消失。",
      stories: [
        { label: "AI 目标拆解", count: "1/4", title: "先把 30 天拆成今天能开始的动作", body: "输入周期、基础和可投入时间，Helo 自动生成阶段计划和每日任务。" },
        { label: "每日陪跑", count: "2/4", title: "每天进入一个具体任务场景", body: "导师用很短的对话把你带回今天的任务，不让目标停在计划里。" },
        { label: "提问验收", count: "3/4", title: "做完以后，用问题确认是否真的掌握", body: "不是点一下完成，而是回答和产出，让导师判断质量。" },
        { label: "邮件提醒回流", count: "4/4", title: "中断时，把你温和带回下一步", body: "邮件提醒今日任务和调整后的节奏，让计划不断线。" }
      ]
    },
    showcase: {
      title: "把最重要的目标，重新带回对话里。",
      body: "不只是提醒你记得做，而是让导师在每一次聊天里把你带回下一步行动。",
      stories: [
        { name: "英语口语目标", metric: "第 8 / 30 天", quote: "从不敢开口，到每天能复述 5 句。", cta: "了解详情" },
        { name: "面试冲刺目标", metric: "15 天计划", quote: "每天一轮模拟问答，答完就知道哪里要补。", cta: "了解详情" },
        { name: "早睡习惯目标", metric: "21 天节奏", quote: "提醒、复盘和压力来源都放在同一个地方。", cta: "了解详情" },
        { name: "作品集目标", metric: "7 天冲刺", quote: "每天只盯一个产出，完成后必须说明成果。", cta: "了解详情" }
      ]
    },
    beforeAfter: {
      title: "同一个目标，使用前和使用后",
      body: "区别不在于多聊几句，而在于每天都被推进。",
      beforeLabel: "Before Helo",
      beforeTitle: "目标很认真，执行很散",
      beforeItems: [
        "目标写完后很快沉下去",
        "AI 聊得很多但没有验收",
        "打卡只是点一下",
        "一中断就失去节奏"
      ],
      afterLabel: "After Helo",
      afterTitle: "每天都有下一步",
      afterItems: [
        "每天知道下一步做什么",
        "导师记住你的节奏和障碍",
        "完成后用问题验收质量",
        "停下来会收到温和提醒"
      ],
      cta: "立即开始"
    },
    templates: {
      title: "从一个目标开始，Helo 会帮你拆成每天能做的事",
      body: "选择一个目标模板，马上看到导师如何拆解、提醒和验收。",
      panelTitle: "看看 Helo 怎么陪你推进",
      actionLabel: "查看计划",
      cta: "开始一个目标",
      scenes: [
        {
          title: "30 天英语口语",
          mentor: "耐心的英语教练",
          status: "第 6 天 / 今日任务已生成",
          tasks: ["听 2 分钟英文材料", "用自己的话复述 1 遍", "回答 3 个理解问题"],
          question: "请用英文说出这段材料的核心观点。",
          note: "先让用户说出来，再检查表达是否真正掌握。"
        },
        {
          title: "15 天面试冲刺",
          mentor: "高效职场教练",
          status: "第 4 天 / 行为面试练习",
          tasks: ["整理 1 个项目经历", "用 STAR 结构写回答", "进行 1 轮追问模拟"],
          question: "如果面试官继续追问失败原因，你会怎么回答？",
          note: "把准备拆成每日题目，用追问暴露表达漏洞。"
        },
        {
          title: "21 天早睡计划",
          mentor: "温柔陪跑型导师",
          status: "第 8 天 / 睡前节奏调整",
          tasks: ["23:30 前放下手机", "记录今天最影响睡眠的因素", "完成 3 分钟睡前复盘"],
          question: "今晚最容易让你拖延入睡的触发点是什么？",
          note: "不制造压力，用更小的动作帮用户把节奏拉回来。"
        },
        {
          title: "7 天作品集冲刺",
          mentor: "理性项目导师",
          status: "第 3 天 / 案例结构整理",
          tasks: ["选定 1 个核心项目", "写出问题、过程、结果三段", "补齐 2 张关键截图说明"],
          question: "这个项目最能证明你哪一项能力？",
          note: "把模糊作品集拆成每天可交付的小成果。"
        },
        {
          title: "100 天健身入门",
          mentor: "严格但负责的健身教练",
          status: "第 12 天 / 基础力量训练",
          tasks: ["完成 20 分钟训练", "记录动作完成情况", "反馈最吃力的动作"],
          question: "今天哪个动作最容易变形？你准备怎么调整？",
          note: "关注动作质量和连续性，不承诺夸张效果。"
        },
        {
          title: "自定义目标",
          mentor: "按目标自动匹配",
          status: "输入目标后生成计划",
          tasks: ["说明你想完成什么", "选择周期和可投入时间", "生成第一天任务"],
          question: "你希望这个目标结束时，出现什么可验证结果？",
          note: "任何短期目标，都先被转成周期、任务和验收标准。"
        }
      ]
    },
    features: {
      title: "把目标、任务、对话和验收，放进同一个闭环。",
      body: "不是把待办贴在 AI 外面，而是让整个执行过程都发生在对话里。",
      cards: [
        { icon: Target, title: "AI 目标拆解", text: "把模糊愿望拆成周期计划和每日任务。" },
        { icon: MessageCircle, title: "每日陪跑", text: "导师记住你的偏好、压力来源和执行习惯。" },
        { icon: FileCheck2, title: "提问验收", text: "用问答确认理解程度，而不是随手打卡。" },
        { icon: MailCheck, title: "邮件提醒", text: "早晨发送今日任务，中断时温和提醒回来。" }
      ]
    },
    steps: {
      title: "三步，把目标交给 Helo 陪你推进",
      body: "不用先整理复杂计划。先说出你想完成什么，Helo 会把它变成每天能执行、能验收、能被提醒的节奏。",
      items: [
        ["01", "创建你的 AI 导师", "选择温柔陪跑、高效教练、理性分析或严格督促等导师风格，让这个目标有一个固定的陪跑对象。"],
        ["02", "设定一个短期目标", "输入你想完成的目标、周期和每天可投入的时间。Helo 会把模糊愿望拆成阶段计划和每日任务。"],
        ["03", "每天执行并完成验收", "每天收到今日任务，完成后回答导师的验收问题。中断时，Helo 会用克制的邮件提醒你回到节奏。"]
      ],
      checklistDone: "记忆：目标节奏与障碍",
      checklistPending: "待验收：3 个问题",
      primaryCta: "开始一个目标",
      secondaryCta: "看看如何运作"
    },
    faq: {
      eyebrow: "常见问题",
      title: "开始前，最后确认几件事",
      items: [
        ["Helo 和待办清单有什么区别？", "待办清单只记录你要做什么。Helo 会继续追问目标，把它拆成每日动作，并在完成后用问题验收质量。你中断时，它也会提醒你回到节奏。"],
        ["AI 怎么判断我是否真的完成？", "Helo 不只看勾选状态。它会根据你的目标和今日任务生成验收问题，让你用文字、结果或下一步反馈说明完成情况，再给出通过、补学或调整建议。"],
        ["会不会提醒太频繁？", "默认提醒是克制的，主要是每日任务邮件和长时间未执行后的温和提醒。提醒应该帮你回到节奏，而不是制造压力。"],
        ["可以创建多个导师或多个目标吗？", "可以。每个目标都可以绑定适合它的导师风格，比如英语口语用耐心教练，面试冲刺用高效职场导师。首页只强调开始一个目标，复杂管理留到产品内。"]
      ]
    },
    finalCta: {
      title: "今天就让一个目标开始往前走",
      body: "先创建一个导师，给它一个目标。Helo 会把第一天的行动、验收问题和提醒节奏准备好。",
      cta: "开始一个目标",
      footerBody: "AI 目标导师，把短期目标拆成每天能执行、能验收、能被提醒的节奏。",
      footerLinks: ["产品", "如何运作", "FAQ", "开始"]
    }
  },
  en: {
    nav: {
      locale: "EN",
      items: ["PRODUCT", "SOLUTIONS", "USE CASES", "PRICING", "RESOURCES"],
      primaryCta: "GET STARTED",
      secondaryCta: "SIGN IN"
    },
    hero: {
      title: ["Make the most", "out of every", "goal"],
      body: "Break goals into daily action, get coached every day, answer check-in questions, and get nudged back when you lose momentum.",
      cta: "GET STARTED"
    },
    chat: [
      {
        prompt: "What's today's goal? I'll break it into the next clear step.",
        reply: "30-day spoken English sprint",
        action: "Generate plan"
      },
      {
        prompt: "Can we keep it to 25 minutes today?",
        reply: "Yes. Start with the coffee-ordering scenario first.",
        action: "Start assessment",
        avatar: "alt"
      },
      {
        prompt: "I'll ask 3 questions after you finish.",
        reply: "Day 8 / 30. Tomorrow's task has been adjusted.",
        action: "View next task"
      }
    ],
    proof: {
      title: "Built for people who start often, and want to keep going.",
      items: ["Goal breakdown", "Daily tasks", "AI assessment", "Email nudges"]
    },
    loop: {
      stripTitle: "Pulled back by your AI mentor.",
      stripItems: [
        { avatar: "EN", photo: "https://randomuser.me/api/portraits/women/44.jpg", name: "Spoken English mentor", meta: "Day 8 / 30", quote: "Practice coffee ordering today, then answer 3 check-in questions.", tone: "coral" },
        { avatar: "IV", photo: "https://randomuser.me/api/portraits/men/32.jpg", name: "Interview sprint mentor", meta: "15-day plan", quote: "Run one behavioral round, then fold weak spots into tomorrow.", tone: "violet" },
        { avatar: "SL", photo: "https://randomuser.me/api/portraits/women/68.jpg", name: "Sleep rhythm mentor", meta: "21-day rhythm", quote: "Move bedtime 20 minutes earlier and review friction tomorrow.", tone: "lime" },
        { avatar: "PF", photo: "https://randomuser.me/api/portraits/men/75.jpg", name: "Portfolio mentor", meta: "Day 3 / 7", quote: "Ship one page interaction, then explain what changed.", tone: "cream" },
        { avatar: "FT", photo: "https://randomuser.me/api/portraits/women/12.jpg", name: "Fitness mentor", meta: "100-day start", quote: "Lower the bar if needed. Finish the 12-minute base set first.", tone: "coral" }
      ],
      title: ["Turn goal progress", "into a daily loop"],
      body: "Helo connects planning, action, assessment, and nudges so your goals do not stay inside a chat thread.",
      panelEyebrow: "Goal automation",
      panelTitle: "From the goal to today's next real step.",
      panelBody: "Your mentor turns the goal into a timeline, sends the daily task, coaches you through it, and checks whether it really landed.",
      cta: "See the loop",
      goal: "30-day spoken English",
      day: "Day 8 / 30",
      taskTitle: "Today's task",
      taskBody: "Coffee-ordering scenario: listen 3 times, repeat 5 lines, and record one answer.",
      mentorLine: "Keep it to 25 minutes today. I'll ask 3 questions after you finish to check if you can actually speak it.",
      userLine: "Done. I can order and confirm pickup now.",
      assessmentTitle: "Assessment",
      assessmentItems: ["Order an iced latte", "Say dine-in or to-go", "Understand pickup cues"],
      emailTitle: "Tomorrow 08:30",
      emailBody: "If momentum breaks, email brings you back to the next step instead of letting the plan disappear.",
      stories: [
        { label: "Goal breakdown", count: "1/4", title: "Break a 30-day goal into something you can start today", body: "Add your timeline, level, and available time. Helo turns it into phases and daily tasks." },
        { label: "Daily coaching", count: "2/4", title: "Enter one concrete task scene every day", body: "The mentor brings you back to today's task with a short, focused conversation." },
        { label: "Assessment", count: "3/4", title: "After you finish, questions prove whether it landed", body: "No empty checkboxes. Helo asks for recall, explanation, or output quality." },
        { label: "Email return loop", count: "4/4", title: "When momentum breaks, return to the next step", body: "Email nudges carry today's task and the adjusted rhythm back to you." }
      ]
    },
    showcase: {
      title: "Bring your most important goals back into the conversation.",
      body: "Not just a reminder system. A mentor that keeps pulling you back to the next real step.",
      stories: [
        { name: "Spoken English goal", metric: "Day 8 / 30", quote: "From freezing up to practicing five lines every day.", cta: "Learn more" },
        { name: "Interview sprint", metric: "15-day plan", quote: "One mock round a day, with immediate feedback.", cta: "Learn more" },
        { name: "Sleep routine goal", metric: "21-day rhythm", quote: "Reminders, reflection, and friction in one place.", cta: "Learn more" },
        { name: "Portfolio sprint", metric: "7-day push", quote: "One deliverable a day, then explain what shipped.", cta: "Learn more" }
      ]
    },
    beforeAfter: {
      title: "One goal, before and after Helo.",
      body: "The difference is not more chat. It is daily forward motion.",
      beforeLabel: "Before Helo",
      beforeTitle: "Serious goal. Scattered follow-through.",
      beforeItems: [
        "The goal sinks after a few days",
        "AI chats happen without assessment",
        "Check-ins are just a tap",
        "One pause breaks the rhythm"
      ],
      afterLabel: "After Helo",
      afterTitle: "A clear next step every day.",
      afterItems: [
        "You know the next step every day",
        "Your mentor remembers pace and friction",
        "Questions verify the quality",
        "Gentle reminders pull you back"
      ],
      cta: "GET STARTED"
    },
    templates: {
      title: "Start with one goal, and Helo turns it into daily action",
      body: "Choose a goal template and see how the mentor breaks it down, nudges you, and checks quality.",
      panelTitle: "See Helo in action",
      actionLabel: "Preview plan",
      cta: "Start a goal",
      scenes: [
        {
          title: "30-day spoken English",
          mentor: "Patient English coach",
          status: "Day 6 / Today's task ready",
          tasks: ["Listen to 2 minutes of English", "Retell it in your own words", "Answer 3 comprehension questions"],
          question: "Say the main idea of this clip in English.",
          note: "Get the user speaking first, then check whether it actually landed."
        },
        {
          title: "15-day interview sprint",
          mentor: "High-focus career coach",
          status: "Day 4 / Behavioral interview practice",
          tasks: ["Outline one project story", "Write it in STAR structure", "Run one follow-up simulation"],
          question: "If the interviewer asks why it failed, how would you answer?",
          note: "Turn prep into daily prompts and use follow-ups to expose weak spots."
        },
        {
          title: "21-day sleep reset",
          mentor: "Gentle accountability mentor",
          status: "Day 8 / Bedtime rhythm adjustment",
          tasks: ["Put the phone down before 23:30", "Record today's biggest sleep friction", "Finish a 3-minute review"],
          question: "What is the trigger most likely to delay bedtime tonight?",
          note: "Lower the pressure and use smaller actions to pull rhythm back."
        },
        {
          title: "7-day portfolio sprint",
          mentor: "Practical project mentor",
          status: "Day 3 / Case structure",
          tasks: ["Choose one core project", "Write problem, process, and result", "Add 2 screenshot explanations"],
          question: "Which ability does this project prove best?",
          note: "Turn a vague portfolio into one deliverable per day."
        },
        {
          title: "100-day beginner fitness",
          mentor: "Strict but responsible coach",
          status: "Day 12 / Basic strength session",
          tasks: ["Finish a 20-minute session", "Log movement quality", "Report the hardest movement"],
          question: "Which movement broke form today, and how will you adjust?",
          note: "Focus on movement quality and consistency without exaggerated claims."
        },
        {
          title: "Custom goal",
          mentor: "Matched automatically",
          status: "Generate a plan after input",
          tasks: ["Describe what you want to finish", "Choose timeline and daily time", "Generate the first-day task"],
          question: "What verifiable result should exist when this goal ends?",
          note: "Any short-term goal becomes a timeline, task loop, and assessment standard."
        }
      ]
    },
    features: {
      title: "Put goals, tasks, chat, and assessment into one loop.",
      body: "Not an AI wrapped around a to-do list. A workflow where progress happens inside the conversation.",
      cards: [
        { icon: Target, title: "AI goal breakdown", text: "Turn fuzzy intentions into a timeline and daily tasks." },
        { icon: MessageCircle, title: "Daily coaching", text: "Your mentor remembers your preferences, pressure points, and habits." },
        { icon: FileCheck2, title: "Assessment by questions", text: "Use questions to confirm learning, not just a checkbox." },
        { icon: MailCheck, title: "Email nudges", text: "Send today's task in the morning and pull you back when you stall." }
      ]
    },
    steps: {
      title: "Three steps to let Helo move your goal forward.",
      body: "No complex planning first. Say what you want to finish, and Helo turns it into a rhythm of daily action, assessment, and gentle reminders.",
      items: [
        ["01", "Create your AI mentor", "Choose a gentle guide, high-focus coach, analytical mentor, or stricter accountability style for this goal."],
        ["02", "Set a short-term goal", "Add the outcome, timeline, and daily time. Helo breaks the fuzzy intention into phases and daily tasks."],
        ["03", "Execute and assess daily", "Get today's task, answer the mentor's assessment questions, and return through gentle email nudges when momentum slips."]
      ],
      checklistDone: "Memory: rhythm and friction",
      checklistPending: "Assessment: 3 questions",
      primaryCta: "START A GOAL",
      secondaryCta: "SEE HOW IT WORKS"
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "A few things to confirm first.",
      items: [
        ["How is Helo different from a to-do list?", "A to-do list only records what you need to do. Helo keeps asking about the goal, breaks it into daily actions, checks quality after completion, and nudges you back when the rhythm breaks."],
        ["How does AI know whether I actually finished?", "Helo does not only look at a checkbox. It generates assessment questions from your goal and today's task, then asks you to explain the result, output, or next step before suggesting pass, review, or adjustment."],
        ["Will the reminders feel too frequent?", "The default reminder style is restrained: mainly a daily task email and a gentle nudge after long inactivity. Reminders should pull you back into rhythm, not create pressure."],
        ["Can I create multiple mentors or goals?", "Yes. Each goal can have a mentor style that fits it, such as a patient English coach or a high-focus interview mentor. The homepage focuses on starting one goal first; complex management belongs inside the product."]
      ]
    },
    finalCta: {
      title: "Let one goal start moving today.",
      body: "Create a mentor, give it a goal, and Helo will prepare the first day's action, assessment question, and reminder rhythm.",
      cta: "START A GOAL",
      footerBody: "An AI goal mentor that turns short-term goals into daily action, assessment, and gentle reminders.",
      footerLinks: ["Product", "How it works", "FAQ", "Get started"]
    }
  }
};
