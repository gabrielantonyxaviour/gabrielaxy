import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Antony Xaviour",
  description: "Founder · Multi agent orchestrator · Web3 developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
