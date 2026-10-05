import React, { useState, useEffect } from 'react';
import { COMPANY_DATA } from './data/companyData';
import { OfficialLogo } from './components/OfficialLogo';
import { Social3DBadges } from './components/Social3DBadges';
import { SolutionsGrid } from './components/SolutionsGrid';
import { ContactSection } from './components/ContactSection';
import { Navbar } from './components/Navbar';
import { CarouselNav, SectionMeta } from './components/CarouselNav';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ShareModal } from './components/ShareModal';
import { Footer } from './components/Footer';
import { 
  ArrowDown, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Target, 
  Compass, 
  Eye, 
  Lightbulb, 
  ExternalLink,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Building,
  Tractor
} from 'lucide-react';

const SECTIONS: SectionMeta[] = [
  { id: 'hero', label: 'Início', index: '01' },
  { id: 'redes', label: 'Canais Digitais', index: '02' },
  { id: 'sobre', label: 'Sobre a Dinâmica', index: '03' },
  { id: 'solucoes', label: 'Soluções Digitais', index: '04' },
  { id: 'proposito', label: 'Propósito', index: '05' },
  { id: 'missao-visao', label: 'Missão & Visão', index: '06' },
  { id: 'valores', label: 'Nossos Valores', index: '07' },
  { id: 'contato', label: 'Contato & Avaliação', index: '08' }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.2
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation support for vertical carousel (Up / Down)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown'].includes(e.key)) {
        const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
        if (currentIndex < SECTIONS.length - 1) {
          e.preventDefault();
          scrollToSection(SECTIONS[currentIndex + 1].id);
        }
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
        if (currentIndex > 0) {
          e.preventDefault();
          scrollToSection(SECTIONS[currentIndex - 1].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white relative">
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenShare={() => setIsShareModalOpen(true)}
      />

      {/* Vertical Carousel Section Indicator (Desktop side dots) */}
      <CarouselNav
        sections={SECTIONS}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Floating WhatsApp for Fast Contact */}
      <FloatingWhatsApp />

      {/* Share / Digital Card Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* ========================================================================= */}
      {/* 1. SEÇÃO HERO - PRIMEIRA TELA                                             */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial from-blue-50/50 via-white to-white"
      >
        {/* Subtle luminous ambient accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-200/30 via-blue-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto my-auto text-center flex flex-col items-center justify-center">
          {/* Official Large Logo with transparent background and light reflection */}
          <OfficialLogo size="hero" showTagline={true} />

          {/* Presentation subtext */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {COMPANY_DATA.heroPitch}
          </p>

          {/* Founder & Experience Highlight Badge */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800">
              <Award className="w-4 h-4 text-blue-600" />
              <span>{COMPANY_DATA.founder.experienceText}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span>Fundador:</span>
              <strong className="text-slate-900">{COMPANY_DATA.founder.name}</strong>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Marechal Floriano / ES</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary CTA - FALE CONOSCO (WhatsApp) */}
            <a
              href={COMPANY_DATA.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base shadow-[0_12px_28px_rgba(2,132,199,0.35)] flex items-center justify-center gap-2.5 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>FALE CONOSCO</span>
            </a>

            {/* Secondary CTA - CONHEÇA NOSSAS SOLUÇÕES */}
            <button
              onClick={() => scrollToSection('solucoes')}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-xs hover:border-blue-300 flex items-center justify-center gap-2 transition-all"
            >
              <span>CONHEÇA NOSSAS SOLUÇÕES</span>
              <ChevronDown className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator at bottom */}
        <div className="text-center pt-6">
          <button
            onClick={() => scrollToSection('redes')}
            className="group inline-flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors"
            aria-label="Rolar para a próxima seção"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 group-hover:text-blue-600">
              Role para explorar
            </span>
            <div className="w-7 h-11 rounded-full border-2 border-slate-300 group-hover:border-blue-500 flex items-start justify-center p-1 transition-colors">
              <span className="w-1.5 h-2.5 bg-blue-600 rounded-full animate-bounce mt-1" />
            </div>
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SEÇÃO REDES SOCIAIS E CONTATO (CANAIS DIGITAIS)                        */}
      {/* ========================================================================= */}
      <section
        id="redes"
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-t border-slate-100 flex flex-col justify-center min-h-[90vh]"
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Canais Oficiais</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conecte-se com a Dinâmica
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Acesse nossas redes sociais, fale diretamente com nossa equipe ou avalie nossa atuação no Google.
          </p>

          {/* 3D High Relief Official Badges */}
          <div className="mt-10">
            <Social3DBadges />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SEÇÃO SOBRE A DINÂMICA                                                 */}
      {/* ========================================================================= */}
      <section
        id="sobre"
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100 flex flex-col justify-center min-h-[90vh]"
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 mb-3">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>Trajetória e Experiência</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              SOBRE A DINÂMICA
            </h2>
            <div className="mt-2 h-1 w-16 bg-blue-600 mx-auto rounded-full" />
          </div>

          {/* Elegant Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Card: Founder & Experience highlight */}
            <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-blue-50/80 via-white to-sky-50/40 border border-blue-100/80 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-700 to-sky-600 text-white flex items-center justify-center font-bold text-xl shadow-md mb-5">
                16
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
                {COMPANY_DATA.founder.experienceText}
              </span>

              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                {COMPANY_DATA.founder.name}
              </h3>

              <p className="text-xs font-medium text-slate-500 mt-0.5">
                {COMPANY_DATA.founder.role}
              </p>

              <div className="mt-5 pt-4 border-t border-blue-100 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Tractor className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Atuação especializada na <strong>Zona Rural</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Soluções completas para a <strong>Zona Urbana</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Marechal Floriano / Espírito Santo</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={COMPANY_DATA.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar com o Fundador</span>
                </a>
              </div>
            </div>

            {/* Right: Structured Presentation Text */}
            <div className="lg:col-span-8 space-y-4">
              {/* Highlight Opening Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                  {COMPANY_DATA.about.paragraphs[0]}
                </p>
              </div>

              {/* Mission and scope cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                  <h4 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>Experiências que Transformam</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {COMPANY_DATA.about.paragraphs[1]}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                  <h4 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span>Presença e Visibilidade no Google</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {COMPANY_DATA.about.paragraphs[2]}
                  </p>
                </div>
              </div>

              {/* Belief Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-sky-900 text-white shadow-md">
                <p className="text-sm sm:text-base font-semibold leading-relaxed">
                  "{COMPANY_DATA.about.paragraphs[3]}"
                </p>
                <p className="mt-3 text-xs sm:text-sm text-blue-100 leading-relaxed">
                  {COMPANY_DATA.about.paragraphs[4]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SEÇÃO ÁREA DE ATUAÇÃO / SOLUÇÕES DIGITAIS PARA NEGÓCIOS                */}
      {/* ========================================================================= */}
      <section
        id="solucoes"
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-t border-slate-100 min-h-[90vh] flex flex-col justify-center"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nossas Especialidades</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              SOLUÇÕES DIGITAIS PARA NEGÓCIOS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Ferramentas e estratégias comprovadas para gerar visibilidade, praticidade e resultados reais para sua empresa.
            </p>
            <div className="mt-2 h-1 w-16 bg-blue-600 mx-auto rounded-full" />
          </div>

          {/* Solutions Grid */}
          <SolutionsGrid />

          {/* Bottom encouragement button */}
          <div className="mt-10 text-center">
            <a
              href={COMPANY_DATA.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 bg-white border border-blue-200 hover:border-blue-400 px-6 py-3 rounded-xl shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Precisa de uma solução sob medida? Fale conosco no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SEÇÃO PROPÓSITO                                                        */}
      {/* ========================================================================= */}
      <section
        id="proposito"
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100 min-h-[85vh] flex flex-col justify-center"
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Nossa Razão de Existir</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            PROPÓSITO
          </h2>
          <div className="mt-2 h-1 w-16 bg-blue-600 mx-auto rounded-full" />

          {/* Premium Card for Propósito */}
          <div className="mt-10 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-blue-50/90 via-white to-sky-50/60 border border-blue-200/80 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
              "{COMPANY_DATA.proposito.statement}"
            </p>

            {/* Three Pillars Highlight: OPORTUNIDADES | VISIBILIDADE | RESULTADOS */}
            <div className="mt-10 pt-8 border-t border-blue-100 grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPANY_DATA.proposito.pillars.map((pillar, idx) => (
                <div
                  key={pillar.word}
                  className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm mx-auto mb-3 shadow-xs group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-600 tracking-wider">
                    {pillar.word}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SEÇÃO MISSÃO E VISÃO                                                   */}
      {/* ========================================================================= */}
      <section
        id="missao-visao"
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-t border-slate-100 min-h-[85vh] flex flex-col justify-center"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>Direcionamento Estratégico</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              MISSÃO & VISÃO
            </h2>
            <div className="mt-2 h-1 w-16 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* MISSÃO CARD */}
            <div className="relative p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                  Nosso Compromisso Diário
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  MISSÃO
                </h3>

                <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed">
                  "{COMPANY_DATA.missao.statement}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Soluções práticas e personalizadas</span>
              </div>
            </div>

            {/* VISÃO CARD */}
            <div className="relative p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
                  Onde Queremos Estar
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  VISÃO
                </h3>

                <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed">
                  "{COMPANY_DATA.visao.statement}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Referência em inovação e confiança</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SEÇÃO NOSSOS VALORES                                                   */}
      {/* ========================================================================= */}
      <section
        id="valores"
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100 min-h-[85vh] flex flex-col justify-center"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Princípios Fundamentais</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              NOSSOS VALORES
            </h2>
            <div className="mt-2 h-1 w-16 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Valor 1: Inovação e Simplicidade */}
            <div className="group p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                <Lightbulb className="w-7 h-7" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Valor 01
              </span>

              <h3 className="text-xl font-bold text-slate-900 mt-1 group-hover:text-blue-700 transition-colors">
                Inovação e Simplicidade
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                "Usamos a tecnologia para criar soluções práticas e inteligentes."
              </p>
            </div>

            {/* Valor 2: Excelência e Confiança */}
            <div className="group p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Valor 02
              </span>

              <h3 className="text-xl font-bold text-slate-900 mt-1 group-hover:text-blue-700 transition-colors">
                Excelência e Confiança
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                "Trabalhamos com qualidade, ética, transparência e compromisso."
              </p>
            </div>

            {/* Valor 3: Cliente e Resultados */}
            <div className="group p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                <TrendingUp className="w-7 h-7" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Valor 03
              </span>

              <h3 className="text-xl font-bold text-slate-900 mt-1 group-hover:text-blue-700 transition-colors">
                Cliente e Resultados
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                "Valorizamos pessoas, construímos parcerias e buscamos gerar resultados reais."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SEÇÃO CHAMADA PARA AÇÃO (CTA & CONTATO)                                */}
      {/* ========================================================================= */}
      <section
        id="contato"
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-t border-slate-100 flex flex-col justify-center min-h-[90vh]"
      >
        <ContactSection />
      </section>

      {/* Institutional Corporate Footer */}
      <Footer onScrollToTop={() => scrollToSection('hero')} />
    </div>
  );
}
