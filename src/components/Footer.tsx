import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Instagram, 
  Facebook, 
  Star,
  Sparkles,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Company Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5" />
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                {COMPANY_DATA.name}
              </h3>
            </div>

            <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">
              "{COMPANY_DATA.institutionalMotto}"
            </p>

            <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
              Fundada por <span className="text-white font-semibold">{COMPANY_DATA.founder.name}</span>, com {COMPANY_DATA.founder.experienceYears} anos de vivência no ecossistema digital, desenvolvendo soluções práticas e inteligentes para negócios da zona rural e urbana.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_DATA.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                title="Instagram da Dinâmica"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_DATA.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                title="Facebook da Dinâmica"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_DATA.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                title="WhatsApp da Dinâmica"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.587 1.954.914 2.791.914 3.179 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.768-5.767-5.768zm0 10.421c-.815 0-1.637-.253-2.345-.724l-.168-.109-1.579.414.421-1.539-.115-.183c-.502-.801-.767-1.666-.767-2.514 0-2.614 2.127-4.741 4.742-4.741 2.614 0 4.741 2.127 4.741 4.741 0 2.615-2.127 4.742-4.741 4.742zm2.607-3.567c-.143-.072-.846-.418-.977-.466-.131-.048-.227-.072-.323.072s-.371.466-.455.563c-.083.095-.167.108-.31.036-.143-.072-.605-.223-1.152-.711-.426-.38-.713-.85-.797-.994-.083-.143-.009-.221.063-.292.065-.065.143-.167.215-.251.071-.083.095-.143.143-.239.048-.095.024-.179-.012-.251-.036-.072-.323-.777-.442-1.064-.116-.279-.234-.241-.322-.246l-.275-.005c-.095 0-.251.036-.383.179-.131.143-.502.49-.502 1.196 0 .705.514 1.386.586 1.482.072.095 1.011 1.544 2.449 2.164.342.148.609.236.818.302.344.11.657.094.904.057.276-.041.846-.346.966-.68.12-.334.12-.62.084-.68-.036-.06-.131-.096-.274-.168z"/>
                </svg>
              </a>

              <a
                href={COMPANY_DATA.links.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                title="Avalie no Google"
                aria-label="Google Review"
              >
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Localização / Endereço */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Localização
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{COMPANY_DATA.contact.address.street}</p>
                  <p>{COMPANY_DATA.contact.address.neighborhood}</p>
                  <p>{COMPANY_DATA.contact.address.city} - {COMPANY_DATA.contact.address.state}</p>
                  <p>CEP: {COMPANY_DATA.contact.address.cep}</p>
                </div>
              </div>

              <a
                href={COMPANY_DATA.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 mt-2"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 3: Canais de Atendimento */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Atendimento
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href={`tel:${COMPANY_DATA.contact.phone}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>{COMPANY_DATA.contact.displayPhone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DATA.contact.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group break-all"
              >
                <Mail className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>{COMPANY_DATA.contact.email}</span>
              </a>

              <div className="pt-2">
                <span className="text-xs text-slate-500 block">Especialidade</span>
                <span className="text-xs font-semibold text-slate-300">{COMPANY_DATA.specialty}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_DATA.name}. Todos os direitos reservados.</p>

          <button
            onClick={onScrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
            title="Voltar ao início"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
