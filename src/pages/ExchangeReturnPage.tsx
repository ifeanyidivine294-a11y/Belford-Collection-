import React, { useState } from 'react';
import { PageType, PlaceholderConfig, ExchangeReturnFormState } from '../types';
import { formatWhatsAppUrl } from '../config/placeholders';
import { RotateCcw, CheckCircle2, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface ExchangeReturnPageProps {
  onNavigate: (page: PageType) => void;
  placeholders: PlaceholderConfig;
}

export const ExchangeReturnPage: React.FC<ExchangeReturnPageProps> = ({
  onNavigate,
  placeholders
}) => {
  const [formData, setFormData] = useState<ExchangeReturnFormState>({
    fullName: '',
    whatsappNumber: '',
    orderDate: '',
    product: '',
    reason: 'Size Exchange',
    replacementRequest: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const reasons = [
    'Size Exchange',
    'Colour Exchange',
    'Style Adjustment',
    'Order Enquiry',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `Hello Belford Collection, I would like to request an exchange.

Name: ${formData.fullName}
WhatsApp: ${formData.whatsappNumber}
Order Date: ${formData.orderDate || 'Recent purchase'}
Product: ${formData.product}
Reason: ${formData.reason}
Exchange Details: ${formData.replacementRequest || 'Please advise on available sizes'}`;

    const url = formatWhatsAppUrl(placeholders.WHATSAPP_NUMBER, msg);
    window.open(url, '_blank');
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directExchangeUrl = formatWhatsAppUrl(
    placeholders.WHATSAPP_NUMBER,
    'Hello Belford Collection, I would like to enquire about an exchange.'
  );

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D] py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-[#EAF2FF] text-[#2563FF] flex items-center justify-center mx-auto border border-[#C9D2E3]/50">
            <RotateCcw className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
            Client Service
          </span>
          <h1 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold tracking-tight text-[#071A3D]">
            Exchange Request
          </h1>
        </div>

        {/* Section 36 Exact Short Note & Primary Action */}
        <div className="bg-[#EAF2FF]/40 border border-[#2563FF]/30 p-8 sm:p-10 space-y-6 text-center rounded-lg">
          <p className="text-base sm:text-lg text-[#071A3D] leading-relaxed max-w-xl mx-auto font-light">
            We accept eligible exchanges subject to product condition and availability. Please contact Belford Collection through WhatsApp with your order details so we can review your request.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            {/* Button per Section 36: REQUEST AN EXCHANGE */}
            <a
              href={directExchangeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-md flex items-center gap-2.5 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>REQUEST AN EXCHANGE</span>
            </a>

            {placeholders.RETURN_POLICY_URL && (
              <a
                href={placeholders.RETURN_POLICY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-white hover:bg-gray-50 border border-[#C9D2E3] text-[#071A3D] text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2 min-h-[48px]"
              >
                <span>Policy Link</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#2563FF]" />
              </a>
            )}
          </div>
        </div>

        {/* Optional Form for Structured Message */}
        <div className="bg-white border border-[#C9D2E3]/60 p-6 sm:p-10 shadow-sm rounded-lg">
          <h2 className="font-['Cinzel'] text-xl font-bold text-[#071A3D] mb-1">
            Exchange Pre-Fill Form
          </h2>
          <p className="text-xs text-[#071A3D]/70 mb-6">
            Fill out your purchase specifics to format your WhatsApp request instantly.
          </p>

          {submitted ? (
            <div className="bg-[#EAF2FF]/50 border border-[#2563FF]/30 p-6 text-center space-y-3">
              <div className="w-9 h-9 bg-[#2563FF] text-white mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-[#071A3D]">
                Exchange Details Ready on WhatsApp
              </p>
              <p className="text-xs text-[#071A3D]/70">
                Our support desk will assist you with sizing or replacement options.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Chukwuma Obi"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    placeholder="e.g. 09069710687"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Product Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    placeholder="e.g. Ankara Maxi Gown"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Reason
                  </label>
                  <select
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    {reasons.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Replacement Request
                  </label>
                  <textarea
                    rows={2}
                    value={formData.replacementRequest}
                    onChange={(e) => setFormData({ ...formData, replacementRequest: e.target.value })}
                    placeholder="e.g. Need size 42 instead of 40, or alternate colour..."
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#071A3D] hover:bg-[#2563FF] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-colors"
              >
                SUBMIT VIA WHATSAPP
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
