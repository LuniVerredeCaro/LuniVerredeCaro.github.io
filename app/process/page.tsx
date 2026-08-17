import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Savoir-faire", description: "Du premier dessin à la pose : la fabrication d’un vitrail signé Elena Morgan." };

const steps = [
  ["01", "Écouter", "Tout commence par le lieu : photographies, dimensions, architecture, paysage et atmosphère souhaitée."],
  ["02", "Dessiner", "La composition grandeur nature prend forme à travers des croquis, des études peintes et un carton d’exécution soigneusement abouti."],
  ["03", "Choisir", "Chaque feuille de verre est choisie pour sa couleur, son opacité, sa surface et sa réaction à la lumière changeante."],
  ["04", "Façonner", "Chaque forme est découpée à la main, puis assemblée, soudée, mastiquée et patinée selon les techniques traditionnelles."],
  ["05", "Poser", "L’œuvre achevée est installée dans son écrin, prête à transformer la pièce heure après heure."],
];

export default function ProcessPage() {
  return <PageShell>
    <section className="process-hero"><img src="/images/studio-process.jpg" alt="Des mains composent un motif botanique en vitrail sur un établi en bois" /><div><p className="eyebrow">La fabrication</p><h1>Du premier trait<br />à la lumière vivante.</h1></div></section>
    <section className="process-list"><div className="process-intro"><p className="section-number">Un processus attentif</p><h2>La lenteur du geste donne à chaque décision toute son importance.</h2></div><div>{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="material-quote"><p>Découpé à la main. Serti de plomb.<br />Révélé par le soleil.</p></section>
  </PageShell>;
}
