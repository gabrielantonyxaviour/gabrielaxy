import BottomNav from "@/components/BottomNav";
import { getVisibleEssays } from "@/data/essays";
import Link from "next/link";

export default function WritingPage() {
  const essays = getVisibleEssays();

  return (
    <main className="min-h-screen pb-24">
      <div className="max-w-xl mx-auto px-6 pt-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Writing</h1>
        <p className="text-gray-500 mb-8">principles, guardrails, reflections</p>

        <Link
          href="/writing/notes-to-self"
          className="inline-block underline underline-offset-2 text-black hover:text-gray-600 transition-colors mb-10"
        >
          Notes to Self
        </Link>

        <h2 className="text-lg font-semibold mb-4">Thoughts</h2>
        <div className="divide-y divide-gray-100">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/writing/${essay.slug}`}
              className="flex justify-between items-center py-4 group"
            >
              <span className="group-hover:underline underline-offset-2">
                {essay.title}
              </span>
              <span className="text-sm text-gray-400 shrink-0 ml-4">
                {essay.date}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
