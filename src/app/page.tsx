import BottomNav from "@/components/BottomNav";
import CopyEmail from "@/components/CopyEmail";
import { projectCategories } from "@/data/projects";

const socials = [
  { label: "x", href: "https://x.com/gabrielaxyeth" },
  { label: "instagram", href: "https://instagram.com/gabrielaxy.eth" },
  { label: "linkedin", href: "https://linkedin.com/in/gabriel-antony" },
  { label: "github", href: "https://github.com/gabrielantonyxaviour" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-24">
      <div className="max-w-xl mx-auto px-6 pt-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          gabriel antony xaviour
        </h1>
        <p className="text-gray-500 mb-6">
          22 · founder · multi agent orchestrator · web3 developer
        </p>

        <div className="flex flex-wrap gap-4 text-sm">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
          <p>
            running a one-man company powered by 8 autonomous agents. i move
            fast and let the work speak.
          </p>
          <p>
            i aspire to become the perfect human in every realm
            of human endeavor. i love art, ai, and self-expression in ways
            humanity hasn&apos;t imagined yet. i&apos;m going to run a $1b company with just
            me and my agents and prove everyone who says &quot;you need a team&quot; wrong.
          </p>
          <p>
            if you have something interesting, reach out.
          </p>
        </div>

        <div className="mt-6 flex items-center">
          <a
            href="mailto:gabrielantony56@gmail.com"
            className="underline underline-offset-2 text-black"
          >
            gabrielantony56@gmail.com
          </a>
          <CopyEmail email="gabrielantony56@gmail.com" />
        </div>

        <section className="mt-12">
          <h2 className="text-lg font-semibold mb-6">currently</h2>

          {projectCategories.map((cat) => (
            <div key={cat.category} className="mb-8">
              <h3 className="text-sm text-gray-400 mb-3">{cat.category}</h3>
              <div className="space-y-6">
                {cat.items.map((project) => (
                  <div key={project.name}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block underline underline-offset-2 text-black hover:text-gray-600 transition-colors mb-1"
                    >
                      {project.name} ↗
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-gray-500 underline underline-offset-2 hover:text-gray-700 transition-colors mb-1"
                    >
                      {project.url.replace(/^https:\/\//, "")} ↗
                    </a>
                    <p className="text-sm text-gray-500">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
      <BottomNav />
    </main>
  );
}
