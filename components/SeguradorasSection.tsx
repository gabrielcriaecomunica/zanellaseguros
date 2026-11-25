import React from "react";
import Image from "next/image";
import { EMPRESA } from "@/content/empresa";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface SeguradorasSectionProps {
  variant?: "cream" | "white";
}

export function SeguradorasSection({
  variant = "cream",
}: SeguradorasSectionProps) {
  return (
    <section
      aria-labelledby="seguradoras-heading"
      className={variant === "cream" ? "bg-creme py-14 sm:py-16" : "bg-branco py-14 sm:py-16"}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold tracking-widest text-verde-profundo uppercase">
              Independência com força de rede
            </span>
            <h2
              id="seguradoras-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-verde-profundo sm:text-3xl"
            >
              Principais seguradoras parceiras
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {EMPRESA.seguradorasParceiras.map((seg, index) => (
            <RevealOnScroll key={seg.nome} delayMs={index * 50}>
              <div className="flex h-28 items-center justify-center rounded-xl border border-borda-sutil bg-branco px-5 py-4 transition-shadow hover:shadow-xs">
                <Image
                  src={seg.logo}
                  alt={seg.nome}
                  width={seg.width}
                  height={seg.height}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-texto-suave">
          Entre outras seguradoras disponíveis pela rede {EMPRESA.redeParceira},
          conforme a modalidade e os critérios de contratação de cada produto.
        </p>
      </div>
    </section>
  );
}
