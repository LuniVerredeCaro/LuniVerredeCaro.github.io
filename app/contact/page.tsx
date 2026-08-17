import type { Metadata } from "next";
import { MailtoForm } from "@/components/MailtoForm";
import { PageShell } from "@/components/PageShell";
import { contact } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Contactez l’atelier de vitrail Elena Morgan, consultez les horaires et obtenez l’itinéraire." };

export default function ContactPage() {
  return <PageShell footer={false}>
    <section className="contact-heading"><p className="eyebrow">Contacter l’atelier</p><h1>Créons quelque chose<br /><em>de lumineux.</em></h1></section>
    <section className="contact-layout">
      <div className="contact-form-wrap"><h2>Commencer une conversation</h2><p>Parlez-nous de votre espace et de ce que vous imaginez. Elena vous répond personnellement sous trois jours d’atelier.</p><MailtoForm /></div>
      <aside className="visit-card"><p className="eyebrow">Visiter</p><h2>Atelier & galerie</h2><address>{contact.addressLines.map(line => <span key={line}>{line}</span>)}</address><a className="text-link" href={contact.mapUrl} target="_blank" rel="noreferrer">Itinéraire Google Maps <span>↗</span></a><div className="hours"><h3>Horaires d’ouverture</h3>{contact.hours.map(([days, time]) => <p key={days}><span>{days}</span><strong>{time}</strong></p>)}</div><div className="direct-contact"><h3>Contact direct</h3><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a></div><p className="visit-note">Merci d’appeler avant toute consultation afin que nous puissions accorder toute notre attention à votre projet.</p></aside>
    </section>
  </PageShell>;
}
