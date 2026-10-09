import React, { useState } from 'react';
import { PageType, PlaceholderConfig, CustomOutfitFormState } from '../types';
import { formatWhatsAppUrl } from '../config/placeholders';
import { BelfordImage } from '../components/BelfordImage';
import { CheckCircle2, MessageCircle, ArrowLeft, Send } from 'lucide-react';

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
    outfitTypeOther: '',
    styleOption: 'Modern Slim-Fit Tailoring',
    styleDescription: '',
    measurementsMode: 'I have my measurements',
    customMeasurements: {
      chest: '',
      waist: '',
      hip: '',
      shoulder: '',
      sleeveLength: '',
      trouserLength: '',
      neck: ''
    },
    fabric: 'Premium Italian Cashmere Wool',
    fabricOther: '',
    requiredDate: '',
    budget: 'Above ₦50,000',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const outfitTypes = [
    'Suit',
    'Senator',
    'Agbada',
    'Kaftan',
    'Ankara Gown',
    'Native Two-Piece',
    'Corporate Wear',
    'Casual Wear',
    'Aso-Ebi',
    'Traditional Wear',
    'Other'
  ];

  const styleOptions = [
    'Modern Slim-Fit Tailoring',
    'Regal Embroidered Traditional',
    'Classic Double-Breasted Executive',
    'Architectural Corsetry & Peplum',
    'Flowing Cape & Train Silhouette',
    'Minimalist Contemporary Cut',
    'Other'
  ];

  const measurementModes: ('I have my measurements' | 'I need help with measurements' | 'I want to provide custom measurements')[] = [
    'I have my measurements',
    'I need help with measurements',
    'I want to provide custom measurements'
  ];

  const fabricOptions = [
    'Premium Italian Cashmere Wool',
    'Super 150s English Worsted Wool',
    'Authentic Swiss Voile & George Lace',
    'Pure African Ankara Wax Cotton',
    'Heavy Silk Brocade & Jacquard',
    'Atiku & Irish Linen',
    'Customer Will Provide Fabric',
    'Other'
  ];

  const budgetOptions: ('Below ₦5,000' | '₦5,000–₦15,000' | '₦15,000–₦50,000' | 'Above ₦50,000')[] = [
    'Below ₦5,000',
    '₦5,000–₦15,000',
    '₦15,000–₦50,000',
    'Above ₦50,000'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const effectiveOutfit = formData.outfitType === 'Other' ? (formData.outfitTypeOther || 'Other') : formData.outfitType;
    const effectiveFabric = formData.fabric === 'Other' ? (formData.fabricOther || 'Other') : formData.fabric;

    let measurementsDetail = formData.measurementsMode;
    if (formData.measurementsMode === 'I want to provide custom measurements' && formData.customMeasurements) {
      const m = formData.customMeasurements;
      measurementsDetail += `\n- Chest/Bust: ${m.chest || 'N/A'}\n- Waist: ${m.waist || 'N/A'}\n- Hips: ${m.hip || 'N/A'}\n- Shoulder: ${m.shoulder || 'N/A'}\n- Sleeve: ${m.sleeveLength || 'N/A'}\n- Trouser/Skirt Length: ${m.trouserLength || 'N/A'}\n- Neck: ${m.neck || 'N/A'}`;
    }

    // Exact message format per Section 37
    const msg = `Hello Belford Collection, I would like to make a custom fashion request.

CUSTOMER
Name: ${formData.fullName}
WhatsApp Number: ${formData.whatsappNumber}
Gender: ${formData.gender}

BESPOKE SPECIFICATIONS
Outfit Type: ${effectiveOutfit}
Style: ${formData.styleOption}
Style Details: ${formData.styleDescription || 'None'}
Measurements: ${measurementsDetail}
Fabric: ${effectiveFabric}
Required Date: ${formData.requiredDate || 'Flexible'}
Budget: ${formData.budget}

ADDITIONAL NOTES
${formData.additionalNotes || 'None'}`;

    const url = formatWhatsAppUrl(placeholders.WHATSAPP_NUMBER, msg);
    window.open(url, '_blank');
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D]">
      {/* Hero Header */}
      <section className="bg-[#071A3D] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
              Bespoke Atelier • 18+ Years
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
        <div className="mb-8">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#071A3D]/70 hover:text-[#2563FF] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {submitted ? (
          <div className="bg-[#EAF2FF]/50 border border-[#2563FF]/30 p-8 sm:p-10 space-y-6 text-center">
            <div className="w-12 h-12 bg-[#2563FF] text-white mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D]">
              Custom Request Generated
            </h2>
            <p className="text-xs sm:text-sm text-[#071A3D]/80 max-w-md mx-auto leading-relaxed">
              Your bespoke specifications have been formatted and directed to our master tailoring desk on WhatsApp.
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
          <form onSubmit={handleSubmit} className="bg-white border border-[#C9D2E3]/70 p-6 sm:p-10 space-y-8 shadow-xs">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
                Bespoke Atelier Request
              </span>
              <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D] mt-1">
                Custom Fashion Form
              </h2>
              <p className="text-xs text-[#071A3D]/70 mt-1">
                Select your preferences below. Type details only where your personal specifications require it.
              </p>
            </div>

            {/* 1. CUSTOMER DETAILS */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#2563FF] border-b border-[#C9D2E3]/40 pb-2">
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
                    placeholder="e.g. Chukwudebe Ifeanyi"
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

                {/* Gender: Simple selection per Section 21 & 24 (Male, Female) */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-2">
                    Gender <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    {(['Male', 'Female'] as const).map((g) => (
                      <label
                        key={g}
                        className={`flex items-center gap-2.5 px-6 py-3 border cursor-pointer text-xs font-bold uppercase tracking-wider transition-colors ${
                          formData.gender === g
                            ? 'border-[#2563FF] bg-[#2563FF] text-white shadow-xs'
                            : 'border-[#C9D2E3] bg-[#EAF2FF]/20 text-[#071A3D] hover:border-[#2563FF]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="customGender"
                          value={g}
                          checked={formData.gender === g}
                          onChange={() => setFormData({ ...formData, gender: g })}
                          className="sr-only"
                        />
                        <span>{g}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. OUTFIT TYPE & STYLE */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#2563FF] border-b border-[#C9D2E3]/40 pb-2">
                2. Outfit & Style Selection
              </h3>

              {/* Outfit Type: Selectable cards / options per Section 22 & 24 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-2">
                  Outfit Type <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {outfitTypes.map((ot) => (
                    <button
                      key={ot}
                      type="button"
                      onClick={() => setFormData({ ...formData, outfitType: ot })}
                      className={`p-2.5 text-xs font-semibold border text-center transition-all ${
                        formData.outfitType === ot
                          ? 'border-[#2563FF] bg-[#2563FF] text-white shadow-xs'
                          : 'border-[#C9D2E3] bg-[#EAF2FF]/20 text-[#071A3D] hover:border-[#2563FF]'
                      }`}
                    >
                      {ot}
                    </button>
                  ))}
                </div>

                {formData.outfitType === 'Other' && (
                  <div className="mt-2.5">
                    <input
                      type="text"
                      value={formData.outfitTypeOther || ''}
                      onChange={(e) => setFormData({ ...formData, outfitTypeOther: e.target.value })}
                      placeholder="Specify your desired outfit type..."
                      className="w-full px-3 py-2 bg-white border border-[#2563FF] text-xs text-[#071A3D] focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Style: Selectable style options first per Section 24 */}
              <div className="pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-2">
                  Style Direction
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {styleOptions.map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setFormData({ ...formData, styleOption: st })}
                      className={`p-2.5 text-left text-xs font-semibold border transition-all ${
                        formData.styleOption === st
                          ? 'border-[#2563FF] bg-[#2563FF] text-white shadow-xs'
                          : 'border-[#C9D2E3] bg-[#EAF2FF]/20 text-[#071A3D] hover:border-[#2563FF]'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Then text area: "Tell us more about your preferred style" per Section 24 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                  Tell us more about your preferred style
                </label>
                <textarea
                  rows={3}
                  value={formData.styleDescription}
                  onChange={(e) => setFormData({ ...formData, styleDescription: e.target.value })}
                  placeholder="Describe your desired cut, lapels, sleeve accents, embroidery motifs, collar style..."
                  className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                />
              </div>
            </div>

            {/* 3. MEASUREMENTS */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#2563FF] border-b border-[#C9D2E3]/40 pb-2">
                3. Measurements
              </h3>

              {/* Radio buttons for measurement mode per Section 24 */}
              <div className="space-y-2.5">
                {measurementModes.map((mode) => (
                  <label
                    key={mode}
                    onClick={() => setFormData({ ...formData, measurementsMode: mode })}
                    className={`flex items-center justify-between p-3.5 border cursor-pointer transition-colors ${
                      formData.measurementsMode === mode
                        ? 'border-[#2563FF] bg-[#EAF2FF]/50 ring-1 ring-[#2563FF]'
                        : 'border-[#C9D2E3] hover:border-gray-400'
                    }`}
                  >
                    <span className="text-xs font-semibold text-[#071A3D]">{mode}</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      formData.measurementsMode === mode ? 'border-[#2563FF] bg-[#2563FF]' : 'border-gray-400'
                    }`}>
                      {formData.measurementsMode === mode && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>
                  </label>
                ))}
              </div>

              {/* Reveal custom measurement fields if chosen per Section 24 */}
              {formData.measurementsMode === 'I want to provide custom measurements' && (
                <div className="p-4 bg-[#EAF2FF]/50 border border-[#2563FF]/30 space-y-3 mt-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2563FF]">
                    Provide Detailed Body Measurements (Inches):
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] text-gray-600 block">Chest / Bust</label>
                      <input
                        type="text"
                        value={formData.customMeasurements?.chest || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            customMeasurements: { ...formData.customMeasurements, chest: e.target.value }
                          })
                        }
                        placeholder="e.g. 42"
                        className="w-full px-2.5 py-1.5 bg-white border border-[#C9D2E3] text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 block">Waist</label>
                      <input
                        type="text"
                        value={formData.customMeasurements?.waist || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            customMeasurements: { ...formData.customMeasurements, waist: e.target.value }
                          })
                        }
                        placeholder="e.g. 36"
                        className="w-full px-2.5 py-1.5 bg-white border border-[#C9D2E3] text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 block">Hips</label>
                      <input
                        type="text"
                        value={formData.customMeasurements?.hip || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            customMeasurements: { ...formData.customMeasurements, hip: e.target.value }
                          })
                        }
                        placeholder="e.g. 44"
                        className="w-full px-2.5 py-1.5 bg-white border border-[#C9D2E3] text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 block">Shoulder Width</label>
                      <input
                        type="text"
                        value={formData.customMeasurements?.shoulder || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            customMeasurements: { ...formData.customMeasurements, shoulder: e.target.value }
                          })
                        }
                        placeholder="e.g. 19"
                        className="w-full px-2.5 py-1.5 bg-white border border-[#C9D2E3] text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 block">Sleeve Length</label>
                      <input
                        type="text"
                        value={formData.customMeasurements?.sleeveLength || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            customMeasurements: { ...formData.customMeasurements, sleeveLength: e.target.value }
                          })
                        }
                        placeholder="e.g. 26"
                        className="w-full px-2.5 py-1.5 bg-white border border-[#C9D2E3] text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-600 block">Trouser / Skirt Length</label>
                      <input
                        type="text"
                        value={formData.customMeasurements?.trouserLength || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            customMeasurements: { ...formData.customMeasurements, trouserLength: e.target.value }
                          })
                        }
                        placeholder="e.g. 42"
                        className="w-full px-2.5 py-1.5 bg-white border border-[#C9D2E3] text-xs"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. FABRIC, TIMELINE & BUDGET */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#2563FF] border-b border-[#C9D2E3]/40 pb-2">
                4. Fabric, Date & Budget
              </h3>

              {/* Fabric: Selectable options per Section 24 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                  Fabric Selection
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

                {formData.fabric === 'Other' && (
                  <div className="mt-2.5">
                    <input
                      type="text"
                      value={formData.fabricOther || ''}
                      onChange={(e) => setFormData({ ...formData, fabricOther: e.target.value })}
                      placeholder="Specify preferred material, weave or weight..."
                      className="w-full px-3 py-2 bg-white border border-[#2563FF] text-xs text-[#071A3D] focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Required Date: Date Picker per Section 24 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                  Required By Date
                </label>
                <input
                  type="date"
                  value={formData.requiredDate}
                  onChange={(e) => setFormData({ ...formData, requiredDate: e.target.value })}
                  className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                />
              </div>

              {/* Budget: Selectable options per Section 22 & 24 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-2">
                  Budget Selection
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`p-2.5 text-xs font-semibold border text-center transition-all ${
                        formData.budget === b
                          ? 'border-[#2563FF] bg-[#2563FF] text-white shadow-xs'
                          : 'border-[#C9D2E3] bg-[#EAF2FF]/20 text-[#071A3D] hover:border-[#2563FF]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Lining preferences, buttons, monogramming, occasion details..."
                  className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                />
              </div>
            </div>

            {/* Button per Section 24: SEND CUSTOM REQUEST */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2563FF]/30 flex items-center justify-center gap-2 min-h-[50px]"
              >
                <span>SEND CUSTOM REQUEST</span>
                <Send className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#071A3D]/70 text-center mt-2.5">
                Submits your tailored specifications directly to WhatsApp for consultation and measurement scheduling.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
