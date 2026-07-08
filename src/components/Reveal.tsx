"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type RevealProps = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
