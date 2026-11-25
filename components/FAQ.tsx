"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { PerguntaFrequente } from "@/content/seguros";

interface FAQProps {
  items: PerguntaFrequente[];
  title?: string;
}

export function FAQ({
  items,
  title = "Perguntas frequentes",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-heading" className="w-full">
      <h2
        id="faq-heading"
        className="text-2xl font-bold tracking-tight text-verde-profundo sm:text-3xl"
      >
        {title}
      </h2>
      <div className="mt-6 divide-y divide-borda-sutil rounded-xl border border-borda-sutil bg-branco">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `faq-panel-${idx}`;
          const buttonId = `faq-button-${idx}`;

          return (
            <div key={item.pergunta}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-verde-profundo transition-colors hover:bg-creme-suave sm:px-6 sm:py-5"
                >
                  <span>{item.pergunta}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-verde-profundo transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-5 pb-5 text-sm leading-relaxed text-texto-suave sm:px-6 sm:text-base"
              >
                {item.resposta}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
