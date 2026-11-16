'use client';
import { useState } from 'react';
import { Sparkles, Upload, FileText, LayoutDashboard } from 'lucide-react';

export default function Ohjaamo() {
  return (
    <main className="p-8 bg-slate-50 min-h-screen font-sans text-slate-900">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Avustustutka 🔥</h1>
        <p className="text-slate-600">Digitaalinen Tirehtööri on valmis töihin.</p>
      </header>

      {/* Taikalaatikko */}
      <div className="mb-8 bg-white p-10 rounded-3xl border-2 border-dashed border-indigo-300 text-center hover:border-indigo-500 transition cursor-pointer">
        <Upload className="mx-auto w-12 h-12 text-indigo-400 mb-4" />
        <h2 className="text-xl font-bold">Pudota mitä vain (PDF, kuitti, muistiinpano)</h2>
        <p className="text-slate-500">Tirehtööri järjestää kaiken puolestasi.</p>
      </div>

      {/* Ohjaamo-kortit */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-sm text-slate-500">Rahatilanne</p>
          <p className="text-2xl font-bold text-emerald-600">14 250 €</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-sm text-slate-500">Seuraava määräaika</p>
          <p className="text-xl font-bold text-amber-600">Kokous 31.5.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-sm text-slate-500">Organisaation muisti</p>
          <p className="text-xl font-bold">42 tiedostoa</p>
        </div>
        <button className="bg-indigo-900 text-white p-6 rounded-2xl hover:bg-indigo-800 transition flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5" />
          Palkkaa Tirehtööri
        </button>
      </div>
    </main>
  );
}
