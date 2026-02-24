"use client";
import { motion } from "framer-motion";
import { Search, Sparkles, Bot, AlertTriangle, ChevronRight, CheckCircle2 } from "lucide-react";

export default function SeoVsGeo() {
    return (
        <section className="py-24 sm:py-32 bg-[#020202] relative overflow-hidden border-t border-white/5">
            {/* Background Gradients */}
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm mb-6">
                        <Sparkles className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-400/90 font-medium">Paradigma Değişiyor</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        SEO'dan GEO'ya: <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Dijital Görünürlüğün Yeni Kuralları</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Üretken Motor Optimizasyonu (Generative Engine Optimization) Çağında Marka Otoritesi İnşa Etmek
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 lg:w-32 h-px bg-gradient-to-r from-gray-700 via-gray-500 to-orange-500/50 z-0"></div>
                    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#020202] border-2 border-gray-500 z-10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>

                    {/* PAST (SEO) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="text-center mb-6">
                            <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest">Geçmiş (SEO)</h3>
                        </div>

                        <div className="bg-[#0a0d14] border border-gray-800 rounded-xl overflow-hidden shadow-2xl relative group transition-all duration-500 hover:border-gray-700">
                            {/* Browser Header */}
                            <div className="bg-[#111622] px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-gray-700 group-hover:bg-red-500/50 transition-colors"></div>
                                    <div className="w-3 h-3 rounded-full bg-gray-700 group-hover:bg-yellow-500/50 transition-colors"></div>
                                    <div className="w-3 h-3 rounded-full bg-gray-700 group-hover:bg-green-500/50 transition-colors"></div>
                                </div>
                                <div className="mx-auto w-1/2 h-4 bg-white/5 rounded-full flex items-center px-3 gap-2">
                                    <span className="text-[10px] text-gray-600">Google</span>
                                    <Search className="w-3 h-3 text-gray-600 ml-auto" />
                                </div>
                            </div>

                            <div className="p-4 sm:p-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-[0.5]">

                                {/* Search Results */}
                                <div className="space-y-3">
                                    {[1, 2, 3, 4, 5].map((item, index) => (
                                        <div key={item} className={`p-3 bg-white/[0.02] border border-gray-800 rounded-lg flex justify-between items-center relative overflow-hidden ${index > 2 ? 'opacity-40' : ''}`}>
                                            <div className="space-y-1.5 relative z-10 w-full">
                                                <div className="h-4 w-3/4 bg-blue-500/20 rounded"></div>
                                                <div className="h-3 w-1/2 bg-gray-600/30 rounded"></div>
                                            </div>
                                            <div className="text-gray-700 shrink-0">
                                                <ChevronRight className="w-4 h-4" />
                                            </div>

                                            {/* Warning Overlay on Hover */}
                                            <div className="absolute inset-0 bg-red-500/5 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px] cursor-not-allowed">
                                                <span className="text-red-400 text-[10px] sm:text-xs font-bold bg-red-950/90 px-2 py-1 rounded shadow-lg flex items-center gap-1 border border-red-500/20">
                                                    <AlertTriangle className="w-3 h-3" /> 10 Mavi Link Arasında Kaybolma
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* FUTURE (GEO) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="text-center mb-6">
                            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 uppercase tracking-widest flex items-center justify-center gap-2">
                                Gelecek (GEO)
                                <Sparkles className="w-4 h-4 text-orange-400" />
                            </h3>
                        </div>

                        <div className="relative">
                            {/* Glowing effect behind */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/40 via-red-500/20 to-transparent rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>

                            <div className="bg-[#050505] border border-orange-500/30 rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(249,115,22,0.1)] h-full">

                                {/* Decorational circuit lines using CSS/SVG */}
                                <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTBoMTB2MTBIMHptMjAgMjBoMTB2MTBIMjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30"></div>

                                <div className="p-6 sm:p-8 relative z-10 flex flex-col h-full">
                                    <div className="flex gap-4 mb-6 items-center">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-600 p-[1px] shrink-0 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                                            <div className="w-full h-full bg-black rounded-full flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent"></div>
                                                <Bot className="w-6 h-6 text-white relative z-10" />
                                            </div>
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-2 w-1/3 bg-gray-600 rounded"></div>
                                            <div className="h-2 w-1/4 bg-gray-700 rounded"></div>
                                        </div>
                                        <div className="w-10 h-10 border-[3px] border-orange-500/20 rounded-full flex items-center justify-center border-t-orange-500">
                                            <span className="text-orange-500 text-[10px]">%98</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl p-5 text-sm leading-relaxed text-gray-300 relative flex-1 group/box">
                                        <p className="mb-4">
                                            <strong className="text-orange-400 font-semibold group-hover/box:text-orange-300 transition-colors">Generative Engine Optimization (GEO)</strong> transforms search by synthesizing information directly into comprehensive, AI-driven answers.
                                        </p>
                                        <p className="mb-4 text-gray-400">
                                            Instead of lists, brands now compete for inclusion in <span className="text-white border-b border-orange-500/30 pb-0.5">generative summaries</span> by building
                                            <strong className="text-red-400 mx-1">topical authority</strong>, ensuring <strong className="text-red-400 mx-1">factuality</strong>, and optimizing for <strong className="text-red-400 mx-1">entity recognition</strong>.
                                        </p>
                                        <p className="text-gray-400">
                                            GEO focuses on optimizing content for generative models that provide <strong className="text-white">direct answers</strong>, making brand presence crucial for visibility.
                                        </p>
                                        <div className="absolute bottom-4 right-4 text-orange-500 opacity-10 group-hover/box:opacity-20 transition-opacity">
                                            <CheckCircle2 className="w-20 h-20" />
                                        </div>
                                    </div>

                                    <div className="mt-5 flex items-center justify-end">
                                        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-orange-300/80 bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.1)]">
                                            <Sparkles className="w-3 h-3" />
                                            <span>Seenby.io ile %100 Uyumlu Tavsiye</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
