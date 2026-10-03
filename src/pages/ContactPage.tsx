import React, { useState } from 'react';
import { PageType, PlaceholderConfig } from '../types';
import { formatWhatsAppUrl } from '../config/placeholders';
import { Phone, MessageCircle, MapPin, Mail, Navigation, Send, CheckCircle2, CreditCard } from 'lucide-react';

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

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
            Boutique Concierge
          </span>
          <h1 className="font-['Cinzel'] text-4xl sm:text-5xl font-bold tracking-tight text-[#071A3D]">
            Contact Us
          </h1>
          <p className="text-sm text-[#071A3D]/70 leading-relaxed font-light">
            Visit our Agbor boutique or reach out directly on phone or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Business Info & Action Buttons (Section 30) */}
          <div className="lg:col-span-6 space-y-8 bg-[#EAF2FF]/50 border border-[#C9D2E3]/60 p-8 sm:p-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2563FF]">
                Official Brand Details
              </span>
              <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D] mt-1">
                {placeholders.BUSINESS_NAME}
              </h2>
              <p className="text-xs text-[#071A3D]/70 uppercase tracking-widest mt-0.5">
                {placeholders.BUSINESS_TYPE}
              </p>
            </div>

            <div className="space-y-4 text-sm text-[#071A3D]/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2563FF] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs uppercase text-[#071A3D] font-bold">Address</strong>
                  <p>{placeholders.ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#2563FF] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs uppercase text-[#071A3D] font-bold">Phone Number</strong>
                  <p>{placeholders.PHONE_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#2563FF] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs uppercase text-[#071A3D] font-bold">WhatsApp Direct</strong>
                  <p>{placeholders.WHATSAPP_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#2563FF] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs uppercase text-[#071A3D] font-bold">Email</strong>
                  <p>{placeholders.EMAIL_ADDRESS}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons: CALL, WHATSAPP, GET DIRECTIONS (Section 30 & Instruction 8 & 11) */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`tel:${placeholders.PHONE_NUMBER}`}
                className="px-6 py-3.5 bg-[#071A3D] hover:bg-[#112d61] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 shadow-sm inline-flex items-center gap-2 active:scale-[0.99]"
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
                className="px-6 py-3.5 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 shadow-sm inline-flex items-center gap-2 active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Asaba%2C+Delta+State%2C+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#EAF2FF] hover:bg-[#d5e5ff] border border-[#2563FF]/30 text-[#071A3D] text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 inline-flex items-center gap-2 active:scale-[0.99]"
              >
                <Navigation className="w-4 h-4 text-[#2563FF]" />
                <span>GET DIRECTIONS (ASABA, DELTA STATE)</span>
              </a>
            </div>

            {/* Official Payment Account Details (Section 24 & 30) */}
            <div className="bg-white p-5 border border-[#C9D2E3] rounded-md space-y-3">
              <div className="flex items-center gap-2 border-b border-[#C9D2E3]/50 pb-2">
                <CreditCard className="w-4 h-4 text-[#2563FF]" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#071A3D]">
                  PalmPay Transfer Details
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-[#071A3D]/60 block text-[10px] uppercase">Platform</span>
                  <span className="font-semibold text-[#071A3D]">{placeholders.PALMPAY_PLATFORM}</span>
                </div>
                <div>
                  <span className="text-[#071A3D]/60 block text-[10px] uppercase">Account/Number</span>
                  <span className="font-bold text-[#071A3D]">{placeholders.PALMPAY_NUMBER}</span>
                </div>
                <div>
                  <span className="text-[#071A3D]/60 block text-[10px] uppercase">Account Name</span>
                  <span className="font-semibold text-[#071A3D]">{placeholders.PALMPAY_NAME}</span>
                </div>
              </div>
              <p className="text-[11px] text-[#071A3D]/60 pt-1 border-t border-[#C9D2E3]/30">
                {placeholders.PAYMENT_DETAILS}
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-6 bg-white border border-[#C9D2E3]/60 p-8 sm:p-10 shadow-sm">
            <h2 className="font-['Cinzel'] text-2xl font-bold text-[#071A3D]">
              Send A Message
            </h2>
            <p className="text-xs text-[#071A3D]/70 mt-1 mb-6">
              Our team responds promptly to all wardrobe inquiries.
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
                  Your message was formatted and directed to our concierge on WhatsApp.
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
                    Your Name <span className="text-rose-500">*</span>
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
                    <option value="Product Availability & Pricing">Product Availability & Pricing</option>
                    <option value="Custom Tailoring Consultation">Custom Tailoring Consultation</option>
                    <option value="Aso-Ebi & Group Orders">Aso-Ebi & Group Orders</option>
                    <option value="Delivery or Pickup Status">Delivery or Pickup Status</option>
                    <option value="Exchange or Return">Exchange or Return</option>
                    <option value="Other Enquiries">Other Enquiries</option>
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
                    placeholder="How may Belford Collection assist you?"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2563FF]/30 flex items-center justify-center gap-2 min-h-[48px]"
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
