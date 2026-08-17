import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Œuvres", description: "Sélection de fenêtres, panneaux, portes et luminaires en vitrail par Elena Morgan." };

export default function WorkPage() {
  return <PageShell>
    <section className="page-intro page-intro-wide">
      <p className="eyebrow">Œuvres choisies · 2022—2026</p>
      <div><h1>Conçues pour accueillir<br /><em>la lumière.</em></h1><p>Chaque pièce naît d’un lieu précis : son architecture, son paysage et la manière dont la lumière du jour le traverse.</p></div>
    </section>
    <section className="work-section"><Gallery /></section>
  </PageShell>;
}
