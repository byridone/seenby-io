"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var framer_motion_1 = require("framer-motion");
function ContactModal() {
    var _this = this;
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = react_1.useState("idle"), status = _b[0], setStatus = _b[1];
    react_1.useEffect(function () {
        var handleOpen = function () { return setIsOpen(true); };
        window.addEventListener("openContact", handleOpen);
        return function () { return window.removeEventListener("openContact", handleOpen); };
    }, []);
    // Also close on ESC
    react_1.useEffect(function () {
        var handleKeyDown = function (e) {
            if (e.key === "Escape")
                setIsOpen(false);
        };
        if (isOpen)
            window.addEventListener("keydown", handleKeyDown);
        return function () { return window.removeEventListener("keydown", handleKeyDown); };
    }, [isOpen]);
    return (React.createElement(framer_motion_1.AnimatePresence, null, isOpen && (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4" },
        React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: function () { return setIsOpen(false); }, className: "absolute inset-0 bg-black/80 backdrop-blur-sm" }),
        React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.95, y: 10 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 10 }, transition: { duration: 0.2 }, className: "relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl z-10" },
            React.createElement("button", { onClick: function () { return setIsOpen(false); }, className: "absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/5" },
                React.createElement(lucide_react_1.X, { className: "w-5 h-5" })),
            React.createElement("div", { className: "mb-8" },
                React.createElement("h2", { className: "text-2xl font-bold text-white mb-2" }, "\u0130leti\u015Fime Ge\u00E7in"),
                React.createElement("p", { className: "text-gray-400 text-sm" }, "Projenizden bahsedin, size \u00F6zel bir strateji g\u00F6r\u00FC\u015Fmesi planlayal\u0131m.")),
            status === "success" ? (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-2xl text-center flex flex-col items-center gap-4" },
                React.createElement("div", { className: "w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center" },
                    React.createElement(lucide_react_1.Send, { className: "w-8 h-8 text-emerald-500" })),
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-xl font-bold mb-2" }, "Talebiniz Al\u0131nd\u0131!"),
                    React.createElement("p", { className: "text-sm" }, "En k\u0131sa s\u00FCrede sizinle ileti\u015Fime ge\u00E7ece\u011Fiz.")))) : (React.createElement("form", { className: "space-y-5", onSubmit: function (e) { return __awaiter(_this, void 0, void 0, function () {
                    var form, formData, accessKey, response, data, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                e.preventDefault();
                                form = e.currentTarget;
                                formData = new FormData(form);
                                accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
                                if (!accessKey || accessKey === "BURAYA_WEB3FORMS_KEY_GELECEK") {
                                    alert("Form gönderilemiyor: API Anahtarı eksik. Lütfen site sahibinin .env dosyasını yapılandırmasını bekleyin.");
                                    return [2 /*return*/];
                                }
                                formData.append("access_key", accessKey);
                                formData.append("subject", "[seenby.io] Yeni M\u00FC\u015Fteri: " + formData.get("name"));
                                formData.append("from_name", "seenby.io İletişim Platformu");
                                setStatus("loading");
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 4, , 5]);
                                return [4 /*yield*/, fetch("https://api.web3forms.com/submit", {
                                        method: "POST",
                                        body: formData
                                    })];
                            case 2:
                                response = _a.sent();
                                return [4 /*yield*/, response.json()];
                            case 3:
                                data = _a.sent();
                                if (data.success) {
                                    setStatus("success");
                                    setTimeout(function () {
                                        setIsOpen(false);
                                        setTimeout(function () { return setStatus("idle"); }, 500);
                                    }, 4000);
                                }
                                else {
                                    setStatus("error");
                                    alert("Gönderim başarısız oldu, lütfen daha sonra tekrar deneyin.");
                                }
                                return [3 /*break*/, 5];
                            case 4:
                                error_1 = _a.sent();
                                setStatus("error");
                                alert("Sunucu ile bağlantı kurulamadı.");
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); } },
                React.createElement("div", { className: "space-y-2" },
                    React.createElement("label", { className: "text-[10px] font-mono text-gray-500 uppercase tracking-wider" }, "\u0130S\u0130M"),
                    React.createElement("input", { type: "text", name: "name", placeholder: "Ad\u0131n\u0131z", className: "w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all", required: true })),
                React.createElement("div", { className: "space-y-2" },
                    React.createElement("label", { className: "text-[10px] font-mono text-gray-500 uppercase tracking-wider" }, "E-POSTA"),
                    React.createElement("input", { type: "email", name: "email", placeholder: "siz@sirket.com", className: "w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all", required: true })),
                React.createElement("div", { className: "space-y-2" },
                    React.createElement("label", { className: "text-[10px] font-mono text-gray-500 uppercase tracking-wider" }, "\u015E\u0130RKET"),
                    React.createElement("input", { type: "text", name: "company", placeholder: "\u015Eirketiniz", className: "w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all", required: true })),
                React.createElement("div", { className: "space-y-2" },
                    React.createElement("label", { className: "text-[10px] font-mono text-gray-500 uppercase tracking-wider" }, "MESAJ (\u0130STE\u011EE BA\u011ELI)"),
                    React.createElement("textarea", { name: "message", placeholder: "Hedeflerinizden bahsedin...", rows: 4, className: "w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all resize-none" })),
                React.createElement("button", { type: "submit", disabled: status === "loading", className: "w-full bg-white text-black font-bold py-4 rounded-xl mt-6 flex items-center justify-center gap-2 transition-colors\n                                        " + (status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-200 active:scale-[0.98]") },
                    status === "loading" ? "GÖNDERİLİYOR..." : "MESAJ GÖNDER",
                    status !== "loading" && React.createElement(lucide_react_1.Send, { className: "w-4 h-4 ml-1" })))))))));
}
exports["default"] = ContactModal;
