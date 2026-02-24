"use client";
import { motion } from "framer-motion";
import { Database, SearchCode, ShieldCheck, TrendingUp, Terminal, Code2, CheckCircle2, BarChart3, ChevronRight } from "lucide-react";

const steps = [
    {
        id: "query",
        icon: <Terminal className="w-5 h-5 text-blue-400" />,
        title: "1. Sorgu (Query) & Keşif Analizi",
        description: "Markanızın ChatGPT, Perplexity ve Gemini aramalarında nasıl konumlandığını tespit ediyoruz.",
        span: "col-span-1 md:col-span-2 lg:col-span-2",
        delay: 0.1,
        ui: (
            <div className="bg-black/60 rounded-xl border border-white/5 p-4 font-mono text-xs sm:text-sm text-gray-300 w-full mt-6 shadow-inner relative overflow-hidden h-40 flex flex-col">
                <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    <span className="text-gray-500 ml-2">rankie-audit.sh</span>
                </div>
                <div className="space-y-2 flex-1 relative z-10">
                    <div className="flex gap-2">
                        <span className="text-blue-400">~</span>
                        <span className="text-gray-400">./scan_brand.sh --target</span>
                        <span className="text-white">yourbrand.com</span>
                    </div>
                    <div className="flex gap-2 text-gray-500 animate-pulse">
                        <span className="text-green-400">✔</span>
                        <span>ChatGPT (GPT-4o) taranıyor...</span>
                    </div>
                    <div className="flex gap-2 text-gray-500">
                        <span className="text-green-400">✔</span>
                        <span>Perplexity bağlamı okunuyor...</span>
                    </div>
                    <div className="mt-2 text-blue-300 border-l-2 border-blue-500/30 pl-2">
                        [Sonuç]: Görünürlük Payı (SOV) %12. Hedef: %85
                    </div>
                </div>
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            </div>
        )
    },
    {
        id: "retrieval",
        icon: <Code2 className="w-5 h-5 text-purple-400" />,
        title: "2. Geri Getirme (Retrieval)",
        description: "LLM'lerin okuyup doğrudan çekebileceği yapılar kuruyoruz.",
        span: "col-span-1 md:col-span-2 lg:col-span-1",
        delay: 0.2,
        ui: (
            <div className="bg-[#0d1117] rounded-xl border border-white/5 p-4 font-mono text-[10px] sm:text-xs text-gray-300 w-full mt-6 shadow-inner h-40 overflow-hidden relative">
                <div className="text-gray-500 mb-2">schema.json-ld</div>
                <pre className="text-purple-300"><code>{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Premium Brand",
  "aiRecommended": true,
  "citationIndex": 98.5
}`}</code></pre>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>
        )
    },
    {
        id: "synthesis",
        icon: <ShieldCheck className="w-5 h-5 text-green-400" />,
        title: "3. Sentez (Synthesis) & Onay",
        description: "Yapay zeka yalan bilgi vermekten korkar. Sizi 'tartışmasız E-E-A-T otoritesi' yapıyoruz.",
        span: "col-span-1 md:col-span-2 lg:col-span-1",
        delay: 0.3,
        ui: (
            <div className="bg-white/[0.02] rounded-xl border border-white/5 p-4 w-full mt-6 h-40 flex flex-col justify-center space-y-4 relative overflow-hidden">
                <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">Bilgi Düğümü Doğrulaması</span>
                    <span className="text-xs text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded-full">%100</span>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <div className="h-1.5 flex-1 bg-green-500/20 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-full"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <div className="h-1.5 flex-1 bg-green-500/20 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[90%]"></div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl"></div>
            </div>
        )
    },
    {
        id: "response",
        icon: <TrendingUp className="w-5 h-5 text-orange-400" />,
        title: "4. Yanıt (Response) & İzleme",
        description: "Aylık duygu analizlerini ve sizin doğrudan final yanıtlarda 'kaynak' olarak tavsiye edilme dönüşümlerinizi anlık izleyin.",
        span: "col-span-1 md:col-span-2 lg:col-span-2",
        delay: 0.4,
        ui: (
            <div className="bg-black/40 rounded-xl border border-white/5 p-5 w-full mt-6 h-40 flex items-end justify-between gap-2 relative overflow-hidden">
                <div className="absolute top-4 left-4 flex flex-col">
                    <span className="text-xs text-gray-400">AI Tavsiye Oranı</span>
                    <span className="text-2xl font-bold text-white">+550%</span>
                </div>
                {/* CSS Bar Chart */}
                <div className="w-full flex items-end justify-between h-20 gap-1 sm:gap-3 px-2 sm:px-10 z-10 mt-auto">
                    {[15, 25, 40, 65, 85, 100].map((height, i) => (
                        <div key={i} className="w-full relative group h-full flex items-end">
                            <div
                                className={`w-full rounded-t-sm transition-all duration-1000 group-hover:bg-orange-400
                                    ${i === 5 ? 'bg-gradient-to-t from-orange-600 to-orange-400' : 'bg-white/10'}`}
                                style={{ height: `${height}%` }}
                            ></div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-0 right-10 w-40 h-20 bg-orange-500/10 blur-2xl"></div>
            </div >
        )
    }
];

export default function HowItWorks() {
    return (
        <section id="nasil-calisir" className="py-24 sm:py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Database className="w-6 h-6 text-blue-400" />
                            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Altyapı ve Teknoloji</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Nasıl <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Çalışır?</span></h2>
                    </div>
                    <div className="text-gray-400 text-sm max-w-md border-l-2 border-white/10 pl-4 py-2 hidden lg:block">
                        Odak noktası 'Anahtar Kelime Optimizasyonu'ndan 'Varlık (Entity) Optimizasyonu'na geçiyor. Tescilli sistemimizle 4 adımda markanızı yapay zekaya kodluyoruz.
                    </div>
                </div>

                {/* BENTO BOX GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {steps.map((step) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: step.delay, duration: 0.6 }}
                            className={`group relative p-6 sm:p-8 bg-white/[0.02] border border-white/10 rounded-3xl hover:bg-white/[0.04] transition-all duration-500 hover:border-white/20 flex flex-col overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] ${step.span}`}
                        >
                            {/* Inner gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="flex items-center justify-between mb-2">
                                <div className="p-2 sm:p-3 bg-black/50 border border-white/10 rounded-xl shadow-lg shrink-0">
                                    {step.icon}
                                </div>
                                <div className="text-white/10 group-hover:text-white/30 transition-colors">
                                    <ChevronRight className="w-6 h-6" />
                                </div>
                            </div>

                            <h3 className="text-lg sm:text-xl font-bold text-white mt-4 mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                {step.description}
                            </p>

                            {/* MINI UI INJECTION */}
                            <div className="mt-auto pt-4 flex-1 flex flex-col justify-end">
                                {step.ui}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
