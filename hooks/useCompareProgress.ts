"use client";

import { useEffect, useState } from "react";

export function useCompareProgress(selector = ".compare-track", stickyTop = 96) {
  const [compareProgress, setCompareProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateCompare = () => {
      const track = document.querySelector<HTMLElement>(selector);
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const stickyDistance = Math.max(1, rect.height - window.innerHeight);
      const rawProgress = (stickyTop - rect.top) / stickyDistance;
      const nextProgress = Math.min(1, Math.max(0, rawProgress));
      setCompareProgress(nextProgress);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateCompare);
    };

    updateCompare();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [selector, stickyTop]);

  return compareProgress;
}

