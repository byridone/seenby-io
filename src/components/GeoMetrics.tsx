"use client";
import { motion } from "framer-motion";
import { BarChart3, PieChart, Activity, MapPin } from "lucide-react";

export default function GeoMetrics() {
    return (
        <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
            {/* Background Details */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Başarıyı Ölçümlemek:<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Tıklamadan Alıntıya</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Klasik SEO metriklerini unutun. GEO döneminde başarının yeni tanımı,
                        yapay zekanın sizi ne kadar sıklıkla ve hangi tonda "tavsiye ettiğidir".
                    </p>
                </div>

                {/* Dashboard Frame */}
                <div className="bg-[#0a0f18] border border-indigo-500/20 rounded-[2rem] p-2 md:p-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 opacity-50"></div>

                    {/* Fake Browser/Settings Bar */}
                    <div className="flex items-center justify-between mb-8 px-4 pt-4">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400 font-mono text-sm tracking-wider">GEO ANALYTICS DASHBOARD</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                            <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                        {/* 1. AI Alıntılanma Sıklığı */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-black/50 border border-white/5 rounded-2xl p-6 relative group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <BarChart3 className="w-5 h-5 text-indigo-400" />
                                <h4 className="font-bold text-gray-200">AI Alıntılanma Sıklığı</h4>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { platform: 'Google AIO', v: 45, c: 'bg-indigo-500' },
                                    { platform: 'Perplexity', v: 30, c: 'bg-indigo-400' },
                                    { platform: 'ChatGPT Search', v: 15, c: 'bg-indigo-300' },
                                    { platform: 'Claude', v: 10, c: 'bg-indigo-200' },
                                ].map((item, i) => (
                                    <div key={item.platform} className="flex items-center gap-4">
                                        <div className="w-32 text-xs text-gray-400 font-mono truncate">{item.platform}</div>
                                        <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.v}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                className={`h-full ${item.c}`}
                                            ></motion.div>
                                        </div>
                                        <div className="w-10 text-right text-xs text-gray-300 font-bold">%{item.v}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* 2. Görünürlük Payı (Share of Voice) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-black/50 border border-white/5 rounded-2xl p-6 relative flex flex-col items-center justify-center"
                        >
                            <div className="w-full flex items-center gap-3 mb-6 absolute top-6 left-6">
                                <PieChart className="w-5 h-5 text-cyan-400" />
                                <h4 className="font-bold text-gray-200">Görünürlük Payı (SOV)</h4>
                            </div>
                            <div className="mt-8 flex items-center gap-8">
                                {/* CSS Segmented circle mimicking a donut chart */}
                                <div className="relative w-32 h-32 rounded-full border-[16px] border-indigo-900 border-t-cyan-400 border-r-cyan-400 transform -rotate-45 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                                    <div className="absolute inset-0 flex items-center justify-center transform rotate-45">
                                        <span className="text-2xl font-black text-cyan-400">%40</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div><span className="text-sm text-gray-300">Markanız (%40)</span></div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-900"></div><span className="text-sm text-gray-500">Rakip 1 (%25)</span></div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-900/60"></div><span className="text-sm text-gray-500">Rakip 2 (%20)</span></div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-900/30"></div><span className="text-sm text-gray-500">Diğer (%15)</span></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. Duygu Analizi */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-black/50 border border-white/5 rounded-2xl p-6 relative"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Activity className="w-5 h-5 text-emerald-400" />
                                <h4 className="font-bold text-gray-200">Duygu Analizi (Sentiment)</h4>
                            </div>
                            <div className="flex items-center justify-between mt-8 relative">
                                <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-800 -translate-y-1/2 z-0 rounded-full"></div>
                                <div className="absolute left-1/2 top-1/2 w-1/2 h-1 bg-gradient-to-r from-gray-600 to-emerald-500 -translate-y-1/2 z-0 rounded-r-full"></div>

                                <div className="relative z-10 flex flex-col items-center gap-2 bg-black/50 p-2 rounded-xl backdrop-blur-sm">
                                    <div className="text-2xl opacity-50">😠</div>
                                    <span className="text-xs text-gray-500">Negatif</span>
                                </div>
                                <div className="relative z-10 flex flex-col items-center gap-2 bg-black/50 p-2 rounded-xl backdrop-blur-sm">
                                    <div className="text-2xl opacity-80">😐</div>
                                    <span className="text-xs text-gray-400">Nötr</span>
                                </div>
                                <div className="relative z-10 flex flex-col items-center gap-2 bg-emerald-900/40 p-2 rounded-xl border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] backdrop-blur-sm">
                                    <div className="text-3xl">🤩</div>
                                    <span className="text-xs font-bold text-emerald-400">Pozitif / Tavsiye</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* 4. Konum Ayarlı Kelime Sayısı */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-black/50 border border-white/5 rounded-2xl p-6 relative flex justify-between items-center"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className="w-5 h-5 text-orange-400" />
                                    <h4 className="font-bold text-gray-200">Kapsanan Niş Konular</h4>
                                </div>
                                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-1">2,500+</div>
                                <div className="text-sm text-gray-500">Etki Edilen Sorgu Varyasyonu</div>
                            </div>

                            <div className="flex items-end gap-2 h-20">
                                {[30, 45, 25, 60, 80, 50, 95].map((height, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${height}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="w-3 bg-gradient-to-t from-orange-600/50 to-orange-400 rounded-t-sm"
                                    ></motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                    <div className="mt-8 text-center text-xs text-gray-600 font-mono border-t border-white/5 pt-4">
                        Tüm metrikler API destekli ve gerçek zamanlı yapay zeka monitörleme araçlarıyla sağlanmaktadır.
                    </div>
                </div>
            </div>
        </section>
    );
}
