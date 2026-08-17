import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Commandes", description: "Confiez à Elena Morgan la création d’un vitrail architectural unique." };

export default function CommissionsPage() {
  return <PageShell>
    <section className="commission-hero"><div><p className="eyebrow">Commander une pièce</p><h1>Une fenêtre conçue<br /><em>pour votre lumière.</em></h1><p>Des vitraux originaux pour les maisons, les jardins, les lieux d’accueil et les espaces de rencontre.</p><Link className="button" href="/contact">Commencer la conversation <span>↗</span></Link></div><img src="/images/solstice-door.jpg" alt="Porte d’entrée en vitrail ornée d’un soleil doré" /></section>
    <section className="commission-info"><aside><p className="section-number">À savoir</p></aside><div><h2>Chaque commande est une collaboration entre une personne, un lieu et la matière.</h2><div className="info-grid"><article><h3>Projets</h3><p>Fenêtres, portes, impostes, panneaux décoratifs et luminaires uniques. Les projets de restauration sont également les bienvenus.</p></article><article><h3>Délais</h3><p>La plupart des projets demandent 12 à 20 semaines après validation du dessin. Les réalisations architecturales plus importantes peuvent nécessiter davantage de temps.</p></article><article><h3>Budget</h3><p>Les créations sur mesure débutent généralement à 2 500 $. Une estimation est remise après le premier échange et avant le début de la conception.</p></article><article><h3>Distance</h3><p>La pose est comprise pour les projets locaux. Les œuvres peuvent aussi être emballées et expédiées dans l’ensemble des États-Unis continentaux.</p></article></div></div></section>
    <section className="commission-cta"><p className="eyebrow">Racontez-moi ce que vous imaginez</p><h2>Les plus beaux projets commencent<br />par une conversation ouverte.</h2><Link className="text-link" href="/contact">Contacter l’atelier <span>↗</span></Link></section>
  </PageShell>;
}
