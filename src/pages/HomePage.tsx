import React from 'react';
import { PageType, PlaceholderConfig, Product } from '../types';
import { formatPrice, CurrencyCode } from '../utils/formatters';
import { formatWhatsAppUrl } from '../config/placeholders';
import { BelfordImage } from '../components/BelfordImage';
import {
  ArrowRight,
  MessageCircle,
  ChevronRight,
  ShoppingBag,
  Eye,
  Quote
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onSelectProduct: (product: Product) => void;
  onQuickOrderProduct: (product: Product) => void;
  onOpenLightbox: (imgUrl: string, title?: string) => void;
  placeholders: PlaceholderConfig;
  currency: CurrencyCode;
  featuredProducts: Product[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onQuickOrderProduct,
  onOpenLightbox,
  placeholders,
  currency,
  featuredProducts
}) => {
  // Section 7: Exactly Four Featured Collections with specific copy & images
  const collectionCards = [
    {
      title: 'MEN',
      subtitle: 'English & Native Wear',
      description: 'Refined English and native styles for confident men.',
      buttonText: 'EXPLORE MEN',
      image: placeholders.MEN_COLLECTION_IMAGE_URL, // "https://postimg.cc/5YGwrqzX"
      page: 'men' as PageType,
    },
    {
      title: 'WOMEN',
      subtitle: 'Effortless Presence',
      description: 'Elegant womenswear designed for confidence, occasion and effortless presence.',
      buttonText: 'EXPLORE WOMEN',
      image: placeholders.WOMEN_COLLECTION_IMAGE_URL, // "https://postimg.cc/5YK6V0TH" (Section 7, 8, 49)
      page: 'women' as PageType,
    },
    {
      title: 'FOOTWEAR & ACCESSORIES',
      subtitle: 'Finishing Touches',
      description: 'Finishing pieces that complete a polished wardrobe.',
      buttonText: 'EXPLORE ACCESSORIES',
      image: placeholders.ACCESSORIES_COLLECTION_IMAGE_URL, // "https://postimg.cc/TLSrsqby"
      page: 'footwear-accessories' as PageType,
    },
    {
      title: 'BEAUTY',
      subtitle: 'Beauty Essentials',
      description: 'Beauty essentials selected to complete your look.',
      buttonText: 'EXPLORE BEAUTY',
      image: placeholders.BEAUTY_COLLECTION_IMAGE_URL, // "https://postimg.cc/G8NkfJDy"
      page: 'beauty' as PageType,
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D]">
      {/* 1. HERO SECTION (Section 6) */}
      <section className="relative bg-[#071A3D] text-white min-h-[85vh] lg:min-h-[88vh] flex items-center overflow-hidden">
        {/* Exact supplied hero image: "https://postimg.cc/jw9z1QfL" */}
        <div className="absolute inset-0 z-0">
          <BelfordImage
            src={placeholders.HERO_IMAGE_URL}
            alt="Belford Collection Haute Couture"
            className="w-full h-full object-cover object-center opacity-45 lg:opacity-55 scale-105"
            allowZoom={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D] via-[#071A3D]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D] via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9D2E3]">
              <span className="w-7 h-[2px] bg-[#2563FF]" />
              <span>Belford Collection • Agbor, Delta State</span>
            </div>

            {/* Headline: Maximum 8 words (Section 6 & 48) */}
            <h1 className="font-['Cinzel'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Dress Well. Be Remembered.
            </h1>

            {/* Intro: Maximum 20 words (Section 6 & 48) */}
            <p className="text-base sm:text-lg text-[#C9D2E3] leading-relaxed max-w-xl font-light">
              Premium fashion for confident men and women, selected for modern Nigerian life and special occasions.
            </p>

            {/* Buttons (Section 6 & 43) */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onNavigate('collections')}
                className="group px-8 py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2563FF]/30 active:scale-[0.98] flex items-center gap-3 min-h-[48px]"
              >
                <span>SHOP COLLECTION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={formatWhatsAppUrl(
                  placeholders.WHATSAPP_NUMBER,
                  'Hello Belford Collection, I would like to order on WhatsApp.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2.5 backdrop-blur-sm min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-[#2563FF]" />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>

            {/* Small supporting line (Section 6) */}
            <div className="pt-4 border-t border-white/15 text-xs text-[#C9D2E3]/90 tracking-wider">
              Fashion • Footwear • Accessories • Beauty • Custom Tailoring
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR FEATURED COLLECTIONS (Section 7, 8, 49) */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
              Curated Departments
            </span>
            <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#071A3D] mt-2">
              Featured Collections
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {collectionCards.map((card) => (
              <div
                key={card.title}
                onClick={() => onNavigate(card.page)}
                className="group cursor-pointer bg-white border border-[#C9D2E3]/60 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-[#2563FF]/50"
              >
                {/* Visual Area with exact supplied image: Full-Body Contain */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-[#F8FAFC] flex items-center justify-center p-3 border-b border-[#C9D2E3]/30">
                  <BelfordImage
                    src={card.image}
                    alt={card.title}
                    objectFit="contain"
                    className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                    allowZoom={true}
                    onZoom={onOpenLightbox}
                  />
                  <div className="absolute top-4 left-4 bg-[#071A3D] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-[#2563FF]/40 rounded-sm">
                    {card.title}
                  </div>
                </div>

                {/* Editorial Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="font-['Cinzel'] text-2xl font-bold text-[#071A3D] tracking-wide group-hover:text-[#2563FF] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2563FF] font-medium mt-1 uppercase tracking-wider">
                      {card.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#071A3D]/75 mt-3 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#C9D2E3]/40 flex items-center justify-between">
                    <span className="px-5 py-2.5 bg-[#071A3D] group-hover:bg-[#2563FF] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-200 inline-flex items-center gap-2">
                      <span>{card.buttonText}</span>
                      <ChevronRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUR FEATURED PRODUCTS (Section 9) */}
      <section className="py-20 lg:py-24 bg-[#EAF2FF]/40 border-y border-[#C9D2E3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
                Selected Highlights
              </span>
              <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#071A3D] mt-2">
                Featured Highlights
              </h2>
            </div>
            <p className="text-xs text-[#071A3D]/70 mt-2 sm:mt-0 font-medium">
              Four iconic items curated from our Agbor atelier
            </p>
          </div>

          {/* 4 Cards with Full-Body Model Display and Premium CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#C9D2E3]/60 rounded-sm flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-[#2563FF]/50 overflow-hidden"
              >
                {/* Full-Body Image Container: No head, chest, waist or feet cutoff */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="cursor-pointer relative aspect-[3/4] sm:aspect-[4/5] bg-[#F8FAFC] flex items-center justify-center p-3 overflow-hidden border-b border-[#C9D2E3]/30"
                >
                  <BelfordImage
                    src={product.image}
                    alt={product.name}
                    objectFit="contain"
                    className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-300"
                    allowZoom={true}
                    onZoom={onOpenLightbox}
                  />
                  {/* ESTIMATE label */}
                  <div className="absolute top-3 left-3 bg-[#071A3D] text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                    ESTIMATE
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-medium text-base text-[#071A3D] group-hover:text-[#2563FF] transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#071A3D]/70 mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#C9D2E3]/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-semibold text-sm text-[#071A3D] tabular-nums">
                          {product.priceDisplay || formatPrice(product.price, currency)}
                        </span>
                        <span className="text-[10px] font-bold text-[#2563FF] uppercase tracking-wider bg-[#EAF2FF] px-2 py-0.5 rounded-sm">
                          ESTIMATE
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
                        Available
                      </span>
                    </div>

                    {/* Premium CTA Buttons */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="py-2.5 px-3 bg-[#EAF2FF] hover:bg-[#d5e5ff] text-[#071A3D] border border-[#2563FF]/30 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#2563FF]" />
                        <span>VIEW</span>
                      </button>
                      <button
                        onClick={() => onQuickOrderProduct(product)}
                        className="py-2.5 px-3 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 shadow-xs flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>ORDER</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('collections')}
              className="px-8 py-3.5 bg-[#071A3D] hover:bg-[#2563FF] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-200 shadow-md inline-flex items-center gap-2.5"
            >
              <span>VIEW ALL COLLECTIONS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. CUSTOM-MADE HIGHLIGHT (Section 20) */}
      <section className="relative py-20 lg:py-28 bg-[#071A3D] text-white overflow-hidden">
        {/* Exact supplied image: "https://postimg.cc/1fzKzXmt" */}
        <div className="absolute inset-0 z-0">
          <BelfordImage
            src={placeholders.CUSTOM_FASHION_IMAGE_URL}
            alt="Belford Custom Tailoring Atelier"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            allowZoom={false}
          />
          <div className="absolute inset-0 bg-[#071A3D]/80 backdrop-blur-xs" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF]">
            Bespoke Tailoring
          </span>
          {/* Heading: Maximum 8 words (Section 20 & 48) */}
          <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Made For You. Made To Stand Out.
          </h2>
          {/* Intro: Maximum 20 words (Section 20 & 48) */}
          <p className="text-base sm:text-lg text-[#C9D2E3] max-w-xl mx-auto leading-relaxed font-light">
            Custom tailoring shaped around your style, measurements and occasion.
          </p>
          <div className="pt-3">
            <button
              onClick={() => onNavigate('custom-made')}
              className="px-8 py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] shadow-lg inline-flex items-center gap-2.5 min-h-[48px]"
            >
              <span>REQUEST CUSTOM DESIGN</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. SHORT BRAND & CEO SECTION (Section 33 & 34) */}
      <section className="py-20 lg:py-24 bg-[#071A3D] text-white border-t border-[#C9D2E3]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* CEO Portrait (Section 34: "https://postimg.cc/QBtPgGW9") */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] bg-[#0d2757] border-2 border-[#2563FF]/50 rounded-lg shadow-2xl overflow-hidden group">
                <BelfordImage
                  src={placeholders.CEO_IMAGE_URL}
                  alt={placeholders.CEO_TITLE}
                  className="w-full h-full object-cover object-top filter brightness-105"
                  allowZoom={true}
                  onZoom={onOpenLightbox}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-bold text-[#2563FF] tracking-[0.25em] uppercase block mb-1">
                    FOUNDER PROFILE
                  </span>
                  <p className="font-['Cinzel'] text-xl font-bold text-white">
                    {placeholders.CEO_TITLE}
                  </p>
                </div>
              </div>
            </div>

            {/* Short Brand Story & CEO Message */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF] bg-[#2563FF]/10 px-3 py-1 border border-[#2563FF]/30 rounded-sm">
                  CEO & FOUNDER
                </span>
                {/* Heading: Maximum 8 words (Section 33 & 48) */}
                <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-white mt-3 leading-snug">
                  Fashion With Purpose And Presence.
                </h2>
              </div>

              {/* About copy: Maximum 60 words (Section 33 & 48) */}
              <p className="text-sm sm:text-base text-[#C9D2E3]/95 leading-relaxed font-light">
                {placeholders.ABOUT_STORY}
              </p>

              {/* CEO Message: Maximum 35 words (Section 34 & 48) */}
              <div className="border-l-2 border-[#2563FF] pl-4 py-1">
                <p className="text-sm sm:text-base text-white font-serif italic leading-relaxed">
                  {placeholders.CEO_MESSAGE}
                </p>
                <p className="text-xs text-[#2563FF] uppercase tracking-[0.2em] font-bold mt-2">
                  — {placeholders.CEO_TITLE}
                </p>
              </div>

              {/* CEO Quote & Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-7 py-3.5 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] min-h-[46px] inline-flex items-center gap-2"
                >
                  <span>OUR STORY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={formatWhatsAppUrl(
                    placeholders.WHATSAPP_NUMBER,
                    'Hello Belford Collection, I would like to make an enquiry.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-transparent hover:bg-white/10 border border-[#2563FF] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] min-h-[46px] inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#2563FF]" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL HOMEPAGE CTA (Section 47) */}
      <section className="py-20 lg:py-24 bg-[#EAF2FF] border-t border-[#C9D2E3]/40 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Headline: Maximum 8 words (Section 47 & 48) */}
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#071A3D]">
            Your Wardrobe. Your Presence.
          </h2>
          {/* Intro: Maximum 20 words (Section 47 & 48) */}
          <p className="text-base text-[#071A3D]/80 max-w-lg mx-auto">
            Find pieces that make every appearance feel considered.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('collections')}
              className="px-8 py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-md active:scale-[0.98] min-h-[48px]"
            >
              SHOP COLLECTION
            </button>
            <a
              href={formatWhatsAppUrl(
                placeholders.WHATSAPP_NUMBER,
                'Hello Belford Collection, I would like to order on WhatsApp.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white hover:bg-gray-50 border border-[#071A3D] text-[#071A3D] text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 text-[#2563FF]" />
              <span>ORDER ON WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
