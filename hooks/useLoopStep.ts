"use client";

import { useEffect, useState } from "react";
import { type Copy } from "../content/home";

export function useLoopStep(t: Pick<Copy, "loop">) {
  const [activeLoopStep, setActiveLoopStep] = useState(0);

  useEffect(() => {
    const updateActiveStep = () => {
      const stage = document.querySelector<HTMLElement>(".loop-scroll-stage");

      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const stageTop = rect.top + window.scrollY;
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      const rawProgress = Math.min(0.999, Math.max(0, (window.scrollY - stageTop) / scrollable));
      const segment = 1 / t.loop.stories.length;
      const step = Math.min(t.loop.stories.length - 1, Math.floor((rawProgress + segment * 0.12) / segment));

      setActiveLoopStep(step);
    };

    updateActiveStep();
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);

    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, [t.loop.stories.length]);

  return activeLoopStep;
}

