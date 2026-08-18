import React from 'react';
import { BookOpen, MapPin, Sparkles, GraduationCap, Building2 } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#002B66] via-[#001A40] to-slate-900 text-white py-16 sm:py-24 px-4 overflow-hidden border-b border-white/10">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFB800_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-[#FFB800] uppercase tracking-widest mb-6">
          <Sparkles className="w-4 h-4 animate-pulse text-[#FFB800]" />
          Portal Informasi Kurikulum & Modul CKPS T.A. 2026
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Portal Resmi <span className="text-[#FFB800]">Kurmod CKPS 2026</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed mb-8">
          Pusat Pengembangan Kompetensi Sumber Daya Air, Cipta Karya dan Prasarana Strategis (Pusbangkom ACP)
          <br className="hidden sm:inline" /> Kementerian Pekerjaan Umum T.A. 2026
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => onNavigate('kurmod')}
            className="bg-[#FFB800] hover:bg-amber-400 text-[#001A40] font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <BookOpen className="w-5 h-5" /> Explore Modul & Kurikulum CKPS
          </button>
          <button
            onClick={() => onNavigate('sebaran')}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm px-6 py-3.5 rounded-xl backdrop-blur-sm transition flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <MapPin className="w-5 h-5 text-[#FFB800]" /> Sebaran Bapekom 2026
          </button>
        </div>

        {/* Quick Highlights Counter Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4 text-left">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-400/20 rounded-lg text-[#FFB800]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">33</div>
                <div className="text-xs text-slate-300 font-medium">Program Pelatihan</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-400/20 rounded-lg text-blue-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">9</div>
                <div className="text-xs text-slate-300 font-medium">Wilayah Bapekom</div>
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-400/20 rounded-lg text-emerald-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">4</div>
                <div className="text-xs text-slate-300 font-medium">Metode Pelaksanaan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
