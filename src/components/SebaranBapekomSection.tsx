import React, { useState } from 'react';
import { BAPEKOM_UNITS } from '../data/cmrcData';
import { BapekomUnit } from '../types';
import { MapPin, Phone, Building, CheckCircle2, ChevronRight, Navigation, Globe } from 'lucide-react';

export const SebaranBapekomSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [activeBapekom, setActiveBapekom] = useState<BapekomUnit | null>(null);

  const regionOptions = ['all', 'Sumatera', 'Jawa', 'Kalimantan', 'Sulawesi', 'Papua'];

  const filteredUnits = BAPEKOM_UNITS.filter((unit) => {
    return selectedRegion === 'all' || unit.regionGroup === selectedRegion;
  });

  return (
    <section id="sebaran" className="py-16 lg:py-24 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#002B66] font-bold text-xs uppercase tracking-widest bg-[#002B66]/10 px-3 py-1 rounded-full border border-[#002B66]/20">
            Jaringan Pelaksanaan T.A. 2026
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001A40] mt-3">
            Rencana Sebaran Balai Pengembangan Kompetensi (BAPEKOM)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Penyelenggaraan pelatihan kompetensi tersebar di 9 wilayah Bapekom di seluruh wilayah Indonesia.
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {regionOptions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedRegion === region
                  ? 'bg-[#002B66] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {region === 'all' ? 'Seluruh Indonesia' : `Wilayah ${region}`}
            </button>
          ))}
        </div>

        {/* Bapekom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between group hover:border-[#002B66]"
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#002B66] text-[#FFB800] rounded-xl flex items-center justify-center font-black text-sm shadow-inner">
                    {unit.code.replace('BAPEKOM-', '')}
                  </div>
                  <span className="text-[11px] font-bold bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-lg">
                    {unit.plannedTrainings2026} Kelas T.A. 2026
                  </span>
                </div>

                <h3 className="font-extrabold text-lg text-slate-900 mb-1 group-hover:text-[#002B66] transition">
                  {unit.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#002B66]" /> {unit.location}, {unit.province}
                </div>

                {/* Address & Phone */}
                <p className="text-xs text-slate-600 mb-4 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {unit.address}
                </p>

                {/* Coverage Areas */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1.5">
                    Wilayah Layanan ({unit.coverageAreas.length} Provinsi)
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {unit.coverageAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium border border-slate-200/60"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveBapekom(unit)}
                className="w-full bg-slate-100 hover:bg-[#002B66] hover:text-white text-[#002B66] font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer mt-2"
              >
                Lihat Detail Layanan <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Modal view for selected Bapekom */}
        {activeBapekom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#002B66] text-[#FFB800] rounded-xl flex items-center justify-center font-black text-sm">
                    {activeBapekom.code.replace('BAPEKOM-', '')}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900">{activeBapekom.name}</h3>
                    <p className="text-xs text-slate-500">{activeBapekom.location}, {activeBapekom.province}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveBapekom(null)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div>
                  <span className="font-bold text-slate-900 block mb-1">Alamat Kantor:</span>
                  <p className="bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed">
                    {activeBapekom.address}
                  </p>
                </div>

                {activeBapekom.phone && (
                  <div className="flex items-center gap-2 text-slate-800">
                    <Phone className="w-4 h-4 text-[#002B66]" />
                    <span className="font-semibold">{activeBapekom.phone}</span>
                  </div>
                )}

                <div>
                  <span className="font-bold text-slate-900 block mb-1">Cakupan Wilayah Layanan:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeBapekom.coverageAreas.map((area, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-900 border border-blue-200 px-2 py-1 rounded font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block mb-1">Program Unggulan T.A. 2026:</span>
                  <ul className="space-y-1.5">
                    {activeBapekom.featuredPrograms.map((prog, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-medium">{prog}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveBapekom(null)}
                  className="bg-[#002B66] text-white font-bold text-xs px-5 py-2 rounded-lg"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
