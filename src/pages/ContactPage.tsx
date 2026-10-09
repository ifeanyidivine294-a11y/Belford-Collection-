import React, { useState } from 'react';
import { PageType, PlaceholderConfig } from '../types';
import { formatWhatsAppUrl } from '../config/placeholders';
import { Phone, MessageCircle, MapPin, Mail, Navigation, Send, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  placeholders: PlaceholderConfig;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  placeholders
}) => {
  const [enquiry, setEnquiry] = useState({
    name: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Belford Collection, I would like to make an enquiry.

Name: ${enquiry.name}
Phone: ${enquiry.phone}
Subject: ${enquiry.subject}
Message: ${enquiry.message}`;

    const url = formatWhatsAppUrl(placeholders.WHATSAPP_NUMBER, msg);
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const mapsUrl = placeholders.GOOGLE_MAPS_URL.startsWith('http')
    ? placeholders.GOOGLE_MAPS_URL
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeholders.LOCATION + ', Nigeria')}`;

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
            Boutique Concierge • 18+ Years
          </span>
          <h1 className="font-['Cinzel'] text-4xl sm:text-5xl font-bold tracking-tight text-[#071A3D]">
            Contact Us
          </h1>
          <p className="text-sm text-[#071A3D]/70 leading-relaxed font-light">
            Connect directly with our fashion house for orders, bespoke consultations, or group enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Brand Information per Section 40 */}
          <div className="lg:col-span-6 space-y-8 bg-[#EAF2FF]/50 border border-[#C9D2E3]/60 p-8 sm:p-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2563FF]">
                Official Fashion House
              </span>
              <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#071A3D] mt-1">
                Belford Collection
              </h2>
              <p className="text-xs text-[#071A3D]/70 uppercase tracking-widest mt-0.5">
                {placeholders.EXPERIENCE} OF DISTINGUISHED SERVICE
              </p>
            </div>

            {/* Display specifications per Section 40 */}
            <div className="space-y-4 text-sm text-[#071A3D]/85 border-y border-[#C9D2E3]/40 py-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2563FF] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs uppercase text-[#071A3D] font-bold">Location</strong>
                  <p>{placeholders.LOCATION}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#2563FF] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs uppercase text-[#071A3D] font-bold">Telephone</strong>
                  <p className="tabular-nums">{placeholders.PHONE_NUMBER}</p>
                  <p className="tabular-nums text-xs text-[#071A3D]/70 mt-0.5">{placeholders.INTERNATIONAL_PHONE}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#2563FF] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs uppercase text-[#071A3D] font-bold">Email</strong>
                  <a href={`mailto:${placeholders.EMAIL_ADDRESS}`} className="hover:text-[#2563FF] transition-colors">
                    {placeholders.EMAIL_ADDRESS}
                  </a>
                </div>
              </div>
            </div>

            {/* Required Action Buttons per Section 40: CALL, WHATSAPP, GET DIRECTIONS */}
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-gray-500 block">
                Direct Affordances:
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${placeholders.PHONE_NUMBER}`}
                  className="px-6 py-3.5 bg-[#071A3D] hover:bg-[#2563FF] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL</span>
                </a>

                <a
                  href={formatWhatsAppUrl(
                    placeholders.WHATSAPP_NUMBER,
                    'Hello Belford Collection, I would like to make an enquiry.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white hover:bg-gray-50 border border-[#071A3D] text-[#071A3D] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#2563FF]" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>

            {/* Social channels per Section 40 */}
            <div className="pt-2 text-xs text-[#071A3D]/80 space-y-1.5">
              <strong className="block text-xs uppercase text-[#071A3D] font-bold mb-2">Social Channels</strong>
              <p>
                <a
                  href={placeholders.FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563FF] hover:underline font-medium"
                >
                  Facebook: facebook.com/profile.php?id=61578326773110
                </a>
              </p>
              <p>
                <span className="text-gray-500">Instagram:</span>{' '}
                {placeholders.INSTAGRAM_URL}
              </p>
              <p>
                <span className="text-gray-500">TikTok:</span>{' '}
                {placeholders.TIKTOK_URL}
              </p>
            </div>
          </div>

          {/* Right Column: Message Concierge Form */}
          <div className="lg:col-span-6 bg-white border border-[#C9D2E3]/60 p-8 sm:p-10 shadow-xs">
            <h2 className="font-['Cinzel'] text-2xl font-bold text-[#071A3D]">
              Send Direct Message
            </h2>
            <p className="text-xs text-[#071A3D]/70 mt-1 mb-6">
              Our styling concierge monitors enquiries and responds promptly.
            </p>

            {submitted ? (
              <div className="bg-[#EAF2FF]/50 border border-[#2563FF]/30 p-6 text-center space-y-4">
                <div className="w-10 h-10 bg-[#2563FF] text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-['Cinzel'] text-xl font-bold text-[#071A3D]">
                  Message Ready On WhatsApp
                </h3>
                <p className="text-xs text-[#071A3D]/75">
                  Your message has been pre-formatted for instant WhatsApp chat.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#071A3D] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={enquiry.name}
                    onChange={(e) => setEnquiry({ ...enquiry, name: e.target.value })}
                    placeholder="e.g. Divine Ifeanyi"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    WhatsApp Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={enquiry.phone}
                    onChange={(e) => setEnquiry({ ...enquiry, phone: e.target.value })}
                    placeholder="e.g. 09069710687"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Enquiry Subject
                  </label>
                  <select
                    value={enquiry.subject}
                    onChange={(e) => setEnquiry({ ...enquiry, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    <option value="Product Availability & Order">Product Availability & Order</option>
                    <option value="Bespoke Tailoring Request">Bespoke Tailoring Request</option>
                    <option value="Aso-Ebi / Group Order">Aso-Ebi / Group Order</option>
                    <option value="Exchange or Sizing Request">Exchange or Sizing Request</option>
                    <option value="General Concierge Assistance">General Concierge Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={enquiry.message}
                    onChange={(e) => setEnquiry({ ...enquiry, message: e.target.value })}
                    placeholder="How may Belford Collection assist your wardrobe?"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2563FF]/30 flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND TO WHATSAPP</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
