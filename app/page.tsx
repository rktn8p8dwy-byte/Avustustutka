'use client';

import {
  ArrowDown,
  Bell,
  BookOpenCheck,
  CheckCircle2,
  CircleHelp,
  FileSearch,
  Landmark,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const statusItems = [
  {
    icon: FileSearch,
    label: 'Avustukset',
    value: 'Tietolähde puuttuu',
    help: 'Ajantasaisia hakuja ei näytetä ennen kuin luotettava lähde on yhdistetty.',
  },
  {
    icon: Bell,
    label: 'Määräajat ja muistutukset',
    value: 'Ei vielä käytössä',
    help: 'Muistutuksia ei tallenneta eikä lähetetä tässä esiversiossa.',
  },
  {
    icon: ShieldCheck,
    label: 'Organisaation tiedot',
    value: 'Ei tallenneta',
    help: 'Älä lisää palveluun luottamuksellisia tai henkilötietoja tässä vaiheessa.',
  },
];

export default function Ohjaamo() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand" aria-label="Avustustutka etusivu">
          <span className="brand-mark"><Landmark size={20} aria-hidden="true" /></span>
          <span className="brand-name">Avustustutka</span>
        </div>
        <span className="topbar-note">Avustusten hakemisen apuna</span>
      </header>

      <main>
        <section className="hero" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">Selkeämpi polku avustuksiin</p>
            <h1 id="page-title">Pidä avustukset ja tärkeät tehtävät hallinnassa.</h1>
            <p className="hero-copy">
              Avustustutkan tavoitteena on auttaa yhdistyksiä ja muita hakijoita
              löytämään sopivia avustuksia, valmistella hakemuksia ja muistaa
              määräajat yhdessä helppokäyttöisessä työtilassa.
            </p>
          </div>
          <span className="preview-pill"><Sparkles size={15} aria-hidden="true" /> Esiversio</span>
        </section>

        <section className="notice" aria-label="Palvelun tämänhetkinen tila">
          <CircleHelp className="notice-icon" size={21} aria-hidden="true" />
          <div>
            <strong>Palvelu on vielä rakenteilla</strong>
            <p>
              Tämä sivu on käyttöliittymän esiversio. Avustushakuja, käyttäjätilejä,
              tallennusta tai muistutuksia ei ole vielä kytketty. Älä tee hakupäätöksiä
              tämän sivun perusteella.
            </p>
          </div>
        </section>

        <section aria-labelledby="status-title">
          <div className="section-heading">
            <div>
              <h2 id="status-title">Mikä toimii tällä hetkellä?</h2>
              <p>Kerromme avoimesti, mitä ei ole vielä otettu käyttöön.</p>
            </div>
          </div>
          <div className="status-grid">
            {statusItems.map(({ icon: Icon, label, value, help }) => (
              <article className="status-card" key={label}>
                <div className="status-card-top"><Icon size={21} aria-hidden="true" /><span className="status-label">Tila</span></div>
                <div className="status-label">{label}</div>
                <p className="status-value">{value}</p>
                <p className="status-help">{help}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="plan-title">
          <div className="section-heading">
            <div>
              <h2 id="plan-title">Rakennamme työkalua näin</h2>
              <p>Tavoitteena on tehdä avustusten hakemisesta ymmärrettävää alusta loppuun.</p>
            </div>
          </div>
          <div className="steps">
            <article className="step-card">
              <span className="step-number">1</span>
              <h3>Löydä sopiva avustus</h3>
              <p>Selkeät hakuehdot ja luotettava lähde auttavat arvioimaan, sopiiko haku juuri teille.</p>
            </article>
            <article className="step-card">
              <span className="step-number">2</span>
              <h3>Valmistele hakemus</h3>
              <p>Ohjeet ja tarkistuslista auttavat kokoamaan tarvittavat tiedot ilman turhaa arvailua.</p>
            </article>
            <article className="step-card">
              <span className="step-number">3</span>
              <h3>Muista määräajat</h3>
              <p>Kun tallennus ja muistutukset otetaan käyttöön, tärkeät päivät voi pitää samassa paikassa.</p>
            </article>
          </div>
        </section>

        <section className="next-panel" id="kayttoonotto" aria-labelledby="next-title">
          <div>
            <h2 id="next-title">Mitä tarvitaan ennen käyttöönottoa?</h2>
            <p><CheckCircle2 size={15} aria-hidden="true" /> Luotettavat avustuslähteet, tietosuojan suunnittelu ja käyttäjätestaus.</p>
          </div>
          <a className="next-link" href="#kayttoonotto">
            <BookOpenCheck size={17} aria-hidden="true" /> Käyttöönoton vaiheet <ArrowDown size={16} aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer>
        Avustustutka on kehitysvaiheessa. Tarkista aina avustuksen ehdot ja määräajat myöntäjän virallisesta lähteestä.
      </footer>
    </div>
  );
}
