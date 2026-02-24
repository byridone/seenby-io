"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, BrainCircuit, ScanSearch, LineChart, FileText } from "lucide-react";

const packages = [
    {
        id: "growth",
        name: "Growth",
        price: "$149",
        billing: "/ay",
        goal: "Büyüyen işletmeler için en iyisi.",
        icon: <LineChart className="w-8 h-8 text-purple-400" />,
        features: [
            "300 AI Sorgusu / Ay",
            "10 Görünürlük Taraması / Ay",
            "5 AI Modeli",
            "3 Strateji Raporu / Ay",
            "25 AI Makalesi / Ay"
        ],
        highlight: false
    },
    {
        id: "pro",
        name: "Pro",
        price: "$399",
        billing: "/ay",
        goal: "Ajanslar ve büyük işletmeler için.",
        icon: <Zap className="w-8 h-8 text-orange-400" />,
        features: [
            "800 AI Sorgusu / Ay",
            "25 Görünürlük Taraması / Ay",
            "6 AI Modeli",
            "5 Strateji Raporu / Ay",
            "50 AI Makalesi / Ay"
        ],
        highlight: true,
        badge: "EN POPÜLER"
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "Özel",
        billing: "çözümler",
        goal: "Kurumlara özel çözümler.",
        icon: <BrainCircuit className="w-8 h-8 text-emerald-400" />,
        features: [
            "2000 AI Sorgusu / Ay",
            "50 Görünürlük Taraması / Ay",
            "8 AI Modeli",
            "15 Strateji Raporu / Ay",
            "150 AI Makalesi / Ay"
        ],
        highlight: false
    }
];

export default function PricingCards() {
    return (
        <section id="fiyatlar" className="py-24 bg-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Değer Odaklı <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Yatırım</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Anahtar kelimesi satmıyoruz, Yapay Zeka motorlarındaki <strong className="text-white">Görünürlük Payınızı (SOV)</strong> artırıyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative group w-full h-full flex"
                        >
                            {pkg.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                                    {pkg.badge}
                                </div>
                            )}

                            {/* UNIFIED CARD */}
                            <div className={`w-full p-8 rounded-3xl border flex flex-col transition-colors duration-500
                                ${pkg.highlight
                                    ? "bg-gradient-to-b from-blue-900/40 to-black border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
                                    : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
                                }`}
                            >
                                {/* HEADER & PRICING */}
                                <div className="mb-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-3 rounded-2xl border ${pkg.highlight ? 'bg-blue-500/20 border-blue-500/30' : 'bg-white/5 border-white/10'}`}>
                                            {pkg.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{pkg.name}</h3>
                                    <p className="text-gray-400 text-sm lg:h-12 leading-relaxed">{pkg.goal}</p>

                                    <div className="mt-8 mb-4">
                                        <span className="text-5xl font-extrabold text-white">{pkg.price}</span>
                                        <span className="text-gray-500 text-lg">{pkg.billing}</span>
                                    </div>
                                </div>

                                {/* FEATURES */}
                                <div className="flex-1 flex flex-col mt-4">
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-5 pb-4 border-b border-white/10">Neler Dahil?</h4>
                                    <ul className="space-y-4 mb-8 flex-1">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className={`mt-0.5 rounded-full p-1 shrink-0 ${pkg.highlight ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-gray-400'}`}>
                                                    <Check className="w-3 h-3" strokeWidth={3} />
                                                </div>
                                                <span className="text-gray-300 text-sm leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto pt-4">
                                        <button onClick={() => window.dispatchEvent(new CustomEvent('openContact'))} className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98]
                                            ${pkg.highlight ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]" : "bg-white/10 hover:bg-white/20 text-white"}`}>
                                            {pkg.highlight ? <Sparkles className="w-5 h-5" /> : null}
                                            Seç ve Başla
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
