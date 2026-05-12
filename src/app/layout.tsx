import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "gabriel antony xaviour",
  description: "founder · multi agent orchestrator · web3 developer",
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
