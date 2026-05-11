"use client";

import { ArrowRight, Check, MessageCircle, Target } from "lucide-react";
import { useActiveScene } from "../../hooks/useActiveScene";
import { type Copy } from "../../content/home";

type MentorTemplatesSectionProps = {
  t: Copy
};

export function MentorTemplatesSection({ t }: MentorTemplatesSectionProps) {
  const [activeScene, setActiveScene] = useActiveScene();
  const scene = t.templates.scenes[activeScene] ?? t.templates.scenes[0];

  return (
    <section id="templates" className="templates">
      <div className="templates-intro">
        <div className="section-icon"><Target size={30} /></div>
        <h2>{t.templates.title.split("，").map((line) => <span key={line}>{line}</span>)}</h2>
        <p>{t.templates.body}</p>
      </div>
      <div className="template-board">
        <aside className="template-list-card">
          <h3>{t.templates.panelTitle}</h3>
          <div className="template-list">
            {t.templates.scenes.map((item, index) => (
              <button
                key={item.title}
                className={index === activeScene ? "active" : ""}
                type="button"
                onClick={() => setActiveScene(index)}
              >
                <span>{item.title}</span>
                <small>{t.templates.actionLabel} <ArrowRight size={17} /></small>
              </button>
            ))}
          </div>
          <a href="#">{t.templates.cta}</a>
        </aside>
        <div className="template-preview" key={scene.title}>
          <p className="template-note">{scene.note}</p>
          <div className="template-phone">
            <div className="template-phone-top">
              <span>Helo</span>
              <strong>{scene.mentor}</strong>
            </div>
            <div className="goal-card">
              <small>{scene.status}</small>
              <h4>{scene.title}</h4>
            </div>
            <div className="task-card">
              <span>Today</span>
              <ul>
                {scene.tasks.map((task) => (
                  <li key={task}><Check size={15} />{task}</li>
                ))}
              </ul>
            </div>
            <div className="question-card">
              <small>Assessment</small>
              <p>{scene.question}</p>
            </div>
          </div>
          <article className="mentor-card">
            <span><MessageCircle size={18} /></span>
            <div>
              <b>{scene.mentor}</b>
              <small>{scene.status}</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
