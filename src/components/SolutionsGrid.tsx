import React from 'react';
import { COMPANY_DATA, SolutionItem } from '../data/companyData';
import { 
  Share2, 
  Search, 
  MapPin, 
  Eye, 
  Building2, 
  Rocket, 
  Layers, 
  Briefcase, 
  Cpu, 
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Share2,
  Search,
  MapPin,
  Eye,
  Building2,
  Rocket,
  Layers,
  Briefcase,
  Cpu
};

export const SolutionsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {COMPANY_DATA.solutions.map((solution, idx) => {
        const IconComponent = iconMap[solution.iconName] || Cpu;
        const encodedMsg = encodeURIComponent(solution.whatsappMessage);
        const whatsappUrl = `https://wa.me/5527998162979?text=${encodedMsg}`;

        return (
          <div
            key={solution.id}
            className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(2,132,199,0.14)] hover:-translate-y-1"
          >
            {/* Soft inner glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/40 via-transparent to-sky-50/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div>
              {/* Header with icon and tag */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 text-blue-700 border border-blue-200/60 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                <span className="text-[11px] font-semibold tracking-wider uppercase text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100/60">
                  {solution.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {solution.description}
              </p>
            </div>

            {/* Direct action link */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                Atendimento personalizado
              </span>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 group-hover:translate-x-0.5 transition-all"
                title={`Consultar sobre ${solution.title}`}
              >
                <span>Consultar</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
