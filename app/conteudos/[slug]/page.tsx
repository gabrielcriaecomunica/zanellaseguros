import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArtigos, getArtigoBySlug } from "@/lib/artigos";
import { SectionWaves } from "@/components/SectionWaves";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CTASection } from "@/components/CTASection";

interface ArtigoPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArtigos().map((artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArtigoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artigo = getArtigoBySlug(slug);
  if (!artigo) {
    return { title: "Conteúdo não encontrado" };
  }
  return {
    title: artigo.title,
    description: artigo.description,
  };
}

export default async function ArtigoPage({ params }: ArtigoPageProps) {
  const { slug } = await params;
  const artigo = getArtigoBySlug(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-verde-profundo py-14 text-branco sm:py-20">
          <SectionWaves
            variant="gold"
            position="hero"
            className="absolute inset-x-0 bottom-0 h-40 opacity-80"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/conteudos"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-dourado-areia uppercase hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Voltar para Conteúdos</span>
            </Link>

            <div className="mt-5 flex items-center gap-3 text-xs font-semibold tracking-wider text-dourado-areia uppercase">
              <span>{artigo.category}</span>
              <span aria-hidden="true">•</span>
              <span>{artigo.readingTime}</span>
            </div>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-branco sm:text-4xl">
              {artigo.title}
            </h1>
            <p className="mt-4 text-base font-light italic text-creme/90 sm:text-lg">
              {artigo.description}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <PhotoPlaceholder
            label={artigo.coverPlaceholder}
            aspect="16/9"
            className="mb-10"
          />

          <div className="space-y-5 text-base leading-relaxed text-texto [&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-verde-profundo [&>ol]:list-decimal [&>ol]:space-y-2.5 [&>ol]:pl-6 [&>p]:text-texto-suave [&>ul]:list-disc [&>ul]:space-y-2.5 [&>ul]:pl-6 [&_strong]:font-semibold [&_strong]:text-verde-profundo">
            <MDXRemote source={artigo.content} />
          </div>
        </div>
      </article>

      <CTASection
        title="Quer tirar uma dúvida sobre esse assunto?"
        subtitle="Converse diretamente com a nossa equipe pelo WhatsApp ou telefone."
      />
    </>
  );
}
