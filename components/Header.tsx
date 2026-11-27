"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { EMPRESA, buildWhatsAppUrl } from "@/content/empresa";
import { PERFIS_SEGURO, getModalidadesByPerfil } from "@/content/seguros";
import { ModalidadeIcon } from "@/components/ModalidadeIcon";

export function Header() {
  const pathname = usePathname();
  const [megaOpenPath, setMegaOpenPath] = useState<string | null>(null);
  const [mobileOpenPath, setMobileOpenPath] = useState<string | null>(null);
  const [mobileSegurosOpen, setMobileSegurosOpen] = useState(false);
  const megaContainerRef = useRef<HTMLDivElement>(null);

  const megaOpen = megaOpenPath === pathname;
  const mobileOpen = mobileOpenPath === pathname;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpenPath(null);
        setMobileOpenPath(null);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (
        megaContainerRef.current &&
        !megaContainerRef.current.contains(e.target as Node)
      ) {
        setMegaOpenPath(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const navLinkClass = (href: string) =>
    `text-sm font-medium transition-colors hover:text-verde-profundo ${
      pathname === href
        ? "text-verde-profundo underline decoration-verde-profundo/50 underline-offset-4"
        : "text-texto-suave"
    }`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-borda-sutil/80 bg-branco/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-md py-1"
          aria-label="Zanella Seguros, página inicial"
        >
          <Image
            src="/images/simbolo-zanella.png"
            alt="Zanella Seguros"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-lg object-cover shadow-xs"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-verde-profundo">
              Zanella Seguros
            </span>
            <span className="text-[11px] font-medium text-texto-suave lg:hidden">
              Itajaí e todo o Brasil
            </span>
          </div>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 lg:flex"
        >
          <Link href="/sobre" className={navLinkClass("/sobre")}>
            Sobre
          </Link>

          <div
            ref={megaContainerRef}
            className="relative"
            onMouseEnter={() => setMegaOpenPath(pathname)}
            onMouseLeave={() => setMegaOpenPath(null)}
          >
            <button
              type="button"
              aria-expanded={megaOpen}
              aria-controls="mega-menu-seguros"
              onClick={() =>
                setMegaOpenPath((prev) => (prev === pathname ? null : pathname))
              }
              className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-verde-profundo ${
                pathname.startsWith("/seguros")
                  ? "text-verde-profundo underline decoration-verde-profundo/50 underline-offset-4"
                  : "text-texto-suave"
              }`}
            >
              <span>Seguros</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-150 ${
                  megaOpen ? "rotate-180" : ""
                }`}
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </button>

            {megaOpen && (
              <div
                id="mega-menu-seguros"
                className="absolute top-full left-1/2 z-50 mt-3 w-[760px] -translate-x-1/2 rounded-2xl border border-borda-sutil bg-branco p-6 shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between border-b border-borda-sutil pb-3">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-verde-profundo uppercase">
                      Soluções de proteção
                    </p>
                    <p className="text-xs text-texto-suave">
                      Atendimento consultivo com as principais seguradoras pela rede{" "}
                      {EMPRESA.redeParceira}
                    </p>
                  </div>
                  <Link
                    href="/seguros"
                    className="rounded-lg bg-creme px-3 py-1.5 text-xs font-semibold text-verde-profundo transition-colors hover:bg-verde-profundo hover:text-branco"
                  >
                    Ver todas as modalidades
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {PERFIS_SEGURO.filter((p) => p.id !== "planejamento").map(
                    (perfil) => {
                      const lista = getModalidadesByPerfil(perfil.id);
                      const consorcios =
                        perfil.id === "mar"
                          ? getModalidadesByPerfil("planejamento")
                          : [];
                      const combinados = [...lista, ...consorcios];

                      return (
                        <div key={perfil.id}>
                          <p className="mb-2.5 text-xs font-bold tracking-wider text-verde-profundo uppercase">
                            {perfil.id === "mar"
                              ? "Para o mar e conquistas"
                              : perfil.titulo}
                          </p>
                          <ul className="space-y-1.5">
                            {combinados.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={
                                    item.slug === "nautico"
                                      ? "/nautico"
                                      : `/seguros/${item.slug}`
                                  }
                                  className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-texto transition-colors hover:bg-creme"
                                >
                                  <span className="text-verde-profundo">
                                    <ModalidadeIcon
                                      name={item.icone}
                                      className="h-4 w-4"
                                    />
                                  </span>
                                  <span className="font-medium group-hover:text-verde-profundo">
                                    {item.nomeCurto}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            )}
          </div>

          <Link href="/empresas" className={navLinkClass("/empresas")}>
            Para empresas
          </Link>
          <Link href="/nautico" className={navLinkClass("/nautico")}>
            Náutico
          </Link>
          <Link href="/contato" className={navLinkClass("/contato")}>
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-verde-profundo px-4 py-2.5 text-sm font-semibold text-branco transition-colors hover:bg-verde-escuro sm:inline-flex"
          >
            <MessageCircle
              className="h-4 w-4 text-dourado-areia"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span>Conversar com um corretor</span>
          </a>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() =>
              setMobileOpenPath((prev) => (prev === pathname ? null : pathname))
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-borda-sutil text-verde-profundo transition-colors hover:bg-creme lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-borda-sutil bg-branco px-4 py-5 lg:hidden"
        >
          <nav aria-label="Navegação móvel" className="space-y-2">
            <Link
              href="/sobre"
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-verde-profundo hover:bg-creme"
            >
              Sobre
            </Link>

            <div>
              <button
                type="button"
                aria-expanded={mobileSegurosOpen}
                onClick={() => setMobileSegurosOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-verde-profundo hover:bg-creme"
              >
                <span>Seguros</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileSegurosOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {mobileSegurosOpen && (
                <div className="mt-1 space-y-3 border-l border-borda-sutil pl-4">
                  <Link
                    href="/seguros"
                    className="block py-1 text-sm font-semibold text-verde-profundo"
                  >
                    Ver todas as modalidades
                  </Link>
                  {PERFIS_SEGURO.map((perfil) => (
                    <div key={perfil.id} className="space-y-1">
                      <p className="text-[11px] font-bold tracking-wider text-texto-suave uppercase">
                        {perfil.titulo}
                      </p>
                      {getModalidadesByPerfil(perfil.id).map((item) => (
                        <Link
                          key={item.slug}
                          href={
                            item.slug === "nautico"
                              ? "/nautico"
                              : `/seguros/${item.slug}`
                          }
                          className="block py-1 text-sm text-texto hover:text-verde-profundo"
                        >
                          {item.nome}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/empresas"
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-verde-profundo hover:bg-creme"
            >
              Para empresas
            </Link>
            <Link
              href="/nautico"
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-verde-profundo hover:bg-creme"
            >
              Náutico
            </Link>
            <Link
              href="/contato"
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-verde-profundo hover:bg-creme"
            >
              Contato
            </Link>

            <div className="pt-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-verde-profundo px-4 py-3 text-sm font-semibold text-branco"
              >
                <MessageCircle
                  className="h-4 w-4 text-dourado-areia"
                  aria-hidden="true"
                />
                <span>Conversar com um corretor</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
