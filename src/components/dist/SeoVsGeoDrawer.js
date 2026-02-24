"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var framer_motion_1 = require("framer-motion");
var comparisonPoints = [
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
function SeoVsGeoDrawer() {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    react_1.useEffect(function () {
        var handleOpen = function () { return setIsOpen(true); };
        window.addEventListener('openSeoVsGeo', handleOpen);
        return function () { return window.removeEventListener('openSeoVsGeo', handleOpen); };
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
        React.createElement(framer_motion_1.motion.div, { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" }, transition: { type: "spring", bounce: 0, duration: 0.4 }, className: "relative w-full max-w-lg bg-[#050505] border-l border-white/10 h-full shadow-2xl flex flex-col overflow-hidden" },
            React.createElement("div", { className: "p-6 border-b border-white/10 flex items-center justify-between bg-black/50 sticky top-0 z-10" },
                React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement("div", { className: "p-2 bg-orange-500/10 rounded-lg border border-orange-500/20" },
                        React.createElement(lucide_react_1.ArrowRightLeft, { className: "w-5 h-5 text-orange-400" })),
                    React.createElement("h2", { className: "text-xl font-bold tracking-wide" }, "Klasik SEO vs GEO")),
                React.createElement("button", { onClick: function () { return setIsOpen(false); }, className: "p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white" },
                    React.createElement(lucide_react_1.X, { className: "w-5 h-5" }))),
            React.createElement("div", { className: "flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent" },
                React.createElement("p", { className: "text-sm text-gray-400 leading-relaxed" },
                    "Arama al\u0131\u015Fkanl\u0131klar\u0131 tamamen de\u011Fi\u015Fti. Art\u0131k insanlar arama sonu\u00E7lar\u0131 aras\u0131nda gezinmek yerine do\u011Frudan yapay zekaya soruyor. \u0130\u015Fte markan\u0131z\u0131n neden ",
                    React.createElement("strong", { className: "text-white" }, "g\u00F6r\u00FCn\u00FCrl\u00FCkten tavsiye edilmeye"),
                    " ge\u00E7mesi gerekti\u011Finin tablosu."),
                React.createElement("div", { className: "space-y-6" }, comparisonPoints.map(function (point, idx) { return (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 * idx }, key: idx, className: "bg-[#0a0f18] border border-gray-800 rounded-xl overflow-hidden" },
                    React.createElement("div", { className: "bg-white/5 px-4 py-2 border-b border-gray-800 text-sm font-semibold text-gray-300" }, point.feature),
                    React.createElement("div", { className: "grid grid-cols-2 divide-x divide-gray-800" },
                        React.createElement("div", { className: "p-4 flex flex-col gap-2 relative overflow-hidden group" },
                            React.createElement("div", { className: "flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider mb-1" },
                                React.createElement(lucide_react_1.AlertTriangle, { className: "w-3 h-3 text-red-400" }),
                                " Klasik SEO"),
                            React.createElement("p", { className: "text-sm text-gray-400 relative z-10" }, point.seo)),
                        React.createElement("div", { className: "p-4 flex flex-col gap-2 relative overflow-hidden group bg-orange-500/5" },
                            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
                            React.createElement("div", { className: "flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1" },
                                React.createElement(lucide_react_1.CheckCircle2, { className: "w-3 h-3" }),
                                " Seenby.io GEO"),
                            React.createElement("p", { className: "text-sm text-white font-medium relative z-10" }, point.geo))))); })),
                React.createElement("div", { className: "mt-8 p-6 rounded-xl bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-500/20 text-center" },
                    React.createElement("h3", { className: "text-white font-bold mb-2" }, "Kurallar De\u011Fi\u015Fti"),
                    React.createElement("p", { className: "text-sm text-orange-300/80 font-medium leading-relaxed" },
                        "Mevcut SEO b\u00FCt\u00E7enizi t\u0131klanmayan linklere harcamak yerine, markan\u0131z\u0131 yapay zeka taraf\u0131ndan ",
                        React.createElement("span", { className: "text-white border-b border-white/30pb-0.5" }, "\u00F6nerilir hale getirmeye"),
                        " yat\u0131r\u0131n."))))))));
}
exports["default"] = SeoVsGeoDrawer;
