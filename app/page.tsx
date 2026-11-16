'use client';

import { useState, type ChangeEvent } from 'react';
import { Sparkles, Upload, FileText, CheckCircle2 } from 'lucide-react';

export default function Ohjaamo() {
  const [status, setStatus] = useState('Tirehtööri on valmis töihin. Mitä haluat tehdä?');

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setStatus(`Tiedosto valittu: ${file.name}. Tämä esiversio ei vielä lue tai analysoi tiedoston sisältöä.`);
    }
  };

  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-slate-50 p-6 font-sans text-slate-900">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">Avustustutka 🔥</h1>
        <p className="mt-2 text-slate-600">Digitaalinen sihteerisi hoitaa hallinnon puolestasi.</p>
      </header>

      {/* Taikalaatikko: valitsee tiedoston paikallisesti, ei lataa sitä. */}
      <label className="mb-10 block cursor-pointer rounded-3xl border-2 border-dashed border-indigo-200 bg-white p-10 text-center shadow-sm transition hover:border-indigo-500">
        <Upload className="mx-auto mb-4 h-12 w-12 text-indigo-500" aria-hidden="true" />
        <h2 className="text-xl font-bold">Pudota mitä vain</h2>
        <p className="text-slate-500">PDF, kuitit, pöytäkirjat – tiedoston analysointi ei ole vielä käytössä.</p>
        <input
          type="file"
          className="sr-only"
          onChange={handleFile}
          aria-label="Valitse tiedosto"
        />
      </label>

      {/* Tirehtöörin vastausikkuna */}
      <div className="mb-10 flex items-start gap-4 rounded-2xl bg-indigo-900 p-6 text-white shadow-lg" role="status" aria-live="polite">
        <Sparkles className="h-8 w-8 flex-shrink-0 text-yellow-400" aria-hidden="true" />
        <p className="text-lg font-medium leading-relaxed">{status}</p>
      </div>

      {/* Toiminnot ovat näkyvissä, mutta eivät vielä käytössä. */}
      <div className="grid grid-cols-1 gap-4">
        <button type="button" disabled className="flex cursor-not-allowed items-center justify-between rounded-2xl border bg-white p-6 text-left opacity-70">
          <span className="flex items-center gap-3 font-bold"><FileText className="text-indigo-600" aria-hidden="true" /> Täytä hakemus puolestani</span>
          <span className="rounded bg-slate-100 px-2 py-1 text-xs">Tulossa</span>
        </button>
        <button type="button" disabled className="flex cursor-not-allowed items-center justify-between rounded-2xl border bg-white p-6 text-left opacity-70">
          <span className="flex items-center gap-3 font-bold"><CheckCircle2 className="text-emerald-600" aria-hidden="true" /> Vallanvaihto-velho</span>
          <span className="rounded bg-slate-100 px-2 py-1 text-xs">Tulossa</span>
        </button>
      </div>
    </main>
  );
}
