"use client";

import React, { useState } from 'react';
import { fruits, TradeFruit } from '../../fruitsData';
import { X, Plus, ArrowRightLeft } from 'lucide-react';

interface SelectedFruit extends TradeFruit {
    uniqueId: number;
}

export default function CalculatorPage() {
    const [myOffer, setMyOffer] = useState<SelectedFruit[]>([]);
    const [theirOffer, setTheirOffer] = useState<SelectedFruit[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectingFor, setSelectingFor] = useState<'me' | 'them'>('me');

    // Lógica de Soma
    const myTotal = myOffer.reduce((acc, fruit) => acc + fruit.value, 0);
    const theirTotal = theirOffer.reduce((acc, fruit) => acc + fruit.value, 0);

    // Lógica do Veredito
    const getVerdict = () => {
        if (myTotal === 0 && theirTotal === 0) {
            return { text: "SELECT FRUITS", color: "text-gray-400", bg: "bg-gray-800" };
        }

        const diff = Math.abs(myTotal - theirTotal);
        const maxVal = Math.max(myTotal, theirTotal);
        const percentageDiff = maxVal > 0 ? (diff / maxVal) * 100 : 0;

        if (percentageDiff < 10) {
            return { text: "FAIR TRADE", color: "text-yellow-400", bg: "bg-yellow-900/30" };
        }

        if (myTotal > theirTotal) {
            return { text: "L (LOSS)", color: "text-red-500", bg: "bg-red-900/30" };
        }

        return { text: "W (BIG WIN)", color: "text-green-400", bg: "bg-green-900/30" };
    };

    const verdict = getVerdict();

    const openModal = (side: 'me' | 'them') => {
        setSelectingFor(side);
        setIsModalOpen(true);
    };

    const addFruit = (fruit: TradeFruit) => {
        const newFruit: SelectedFruit = { ...fruit, uniqueId: Date.now() + Math.random() };
        if (selectingFor === 'me') {
            setMyOffer([...myOffer, newFruit]);
        } else {
            setTheirOffer([...theirOffer, newFruit]);
        }
        setIsModalOpen(false);
    };

    const removeFruit = (uniqueId: number, side: 'me' | 'them') => {
        if (side === 'me') {
            setMyOffer(myOffer.filter(f => f.uniqueId !== uniqueId));
        } else {
            setTheirOffer(theirOffer.filter(f => f.uniqueId !== uniqueId));
        }
    };

    const formatNumber = (num: number) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toString();
    };

    return (
        <div className="min-h-screen bg-slate-900 pb-24 p-4 text-white">
            <h1 className="text-2xl font-bold text-center mb-6 text-blue-400">Trade Calculator</h1>

            {/* VEREDITO */}
            <div className={`mb-8 p-4 rounded-xl border border-slate-700 text-center ${verdict.bg}`}>
                <h2 className={`text-3xl font-black ${verdict.color}`}>{verdict.text}</h2>
                <div className="flex justify-center items-center gap-4 mt-2 text-sm text-slate-400">
                    <span>You: {formatNumber(myTotal)}</span>
                    <ArrowRightLeft size={16} />
                    <span>Them: {formatNumber(theirTotal)}</span>
                </div>
            </div >

            <div className="grid md:grid-cols-2 gap-4">
                {/* LADO ESQUERDO (VOCÊ) */}
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-blue-400">You Give</h3>
                        <span className="text-xs bg-slate-700 px-2 py-1 rounded">{formatNumber(myTotal)}</span>
                    </div>

                    <div className="space-y-2 min-h-[100px]">
                        {myOffer.map((f) => (
                            <div key={f.uniqueId} className="flex justify-between items-center bg-slate-700/50 p-2 rounded">
                                <div className="flex items-center gap-3">
                                    <img src={f.image} alt={f.name} className="w-8 h-8 object-contain" />
                                    <span className="font-medium">{f.name}</span>
                                </div>
                                <button onClick={() => removeFruit(f.uniqueId, 'me')}>
                                    <X size={18} className="text-slate-400 hover:text-white" />
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={() => openModal('me')}
                            className="w-full py-4 border-2 border-dashed border-slate-600 rounded-lg text-slate-400 hover:border-blue-500 hover:text-blue-500 flex justify-center items-center gap-2 transition-colors">
                            <Plus size={20} /> Add Fruit
                        </button>
                    </div>
                </div>

                {/* LADO DIREITO (ELES) */}
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-red-400">You Get</h3>
                        <span className="text-xs bg-slate-700 px-2 py-1 rounded">{formatNumber(theirTotal)}</span>
                    </div>

                    <div className="space-y-2 min-h-[100px]">
                        {theirOffer.map((f) => (
                            <div key={f.uniqueId} className="flex justify-between items-center bg-slate-700/50 p-2 rounded">
                                <div className="flex items-center gap-3">
                                    <img src={f.image} alt={f.name} className="w-8 h-8 object-contain" />
                                    <span className="font-medium">{f.name}</span>
                                </div>
                                <button onClick={() => removeFruit(f.uniqueId, 'them')}>
                                    <X size={18} className="text-slate-400 hover:text-white" />
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={() => openModal('them')}
                            className="w-full py-4 border-2 border-dashed border-slate-600 rounded-lg text-slate-400 hover:border-red-500 hover:text-red-500 flex justify-center items-center gap-2 transition-colors">
                            <Plus size={20} /> Add Fruit
                        </button>
                    </div>
                </div>
            </div>

            {/* MODAL DE SELEÇÃO */}
            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-black/80 z-50 flex items-end md:items-center justify-center p-4">
                        <div className="bg-slate-800 w-full max-w-md rounded-xl max-h-[80vh] flex flex-col border border-slate-700 shadow-2xl">
                            <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-800 rounded-t-xl">
                                <h3 className="font-bold text-white text-lg">Select Fruit</h3>
                                <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-slate-700 rounded">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="overflow-y-auto p-2 space-y-2 flex-1">
                                {fruits.map((fruit) => (
                                    <button
                                        key={fruit.id}
                                        onClick={() => addFruit(fruit)}
                                        className="w-full flex justify-between items-center p-3 hover:bg-slate-700 rounded-lg transition-colors text-left bg-slate-700/30 border border-slate-700/50"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 flex-shrink-0">
                                                <img src={fruit.image} alt={fruit.name} className="w-full h-full object-contain drop-shadow-md" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className={`font-bold ${fruit.color || 'text-white'}`}>{fruit.name}</span>
                                                <span className="text-xs text-slate-400 uppercase">{fruit.rarity}</span>
                                            </div>
                                        </div>
                                        <span className="font-mono text-sm bg-slate-900 px-2 py-1 rounded text-green-400">
                                            ${formatNumber(fruit.value)}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div >
                )
            }
        </div >
    );
}