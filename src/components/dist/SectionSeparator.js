"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
function SectionSeparator() {
    return (React.createElement("div", { className: "w-full relative h-16 sm:h-24 flex justify-center items-center overflow-hidden bg-transparent" },
        React.createElement("div", { className: "absolute w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" }),
        React.createElement(framer_motion_1.motion.div, { className: "absolute h-px w-1/3 max-w-[400px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)]", initial: { left: "-50%" }, animate: { left: "150%" }, transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5
            } }),
        React.createElement("div", { className: "relative z-10 w-2 h-2 rounded-full bg-[#0a0a0a] border border-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.3)]" })));
}
exports["default"] = SectionSeparator;
