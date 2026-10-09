import React, { useState } from 'react';
import { PageType, PlaceholderConfig, ExchangeReturnFormState } from '../types';
import { PRODUCTS } from '../data/products';
import { formatWhatsAppUrl } from '../config/placeholders';
import { RotateCcw, CheckCircle2, MessageCircle, ArrowLeft, Send, ExternalLink } from 'lucide-react';

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
    product: PRODUCTS[0]?.name || 'Ankara Maxi Gown',
    reason: 'Wrong Size',
    reasonOther: '',
    replacementRequest: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  // Reasons per Section 39
  const reasons: ('Wrong Size' | 'Wrong Colour' | 'Defective Item' | 'Incorrect Item' | 'Other')[] = [
    'Wrong Size',
    'Wrong Colour',
    'Defective Item',
    'Incorrect Item',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const effectiveReason = formData.reason === 'Other' ? (formData.reasonOther || 'Other') : formData.reason;

    const msg = `Hello Belford Collection, I would like to make an exchange/return request.

CUSTOMER
Name: ${formData.fullName}
WhatsApp Number: ${formData.whatsappNumber}

ORDER DETAILS
Order Date: ${formData.orderDate || 'Recent'}
Product: ${formData.product}
Reason for Exchange: ${effectiveReason}

DESIRED REPLACEMENT
${formData.replacementRequest || 'Please advise on available replacement options.'}`;

    const url = formatWhatsAppUrl(placeholders.WHATSAPP_NUMBER, msg);
    window.open(url, '_blank');
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D] py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#071A3D]/70 hover:text-[#2563FF] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
            Client Care & Services
          </span>
          <h1 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold tracking-tight text-[#071A3D]">
            Exchange / Return
          </h1>
          <p className="text-xs sm:text-sm text-[#071A3D]/75 leading-relaxed">
            We want every Belford piece to fit you with absolute perfection. Fill out the request form below to initiate an exchange with our concierge team.
          </p>
        </div>

        {/* Policy Notice with [RETURN_POLICY_URL] per Section 39 */}
        <div className="bg-[#EAF2FF]/50 border border-[#2563FF]/30 p-5 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-[#071A3D]/85 space-y-1">
            <span className="font-bold text-[#071A3D] uppercase tracking-wider">Exchange Policy Terms</span>
            <p className="font-light">
              Items must be unworn with tags attached. Sizing adjustments or replacements are processed via WhatsApp consultation.
            </p>
          </div>
          {placeholders.RETURN_POLICY_URL && (
            <a
              href={placeholders.RETURN_POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#C9D2E3] text-[#071A3D] text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              <span>View Policy</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#2563FF]" />
            </a>
          )}
        </div>

        {submitted ? (
          <div className="bg-[#EAF2FF]/50 border border-[#2563FF]/30 p-8 sm:p-10 space-y-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-[#2563FF] text-white mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D]">
              Exchange Request Ready
            </h2>
            <p className="text-xs sm:text-sm text-[#071A3D]/80 max-w-md mx-auto leading-relaxed">
              Your exchange details have been structured and forwarded to our client services desk on WhatsApp.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3.5 bg-[#071A3D] text-white text-xs font-bold uppercase tracking-wider"
              >
                Submit Another Request
              </button>
              <button
                onClick={() => onNavigate('collections')}
                className="px-6 py-3.5 bg-white border border-[#C9D2E3] text-[#071A3D] text-xs font-bold uppercase tracking-wider"
              >
                Browse Catalogue
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-[#C9D2E3]/70 p-6 sm:p-10 space-y-6 shadow-xs">
            {/* Full Name per Section 39 */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Divine Ifeanyi"
                className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
              />
            </div>

            {/* WhatsApp per Section 39 */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                WhatsApp <span className="text-rose-500">*</span>
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

            {/* Order Date: date picker per Section 39 */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                Order Date <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                required
                value={formData.orderDate}
                onChange={(e) => setFormData({ ...formData, orderDate: e.target.value })}
                className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
              />
            </div>

            {/* Product: dropdown per Section 39 */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                Product <span className="text-rose-500">*</span>
              </label>
              <select
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} ({p.code})
                  </option>
                ))}
              </select>
            </div>

            {/* Reason: selectable per Section 39 */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-2">
                Reason for Request <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {reasons.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setFormData({ ...formData, reason: r })}
                    className={`p-3 text-xs font-semibold border text-center transition-all ${
                      formData.reason === r
                        ? 'border-[#2563FF] bg-[#2563FF] text-white shadow-xs'
                        : 'border-[#C9D2E3] bg-[#EAF2FF]/20 text-[#071A3D] hover:border-[#2563FF]'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              {formData.reason === 'Other' && (
                <div className="mt-2.5">
                  <input
                    type="text"
                    value={formData.reasonOther || ''}
                    onChange={(e) => setFormData({ ...formData, reasonOther: e.target.value })}
                    placeholder="Specify reason for exchange..."
                    className="w-full px-3 py-2 bg-white border border-[#2563FF] text-xs text-[#071A3D] focus:outline-none"
                  />
                </div>
              )}
            </div>

            {/* What would you like instead? text area per Section 39 */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                What would you like instead? <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={formData.replacementRequest}
                onChange={(e) => setFormData({ ...formData, replacementRequest: e.target.value })}
                placeholder="Specify preferred size (e.g. Need size 42 instead of 40), alternate color, or style replacement..."
                className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
              />
            </div>

            {/* Button per Section 39: SEND REQUEST */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2563FF]/30 flex items-center justify-center gap-2 min-h-[50px]"
              >
                <span>SEND REQUEST</span>
                <Send className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#071A3D]/70 text-center mt-2.5">
                Launches your request via WhatsApp with all order and exchange specifications attached.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
