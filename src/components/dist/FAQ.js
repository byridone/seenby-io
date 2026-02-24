"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var faqs = [
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
function FAQ() {
    var _a = react_1.useState(null), openIndex = _a[0], setOpenIndex = _a[1];
    var toggleFAQ = function (index) {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (React.createElement("section", { id: "sss", className: "py-24 bg-black relative border-t border-white/5" },
        React.createElement("div", { className: "absolute top-1/2 left-0 w-1/4 h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" }),
        React.createElement("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },
            React.createElement("div", { className: "text-center mb-16" },
                React.createElement("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-6" },
                    "S\u0131k\u00E7a Sorulan ",
                    React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500" }, "Sorular")),
                React.createElement("p", { className: "text-gray-400" }, "Yapay zeka \u00E7a\u011F\u0131nda g\u00F6r\u00FCn\u00FCrl\u00FCk kurallar\u0131 de\u011Fi\u015Fti. Akl\u0131n\u0131za tak\u0131lan sorular\u0131 sizin i\u00E7in netle\u015Ftirdik.")),
            React.createElement("div", { className: "flex flex-col gap-4" }, faqs.map(function (faq, index) { return (React.createElement(framer_motion_1.motion.div, { key: index, initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, className: "border border-white/10 rounded-2xl overflow-hidden transition-colors " + (openIndex === index ? "bg-white/[0.05]" : "bg-white/[0.02] hover:bg-white/[0.04]") },
                React.createElement("button", { onClick: function () { return toggleFAQ(index); }, className: "w-full flex items-center justify-between p-6 text-left" },
                    React.createElement("span", { className: "text-lg font-semibold text-white pr-8" }, faq.question),
                    React.createElement(lucide_react_1.ChevronDown, { className: "w-5 h-5 text-gray-400 transition-transform duration-300 " + (openIndex === index ? "rotate-180" : "") })),
                React.createElement(framer_motion_1.AnimatePresence, null, openIndex === index && (React.createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.3 } },
                    React.createElement("div", { className: "px-6 pb-6 text-gray-400 leading-relaxed" }, faq.answer)))))); })))));
}
exports["default"] = FAQ;
