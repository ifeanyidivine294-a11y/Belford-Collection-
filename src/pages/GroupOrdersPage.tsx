import React, { useState } from 'react';
import { PageType, PlaceholderConfig, GroupOrderFormState } from '../types';
import { formatWhatsAppUrl } from '../config/placeholders';
import { BelfordImage } from '../components/BelfordImage';
import { Users, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

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
    numberOfPeople: '10',
    fabric: 'Aso-Ebi Lace / Ankara Curation',
    colour: 'Belford Cobalt & Navy Palette',
    style: 'Coordinated Gowns & Senator Sets',
    eventDate: '',
    budget: '₦200,000 – ₦500,000',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

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

  const budgetTiers = [
    'Below ₦150,000',
    '₦150,000–₦300,000',
    '₦300,000–₦600,000',
    'Above ₦600,000'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Section 29: Exact Group Order WhatsApp message format
    const msg = `Hello Belford Collection, I would like to enquire about a group/Aso-Ebi order.

Name: ${formData.fullName}
WhatsApp: ${formData.whatsappNumber}
Event: ${formData.eventType}
Number of People: ${formData.numberOfPeople}
Fabric: ${formData.fabric}
Colour: ${formData.colour}
Style: ${formData.style}
Event Date: ${formData.eventDate || 'Flexible'}
Budget: ${formData.budget}
Notes: ${formData.additionalNotes || 'None'}`;

    const url = formatWhatsAppUrl(placeholders.WHATSAPP_NUMBER, msg);
    window.open(url, '_blank');
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D]">
      {/* Hero */}
      <section className="bg-[#071A3D] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <BelfordImage
            src={placeholders.CUSTOM_FASHION_IMAGE_URL}
            alt="Group Orders Atelier"
            className="w-full h-full object-cover object-center"
            allowZoom={false}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
              Aso-Ebi & Group Orders
            </span>
            <h1 className="font-['Cinzel'] text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Aso-Ebi & Group Fashion
            </h1>
            {/* Section 22 Page intro: one sentence per Section 48 */}
            <p className="text-base sm:text-lg text-[#C9D2E3] leading-relaxed font-light">
              Coordinated fashion for weddings, celebrations and memorable group occasions.
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
              Group Enquiry Sent to Concierge
            </h2>
            <p className="text-xs sm:text-sm text-[#071A3D]/80 max-w-md mx-auto leading-relaxed">
              Your group order details have been formatted. Our Aso-Ebi manager will coordinate fabric cuts, individual measurements, and production schedules directly with you.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-[#071A3D] text-white text-xs font-bold uppercase tracking-wider"
              >
                Submit Another Enquiry
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
                Aso-Ebi & Group Request Form
              </h2>
              <p className="text-xs text-[#071A3D]/70 mt-1">
                From bridal parties to traditional celebrations and corporate delegations, we ensure unified elegance.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#2563FF] border-b pb-2">
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

            {/* Event & Specifications */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#2563FF] border-b pb-2">
                2. Event & Uniform Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Number of People <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.numberOfPeople}
                    onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    {['2 to 5', '6 to 10', '11 to 20', '21 to 50', '50+ People'].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Fabric Preference
                  </label>
                  <input
                    type="text"
                    value={formData.fabric}
                    onChange={(e) => setFormData({ ...formData, fabric: e.target.value })}
                    placeholder="e.g. French Lace, George, Ankara, Cashmere Wool"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Colour Palette
                  </label>
                  <input
                    type="text"
                    value={formData.colour}
                    onChange={(e) => setFormData({ ...formData, colour: e.target.value })}
                    placeholder="e.g. Cobalt & Champagne Silver, Navy & Rose"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Style Preference
                  </label>
                  <input
                    type="text"
                    value={formData.style}
                    onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                    placeholder="e.g. Traditional Agbada for men, Corset lace gowns for women"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

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

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    {budgetTiers.map((b) => (
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
                    placeholder="Delivery locations, fitting requirements, or key dates..."
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>
              </div>
            </div>

            {/* Button per Section 22: "REQUEST GROUP ORDER" */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2563FF]/30 flex items-center justify-center gap-2 min-h-[50px]"
              >
                <span>REQUEST GROUP ORDER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#071A3D]/60 text-center mt-2.5">
                Our team will connect with you on WhatsApp with fabric samples, pricing, and scheduling.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
