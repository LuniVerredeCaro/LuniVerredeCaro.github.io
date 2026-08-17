import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/site";

export default function Home() {
  return <>
    <Header />
    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <p className="hero-kicker">Le vitrail façonné par la nature</p>
          <h1>Lumière.<br />Couleur.<br />Histoire.</h1>
          <p className="hero-note">Des vitraux façonnés à la main, inspirés par les formes silencieuses et la lumière changeante du monde naturel.</p>
          <Link className="button button-light" href="/work">Découvrir les œuvres <span aria-hidden="true">↗</span></Link>
        </div>
        <p className="hero-caption">Fenêtre Magnolia · Jardin d’hiver · 2026</p>
      </section>

      <section className="featured-section">
        <div className="section-heading"><p className="eyebrow">Œuvres choisies</p><h2>Des pièces conçues<br />pour un lieu singulier.</h2><Link className="text-link" href="/work">Voir toutes les œuvres <span>↗</span></Link></div>
        <div className="featured-grid">{projects.slice(0, 5).map(project => <ProjectCard project={project} key={project.slug} />)}</div>
      </section>

      <section className="home-about">
        <div className="home-about-image"><img src="/images/studio-process.jpg" alt="Artiste composant un motif botanique en vitrail sur son établi" loading="lazy" /></div>
        <div className="home-about-copy"><p className="eyebrow">Rencontrer Elena</p><blockquote>« Je crée des vitraux qui saisissent la beauté de la lumière naturelle et transforment une pièce au fil de la journée. »</blockquote><p>Dans son atelier paisible de Portland, Elena réalise des vitraux architecturaux uniques, nourris par l’observation attentive et le savoir-faire traditionnel.</p><Link className="text-link" href="/about">À propos de l’artiste <span>↗</span></Link></div>
      </section>

      <section className="home-process">
        <p className="section-number">01 — Le savoir-faire</p>
        <div><h2>Dessiné lentement.<br />Façonné à la main.<br /><em>Éclairé par la nature.</em></h2><p>Du premier trait de crayon au polissage final, chaque étape est guidée par le lieu qui accueillera l’œuvre.</p><Link className="button" href="/process">Découvrir la fabrication <span>↗</span></Link></div>
      </section>
    </main>
    <Footer />
  </>;
}
