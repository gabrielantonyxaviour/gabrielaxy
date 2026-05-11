"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/images", label: "Images" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
      <div className="max-w-xl mx-auto flex justify-center gap-1 py-3 px-6">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-5 py-2 text-sm transition-colors ${
                isActive
                  ? "text-black underline underline-offset-4"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
