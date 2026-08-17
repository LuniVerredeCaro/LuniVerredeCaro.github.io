import type { Metadata } from "next";
import "./globals.css";

const title = "Elena Morgan — Artiste vitrailliste";
const description = "Vitraux artisanaux inspirés par la nature, l’architecture et la lumière naturelle.";

export const metadata: Metadata = {
  title: { default: title, template: "%s — Elena Morgan" },
  description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title, description, type: "website", locale: "fr_FR" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
