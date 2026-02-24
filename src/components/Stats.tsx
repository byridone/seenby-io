"use client";
import { motion } from "framer-motion";
import { TrendingDown, Quote, ArrowRight, Globe } from "lucide-react";

const stats = [
    {
        id: 1,
        value: "-%25",
        title: "Arama Hacminde Düşüş",
        description: "2026'ya kadar geleneksel arama motoru hacmindeki gerileme.",
        source: "Gartner",
        icon: <TrendingDown className="w-5 h-5 text-red-400" />,
        color: "from-red-500/20 to-transparent",
        borderColor: "border-red-500/20"
    },
    {
        id: 2,
        value: "%76",
        title: "AI Alıntı Oranı",
        description: "Yapay zekanın referans verdiği bilgilerin Google İlk 10'dan gelme oranı.",
        source: "Sektör Verisi",
        icon: <ArrowRight className="w-5 h-5 text-blue-400" />,
        color: "from-blue-500/20 to-transparent",
        borderColor: "border-blue-500/20"
    },
    {
        id: 3,
        value: "Birincil Kapı",
        title: "Yeni Geçiş Noktası",
        description: "Küresel B2B satın alma kararları için yapay zeka cevap motorlarının rolü.",
        source: "McKinsey",
        icon: <Globe className="w-5 h-5 text-orange-400" />,
        color: "from-orange-500/20 to-transparent",
        borderColor: "border-orange-500/20"
    }
];

export default function Stats() {
    return (
        <section className="py-16 sm:py-24 bg-[#050505] relative border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Mavi Linklerin <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Sonu Geliyor Mu?</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Dijital pazarlama, "arama"dan (search) "cevap bulma"ya (answer) evriliyor. Otoritenizi şimdiden inşa edin.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`p-8 rounded-3xl bg-white/[0.02] border ${stat.borderColor} relative overflow-hidden group hover:bg-white/[0.04] transition-all`}
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${stat.color} rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    {stat.icon}
                                </div>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.source}</span>
                            </div>

                            <div className="text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter">
                                {stat.value}
                            </div>

                            <h3 className="text-xl font-bold text-gray-200 mb-2">{stat.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="mt-16 max-w-4xl mx-auto text-center relative"
                >
                    <Quote className="w-12 h-12 text-white/5 absolute -top-4 -left-2 sm:-left-6 rotate-180" />
                    <p className="text-lg sm:text-xl text-gray-400 font-medium italic relative z-10 px-6">
                        "Geleceğin markalaması anahtar kelimelerle değil, AI yanıtlarında
                        <span className="text-orange-400"> 'alıntı' (citation) </span>
                        olabilmekle ilgilidir."
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <div className="w-8 h-px bg-gray-600"></div>
                        <span className="text-gray-500 text-sm font-bold tracking-widest uppercase">Harvard Business Review</span>
                        <div className="w-8 h-px bg-gray-600"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
