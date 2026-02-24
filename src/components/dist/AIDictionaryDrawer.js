"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var framer_motion_1 = require("framer-motion");
var dictionaryTerms = [
    {
        title: "GEO (Generative Engine Optimization)",
        icon: React.createElement(lucide_react_1.Cpu, { className: "w-5 h-5 text-blue-400" }),
        color: "bg-blue-500/10 border-blue-500/30",
        description: "Geleneksel arama motoru optimizasyonunun (SEO) yapay zeka çağına evrimi. Markanızın ChatGPT, Gemini, Perplexity gibi motorların ürettiği yanıtlarda sadece 'listelenmesini' değil, 'öncelikli tavsiye edilmesini' sağlama mühendisliğidir."
    },
    {
        title: "Entity (Varlık)",
        icon: React.createElement(lucide_react_1.Fingerprint, { className: "w-5 h-5 text-purple-400" }),
        color: "bg-purple-500/10 border-purple-500/30",
        description: "Yapay zekanın dünyayı anlama biçimi. Sadece tekrar edilen bir 'anahtar kelime' değil; özellikleri, sınırları ve diğer varlıklarla ilişkisi net olarak kodlanmış, makine tarafından anlaşılabilir marka kimliğidir."
    },
    {
        title: "Knowledge Graph (Bilgi Grafiği)",
        icon: React.createElement(lucide_react_1.Network, { className: "w-5 h-5 text-orange-400" }),
        color: "bg-orange-500/10 border-orange-500/30",
        description: "Kavramlar ve markalar arasındaki görünmez bağlantıları haritalayan devasa ağaç. Yapay zeka bu ağdaki yerinize bakarak size güvenir. GEO, markanızı bu grafikte güçlü ve merkezi bir düğüm (node) haline getirir."
    },
    {
        title: "Citation (Referans Alma)",
        icon: React.createElement(lucide_react_1.Link, { className: "w-5 h-5 text-emerald-400" }),
        color: "bg-emerald-500/10 border-emerald-500/30",
        description: "AI yanıtlarında kaynak olarak gösterilme (atıf alma) durumu. Yeni dijital dünyada tıklamanın (click) yerini alan, otorite ve güvenilirliğin en güçlü metrik göstergesidir."
    },
    {
        title: "RAG (Retrieval-Augmented Generation)",
        icon: React.createElement(lucide_react_1.Database, { className: "w-5 h-5 text-cyan-400" }),
        color: "bg-cyan-500/10 border-cyan-500/30",
        description: "Yapay zekanın halüsinasyon görmemek (yanlış bilgi uydurmamak) için güncel ve güvenilir dış veri kaynaklarına başvurduğu teknoloji. Sitenizi RAG dostu yapmak, AI'ın doğrudan sizden beslenmesini sağlar."
    }
];
function AIDictionaryDrawer() {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    react_1.useEffect(function () {
        var handleOpen = function () { return setIsOpen(true); };
        window.addEventListener('openDictionary', handleOpen);
        return function () { return window.removeEventListener('openDictionary', handleOpen); };
    }, []);
    // Prevent scrolling when drawer is open
    react_1.useEffect(function () {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);
    return (React.createElement(framer_motion_1.AnimatePresence, null, isOpen && (React.createElement("div", { className: "fixed inset-0 z-50 flex justify-end" },
        React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: function () { return setIsOpen(false); }, className: "absolute inset-0 bg-black/60 backdrop-blur-sm" }),
        React.createElement(framer_motion_1.motion.div, { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" }, transition: { type: "spring", bounce: 0, duration: 0.4 }, className: "relative w-full max-w-md bg-[#050505] border-l border-white/10 h-full shadow-2xl flex flex-col overflow-hidden" },
            React.createElement("div", { className: "p-6 border-b border-white/10 flex items-center justify-between bg-black/50 sticky top-0 z-10" },
                React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement("div", { className: "p-2 bg-blue-500/10 rounded-lg border border-blue-500/20" },
                        React.createElement(lucide_react_1.BookOpen, { className: "w-5 h-5 text-blue-400" })),
                    React.createElement("h2", { className: "text-xl font-bold tracking-wide" }, "AI S\u00F6zl\u00FC\u011F\u00FC")),
                React.createElement("button", { onClick: function () { return setIsOpen(false); }, className: "p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white" },
                    React.createElement(lucide_react_1.X, { className: "w-5 h-5" }))),
            React.createElement("div", { className: "flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent" },
                React.createElement("p", { className: "text-sm text-gray-400 leading-relaxed mb-8" }, "Yapay zeka odakl\u0131 arama d\u00FCnyas\u0131n\u0131 (GEO) anlamak i\u00E7in s\u0131k kullan\u0131lan terimler ve ajans\u0131m\u0131z\u0131n bu kavramlara yakla\u015F\u0131m\u0131."),
                React.createElement("div", { className: "space-y-6" }, dictionaryTerms.map(function (term, idx) { return (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 * idx }, key: idx, className: "relative pl-6" },
                    React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-px bg-white/5" }),
                    React.createElement("div", { className: "absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] " + term.color.split(' ')[0] }),
                    React.createElement("div", { className: "flex items-center gap-3 mb-2" },
                        React.createElement("div", { className: "shrink-0" }, term.icon),
                        React.createElement("h3", { className: "text-base font-bold text-white tracking-wide" }, term.title)),
                    React.createElement("p", { className: "text-gray-400 text-sm leading-relaxed" }, term.description))); })),
                React.createElement("div", { className: "mt-12 p-4 rounded-xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20" },
                    React.createElement("p", { className: "text-sm text-blue-300/80 font-medium" },
                        "SEO, sayfalar\u0131 arama motorlar\u0131 i\u00E7in optimize ederdi. ",
                        React.createElement("span", { className: "text-white" }, "GEO ise markan\u0131z\u0131, b\u00FCt\u00FCn yapay zeka modellerinin ortak akl\u0131na kodlar.")))))))));
}
exports["default"] = AIDictionaryDrawer;
