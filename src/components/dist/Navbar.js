"use client";
"use strict";
exports.__esModule = true;
function Navbar() {
    return (React.createElement("nav", { className: "fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "flex justify-between items-center h-20" },
                React.createElement("div", { className: "flex-shrink-0 flex items-center" },
                    React.createElement("a", { href: "#", className: "font-bold text-2xl tracking-tighter text-white" },
                        "seenby",
                        React.createElement("span", { className: "text-blue-500" }, ".io"))),
                React.createElement("div", { className: "hidden md:flex space-x-8" },
                    React.createElement("a", { href: "#nasil-calisir", className: "text-gray-300 hover:text-white transition-colors text-sm font-medium" }, "Nas\u0131l \u00C7al\u0131\u015F\u0131r?"),
                    React.createElement("a", { href: "#sektorler", className: "text-gray-300 hover:text-white transition-colors text-sm font-medium" }, "Sekt\u00F6rler"),
                    React.createElement("a", { href: "#fiyatlar", className: "text-gray-300 hover:text-white transition-colors text-sm font-medium" }, "Paketler"),
                    React.createElement("a", { href: "#blog", className: "text-gray-300 hover:text-white transition-colors text-sm font-medium" }, "Blog"),
                    React.createElement("button", { onClick: function () { return window.dispatchEvent(new CustomEvent('openContact')); }, className: "text-gray-300 hover:text-white transition-colors text-sm font-medium" }, "\u0130leti\u015Fim")),
                React.createElement("div", { className: "hidden md:flex" },
                    React.createElement("button", { onClick: function () { return window.dispatchEvent(new CustomEvent('openContact')); }, className: "bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]" }, "\u00DCcretsiz Analiz"))))));
}
exports["default"] = Navbar;
