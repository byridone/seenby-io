"use client";
"use strict";
exports.__esModule = true;
exports.posts = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
exports.posts = [
    {
        id: 1,
        category: "Araştırma & Trend",
        title: "Geleneksel SEO Bitiyor Mu? ChatGPT Aramalarının Yükselişi",
        desc: "Kullanıcıların %40'ı artık bir web sitesine gitmek yerine, cevapları doğrudan chatbotlardan almayı tercih ediyor. Bu büyük göçe nasıl hazırlanırsınız?",
        content: "Geleneksel arama motoru optimizasyonu (SEO) tamamen \u015Fekil de\u011Fi\u015Ftiriyor. \u0130nternet kullan\u0131c\u0131lar\u0131 art\u0131k arad\u0131klar\u0131 bir \u00FCr\u00FCn\u00FC veya hizmeti bulmak i\u00E7in ba\u011Flant\u0131dan ba\u011Flant\u0131ya atlamak istemiyor. ChatGPT, Claude, Perplexity ve Google Gemini gibi ara\u00E7lar sayesinde tek bir soruyla nokta at\u0131\u015F\u0131 yan\u0131tlara ula\u015F\u0131yorlar. Peki bu durum i\u015Fletmeler i\u00E7in ne anlama geliyor?\n\nAra\u015Ft\u0131rmalar, kullan\u0131c\u0131lar\u0131n %40'\u0131ndan fazlas\u0131n\u0131n bilgiye eri\u015Firken \u00FCretken yapay zekay\u0131 (Generative AI) kulland\u0131\u011F\u0131n\u0131 g\u00F6steriyor. E\u011Fer markan\u0131z, bu modellerin e\u011Fitim verilerinde ve referans havuzunda (Knowledge Graph) yeterince g\u00FC\u00E7l\u00FC temsil edilmiyorsa, dijital d\u00FCnyada yava\u015F yava\u015F g\u00F6r\u00FCnmez hale geliyorsunuz demektir.\n\n\u0130\u015Fte bu noktada devreye GEO (Generative Engine Optimization) giriyor. GEO, yapay zeka asistanlar\u0131n\u0131n sizi 'en g\u00FCvenilir ve tek mant\u0131kl\u0131 tercih' olarak \u00F6nermesini sa\u011Flayan yeni nesil g\u00F6r\u00FCn\u00FCrl\u00FCk stratejisidir. Bloglar, backlinkler ve anahtar kelime doldurmalar\u0131n\u0131n devri kapan\u0131yor; art\u0131k mesele dil modellerinin sizi nas\u0131l anlad\u0131\u011F\u0131.",
        date: "12 Kasım 2025",
        readTime: "4 dk okuma",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        category: "Sağlık Sektörü",
        title: "YMYL Sitelerinde E-E-A-T Optimizasyonu: Gemini Doktorlara Nasıl Güvenir?",
        desc: "Sağlık kliniklerinde yapay zekanın sizi 'güvenilir bir otorite' olarak göstermesi için akademik alıntıların ve Sıfırıncı Paragrafın gücü.",
        content: "Sa\u011Fl\u0131k, finans, hukuk gibi do\u011Frudan insanlar\u0131n hayat\u0131n\u0131 ve varl\u0131klar\u0131n\u0131 etkileyen sekt\u00F6rler Google taraf\u0131ndan YMYL (Your Money or Your Life) olarak adland\u0131r\u0131l\u0131r. Yapay zeka dil modelleri, bu konularda kullan\u0131c\u0131lara tavsiye verirken hata yapmaktan son derece \u00E7ekinirler.\n\nE\u011Fer bir sa\u011Fl\u0131k klini\u011Finiz varsa, ChatGPT'nin sizi \u00F6nermesi i\u00E7in sadece web sitenizin h\u0131zl\u0131 olmas\u0131 yetmez. E-E-A-T (Deneyim, Uzmanl\u0131k, Otorite, G\u00FCvenilirlik) kurallar\u0131 yapay zekan\u0131n referans sisteminde de tam anlam\u0131yla ge\u00E7erlidir. Makalelerinizin kim taraf\u0131ndan yaz\u0131ld\u0131\u011F\u0131 (yazar uzmanl\u0131\u011F\u0131), t\u0131p literat\u00FCr\u00FCyle ne kadar \u00F6rt\u00FC\u015Ft\u00FC\u011F\u00FC ve d\u0131\u015F platformlardaki PR g\u00FCc\u00FCn\u00FCz, AI modelleri i\u00E7in bir onay belgesi niteli\u011Findedir.\n\nBir hastan\u0131n 'En g\u00FCvenilir t\u00FCp bebek merkezi neresi?' sorusuna yapay zekan\u0131n do\u011Frudan sizin klini\u011Finizi \u00F6nermesini istiyorsan\u0131z, t\u0131bbi makalelerinizi akademik formatta yap\u0131land\u0131rmal\u0131 ve AI dilinin kolayca tarayabilece\u011Fi (Structured Data) \u015Fekilde kodlamal\u0131s\u0131n\u0131z.",
        date: "05 Kasım 2025",
        readTime: "6 dk okuma",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 3,
        category: "B2B SaaS Rehberi",
        title: "Rakip Karşılaştırmalarında (X vs Y) Yapay Zekayı Hacklemek",
        desc: "Perplexity ve ChatGPT'ye kurumsal yazılımınızın rakipten neden daha iyi olduğunu veri sızdırma (Data Seeding) yöntemiyle nasıl öğretirsiniz?",
        content: "B2B (Firmadan firmaya) sat\u0131\u015F s\u00FCre\u00E7leri art\u0131k eskisi gibi de\u011Fil. Teknoloji profesyonelleri ve \u015Firket y\u00F6neticileri, kullanacaklar\u0131 yeni bir SaaS (Hizmet olarak yaz\u0131l\u0131m) \u00FCr\u00FCn\u00FCn\u00FC se\u00E7erken y\u00FCzlerce sayfa okumak yerine Perplexity'ye 'HubSpot ve Salesforce aras\u0131ndaki farklar neler, bizim 50 ki\u015Filik sat\u0131\u015F ekibimiz i\u00E7in hangisi daha iyi?' diye soruyor.\n\nRakiplerinizin sizinle kar\u015F\u0131la\u015Ft\u0131r\u0131ld\u0131\u011F\u0131 bu kritik karar anlar\u0131nda, masada olabilmek i\u00E7in Data Seeding (Veri S\u0131zd\u0131rma) ad\u0131 verilen GEO tekniklerini kullanman\u0131z gerekir. Modelin web taramas\u0131 yaparken (RAG - Retrieval-Augmented Generation) sizin \u00FCst\u00FCn oldu\u011Funuz \u00F6zellikleri do\u011Fru \u00E7ekmesi i\u00E7in tarafs\u0131z inceleme siteleri, Reddit/Quora gibi platformlar ve k\u0131yaslama odakl\u0131 i\u00E7erikler \u00FCretilmelidir.\n\nSekt\u00F6r lideri rakibinizi aratan bir potansiyel m\u00FC\u015Fteriye, yapay zekan\u0131n 'X \u00E7ok pop\u00FCler olsa da, sizin kullan\u0131m durumunuz i\u00E7in Y (Sizin Markan\u0131z) \u00E7ok daha modern ve maliyet etkin bir \u00E7\u00F6z\u00FCmd\u00FCr' yan\u0131t\u0131n\u0131 vermesini sa\u011Flamak en b\u00FCy\u00FCk rekabet avantaj\u0131n\u0131zd\u0131r.",
        date: "28 Ekim 2025",
        readTime: "5 dk okuma",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 4,
        category: "E-Ticaret (SGE)",
        title: "Dijital Alışveriş Asistanlarına Ürün Beğendirme Sanatı",
        desc: "Ürün özelliklerinizi JSON-LD yapısına oturtarak, 'En iyi kışlık bot' aramalarında Google'ın yapay zekasına doğrudan nasıl girersiniz?",
        content: "E-ticaret arama davran\u0131\u015Flar\u0131 yapay zekan\u0131n Google Search Generative Experience (SGE) ekosistemine entegre olmas\u0131yla ba\u015Ftan yaz\u0131l\u0131yor. Kullan\u0131c\u0131lar art\u0131k sadece 'spor ayakkab\u0131' yazm\u0131yor; 'D\u00FCztaban biriyim, haftada 3 g\u00FCn asfalt ko\u015Fusu yap\u0131yorum, bana en uygun 3 ayakkab\u0131y\u0131 \u00F6zellikleriyle k\u0131yasla' yaz\u0131yor.\n\nE-ticaret markalar\u0131 i\u00E7in bu, yepyeni bir g\u00F6r\u00FCn\u00FCrl\u00FCk sava\u015F\u0131 demek. \u00DCr\u00FCn \u00F6zelliklerinizin (renk, materyal, kullan\u0131m amac\u0131, m\u00FC\u015Fteri yorumlar\u0131) semantik olarak zengin bir \u015Fekilde listelenmesi gerekiyor. \u00D6zellikle \u00FCr\u00FCn yorumlar\u0131ndan (Reviews) elde edilen veri, yapay zekan\u0131n \u00FCr\u00FCn\u00FC tavsiye etmesinde b\u00FCy\u00FCk rol oynuyor.\n\nGelece\u011Fin al\u0131\u015Fveri\u015F d\u00FCnyas\u0131nda raf pay\u0131 (shelf space), yapay zekan\u0131n ekran\u0131nda size ay\u0131rd\u0131\u011F\u0131 o k\u00FC\u00E7\u00FCk paragraftan ibaret olacak. \u00DCr\u00FCn verilerinizi AI i\u00E7in yap\u0131land\u0131rmak bu g\u00F6r\u00FCn\u00FCrl\u00FC\u011F\u00FC garantiler.",
        date: "14 Ekim 2025",
        readTime: "7 dk okuma",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 5,
        category: "Hukuk & Otorite",
        title: "Emsal Kararlardan AI Referanslarına: Hukuk Büroları İçin GEO",
        desc: "Hukuki tavsiye arayan müvekkillerin ekranında, ChatGPT'nin sadece sizin makalenizi akademik bir referans (Citation) olarak göstermesi tesadüf değildir.",
        content: "Bir kullan\u0131c\u0131 hukuki bir sorun ya\u015Fad\u0131\u011F\u0131nda veya bir dava s\u00FCreci hakk\u0131nda bilgi almak istedi\u011Finde yapay zekaya davas\u0131n\u0131n spesifik detaylar\u0131n\u0131 yazar. AI, bu t\u00FCr karma\u015F\u0131k ve y\u00FCksek riskli sorulara cevap verirken internette buldu\u011Fu rastgele yaz\u0131lar\u0131 de\u011Fil, akademik dili, emsal karar referanslar\u0131n\u0131 ve g\u00FCvenilir otorite sitelerini baz al\u0131r.\n\nHukuk b\u00FCronuzun bu platformlarda tavsiye edilebilmesi i\u00E7in i\u00E7eriklerinizin y\u00FCzeysel genelge\u00E7er bilgilerden ziyade, ger\u00E7ek hukuki vakalara ve Yarg\u0131tay kararlar\u0131na dayal\u0131 yap\u0131da kurgulanmas\u0131 gerekiyor. Yapay zeka, metnin alt\u0131ndaki referans a\u011Fac\u0131n\u0131 inceledi\u011Fi i\u00E7in do\u011Fru kurgulanm\u0131\u015F bir 'Hukuki Rehber', sizi b\u00F6lgenizde (\u00F6rne\u011Fin \u0130stanbul bili\u015Fim avukat\u0131) en \u00E7ok al\u0131nt\u0131lanan avukat konumuna getirecektir.\n\nYapay zeka devrimi, do\u011Fru optimize edenler i\u00E7in rakiplerinin on y\u0131llar s\u00FCren marka miras\u0131n\u0131 tek kalemde ge\u00E7me f\u0131rsat\u0131d\u0131r.",
        date: "02 Ekim 2025",
        readTime: "5 dk okuma",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop"
    }
];
function Blog() {
    var _a = react_1.useState(null), activePost = _a[0], setActivePost = _a[1];
    return (React.createElement("section", { id: "blog", className: "py-24 bg-black relative border-t border-white/5 overflow-hidden" },
        React.createElement("div", { className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },
            React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" }, !activePost ? (React.createElement(framer_motion_1.motion.div, { key: "grid", initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 }, transition: { duration: 0.3 } },
                React.createElement("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" },
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex items-center gap-3 mb-4" },
                            React.createElement(lucide_react_1.BookOpen, { className: "w-6 h-6 text-blue-400" }),
                            React.createElement("span", { className: "text-blue-400 font-bold uppercase tracking-widest text-sm" }, "\u0130\u00E7g\u00F6r\u00FCler ve Ara\u015Ft\u0131rmalar")),
                        React.createElement("h2", { className: "text-3xl md:text-5xl font-bold text-white" },
                            "Yapay Zeka ",
                            React.createElement("br", null),
                            React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400" }, "\u00D6\u011Frenme Merkezi"))),
                    React.createElement("div", { className: "text-gray-400 text-sm max-w-sm border-l-2 border-white/10 pl-4 py-2 hidden lg:block" }, "SEO'nun \u00F6tesine ge\u00E7erek yapay zeka ara\u00E7lar\u0131nda markan\u0131z\u0131 nas\u0131l konumland\u0131raca\u011F\u0131n\u0131z\u0131 \u00F6\u011Frenin.")),
                React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6" }, exports.posts.map(function (post, index) { return (React.createElement(framer_motion_1.motion.div, { key: post.id, onClick: function () {
                        var _a;
                        setActivePost(post);
                        // Optional: Scroll to top of blog section smoothly
                        (_a = document.getElementById('blog')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
                    }, initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1, duration: 0.5 }, className: "group cursor-pointer bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] transition-all hover:-translate-y-2 flex flex-col h-full shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]" },
                    React.createElement("div", { className: "h-40 xl:h-48 relative overflow-hidden bg-gray-900 w-full shrink-0" },
                        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" }),
                        React.createElement("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 mix-blend-screen" }),
                        React.createElement("div", { className: "absolute top-4 left-4 z-20" },
                            React.createElement("span", { className: "text-blue-300 text-[10px] font-bold uppercase tracking-widest bg-blue-900/50 backdrop-blur-md px-2 py-1 rounded-sm border border-blue-500/30" }, post.category))),
                    React.createElement("div", { className: "p-5 flex flex-col flex-1" },
                        React.createElement("h3", { className: "text-base xl:text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-3 leading-snug" }, post.title),
                        React.createElement("p", { className: "text-gray-400 text-xs xl:text-sm mb-6 line-clamp-3 leading-relaxed flex-1" }, post.desc),
                        React.createElement("div", { className: "mt-auto flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5" },
                            React.createElement("div", { className: "flex items-center gap-1.5" },
                                React.createElement(lucide_react_1.Calendar, { className: "w-3 h-3" }),
                                post.date),
                            React.createElement(lucide_react_1.ArrowRight, { className: "w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" }))))); })))) : (React.createElement(framer_motion_1.motion.div, { key: "detail", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -30 }, transition: { duration: 0.4 }, className: "bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto" },
                React.createElement("div", { className: "h-64 sm:h-96 relative overflow-hidden" },
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" }),
                    React.createElement("img", { src: activePost.image, alt: activePost.title, className: "w-full h-full object-cover opacity-60 mix-blend-screen" }),
                    React.createElement("div", { className: "absolute top-6 left-6 z-20" },
                        React.createElement("button", { onClick: function () { return setActivePost(null); }, className: "flex items-center gap-2 text-white bg-black/50 hover:bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transition-colors cursor-pointer" },
                            React.createElement(lucide_react_1.ArrowLeft, { className: "w-4 h-4" }),
                            " Geri D\u00F6n"))),
                React.createElement("div", { className: "p-8 sm:p-12 lg:p-16 relative z-20 -mt-20 bg-gradient-to-b from-transparent to-black" },
                    React.createElement("div", { className: "flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold mb-6" },
                        React.createElement("span", { className: "text-blue-400 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20" }, activePost.category),
                        React.createElement("div", { className: "flex items-center gap-1.5 text-gray-400" },
                            React.createElement(lucide_react_1.Calendar, { className: "w-4 h-4" }),
                            activePost.date),
                        React.createElement("div", { className: "flex items-center gap-1.5 text-gray-400" },
                            React.createElement(lucide_react_1.Clock, { className: "w-4 h-4" }),
                            activePost.readTime)),
                    React.createElement("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight" }, activePost.title),
                    React.createElement("div", { className: "max-w-none text-gray-300 text-lg leading-relaxed" }, activePost.content.split('\n\n').map(function (paragraph, idx) { return (React.createElement("p", { key: idx, className: "mb-6" }, paragraph)); })),
                    React.createElement("div", { className: "mt-16 pt-8 border-t border-white/10 flex justify-between items-center" },
                        React.createElement("button", { onClick: function () { return setActivePost(null); }, className: "flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer" },
                            React.createElement(lucide_react_1.ArrowLeft, { className: "w-4 h-4" }),
                            " Di\u011Fer Makalelere D\u00F6n")))))))));
}
exports["default"] = Blog;
