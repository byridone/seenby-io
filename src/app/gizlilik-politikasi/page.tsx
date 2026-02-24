import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="bg-[#0a0f18] p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
                    <h1 className="text-3xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Gizlilik Politikası
                    </h1>
                    <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                        <p>Son güncellenme: 23 Şubat 2026</p>

                        <h2 className="text-xl text-white font-bold mt-8 border-b border-gray-800 pb-2">1. Veri Toplama ve Kullanım</h2>
                        <p>
                            seenby.io olarak, Generative Engine Optimization (GEO) hizmetlerimizi sunarken ziyaretçilerimizin ve müşterilerimizin gizliliğini en üst düzeyde korumayı taahhüt ediyoruz. Web sitemizi ziyaretiniz sırasında, hizmetlerimizi geliştirmek, analiz platformlarını yönetmek ve yapay zeka entegrasyonlarını optimize etmek amacıyla belirli anonim analiz verileri ve (açık rızanızla) iletişim bilgileri toplanabilir.
                        </p>

                        <h2 className="text-xl text-white font-bold mt-8 border-b border-gray-800 pb-2">2. Çerezler (Cookies) ve AI Takip Sistemleri</h2>
                        <p>
                            Sitemiz, kullanıcı deneyimini iyileştirmek ve yapay zeka arama motoru botlarının (ChatGPT, Claude, Perplexity) sitenizi indeksleme davranışlarını simüle etmek/ölçümlemek için çerezler kullanabilir. Bu veriler tamamen anonimleştirilir ve kişisel kimlik tespiti için kullanılmaz.
                        </p>

                        <h2 className="text-xl text-white font-bold mt-8 border-b border-gray-800 pb-2">3. Üçüncü Taraf Yapay Zeka Servisleri</h2>
                        <p>
                            GEO süreçlerinde çeşitli dış AI API'leri (OpenAI, Anthropic, Google) kullanılmaktadır. Sistemimize ilettiğiniz sektörel veriler, bu platformların güvenlik kurallarına ve gizlilik anlaşmalarına tabi olarak anonimleştirilmiş token'lar halinde işlenir. Sizin verileriniz asla açık AI modellerini eğitmek (training) için kullanılmaz.
                        </p>

                        <h2 className="text-xl text-white font-bold mt-8 border-b border-gray-800 pb-2">4. Veri Güvenliği ve Transferi</h2>
                        <p>
                            Sistemlerimiz baştan uca SSL/TLS protokolleriyle şifrelenmiştir. Toplanan veriler AB GDPR ve Türkiye KVKK standartlarına tam uyumlu olarak yetkilendirilmiş, güvenli bulut sunucularımızda barındırılır.
                        </p>

                        <h2 className="text-xl text-white font-bold mt-8 border-b border-gray-800 pb-2">5. Haklarınız (KVKK / GDPR)</h2>
                        <p>
                            Kişisel verilerinizin nasıl işlendiğini öğrenme, düzeltme, aktarma veya tamamen silinmesini talep etme hakkına sahipsiniz. Tüm talepleriniz için <span className="text-blue-400 font-medium">privacy@seenby.io</span> adresi üzerinden bizimle iletişime geçebilirsiniz.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
