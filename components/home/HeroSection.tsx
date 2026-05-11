"use client";

import { ChevronDown, Menu } from "lucide-react";
import { useStickyNav } from "../../hooks/useStickyNav";
import { type Copy, type Locale } from "../../content/home";

type HeroSectionProps = {
  locale: Locale,
  setLocale: (locale: Locale) => void,
  t: Copy
};

export function HeroSection({ locale, setLocale, t }: HeroSectionProps) {
  const isStuck = useStickyNav();

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
