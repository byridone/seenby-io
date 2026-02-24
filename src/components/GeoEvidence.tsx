"use client";
import { motion } from "framer-motion";
import { FlaskConical, TrendingUp, Quote, Link, Type } from "lucide-react";

interface EvidenceData {
    id: string;
    label: string;
    value: number;
    valueLabel: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgStyle: string;
}

const evidenceData: EvidenceData[] = [
    {
        id: "cite",
        label: "Alıntı Ekleme (Cite Sources)",
        value: 100, // Normalized for max width
        valueLabel: "%115",
        description: "GEO'nun en güçlü silahı. AI'nın kaynak gösterme refleksini tetikler.",
        icon: <Link className="w-4 h-4 text-orange-400" />,
        color: "text-orange-400",
        bgStyle: "bg-gradient-to-r from-orange-600/80 to-red-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
    },
    {
        id: "quotes",
        label: "Otomatik Söz/Alıntı (Quotes)",
        value: 40,
        valueLabel: "%40",
        description: "Otoriter isimlerden yapılan alıntılar e-e-a-t sinyalini yükseltir.",
        icon: <Quote className="w-4 h-4 text-orange-300" />,
        color: "text-orange-300",
        bgStyle: "bg-gradient-to-r from-orange-700/60 to-orange-500/80"
    },
    {
        id: "stats",
        label: "İstatistik Ekleme",
        value: 37,
        valueLabel: "%37",
        description: "Matematiksel veriler, LLM'lerin 'kanıtlanabilirlik' süzgecinden kolay geçer.",
        icon: <TrendingUp className="w-4 h-4 text-orange-200" />,
        color: "text-orange-200",
        bgStyle: "bg-gradient-to-r from-orange-800/50 to-orange-600/70"
    },
    {
        id: "keyword",
        label: "Klasik Anahtar Kelime Doldurma",
        value: 5,
        valueLabel: "Nötr / Negatif",
        description: "Geleneksel SEO taktiği. Modern AI modelleri tarafından 'spam' olarak algılanır.",
        icon: <Type className="w-4 h-4 text-gray-500" />,
        color: "text-gray-500",
        bgStyle: "bg-gradient-to-r from-gray-800 to-gray-700 opacity-50"
    }
];

export default function GeoEvidence() {
    return (
        <section className="py-24 bg-[#080808] relative border-t border-white/5 overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-6">
                        <FlaskConical className="w-4 h-4" />
                        <span className="font-semibold tracking-wide">Akademik Kanıtlar</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        GEO Gerçekten <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Çalışıyor mu?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-2">
                        Princeton Üniversitesi & Aggarwal et al. "GEO-bench" araştırması sonuçları.
                    </p>
                    <p className="text-gray-500 text-sm italic">
                        (10,000 farklı yapay zeka sorgusu üzerinde test edilmiştir)
                    </p>
                </div>

                <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 md:p-12 shadow-2xl relative">
                    {/* Grid lines background */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTBoMTB2MTBIMHptMjAgMjBoMTB2MTBIMjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-50 rounded-3xl"></div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
                            <h3 className="text-xl font-bold text-gray-300">Görünürlük Artışı (Relative Improvement)</h3>
                            <div className="hidden md:flex gap-4 text-xs font-mono text-gray-500">
                                <span>0%</span>
                                <span>50%</span>
                                <span>100%</span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {evidenceData.map((item, index) => (
                                <div key={item.id} className="relative">
                                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                                        <div className="md:w-1/3 flex items-center gap-3">
                                            <div className="p-2 bg-black/50 border border-gray-800 rounded-lg shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className={`font-bold ${item.color}`}>{item.label}</h4>
                                                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                                            </div>
                                        </div>

                                        <div className="md:w-2/3 flex-1 flex items-center gap-4">
                                            <div className="h-8 w-full bg-black/40 rounded-r-lg rounded-l-sm border-l-2 border-gray-700 relative overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${item.value}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.2, duration: 1, ease: "easeOut" }}
                                                    className={`absolute top-0 left-0 h-full ${item.bgStyle} rounded-r-sm flex items-center justify-end px-3`}
                                                >
                                                </motion.div>
                                            </div>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.2 + 0.8, duration: 0.4 }}
                                                className={`font-black text-xl md:text-2xl min-w-[3rem] ${item.color}`}
                                            >
                                                {item.valueLabel}
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
