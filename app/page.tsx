"use client";

import { Bebas_Neue, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  MailCheck,
  Menu,
  MessageCircle,
  Target
} from "lucide-react";
import { useEffect, useState } from "react";

const displayLatin = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display-latin"
});

const displayCjk = Noto_Serif_SC({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-display-cjk"
});

const uiSans = Noto_Sans_SC({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-ui-sans"
});

type Locale = "zh" | "en";

type Copy = {
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
    cards: Array<[string, string, string, string]>,
    previewTitle: string,
    previewLine1: string,
    previewLine2: string,
    previewAction: string,
    mentorName: string,
    mentorMeta: string
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
    cta: string
  }
};

const copy: Record<Locale, Copy> = {
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
      title: "目标推进前后，对比会很明显。",
      body: "更少假努力，更少拖延中断。",
      beforeLabel: "使用前",
      beforeTitle: "计划很多，但没有真正完成",
      beforeItems: [
        "目标写在备忘录里，几天后就忘了。",
        "AI 聊天很热闹，但没有验收。",
        "打卡只是点一下，没人追问质量。",
        "中断之后，只能重新靠意志力开始。"
      ],
      afterLabel: "使用后",
      afterTitle: "更少漂移，更多真正完成",
      afterItems: [
        "每天知道下一步做什么。",
        "导师记住你的节奏和阻碍。",
        "完成后回答问题，确认真的掌握。",
        "停下来时收到温和提醒和调整建议。"
      ],
      cta: "立即开始"
    },
    templates: {
      title: "从一个模板开始，不用从空白开始。",
      body: "先跑起来，再让导师按你的基础、时间和完成情况调整节奏。",
      cards: [
        ["学习", "30 天英语口语", "温柔陪跑型", "每天 25 分钟"],
        ["工作", "15 天面试准备", "高效教练型", "每日模拟问答"],
        ["作品", "7 天作品集冲刺", "严格督促型", "每天一个产出"],
        ["习惯", "21 天早睡计划", "朋友陪伴型", "提醒 + 复盘"],
        ["健康", "100 天健身入门", "理性分析型", "循序渐进"],
        ["自定义", "创建你的目标", "自由选择导师", "自动拆解"]
      ],
      previewTitle: "30 天英语口语",
      previewLine1: "今天只练咖啡店点单场景。先听，再复述。",
      previewLine2: "完成后我会问你 3 个验收问题。",
      previewAction: "开始验收",
      mentorName: "Helo 导师 林澈",
      mentorMeta: "正在陪跑今日任务"
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
      title: "三步开始你的第一个目标。",
      body: "不用学习复杂方法论，先把第一个目标跑起来。",
      items: [
        ["01", "创建导师", "先创建一位 AI 导师，不需要配置复杂系统。"],
        ["02", "设定目标", "输入周期、基础和每天可投入时间，自动生成计划。"],
        ["03", "每天执行", "每天聊天陪跑，完成后通过提问验收。"]
      ],
      checklistDone: "已完成",
      checklistPending: "今日验收",
      primaryCta: "免费开始",
      secondaryCta: "查看模板"
    },
    faq: {
      eyebrow: "常见问题",
      title: "开始前，你可能想知道这些。",
      items: [
        ["Helo 和待办清单有什么区别？", "待办清单只记录事情，Helo 会拆计划、陪执行、提问验收，并根据表现调整后续节奏。"],
        ["AI 怎么判断我是不是真的完成？", "导师会根据当天任务生成 3 到 5 个问题，通过复述、问答或产出说明判断完成质量。"],
        ["会不会提醒太频繁？", "第一版以每日任务邮件和长时间未执行提醒为主，后续可以在设置中调整提醒节奏。"],
        ["可以创建多个导师吗？", "可以。不同目标可以绑定不同导师，拥有独立的人设、语气和记忆。"]
      ]
    },
    finalCta: {
      title: "今天开始，让目标真的往前走一步。",
      body: "先免费创建一位导师，体验一次从计划到验收的完整闭环。",
      cta: "立即开始"
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
      title: "Your goals: before and after.",
      body: "Less fake progress. Less drift.",
      beforeLabel: "Before",
      beforeTitle: "Plenty of plans, not much proof",
      beforeItems: [
        "Your goal lives in notes and disappears in a few days.",
        "AI chats feel lively, but nothing gets assessed.",
        "Checking a box is enough, even if nothing stuck.",
        "Once momentum breaks, you start over from zero."
      ],
      afterLabel: "After",
      afterTitle: "Less drift, more done",
      afterItems: [
        "You know the next step every day.",
        "Your mentor remembers your pace and friction.",
        "You answer questions to prove it really landed.",
        "You get a gentle nudge when momentum slips."
      ],
      cta: "GET STARTED"
    },
    templates: {
      title: "Start from a template, not a blank page.",
      body: "Get moving fast, then let the mentor tune the rhythm to your time, level, and follow-through.",
      cards: [
        ["LEARNING", "30-day spoken English", "Gentle mentor", "25 minutes a day"],
        ["WORK", "15-day interview prep", "High-focus coach", "Daily mock Q&A"],
        ["PORTFOLIO", "7-day portfolio sprint", "Strict mentor", "One output per day"],
        ["HABITS", "21-day sleep reset", "Friendly guide", "Reminder + review"],
        ["HEALTH", "100-day beginner fitness", "Analytical mentor", "Gradual build-up"],
        ["CUSTOM", "Create your own goal", "Choose any mentor", "Auto breakdown"]
      ],
      previewTitle: "30-day spoken English",
      previewLine1: "Practice the coffee-ordering scenario today. Listen first, then repeat.",
      previewLine2: "I'll ask 3 questions after you finish.",
      previewAction: "Start assessment",
      mentorName: "Helo Mentor Lin Che",
      mentorMeta: "Coaching today's task right now"
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
      title: "Get started in three simple steps.",
      body: "No heavy system. Just get your first goal moving.",
      items: [
        ["01", "Create a mentor", "Start with one AI mentor. No complex setup needed."],
        ["02", "Set a goal", "Add your timeline, level, and daily time. The plan builds itself."],
        ["03", "Show up daily", "Chat every day and answer assessment questions when you finish."]
      ],
      checklistDone: "Completed",
      checklistPending: "Today's check-in",
      primaryCta: "START FREE",
      secondaryCta: "SEE TEMPLATES"
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "A few things you may want to know first.",
      items: [
        ["How is Helo different from a to-do list?", "A to-do list only stores tasks. Helo plans, coaches, assesses, and adjusts the rhythm based on how you're doing."],
        ["How does AI know whether I actually finished?", "The mentor generates 3 to 5 questions based on today's task and checks whether your explanation, recall, or output really holds up."],
        ["Will the reminders feel spammy?", "Version one focuses on a daily task email and a gentle nudge when you've been away too long. More controls can come later."],
        ["Can I create more than one mentor?", "Yes. Different goals can have different mentors, each with their own tone, memory, and context."]
      ]
    },
    finalCta: {
      title: "Start today, and move one real goal forward.",
      body: "Create a mentor for free and try the full loop from plan to assessment.",
      cta: "GET STARTED"
    }
  }
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("zh");
  const t = copy[locale];

  return (
    <main className={`${displayLatin.variable} ${displayCjk.variable} ${uiSans.variable} ${locale === "zh" ? "locale-zh" : "locale-en"}`}>
      <Hero locale={locale} setLocale={setLocale} t={t} />
      <LogoStrip t={t} />
      <Showcase t={t} />
      <BeforeAfter t={t} />
      <MentorTemplates t={t} />
      <FeatureShowcase t={t} />
      <Steps t={t} />
      <FAQ t={t} />
      <FinalCTA t={t} />
    </main>
  );
}

function Hero({
  locale,
  setLocale,
  t
}: {
  locale: Locale,
  setLocale: (locale: Locale) => void,
  t: Copy
}) {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const update = () => setIsStuck(window.scrollY > 88);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="mc-hero">
      <div className="hero-bg" />
      <header className={isStuck ? "mc-nav is-stuck" : "mc-nav"}>
        <div className="nav-left">
          <a className="mc-logo" href="#">Helo</a>
          <button
            className="lang"
            type="button"
            onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
            aria-label={locale === "zh" ? "切换到英文" : "Switch to Chinese"}
          >
            {t.nav.locale} <ChevronDown size={14} />
          </button>
        </div>
        <nav>
          {t.nav.items.map((item, index) => (
            <a key={item} href={index === 0 ? "#features" : index === 1 ? "#templates" : index === 2 ? "#steps" : "#faq"}>
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a href="#">{t.nav.primaryCta}</a>
          <a href="#">{t.nav.secondaryCta}</a>
        </div>
        <button className="mobile-menu" aria-label="Open menu"><Menu size={28} /></button>
      </header>

      <div className="hero-copy">
        <h1>{locale === "zh" ? t.hero.title.join("") : <>{t.hero.title[0]}<span>{t.hero.title[1]}</span><span>{t.hero.title[2]}</span></>}</h1>
        <p>{t.hero.body}</p>
        <a className="primary-cta" href="#">{t.hero.cta}</a>
      </div>

      <div className="chat-demo">
        <div className="chat-stream">
          <div className="chat-track">
            {t.chat.map((item, index) => (
              <div key={`${item.prompt}-${index}`} className="chat-pair">
                <div className="mentor-line">
                  <span className={item.avatar === "alt" ? "mini-face alt" : "mini-face"} />
                  <div className="chat-bubble dark">{item.prompt}</div>
                </div>
                <div className="chat-card purple">
                  <p>{item.reply}</p>
                  <button>{item.action}</button>
                </div>
              </div>
            ))}
            <div className="chat-pair">
              <div className="mentor-line">
                <span className="mini-face" />
                <div className="chat-bubble dark">{t.chat[0].prompt}</div>
              </div>
              <div className="chat-card purple">
                <p>{t.chat[0].reply}</p>
                <button>{t.chat[0].action}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoStrip({ t }: { t: Copy }) {
  return (
    <section className="logo-strip">
      <h2>{t.proof.title}</h2>
      <div>
        {t.proof.items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}

function Showcase({ t }: { t: Copy }) {
  return (
    <section className="showcase">
      <div className="showcase-copy">
        <div className="section-icon"><MessageCircle size={28} /></div>
        <h2>{t.showcase.title}</h2>
        <p>{t.showcase.body}</p>
      </div>
      <div className="story-row">
        {t.showcase.stories.map((story, index) => (
          <article key={story.name} className={`story-card story-${index + 1}`}>
            <div className="story-avatar"><Human tone={index % 2 ? "violet" : "mint"} /></div>
            <strong>{story.name}</strong>
            <span>{story.metric}</span>
            <p>{story.quote}</p>
            <a href="#">{story.cta}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function BeforeAfter({ t }: { t: Copy }) {
  return (
    <section className="before-after">
      <div className="section-title">
        <div className="section-icon"><CheckCircle2 size={30} /></div>
        <h2>{t.beforeAfter.title}</h2>
        <p>{t.beforeAfter.body}</p>
      </div>
      <div className="compare">
        <article>
          <span>{t.beforeAfter.beforeLabel}</span>
          <h3>{t.beforeAfter.beforeTitle}</h3>
          <ul>
            {t.beforeAfter.beforeItems.map((item) => (
              <li key={item}><Check size={16} />{item}</li>
            ))}
          </ul>
          <a className="inline-cta" href="#">{t.beforeAfter.cta}</a>
        </article>
        <article className="after">
          <span>{t.beforeAfter.afterLabel}</span>
          <h3>{t.beforeAfter.afterTitle}</h3>
          <ul>
            {t.beforeAfter.afterItems.map((item) => (
              <li key={item}><Check size={16} />{item}</li>
            ))}
          </ul>
          <a className="inline-cta" href="#">{t.beforeAfter.cta}</a>
        </article>
      </div>
    </section>
  );
}

function MentorTemplates({ t }: { t: Copy }) {
  return (
    <section id="templates" className="templates">
      <div className="templates-intro">
        <div className="section-icon"><Target size={30} /></div>
        <h2>{t.templates.title}</h2>
        <p>{t.templates.body}</p>
      </div>
      <div className="template-board">
        <div className="template-list">
          {t.templates.cards.map(([category, title, mentor, meta], index) => (
            <article key={title} className={index === 0 ? "active" : ""}>
              <span>{category}</span>
              <h3>{title}</h3>
              <p>{mentor}</p>
              <small>{meta}</small>
            </article>
          ))}
        </div>
        <div className="template-preview">
          <div className="phone-ui">
            <div className="phone-top">{t.templates.previewTitle}</div>
            <MessageBubble>{t.templates.previewLine1}</MessageBubble>
            <MessageBubble purple>{t.templates.previewLine2}</MessageBubble>
            <div className="phone-cta">{t.templates.previewAction}</div>
          </div>
          <article className="creator-card">
            <span />
            <div>
              <b>{t.templates.mentorName}</b>
              <small>{t.templates.mentorMeta}</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function FeatureShowcase({ t }: { t: Copy }) {
  return (
    <section id="features" className="feature-showcase">
      <div className="feature-copy">
        <div className="section-icon"><FileCheck2 size={30} /></div>
        <h2>{t.features.title}</h2>
        <p>{t.features.body}</p>
      </div>
      <div className="feature-panels">
        {t.features.cards.map((feature) => (
          <article key={feature.title}>
            <feature.icon size={24} />
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Steps({ t }: { t: Copy }) {
  return (
    <section id="steps" className="steps">
      <div className="section-title centered">
        <div className="section-icon"><ArrowRight size={30} /></div>
        <h2>{t.steps.title}</h2>
        <p>{t.steps.body}</p>
      </div>
      <div className="step-grid">
        {t.steps.items.map(([num, title, text]) => (
          <article key={num}>
            <strong>{num}</strong>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="step-mini">
              <Task checked={num !== "03"}>{num !== "03" ? title : t.steps.checklistDone}</Task>
              <Task checked={num === "03"}>{t.steps.checklistPending}</Task>
            </div>
          </article>
        ))}
      </div>
      <div className="steps-actions">
        <a href="#">{t.steps.primaryCta}</a>
        <a href="#">{t.steps.secondaryCta}</a>
      </div>
    </section>
  );
}

function FAQ({ t }: { t: Copy }) {
  return (
    <section id="faq" className="faq">
      <div className="section-title centered">
        <p>{t.faq.eyebrow}</p>
        <h2>{t.faq.title}</h2>
      </div>
      <div className="faq-list">
        {t.faq.items.map(([q, a]) => (
          <details key={q}>
            <summary>{q}<ChevronDown size={20} /></summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCTA({ t }: { t: Copy }) {
  return (
    <section className="final-cta">
      <h2>{t.finalCta.title}</h2>
      <p>{t.finalCta.body}</p>
      <a href="#">{t.finalCta.cta} <ArrowRight size={18} /></a>
    </section>
  );
}

function MessageBubble({ children, purple = false }: { children: React.ReactNode, purple?: boolean }) {
  return <div className={purple ? "phone-message purple" : "phone-message"}>{children}</div>;
}

function Task({ children, checked = false }: { children: React.ReactNode, checked?: boolean }) {
  return (
    <div className="task">
      <span>{checked ? <Check size={13} /> : null}</span>
      <p className={checked ? "done" : ""}>{children}</p>
    </div>
  );
}

function Human({ tone }: { tone: string }) {
  return (
    <div className={`human ${tone}`}>
      <div className="head" />
      <div className="hair" />
      <div className="body" />
      <div className="arm left" />
      <div className="arm right" />
      <div className="leg left" />
      <div className="leg right" />
    </div>
  );
}
