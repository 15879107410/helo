import { Check, CheckCircle2 } from "lucide-react";
import { type Copy } from "../../content/home";

type BeforeAfterSectionProps = {
  t: Copy
};

export function BeforeAfterSection({ t }: BeforeAfterSectionProps) {
  return (
    <section className="before-after">
      <div className="section-title">
        <div className="section-icon"><CheckCircle2 size={30} /></div>
        <h2>{t.beforeAfter.title}</h2>
        <p>{t.beforeAfter.body}</p>
      </div>
      <div className="compare-track">
        <div className="compare">
          <article className="before-card">
            <div className="compare-card-copy">
              <span>{t.beforeAfter.beforeLabel}</span>
              <h3>{t.beforeAfter.beforeTitle.split("，").map((line) => <span key={line}>{line}</span>)}</h3>
            </div>
            <ul>
              {t.beforeAfter.beforeItems.map((item) => (
                <li key={item}>{item}<Check size={18} /></li>
              ))}
            </ul>
            <a className="compare-cta" href="#">{t.beforeAfter.cta}</a>
          </article>
          <article className="after">
            <div className="compare-card-copy">
              <span>{t.beforeAfter.afterLabel}</span>
              <h3>{t.beforeAfter.afterTitle.split("，").map((line) => <span key={line}>{line}</span>)}</h3>
            </div>
            <ul>
              {t.beforeAfter.afterItems.map((item) => (
                <li key={item}>{item}<Check size={18} /></li>
              ))}
            </ul>
            <a className="compare-cta" href="#">{t.beforeAfter.cta}</a>
          </article>
        </div>
      </div>
    </section>
  );
}

