import BottomNav from "@/components/BottomNav";
import { notesToSelf } from "@/data/essays";
import Link from "next/link";

export default function NotesToSelfPage() {
  return (
    <main className="min-h-screen pb-24">
      <div className="max-w-xl mx-auto px-6 pt-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">notes to self</h1>
        <p className="text-gray-500 mb-8">personal reminders and reflections</p>

        <ul className="space-y-3 list-disc pl-5 text-gray-700 leading-relaxed">
          {notesToSelf.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>

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
