"use client";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, LineChart } from "lucide-react";

export default function Roadmap() {
    const steps = [
        {
            num: "1",
            title: "Analiz",
            desc: "Kullanıcıların AI'a sorduğu soruları (Prompt) ve niyetlerini tespit ederiz.",
            icon: <Search className="w-6 h-6 text-blue-400" />,
            color: "from-blue-500/20 to-blue-500/5",
            borderColor: "border-blue-500/20"
        },
        {
            num: "2",
            title: "Revizyon",
            desc: "İçeriklerinizi 'Sıfırıncı Paragraf' ve akademik istatistiklerle zenginleştiririz.",
            icon: <PenTool className="w-6 h-6 text-purple-400" />,
            color: "from-purple-500/20 to-purple-500/5",
            borderColor: "border-purple-500/20"
        },
        {
            num: "3",
            title: "Teknik Kurulum",
            desc: "Schema işaretlemelerini (JSON-LD) ve robots.txt (GPTBot) izinlerini kurgularız.",
            icon: <Code2 className="w-6 h-6 text-orange-400" />,
            color: "from-orange-500/20 to-orange-500/5",
            borderColor: "border-orange-500/20"
        },
        {
            num: "4",
            title: "İzleme",
            desc: "Marka isminizin AI çıktılarındaki görünürlüğünü ve duygu durumunu takip ederiz.",
            icon: <LineChart className="w-6 h-6 text-emerald-400" />,
            color: "from-emerald-500/20 to-emerald-500/5",
            borderColor: "border-emerald-500/20"
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-[#050505] relative border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Uygulama Yol Haritası:<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Yarın Ne Yapmalı?</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Geleceğin algoritmalarına uyum sağlamak için beklemeye gerek yok.
                        4 adımlı net ve transparan sürecimizle hemen başlıyoruz.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[40%] left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 -translate-y-1/2 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Next Arrow indicator */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-[40%] -right-4 w-8 h-8 text-gray-700 -translate-y-1/2 z-0">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}

                                <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${step.color} border ${step.borderColor} flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#0a0a0a] border border-gray-800 flex items-center justify-center font-bold text-gray-300 shadow-md">
                                        {step.num}
                                    </div>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-200 mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed px-2">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
