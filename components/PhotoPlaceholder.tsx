import React from "react";
import { Camera } from "lucide-react";

interface PhotoPlaceholderProps {
  label: string;
  aspect?: "4/3" | "16/9" | "3/2" | "4/5" | "1/1";
  tone?: "light" | "dark";
  className?: string;
}

const ASPECT_CLASSES: Record<
  NonNullable<PhotoPlaceholderProps["aspect"]>,
  string
> = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
  "3/2": "aspect-[3/2]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
};

export function PhotoPlaceholder({
  label,
  aspect = "4/3",
  tone = "light",
  className = "",
}: PhotoPlaceholderProps) {
  const isDark = tone === "dark";

  return (
    <figure
      className={`relative overflow-hidden rounded-xl border ${
        isDark
          ? "border-dourado-areia/30 bg-verde-escuro/80 text-creme"
          : "border-borda-sutil bg-creme text-texto"
      } ${ASPECT_CLASSES[aspect]} ${className}`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 opacity-40 ${
          isDark
            ? "bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.18),transparent_60%)]"
            : "bg-[radial-gradient(circle_at_top_right,rgba(15,59,46,0.08),transparent_60%)]"
        }`}
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center">
        <div
          className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full border ${
            isDark
              ? "border-dourado-areia/40 bg-verde-profundo text-dourado-areia"
              : "border-verde-profundo/20 bg-branco text-verde-profundo"
          }`}
        >
          <Camera className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <figcaption
          className={`max-w-xs text-xs leading-relaxed font-medium ${
            isDark ? "text-creme/90" : "text-texto-suave"
          }`}
        >
          {label}
        </figcaption>
      </div>
    </figure>
  );
}
