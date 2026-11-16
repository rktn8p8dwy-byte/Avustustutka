'use client';
import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Ohjaamo() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans text-slate-900">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Avustustutka 🔥</h1>
          <p className="text-slate-500">Digitaalinen Tirehtööri on valmis töihin.</p>
        </div>
        <div className="rounded-full border bg-white px-4 py-2 font-medium shadow-sm">
          Yhdistys: Helsingin Nuorten Liikunta ry
        </div>
      </header>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Rahatilanne</p>
          <p className="text-2xl font-bold text-emerald-600">14 250 €</p>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Seuraava määräaika</p>
          <p className="text-xl font-bold text-amber-600">Kokous 31.5.</p>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Organisaation muisti</p>
          <p className="text-xl font-bold">42 tiedostoa</p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-900 p-6 text-white transition hover:bg-indigo-800">
          <Sparkles className="h-5 w-5" />
          Palkkaa Tirehtööri
        </button>
      </div>

      <div className="rounded-3xl border-2 border-dashed border-indigo-200 bg-white p-8 text-center">
        <h2 className="mb-2 text-xl font-bold">Taikalaatikko</h2>
        <p className="text-slate-500">
          Pudota PDF-tiedosto tai liitä tekstiä – minä järjestän kaiken.
        </p>
      </div>
    </div>
  );
}
