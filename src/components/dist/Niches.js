"use client";
"use strict";
exports.__esModule = true;
exports.niches = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
exports.niches = [
    {
        id: "saglik",
        title: "Sağlık & Klinikler",
        icon: React.createElement(lucide_react_1.Activity, { className: "w-10 h-10 mb-4 text-blue-400" }),
        description: "YMYL kuralları gereği E-E-A-T uyumlu, ChatGPT'nin sadece güvenilir kanıtlara dayanarak referans gösterdiği klinik ve doktor profilleri.",
        metrics: "+34% Randevu Artışı",
        userQuery: "En iyi dental implant kliniği neresi?",
        painPoint: "Hastalar yapay zekaya sorduğunda, kliniğinizin adı güvenilir kaynak eksikliğinden dolayı uzman olarak önerilmiyor.",
        solution: "Sizi tıbbi aramalar için en güvenilir referans kaynağına dönüştürüyor ve AI'ın doğrudan sizi tavsiye etmesini sağlıyoruz.",
        timelineData: [5, 12, 18, 25, 35, 42, 55, 65, 75, 85, 95, 100],
        chartTitle: "Geleneksel SEO vs. GEO Etkisi",
        chartSubtitle: "Klasik link aramaları erirken, yapay zeka referanslarının (GEO) yükseliş simülasyonu."
    },
    {
        id: "b2b",
        title: "B2B Yazılım (SaaS)",
        icon: React.createElement(lucide_react_1.Laptop, { className: "w-10 h-10 mb-4 text-purple-400" }),
        description: "Karşılaştırma aramalarında (X vs Y) rakiplerinizi silip, AI'nin tek bir numara olarak sizi tavsiye etmesini sağlıyoruz.",
        metrics: "+550% AI Alıntı Oranı",
        userQuery: "En güvenli ve yenilikçi kurumsal CRM hangisi?",
        painPoint: "Rakipleriniz AI incelemelerinde sizden üstün gösteriliyor, potansiyel müşterilerinizi daha ürünü denemeden kaybediyorsunuz.",
        solution: "Yazılım incelemelerinde ve sektörel karşılaştırmalarda sizi pazar lideri ve tek mantıklı tercih olarak konumlandırıyoruz.",
        timelineData: [10, 15, 25, 38, 50, 62, 70, 80, 88, 92, 98, 100],
        chartTitle: "Pazar Lideri Karşılaştırması",
        chartSubtitle: "Sıradan bir B2B markasının görünürlüğüne kıyasla sizin yapay zekadaki ezici üstünlüğünüz."
    },
    {
        id: "hukuk",
        title: "Hukuk Büroları",
        icon: React.createElement(lucide_react_1.Scale, { className: "w-10 h-10 mb-4 text-gray-400" }),
        description: "Akademik formatta ve emsal karar destekli içeriklerle, yapay zekanın hukuki aramalarda doğrudan kaynak gösterdiği bürolar.",
        metrics: "Yüksek LLM Otoritesi",
        userQuery: "Bilişim hukuku uzmanı avukat nasıl bulunur?",
        painPoint: "Müvekkiller hukuki tavsiye aradığında, AI sizi uzman bir otorite olarak tanımıyor ve sayfalarca alakasız bilgi sunuyor.",
        solution: "Makalelerinizi ve emsal kararlarınızı AI'ın sevdiği formata çevirip, sizi referans gösterilen ana otorite yapıyoruz.",
        timelineData: [8, 14, 20, 28, 35, 45, 55, 68, 75, 85, 92, 100],
        chartTitle: "Yapay Zeka Otorite Payı (Share of Voice)",
        chartSubtitle: "Hukuki sorguların çok büyük bir kısmında LLM araçlarının doğrudan sizi kaynak göstermesi."
    },
    {
        id: "gayrimenkul",
        title: "Gayrimenkul",
        icon: React.createElement(lucide_react_1.Building2, { className: "w-10 h-10 mb-4 text-orange-400" }),
        description: "Veri ve yatırım trendlerine dayalı içeriklerle, yapay zekada bölgesel aramalarda (Real Estate AI) öne çıkan projeler.",
        metrics: "+45% Lead/Satış",
        userQuery: "Yatırım için en karlı bölgeler hangileri?",
        painPoint: "Yatırımlık mülk aramalarında AI sizi fark etmediği için devasa satış fırsatlarını görünmez olarak kaçırıyorsunuz.",
        solution: "Yatırım analizleri üreterek lüks projelerinizi AI asistanlarının en kârlı bölgesel yatırımı haline getiriyoruz.",
        timelineData: [12, 18, 25, 32, 45, 52, 65, 75, 82, 88, 95, 100],
        chartTitle: "Bölgesel AI Tavsiye İvmesi",
        chartSubtitle: "Arama botlarının bölgesel emlak trendlerinde sizi keşfetme ve önerme hızını gösteren kesintisiz büyüme çizgisi."
    },
    {
        id: "e-commerce",
        title: "E-Ticaret & Moda",
        icon: React.createElement(lucide_react_1.ShoppingBag, { className: "w-10 h-10 mb-4 text-pink-400" }),
        description: "Ürünlerinizi yapay zekanın anlayacağı dile çeviriyor, dijital alışveriş asistanlarının markanızı doğrudan önermesini sağlıyoruz.",
        metrics: "+65% Trafik İyileşmesi",
        userQuery: "En iyi fiyat/performans güneş kremi?",
        painPoint: "Müşteriler asistanlara en iyi ürünleri sorduğunda marka ürünleriniz yerine sıradan pazar yerleri listeleniyor.",
        solution: "Ürün özelliklerinizi teknolojiye uygun formata getirerek, tavsiye listelerinde hep en üst sırada yer almanızı sağlıyoruz.",
        timelineData: [10, 20, 30, 45, 55, 65, 75, 80, 85, 90, 95, 100],
        chartTitle: "seenby.io Kullanan vs. Kullanmayan",
        chartSubtitle: "Sıradan bir alışveriş sepeti ile yapay zeka destekli akıllı ürün konumlandırması arasındaki fark."
    },
    {
        id: "egitim",
        title: "Eğitim",
        icon: React.createElement(lucide_react_1.GraduationCap, { className: "w-10 h-10 mb-4 text-green-400" }),
        description: "Mezuniyet istatistikleri ve güven puanlarıyla yapay zekanın doğrudan referans vereceği, güvenilir eğitim kurumları.",
        metrics: "+85% Veli Memnuniyeti",
        userQuery: "En iyi online veri bilimi eğitimi?",
        painPoint: "Veliler detaylı araştırma yaparken, kurumunuzun başarı istatistiklerini ve vizyonunu yapay zeka bulup gösteremiyor.",
        solution: "Mezuniyet istatistiklerinizi sistemlere işleyerek veliler için en güvenilir kurum tavsiyesi olmanızı sağlıyoruz.",
        timelineData: [5, 12, 18, 25, 35, 45, 55, 65, 78, 85, 92, 100],
        chartTitle: "12 Haftalık İlerleme Simülasyonu",
        chartSubtitle: "Haftadan haftaya artan, yapay zeka destekli veli güvenilirlik skoru ve tavsiye oranı artışı."
    }
];
function AnimatedNumber(_a) {
    var value = _a.value, _b = _a.suffix, suffix = _b === void 0 ? "" : _b, _c = _a.prefix, prefix = _c === void 0 ? "" : _c;
    var _d = react_1.useState(0), count = _d[0], setCount = _d[1];
    react_1.useEffect(function () {
        var startTime;
        var duration = 2000;
        var animate = function (currentTime) {
            if (!startTime)
                startTime = currentTime;
            var elapsed = currentTime - startTime;
            var progress = Math.min(elapsed / duration, 1);
            var easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
            else {
                setCount(value);
            }
        };
        requestAnimationFrame(animate);
    }, [value]);
    return React.createElement("span", null,
        prefix,
        count,
        suffix);
}
var renderChart = function (niche) {
    if (niche.id === "saglik") {
        return (React.createElement("div", { className: "relative flex h-40 items-end justify-center gap-16 pt-8 w-full border-b border-white/10 pb-4" },
            React.createElement("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" }),
            React.createElement("div", { className: "flex flex-col items-center gap-3 z-10" },
                React.createElement(framer_motion_1.motion.div, { initial: { height: 100 }, animate: { height: 40 }, transition: { duration: 1.5, ease: "easeInOut" }, className: "w-24 bg-gradient-to-t from-red-900/40 to-red-500/70 border-t border-red-500 rounded-t-sm relative shadow-[0_0_15px_rgba(239,68,68,0.2)]" },
                    React.createElement("div", { className: "absolute -top-10 left-1/2 -translate-x-1/2 text-red-400 text-lg font-mono font-bold tracking-wider" },
                        React.createElement(AnimatedNumber, { value: 60, prefix: "-%" }))),
                React.createElement("span", { className: "text-xs text-gray-500 font-bold uppercase tracking-widest bg-black px-2" }, "Eski SEO")),
            React.createElement("div", { className: "flex flex-col items-center gap-3 z-10" },
                React.createElement(framer_motion_1.motion.div, { initial: { height: 0 }, animate: { height: 120 }, transition: { duration: 1.5, delay: 0.2, ease: "easeOut" }, className: "w-24 bg-gradient-to-t from-emerald-900/40 to-emerald-400/80 border-t-2 border-emerald-400 rounded-t-sm relative shadow-[0_0_30px_rgba(52,211,153,0.4)] overflow-hidden" },
                    React.createElement(framer_motion_1.motion.div, { animate: { y: ["100%", "0%"] }, transition: { duration: 2, repeat: Infinity, ease: "linear" }, className: "absolute inset-0 w-full h-[2px] bg-white/50 blur-[1px]" }),
                    React.createElement("div", { className: "absolute -top-10 left-1/2 -translate-x-1/2 text-emerald-400 text-xl font-mono font-bold tracking-wider" },
                        React.createElement(AnimatedNumber, { value: 340, prefix: "+%" }))),
                React.createElement("span", { className: "text-xs text-emerald-300 font-bold uppercase tracking-widest bg-black px-2 shadow-[0_0_10px_rgba(0,0,0,1)]" }, "seenby.io GEO"))));
    }
    if (niche.id === "b2b") {
        return (React.createElement("div", { className: "flex flex-col justify-center h-40 gap-8 w-full px-4 relative" },
            React.createElement("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-[size:40px_100%]" }),
            React.createElement("div", { className: "w-full relative z-10" },
                React.createElement("div", { className: "flex justify-between mb-2 text-xs font-mono uppercase tracking-widest font-bold" },
                    React.createElement("span", { className: "text-gray-500" }, "Rakip SaaS"),
                    React.createElement("span", { className: "text-gray-500" },
                        React.createElement(AnimatedNumber, { value: 15, suffix: "%" }),
                        " AI Pay\u0131")),
                React.createElement("div", { className: "w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10" },
                    React.createElement(framer_motion_1.motion.div, { initial: { width: 0 }, animate: { width: '15%' }, transition: { duration: 1.5 }, className: "h-full bg-gray-600 rounded-full" }))),
            React.createElement("div", { className: "w-full relative z-10" },
                React.createElement("div", { className: "flex justify-between mb-2 text-xs font-mono uppercase tracking-widest font-bold" },
                    React.createElement("span", { className: "text-purple-400" }, "Sizin Yaz\u0131l\u0131m\u0131n\u0131z"),
                    React.createElement("span", { className: "text-purple-400 shadow-[0_0_10px_rgba(0,0,0,1)]" },
                        React.createElement(AnimatedNumber, { value: 85, suffix: "%" }),
                        " AI Pay\u0131")),
                React.createElement("div", { className: "w-full h-3 bg-white/5 rounded-full overflow-hidden border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)] relative" },
                    React.createElement(framer_motion_1.motion.div, { initial: { width: 0 }, animate: { width: '85%' }, transition: { duration: 1.5, delay: 0.2 }, className: "h-full bg-gradient-to-r from-purple-600 via-blue-500 to-purple-400 rounded-full bg-[length:200%_100%] animate-[gradient_2s_linear_infinite]" })))));
    }
    if (niche.id === "hukuk") {
        return (React.createElement("div", { className: "flex items-center justify-center h-40 gap-12 relative" },
            React.createElement("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0,transparent_50%)]" }),
            React.createElement("div", { className: "relative w-36 h-36 flex items-center justify-center z-10" },
                React.createElement("svg", { className: "w-full h-full transform -rotate-90 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]", viewBox: "0 0 100 100" },
                    React.createElement("circle", { cx: "50", cy: "50", r: "40", fill: "transparent", stroke: "rgba(255,255,255,0.03)", strokeWidth: "12" }),
                    React.createElement(framer_motion_1.motion.circle, { cx: "50", cy: "50", r: "40", fill: "transparent", stroke: "url(#gradientDonutLaw)", strokeWidth: "12", strokeDasharray: "251.2", initial: { strokeDashoffset: 251.2 }, animate: { strokeDashoffset: 251.2 * 0.25 }, transition: { duration: 2, ease: "easeOut" }, strokeLinecap: "round" }),
                    React.createElement("defs", null,
                        React.createElement("linearGradient", { id: "gradientDonutLaw", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
                            React.createElement("stop", { offset: "0%", stopColor: "#818cf8" }),
                            React.createElement("stop", { offset: "100%", stopColor: "#c084fc" })))),
                React.createElement("div", { className: "absolute flex flex-col items-center justify-center bg-black/50 w-24 h-24 rounded-full backdrop-blur-sm border border-white/5" },
                    React.createElement("span", { className: "text-3xl font-mono font-bold text-white" },
                        React.createElement(AnimatedNumber, { value: 75, prefix: "%" })),
                    React.createElement("span", { className: "text-[9px] uppercase tracking-widest text-indigo-300 font-bold mt-1" }, "Pazar Pay\u0131"))),
            React.createElement("div", { className: "flex flex-col gap-4 z-10" },
                React.createElement("div", { className: "flex items-center gap-3 bg-white/5 py-2 px-4 rounded-lg border border-indigo-500/20" },
                    React.createElement("div", { className: "w-3 h-3 border-2 border-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]" }),
                    React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-indigo-100" }, "Sizin B\u00FCronuz")),
                React.createElement("div", { className: "flex items-center gap-3 bg-white/5 py-2 px-4 rounded-lg border border-white/5 text-gray-500" },
                    React.createElement("div", { className: "w-3 h-3 border-2 border-gray-600 rounded-full" }),
                    React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider" }, "Di\u011Fer 10 Rakip")))));
    }
    if (niche.id === "gayrimenkul") {
        return (React.createElement("div", { className: "flex flex-col justify-end h-40 w-full relative pt-4 overflow-hidden border-b border-white/10 pb-4" },
            React.createElement("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" }),
            React.createElement("svg", { className: "w-full h-full relative z-10", viewBox: "0 0 500 100", preserveAspectRatio: "none" },
                React.createElement(framer_motion_1.motion.path, { d: "M0,90 C50,85 100,70 150,80 C200,90 250,40 300,50 C350,60 400,20 C450,30 500,10", fill: "none", stroke: "url(#lineGradRE)", strokeWidth: "3", initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 2, ease: "easeInOut" }, className: "drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]" }),
                React.createElement(framer_motion_1.motion.path, { d: "M0,90 C50,85 100,70 150,80 C200,90 250,40 300,50 C350,60 400,20 C450,30 500,10 L500,100 L0,100 Z", fill: "url(#areaGradRE)", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 2, delay: 0.2 } }),
                React.createElement("defs", null,
                    React.createElement("linearGradient", { id: "lineGradRE", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                        React.createElement("stop", { offset: "0%", stopColor: "#ea580c" }),
                        React.createElement("stop", { offset: "50%", stopColor: "#f97316" }),
                        React.createElement("stop", { offset: "100%", stopColor: "#fef08a" })),
                    React.createElement("linearGradient", { id: "areaGradRE", x1: "0%", y1: "0%", x2: "0%", y2: "100%" },
                        React.createElement("stop", { offset: "0%", stopColor: "rgba(249, 115, 22, 0.4)" }),
                        React.createElement("stop", { offset: "100%", stopColor: "rgba(0, 0, 0, 0)" })))),
            React.createElement("div", { className: "absolute top-2 right-2 bg-gradient-to-r from-orange-900/50 to-orange-600/20 text-orange-400 px-4 py-1.5 rounded-full text-xs font-mono font-bold border border-orange-500/30 z-20 flex items-center gap-2 backdrop-blur-md" },
                React.createElement("div", { className: "w-2 h-2 rounded-full bg-orange-400 animate-pulse" }),
                "B\u00D6LGESEL HAC\u0130M: +",
                React.createElement(AnimatedNumber, { value: 240 }),
                "%"),
            React.createElement("div", { className: "flex justify-between w-full mt-2 px-2 relative z-10" },
                React.createElement("span", { className: "text-[10px] uppercase font-bold text-gray-600 bg-black px-1" }, "Ba\u015Flang\u0131\u00E7"),
                React.createElement("span", { className: "text-[10px] uppercase font-bold text-gray-500 bg-black px-1" }, "3. Ay"),
                React.createElement("span", { className: "text-[10px] uppercase font-bold text-orange-300/50 bg-black px-1" }, "6. Ay"))));
    }
    if (niche.id === "e-commerce") {
        return (React.createElement("div", { className: "flex items-center justify-center h-40 gap-4 sm:gap-8 pt-4 w-full relative" },
            React.createElement("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05)_0,transparent_60%)]" }),
            React.createElement("div", { className: "flex flex-col items-center gap-3 flex-1 z-10" },
                React.createElement("div", { className: "relative w-full h-24 bg-red-950/20 rounded-xl border border-red-900/30 flex flex-col items-center justify-center overflow-hidden" },
                    React.createElement("div", { className: "text-red-500/50 font-mono text-2xl mb-1 blur-[1px]" }, "OOS"),
                    React.createElement("span", { className: "text-[9px] uppercase tracking-widest text-red-400/50 font-bold" },
                        "%",
                        React.createElement(AnimatedNumber, { value: 12 }),
                        " G\u00F6r\u00FCn\u00FCrl\u00FCk")),
                React.createElement("span", { className: "text-[10px] sm:text-xs text-center text-gray-600 font-bold uppercase tracking-wider" }, "S\u0131radan Olarak")),
            React.createElement("div", { className: "flex flex-col items-center justify-center z-10" },
                React.createElement("div", { className: "text-xs font-black italic text-gray-700 bg-black px-2 mb-2" }, "VS")),
            React.createElement("div", { className: "flex flex-col items-center gap-3 flex-1 z-10" },
                React.createElement("div", { className: "relative w-full h-24 bg-gradient-to-b from-pink-900/20 to-black rounded-xl border border-pink-500/40 flex flex-col items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.2)]" },
                    React.createElement(framer_motion_1.motion.div, { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmZiZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" }),
                    React.createElement(framer_motion_1.motion.div, { initial: { scale: 0 }, animate: { scale: 1 }, transition: { type: "spring", delay: 0.2 }, className: "text-pink-400 font-black text-3xl mb-1 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] z-10" }, "#1"),
                    React.createElement("span", { className: "text-[9px] uppercase tracking-widest text-pink-300 font-bold z-10 bg-black/50 px-2 rounded-full border border-pink-500/20" },
                        "%",
                        React.createElement(AnimatedNumber, { value: 98 }),
                        " \u00D6neri Oran\u0131"),
                    React.createElement(framer_motion_1.motion.div, { className: "absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent", animate: { x: ['-100%', '100%'] }, transition: { duration: 1.5, repeat: Infinity, ease: 'linear' } })),
                React.createElement("span", { className: "text-[10px] sm:text-xs text-center text-pink-400 font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(0,0,0,1)] bg-black px-1" }, "seenby.io G\u00FCc\u00FC"))));
    }
    // Default: Eğitim (12 Haftalık İlerleme)
    return (React.createElement("div", { className: "flex flex-col h-40 relative pt-8 border-b border-white/10 pb-2" },
        React.createElement("div", { className: "absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100%_15px]" }),
        React.createElement("div", { className: "flex items-end justify-between flex-1 gap-1 sm:gap-2 z-10 w-full" }, niche.timelineData.map(function (val, i) { return (React.createElement("div", { key: i, className: "flex flex-col items-center flex-1 h-32 justify-end group relative" },
            React.createElement(framer_motion_1.motion.div, { initial: { height: 0 }, animate: { height: val + "%" }, transition: { duration: 1, delay: i * 0.05, ease: "easeOut" }, className: "w-full max-w-[28px] bg-gradient-to-t from-teal-900/40 to-teal-400/80 border-t-2 border-teal-300 relative group-hover:from-teal-500 group-hover:to-teal-300 transition-colors cursor-crosshair shadow-[0_0_10px_rgba(45,212,191,0.2)] hover:shadow-[0_0_20px_rgba(45,212,191,0.6)] rounded-sm" },
                React.createElement("div", { className: "absolute -top-12 left-1/2 -translate-x-1/2 bg-teal-950 border border-teal-500/50 text-teal-300 text-[10px] font-mono font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap backdrop-blur-md" },
                    "%",
                    React.createElement(AnimatedNumber, { value: val }),
                    " G\u00FCven")))); })),
        React.createElement("div", { className: "flex items-center justify-between gap-1 sm:gap-2 z-10 w-full mt-2" }, niche.timelineData.map(function (val, i) { return (React.createElement("span", { key: i, className: "text-[8px] sm:text-[10px] text-gray-600 font-mono font-bold uppercase text-center flex-1 group-hover:text-teal-400 transition-colors" },
            "H",
            i + 1)); }))));
};
function Niches() {
    var _a = react_1.useState(exports.niches[0]), activeNiche = _a[0], setActiveNiche = _a[1];
    return (React.createElement("section", { id: "sektorler", className: "py-24 bg-black relative border-t border-white/5" },
        React.createElement("div", { className: "absolute top-0 right-0 w-1/3 h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" }),
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },
            React.createElement("div", { className: "text-center mb-16" },
                React.createElement("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-6" },
                    "Sekt\u00F6rel ",
                    React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" }, "AI G\u00F6r\u00FCn\u00FCrl\u00FC\u011F\u00FC")),
                React.createElement("p", { className: "text-gray-400 max-w-2xl mx-auto" }, "Her sekt\u00F6r\u00FCn yapay zeka haf\u0131zas\u0131ndaki kurallar\u0131 farkl\u0131d\u0131r. Biz hedefinize \u00F6zel a\u011Fr\u0131 kesici (pain-killer) \u00E7\u00F6z\u00FCmler \u00FCretiyoruz.")),
            React.createElement("div", { className: "flex flex-col lg:flex-row gap-8 items-stretch" },
                React.createElement("div", { className: "w-full lg:w-1/3 flex flex-col gap-3" }, exports.niches.map(function (niche) { return (React.createElement("button", { key: niche.id, onClick: function () { return setActiveNiche(niche); }, className: "flex-1 flex items-center text-left px-6 py-4 rounded-2xl transition-all duration-300 border " + (activeNiche.id === niche.id
                        ? "bg-white/10 border-blue-500/50 text-white shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                        : "bg-transparent border-transparent text-gray-500 hover:bg-white/5 hover:text-gray-300") },
                    React.createElement("div", { className: "flex items-center gap-4 w-full" },
                        React.createElement("div", { className: "p-3 rounded-xl transition-colors shrink-0 " + (activeNiche.id === niche.id ? "bg-blue-500/20" : "bg-white/5") }, niche.icon),
                        React.createElement("span", { className: "font-semibold text-lg" }, niche.title)))); })),
                React.createElement("div", { className: "w-full lg:w-2/3 flex" },
                    React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
                        React.createElement(framer_motion_1.motion.div, { key: activeNiche.id, initial: { opacity: 0, scale: 0.98, y: 10 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.98, y: -10 }, transition: { duration: 0.3 }, className: "w-full h-full bg-gradient-to-br from-white/[0.04] to-black border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-xl relative overflow-hidden flex flex-col" },
                            React.createElement("div", { className: "absolute top-0 right-0 -mt-10 -mr-10 opacity-10 blur-xl scale-150 pointer-events-none" }, activeNiche.icon),
                            React.createElement("div", { className: "flex-1 flex flex-col relative z-10" },
                                React.createElement("h3", { className: "text-3xl md:text-4xl font-bold text-white mb-4" },
                                    activeNiche.title,
                                    " \u0130\u00E7in GEO"),
                                React.createElement("p", { className: "text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl" }, activeNiche.description),
                                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-10" },
                                    React.createElement("div", { className: "bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden group" },
                                        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" }),
                                        React.createElement("div", { className: "flex items-start gap-3 mb-4 relative z-10" },
                                            React.createElement("div", { className: "w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center shrink-0 border border-gray-700" },
                                                React.createElement(lucide_react_1.User, { className: "w-4 h-4 text-gray-400" })),
                                            React.createElement("div", null,
                                                React.createElement("p", { className: "text-gray-500 text-xs mb-1 font-medium bg-black px-2 py-0.5 rounded-full border border-white/5 inline-block" }, "Kullan\u0131c\u0131n\u0131n AI Aramas\u0131"),
                                                React.createElement("h4", { className: "font-bold text-white text-base mt-2" },
                                                    "\"",
                                                    activeNiche.userQuery,
                                                    "\""))),
                                        React.createElement("div", { className: "relative z-10 pl-11" },
                                            React.createElement("p", { className: "text-red-400/90 text-sm leading-relaxed border-l-2 border-red-500/20 pl-4 py-1" },
                                                React.createElement("span", { className: "font-bold text-red-500 block mb-1" }, "Cevaplarda Yoksunuz"),
                                                activeNiche.painPoint))),
                                    React.createElement("div", { className: "bg-blue-950/20 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden group" },
                                        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" }),
                                        React.createElement("div", { className: "flex items-start gap-3 mb-4 relative z-10" },
                                            React.createElement("div", { className: "w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center shrink-0 border border-blue-500/30" },
                                                React.createElement(lucide_react_1.Sparkles, { className: "w-4 h-4 text-blue-400" })),
                                            React.createElement("div", null,
                                                React.createElement("p", { className: "text-blue-400 text-xs mb-1 font-medium bg-blue-950 px-2 py-0.5 rounded-full border border-blue-500/20 inline-block" }, "seenby.io Etkisi"),
                                                React.createElement("h4", { className: "font-bold text-white text-base mt-2" }, "Bizim \u00C7\u00F6z\u00FCm\u00FCm\u00FCz"))),
                                        React.createElement("div", { className: "relative z-10 pl-11" },
                                            React.createElement("p", { className: "text-gray-300 text-sm leading-relaxed border-l-2 border-blue-500/30 pl-4 py-1" }, activeNiche.solution)))),
                                React.createElement("div", { className: "bg-black/40 border border-white/5 rounded-2xl p-6 lg:p-8 mt-auto" },
                                    React.createElement("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4" },
                                        React.createElement("div", null,
                                            React.createElement("h4", { className: "text-lg font-bold text-white mb-2" }, activeNiche.chartTitle),
                                            React.createElement("p", { className: "text-sm text-gray-500" }, activeNiche.chartSubtitle)),
                                        React.createElement("div", { className: "sm:text-right shrink-0" },
                                            React.createElement("p", { className: "text-xs text-blue-400 uppercase tracking-widest mb-1 font-bold" }, "Beklenen ROI"),
                                            React.createElement("p", { className: "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" }, activeNiche.metrics))),
                                    renderChart(activeNiche))))))))));
}
exports["default"] = Niches;
