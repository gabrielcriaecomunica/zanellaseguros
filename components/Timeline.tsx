import React from "react";
import { EMPRESA } from "@/content/empresa";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface TimelineProps {
  variant?: "compact" | "full";
}

export function Timeline({ variant = "compact" }: TimelineProps) {
  return (
    <ol className="relative space-y-6 border-l border-verde-profundo/20 pl-6 sm:pl-8">
      {EMPRESA.linhaDoTempo.map((marco, index) => (
        <li key={marco.ano} className="relative">
          <RevealOnScroll delayMs={index * 60}>
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-verde-profundo bg-creme sm:-left-[39px]"
            />
            <div
              className={`rounded-xl border border-borda-sutil bg-branco p-5 ${
                variant === "full" ? "sm:p-6" : ""
              }`}
            >
              <span className="inline-block rounded-full bg-creme px-3 py-0.5 text-xs font-bold tracking-wider text-verde-profundo uppercase">
                {marco.ano}
              </span>
              <h3 className="mt-2.5 text-lg font-bold text-verde-profundo">
                {marco.titulo}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-texto-suave sm:text-base">
                {marco.descricao}
              </p>
            </div>
          </RevealOnScroll>
        </li>
      ))}
    </ol>
  );
}
