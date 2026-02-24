"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "SEO ile GEO arasındaki fark nedir?",
        answer: "SEO, web sitenizi tarayıcılar (Google) için parlatırken ziyaretçiyi linkler okyanusunda boğar. GEO (Generative Engine Optimization) ise içeriklerinizi ChatGPT, Perplexity gibi yapay zeka asistanlarının anlayacağı formata çevirir. Müşterileriniz bir soru sorduğunda, yapay zekanın onlara 10 link vermek yerine doğrudan SİZİ tek ve en iyi cevap olarak sunmasını sağlar."
    },
    {
        question: "Sisteminizi (seenby.io) kurduktan sonra ne kadar sürede sonuç alırız?",
        answer: "Web sitenizin teknik altyapısına ve sektörünüzün rekabetine bağlı olarak ilk etkileri (AI görünürlük skoru artışı) genellikle 4 ila 6 hafta içinde raporluyoruz. 12 haftanın sonunda ise alanınızdaki anahtar kelimelerde ChatGPT ve Gemini'nin öncelikli tavsiyesi olmaya başlarsınız."
    },
    {
        question: "Tescilli ölçümleme platformunuz nasıl çalışıyor?",
        answer: "İsimsiz ve tamamen kapalı devre çalışan kendi yapay zeka veri analiz platformumuzla, markanızın 4 ana dil modelindeki (GPT-4, Claude, Gemini, Perplexity) varlığını tararız. Rakiplerinize kıyasla sektörde ne kadar 'Share of Voice' (Görünürlük Payı) ve E-E-A-T (Uzmanlık) değerine sahip olduğunuzu matematiksel bir skora dönüştürerek size sunarız."
    },
    {
        question: "Hangi sektörler için uygunsunuz?",
        answer: "Önceliğimiz bilgi kirliliğinin çok, güvenilir otoritenin (E-E-A-T) az olduğu ve rekabetin yüksek olduğu sektörlerdir. Sağlık (Klinikler), Hukuk, B2B Yazılım (SaaS), Gayrimenkul, Eğitim ve Premium E-Ticaret en yüksek ROI (Yatırım Getirisi) sağladığımız alanlardır."
    },
    {
        question: "Tavsiye edilmek için içeriklerimizi tamamen silmemiz mi gerekiyor?",
        answer: "Hayır. Mevcut içeriklerinizi silmiyoruz. İçeriklerinizi, yapay zekanın en rahat anlayacağı (JSON-LD, Schema) ve en sevdiği (Sıfırıncı Paragraf) formata göre yeniden yapılandırıyor (refactoring) ve botların sitenizi bir blog değil, bir 'uzman referans kaynağı' olarak görmesini sağlıyoruz."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="sss" className="py-24 bg-black relative border-t border-white/5">
            <div className="absolute top-1/2 left-0 w-1/4 h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Sorular</span>
                    </h2>
                    <p className="text-gray-400">
                        Yapay zeka çağında görünürlük kuralları değişti. Aklınıza takılan soruları sizin için netleştirdik.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`border border-white/10 rounded-2xl overflow-hidden transition-colors ${openIndex === index ? "bg-white/[0.05]" : "bg-white/[0.02] hover:bg-white/[0.04]"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
