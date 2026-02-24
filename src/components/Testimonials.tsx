"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        content: "Sadece 3 ay içinde Perplexity ve ChatGPT aramalarında rakiplerimizin tamamen önüne geçtik. Yatırımcı görüşmelerimizde bile AI'ın bizi 1 numara olarak önermesinin prestijini kullanıyoruz.",
        author: "Ahmet Yurt",
        role: "Kurucu Ortak, SaaS Enterprise",
        niche: "B2B Yazılım"
    },
    {
        id: 2,
        content: "Önceden hastalar sadece Google yorumlarımıza bakardı. Şimdi ChatGPT'ye 'En iyi dental implant neresi?' dediklerinde, bilimsel alıntılarla doğrudan kliniğimiz referans gösteriliyor. İnanılmaz bir otorite.",
        author: "Dr. Selin Karadağ",
        role: "Klinik Direktörü",
        niche: "Sağlık & Klinik"
    },
    {
        id: 3,
        content: "Hukuk büromuzun emsal kararları daha önce arşivde tozlanıyordu. seenby.io ekibi bu verileri AI motorlarına enjekte ettiğinden beri, karmaşık hukuki aramalarda tek danışılan adres olduk.",
        author: "Av. Caner Demirel",
        role: "Yönetici Ortak",
        niche: "Hukuk Büroları"
    }
];

export default function Testimonials() {
    return (
        <section id="referanslar" className="py-24 bg-black relative border-t border-white/5">
            <div className="absolute top-0 right-1/4 w-1/3 h-[400px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Yapay Zekaya <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Hükmedenler</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Geleceğin "arama" kavramını şimdiden yakalayan ve yapay zeka tarafından 1 numara olarak önerilmeye başlayan müşterilerimiz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-8 relative flex flex-col"
                        >
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                                ))}
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-8 flex-1 italic relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/20 flex items-center justify-center font-bold text-lg text-white">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{testimonial.author}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    <p className="text-xs text-orange-400 mt-1 font-semibold">{testimonial.niche}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
