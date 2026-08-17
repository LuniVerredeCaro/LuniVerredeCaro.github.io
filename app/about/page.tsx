import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "À propos", description: "Découvrez Elena Morgan et sa pratique du vitrail inspirée par la nature." };

export default function AboutPage() {
  return <PageShell>
    <section className="split-hero about-hero">
      <div className="split-copy"><p className="eyebrow">À propos de l’artiste</p><h1>Le verre comme<br />manière de regarder.</h1><p className="lead">Elena Morgan crée des vitraux architecturaux nés d’une observation attentive — celle des feuilles, des reliefs et de la couleur de la lumière.</p></div>
      <div className="split-image"><img src="/images/studio-process.jpg" alt="Les mains d’Elena Morgan disposant du verre sur son établi" /></div>
    </section>
    <section className="story-section">
      <p className="section-number">01 — Parcours</p>
      <div className="story-copy"><h2>« Je souhaite qu’une fenêtre donne l’impression d’avoir toujours appartenu à la pièce. »</h2><div className="columns"><p>Après des études d’illustration et de vitrail traditionnel, Elena fonde son atelier à Portland en 2014. Ses premières œuvres explorent de petits panneaux botaniques ; aujourd’hui, sa pratique s’étend des luminaires intimistes aux commandes architecturales.</p><p>Chaque projet est façonné lentement, à la main. Les variations de couleur, de texture et de ligne demeurent visibles — elles témoignent à la fois de la matière et du geste.</p></div></div>
    </section>
    <section className="values-strip"><article><span>01</span><h3>Inspiré par le lieu</h3><p>Chaque création répond à l’architecture, au paysage et à la course quotidienne du soleil.</p></article><article><span>02</span><h3>Façonné à la main</h3><p>Découpé, serti, soudé et patiné dans l’atelier de Portland selon des méthodes durables.</p></article><article><span>03</span><h3>Fait pour durer</h3><p>Des œuvres pensées pour gagner en beauté et en sens au fil des générations.</p></article></section>
  </PageShell>;
}
