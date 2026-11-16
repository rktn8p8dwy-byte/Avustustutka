'use client';

import { type ChangeEvent, type FormEvent, useState } from 'react';

export default function VallanvaihtoPage() {
  const [minutes, setMinutes] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setError('');
    setMessage('');
    if (!file) return;

    if (!/\.(txt|md)$/i.test(file.name)) {
      setError('Tässä esiversiossa voit tuoda vain .txt- tai .md-tiedoston. PDF-tiedostojen käsittelyä ei ole vielä toteutettu.');
      event.target.value = '';
      return;
    }

    void file.text().then(setMinutes).catch(() => {
      setError('Tiedostoa ei voitu lukea. Voit myös liittää pöytäkirjan tekstin alla olevaan kenttään.');
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setMessage('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/tirehtoori', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ minutes }),
      });
      const result = await response.json();
      if (!response.ok) setError(result.error ?? 'Pöytäkirjan lähetys epäonnistui.');
      else setMessage(result.message);
    } catch {
      setError('Palveluun ei saatu yhteyttä. Yritä myöhemmin uudelleen.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-slate-50 p-6 font-sans text-slate-900 md:p-10">
      <a className="text-sm font-medium text-indigo-800 underline" href="/">← Takaisin etusivulle</a>
      <header className="my-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-800">Tirehtöörin työkalu</p>
        <h1 className="text-3xl font-bold">Vallanvaihdoksen pöytäkirja</h1>
        <p className="mt-3 text-slate-600">
          Tuo pöytäkirjan tekstiversio tai liitä teksti kenttään. Tämä esiversio vastaanottaa tekstin, mutta ei vielä analysoi sitä eikä muodosta tai lähetä PRH-ilmoitusta.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="minutes-file" className="mb-2 block font-semibold">Tuo tekstitiedosto (.txt tai .md)</label>
          <input id="minutes-file" type="file" accept=".txt,.md,text/plain,text/markdown" onChange={handleFileChange} className="block w-full text-sm" />
          <p className="mt-2 text-sm text-slate-500">PDF-tiedostojen luku ei ole vielä käytössä.</p>
        </div>
        <div>
          <label htmlFor="minutes" className="mb-2 block font-semibold">Pöytäkirjan teksti</label>
          <textarea id="minutes" value={minutes} onChange={(event) => setMinutes(event.target.value)} rows={10} maxLength={200_000} required placeholder="Liitä tähän pöytäkirjan teksti. Älä lisää tarpeettomia henkilötietoja." className="w-full rounded-xl border border-slate-300 p-3" />
          <p className="mt-1 text-right text-xs text-slate-500">{minutes.length} / 200 000 merkkiä</p>
        </div>
        <button type="submit" disabled={isSubmitting || !minutes.trim()} className="rounded-xl bg-indigo-900 px-5 py-3 font-semibold text-white disabled:opacity-50">
          {isSubmitting ? 'Lähetetään…' : 'Lähetä Tirehtöörille'}
        </button>
        {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{error}</p>}
        {message && <p role="status" className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-900">{message}</p>}
      </form>
      <p className="mt-5 text-sm text-slate-500">Älä lähetä luottamuksellisia tietoja. Palvelin ei tällä hetkellä tallenna tekstiä eikä tuota virallista PRH-ilmoitusta.</p>
    </main>
  );
}
