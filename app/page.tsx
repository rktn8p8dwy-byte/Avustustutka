'use client';

import { useState, type ChangeEvent } from 'react';
import { Upload } from 'lucide-react';

export default function Ohjaamo() {
  const [status, setStatus] = useState('Tirehtööri on valmis töihin.');

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Tämä näyttää tiedoston nimen selaimessa; tiedoston sisältöä ei analysoida.
      setStatus(`Tiedosto valittu: ${file.name}. Automaattinen analyysi ei ole käytössä.`);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-6 font-sans text-slate-900">
      <h1 className="mb-6 text-2xl font-bold">Avustustutka 🔥</h1>

      <label className="mb-6 block cursor-pointer rounded-2xl border-2 border-dashed border-indigo-300 bg-white p-8 text-center">
        <Upload className="mx-auto mb-2 h-10 w-10 text-indigo-400" aria-hidden="true" />
        <h2 className="font-bold">Pudota tiedosto</h2>
        <p className="mt-1 text-sm text-slate-600">Tiedostoa ei lähetetä palvelimelle.</p>
        <input
          type="file"
          className="sr-only"
          onChange={handleFile}
          aria-label="Valitse tiedosto"
        />
      </label>

      <div className="mb-4 rounded-2xl bg-indigo-900 p-6 text-white" role="status" aria-live="polite">
        <p className="font-bold">{status}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border bg-white p-4">Rahat: 14 250 €</div>
        <div className="rounded-xl border bg-white p-4">Muisti: 42 tiedostoa</div>
      </div>
    </main>
  );
}
