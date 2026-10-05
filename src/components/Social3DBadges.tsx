import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { ExternalLink, MessageCircle, Star, Instagram, Facebook, Phone, Mail } from 'lucide-react';

interface Social3DBadgesProps {
  variant?: 'full' | 'compact' | 'horizontal';
  className?: string;
}

export const Social3DBadges: React.FC<Social3DBadgesProps> = ({
  variant = 'full',
  className = ''
}) => {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* WHATSAPP - OFFICIAL GREEN 3D HIGH RELIEF */}
        <a
          href={COMPANY_DATA.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center p-4 sm:p-5 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_35px_-5px_rgba(16,185,129,0.28)] hover:-translate-y-1.5 overflow-hidden"
        >
          {/* Subtle glossy light gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-emerald-100/30 opacity-60 group-hover:opacity-100 transition-opacity" />
          
          {/* 3D Icon Badge */}
          <div className="relative z-10 shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#2fe578] via-[#25D366] to-[#128C7E] flex items-center justify-center shadow-[0_8px_16px_rgba(18,140,126,0.35),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105">
            {/* Top highlight glare */}
            <div className="absolute inset-x-2 top-1 h-3 rounded-t-xl bg-gradient-to-b from-white/60 to-transparent" />
            <svg
              className="w-8 h-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.587 1.954.914 2.791.914 3.179 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.768-5.767-5.768zm0 10.421c-.815 0-1.637-.253-2.345-.724l-.168-.109-1.579.414.421-1.539-.115-.183c-.502-.801-.767-1.666-.767-2.514 0-2.614 2.127-4.741 4.742-4.741 2.614 0 4.741 2.127 4.741 4.741 0 2.615-2.127 4.742-4.741 4.742zm2.607-3.567c-.143-.072-.846-.418-.977-.466-.131-.048-.227-.072-.323.072s-.371.466-.455.563c-.083.095-.167.108-.31.036-.143-.072-.605-.223-1.152-.711-.426-.38-.713-.85-.797-.994-.083-.143-.009-.221.063-.292.065-.065.143-.167.215-.251.071-.083.095-.143.143-.239.048-.095.024-.179-.012-.251-.036-.072-.323-.777-.442-1.064-.116-.279-.234-.241-.322-.246l-.275-.005c-.095 0-.251.036-.383.179-.131.143-.502.49-.502 1.196 0 .705.514 1.386.586 1.482.072.095 1.011 1.544 2.449 2.164.342.148.609.236.818.302.344.11.657.094.904.057.276-.041.846-.346.966-.68.12-.334.12-.62.084-.68-.036-.06-.131-.096-.274-.168z"/>
            </svg>
          </div>

          <div className="relative z-10 ml-4 flex-1">
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 block">Canal Direto</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
              Fale conosco pelo WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{COMPANY_DATA.contact.displayPhone}</p>
          </div>

          <div className="relative z-10 w-9 h-9 rounded-full bg-emerald-50 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </a>

        {/* GOOGLE - AVALIE NO GOOGLE 3D HIGH RELIEF */}
        <a
          href={COMPANY_DATA.links.googleReview}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center p-4 sm:p-5 rounded-2xl bg-white border border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(59,130,246,0.15)] hover:shadow-[0_20px_35px_-5px_rgba(59,130,246,0.28)] hover:-translate-y-1.5 overflow-hidden"
        >
          {/* Subtle glossy light gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-amber-50/30 opacity-60 group-hover:opacity-100 transition-opacity" />
          
          {/* 3D Icon Badge */}
          <div className="relative z-10 shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-[0_8px_16px_rgba(66,133,244,0.25),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:scale-105">
            {/* Top highlight glare */}
            <div className="absolute inset-x-2 top-1 h-3 rounded-t-xl bg-gradient-to-b from-white/80 to-transparent" />
            {/* Official Google G Logo SVG */}
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
          </div>

          <div className="relative z-10 ml-4 flex-1">
            <div className="flex items-center gap-1 text-amber-500 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
              <span className="text-xs font-semibold text-slate-600 ml-1">5.0</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
              Avalie nossa empresa no Google
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Google Meu Negócio & Avaliações</p>
          </div>

          <div className="relative z-10 w-9 h-9 rounded-full bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </a>

        {/* INSTAGRAM - 3D OFFICIAL VIBRANT GRADIENT */}
        <a
          href={COMPANY_DATA.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center p-4 sm:p-5 rounded-2xl bg-white border border-pink-100 hover:border-pink-300 transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(236,72,153,0.15)] hover:shadow-[0_20px_35px_-5px_rgba(236,72,153,0.28)] hover:-translate-y-1.5 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-purple-100/30 opacity-60 group-hover:opacity-100 transition-opacity" />
          
          {/* 3D Icon Badge */}
          <div className="relative z-10 shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center shadow-[0_8px_16px_rgba(220,39,67,0.35),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-105">
            <div className="absolute inset-x-2 top-1 h-3 rounded-t-xl bg-gradient-to-b from-white/60 to-transparent" />
            <Instagram className="w-8 h-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]" />
          </div>

          <div className="relative z-10 ml-4 flex-1">
            <span className="text-xs font-semibold tracking-wider uppercase text-pink-600 block">Rede Social</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-pink-700 transition-colors">
              Siga no Instagram
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">@dinamicasolucoesmf</p>
          </div>

          <div className="relative z-10 w-9 h-9 rounded-full bg-pink-50 group-hover:bg-pink-600 text-pink-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </a>

        {/* FACEBOOK - 3D OFFICIAL BLUE */}
        <a
          href={COMPANY_DATA.links.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center p-4 sm:p-5 rounded-2xl bg-white border border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(24,119,242,0.15)] hover:shadow-[0_20px_35px_-5px_rgba(24,119,242,0.28)] hover:-translate-y-1.5 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-100/30 opacity-60 group-hover:opacity-100 transition-opacity" />
          
          {/* 3D Icon Badge */}
          <div className="relative z-10 shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1877F2] via-[#0d6efd] to-[#0b5ed7] flex items-center justify-center shadow-[0_8px_16px_rgba(24,119,242,0.35),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-105">
            <div className="absolute inset-x-2 top-1 h-3 rounded-t-xl bg-gradient-to-b from-white/60 to-transparent" />
            <Facebook className="w-8 h-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]" />
          </div>

          <div className="relative z-10 ml-4 flex-1">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 block">Página Oficial</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
              Curta no Facebook
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">/dinamicasolucoesmf</p>
          </div>

          <div className="relative z-10 w-9 h-9 rounded-full bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </a>
      </div>

      {/* Secondary Fast Action Row: Direct Call & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
        <a
          href={`tel:${COMPANY_DATA.contact.phone}`}
          className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-blue-200 transition-all duration-200 group text-slate-700 hover:text-blue-700 shadow-sm"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block">Ligue agora</span>
            <span className="text-sm font-semibold">{COMPANY_DATA.contact.displayPhone}</span>
          </div>
        </a>

        <a
          href={`mailto:${COMPANY_DATA.contact.email}`}
          className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-sky-200 transition-all duration-200 group text-slate-700 hover:text-sky-700 shadow-sm"
        >
          <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shadow-inner group-hover:bg-sky-600 group-hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <div className="truncate">
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block">Enviar e-mail</span>
            <span className="text-sm font-semibold truncate block">{COMPANY_DATA.contact.email}</span>
          </div>
        </a>
      </div>
    </div>
  );
};
