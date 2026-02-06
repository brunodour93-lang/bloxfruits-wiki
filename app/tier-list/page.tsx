"use client";

import React, { useState, useEffect } from 'react';
import { fruits } from '../../fruitsData';
import { List, ShieldCheck, RefreshCw } from "lucide-react";

// --- CONFIGURAÇÃO ---
// COLE SEU LINK DO GIST AQUI EMBAIXO (DENTRO DAS ASPAS)
const REMOTE_URL = "https://gist.githubusercontent.com/brunodour93-lang/ec2b6d28273e91e724f0a99ff11ced20/raw/032589d8cbc111d04ed1242c2377e746359f3897/data.json";

export default function TierListPage() {
    const [tiers, setTiers] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [metaInfo, setMetaInfo] = useState("Carregando Meta...");

    useEffect(() => {
        fetch(REMOTE_URL)
            .then(res => res.json())
            .then(data => {
                setTiers(data.tier_list);
                setMetaInfo(data.meta.version);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao carregar remote config", err);
                setLoading(false);
            });
    }, []);

    // Função que transforma o nome (texto do Gist) na fruta completa (com imagem)
    const getFruitsForTier = (fruitNames: string[]) => {
        if (!fruitNames) return [];
        return fruitNames.map(name => fruits.find(f => f.name === name)).filter(Boolean); // Filter remove undefined
    };

    const getTierColor = (tierKey: string) => {
        if (tierKey === "s_plus") return { bg: "bg-red-600", border: "border-red-500", label: "S+ (GOD)" };
        if (tierKey === "s") return { bg: "bg-orange-500", border: "border-orange-500", label: "S (META)" };
        if (tierKey === "a") return { bg: "bg-yellow-500", border: "border-yellow-500", label: "A (GOOD)" };
        if (tierKey === "b") return { bg: "bg-green-500", border: "border-green-500", label: "B (OK)" };
        if (tierKey === "c") return { bg: "bg-blue-500", border: "border-blue-500", label: "C (MEH)" };
        return { bg: "bg-slate-600", border: "border-slate-500", label: "F (NOOB)" };
    };

    // Ordem de exibição
    const tierOrder = ["s_plus", "s", "a", "b", "c", "f"];

    return (
        <div className="min-h-screen bg-slate-900 text-white pb-24 p-4 md:p-8">
            <div className="text-center mb-10 space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider animate-pulse">
                    <ShieldCheck size={16} />
                    {metaInfo}
                </div>
                <h1 className="text-4xl md:text-5xl font-black italic">TIER LIST PVP</h1>
            </div>

            {loading ? (
                <div className="text-center text-slate-400 flex justify-center items-center gap-2">
                    <RefreshCw className="animate-spin" /> Carregando Ranking...
                </div>
            ) : (
                <div className="max-w-4xl mx-auto space-y-4">
                    {tiers && tierOrder.map((tierKey) => {
                        const style = getTierColor(tierKey);
                        const tierFruits = getFruitsForTier(tiers[tierKey]);

                        return (
                            <div key={tierKey} className="flex flex-col md:flex-row bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                                <div className={`${style.bg} p-6 md:w-32 flex items-center justify-center shrink-0`}>
                                    <h2 className="text-2xl font-black text-white text-center drop-shadow-md leading-none">{style.label}</h2>
                                </div>
                                <div className="p-4 flex flex-wrap gap-2 items-center flex-1 bg-slate-800/50">
                                    {tierFruits.map((fruit: any) => (
                                        <div key={fruit.id} className="relative group w-14 h-14 md:w-16 md:h-16 bg-slate-700 rounded-lg border border-slate-600 hover:border-white transition-colors flex items-center justify-center p-1 cursor-help">
                                            <img src={fruit.image} alt={fruit.name} className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform" />
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                                                {fruit.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}