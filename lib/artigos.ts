import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ARTIGOS_DIR = path.join(process.cwd(), "content", "artigos");

export interface ArtigoMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  coverPlaceholder: string;
}

export interface ArtigoCompleto extends ArtigoMeta {
  content: string;
}

export function getAllArtigos(): ArtigoMeta[] {
  if (!fs.existsSync(ARTIGOS_DIR)) return [];
  const files = fs
    .readdirSync(ARTIGOS_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const artigos = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(ARTIGOS_DIR, file), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? "2026-01-01"),
      category: String(data.category ?? "Conteúdos"),
      readingTime: String(data.readingTime ?? "4 min de leitura"),
      coverPlaceholder: String(
        data.coverPlaceholder ??
          "[FOTO: imagem editorial relacionada ao conteúdo]"
      ),
    };
  });

  return artigos.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArtigoBySlug(slug: string): ArtigoCompleto | null {
  const filePath = path.join(ARTIGOS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? "2026-01-01"),
    category: String(data.category ?? "Conteúdos"),
    readingTime: String(data.readingTime ?? "4 min de leitura"),
    coverPlaceholder: String(
      data.coverPlaceholder ?? "[FOTO: imagem editorial relacionada ao conteúdo]"
    ),
    content,
  };
}
