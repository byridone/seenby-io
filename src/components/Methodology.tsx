"use client";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Sparkles, Database, CheckCircle2 } from "lucide-react";

export default function Methodology() {
    return (
        <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">4 Temel Adımda</span> GEO Metodolojisi
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Görünürlüğü şansa bırakmıyoruz. İçeriğinizi ve altyapınızı yapay zeka botlarının
                        "en güvenilir kaynak" olarak seçeceği şekilde mühendislikle kurguluyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 lg:px-12">

                    {/* Strategy 1: Authority & E-E-A-T */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-black/50 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">1. Otorite ve Güven (E-E-A-T)</h3>
                        </div>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                <span><strong className="text-gray-200">Marka Varlığı (Entity):</strong> Markanızı LLM'ler için sıradan bir site değil, güvenilir bir bilgi kaynağı (bilgi düğümü) haline getiriyoruz.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                <span><strong className="text-gray-200">Yazar Kimliği:</strong> Biyografi ve veri şeffaflığıyla "uzmanlık" algısını kanıtlıyoruz.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                <span><strong className="text-gray-200">Kanıta Dayalı Altyapı:</strong> Tüm iddiaları resmi ve akademik referanslarla destekleyerek "halüsinasyon" riskini sıfırlıyoruz.</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Strategy 2: Content Architecture & Zero Paragraph */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-black/50 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                                <FileText className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">2. İçerik Mimarisi & Sıfırıncı Paragraf</h3>
                        </div>

                        {/* Visual Rep for Zero Paragraph */}
                        <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-xl">
                            <div className="h-6 w-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-md mb-2 relative overflow-hidden">
                                <div className="absolute inset-0 border-2 border-purple-400/50 rounded-md"></div>
                                <span className="absolute inset-0 flex items-center px-3 text-[10px] font-bold text-purple-300">Sıfırıncı Paragraf (Sorunun Doğrudan Net Cevabı)</span>
                            </div>
                            <div className="space-y-2 mt-4 opacity-50">
                                <div className="h-2 w-3/4 bg-gray-500 rounded"></div>
                                <div className="h-2 w-full bg-gray-500 rounded"></div>
                                <div className="h-2 w-5/6 bg-gray-500 rounded"></div>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Konu mimarisini modülerleştiriyoruz. En üste yapay zekanın anında sentezleyebileceği "sıfırıncı paragrafı" koyuyor; alt başlıkları H2'ler ile "kullanıcı soruları", listeler ve tablolarla yapılandırıyoruz.
                        </p>
                    </motion.div>

                    {/* Strategy 3: Content Enrichment */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-black/50 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all"></div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                                <Sparkles className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">3. Yüksek Getirili Zenginleştirme</h3>
                        </div>

                        <div className="mb-6 p-4 bg-orange-500/5 border border-orange-500/20 rounded-xl text-sm text-gray-300 leading-relaxed font-serif italic relative">
                            "Kişi başı yıllık <span className="relative inline-block"><span className="text-orange-400 font-bold relative z-10">11-12 kg</span><span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] bg-orange-500/20 text-orange-300 px-1 rounded uppercase tracking-widest font-sans not-italic">İstatistik</span></span> tüketimle
                            İsviçreliler, dünyanın en büyük çikolata severleridir
                            <span className="relative inline-block ml-1"><span className="text-blue-400 font-bold relative z-10">([1]-[Uluslararası Araştırma])</span><span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] bg-blue-500/20 text-blue-300 px-1 rounded uppercase tracking-widest font-sans not-italic">Kaynak</span></span>."
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Standart cümleleri LLM'lerin sevdiği "veri" diline çeviririz. Metinleri; sayısal nicel verilerle (İstatistikler), saygın pazar görüşleriyle (Alıntılar) ve sağlam referans ağlarıyla (Kaynaklar) donatırız.
                        </p>
                    </motion.div>

                    {/* Strategy 4: Technical GEO */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-black/50 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all"></div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                                <Database className="w-6 h-6 text-teal-400" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">4. Teknik GEO & Code Markup</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-4 items-start p-3 bg-white/5 rounded-xl border border-white/5">
                                <div className="font-mono text-[10px] text-teal-400 mt-1 bg-teal-500/10 p-1.5 rounded">JSON-LD</div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-200">Teknik Kimlik Kartı</h4>
                                    <p className="text-xs text-gray-400 mt-1">İçeriği insanların değil, makine botların anadilinde (Schema formatında) sunarız.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-3 bg-white/5 rounded-xl border border-white/5">
                                <div className="font-mono text-[10px] text-teal-400 mt-1 bg-teal-500/10 p-1.5 rounded">robots.txt</div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-200">Kesintisiz Bot Erişimi</h4>
                                    <p className="text-xs text-gray-400 mt-1">GPTBot, ClaudeBot gibi tüm üretken AI tarayıcılarına VIP geçiş ve indeksleme izni tanımlarız.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
