"use client";

import { Bebas_Neue, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import { type CSSProperties, useState } from "react";
import { BeforeAfterSection } from "../components/home/BeforeAfterSection";
import { HeroSection } from "../components/home/HeroSection";
import { LoopShowcaseSection } from "../components/home/LoopShowcaseSection";
import { MentorTemplatesSection } from "../components/home/MentorTemplatesSection";
import { FinalConversionSection } from "../components/home/FinalConversionSection";
import { useCompareProgress } from "../hooks/useCompareProgress";
import { copy, type Locale } from "../content/home";

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

export default function Home() {
  const [locale, setLocale] = useState<Locale>("zh");
  const compareProgress = useCompareProgress();
  const t = copy[locale];

  return (
    <main
      className={`${displayLatin.variable} ${displayCjk.variable} ${uiSans.variable} ${locale === "zh" ? "locale-zh" : "locale-en"}`}
      style={{ "--compare-progress": compareProgress } as CSSProperties}
    >
      <HeroSection locale={locale} setLocale={setLocale} t={t} />
      <LoopShowcaseSection t={t} />
      <BeforeAfterSection t={t} />
      <MentorTemplatesSection t={t} />
      <FinalConversionSection t={t} />
    </main>
  );
}
