import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <span className="text-xs font-semibold tracking-widest text-verde-profundo uppercase">
        Página não encontrada
      </span>
      <h1 className="mt-3 text-3xl font-bold text-verde-profundo sm:text-4xl">
        Não encontramos o endereço que você procurou
      </h1>
      <p className="mt-4 text-base text-texto-suave">
        Você pode voltar para a página inicial ou explorar todas as modalidades
        de seguros da Zanella Seguros.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-verde-profundo px-5 py-3 text-sm font-semibold text-branco hover:bg-verde-escuro"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Voltar para o início</span>
        </Link>
        <Link
          href="/seguros"
          className="inline-flex items-center gap-2 rounded-lg border border-borda-sutil px-5 py-3 text-sm font-semibold text-verde-profundo hover:bg-creme"
        >
          <span>Ver modalidades de seguros</span>
        </Link>
      </div>
    </section>
  );
}
