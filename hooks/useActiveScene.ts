"use client";

import { useState } from "react";

export function useActiveScene(initialScene = 0) {
  const [activeScene, setActiveScene] = useState(initialScene);
  return [activeScene, setActiveScene] as const;
}

