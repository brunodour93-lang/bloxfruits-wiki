"use client";

import React from 'react';
import Link from "next/link";
import { Calculator, List, Tag, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white pb-24 flex flex-col items-center justify-center p-4">

      {/* TÍTULO PRINCIPAL */}
      <div className="text-center space-y-6 mb-12 max-w-2xl mt-10">
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl">
          BLOX COMPANION
        </h1>
        <p className="text-slate-400 text-lg md:text-xl">
          Ferramentas avançadas para jogadores de Blox Fruits.
          <br />Sem stock falso. Apenas dados reais.
        </p>
      </div>

      {/* MENU DE 3 CARTÕES */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">

        {/* 1. CALCULADORA */}
        <Link href="/calculator" className="group">
          <div className="h-full bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-blue-500 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] flex flex-col items-center text-center cursor-pointer">
            <div className="bg-blue-500/20 p-5 rounded-full mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors text-blue-400">
              <Calculator size={48} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Calculadora</h2>
            <p className="text-slate-400 text-sm mb-6">
              Evite roubos! Verifique se sua troca é <span className="text-green-400 font-bold">WIN</span> ou <span className="text-red-400 font-bold">LOSS</span>.
            </p>
            <span className="mt-auto flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest group-hover:underline">
              Abrir Calculadora <ArrowRight size={16} />
            </span>
          </div>
        </Link>

        {/* 2. TIER LIST */}
        <Link href="/tier-list" className="group">
          <div className="h-full bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-orange-500 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] flex flex-col items-center text-center cursor-pointer">
            <div className="bg-orange-500/20 p-5 rounded-full mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors text-orange-400">
              <List size={48} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Tier List</h2>
            <p className="text-slate-400 text-sm mb-6">
              Veja o ranking das melhores frutas para PvP e Farm no meta atual.
            </p>
            <span className="mt-auto flex items-center gap-2 text-orange-400 font-bold text-sm uppercase tracking-widest group-hover:underline">
              Ver Ranking <ArrowRight size={16} />
            </span>
          </div>
        </Link>

        {/* 3. CÓDIGOS */}
        <Link href="/codes" className="group">
          <div className="h-full bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-green-500 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] flex flex-col items-center text-center cursor-pointer">
            <div className="bg-green-500/20 p-5 rounded-full mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors text-green-400">
              <Tag size={48} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Códigos</h2>
            <p className="text-slate-400 text-sm mb-6">
              Lista de códigos para 2x EXP e Stat Reset (Resete seus status).
            </p>
            <span className="mt-auto flex items-center gap-2 text-green-400 font-bold text-sm uppercase tracking-widest group-hover:underline">
              Pegar Códigos <ArrowRight size={16} />
            </span>
          </div>
        </Link>

      </div>
    </div>
  );
}