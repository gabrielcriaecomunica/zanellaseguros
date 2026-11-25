import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { EMPRESA } from "@/content/empresa";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";
import { CookieBanner } from "@/components/CookieBanner";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(EMPRESA.siteUrl),
  title: {
    default: "Zanella Seguros | Corretora de Seguros em Itajaí desde 1991",
    template: "%s | Zanella Seguros",
  },
  description:
    "Corretora de seguros independente em Itajaí e Balneário Camboriú com 35 anos de história. Atendimento consultivo para pessoas, famílias, empresas e seguro náutico em todo o Brasil.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: EMPRESA.siteUrl,
    siteName: "Zanella Seguros",
    title: "Zanella Seguros | Proteger não é pensar no pior. É cuidar do que importa.",
    description:
      "Empresa familiar de duas gerações em Itajaí/SC, parceira da rede Lojacorr. Atendimento humano para você, sua família, sua empresa e sua embarcação.",
    images: [
      {
        url: "/images/logo-zanella.png",
        width: 1024,
        height: 1024,
        alt: "Zanella Seguros",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["InsuranceAgency", "LocalBusiness"],
    name: EMPRESA.nome,
    url: EMPRESA.siteUrl,
    logo: `${EMPRESA.siteUrl}/images/logo-zanella.png`,
    image: `${EMPRESA.siteUrl}/images/logo-zanella.png`,
    telephone: "+55-47-3348-4358",
    email: EMPRESA.email,
    foundingDate: "1991",
    areaServed: ["Itajaí", "Balneário Camboriú", "Brasil"],
    address: {
      "@type": "PostalAddress",
      streetAddress: EMPRESA.endereco.logradouro,
      addressLocality: EMPRESA.endereco.cidade,
      addressRegion: EMPRESA.endereco.estado,
      postalCode: EMPRESA.endereco.cep,
      addressCountry: "BR",
    },
    openingHours: EMPRESA.horarioAtendimento,
    sameAs: [EMPRESA.redes.instagram, EMPRESA.redes.facebook],
  };

  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-branco text-texto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-verde-profundo focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-branco"
        >
          Ir para o conteúdo principal
        </a>
        <Header />
        <main id="conteudo-principal" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
        <CookieBanner />
      </body>
    </html>
  );
}
