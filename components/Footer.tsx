import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EMPRESA, buildWhatsAppUrl } from "@/content/empresa";
import { MODALIDADES_SEGURO } from "@/content/seguros";
import { SectionWaves } from "@/components/SectionWaves";
import { CopyrightYear } from "@/components/CopyrightYear";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-verde-escuro text-creme">
      <SectionWaves
        variant="gold"
        position="footer"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-55"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-dourado-areia/20 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo-zanella.png"
                alt="Zanella Seguros"
                width={52}
                height={52}
                className="h-13 w-13 rounded-lg object-cover ring-1 ring-dourado-areia/40"
              />
              <div>
                <p className="text-lg font-bold text-branco">Zanella Seguros</p>
                <p className="text-xs text-dourado-areia">
                  Desde {EMPRESA.anoFundacao} em Itajaí/SC
                </p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed font-light italic text-creme/90">
              {EMPRESA.frasesMarca.heroApoio}
            </p>

            <p className="inline-block rounded-md border border-dourado-areia/30 bg-verde-profundo/70 px-3 py-1.5 text-xs font-medium text-dourado-areia">
              Corretora parceira da rede {EMPRESA.redeParceira}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-wider text-dourado-areia uppercase">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-branco hover:underline">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-branco hover:underline"
                >
                  Sobre a Zanella
                </Link>
              </li>
              <li>
                <Link
                  href="/seguros"
                  className="hover:text-branco hover:underline"
                >
                  Todos os seguros
                </Link>
              </li>
              <li>
                <Link
                  href="/empresas"
                  className="hover:text-branco hover:underline"
                >
                  Para empresas
                </Link>
              </li>
              <li>
                <Link
                  href="/nautico"
                  className="hover:text-branco hover:underline"
                >
                  Seguro Náutico
                </Link>
              </li>
              <li>
                <Link
                  href="/conteudos"
                  className="hover:text-branco hover:underline"
                >
                  Conteúdos
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-branco hover:underline"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="hover:text-branco hover:underline"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-wider text-dourado-areia uppercase">
              Modalidades
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {MODALIDADES_SEGURO.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={
                      item.slug === "nautico"
                        ? "/nautico"
                        : `/seguros/${item.slug}`
                    }
                    className="text-creme/90 hover:text-branco hover:underline"
                  >
                    {item.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-wider text-dourado-areia uppercase">
              Contato e endereço
            </h2>
            <ul className="space-y-3 text-sm text-creme/90">
              <li>
                <a
                  href={EMPRESA.telefoneHref}
                  className="inline-flex items-center gap-2.5 hover:text-branco"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-dourado-areia"
                    aria-hidden="true"
                  />
                  <span>{EMPRESA.telefone}</span>
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-branco"
                >
                  <MessageCircle
                    className="h-4 w-4 shrink-0 text-dourado-areia"
                    aria-hidden="true"
                  />
                  <span>WhatsApp: {EMPRESA.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMPRESA.email}`}
                  className="inline-flex items-center gap-2.5 break-all hover:text-branco"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-dourado-areia"
                    aria-hidden="true"
                  />
                  <span>{EMPRESA.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-dourado-areia"
                  aria-hidden="true"
                />
                <span>{EMPRESA.endereco.completo}</span>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-xs font-semibold tracking-wider text-dourado-areia uppercase">
                Redes e arquivo
              </p>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <a
                  href={EMPRESA.redes.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dourado-areia/50 underline-offset-4 hover:text-branco"
                >
                  Instagram
                </a>
                <a
                  href={EMPRESA.redes.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dourado-areia/50 underline-offset-4 hover:text-branco"
                >
                  Facebook
                </a>
                <a
                  href={EMPRESA.redes.blogAntigo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dourado-areia/50 underline-offset-4 hover:text-branco"
                >
                  Arquivo do blog anterior
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs text-creme/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> Zanella Seguros. Todos os direitos reservados.
          </p>
          <p>Registro SUSEP: {EMPRESA.susep}</p>
        </div>
      </div>
    </footer>
  );
}
