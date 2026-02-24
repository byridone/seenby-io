"use client";
import { useState, useEffect } from "react";
import { X, ArrowRightLeft, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const comparisonPoints = [
    {
        feature: "Odak Noktası",
        seo: "Anahtar Kelime Yoğunluğu",
        geo: "Anlamsal Bağlam ve Varlık (Entity) Uyumu"
    },
    {
        feature: "Kullanıcı Deneyimi",
        seo: "10 Mavi Link Arasında Arama Yapmak",
        geo: "Yapay Zekadan Doğrudan Net ve Doğru Cevap Almak"
    },
    {
        feature: "İçerik Stratejisi",
        seo: "Arama Motorlarını Manipüle Etmek (Yüzeysel)",
        geo: "Yapay Zekayı Eğitecek Derinlemesine Bilgi Sunmak"
    },
    {
        feature: "Temel Metrik",
        seo: "Sıralama Pozisyonu (Ranking)",
        geo: "AI Yanıtlarında Tavsiye Edilme (Citation) Oranı"
    },
    {
        feature: "Platformlar",
        seo: "Sadece Geleneksel Arama Motorları",
        geo: "ChatGPT, Perplexity, Gemini, Claude, AI Overviews"
    }
];

export default function SeoVsGeoDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('openSeoVsGeo', handleOpen);
        return () => window.removeEventListener('openSeoVsGeo', handleOpen);
    }, []);

    // Prevent scrolling when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="relative w-full max-w-lg bg-[#050505] border-l border-white/10 h-full shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/50 sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                                    <ArrowRightLeft className="w-5 h-5 text-orange-400" />
                                </div>
                                <h2 className="text-xl font-bold tracking-wide">Klasik SEO vs GEO</h2>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content Scrollable Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Arama alışkanlıkları tamamen değişti. Artık insanlar arama sonuçları arasında gezinmek yerine doğrudan yapay zekaya soruyor. İşte markanızın neden <strong className="text-white">görünürlükten tavsiye edilmeye</strong> geçmesi gerektiğinin tablosu.
                            </p>

                            <div className="space-y-6">
                                {comparisonPoints.map((point, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * idx }}
                                        key={idx}
                                        className="bg-[#0a0f18] border border-gray-800 rounded-xl overflow-hidden"
                                    >
                                        <div className="bg-white/5 px-4 py-2 border-b border-gray-800 text-sm font-semibold text-gray-300">
                                            {point.feature}
                                        </div>
                                        <div className="grid grid-cols-2 divide-x divide-gray-800">
                                            {/* SEO Side */}
                                            <div className="p-4 flex flex-col gap-2 relative overflow-hidden group">
                                                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
                                                    <AlertTriangle className="w-3 h-3 text-red-400" /> Klasik SEO
                                                </div>
                                                <p className="text-sm text-gray-400 relative z-10">
                                                    {point.seo}
                                                </p>
                                            </div>

                                            {/* GEO Side */}
                                            <div className="p-4 flex flex-col gap-2 relative overflow-hidden group bg-orange-500/5">
                                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
                                                    <CheckCircle2 className="w-3 h-3" /> Seenby.io GEO
                                                </div>
                                                <p className="text-sm text-white font-medium relative z-10">
                                                    {point.geo}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Callout */}
                            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-500/20 text-center">
                                <h3 className="text-white font-bold mb-2">Kurallar Değişti</h3>
                                <p className="text-sm text-orange-300/80 font-medium leading-relaxed">
                                    Mevcut SEO bütçenizi tıklanmayan linklere harcamak yerine, markanızı yapay zeka tarafından <span className="text-white border-b border-white/30pb-0.5">önerilir hale getirmeye</span> yatırın.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
