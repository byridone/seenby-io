"use client";
"use strict";
exports.__esModule = true;
function Footer() {
    return (React.createElement("footer", { className: "py-8 border-t border-white/10 mt-20" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500" },
            React.createElement("p", null, "\u00A9 2026 seenby.io - Generative Engine Optimization"),
            React.createElement("div", { className: "flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0" },
                React.createElement("button", { onClick: function () { return window.dispatchEvent(new CustomEvent('openDictionary')); }, className: "hover:text-white transition-colors" }, "AI Arama S\u00F6zl\u00FC\u011F\u00FC"),
                React.createElement("button", { onClick: function () { return window.dispatchEvent(new CustomEvent('openSeoVsGeo')); }, className: "hover:text-white transition-colors" }, "SEO vs GEO Kar\u015F\u0131la\u015Ft\u0131rmas\u0131"),
                React.createElement("a", { href: "/gizlilik-politikasi", className: "hover:text-white transition-colors" }, "Gizlilik Politikas\u0131"),
                React.createElement("a", { href: "/hizmet-sartlari", className: "hover:text-white transition-colors" }, "Hizmet \u015Eartlar\u0131"),
                React.createElement("a", { href: "/guvenlik", className: "hover:text-white transition-colors" }, "G\u00FCvenlik")))));
}
exports["default"] = Footer;
