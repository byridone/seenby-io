"use client";
import { motion } from "framer-motion";
import { Search, Compass, MessageSquare, Network } from "lucide-react";

export default function AIEcosystem() {
    return (
        <section className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden border-t border-white/5">
            {/* Background Details */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
                        <Network className="w-4 h-4" />
                        <span className="font-semibold tracking-wide">Sorgu Yayılımı (Query Spread)</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        AI Ekosistemi:<br /> Her Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Farklı Konuşur</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Tek tip bir strateji artık yeterli değil. Markanızın mesajını,
                        hedeflenen yapay zeka platformunun kendi anlayacağı "anadile" çeviriyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Google AI Overviews */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-b from-[#0a0f18] to-[#05080f] border border-blue-500/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-blue-500/40 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all"></div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center shrink-0">
                                <Search className="w-7 h-7 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Google AIO</h3>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="flex flex-col gap-1 pb-4 border-b border-white/5">
                                <span className="text-4xl font-black text-blue-400">~7.7</span>
                                <span className="text-sm text-gray-500 font-mono">Domain Alıntı Ort.</span>
                            </div>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                                    <span>Tamamen <strong>E-E-A-T</strong> odaklıdır. Güven ve deneyim arar.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                                    <span>Geleneksel ilk 10 SEO sonucuna <strong>%76 bağlılık</strong> gösterir.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Perplexity */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="bg-gradient-to-b from-[#140d0a] to-[#0f0805] border border-orange-500/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-orange-500/40 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full group-hover:bg-orange-500/20 transition-all"></div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center shrink-0">
                                <Compass className="w-7 h-7 text-orange-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Perplexity</h3>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="flex flex-col gap-1 pb-4 border-b border-white/5">
                                <span className="text-4xl font-black text-orange-400">~5.0</span>
                                <span className="text-sm text-gray-500 font-mono">Domain Alıntı Ort.</span>
                            </div>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                                    <span>Derin <strong>araştırma ve tarafsız</strong> kıyaslama odaklıdır.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                                    <span>Sıkça <strong>%90 topluluk</strong> (Reddit vb.) ve akademik kaynaklara başvurur.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* ChatGPT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-gradient-to-b from-[#0a1410] to-[#050f0a] border border-emerald-500/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-emerald-500/40 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full group-hover:bg-emerald-500/20 transition-all"></div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center shrink-0">
                                <MessageSquare className="w-7 h-7 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">ChatGPT</h3>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="flex flex-col gap-1 pb-4 border-b border-white/5">
                                <span className="text-4xl font-black text-emerald-400">Direkt</span>
                                <span className="text-sm text-gray-500 font-mono">Yanıt Yapısı</span>
                            </div>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                                    <span><strong>Sohbet akışı</strong> (Conversational) içinde marka tavsiyesi çok güçlüdür.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                                    <span>Detaylı kıyaslamalardan çok, tek bir <strong>kesin ve güvenilir</strong> sonuca ulaşmaya odaklıdır.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 font-mono text-sm inline-flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-gray-600 block"></span>
                        ÇIKIŞ STRATEJİSİ
                        <span className="w-8 h-[1px] bg-gray-600 block"></span>
                    </p>
                    <p className="text-xl md:text-2xl text-gray-300 mt-4 font-light">
                        Bu yüzden tekil bir SEO çalışması değil, her platformun algoritmasına hitap edecek <br className="hidden md:block" /> çok katmanlı bir <strong>'Sorgu Yayılımı'</strong> (Query Spread) stratejisi uyguluyoruz.
                    </p>
                </div>
            </div>
        </section>
    );
}
