import React, { useState } from 'react';
import { PageType, PlaceholderConfig, CustomOutfitFormState } from '../types';
import { formatWhatsAppUrl } from '../config/placeholders';
import { BelfordImage } from '../components/BelfordImage';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

interface CustomMadePageProps {
  onNavigate: (page: PageType) => void;
  placeholders: PlaceholderConfig;
}

export const CustomMadePage: React.FC<CustomMadePageProps> = ({
  onNavigate,
  placeholders
}) => {
  const [formData, setFormData] = useState<CustomOutfitFormState>({
    fullName: '',
    whatsappNumber: '',
    gender: 'Male',
    outfitType: 'Senator',
    styleDescription: '',
    measurements: 'I have my measurements',
    fabric: 'I will provide fabric',
    requiredDate: '',
    budget: '₦50,000–₦100,000',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const outfitTypes = [
    'Ankara Gown',
    'Senator',
    'Agbada',
    'Suit',
    'Corporate Wear',
    'Casual Wear',
    'Aso-Ebi',
    'Traditional Wear',
    'Other'
  ];

  const measurementOptions = [
    'I have my measurements',
    'I need measurement assistance',
    'I will provide custom measurements'
  ];

  const budgetOptions = [
    'Below ₦50,000',
    '₦50,000–₦100,000',
    '₦100,000–₦200,000',
    'Above ₦200,000'
  ];

  const fabricOptions = [
    'I will provide fabric',
    'Belford to source premium fabric',
    'Need fabric consultation & catalogue'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Section 28: Exact Custom WhatsApp Message Format
    const msg = `Hello Belford Collection, I would like to request a custom outfit.

Name: ${formData.fullName}
WhatsApp: ${formData.whatsappNumber}
Gender: ${formData.gender}
Outfit: ${formData.outfitType}
Style: ${formData.styleDescription || 'Standard bespoke tailoring'}
Measurements: ${formData.measurements}
Fabric: ${formData.fabric}
Required Date: ${formData.requiredDate || 'Flexible'}
Budget: ${formData.budget}
Notes: ${formData.additionalNotes || 'None'}`;

    const url = formatWhatsAppUrl(placeholders.WHATSAPP_NUMBER, msg);
    window.open(url, '_blank');
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D]">
      {/* Hero Header */}
      <section className="bg-[#071A3D] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <BelfordImage
            src={placeholders.CUSTOM_FASHION_IMAGE_URL}
            alt="Bespoke Tailoring Atelier"
            className="w-full h-full object-cover object-center"
            allowZoom={false}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
              Bespoke Atelier
            </span>
            <h1 className="font-['Cinzel'] text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Made For You. Made To Stand Out.
            </h1>
            <p className="text-base sm:text-lg text-[#C9D2E3] leading-relaxed font-light">
              Custom tailoring shaped around your style, measurements and occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {submitted ? (
          <div className="bg-[#EAF2FF]/50 border border-[#2563FF]/30 p-8 sm:p-10 space-y-6 text-center">
            <div className="w-12 h-12 bg-[#2563FF] text-white mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D]">
              Custom Request Generated
            </h2>
            <p className="text-xs sm:text-sm text-[#071A3D]/80 max-w-md mx-auto leading-relaxed">
              Your bespoke specifications have been formatted. Our concierge will review your fabric, measurements, and timeline directly on WhatsApp.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-[#071A3D] text-white text-xs font-bold uppercase tracking-wider"
              >
                Submit Another Request
              </button>
              <button
                onClick={() => onNavigate('collections')}
                className="px-6 py-3 bg-white border border-[#C9D2E3] text-[#071A3D] text-xs font-bold uppercase tracking-wider"
              >
                Browse Catalogue
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-[#C9D2E3]/70 p-6 sm:p-10 space-y-8 shadow-sm">
            <div>
              <h2 className="font-['Cinzel'] text-2xl font-bold text-[#071A3D]">
                Custom Tailoring Request
              </h2>
              <p className="text-xs text-[#071A3D]/70 mt-1">
                Tell us what you want to create and let our master tailors bring your vision to life.
              </p>
            </div>

            {/* Customer Details */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#2563FF] border-b pb-2">
                1. Customer Details
              </h3>
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
                    placeholder="e.g. Divine Ifeanyi"
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

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Gender <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Outfit & Style */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#2563FF] border-b pb-2">
                2. Outfit Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Outfit Type <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.outfitType}
                    onChange={(e) => setFormData({ ...formData, outfitType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    {outfitTypes.map((ot) => (
                      <option key={ot} value={ot}>{ot}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Measurements Status
                  </label>
                  <select
                    value={formData.measurements}
                    onChange={(e) => setFormData({ ...formData, measurements: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    {measurementOptions.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Style Description
                  </label>
                  <textarea
                    rows={3}
                    value={formData.styleDescription}
                    onChange={(e) => setFormData({ ...formData, styleDescription: e.target.value })}
                    placeholder="Describe cut, lapel style, sleeve length, silhouette, embroidery, or occasion..."
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Fabric Preference
                  </label>
                  <select
                    value={formData.fabric}
                    onChange={(e) => setFormData({ ...formData, fabric: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    {fabricOptions.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Required By (Date)
                  </label>
                  <input
                    type="date"
                    value={formData.requiredDate}
                    onChange={(e) => setFormData({ ...formData, requiredDate: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Additional Notes
                  </label>
                  <textarea
                    rows={2}
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    placeholder="Any specific lining requests, buttons, or delivery instructions..."
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>
              </div>
            </div>

            {/* Button per Section 21: "SEND CUSTOM REQUEST" */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2563FF]/30 flex items-center justify-center gap-2 min-h-[50px]"
              >
                <span>SEND CUSTOM REQUEST</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#071A3D]/60 text-center mt-2.5">
                Opens directly in WhatsApp with your pre-filled custom tailoring details.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
