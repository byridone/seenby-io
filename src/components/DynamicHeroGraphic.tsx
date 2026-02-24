"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Mic, MessageSquare, BarChart } from "lucide-react";

export default function DynamicHeroGraphic() {
    const [step, setStep] = useState(0);

    // Sequence: 
    // 0: Search typing 
    // 1: Voice speaking
    // 2: Chatbot answering
    // 3: Knowledge graph rising (12 weeks)
    // 4: Brand Authority explode (Su kabı taşıyor)

    useEffect(() => {
        // Hızlıca patlama noktasına (step 4) gelmesi için süreleri kısalttık
        // Patlama (step 4) anını ise daha uzun süre ekranda tutuyoruz
        const timeout = setTimeout(() => {
            setStep((prev) => (prev + 1) % 5);
        }, step === 4 ? 5000 : 1500);
        return () => clearTimeout(timeout);
    }, [step]);

    return (
        <div className="relative w-full h-[400px] lg:h-[500px] max-w-5xl mx-auto flex items-center justify-center">

            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M 150 100 Q 300 100 500 250" stroke={step === 0 || step === 4 ? "#3b82f6" : "#1f2937"} strokeWidth={step === 0 || step === 4 ? "4" : "2"} strokeDasharray="6 6" className="transition-all duration-1000" />
                <path d="M 150 400 Q 300 400 500 250" stroke={step === 1 || step === 4 ? "#8b5cf6" : "#1f2937"} strokeWidth={step === 1 || step === 4 ? "4" : "2"} strokeDasharray="6 6" className="transition-all duration-1000" />
                <path d="M 850 100 Q 700 100 500 250" stroke={step === 2 || step === 4 ? "#10b981" : "#1f2937"} strokeWidth={step === 2 || step === 4 ? "4" : "2"} strokeDasharray="6 6" className="transition-all duration-1000" />
                <path d="M 850 400 Q 700 400 500 250" stroke={step === 3 || step === 4 ? "#f59e0b" : "#1f2937"} strokeWidth={step === 3 || step === 4 ? "4" : "2"} strokeDasharray="6 6" className="transition-all duration-1000" />

                {/* Moving Pulses */}
                {(step === 0 || step === 4) && <circle r="6" fill="#60a5fa"><animateMotion dur="1.5s" repeatCount="indefinite" path="M 150 100 Q 300 100 500 250" /></circle>}
                {(step === 1 || step === 4) && <circle r="6" fill="#a78bfa"><animateMotion dur="1.5s" repeatCount="indefinite" path="M 150 400 Q 300 400 500 250" /></circle>}
                {(step === 2 || step === 4) && <circle r="6" fill="#34d399"><animateMotion dur="1.5s" repeatCount="indefinite" path="M 850 100 Q 700 100 500 250" /></circle>}
                {(step === 3 || step === 4) && <circle r="6" fill="#fbbf24"><animateMotion dur="1.5s" repeatCount="indefinite" path="M 850 400 Q 700 400 500 250" /></circle>}
            </svg>

            {/* Nodes */}
            {/* 1. AI Arama */}
            <div className={`absolute left-[15%] top-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 lg:gap-4 transition-transform duration-500 z-10 ${step === 0 || step === 4 ? "scale-110" : "scale-100 opacity-50"}`}>
                <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-2 shadow-lg transition-colors duration-500 ${step === 0 || step === 4 ? "border-blue-500 bg-blue-500/20 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.5)]" : "border-gray-700 bg-[#0a0f18] text-gray-400"}`}>
                    <Search className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <span className="text-xs lg:text-sm text-gray-400 font-mono whitespace-nowrap tracking-wider">AI ARAMA</span>

                <AnimatePresence>
                    {step === 0 && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -top-12 lg:-top-16 whitespace-nowrap bg-black/80 border border-blue-500/30 text-blue-300 text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl flex gap-1 shadow-[0_10px_30px_rgba(0,102,255,0.2)]">
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>En</motion.span>
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>iyi</motion.span>
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>seçenek</motion.span>
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>nedir?</motion.span>
                            <span className="animate-pulse">_</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* 2. Sesli Asistan */}
            <div className={`absolute left-[15%] top-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 lg:gap-4 transition-transform duration-500 z-10 ${step === 1 || step === 4 ? "scale-110" : "scale-100 opacity-50"}`}>
                <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-2 shadow-lg transition-colors duration-500 ${step === 1 || step === 4 ? "border-purple-500 bg-purple-500/20 text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.5)]" : "border-gray-700 bg-[#0a0f18] text-gray-400"}`}>
                    <Mic className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <span className="text-xs lg:text-sm text-gray-400 font-mono whitespace-nowrap tracking-wider">SESLİ ASİSTAN</span>

                <AnimatePresence>
                    {step === 1 && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-14 lg:-bottom-20 whitespace-nowrap bg-black/80 border border-purple-500/30 flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-3 rounded-full shadow-[0_10px_30px_rgba(168,85,247,0.2)]">
                            <span className="w-1.5 h-3 lg:h-4 bg-purple-400 rounded-full animate-pulse"></span>
                            <span className="w-1.5 h-5 lg:h-6 bg-purple-400 rounded-full animate-pulse delay-75"></span>
                            <span className="w-1.5 h-2 lg:h-3 bg-purple-400 rounded-full animate-pulse delay-150"></span>
                            <span className="text-purple-300 text-xs lg:text-sm ml-2">"Bana tavsiye et..."</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* 3. AI Chatbot */}
            <div className={`absolute left-[85%] top-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 lg:gap-4 transition-transform duration-500 z-10 ${step === 2 || step === 4 ? "scale-110" : "scale-100 opacity-50"}`}>
                <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-2 shadow-lg transition-colors duration-500 ${step === 2 || step === 4 ? "border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.5)]" : "border-gray-700 bg-[#0a0f18] text-gray-400"}`}>
                    <MessageSquare className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <span className="text-xs lg:text-sm text-gray-400 font-mono whitespace-nowrap tracking-wider">AI CHATBOT</span>

                <AnimatePresence>
                    {step === 2 && (
                        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="absolute -top-12 lg:-top-16 whitespace-nowrap bg-black/80 border border-emerald-500/30 text-emerald-300 text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl flex items-center gap-1.5 lg:gap-2 shadow-[0_10px_30px_rgba(16,185,129,0.2)]">
                            <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-emerald-400 animate-bounce"></span>
                            <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-emerald-400 animate-bounce delay-75"></span>
                            <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-emerald-400 animate-bounce delay-150"></span>
                            <span className="ml-1.5 font-medium">Şu markayı inceleyin:</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* 4. Bilgi Grafiği */}
            <div className={`absolute left-[85%] top-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 lg:gap-4 transition-transform duration-500 z-10 ${step === 3 || step === 4 ? "scale-110" : "scale-100 opacity-50"}`}>
                <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-2 shadow-lg transition-colors duration-500 ${step === 3 || step === 4 ? "border-orange-500 bg-orange-500/20 text-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.5)]" : "border-gray-700 bg-[#0a0f18] text-gray-400"}`}>
                    <BarChart className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <span className="text-xs lg:text-sm text-gray-400 font-mono whitespace-nowrap tracking-wider">BİLGİ GRAFİĞİ</span>

            </div>

            {/* Center Brand - Su Kabı Animasyonu */}
            <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="relative mb-3 lg:mb-8">
                    {/* Splash/Explode Background */}
                    <AnimatePresence>
                        {step === 4 && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: [0, 0.8, 0], scale: [1, 2] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="absolute inset-0 bg-blue-500 rounded-full blur-md"
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 1 }}
                                    animate={{ opacity: [0, 1, 0], scale: [1, 2.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                                    className="absolute inset-0 border-2 border-blue-400 rounded-full"
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 1 }}
                                    animate={{ opacity: [0, 1, 0], scale: [1, 3] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                                    className="absolute inset-0 border border-blue-300 rounded-full"
                                />
                            </>
                        )}
                    </AnimatePresence>

                    {/* Container */}
                    <div className={`relative z-10 w-32 h-32 lg:w-44 lg:h-44 bg-gradient-to-br from-gray-900 to-[#0a0f18] rounded-full flex items-center justify-center border-[3px] overflow-hidden shadow-2xl transition-colors duration-1000 ${step === 4 ? "border-blue-400 shadow-[0_0_80px_rgba(59,130,246,0.6)]" : "border-gray-800"
                        }`}>
                        {/* İçten Dışa Doğru Doluluk (Mavi Daire) */}
                        <motion.div
                            className="absolute left-1/2 top-1/2 -ml-32 -mt-32 w-64 h-64 lg:-ml-48 lg:-mt-48 lg:w-96 lg:h-96 bg-blue-500 rounded-full blur-[8px] opacity-90 mix-blend-screen"
                            initial={{ scale: 0 }}
                            animate={{
                                scale: step === 0 ? 0.1 : step === 1 ? 0.4 : step === 2 ? 0.7 : step === 3 ? 0.95 : 1.5
                            }}
                            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                        />

                        {/* Brand Text inside container */}
                        <div className={`relative z-10 font-black tracking-widest uppercase transition-colors duration-1000 text-lg lg:text-2xl mix-blend-screen ${step === 4 ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-gray-400"}`}>
                            MARKA
                        </div>
                    </div>
                </div>

                <h3 className={`text-lg lg:text-2xl font-black tracking-widest uppercase transition-colors duration-500 ${step === 4 ? "text-white" : "text-gray-500"}`}>
                    Görünürlük
                </h3>

                <AnimatePresence mode="wait">
                    {step === 4 ? (
                        <motion.span initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-xs lg:text-sm text-blue-400 font-bold mt-2 lg:mt-3 tracking-widest font-mono whitespace-nowrap drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                            OTORİTE İNŞA EDİLDİ
                        </motion.span>
                    ) : (
                        <motion.span initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-xs lg:text-sm text-gray-500 tracking-[0.2em] mt-2 lg:mt-3 font-mono whitespace-nowrap">
                            BİLGİ AKIŞI: {step * 25}%
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>

            {/* Floating AI Models (Explosion Phase) */}
            <AnimatePresence>
                {step === 4 && (
                    <div className="absolute inset-0 pointer-events-none z-20">
                        {[
                            { name: "ChatGPT", top: "8%", left: "30%", delay: 0.1, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_15px_rgba(52,211,153,0.3)]" },
                            { name: "Perplexity", top: "10%", left: "70%", delay: 0.3, color: "text-orange-400 border-orange-500/30 bg-orange-500/10 shadow-[0_0_15px_rgba(251,146,60,0.3)]" },
                            { name: "Gemini", top: "45%", left: "5%", delay: 0.5, color: "text-blue-400 border-blue-500/30 bg-blue-500/10 shadow-[0_0_15px_rgba(96,165,250,0.3)]" },
                            { name: "Claude", top: "45%", left: "95%", delay: 0.2, color: "text-purple-400 border-purple-500/30 bg-purple-500/10 shadow-[0_0_15px_rgba(192,132,252,0.3)]" },
                            { name: "Copilot", top: "70%", left: "5%", delay: 0.4, color: "text-green-400 border-green-500/30 bg-green-500/10 shadow-[0_0_15px_rgba(74,222,128,0.3)]" },
                            { name: "Meta AI", top: "70%", left: "95%", delay: 0.6, color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.3)]" },
                            { name: "AI Overviews", top: "90%", left: "50%", delay: 0.3, color: "text-red-400 border-red-500/30 bg-red-500/10 shadow-[0_0_15px_rgba(248,113,113,0.3)]" },
                            { name: "DeepSeek", top: "12%", left: "50%", delay: 0.7, color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10 shadow-[0_0_15px_rgba(250,204,21,0.3)]" },
                        ].map((model, i) => (
                            <motion.div
                                key={model.name}
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                transition={{
                                    duration: 0.5,
                                    delay: model.delay,
                                    ease: "easeOut"
                                }}
                                className={`absolute px-3 py-1.5 rounded-full border text-[10px] md:text-sm font-bold tracking-wider whitespace-nowrap backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 ${model.color}`}
                                style={{ top: model.top, left: model.left }}
                            >
                                {model.name}
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
