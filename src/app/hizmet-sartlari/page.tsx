import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="bg-[#0a0f18] p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
                    <h1 className="text-3xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                        Hizmet Şartları
                    </h1>
                    <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                        <p>Son güncellenme: 23 Şubat 2026</p>

                        <h2 className="text-xl text-white font-bold mt-8 border-b border-gray-800 pb-2">1. Taraflar ve Kapsam</h2>
                        <p>
                            Bu sözleşme, seenby.io (bundan sonra "Ajans" olarak anılacaktır) ile ajansın sunmuş olduğu Generative Engine Optimization (GEO) hizmetlerini satın alan kullanıcı/kurum (bundan sonra "Müşteri" olarak anılacaktır) arasındaki hizmet sağlama, kullanım koşulları ve fikri mülkiyet sınırlarını belirler.
                        </p>

                        <h2 className="text-xl text-white font-bold mt-8 border-b border-gray-800 pb-2">2. Hizmetlerin Tanımı (GEO)</h2>
                        <p>
                            Ajans, Müşterinin dijital varlıklarını Büyük Dil Modelleri (LLM'ler), RAG (Retrieval-Augmented Generation) sistemleri ve AI Arama motorlarında (ChatGPT, Gemini, Perplexity vb.) öne çıkarmak için stratejiler, raporlamalar ve içerik optimizasyonları sunar. Klasik SEO'dan farklı olarak, GEO algoritmik bir garanti veremez, AI modellerinin özerk tahmin yetenekleri nedeniyle sonuçlar "tavsiye edilme olasılığının artırılması" prensibiyle çalışır.
                        </p>

                        <h2 className="text-xl text-white font-bold mt-8 border-b border-gray-800 pb-2">3. Müşteri Yükümlülükleri</h2>
                        <p>
                            Müşteri, ajansın GEO analizi yapabilmesi için talep edilen erişim haklarını (Analytics, GSC, API anahtarları vb.) zamanında ve doğru bir şekilde sağlamakla yükümlüdür. Yanlış, eksik veya yasal olmayan içeriklerin optimizasyonunda sorumluluk tamamen müşteriye aittir.
                        </p>

                        <h2 className="text-xl text-white font-bold mt-8 border-b border-gray-800 pb-2">4. Fikri Mülkiyet</h2>
                        <p>
                            seenby.io tarafından üretilen strateji dosyaları, "Knowledge Graph" haritaları, RAG mimarileri ve oluşturulan teknik dokümantasyonlar aksi belirtilmedikçe Ajansın fikri mülkiyetindedir. Müşteri, lisans hakkı elde ettiği süreç boyunca bunları kendi markası için kullanabilir.
                        </p>

                        <h2 className="text-xl text-white font-bold mt-8 border-b border-gray-800 pb-2">5. Sorumluluğun Sınırlandırılması</h2>
                        <p>
                            Yapay zeka modellerinin algometrik yapıları ve şirket (OpenAI, Google vb.) politikaları anlık olarak değişebildiğinden, seenby.io belirli bir kelimede kesin AI dominasyonu, satış artışı veya ciro sözü vermez. Hizmet, mevcut veri bilimi metotları kullanılarak en yüksek "Citation (Atıf)" ihtimalini kurgular.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
