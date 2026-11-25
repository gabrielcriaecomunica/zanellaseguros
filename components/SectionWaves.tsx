import React from "react";

interface SectionWavesProps {
  variant?: "gold" | "green";
  position?: "hero" | "divider" | "backdrop" | "footer";
  className?: string;
}

/**
 * Grafismo proprietário da Zanella Seguros: linhas finas onduladas
 * que remetem ao litoral de Itajaí e Balneário Camboriú.
 * Regra de contraste: dourado apenas sobre verde; verde sobre fundos claros.
 */
export function SectionWaves({
  variant = "green",
  position = "divider",
  className = "",
}: SectionWavesProps) {
  const strokeColor =
    variant === "gold" ? "var(--dourado-areia)" : "var(--verde-profundo)";

  if (position === "divider") {
    return (
      <div
        aria-hidden="true"
        className={`w-full overflow-hidden pointer-events-none select-none ${className}`}
      >
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-9 md:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0 24C180 6 360 6 540 24C720 42 900 42 1080 24C1260 6 1350 12 1440 24"
            stroke={strokeColor}
            strokeWidth="1.2"
            strokeOpacity={variant === "gold" ? "0.42" : "0.22"}
          />
          <path
            d="M0 36C200 18 380 18 560 36C740 54 920 54 1100 36C1280 18 1360 24 1440 36"
            stroke={strokeColor}
            strokeWidth="1"
            strokeOpacity={variant === "gold" ? "0.26" : "0.14"}
          />
        </svg>
      </div>
    );
  }

  if (position === "backdrop") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none select-none overflow-hidden ${className}`}
      >
        <svg
          viewBox="0 0 600 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M-20 45C90 15 190 75 300 45C410 15 510 75 620 45"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeOpacity={variant === "gold" ? "0.35" : "0.18"}
          />
          <path
            d="M-20 75C90 45 190 105 300 75C410 45 510 105 620 75"
            stroke={strokeColor}
            strokeWidth="1.1"
            strokeOpacity={variant === "gold" ? "0.24" : "0.12"}
          />
          <path
            d="M-20 105C90 75 190 135 300 105C410 75 510 135 620 105"
            stroke={strokeColor}
            strokeWidth="0.95"
            strokeOpacity={variant === "gold" ? "0.16" : "0.08"}
          />
        </svg>
      </div>
    );
  }

  // hero ou footer: ondas amplas e suaves no fundo
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1440 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M-60 95C190 25 410 155 690 95C970 35 1210 145 1500 80"
          stroke={strokeColor}
          strokeWidth="1.4"
          strokeOpacity={variant === "gold" ? "0.34" : "0.18"}
        />
        <path
          d="M-60 135C210 65 430 195 710 135C990 75 1230 185 1500 120"
          stroke={strokeColor}
          strokeWidth="1.15"
          strokeOpacity={variant === "gold" ? "0.24" : "0.12"}
        />
        <path
          d="M-60 175C230 105 450 235 730 175C1010 115 1250 225 1500 160"
          stroke={strokeColor}
          strokeWidth="0.9"
          strokeOpacity={variant === "gold" ? "0.16" : "0.08"}
        />
      </svg>
    </div>
  );
}
