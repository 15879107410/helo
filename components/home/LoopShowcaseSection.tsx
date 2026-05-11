"use client";

import { ArrowRight, Check, MailCheck, MessageCircle } from "lucide-react";
import { useLoopStep } from "../../hooks/useLoopStep";
import { type Copy } from "../../content/home";

type LoopShowcaseSectionProps = {
  t: Copy
};

export function LoopShowcaseSection({ t }: LoopShowcaseSectionProps) {
  const activeLoopStep = useLoopStep(t);

  return (
    <section className="loop-showcase">
      <div className="loop-proof">
        <strong><span className="proof-heart">♥</span>{t.loop.stripTitle}</strong>
        <div className="loop-proof-marquee" aria-label={t.loop.stripTitle}>
          <div className="loop-proof-track">
            {[...t.loop.stripItems, ...t.loop.stripItems].map((item, index) => (
              <article className="loop-proof-card" data-tone={item.tone} key={`${item.name}-${index}`}>
                <span className="proof-avatar">
                  <img src={item.photo} alt="" loading="lazy" />
                </span>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.meta}</small>
                  <p>{item.quote}</p>
                  <em>查看下一步 <ArrowRight size={15} /></em>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="loop-intro">
        <div className="section-icon"><MessageCircle size={28} /></div>
        <h2>{t.loop.title[0]}<span>{t.loop.title[1]}</span></h2>
        <p>{t.loop.body}</p>
      </div>

      <div className="loop-scroll-stage">
        <div className="loop-panel">
          <div className="loop-panel-copy">
            <div className="loop-panel-kicker">
              <div className="loop-progress-dots" aria-hidden="true">
                {t.loop.stories.map((story, index) => (
                  <i key={story.label} className={activeLoopStep === index ? "active" : ""} />
                ))}
              </div>
            </div>
            <div className="loop-story-stack">
              {t.loop.stories.map((story, index) => (
                <article key={story.label} className={`loop-story ${activeLoopStep === index ? "active" : ""}`}>
                  <small>{story.count}</small>
                  <h3>{story.title}</h3>
                  <p>{story.body}</p>
                </article>
              ))}
            </div>
            <a href="#">{t.loop.cta}</a>
          </div>

          <div className="loop-mockup">
            <div className="loop-window">
              <div className="loop-window-top">
                <span />
                <strong>{t.loop.goal}</strong>
                <small>{t.loop.day}</small>
              </div>
              <article className={`daily-task ${activeLoopStep === 0 ? "active" : ""}`}>
                <small>{t.loop.taskTitle}</small>
                <p>{t.loop.taskBody}</p>
              </article>
              <div className={`loop-chat-row mentor ${activeLoopStep === 1 ? "active" : ""}`}>
                <span className="mini-face" />
                <p>{t.loop.mentorLine}</p>
              </div>
              <div className={`loop-chat-row user ${activeLoopStep === 1 ? "active" : ""}`}>
                <p>{t.loop.userLine}</p>
              </div>
              <article className={`assessment-card ${activeLoopStep === 2 ? "active" : ""}`}>
                <strong>{t.loop.assessmentTitle}</strong>
                {t.loop.assessmentItems.map((item) => (
                  <span key={item}><Check size={14} />{item}</span>
                ))}
              </article>
              <article className={`email-card ${activeLoopStep === 3 ? "active" : ""}`}>
                <MailCheck size={20} />
                <div>
                  <strong>{t.loop.emailTitle}</strong>
                  <p>{t.loop.emailBody}</p>
                </div>
              </article>
            </div>

            <div className="loop-stepbar">
              <span>
                <strong>{t.loop.stories[activeLoopStep].label}</strong>
                <em>{t.loop.stories[activeLoopStep].count}</em>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
