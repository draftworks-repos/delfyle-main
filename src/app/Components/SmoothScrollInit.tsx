"use client";

import { useEffect } from "react";
import { initializeSmoothScroll } from "@/utils/smoothScroll";

export default function SmoothScrollInit() {
  useEffect(() => {
    initializeSmoothScroll();
  }, []);

  return null;
}
