"use client";

import { ArrowRight, Check, CheckCircle2, ChevronDown, MailCheck } from "lucide-react";
import { type ReactNode } from "react";
import { type Copy } from "../../content/home";

type FinalConversionSectionProps = {
  t: Copy
};

export function FinalConversionSection({ t }: FinalConversionSectionProps) {
  return (
    <>
      <Steps t={t} />
      <FAQ t={t} />
      <FinalCTA t={t} />
    </>
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
            <div className="step-copy">
              <strong>{num}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="step-visual" aria-hidden="true">
                {num === "01" ? (
                  <>
                    <div className="mentor-avatar">AI</div>
                    <span>高效教练型</span>
                    <small>语气清晰 / 记住障碍</small>
                  </>
                ) : null}
                {num === "02" ? (
                  <>
                    <div className="goal-input">15 天面试冲刺</div>
                    <span>周期 15 天</span>
                    <small>每天 30 分钟</small>
                  </>
                ) : null}
                {num === "03" ? (
                  <>
                    <div className="mail-chip"><MailCheck size={16} />08:00</div>
                    <span>今日任务已生成</span>
                    <small>验收问题 3 个</small>
                  </>
                ) : null}
              </div>
            </div>
            <div className="step-mini">
              {num === "01" ? (
                <>
                  <Task checked>导师风格：高效教练型</Task>
                  <Task checked>{t.steps.checklistDone}</Task>
                </>
              ) : null}
              {num === "02" ? (
                <>
                  <Task checked>目标：15 天面试冲刺</Task>
                  <Task checked>每天：30 分钟</Task>
                </>
              ) : null}
              {num === "03" ? (
                <>
                  <Task checked>今日任务已生成</Task>
                  <Task checked>{t.steps.checklistPending}</Task>
                </>
              ) : null}
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
        <div className="section-icon"><CheckCircle2 size={30} /></div>
        <span>{t.faq.eyebrow}</span>
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
      <footer className="home-footer">
        <div>
          <strong>Helo</strong>
          <p>{t.finalCta.footerBody}</p>
        </div>
        <nav>
          {t.finalCta.footerLinks.map((link, index) => (
            <a key={link} href={index === 1 ? "#steps" : index === 2 ? "#faq" : "#"}>{link}</a>
          ))}
        </nav>
      </footer>
    </section>
  );
}

function Task({ children, checked = false }: { children: ReactNode, checked?: boolean }) {
  return (
    <div className="task">
      <span>{checked ? <Check size={13} /> : null}</span>
      <p className={checked ? "done" : ""}>{children}</p>
    </div>
  );
}

