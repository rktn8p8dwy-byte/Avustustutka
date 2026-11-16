'use client';

import {
  ArrowRight,
  Bell,
  CalendarDays,
  FileText,
  FolderOpen,
  Landmark,
  Search,
  Sparkles,
} from 'lucide-react';

const tasks = [
  { title: 'Lisää organisaation perustiedot', detail: 'Tiedot auttavat rajaamaan sopivia avustuksia.', icon: Landmark },
  { title: 'Etsi sopivia avustuksia', detail: 'Tarkista aina ehdot ja määräajat myöntäjän sivulta.', icon: Search },
  { title: 'Kokoa hakemuksen aineisto', detail: 'Pidä tarvittavat asiakirjat järjestyksessä.', icon: FolderOpen },
];

export default function Ohjaamo() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#alku" aria-label="Avustustutka – etusivu">
          <span className="brand-mark"><Landmark size={20} aria-hidden="true" /></span>
          <span className="brand-name">Avustustutka</span>
        </a>
        <span className="topbar-note">Avustusten hakemisen apuna</span>
      </header>

      <main id="alku">
        <section className="hero" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">Yhdistyksen ohjaamo</p>
            <h1 id="page-title">Avustusten hakeminen, selkeämmin.</h1>
            <p className="hero-copy">
              Kokoa seuraavat tehtävät yhteen paikkaan. Aloita organisaation tiedoista,
              etsi sopivia rahoitushakuja ja tarkista tärkeät päivämäärät virallisista lähteistä.
            </p>
          </div>
          <span className="preview-pill"><Sparkles size={15} aria-hidden="true" /> Esiversio</span>
        </section>

        <section className="notice" aria-label="Esiversion huomautus">
          <Bell className="notice-icon" size={21} aria-hidden="true" />
          <div>
            <strong>Tämä on käyttöliittymän esiversio</strong>
            <p>Avustustietojen automaattista hakua, käyttäjätilejä, tietojen tallennusta tai muistutusten lähetystä ei ole vielä toteutettu. Älä lisää sivulle luottamuksellisia tietoja.</p>
          </div>
        </section>

        <section aria-labelledby="overview-title">
          <div className="section-heading">
            <div>
              <h2 id="overview-title">Ohjaamon aloitus</h2>
              <p>Kolme askelta, joilla pääset alkuun.</p>
            </div>
          </div>
          <div className="steps">
            {tasks.map(({ title, detail, icon: Icon }, index) => (
              <article className="step-card" key={title}>
                <div className="status-card-top">
                  <span className="step-number">{index + 1}</span>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="tools-title">
          <div className="section-heading">
            <div>
              <h2 id="tools-title">Työkalut</h2>
              <p>Näkymät ovat vielä suunnitteluvaiheessa.</p>
            </div>
          </div>
          <div className="status-grid">
            <article className="status-card">
              <div className="status-card-top"><Search size={21} aria-hidden="true" /><span className="status-label">Tulossa</span></div>
              <div className="status-label">Avustushaku</div>
              <p className="status-value">Luotettavat lähteet</p>
              <p className="status-help">Haku rakennetaan lähteineen, ehtoineen ja tarkistuspäivineen.</p>
            </article>
            <article className="status-card">
              <div className="status-card-top"><CalendarDays size={21} aria-hidden="true" /><span className="status-label">Tulossa</span></div>
              <div className="status-label">Määräajat</div>
              <p className="status-value">Oma seuranta</p>
              <p className="status-help">Määräaikoja ei vielä tallenneta eikä niistä lähetetä muistutuksia.</p>
            </article>
            <article className="status-card">
              <div className="status-card-top"><FileText size={21} aria-hidden="true" /><span className="status-label">Tulossa</span></div>
              <div className="status-label">Hakemuksen valmistelu</div>
              <p className="status-value">Ohjeet ja tarkistuslista</p>
              <p className="status-help">Tarkoitus on auttaa kokoamaan hakemus ilman perusteettomia lupauksia rahoituksesta.</p>
            </article>
          </div>
        </section>

        <section className="next-panel" aria-labelledby="next-title">
          <div>
            <h2 id="next-title">Tarkista tiedot aina alkuperäisestä lähteestä</h2>
            <p>Avustusten ehdot ja hakuajat voivat muuttua. Tämä esiversio ei vielä näytä ajantasaista avustusdataa.</p>
          </div>
          <a className="next-link" href="https://www.google.com/search?q=avustukset+yhdistyksille" target="_blank" rel="noreferrer">
            Etsi virallisia lähteitä <ArrowRight size={17} aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer>Avustustutka on kehitysvaiheessa. Tarkista ehdot ja määräajat avustuksen myöntäjän virallisesta lähteestä.</footer>
    </div>
  );
}
