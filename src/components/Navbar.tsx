"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-bold text-2xl tracking-tighter text-white">
              seenby<span className="text-blue-500">.io</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#nasil-calisir" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Nasıl Çalışır?</a>
            <a href="#sektorler" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Sektörler</a>
            <a href="#fiyatlar" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Paketler</a>
            <a href="#blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Blog</a>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openContact'))} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">İletişim</button>
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openContact'))}
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            >
              Ücretsiz Analiz
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
