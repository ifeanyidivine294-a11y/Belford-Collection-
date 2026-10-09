import React from 'react';
import { PageType, PlaceholderConfig } from '../types';
import { BelfordImage } from '../components/BelfordImage';
import { TESTIMONIALS } from '../config/images';
import {
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  Award,
  ArrowRight,
  ShieldCheck
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
              Belford Collection Profile
            </span>
            <h1 className="font-['Cinzel'] text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              18+ Years of Distinguished Fashion
            </h1>
            <p className="text-sm sm:text-base text-[#C9D2E3] leading-relaxed font-light">
              Abadeta State, Nigeria • Contemporary English Wear, African Native & Bespoke Haute Couture
            </p>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* Brand Experience Section per Section 35 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="w-full overflow-hidden shadow-sm">
              <BelfordImage
                src={placeholders.ABOUT_IMAGE_URL}
                alt="Belford Boutique"
                className="w-full h-auto block"
                allowZoom={true}
                onZoom={onOpenLightbox}
              />
            </div>
            <div className="absolute -bottom-4 -right-2 sm:right-4 bg-[#071A3D] text-white p-4 sm:p-5 border-l-4 border-[#2563FF] shadow-lg">
              <p className="font-['Cinzel'] text-sm sm:text-base font-bold">Belford Collection</p>
              <p className="text-[10px] uppercase tracking-wider text-[#C9D2E3] mt-0.5">18+ YEARS OF EXPERIENCE</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF]">
              Brand Experience
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D]">
              More Than Fashion. It's How You Present Yourself.
            </h2>
            <p className="text-base text-[#071A3D]/85 leading-relaxed font-light">
              For more than 18 years, Belford Collection has built a reputation for refined tailoring, personal attention and garments that leave an indelible impression. We believe fashion communicates your confidence, your identity and your ambition before words are spoken.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/50 p-4">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#2563FF] block">
                  Business History
                </span>
                <p className="text-xs text-[#071A3D]/80 mt-1 leading-relaxed">
                  {placeholders.BUSINESS_HISTORY !== '[BUSINESS_HISTORY]'
                    ? placeholders.BUSINESS_HISTORY
                    : '18+ years of dedicated service in Abadeta State, evolving from bespoke native artistry to full English suiting, footwear and beauty.'}
                </p>
              </div>

              <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/50 p-4">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#2563FF] block">
                  Our Values
                </span>
                <p className="text-xs text-[#071A3D]/80 mt-1 leading-relaxed">
                  {placeholders.OUR_VALUES !== '[OUR_VALUES]'
                    ? placeholders.OUR_VALUES
                    : 'Quality craftsmanship, client trust, transparent pricing, and personal wardrobe consultation for every life milestone.'}
                </p>
              </div>

              <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/50 p-4">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#2563FF] block">
                  Our Approach
                </span>
                <p className="text-xs text-[#071A3D]/80 mt-1 leading-relaxed">
                  {placeholders.OUR_APPROACH !== '[OUR_APPROACH]'
                    ? placeholders.OUR_APPROACH
                    : 'Precision cutting, premium fabric sourcing (Italian wool, French lace, Swiss voile), and thorough quality checks before handover.'}
                </p>
              </div>

              <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/50 p-4">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#2563FF] block">
                  Our Promise
                </span>
                <p className="text-xs text-[#071A3D]/80 mt-1 leading-relaxed">
                  {placeholders.OUR_PROMISE !== '[OUR_PROMISE]'
                    ? placeholders.OUR_PROMISE
                    : 'Every client leaves with pieces that command respect, elevate confidence, and stand out for the right reasons.'}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('collections')}
                className="px-7 py-3.5 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>VIEW COLLECTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* CEO & Founder Presentation per Section 12-19 */}
        <div className="bg-[#071A3D] text-white p-8 sm:p-12 lg:p-14 border border-[#2563FF]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm border-2 border-[#2563FF] shadow-2xl overflow-hidden flex flex-col">
                <BelfordImage
                  src={placeholders.CEO_IMAGE_URL}
                  alt={placeholders.CEO_TITLE}
                  className="w-full h-auto block filter brightness-105"
                  allowZoom={true}
                  onZoom={onOpenLightbox}
                />
                <div className="p-5 bg-[#071A3D] border-t border-[#2563FF]/30">
                  <span className="text-[10px] font-bold text-[#2563FF] tracking-[0.25em] uppercase block">
                    CEO & FOUNDER
                  </span>
                  <p className="font-['Cinzel'] text-lg font-bold text-white mt-1">
                    {placeholders.CEO_TITLE}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF] bg-[#2563FF]/10 px-3 py-1 border border-[#2563FF]/30 inline-block mb-2">
                  THE VISION
                </span>
                <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-white">
                  Fashion That Makes You Feel Unforgettable.
                </h3>
              </div>

              <blockquote className="border-l-4 border-[#2563FF] pl-4 py-1 text-sm sm:text-base text-[#C9D2E3] font-serif italic leading-relaxed">
                {placeholders.CEO_MESSAGE}
              </blockquote>

              <p className="text-sm text-[#C9D2E3]/90 leading-relaxed font-light">
                {placeholders.CEO_MESSAGE_PART2}
              </p>

              <div className="border-t border-white/10 pt-4">
                <p className="font-['Cinzel'] text-lg font-semibold text-white italic">
                  {placeholders.CEO_QUOTE}
                </p>
                <p className="text-xs text-[#2563FF] uppercase tracking-wider font-bold mt-1">
                  — CEO & Founder, Belford Collection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Standards & Why Belford */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF]">
              Belford Standards
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D]">
              Why Clients Choose Belford
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/60 p-7 space-y-3">
              <div className="w-10 h-10 bg-[#2563FF] text-white flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-['Cinzel'] text-base font-bold text-[#071A3D] uppercase tracking-wide">
                PERSONAL ATTENTION
              </h3>
              <p className="text-xs sm:text-sm text-[#071A3D]/75 leading-relaxed">
                Direct styling guidance and fittings that understand your personality, event, and silhouette.
              </p>
            </div>

            <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/60 p-7 space-y-3">
              <div className="w-10 h-10 bg-[#071A3D] text-white flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#2563FF]" />
              </div>
              <h3 className="font-['Cinzel'] text-base font-bold text-[#071A3D] uppercase tracking-wide">
                CONFIRM BEFORE PAYMENT
              </h3>
              <p className="text-xs sm:text-sm text-[#071A3D]/75 leading-relaxed">
                Size, fabric cut, and delivery are verified with you on WhatsApp before payment is received.
              </p>
            </div>

            <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/60 p-7 space-y-3">
              <div className="w-10 h-10 bg-[#2563FF] text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-['Cinzel'] text-base font-bold text-[#071A3D] uppercase tracking-wide">
                IMPECCABLE FINISHING
              </h3>
              <p className="text-xs sm:text-sm text-[#071A3D]/75 leading-relaxed">
                Every seam, button, hem, and lining is inspected under strict quality criteria before dispatch.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-6 pt-6 border-t border-[#C9D2E3]/50">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF]">
                Client Reflections
              </span>
              <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D] mt-1">
                Client Experiences
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="bg-[#EAF2FF]/30 border border-[#C9D2E3]/60 p-5 space-y-3 flex flex-col justify-between">
                <p className="text-xs text-[#071A3D]/80 leading-relaxed font-serif italic">
                  “{item.text}”
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#C9D2E3]/40">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#071A3D]">
                    {item.location}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-[#2563FF] bg-[#2563FF]/10 px-1.5 py-0.5">
                    Verified Order
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-[#071A3D] text-white p-10 sm:p-14 text-center space-y-5">
          <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold">
            Experience Belford Collection
          </h2>
          <p className="text-sm text-[#C9D2E3] max-w-lg mx-auto font-light">
            Located in Abadeta State, Nigeria. We look forward to assisting your wardrobe for everyday distinction and special celebrations.
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
