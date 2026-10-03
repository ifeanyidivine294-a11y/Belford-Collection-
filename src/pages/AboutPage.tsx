import React from 'react';
import { PageType, PlaceholderConfig } from '../types';
import { BelfordImage } from '../components/BelfordImage';
import { TESTIMONIALS } from '../config/images';
import {
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Eye,
  Clock,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenLightbox: (imgUrl: string, title?: string) => void;
  placeholders: PlaceholderConfig;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenLightbox,
  placeholders
}) => {
  return (
    <div className="bg-[#FFFFFF] text-[#071A3D]">
      {/* Editorial Hero Header */}
      <section className="bg-[#071A3D] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <BelfordImage
            src={placeholders.ABOUT_IMAGE_URL}
            alt="Belford Atelier"
            className="w-full h-full object-cover object-center"
            allowZoom={false}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
              Belford Boutique Profile
            </span>
            {/* Section 33 Heading (Max 8 words per Section 48) */}
            <h1 className="font-['Cinzel'] text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Fashion With Purpose And Presence.
            </h1>
            <p className="text-sm sm:text-base text-[#C9D2E3] leading-relaxed font-light">
              Agbor, Delta State • Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* Section 33: About Copy (Max 60 words) & Atelier Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[3/4] sm:aspect-[4/5] bg-[#F8FAFC] border border-[#C9D2E3]/60 rounded-sm overflow-hidden shadow-md flex items-center justify-center p-3">
              <BelfordImage
                src={placeholders.ABOUT_IMAGE_URL}
                alt="Belford Boutique"
                objectFit="contain"
                className="w-full h-full object-contain object-center"
                allowZoom={true}
                onZoom={onOpenLightbox}
              />
            </div>
            <div className="absolute -bottom-4 -right-2 sm:right-4 bg-[#071A3D] text-white p-4 sm:p-5 border-l-4 border-[#2563FF] shadow-lg rounded-sm">
              <p className="font-['Cinzel'] text-sm sm:text-base font-bold">Belford Collection</p>
              <p className="text-[10px] uppercase tracking-wider text-[#C9D2E3] mt-0.5">Agbor Flagship Boutique</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF]">
              Our Identity
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D]">
              Refined Style. Personal Service.
            </h2>
            {/* Exact About copy: strictly max 60 words per Section 33 & 48 */}
            <p className="text-base text-[#071A3D]/85 leading-relaxed font-light">
              {placeholders.ABOUT_STORY}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('collections')}
                className="px-8 py-3.5 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-200 shadow-md inline-flex items-center gap-2"
              >
                <span>VIEW COLLECTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Section 34: CEO & Founder Section (Max 35 words message) */}
        <div className="bg-[#071A3D] text-white p-8 sm:p-12 lg:p-14 border border-[#2563FF]/30 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] bg-[#F8FAFC] border-2 border-[#2563FF]/50 rounded-sm shadow-2xl overflow-hidden flex items-center justify-center p-3">
                <BelfordImage
                  src={placeholders.CEO_IMAGE_URL}
                  alt={placeholders.CEO_TITLE}
                  objectFit="contain"
                  className="w-full h-full object-contain object-center"
                  allowZoom={true}
                  onZoom={onOpenLightbox}
                />
                <div className="absolute top-4 left-4 bg-[#071A3D] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-[#2563FF]/40 rounded-sm">
                  BOUTIQUE LEADERSHIP
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF] bg-[#2563FF]/10 px-3 py-1 border border-[#2563FF]/30">
                  CEO & FOUNDER
                </span>
                <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-white mt-3">
                  The Vision Behind Belford
                </h3>
              </div>

              {/* Exact CEO Message: Maximum 35 words per Section 34 & 48 */}
              <blockquote className="border-l-2 border-[#2563FF] pl-4 py-1 text-sm sm:text-base text-[#C9D2E3] font-serif italic leading-relaxed">
                {placeholders.CEO_MESSAGE}
              </blockquote>

              <p className="text-xs font-['Cinzel'] text-white tracking-wider font-semibold">
                — {placeholders.CEO_TITLE}
              </p>
            </div>
          </div>
        </div>

        {/* Section 31: HOW WE TREAT OUR CUSTOMERS (Three-card section) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF]">
              Client Care
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D]">
              How We Treat Our Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/60 p-7 space-y-3 rounded-md">
              <div className="w-10 h-10 bg-[#2563FF] text-white flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-['Cinzel'] text-base font-bold text-[#071A3D] uppercase tracking-wide">
                PERSONAL STYLING HELP
              </h3>
              <p className="text-xs sm:text-sm text-[#071A3D]/75 leading-relaxed">
                We help you choose pieces that suit your style, occasion and desired impression.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/60 p-7 space-y-3 rounded-md">
              <div className="w-10 h-10 bg-[#071A3D] text-white flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#2563FF]" />
              </div>
              <h3 className="font-['Cinzel'] text-base font-bold text-[#071A3D] uppercase tracking-wide">
                CONFIRM BEFORE PAYMENT
              </h3>
              <p className="text-xs sm:text-sm text-[#071A3D]/75 leading-relaxed">
                Size, availability and key order details are confirmed with you before payment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/60 p-7 space-y-3 rounded-md">
              <div className="w-10 h-10 bg-[#2563FF] text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-['Cinzel'] text-base font-bold text-[#071A3D] uppercase tracking-wide">
                CAREFUL FINISHING
              </h3>
              <p className="text-xs sm:text-sm text-[#071A3D]/75 leading-relaxed">
                Every order is checked carefully before handover, delivery or pickup.
              </p>
            </div>
          </div>

          <p className="text-xs text-[#071A3D]/70 text-center font-medium">
            Quick WhatsApp replies keep your order moving clearly and efficiently.
          </p>
        </div>

        {/* Section 32: WHY BELFORD (Four-point trust section) */}
        <div className="bg-[#FFFFFF] border border-[#C9D2E3]/70 p-8 sm:p-12 space-y-8 rounded-lg shadow-sm">
          <div className="max-w-xl space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF]">
              Boutique Standards
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D]">
              Why Belford
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#071A3D] flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#2563FF] rounded-full" />
                <span>PERSONAL ATTENTION</span>
              </h3>
              <p className="text-xs text-[#071A3D]/75 leading-relaxed">
                Fashion guidance built around your needs and occasion.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#071A3D] flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#2563FF] rounded-full" />
                <span>CLEAR ORDERING</span>
              </h3>
              <p className="text-xs text-[#071A3D]/75 leading-relaxed">
                Details are confirmed before payment or fulfilment.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#071A3D] flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#2563FF] rounded-full" />
                <span>CAREFUL PRESENTATION</span>
              </h3>
              <p className="text-xs text-[#071A3D]/75 leading-relaxed">
                Orders are checked and prepared with attention to detail.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#071A3D] flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#2563FF] rounded-full" />
                <span>RESPONSIVE SERVICE</span>
              </h3>
              <p className="text-xs text-[#071A3D]/75 leading-relaxed">
                Quick WhatsApp communication keeps every enquiry moving.
              </p>
            </div>
          </div>
        </div>

        {/* Section 35: TESTIMONIALS (Sample Reviews with honest disclaimer) */}
        <div className="space-y-6 pt-6 border-t border-[#C9D2E3]/50">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF]">
                Client Experience
              </span>
              <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D] mt-1">
                Client Experiences
              </h2>
            </div>
            {/* Disclaimer required by Section 35 & 53 */}
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#071A3D]/60 bg-gray-100 px-2.5 py-1 border border-gray-200">
              SAMPLE REVIEW — REPLACE WITH VERIFIED CUSTOMER FEEDBACK
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="bg-[#EAF2FF]/30 border border-[#C9D2E3]/60 p-5 space-y-3 rounded-md flex flex-col justify-between">
                <p className="text-xs text-[#071A3D]/80 leading-relaxed font-serif italic">
                  “{item.text}”
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#C9D2E3]/40">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#071A3D]">
                    {item.location}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-[#2563FF] bg-[#2563FF]/10 px-1.5 py-0.5 rounded">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-[#071A3D] text-white p-10 sm:p-14 text-center space-y-5 rounded-lg">
          <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold">
            Visit Or Contact Belford Collection
          </h2>
          <p className="text-sm text-[#C9D2E3] max-w-lg mx-auto font-light">
            No. 2 Citycare Estate, Agbor, Delta State, Nigeria. We look forward to assisting your wardrobe.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-md"
            >
              CONTACT US
            </button>
            <button
              onClick={() => onNavigate('custom-made')}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase transition-all"
            >
              REQUEST BESPOKE PIECE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
