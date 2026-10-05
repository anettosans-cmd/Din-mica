import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { X, Copy, Check, Share2, Download, MessageSquare, ExternalLink } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://dinamicasolucoes.com.br';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Souto;Armando;N.;;
FN:Armando N. Souto - Dinâmica Soluções
ORG:Dinâmica Soluções e Serviços para Zona Rural e Urbana
TITLE:Consultor de Negócios e Criador de Conteúdo Digital
TEL;TYPE=CELL,VOICE:${COMPANY_DATA.contact.phone}
EMAIL;TYPE=INTERNET,WORK:${COMPANY_DATA.contact.email}
ADR;TYPE=WORK:;;${COMPANY_DATA.contact.address.street};${COMPANY_DATA.contact.address.city};${COMPANY_DATA.contact.address.state};${COMPANY_DATA.contact.address.cep};Brasil
NOTE:TECNOLOGIA QUE TRANSFORMA. 16 anos de experiência.
URL:${currentUrl}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Armando_Souto_Dinamica.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // High quality SVG QR Code generator representation
  const qrSvgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(currentUrl)}&margin=10`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-7 overflow-hidden text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mx-auto w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
          <Share2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Compartilhar Biosite</h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xs mx-auto">
          Apresente a <span className="font-semibold text-slate-700">Dinâmica Soluções</span> para parceiros e clientes.
        </p>

        {/* QR Code Container */}
        <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 inline-block shadow-inner">
          <img
            src={qrSvgUrl}
            alt="QR Code Dinâmica Soluções"
            className="w-44 h-44 mx-auto rounded-lg"
            loading="lazy"
          />
          <span className="text-[11px] font-medium text-slate-400 block mt-2">
            Aponte a câmera do celular para abrir
          </span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={handleCopy}
            className="w-full py-3 px-4 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Link Copiado com Sucesso!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Link do Biosite</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownloadVCard}
            className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center gap-2 transition-all"
          >
            <Download className="w-4 h-4 text-blue-600" />
            <span>Salvar Contato na Agenda (vCard)</span>
          </button>

          <a
            href={`https://wa.me/?text=${encodeURIComponent(`Conheça o biosite oficial da Dinâmica Soluções e Serviços: ${currentUrl}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center gap-2 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Compartilhar via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
