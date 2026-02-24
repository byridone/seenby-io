"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import DynamicHeroGraphic from "./DynamicHeroGraphic";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black pt-24 pb-16">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.15)_0%,transparent_50%)]" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-12 lg:gap-16">

                {/* Top Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="relative z-20 text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                        Sıralamaya Girmeyin, <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                            Tavsiye Edilin.
                        </span>
                    </h1>
                </motion.div>

                {/* Animated Graphic Center */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="w-full relative z-10"
                >
                    <DynamicHeroGraphic />
                </motion.div>

                {/* Bottom Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    className="relative z-20 text-center max-w-3xl mx-auto flex flex-col items-center"
                >
                    <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-medium">
                        Hedefiniz sadece arama sonuçlarında bulunmak değil, <br className="hidden md:block" />
                        ChatGPT, Perplexity ve Gemini tarafından <span className="text-[#ff5500] font-bold">öncelikli tavsiye haline</span> gelmektir.
                    </p>

                    <p className="mt-4 text-sm lg:text-base text-gray-500 font-mono tracking-wide">
                        Markanızı yapay zeka ekosisteminin merkezine kodluyoruz.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => window.dispatchEvent(new CustomEvent('openContact'))} className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                            AI Görünürlüğünüzü Analiz Edin <ChevronRight className="w-5 h-5" />
                        </button>
                        <button onClick={() => window.dispatchEvent(new CustomEvent('openDictionary'))} className="flex items-center justify-center gap-2 w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/5 transition-all">
                            GEO Nedir? AI Sözlüğü
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
