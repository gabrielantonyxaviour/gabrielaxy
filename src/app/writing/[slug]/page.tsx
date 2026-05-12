import BottomNav from "@/components/BottomNav";
import { essays, getEssayBySlug } from "@/data/essays";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";

export function generateStaticParams() {
  return essays.map((essay) => ({
    slug: essay.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};
  return {
    title: `${essay.title} — gabriel antony xaviour`,
    description: essay.subtitle,
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    notFound();
  }

  const todayStr = new Date().toLocaleDateString("en-CA");
  if (essay.date > todayStr) {
    notFound();
  }

  const html = marked(essay.content);

  return (
    <main className="min-h-screen pb-24">
      <div className="max-w-xl mx-auto px-6 pt-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          {essay.title}
        </h1>
        <p className="text-gray-500 mb-10">{essay.subtitle}</p>

        <article
          className="prose text-gray-700"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <Link
          href="/writing"
          className="inline-block mt-10 underline underline-offset-2 text-black hover:text-gray-600 transition-colors"
        >
          ← back to writing
        </Link>
      </div>
      <BottomNav />
    </main>
  );
}
