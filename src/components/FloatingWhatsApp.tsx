import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { X, MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-none">
      {/* Gentle Popover Tooltip */}
      {!tooltipDismissed && (
        <div className="pointer-events-auto mb-2 relative max-w-[260px] p-3 rounded-2xl bg-white shadow-xl border border-emerald-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setTooltipDismissed(true)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-slate-600 rounded-full"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2.5">
            <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div>
              <p className="text-xs font-bold text-slate-800">Atendimento Dinâmica</p>
              <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                Olá! Precisa de soluções digitais para o seu negócio? Fale com a gente.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3D WhatsApp Button */}
      <a
        href={COMPANY_DATA.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="pointer-events-auto group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#34ec80] flex items-center justify-center shadow-[0_8px_20px_rgba(18,140,126,0.38),inset_0_2px_4px_rgba(255,255,255,0.7)] transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        {/* Shimmer glare */}
        <div className="absolute inset-x-3 top-1.5 h-3 rounded-t-full bg-gradient-to-b from-white/60 to-transparent" />
        
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />

        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.587 1.954.914 2.791.914 3.179 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.768-5.767-5.768zm0 10.421c-.815 0-1.637-.253-2.345-.724l-.168-.109-1.579.414.421-1.539-.115-.183c-.502-.801-.767-1.666-.767-2.514 0-2.614 2.127-4.741 4.742-4.741 2.614 0 4.741 2.127 4.741 4.741 0 2.615-2.127 4.742-4.741 4.742zm2.607-3.567c-.143-.072-.846-.418-.977-.466-.131-.048-.227-.072-.323.072s-.371.466-.455.563c-.083.095-.167.108-.31.036-.143-.072-.605-.223-1.152-.711-.426-.38-.713-.85-.797-.994-.083-.143-.009-.221.063-.292.065-.065.143-.167.215-.251.071-.083.095-.143.143-.239.048-.095.024-.179-.012-.251-.036-.072-.323-.777-.442-1.064-.116-.279-.234-.241-.322-.246l-.275-.005c-.095 0-.251.036-.383.179-.131.143-.502.49-.502 1.196 0 .705.514 1.386.586 1.482.072.095 1.011 1.544 2.449 2.164.342.148.609.236.818.302.344.11.657.094.904.057.276-.041.846-.346.966-.68.12-.334.12-.62.084-.68-.036-.06-.131-.096-.274-.168z"/>
        </svg>
      </a>
    </div>
  );
};
