"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function DynamicHeroGraphic() {
    var _a = react_1.useState(0), step = _a[0], setStep = _a[1];
    // Sequence: 
    // 0: Search typing 
    // 1: Voice speaking
    // 2: Chatbot answering
    // 3: Knowledge graph rising (12 weeks)
    // 4: Brand Authority explode (Su kabı taşıyor)
    react_1.useEffect(function () {
        // Hızlıca patlama noktasına (step 4) gelmesi için süreleri kısalttık
        // Patlama (step 4) anını ise daha uzun süre ekranda tutuyoruz
        var timeout = setTimeout(function () {
            setStep(function (prev) { return (prev + 1) % 5; });
        }, step === 4 ? 5000 : 1500);
        return function () { return clearTimeout(timeout); };
    }, [step]);
    return (React.createElement("div", { className: "relative w-full h-[400px] lg:h-[500px] max-w-5xl mx-auto flex items-center justify-center" },
        React.createElement("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: "0 0 1000 500", fill: "none", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "none" },
            React.createElement("path", { d: "M 150 100 Q 300 100 500 250", stroke: step === 0 || step === 4 ? "#3b82f6" : "#1f2937", strokeWidth: step === 0 || step === 4 ? "4" : "2", strokeDasharray: "6 6", className: "transition-all duration-1000" }),
            React.createElement("path", { d: "M 150 400 Q 300 400 500 250", stroke: step === 1 || step === 4 ? "#8b5cf6" : "#1f2937", strokeWidth: step === 1 || step === 4 ? "4" : "2", strokeDasharray: "6 6", className: "transition-all duration-1000" }),
            React.createElement("path", { d: "M 850 100 Q 700 100 500 250", stroke: step === 2 || step === 4 ? "#10b981" : "#1f2937", strokeWidth: step === 2 || step === 4 ? "4" : "2", strokeDasharray: "6 6", className: "transition-all duration-1000" }),
            React.createElement("path", { d: "M 850 400 Q 700 400 500 250", stroke: step === 3 || step === 4 ? "#f59e0b" : "#1f2937", strokeWidth: step === 3 || step === 4 ? "4" : "2", strokeDasharray: "6 6", className: "transition-all duration-1000" }),
            (step === 0 || step === 4) && React.createElement("circle", { r: "6", fill: "#60a5fa" },
                React.createElement("animateMotion", { dur: "1.5s", repeatCount: "indefinite", path: "M 150 100 Q 300 100 500 250" })),
            (step === 1 || step === 4) && React.createElement("circle", { r: "6", fill: "#a78bfa" },
                React.createElement("animateMotion", { dur: "1.5s", repeatCount: "indefinite", path: "M 150 400 Q 300 400 500 250" })),
            (step === 2 || step === 4) && React.createElement("circle", { r: "6", fill: "#34d399" },
                React.createElement("animateMotion", { dur: "1.5s", repeatCount: "indefinite", path: "M 850 100 Q 700 100 500 250" })),
            (step === 3 || step === 4) && React.createElement("circle", { r: "6", fill: "#fbbf24" },
                React.createElement("animateMotion", { dur: "1.5s", repeatCount: "indefinite", path: "M 850 400 Q 700 400 500 250" }))),
        React.createElement("div", { className: "absolute left-[15%] top-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 lg:gap-4 transition-transform duration-500 z-10 " + (step === 0 || step === 4 ? "scale-110" : "scale-100 opacity-50") },
            React.createElement("div", { className: "w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-2 shadow-lg transition-colors duration-500 " + (step === 0 || step === 4 ? "border-blue-500 bg-blue-500/20 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.5)]" : "border-gray-700 bg-[#0a0f18] text-gray-400") },
                React.createElement(lucide_react_1.Search, { className: "w-6 h-6 lg:w-7 lg:h-7" })),
            React.createElement("span", { className: "text-xs lg:text-sm text-gray-400 font-mono whitespace-nowrap tracking-wider" }, "AI ARAMA"),
            React.createElement(framer_motion_1.AnimatePresence, null, step === 0 && (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, className: "absolute -top-12 lg:-top-16 whitespace-nowrap bg-black/80 border border-blue-500/30 text-blue-300 text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl flex gap-1 shadow-[0_10px_30px_rgba(0,102,255,0.2)]" },
                React.createElement(framer_motion_1.motion.span, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 } }, "En"),
                React.createElement(framer_motion_1.motion.span, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 } }, "iyi"),
                React.createElement(framer_motion_1.motion.span, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 } }, "se\u00E7enek"),
                React.createElement(framer_motion_1.motion.span, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.8 } }, "nedir?"),
                React.createElement("span", { className: "animate-pulse" }, "_"))))),
        React.createElement("div", { className: "absolute left-[15%] top-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 lg:gap-4 transition-transform duration-500 z-10 " + (step === 1 || step === 4 ? "scale-110" : "scale-100 opacity-50") },
            React.createElement("div", { className: "w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-2 shadow-lg transition-colors duration-500 " + (step === 1 || step === 4 ? "border-purple-500 bg-purple-500/20 text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.5)]" : "border-gray-700 bg-[#0a0f18] text-gray-400") },
                React.createElement(lucide_react_1.Mic, { className: "w-6 h-6 lg:w-7 lg:h-7" })),
            React.createElement("span", { className: "text-xs lg:text-sm text-gray-400 font-mono whitespace-nowrap tracking-wider" }, "SESL\u0130 AS\u0130STAN"),
            React.createElement(framer_motion_1.AnimatePresence, null, step === 1 && (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, className: "absolute -bottom-14 lg:-bottom-20 whitespace-nowrap bg-black/80 border border-purple-500/30 flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-3 rounded-full shadow-[0_10px_30px_rgba(168,85,247,0.2)]" },
                React.createElement("span", { className: "w-1.5 h-3 lg:h-4 bg-purple-400 rounded-full animate-pulse" }),
                React.createElement("span", { className: "w-1.5 h-5 lg:h-6 bg-purple-400 rounded-full animate-pulse delay-75" }),
                React.createElement("span", { className: "w-1.5 h-2 lg:h-3 bg-purple-400 rounded-full animate-pulse delay-150" }),
                React.createElement("span", { className: "text-purple-300 text-xs lg:text-sm ml-2" }, "\"Bana tavsiye et...\""))))),
        React.createElement("div", { className: "absolute left-[85%] top-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 lg:gap-4 transition-transform duration-500 z-10 " + (step === 2 || step === 4 ? "scale-110" : "scale-100 opacity-50") },
            React.createElement("div", { className: "w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-2 shadow-lg transition-colors duration-500 " + (step === 2 || step === 4 ? "border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.5)]" : "border-gray-700 bg-[#0a0f18] text-gray-400") },
                React.createElement(lucide_react_1.MessageSquare, { className: "w-6 h-6 lg:w-7 lg:h-7" })),
            React.createElement("span", { className: "text-xs lg:text-sm text-gray-400 font-mono whitespace-nowrap tracking-wider" }, "AI CHATBOT"),
            React.createElement(framer_motion_1.AnimatePresence, null, step === 2 && (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0 }, className: "absolute -top-12 lg:-top-16 whitespace-nowrap bg-black/80 border border-emerald-500/30 text-emerald-300 text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl flex items-center gap-1.5 lg:gap-2 shadow-[0_10px_30px_rgba(16,185,129,0.2)]" },
                React.createElement("span", { className: "w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-emerald-400 animate-bounce" }),
                React.createElement("span", { className: "w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-emerald-400 animate-bounce delay-75" }),
                React.createElement("span", { className: "w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-emerald-400 animate-bounce delay-150" }),
                React.createElement("span", { className: "ml-1.5 font-medium" }, "\u015Eu markay\u0131 inceleyin:"))))),
        React.createElement("div", { className: "absolute left-[85%] top-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 lg:gap-4 transition-transform duration-500 z-10 " + (step === 3 || step === 4 ? "scale-110" : "scale-100 opacity-50") },
            React.createElement("div", { className: "w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-2 shadow-lg transition-colors duration-500 " + (step === 3 || step === 4 ? "border-orange-500 bg-orange-500/20 text-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.5)]" : "border-gray-700 bg-[#0a0f18] text-gray-400") },
                React.createElement(lucide_react_1.BarChart, { className: "w-6 h-6 lg:w-7 lg:h-7" })),
            React.createElement("span", { className: "text-xs lg:text-sm text-gray-400 font-mono whitespace-nowrap tracking-wider" }, "B\u0130LG\u0130 GRAF\u0130\u011E\u0130")),
        React.createElement("div", { className: "absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center" },
            React.createElement("div", { className: "relative mb-3 lg:mb-8" },
                React.createElement(framer_motion_1.AnimatePresence, null, step === 4 && (React.createElement(React.Fragment, null,
                    React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: [0, 0.8, 0], scale: [1, 2] }, transition: { duration: 1, repeat: Infinity }, className: "absolute inset-0 bg-blue-500 rounded-full blur-md" }),
                    React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 1 }, animate: { opacity: [0, 1, 0], scale: [1, 2.5] }, transition: { duration: 1.5, repeat: Infinity, delay: 0.2 }, className: "absolute inset-0 border-2 border-blue-400 rounded-full" }),
                    React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 1 }, animate: { opacity: [0, 1, 0], scale: [1, 3] }, transition: { duration: 2, repeat: Infinity, delay: 0.4 }, className: "absolute inset-0 border border-blue-300 rounded-full" })))),
                React.createElement("div", { className: "relative z-10 w-32 h-32 lg:w-44 lg:h-44 bg-gradient-to-br from-gray-900 to-[#0a0f18] rounded-full flex items-center justify-center border-[3px] overflow-hidden shadow-2xl transition-colors duration-1000 " + (step === 4 ? "border-blue-400 shadow-[0_0_80px_rgba(59,130,246,0.6)]" : "border-gray-800") },
                    React.createElement(framer_motion_1.motion.div, { className: "absolute left-1/2 top-1/2 -ml-32 -mt-32 w-64 h-64 lg:-ml-48 lg:-mt-48 lg:w-96 lg:h-96 bg-blue-500 rounded-full blur-[8px] opacity-90 mix-blend-screen", initial: { scale: 0 }, animate: {
                            scale: step === 0 ? 0.1 : step === 1 ? 0.4 : step === 2 ? 0.7 : step === 3 ? 0.95 : 1.5
                        }, transition: { duration: 1.2, type: "spring", bounce: 0.4 } }),
                    React.createElement("div", { className: "relative z-10 font-black tracking-widest uppercase transition-colors duration-1000 text-lg lg:text-2xl mix-blend-screen " + (step === 4 ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-gray-400") }, "MARKA"))),
            React.createElement("h3", { className: "text-lg lg:text-2xl font-black tracking-widest uppercase transition-colors duration-500 " + (step === 4 ? "text-white" : "text-gray-500") }, "G\u00F6r\u00FCn\u00FCrl\u00FCk"),
            React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" }, step === 4 ? (React.createElement(framer_motion_1.motion.span, { initial: { opacity: 0, y: 5 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, className: "text-xs lg:text-sm text-blue-400 font-bold mt-2 lg:mt-3 tracking-widest font-mono whitespace-nowrap drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" }, "OTOR\u0130TE \u0130N\u015EA ED\u0130LD\u0130")) : (React.createElement(framer_motion_1.motion.span, { initial: { opacity: 0, y: 5 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, className: "text-xs lg:text-sm text-gray-500 tracking-[0.2em] mt-2 lg:mt-3 font-mono whitespace-nowrap" },
                "B\u0130LG\u0130 AKI\u015EI: ",
                step * 25,
                "%")))),
        React.createElement(framer_motion_1.AnimatePresence, null, step === 4 && (React.createElement("div", { className: "absolute inset-0 pointer-events-none z-20" }, [
            { name: "ChatGPT", top: "8%", left: "30%", delay: 0.1, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_15px_rgba(52,211,153,0.3)]" },
            { name: "Perplexity", top: "10%", left: "70%", delay: 0.3, color: "text-orange-400 border-orange-500/30 bg-orange-500/10 shadow-[0_0_15px_rgba(251,146,60,0.3)]" },
            { name: "Gemini", top: "45%", left: "5%", delay: 0.5, color: "text-blue-400 border-blue-500/30 bg-blue-500/10 shadow-[0_0_15px_rgba(96,165,250,0.3)]" },
            { name: "Claude", top: "45%", left: "95%", delay: 0.2, color: "text-purple-400 border-purple-500/30 bg-purple-500/10 shadow-[0_0_15px_rgba(192,132,252,0.3)]" },
            { name: "Copilot", top: "70%", left: "5%", delay: 0.4, color: "text-green-400 border-green-500/30 bg-green-500/10 shadow-[0_0_15px_rgba(74,222,128,0.3)]" },
            { name: "Meta AI", top: "70%", left: "95%", delay: 0.6, color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.3)]" },
            { name: "AI Overviews", top: "90%", left: "50%", delay: 0.3, color: "text-red-400 border-red-500/30 bg-red-500/10 shadow-[0_0_15px_rgba(248,113,113,0.3)]" },
            { name: "DeepSeek", top: "12%", left: "50%", delay: 0.7, color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10 shadow-[0_0_15px_rgba(250,204,21,0.3)]" },
        ].map(function (model, i) { return (React.createElement(framer_motion_1.motion.div, { key: model.name, initial: { opacity: 0, scale: 0.5, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.8, y: -20 }, transition: {
                duration: 0.5,
                delay: model.delay,
                ease: "easeOut"
            }, className: "absolute px-3 py-1.5 rounded-full border text-[10px] md:text-sm font-bold tracking-wider whitespace-nowrap backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 " + model.color, style: { top: model.top, left: model.left } }, model.name)); }))))));
}
exports["default"] = DynamicHeroGraphic;
