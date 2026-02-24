"use strict";
exports.__esModule = true;
var Navbar_1 = require("@/components/Navbar");
var Footer_1 = require("@/components/Footer");
var lucide_react_1 = require("lucide-react");
function Security() {
    return (React.createElement("main", { className: "min-h-screen bg-black text-white selection:bg-emerald-500/30" },
        React.createElement(Navbar_1["default"], null),
        React.createElement("div", { className: "max-w-5xl mx-auto px-4 py-32 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "text-center mb-16" },
                React.createElement("div", { className: "inline-flex items-center justify-center p-4 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6" },
                    React.createElement(lucide_react_1.ShieldCheck, { className: "w-12 h-12 text-emerald-400" })),
                React.createElement("h1", { className: "text-4xl md:text-6xl font-black mb-6 text-white" }, "G\u00FCvenlik ve Veri Politikas\u0131"),
                React.createElement("p", { className: "text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed" }, "Yapay zeka \u00E7a\u011F\u0131nda kurumsal verilerinizin gizlili\u011Fi ve bilgi g\u00FCvenli\u011Fi, uygulad\u0131\u011F\u0131m\u0131z t\u00FCm GEO stratejilerinin temelini olu\u015Fturur.")),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" },
                React.createElement("div", { className: "bg-[#0a0f18] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors" },
                    React.createElement(lucide_react_1.Lock, { className: "w-8 h-8 text-emerald-400 mb-6" }),
                    React.createElement("h3", { className: "text-xl font-bold text-white mb-4" }, "Enterprise Veri \u0130zolasyonu"),
                    React.createElement("p", { className: "text-gray-400 leading-relaxed text-sm" }, "M\u00FC\u015Fterilerimizin i\u00E7 yaz\u0131\u015Fmalar\u0131, kapal\u0131 veritabanlar\u0131 (RAG Indexing) veya hassas marka verileri asla LLM'lerin (B\u00FCy\u00FCk Dil Modelleri) a\u00E7\u0131k havuzlar\u0131nda e\u011Fitilmez. Analizler, verilerin anonimle\u015Ftirilmesiyle, Zero-Data Retention (S\u0131f\u0131r Veri Tutma) prensibiyle \u00E7al\u0131\u015Fan Enterprise API'ler \u00FCzerinden yap\u0131l\u0131r.")),
                React.createElement("div", { className: "bg-[#0a0f18] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors" },
                    React.createElement(lucide_react_1.Database, { className: "w-8 h-8 text-emerald-400 mb-6" }),
                    React.createElement("h3", { className: "text-xl font-bold text-white mb-4" }, "U\u00E7tan Uca \u015Eifreleme (E2EE)"),
                    React.createElement("p", { className: "text-gray-400 leading-relaxed text-sm" }, "Sistemlerimize aktard\u0131\u011F\u0131n\u0131z raporlar, yetkilendirme token'lar\u0131 ve \u015Firket i\u00E7i bilgi grafikleri aktar\u0131m an\u0131nda (in-transit) AES-256 ve dura\u011Fan anlarda (at-rest) son teknoloji \u015Fifreleme standartlar\u0131 ile korunmaktad\u0131r.")),
                React.createElement("div", { className: "bg-[#0a0f18] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors" },
                    React.createElement(lucide_react_1.Server, { className: "w-8 h-8 text-emerald-400 mb-6" }),
                    React.createElement("h3", { className: "text-xl font-bold text-white mb-4" }, "G\u00FCvenli Altyap\u0131 Bar\u0131nd\u0131rma"),
                    React.createElement("p", { className: "text-gray-400 leading-relaxed text-sm" }, "Sunucular\u0131m\u0131z d\u00FCnya standartlar\u0131ndaki ISO 27001 ve SOC 2 Tip II sertifikal\u0131 bulut platformlar\u0131nda bar\u0131nd\u0131r\u0131lmaktad\u0131r. DDoS korumas\u0131, d\u00FCzenli s\u0131zma (Pen-test) testleri ve g\u00FCvenlik duvarlar\u0131 ile sistem s\u00FCrekli monit\u00F6r edilir.")),
                React.createElement("div", { className: "bg-[#0a0f18] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors" },
                    React.createElement(lucide_react_1.ShieldCheck, { className: "w-8 h-8 text-emerald-400 mb-6" }),
                    React.createElement("h3", { className: "text-xl font-bold text-white mb-4" }, "Marka S\u0131rr\u0131 Garantisi (NDA)"),
                    React.createElement("p", { className: "text-gray-400 leading-relaxed text-sm" }, "Generative Engine Optimization (GEO) stratejilerimiz \u015Firketinizin rekabet avantaj\u0131d\u0131r. Birlikte \u00E7al\u0131\u015Ft\u0131\u011F\u0131m\u0131z t\u00FCm kurumsal i\u015Fbirlikleri varsay\u0131lan olarak Gizlilik S\u00F6zle\u015Fmesi (NDA) kapsam\u0131na al\u0131n\u0131r; rakiplerinize asla stratejiniz s\u0131zd\u0131r\u0131lmaz."))),
            React.createElement("div", { className: "bg-gradient-to-r from-emerald-900/20 to-black p-8 rounded-2xl border border-emerald-500/20 text-center" },
                React.createElement("p", { className: "text-gray-300" },
                    "G\u00FCvenlik zafiyetleri bildirimi ve reg\u00FClasyon uyum talepleri i\u00E7in g\u00FCvenlik ekibimize ula\u015F\u0131n: ",
                    React.createElement("br", null),
                    React.createElement("a", { href: "mailto:security@seenby.io", className: "text-emerald-400 font-bold hover:underline mt-2 inline-block" }, "security@seenby.io")))),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Security;
