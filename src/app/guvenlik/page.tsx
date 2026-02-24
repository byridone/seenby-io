import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, Database, Server } from "lucide-react";

export default function Security() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-4 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
                        <ShieldCheck className="w-12 h-12 text-emerald-400" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
                        Güvenlik ve Veri Politikası
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Yapay zeka çağında kurumsal verilerinizin gizliliği ve bilgi güvenliği, uyguladığımız tüm GEO stratejilerinin temelini oluşturur.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-[#0a0f18] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                        <Lock className="w-8 h-8 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-4">Enterprise Veri İzolasyonu</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Müşterilerimizin iç yazışmaları, kapalı veritabanları (RAG Indexing) veya hassas marka verileri asla LLM'lerin (Büyük Dil Modelleri) açık havuzlarında eğitilmez. Analizler, verilerin anonimleştirilmesiyle, Zero-Data Retention (Sıfır Veri Tutma) prensibiyle çalışan Enterprise API'ler üzerinden yapılır.
                        </p>
                    </div>

                    <div className="bg-[#0a0f18] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                        <Database className="w-8 h-8 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-4">Uçtan Uca Şifreleme (E2EE)</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Sistemlerimize aktardığınız raporlar, yetkilendirme token'ları ve şirket içi bilgi grafikleri aktarım anında (in-transit) AES-256 ve durağan anlarda (at-rest) son teknoloji şifreleme standartları ile korunmaktadır.
                        </p>
                    </div>

                    <div className="bg-[#0a0f18] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                        <Server className="w-8 h-8 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-4">Güvenli Altyapı Barındırma</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Sunucularımız dünya standartlarındaki ISO 27001 ve SOC 2 Tip II sertifikalı bulut platformlarında barındırılmaktadır. DDoS koruması, düzenli sızma (Pen-test) testleri ve güvenlik duvarları ile sistem sürekli monitör edilir.
                        </p>
                    </div>

                    <div className="bg-[#0a0f18] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                        <ShieldCheck className="w-8 h-8 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-4">Marka Sırrı Garantisi (NDA)</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Generative Engine Optimization (GEO) stratejilerimiz şirketinizin rekabet avantajıdır. Birlikte çalıştığımız tüm kurumsal işbirlikleri varsayılan olarak Gizlilik Sözleşmesi (NDA) kapsamına alınır; rakiplerinize asla stratejiniz sızdırılmaz.
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-900/20 to-black p-8 rounded-2xl border border-emerald-500/20 text-center">
                    <p className="text-gray-300">
                        Güvenlik zafiyetleri bildirimi ve regülasyon uyum talepleri için güvenlik ekibimize ulaşın: <br />
                        <a href="mailto:security@seenby.io" className="text-emerald-400 font-bold hover:underline mt-2 inline-block">security@seenby.io</a>
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
