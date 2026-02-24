"use client";
import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("openContact", handleOpen);
        return () => window.removeEventListener("openContact", handleOpen);
    }, []);

    // Also close on ESC
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        if (isOpen) window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl z-10"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">İletişime Geçin</h2>
                            <p className="text-gray-400 text-sm">
                                Projenizden bahsedin, size özel bir strateji görüşmesi planlayalım.
                            </p>
                        </div>

                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-2xl text-center flex flex-col items-center gap-4"
                            >
                                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                    <Send className="w-8 h-8 text-emerald-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Talebiniz Alındı!</h3>
                                    <p className="text-sm">En kısa sürede sizinle iletişime geçeceğiz.</p>
                                </div>
                            </motion.div>
                        ) : (
                            <form className="space-y-5" onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.currentTarget;
                                const formData = new FormData(form);
                                const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

                                if (!accessKey || accessKey === "BURAYA_WEB3FORMS_KEY_GELECEK") {
                                    alert("Form gönderilemiyor: API Anahtarı eksik. Lütfen site sahibinin .env dosyasını yapılandırmasını bekleyin.");
                                    return;
                                }

                                formData.append("access_key", accessKey);
                                formData.append("subject", `[seenby.io] Yeni Müşteri: ${formData.get("name")}`);
                                formData.append("from_name", "seenby.io İletişim Platformu");

                                setStatus("loading");
                                try {
                                    const response = await fetch("https://api.web3forms.com/submit", {
                                        method: "POST",
                                        body: formData
                                    });

                                    const data = await response.json();
                                    if (data.success) {
                                        setStatus("success");
                                        setTimeout(() => {
                                            setIsOpen(false);
                                            setTimeout(() => setStatus("idle"), 500);
                                        }, 4000);
                                    } else {
                                        setStatus("error");
                                        alert("Gönderim başarısız oldu, lütfen daha sonra tekrar deneyin.");
                                    }
                                } catch (error) {
                                    setStatus("error");
                                    alert("Sunucu ile bağlantı kurulamadı.");
                                }
                            }}>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">İSİM</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Adınız"
                                        className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">E-POSTA</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="siz@sirket.com"
                                        className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">ŞİRKET</label>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Şirketiniz"
                                        className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">MESAJ (İSTEĞE BAĞLI)</label>
                                    <textarea
                                        name="message"
                                        placeholder="Hedeflerinizden bahsedin..."
                                        rows={4}
                                        className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className={`w-full bg-white text-black font-bold py-4 rounded-xl mt-6 flex items-center justify-center gap-2 transition-colors
                                        ${status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-200 active:scale-[0.98]"}`}
                                >
                                    {status === "loading" ? "GÖNDERİLİYOR..." : "MESAJ GÖNDER"}
                                    {status !== "loading" && <Send className="w-4 h-4 ml-1" />}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
