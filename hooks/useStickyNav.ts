"use client";

import { useEffect, useState } from "react";

export function useStickyNav(threshold = 88) {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const update = () => setIsStuck(window.scrollY > threshold);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);

  return isStuck;
}

