import React, { useState } from 'react';
import { PageType, PlaceholderConfig, GroupOrderFormState } from '../types';
import { formatWhatsAppUrl } from '../config/placeholders';
import { BelfordImage } from '../components/BelfordImage';
import { CheckCircle2, MessageCircle, ArrowLeft, Plus, Minus, Send } from 'lucide-react';

interface GroupOrdersPageProps {
  onNavigate: (page: PageType) => void;
  placeholders: PlaceholderConfig;
}

export const GroupOrdersPage: React.FC<GroupOrdersPageProps> = ({
  onNavigate,
  placeholders
}) => {
  const [formData, setFormData] = useState<GroupOrderFormState>({
    fullName: '',
    whatsappNumber: '',
    eventType: 'Wedding',
    eventTypeOther: '',
    numberOfPeople: 10,
    fabric: 'French Lace & Cord Velvet',
    fabricOther: '',
    colour: 'Royal Belford Blue & Silver',
    colourOther: '',
    style: 'Coordinated Agbada & Lace Gowns',
    styleOther: '',
    eventDate: '',
    budget: 'Above ₦50,000',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Event types per Section 38
  const eventTypes = [
    'Wedding',
    'Traditional Wedding',
    'Birthday',
    'Burial',
    'Graduation',
    'Church Event',
    'Corporate Event',
    'Other'
  ];

  const fabricOptions = [
    'French Lace & Cord Velvet',
    'Authentic George & Beaded Trim',
    'Vibrant Ankara Wax Cotton',
    'Italian Cashmere Wool & Senator Blend',
    'Swiss Damask & Brocade',
    'Atiku & Irish Linen',
    'Client Provided Fabric',
    'Other'
  ];

  const colourOptions = [
    'Royal Belford Blue & Silver',
    'Midnight Navy & Ice Blue',
    'Emerald Green & Gold',
    'Coral Peach & Champagne',
    'Burgundy Red & Cream',
    'Monochrome Charcoal & White',
    'Other'
  ];

  const styleOptions = [
    'Coordinated Agbada & Lace Gowns',
    'Uniform Senator Outfits for Men',
    'Matching Corset Ankara Maxi Gowns',
    'Traditional Two-Piece Wrappers & Blouses',
    'Corporate Suiting Delegation',
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

    const effectiveEvent = formData.eventType === 'Other' ? (formData.eventTypeOther || 'Other') : formData.eventType;
    const effectiveFabric = formData.fabric === 'Other' ? (formData.fabricOther || 'Other') : formData.fabric;
    const effectiveColour = formData.colour === 'Other' ? (formData.colourOther || 'Other') : formData.colour;
    const effectiveStyle = formData.style === 'Other' ? (formData.styleOther || 'Other') : formData.style;

    // Exact opening per Section 37
    const msg = `Hello Belford Collection, I would like to make an Aso-Ebi/group order enquiry.

COORDINATOR
Name: ${formData.fullName}
WhatsApp Number: ${formData.whatsappNumber}

EVENT & UNIFORM DETAILS
Event Type: ${effectiveEvent}
Number of People: ${formData.numberOfPeople}
Fabric: ${effectiveFabric}
Colour Theme: ${effectiveColour}
Style Direction: ${effectiveStyle}
Event Date: ${formData.eventDate || 'Flexible'}
Budget Tier: ${formData.budget} per person

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
              Aso-Ebi & Group Orders
            </span>
            <h1 className="font-['Cinzel'] text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Aso-Ebi / Group Orders
            </h1>
            <p className="text-base sm:text-lg text-[#C9D2E3] leading-relaxed font-light">
              Harmonious occasion fashion for weddings, celebrations, corporate bodies, and distinguished families.
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
              Group Enquiry Ready on WhatsApp
            </h2>
            <p className="text-xs sm:text-sm text-[#071A3D]/80 max-w-md mx-auto leading-relaxed">
              Your Aso-Ebi specifications have been prepared. Our group order desk will review fabric cuts, yardage, measurements, and production schedules directly with you.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3.5 bg-[#071A3D] text-white text-xs font-bold uppercase tracking-wider"
              >
                Submit Another Enquiry
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
                Ceremonial Consultation
              </span>
              <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D] mt-1">
                Aso-Ebi & Group Request
              </h2>
              <p className="text-xs text-[#071A3D]/70 mt-1">
                Select options below to define your celebration's sartorial theme.
              </p>
            </div>

            {/* Coordinator Details */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#2563FF] border-b border-[#C9D2E3]/40 pb-2">
                1. Coordinator Information
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
                    placeholder="e.g. Mrs. Ngozi Adeleke"
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
              </div>
            </div>

            {/* Event & Specifications per Section 38 */}
            <div className="space-y-5">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#2563FF] border-b border-[#C9D2E3]/40 pb-2">
                2. Event & Uniform Details
              </h3>

              {/* Event Type: Dropdown per Section 38 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                  Event Type <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                >
                  {eventTypes.map((et) => (
                    <option key={et} value={et}>{et}</option>
                  ))}
                </select>

                {formData.eventType === 'Other' && (
                  <div className="mt-2.5">
                    <input
                      type="text"
                      value={formData.eventTypeOther || ''}
                      onChange={(e) => setFormData({ ...formData, eventTypeOther: e.target.value })}
                      placeholder="Specify your event type..."
                      className="w-full px-3 py-2 bg-white border border-[#2563FF] text-xs text-[#071A3D] focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Number of People: Number selector per Section 38 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                  Number of People <span className="text-rose-500">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, numberOfPeople: Math.max(1, p.numberOfPeople - 1) }))}
                      className="w-12 h-12 border border-[#C9D2E3] bg-[#EAF2FF]/30 flex items-center justify-center text-[#071A3D] hover:bg-[#EAF2FF]"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="w-20 h-12 border-y border-[#C9D2E3] flex items-center justify-center text-sm font-bold bg-white tabular-nums">
                      {formData.numberOfPeople}
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, numberOfPeople: p.numberOfPeople + 1 }))}
                      className="w-12 h-12 border border-[#C9D2E3] bg-[#EAF2FF]/30 flex items-center justify-center text-[#071A3D] hover:bg-[#EAF2FF]"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  {/* Preset quick pills */}
                  <div className="flex gap-2">
                    {[5, 10, 25, 50, 100].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setFormData((p) => ({ ...p, numberOfPeople: preset }))}
                        className={`px-2.5 py-1.5 text-xs font-semibold border ${
                          formData.numberOfPeople === preset
                            ? 'border-[#2563FF] bg-[#2563FF] text-white'
                            : 'border-[#C9D2E3] bg-white text-[#071A3D] hover:border-[#2563FF]'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fabric: Selection where possible per Section 38 */}
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
                      placeholder="Specify required fabric..."
                      className="w-full px-3 py-2 bg-white border border-[#2563FF] text-xs text-[#071A3D] focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Colour: Selection where possible per Section 38 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                  Colour Theme
                </label>
                <select
                  value={formData.colour}
                  onChange={(e) => setFormData({ ...formData, colour: e.target.value })}
                  className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                >
                  {colourOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                {formData.colour === 'Other' && (
                  <div className="mt-2.5">
                    <input
                      type="text"
                      value={formData.colourOther || ''}
                      onChange={(e) => setFormData({ ...formData, colourOther: e.target.value })}
                      placeholder="Specify your wedding or event colour palette..."
                      className="w-full px-3 py-2 bg-white border border-[#2563FF] text-xs text-[#071A3D] focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Style: Selection where possible per Section 38 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                  Style Direction
                </label>
                <select
                  value={formData.style}
                  onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                  className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                >
                  {styleOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                {formData.style === 'Other' && (
                  <div className="mt-2.5">
                    <input
                      type="text"
                      value={formData.styleOther || ''}
                      onChange={(e) => setFormData({ ...formData, styleOther: e.target.value })}
                      placeholder="Specify style requirements for male/female attendees..."
                      className="w-full px-3 py-2 bg-white border border-[#2563FF] text-xs text-[#071A3D] focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Event Date: Date picker per Section 38 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                  Event Date
                </label>
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                />
              </div>

              {/* Budget: Selectable options per Section 38 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-2">
                  Budget Selection (Per Person)
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

              {/* Additional Notes: Text area per Section 38 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Locations for multi-person fittings, special batch deliveries, packaging..."
                  className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                />
              </div>
            </div>

            {/* Button per Section 38: REQUEST GROUP ORDER */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2563FF]/30 flex items-center justify-center gap-2 min-h-[50px]"
              >
                <span>REQUEST GROUP ORDER</span>
                <Send className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#071A3D]/70 text-center mt-2.5">
                Our Aso-Ebi concierge will contact you via WhatsApp with fabric swatches, tiered pricing, and fitting timelines.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
