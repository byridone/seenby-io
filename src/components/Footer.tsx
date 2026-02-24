"use client";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>© 2026 seenby.io - Generative Engine Optimization</p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openDictionary'))} className="hover:text-white transition-colors">AI Arama Sözlüğü</button>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openSeoVsGeo'))} className="hover:text-white transition-colors">SEO vs GEO Karşılaştırması</button>
                    <a href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</a>
                    <a href="/hizmet-sartlari" className="hover:text-white transition-colors">Hizmet Şartları</a>
                    <a href="/guvenlik" className="hover:text-white transition-colors">Güvenlik</a>
                </div>
            </div>
        </footer>
    );
}
