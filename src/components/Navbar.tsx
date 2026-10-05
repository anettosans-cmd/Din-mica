import React, { useState, useEffect } from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { Menu, X, MessageCircle, Share2, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenShare
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'solucoes', label: 'Soluções' },
    { id: 'proposito', label: 'Propósito' },
    { id: 'missao-visao', label: 'Missão & Visão' },
    { id: 'valores', label: 'Valores' },
    { id: 'contato', label: 'Contato' }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-white/70 backdrop-blur-xs border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('hero');
          }}
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-slate-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-700 via-sky-600 to-blue-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-slate-900 to-blue-800">
            {COMPANY_DATA.brandName}
          </span>
        </a>

        {/* Zone 2: Clean text navigation links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`relative py-1 transition-colors duration-200 hover:text-blue-700 whitespace-nowrap ${
                  isActive ? 'text-blue-700 font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenShare}
            title="Compartilhar Biosite"
            className="p-2 sm:px-3 sm:py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Share2 className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">Compartilhar</span>
          </button>

          <a
            href={COMPANY_DATA.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fale Conosco</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-xl transition-colors ml-1"
            aria-label="Abrir Menu de Navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-5 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3">
              Navegação Rápida
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-left text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={COMPANY_DATA.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {COMPANY_DATA.contact.displayPhone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShare();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4 text-blue-600" />
                <span>QR Code & Salvar Contato</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
