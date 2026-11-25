import React from "react";
import Image from "next/image";

interface CorretorCardProps {
  nome: string;
  cargo: string;
  frase: string;
  foto: string;
  fotoAlt: string;
  fotoPosition?: string;
  tone?: "white" | "cream";
}

export function CorretorCard({
  nome,
  cargo,
  frase,
  foto,
  fotoAlt,
  fotoPosition = "object-center",
  tone = "cream",
}: CorretorCardProps) {
  return (
    <article
      className={`flex flex-col gap-6 rounded-2xl border border-borda-sutil p-6 sm:flex-row sm:items-center ${
        tone === "white" ? "bg-branco" : "bg-creme-suave"
      }`}
    >
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-xl border border-borda-sutil bg-creme sm:w-44">
        <Image
          src={foto}
          alt={fotoAlt}
          fill
          sizes="(max-width: 640px) 100vw, 176px"
          className={`object-cover ${fotoPosition}`}
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-verde-profundo">{nome}</h3>
        <p className="mt-1 text-xs font-semibold tracking-wider text-texto-suave uppercase">
          {cargo}
        </p>
        <p className="mt-4 text-sm leading-relaxed font-light italic text-texto">
          &ldquo;{frase}&rdquo;
        </p>
      </div>
    </article>
  );
}
