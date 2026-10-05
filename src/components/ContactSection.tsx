import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { MessageCircle, Star, Send, Phone, Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('Google Business Profile / Meu Negócio');
  const [userName, setUserName] = useState('');
  const [userNote, setUserNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const topics = [
    'Google Business Profile / Meu Negócio',
    'Presença Empresarial no Google',
    'Mídia Digital & Conteúdo',
    'Consultoria de Negócios (16 anos)',
    'Tecnologia Aplicada aos Negócios',
    'Outras Soluções Digitais'
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = userName.trim() ? `Olá Armando! Meu nome é ${userName.trim()}.` : `Olá Armando!`;
    const topicText = `Gostaria de falar sobre: ${selectedTopic}.`;
    const details = userNote.trim() ? `\nDetalhes: ${userNote.trim()}` : '';
    const fullText = `${greeting} ${topicText}${details}`;

    const url = `https://wa.me/5527998162979?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Hero CTA Box */}
      <div className="relative rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-sky-900 text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-blue-700/50">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sky-300 bg-sky-950/60 px-3.5 py-1.5 rounded-full border border-sky-400/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Atendimento Zona Rural e Urbana
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            SUA EMPRESA PODE IR MAIS LONGE.
          </h2>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-blue-100 font-medium max-w-2xl mx-auto">
            Transforme tecnologia em oportunidades, visibilidade e resultados.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={COMPANY_DATA.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base sm:text-lg shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_14px_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>FALE COM A DINÂMICA</span>
            </a>

            <a
              href={COMPANY_DATA.links.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base backdrop-blur-md transition-all flex items-center justify-center gap-2.5"
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>AVALIE NOSSO TRABALHO NO GOOGLE</span>
            </a>
          </div>
        </div>

        {/* Quick Message Launcher */}
        <div className="relative z-10 mt-12 pt-10 border-t border-white/15 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold text-center text-blue-200 uppercase tracking-wider mb-6">
            Envie uma mensagem direta para Armando Souto
          </p>

          <form onSubmit={handleSendWhatsApp} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-blue-200 mb-1">Seu Nome ou Empresa</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Ex: Carlos / Padaria Central"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/60 focus:bg-white/15 focus:outline-hidden focus:ring-2 focus:ring-sky-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-blue-200 mb-1">Área de Interesse</label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/20 text-white focus:outline-hidden focus:ring-2 focus:ring-sky-400 text-sm"
                >
                  {topics.map((t) => (
                    <option key={t} value={t} className="bg-slate-900 text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-blue-200 mb-1">Mensagem (opcional)</label>
              <textarea
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                rows={2}
                placeholder="Conte brevemente sobre o seu objetivo ou dúvida..."
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/60 focus:bg-white/15 focus:outline-hidden focus:ring-2 focus:ring-sky-400 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Iniciar Conversa no WhatsApp</span>
            </button>

            {submitted && (
              <p className="text-xs text-emerald-300 flex items-center justify-center gap-1.5 text-center mt-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Janela do WhatsApp aberta com seus dados preenchidos!</span>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
