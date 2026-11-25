import React from "react";
import {
  Anchor,
  Bike,
  Briefcase,
  Building,
  Building2,
  Car,
  Compass,
  FileCheck2,
  HeartHandshake,
  HeartPulse,
  Home,
  Plane,
  ShieldCheck,
} from "lucide-react";
import type { IconeModalidade } from "@/content/seguros";

interface ModalidadeIconProps {
  name: IconeModalidade;
  className?: string;
}

export function ModalidadeIcon({
  name,
  className = "w-5 h-5",
}: ModalidadeIconProps) {
  const props = {
    className,
    strokeWidth: 1.5,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "car":
      return <Car {...props} />;
    case "home":
      return <Home {...props} />;
    case "heart-handshake":
      return <HeartHandshake {...props} />;
    case "heart-pulse":
      return <HeartPulse {...props} />;
    case "plane":
      return <Plane {...props} />;
    case "bike":
      return <Bike {...props} />;
    case "building-2":
      return <Building2 {...props} />;
    case "building":
      return <Building {...props} />;
    case "briefcase":
      return <Briefcase {...props} />;
    case "shield-check":
      return <ShieldCheck {...props} />;
    case "file-check-2":
      return <FileCheck2 {...props} />;
    case "anchor":
      return <Anchor {...props} />;
    case "compass":
      return <Compass {...props} />;
  }
}
