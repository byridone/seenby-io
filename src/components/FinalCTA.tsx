"use client";
import { motion } from "framer-motion";
import { Search, MessageSquare, Mic, BarChart, ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-32 sm:py-40 bg-[#000000] relative overflow-hidden border-t border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-gradient-radial from-gray-900/40 to-transparent pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                        Dijital Otoritenin <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-500">Yeni Tanımı</span>
                    </h2>
                </div>

                {/* Central Graphic (Brand Logo Connected to AI Nodes) */}
                <div className="relative max-w-3xl mx-auto h-[400px] flex items-center justify-center mb-24">
                    {/* Connecting Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            d="M 150 100 C 300 100, 300 200, 400 200" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4"
                        />
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                            d="M 150 300 C 300 300, 300 200, 400 200" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4"
                        />
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                            d="M 650 100 C 500 100, 500 200, 400 200" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4"
                        />
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
                            d="M 650 300 C 500 300, 500 200, 400 200" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4"
                        />
                    </svg>

                    {/* Nodes */}
                    <div className="absolute top-[80px] left-[100px] flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-[#0a0f18] border border-gray-700 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] text-gray-400">
                            <Search className="w-5 h-5" />
                        </div>
                        <span className="text-xs text-gray-500 font-mono">AI Arama</span >
                    </div>

                    <div className="absolute bottom-[80px] left-[100px] flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-[#0a0f18] border border-gray-700 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] text-gray-400">
                            <Mic className="w-5 h-5" />
                        </div>
                        <span className="text-xs text-gray-500 font-mono">Sesli Asistan</span>
                    </div>

                    <div className="absolute top-[80px] right-[100px] flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-[#0a0f18] border border-gray-700 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] text-gray-400">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <span className="text-xs text-gray-500 font-mono">AI Chatbot</span>
                    </div>

                    <div className="absolute bottom-[80px] right-[100px] flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-[#0a0f18] border border-gray-700 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] text-gray-400">
                            <BarChart className="w-5 h-5" />
                        </div>
                        <span className="text-xs text-gray-500 font-mono">Bilgi Grafiği</span>
                    </div>

                    {/* Central Brand */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative z-10 flex flex-col items-center bg-black p-6 rounded-3xl border border-gray-800 shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                    >
                        <div className="w-20 h-20 mb-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700">
                            <div className="w-10 h-10 border-2 border-orange-500 rounded-md rotate-45 flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-sm -rotate-45"></div>
                            </div>
                        </div>
                        <span className="text-lg font-black text-white tracking-widest uppercase">Marka</span>
                        <span className="text-[10px] text-gray-500 tracking-[0.2em] mt-1">BRAND LOCO</span>
                    </motion.div>
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xl md:text-3xl font-light text-gray-300 leading-relaxed mb-6">
                        Markalamanın geleceği anahtar kelimelerle değil,
                        yapay zekanın ürettiği cevapta <br className="hidden md:block" />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">'referans' (citation)</span> alabilmekle ilgilidir.
                    </p>
                    <p className="text-lg text-gray-500 font-mono mb-12">
                        Artık hedef sadece bulunmak değil, tavsiye edilmektir.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.dispatchEvent(new CustomEvent('openContact'))}
                        className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
                    >
                        Hemen Yerinizi Alın
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
