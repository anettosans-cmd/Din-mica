import React from 'react';

export interface SectionMeta {
  id: string;
  label: string;
  index: string;
}

interface CarouselNavProps {
  sections: SectionMeta[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const CarouselNav: React.FC<CarouselNavProps> = ({
  sections,
  activeSection,
  onNavigate
}) => {
  return (
    <aside
      aria-label="Navegação de seções"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3 pointer-events-auto"
    >
      <div className="p-2 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md flex flex-col gap-2.5 items-center">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="group relative flex items-center justify-center p-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
              aria-label={`Ir para a seção ${section.label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-8 px-2.5 py-1 text-[11px] font-semibold text-slate-800 bg-white/95 backdrop-blur-md rounded-lg shadow-md border border-slate-200 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-1 group-hover:translate-x-0 whitespace-nowrap z-50">
                <span className="text-blue-600 font-mono mr-1.5">{section.index}</span>
                {section.label}
              </span>

              {/* Indicator Dot */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3 h-8 bg-gradient-to-b from-blue-600 to-sky-500 shadow-[0_0_12px_rgba(2,132,199,0.5)]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 group-hover:scale-125'
                }`}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
};
