"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function Roadmap() {
    var steps = [
        {
            num: "1",
            title: "Analiz",
            desc: "Kullanıcıların AI'a sorduğu soruları (Prompt) ve niyetlerini tespit ederiz.",
            icon: React.createElement(lucide_react_1.Search, { className: "w-6 h-6 text-blue-400" }),
            color: "from-blue-500/20 to-blue-500/5",
            borderColor: "border-blue-500/20"
        },
        {
            num: "2",
            title: "Revizyon",
            desc: "İçeriklerinizi 'Sıfırıncı Paragraf' ve akademik istatistiklerle zenginleştiririz.",
            icon: React.createElement(lucide_react_1.PenTool, { className: "w-6 h-6 text-purple-400" }),
            color: "from-purple-500/20 to-purple-500/5",
            borderColor: "border-purple-500/20"
        },
        {
            num: "3",
            title: "Teknik Kurulum",
            desc: "Schema işaretlemelerini (JSON-LD) ve robots.txt (GPTBot) izinlerini kurgularız.",
            icon: React.createElement(lucide_react_1.Code2, { className: "w-6 h-6 text-orange-400" }),
            color: "from-orange-500/20 to-orange-500/5",
            borderColor: "border-orange-500/20"
        },
        {
            num: "4",
            title: "İzleme",
            desc: "Marka isminizin AI çıktılarındaki görünürlüğünü ve duygu durumunu takip ederiz.",
            icon: React.createElement(lucide_react_1.LineChart, { className: "w-6 h-6 text-emerald-400" }),
            color: "from-emerald-500/20 to-emerald-500/5",
            borderColor: "border-emerald-500/20"
        }
    ];
    return (React.createElement("section", { className: "py-24 sm:py-32 bg-[#050505] relative border-t border-white/5" },
        React.createElement("div", { className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },
            React.createElement("div", { className: "text-center max-w-3xl mx-auto mb-16 md:mb-24" },
                React.createElement("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" },
                    "Uygulama Yol Haritas\u0131:",
                    React.createElement("br", null),
                    " ",
                    React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400" }, "Yar\u0131n Ne Yapmal\u0131?")),
                React.createElement("p", { className: "text-gray-400 text-lg" }, "Gelece\u011Fin algoritmalar\u0131na uyum sa\u011Flamak i\u00E7in beklemeye gerek yok. 4 ad\u0131ml\u0131 net ve transparan s\u00FCrecimizle hemen ba\u015Fl\u0131yoruz.")),
            React.createElement("div", { className: "relative" },
                React.createElement("div", { className: "hidden md:block absolute top-[40%] left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 -translate-y-1/2 rounded-full" }),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8" }, steps.map(function (step, index) { return (React.createElement(framer_motion_1.motion.div, { key: step.num, initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.15 }, className: "relative flex flex-col items-center text-center group" },
                    index < steps.length - 1 && (React.createElement("div", { className: "hidden md:block absolute top-[40%] -right-4 w-8 h-8 text-gray-700 -translate-y-1/2 z-0" },
                        React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("path", { d: "M5 12H19M19 12L12 5M19 12L12 19", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })))),
                    React.createElement("div", { className: "w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br " + step.color + " border " + step.borderColor + " flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-transform" },
                        React.createElement("div", { className: "absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#0a0a0a] border border-gray-800 flex items-center justify-center font-bold text-gray-300 shadow-md" }, step.num),
                        step.icon),
                    React.createElement("h3", { className: "text-xl font-bold text-gray-200 mb-3" }, step.title),
                    React.createElement("p", { className: "text-sm text-gray-500 leading-relaxed px-2" }, step.desc))); }))))));
}
exports["default"] = Roadmap;
