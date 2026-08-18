import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { KurikulumSection } from './components/KurikulumSection';
import { SebaranBapekomSection } from './components/SebaranBapekomSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#FFB800] selection:text-[#001A40]">
      {/* Top Header */}
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection onNavigate={scrollToSection} />

        {/* Kurikulum & Modul CKPS T.A. 2026 */}
        <KurikulumSection />

        {/* Rencana Sebaran Bapekom 2026 */}
        <SebaranBapekomSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
