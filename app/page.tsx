'use client';

import { useState, type ChangeEvent } from 'react';
import { Sparkles, Upload } from 'lucide-react';

export default function Ohjaamo() {
  const [status, setStatus] = useState('Tirehtööri on valmis töihin.');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setStatus('Tirehtööri vastaanottaa tiedoston tietoja...');

    try {
      // Tämä lähettää toistaiseksi vain tiedoston nimen ja MIME-tyypin,
      // ei tiedoston sisältöä. API ei vielä analysoi tiedostoa.
      const response = await fetch('/api/tirehtoori', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: file.name, type: file.type || 'tuntematon' }),
      });
      const data: { analysis?: string; error?: string } = await response.json();

      if (!response.ok) {
        setStatus(data.error ?? 'Tiedoston lähettäminen epäonnistui.');
        return;
      }

      setStatus(data.analysis ?? 'Tirehtööri vastaanotti tiedoston tiedot.');
    } catch {
      setStatus('Palveluun ei saatu yhteyttä. Yritä myöhemmin uudelleen.');
    } finally {
      setIsUploading(false);
      // Tyhjennetään valinta, jotta saman tiedoston voi valita uudelleen.
      event.target.value = '';
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Avustustutka 🔥</h1>
        <p className="text-slate-600" role="status" aria-live="polite">{status}</p>
      </header>

      {/* Taikalaatikko */}
      <label className="mb-8 block cursor-pointer rounded-3xl border-2 border-dashed border-indigo-300 bg-white p-10 text-center transition hover:border-indigo-500">
        <Upload className="mx-auto mb-4 h-12 w-12 text-indigo-400" aria-hidden="true" />
        <h2 className="text-xl font-bold">Pudota mitä vain (PDF, kuitti, muistiinpano)</h2>
        <p className="text-slate-500">Tirehtööri järjestää kaiken puolestasi.</p>
        <input
          type="file"
          className="sr-only"
          onChange={handleFileUpload}
          disabled={isUploading}
          aria-label="Valitse tiedosto Tirehtöörille"
        />
      </label>

      {/* Ohjaamo-kortit */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Rahatilanne</p>
          <p className="text-2xl font-bold text-emerald-600">14 250 €</p>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-900 p-6 text-white">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          Palkkaa Tirehtööri
        </div>
      </div>
    </main>
  );
}
