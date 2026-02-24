"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Calendar, ArrowLeft } from "lucide-react";

export const posts = [
    {
        id: 1,
        category: "Araştırma & Trend",
        title: "Geleneksel SEO Bitiyor Mu? ChatGPT Aramalarının Yükselişi",
        desc: "Kullanıcıların %40'ı artık bir web sitesine gitmek yerine, cevapları doğrudan chatbotlardan almayı tercih ediyor. Bu büyük göçe nasıl hazırlanırsınız?",
        content: `Geleneksel arama motoru optimizasyonu (SEO) tamamen şekil değiştiriyor. İnternet kullanıcıları artık aradıkları bir ürünü veya hizmeti bulmak için bağlantıdan bağlantıya atlamak istemiyor. ChatGPT, Claude, Perplexity ve Google Gemini gibi araçlar sayesinde tek bir soruyla nokta atışı yanıtlara ulaşıyorlar. Peki bu durum işletmeler için ne anlama geliyor?

Araştırmalar, kullanıcıların %40'ından fazlasının bilgiye erişirken üretken yapay zekayı (Generative AI) kullandığını gösteriyor. Eğer markanız, bu modellerin eğitim verilerinde ve referans havuzunda (Knowledge Graph) yeterince güçlü temsil edilmiyorsa, dijital dünyada yavaş yavaş görünmez hale geliyorsunuz demektir.

İşte bu noktada devreye GEO (Generative Engine Optimization) giriyor. GEO, yapay zeka asistanlarının sizi 'en güvenilir ve tek mantıklı tercih' olarak önermesini sağlayan yeni nesil görünürlük stratejisidir. Bloglar, backlinkler ve anahtar kelime doldurmalarının devri kapanıyor; artık mesele dil modellerinin sizi nasıl anladığı.`,
        date: "12 Kasım 2025",
        readTime: "4 dk okuma",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        category: "Sağlık Sektörü",
        title: "YMYL Sitelerinde E-E-A-T Optimizasyonu: Gemini Doktorlara Nasıl Güvenir?",
        desc: "Sağlık kliniklerinde yapay zekanın sizi 'güvenilir bir otorite' olarak göstermesi için akademik alıntıların ve Sıfırıncı Paragrafın gücü.",
        content: `Sağlık, finans, hukuk gibi doğrudan insanların hayatını ve varlıklarını etkileyen sektörler Google tarafından YMYL (Your Money or Your Life) olarak adlandırılır. Yapay zeka dil modelleri, bu konularda kullanıcılara tavsiye verirken hata yapmaktan son derece çekinirler.

Eğer bir sağlık kliniğiniz varsa, ChatGPT'nin sizi önermesi için sadece web sitenizin hızlı olması yetmez. E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik) kuralları yapay zekanın referans sisteminde de tam anlamıyla geçerlidir. Makalelerinizin kim tarafından yazıldığı (yazar uzmanlığı), tıp literatürüyle ne kadar örtüştüğü ve dış platformlardaki PR gücünüz, AI modelleri için bir onay belgesi niteliğindedir.

Bir hastanın 'En güvenilir tüp bebek merkezi neresi?' sorusuna yapay zekanın doğrudan sizin kliniğinizi önermesini istiyorsanız, tıbbi makalelerinizi akademik formatta yapılandırmalı ve AI dilinin kolayca tarayabileceği (Structured Data) şekilde kodlamalısınız.`,
        date: "05 Kasım 2025",
        readTime: "6 dk okuma",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 3,
        category: "B2B SaaS Rehberi",
        title: "Rakip Karşılaştırmalarında (X vs Y) Yapay Zekayı Hacklemek",
        desc: "Perplexity ve ChatGPT'ye kurumsal yazılımınızın rakipten neden daha iyi olduğunu veri sızdırma (Data Seeding) yöntemiyle nasıl öğretirsiniz?",
        content: `B2B (Firmadan firmaya) satış süreçleri artık eskisi gibi değil. Teknoloji profesyonelleri ve şirket yöneticileri, kullanacakları yeni bir SaaS (Hizmet olarak yazılım) ürününü seçerken yüzlerce sayfa okumak yerine Perplexity'ye 'HubSpot ve Salesforce arasındaki farklar neler, bizim 50 kişilik satış ekibimiz için hangisi daha iyi?' diye soruyor.

Rakiplerinizin sizinle karşılaştırıldığı bu kritik karar anlarında, masada olabilmek için Data Seeding (Veri Sızdırma) adı verilen GEO tekniklerini kullanmanız gerekir. Modelin web taraması yaparken (RAG - Retrieval-Augmented Generation) sizin üstün olduğunuz özellikleri doğru çekmesi için tarafsız inceleme siteleri, Reddit/Quora gibi platformlar ve kıyaslama odaklı içerikler üretilmelidir.

Sektör lideri rakibinizi aratan bir potansiyel müşteriye, yapay zekanın 'X çok popüler olsa da, sizin kullanım durumunuz için Y (Sizin Markanız) çok daha modern ve maliyet etkin bir çözümdür' yanıtını vermesini sağlamak en büyük rekabet avantajınızdır.`,
        date: "28 Ekim 2025",
        readTime: "5 dk okuma",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 4,
        category: "E-Ticaret (SGE)",
        title: "Dijital Alışveriş Asistanlarına Ürün Beğendirme Sanatı",
        desc: "Ürün özelliklerinizi JSON-LD yapısına oturtarak, 'En iyi kışlık bot' aramalarında Google'ın yapay zekasına doğrudan nasıl girersiniz?",
        content: `E-ticaret arama davranışları yapay zekanın Google Search Generative Experience (SGE) ekosistemine entegre olmasıyla baştan yazılıyor. Kullanıcılar artık sadece 'spor ayakkabı' yazmıyor; 'Düztaban biriyim, haftada 3 gün asfalt koşusu yapıyorum, bana en uygun 3 ayakkabıyı özellikleriyle kıyasla' yazıyor.

E-ticaret markaları için bu, yepyeni bir görünürlük savaşı demek. Ürün özelliklerinizin (renk, materyal, kullanım amacı, müşteri yorumları) semantik olarak zengin bir şekilde listelenmesi gerekiyor. Özellikle ürün yorumlarından (Reviews) elde edilen veri, yapay zekanın ürünü tavsiye etmesinde büyük rol oynuyor.

Geleceğin alışveriş dünyasında raf payı (shelf space), yapay zekanın ekranında size ayırdığı o küçük paragraftan ibaret olacak. Ürün verilerinizi AI için yapılandırmak bu görünürlüğü garantiler.`,
        date: "14 Ekim 2025",
        readTime: "7 dk okuma",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 5,
        category: "Hukuk & Otorite",
        title: "Emsal Kararlardan AI Referanslarına: Hukuk Büroları İçin GEO",
        desc: "Hukuki tavsiye arayan müvekkillerin ekranında, ChatGPT'nin sadece sizin makalenizi akademik bir referans (Citation) olarak göstermesi tesadüf değildir.",
        content: `Bir kullanıcı hukuki bir sorun yaşadığında veya bir dava süreci hakkında bilgi almak istediğinde yapay zekaya davasının spesifik detaylarını yazar. AI, bu tür karmaşık ve yüksek riskli sorulara cevap verirken internette bulduğu rastgele yazıları değil, akademik dili, emsal karar referanslarını ve güvenilir otorite sitelerini baz alır.

Hukuk büronuzun bu platformlarda tavsiye edilebilmesi için içeriklerinizin yüzeysel genelgeçer bilgilerden ziyade, gerçek hukuki vakalara ve Yargıtay kararlarına dayalı yapıda kurgulanması gerekiyor. Yapay zeka, metnin altındaki referans ağacını incelediği için doğru kurgulanmış bir 'Hukuki Rehber', sizi bölgenizde (örneğin İstanbul bilişim avukatı) en çok alıntılanan avukat konumuna getirecektir.

Yapay zeka devrimi, doğru optimize edenler için rakiplerinin on yıllar süren marka mirasını tek kalemde geçme fırsatıdır.`,
        date: "02 Ekim 2025",
        readTime: "5 dk okuma",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop"
    }
];

export default function Blog() {
    const [activePost, setActivePost] = useState<typeof posts[0] | null>(null);

    return (
        <section id="blog" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <AnimatePresence mode="wait">
                    {!activePost ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <BookOpen className="w-6 h-6 text-blue-400" />
                                        <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">İçgörüler ve Araştırmalar</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white">Yapay Zeka <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Öğrenme Merkezi</span></h2>
                                </div>
                                <div className="text-gray-400 text-sm max-w-sm border-l-2 border-white/10 pl-4 py-2 hidden lg:block">
                                    SEO'nun ötesine geçerek yapay zeka araçlarında markanızı nasıl konumlandıracağınızı öğrenin.
                                </div>
                            </div>

                            {/* 5 columns side by side */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                                {posts.map((post, index) => (
                                    <motion.div
                                        key={post.id}
                                        onClick={() => {
                                            setActivePost(post);
                                            // Optional: Scroll to top of blog section smoothly
                                            document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="group cursor-pointer bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] transition-all hover:-translate-y-2 flex flex-col h-full shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                                    >
                                        <div className="h-40 xl:h-48 relative overflow-hidden bg-gray-900 w-full shrink-0">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 mix-blend-screen" />
                                            <div className="absolute top-4 left-4 z-20">
                                                <span className="text-blue-300 text-[10px] font-bold uppercase tracking-widest bg-blue-900/50 backdrop-blur-md px-2 py-1 rounded-sm border border-blue-500/30">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5 flex flex-col flex-1">
                                            <h3 className="text-base xl:text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-3 leading-snug">{post.title}</h3>
                                            <p className="text-gray-400 text-xs xl:text-sm mb-6 line-clamp-3 leading-relaxed flex-1">{post.desc}</p>

                                            <div className="mt-auto flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
                                                <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{post.date}</div>
                                                <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
                        >
                            <div className="h-64 sm:h-96 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                                <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover opacity-60 mix-blend-screen" />
                                <div className="absolute top-6 left-6 z-20">
                                    <button
                                        onClick={() => setActivePost(null)}
                                        className="flex items-center gap-2 text-white bg-black/50 hover:bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transition-colors cursor-pointer"
                                    >
                                        <ArrowLeft className="w-4 h-4" /> Geri Dön
                                    </button>
                                </div>
                            </div>

                            <div className="p-8 sm:p-12 lg:p-16 relative z-20 -mt-20 bg-gradient-to-b from-transparent to-black">
                                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold mb-6">
                                    <span className="text-blue-400 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">{activePost.category}</span>
                                    <div className="flex items-center gap-1.5 text-gray-400"><Calendar className="w-4 h-4" />{activePost.date}</div>
                                    <div className="flex items-center gap-1.5 text-gray-400"><Clock className="w-4 h-4" />{activePost.readTime}</div>
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">{activePost.title}</h1>

                                <div className="max-w-none text-gray-300 text-lg leading-relaxed">
                                    {activePost.content.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="mb-6">{paragraph}</p>
                                    ))}
                                </div>

                                <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                                    <button
                                        onClick={() => setActivePost(null)}
                                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer"
                                    >
                                        <ArrowLeft className="w-4 h-4" /> Diğer Makalelere Dön
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
