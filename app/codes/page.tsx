"use client";

import React, { useState, useEffect } from 'react';
import { Tag, Copy, CheckCircle, ExternalLink, RefreshCw } from "lucide-react";

// COLE SEU LINK DO GIST AQUI EMBAIXO TAMBÉM
const REMOTE_URL = "https://gist.githubusercontent.com/brunodour93-lang/ec2b6d28273e91e724f0a99ff11ced20/raw/032589d8cbc111d04ed1242c2377e746359f3897/data.json";

export default function CodesPage() {
    const [codes, setCodes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState<string | null>(null);

    useEffect(() => {
        fetch(REMOTE_URL)
            .then(res => res.json())
            .then(data => {
                setCodes(data.codes);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopied(code);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white pb-24 p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black italic">CÓDIGOS ATIVOS</h1>
                    <p className="text-slate-400">Clique para copiar.</p>
                </div>

                {loading ? (
                    <div className="text-center text-slate-400 flex justify-center items-center gap-2">
                        <RefreshCw className="animate-spin" /> Buscando códigos...
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {codes.map((item) => (
                            <div key={item.code}
                                onClick={() => copyToClipboard(item.code)}
                                className="bg-slate-800 border border-slate-700 hover:border-green-500 p-4 rounded-xl flex items-center justify-between cursor-pointer group transition-all">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.new ? 'bg-green-500/20 text-green-400' : 'bg-slate-700 text-slate-400'}`}>
                                        <Tag size={20} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-mono font-bold text-lg md:text-xl tracking-wider text-white group-hover:text-green-400 transition-colors">{item.code}</h3>
                                            {item.new && <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded animate-pulse">NOVO</span>}
                                        </div>
                                        <p className="text-slate-400 text-sm">{item.reward}</p>
                                    </div>
                                </div>
                                <div className="bg-slate-900 p-2 rounded-lg text-slate-400 group-hover:text-white transition-colors">
                                    {copied === item.code ? <CheckCircle size={20} className="text-green-500" /> : <Copy size={20} />}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}