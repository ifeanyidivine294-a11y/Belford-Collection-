import React from 'react';
import { PageType, PlaceholderConfig, Product } from '../types';
import { formatPrice, CurrencyCode } from '../utils/formatters';
import { formatWhatsAppUrl } from '../config/placeholders';
import { BelfordImage } from '../components/BelfordImage';
import { resolveImageUrl } from '../utils/imageHelper';
import heroMobileImage from '../assets/images/hero_mobile_fashion_1791230250555.jpg';
import {
  ArrowRight,
  MessageCircle,
  Eye,
  ShoppingBag,
  Sparkles,
  Award,
  ChevronRight,
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
  // Section 10: Featured Collections with exact supplied images & destination buttons
  const featuredCollections = [
    {
      title: 'MEN',
      subtitle: 'Contemporary English & Timeless Native',
      description: 'Refined suits, senators, agbadas and bespoke menswear for the distinguished gentleman.',
      buttonText: 'EXPLORE MEN',
      image: placeholders.MEN_COLLECTION_IMAGE_URL, // "https://postimg.cc/18VM0xcz" (Corrected Men's Collection URL)
      page: 'men' as PageType
    },
    {
      title: 'WOMEN',
      subtitle: 'African Glamour & Modern Elegance',
      description: 'Ankara gowns, lace occasion wear, jumpsuits, skirts and luxury statement sets.',
      buttonText: 'EXPLORE WOMEN',
      image: placeholders.WOMEN_COLLECTION_IMAGE_URL, // "https://postimg.cc/RJm3ZHnD" (Updated per request)
      page: 'women' as PageType
    },
    {
      title: 'FOOTWEAR & ACCESSORIES',
      subtitle: 'Handcrafted Shoes & Leather Accents',
      description: 'Block heels, stilettos, corporate shoes, leather bags, sunglasses and signature jewellery.',
      buttonText: 'EXPLORE COLLECTION',
      image: placeholders.ACCESSORIES_COLLECTION_IMAGE_URL, // "https://postimg.cc/TLSrsqby"
      page: 'footwear-accessories' as PageType
    },
    {
      title: 'BEAUTY',
      subtitle: 'Curated Cosmetics & Luxury Finishing',
      description: 'Velvet lip kits, long-wear foundation, refined powder compacts and lash collections.',
      buttonText: 'EXPLORE BEAUTY',
      image: placeholders.BEAUTY_COLLECTION_IMAGE_URL, // "https://postimg.cc/G8NkfJDy"
      page: 'beauty' as PageType
    }
  ];

  const whatsappGeneralUrl = formatWhatsAppUrl(
    placeholders.WHATSAPP_NUMBER,
    'Hello Belford Collection, I would like to order on WhatsApp.'
  );

  const desktopHeroUrl = resolveImageUrl(placeholders.HERO_IMAGE_URL);

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D]">
      {/* 1. HERO SECTION (Section 9 - Full-Width Responsive Background) */}
      <section className="relative w-full min-h-[100svh] lg:min-h-[90vh] bg-[#071A3D] text-white flex flex-col justify-start lg:justify-center overflow-hidden">
        {/* Full-width Background Container */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          {/* Mobile Background: Custom 9:16 vertical portrait, full length couple in lower half */}
          <div
            className="block sm:hidden absolute inset-0 w-full h-full bg-no-repeat"
            style={{
              backgroundImage: `url(${heroMobileImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 80%',
            }}
          />

          {/* Desktop/Tablet Background: Anchored to the right so couple stays visible on the right */}
          <div
            className="hidden sm:block absolute inset-0 w-full h-full bg-no-repeat"
            style={{
              backgroundImage: `url(${desktopHeroUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
            }}
          />

          {/* Mobile Gradient Overlay: Deep navy (#071A3D) fading from solid at top to transparent at bottom */}
          <div className="block sm:hidden absolute inset-0 bg-gradient-to-b from-[#071A3D] via-[#071A3D]/75 to-transparent to-75%" />

          {/* Desktop Gradient Overlay: Deep navy fading from solid on left to transparent on right */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#071A3D] via-[#071A3D]/80 to-transparent via-50% to-85%" />
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-[#071A3D]/40 via-transparent to-transparent" />
        </div>

        {/* Hero Content (Headline, Text, and Buttons sit on top) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 lg:pt-0 pb-12 lg:pb-0">
          <div className="max-w-2xl space-y-5 sm:space-y-6">
            {/* Supporting Location / Brand Header */}
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9D2E3]">
              <span className="w-8 h-[2px] bg-[#2563FF]" />
              <span>Belford Collection • 18+ Years of Craftsmanship</span>
            </div>

            {/* Main Heading per Section 9 */}
            <h1 className="font-['Cinzel'] text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Dress Sharp. Look Premium. Feel Confident.
            </h1>

            {/* Supporting Text per Section 9 */}
            <p className="text-sm sm:text-base lg:text-lg text-[#C9D2E3] leading-relaxed max-w-xl font-light">
              Discover refined fashion for men and women — from contemporary English wear and timeless native styles to footwear, accessories and bespoke pieces.
            </p>

            {/* Buttons per Section 9 */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
              <button
                onClick={() => onNavigate('collections')}
                className="group px-7 sm:px-8 py-3.5 sm:py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2563FF]/30 active:scale-[0.98] flex items-center gap-3 min-h-[48px]"
              >
                <span>SHOP COLLECTION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2.5 backdrop-blur-sm min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-[#2563FF]" />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>

            {/* Supporting Line per Section 9 */}
            <div className="pt-3 sm:pt-4 border-t border-white/15 text-[11px] sm:text-xs text-[#C9D2E3]/90 tracking-widest uppercase font-medium">
              Fashion • Footwear • Accessories • Beauty • Custom Made
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED COLLECTIONS (Section 10) */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
              Curated Departments
            </span>
            <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#071A3D] mt-2">
              Featured Collections
            </h2>
            <p className="text-xs sm:text-sm text-[#071A3D]/70 mt-2">
              Explore our primary fashion houses, each tailored to elevate your presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
            {featuredCollections.map((col) => (
              <div
                key={col.title}
                onClick={() => onNavigate(col.page)}
                className="group cursor-pointer bg-white border border-[#C9D2E3]/60 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-[#2563FF]/50 hover:-translate-y-1"
              >
                {/* Edge-to-edge flush image: width 100%, height auto, no aspect ratio, no padding, no background bars */}
                <div className="relative w-full block overflow-hidden">
                  <BelfordImage
                    src={col.image}
                    alt={col.title}
                    className="w-full h-auto block"
                    allowZoom={true}
                    onZoom={onOpenLightbox}
                  />
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="font-['Cinzel'] text-2xl font-bold text-[#071A3D] tracking-wide group-hover:text-[#2563FF] transition-colors">
                      {col.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2563FF] font-semibold mt-1 uppercase tracking-wider">
                      {col.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#071A3D]/75 mt-3 leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#C9D2E3]/40 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#071A3D] group-hover:text-[#2563FF] transition-colors inline-flex items-center gap-2">
                      {col.buttonText}
                      <ChevronRight className="w-4 h-4 text-[#2563FF] transform group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (Section 11) */}
      <section className="py-20 lg:py-24 bg-[#EAF2FF]/40 border-y border-[#C9D2E3]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
                Signature Atelier Selections
              </span>
              <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#071A3D] mt-2">
                Featured Products
              </h2>
            </div>
            <p className="text-xs text-[#071A3D]/70 mt-2 sm:mt-0 font-medium">
              Every card includes full specifications, direct preview and instant WhatsApp ordering.
            </p>
          </div>

          {/* 4 Cards per Section 11:
              1. Ankara Maxi Gown (₦25,000)
              2. Men's Premium Suit (₦45,000)
              3. Women's Block Heels (PRICE AVAILABLE ON REQUEST)
              4. Premium Handbag (₦32,000)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
            {featuredProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#C9D2E3]/60 flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-[#2563FF]/50 hover:-translate-y-1 overflow-hidden"
              >
                {/* Edge-to-edge flush image: width 100%, height auto, no aspect ratio, no padding, no background bars */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="cursor-pointer relative w-full block overflow-hidden"
                >
                  <BelfordImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto block"
                    allowZoom={true}
                    onZoom={onOpenLightbox}
                  />
                  <div className="absolute top-3 left-3 bg-[#071A3D] text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 pointer-events-none">
                    {product.subCategory}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col flex-1 justify-between">
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
                      <span className="font-semibold text-sm text-[#071A3D] tabular-nums">
                        {product.priceDisplay || formatPrice(product.price, currency)}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                        Available
                      </span>
                    </div>

                    {/* Both View Product and Order Now per Section 11 */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="py-2.5 bg-white hover:bg-[#EAF2FF] border border-[#071A3D] text-[#071A3D] text-[11px] font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 flex items-center justify-center gap-1.5 min-h-[42px]"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#2563FF]" />
                        <span>View Product</span>
                      </button>
                      <button
                        onClick={() => onQuickOrderProduct(product)}
                        className="py-2.5 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-[11px] font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-sm active:scale-95 flex items-center justify-center gap-1.5 min-h-[42px]"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Order Now</span>
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
              className="px-9 py-4 bg-[#071A3D] hover:bg-[#2563FF] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-md inline-flex items-center gap-2.5 active:scale-[0.98] min-h-[48px]"
            >
              <span>VIEW ALL COLLECTIONS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. CUSTOM MADE FEATURE (Section 34) */}
      <section className="py-20 lg:py-24 bg-[#071A3D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Area */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md overflow-hidden shadow-2xl">
                <BelfordImage
                  src={placeholders.CUSTOM_FASHION_IMAGE_URL}
                  alt="Belford Custom Tailoring Atelier"
                  className="w-full h-auto block"
                  allowZoom={true}
                  onZoom={onOpenLightbox}
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF]">
                Bespoke Tailoring & Haute Couture
              </span>
              {/* Exact Heading per Section 34 */}
              <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Made For You. Made To Stand Out.
              </h2>
              <p className="text-base sm:text-lg text-[#C9D2E3] max-w-xl leading-relaxed font-light">
                Indulge in personalized fashion tailored specifically to your measurements, choice of premium fabric, and signature silhouette.
              </p>
              {/* Button per Section 34 */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('custom-made')}
                  className="px-9 py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] shadow-lg shadow-[#2563FF]/30 inline-flex items-center gap-3 min-h-[48px]"
                >
                  <span>REQUEST CUSTOM DESIGN</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BRAND EXPERIENCE (Section 35) */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Area: full width edge-to-edge image */}
            <div className="lg:col-span-5 relative">
              <div className="border border-[#C9D2E3]/60 overflow-hidden shadow-md">
                <BelfordImage
                  src={placeholders.ABOUT_IMAGE_URL}
                  alt="Belford Brand Experience"
                  className="w-full h-auto block"
                  allowZoom={true}
                  onZoom={onOpenLightbox}
                />
              </div>
              <div className="absolute -bottom-5 -right-3 sm:right-4 bg-[#071A3D] text-white p-5 border-l-4 border-[#2563FF] shadow-xl">
                <div className="flex items-center gap-2 text-[#2563FF] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9D2E3]">
                    HERITAGE & CRAFT
                  </span>
                </div>
                {/* Highlight per Section 35 */}
                <p className="font-['Cinzel'] text-lg font-bold text-white">
                  18+ YEARS OF EXPERIENCE
                </p>
              </div>
            </div>

            {/* Editorial Content per Section 35 */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF]">
                  The Belford Standard
                </span>
                {/* Heading per Section 35 */}
                <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#071A3D] mt-2 leading-tight">
                  More Than Fashion. It's How You Present Yourself.
                </h2>
              </div>

              {/* Editable Fields per Section 35 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/50 p-4 space-y-1">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#2563FF] block">
                    Our History
                  </span>
                  <p className="text-xs text-[#071A3D]/80 leading-relaxed">
                    {placeholders.BUSINESS_HISTORY !== '[BUSINESS_HISTORY]'
                      ? placeholders.BUSINESS_HISTORY
                      : 'Established over 18 years ago, refining traditional tailoring and contemporary luxury.'}
                  </p>
                </div>

                <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/50 p-4 space-y-1">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#2563FF] block">
                    Our Values
                  </span>
                  <p className="text-xs text-[#071A3D]/80 leading-relaxed">
                    {placeholders.OUR_VALUES !== '[OUR_VALUES]'
                      ? placeholders.OUR_VALUES
                      : 'Integrity, impeccable finishing, client confidentiality, and personal wardrobe consultation.'}
                  </p>
                </div>

                <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/50 p-4 space-y-1">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#2563FF] block">
                    Our Approach
                  </span>
                  <p className="text-xs text-[#071A3D]/80 leading-relaxed">
                    {placeholders.OUR_APPROACH !== '[OUR_APPROACH]'
                      ? placeholders.OUR_APPROACH
                      : 'Carefully curating each garment, ensuring fit and silhouette are verified before delivery.'}
                  </p>
                </div>

                <div className="bg-[#EAF2FF]/50 border border-[#C9D2E3]/50 p-4 space-y-1">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#2563FF] block">
                    Our Promise
                  </span>
                  <p className="text-xs text-[#071A3D]/80 leading-relaxed">
                    {placeholders.OUR_PROMISE !== '[OUR_PROMISE]'
                      ? placeholders.OUR_PROMISE
                      : 'To help you walk into any room in Nigeria or across the globe with undeniable confidence.'}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-[#071A3D] hover:bg-[#2563FF] text-white text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  READ OUR FULL STORY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CEO & FOUNDER — HOMEPAGE FEATURE (MAJOR NEW SECTION: Section 12-19) */}
      <section className="py-20 lg:py-28 bg-[#071A3D] text-white relative overflow-hidden">
        {/* Subtle background styling */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563FF]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT on desktop / Image first on mobile per Section 14:
                CEO Image: ONLY https://postimg.cc/QBtPgGW9
            */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md border-2 border-[#2563FF] shadow-2xl overflow-hidden group flex flex-col">
                <BelfordImage
                  src={placeholders.CEO_IMAGE_URL}
                  alt="CEO & Founder, Belford Collection"
                  className="w-full h-auto block filter brightness-105 contrast-105"
                  allowZoom={true}
                  onZoom={onOpenLightbox}
                />
                <div className="p-6 bg-[#071A3D] border-t border-[#2563FF]/30">
                  <span className="text-[10px] font-bold text-[#2563FF] tracking-[0.25em] uppercase block mb-1">
                    LEADERSHIP ATELIER
                  </span>
                  <p className="font-['Cinzel'] text-xl font-bold text-white">
                    {placeholders.CEO_TITLE}
                  </p>
                  <p className="text-xs text-[#C9D2E3] font-light mt-0.5">
                    18+ Years Directing Nigerian & International Haute Couture
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT on desktop / Text and quote per Section 14 */}
            <div className="lg:col-span-7 space-y-6">
              {/* Small label & Headline per Section 15 */}
              <div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2563FF] bg-[#2563FF]/10 px-3 py-1 border border-[#2563FF]/30 inline-block mb-3">
                  CEO & FOUNDER
                </span>
                <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-white tracking-wide leading-tight">
                  THE VISION BEHIND BELFORD COLLECTION
                </h2>
                <p className="font-['Cinzel'] text-xl sm:text-2xl text-[#C9D2E3] mt-2 font-semibold">
                  Fashion That Makes You Feel Unforgettable.
                </p>
              </div>

              {/* CEO Message per Section 16 */}
              <div className="space-y-4 text-sm sm:text-base text-[#C9D2E3]/95 leading-relaxed font-light">
                <p>
                  {placeholders.CEO_MESSAGE}
                </p>
                <p>
                  {placeholders.CEO_MESSAGE_PART2}
                </p>
              </div>

              {/* CEO Marketing Message per Section 17 */}
              <div className="bg-white/5 border border-white/10 p-5 space-y-2">
                <h3 className="font-['Cinzel'] text-base font-bold text-white uppercase tracking-wider">
                  Your Appearance Speaks Before You Do.
                </h3>
                <p className="text-xs sm:text-sm text-[#C9D2E3] leading-relaxed">
                  {placeholders.CEO_MARKETING}
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={() => onNavigate('collections')}
                    className="text-xs font-bold uppercase tracking-wider text-[#2563FF] hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>DISCOVER BELFORD COLLECTION</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={formatWhatsAppUrl(
                      placeholders.WHATSAPP_NUMBER,
                      'Hello Belford Collection, I would like to speak with you on WhatsApp.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#2563FF] transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#2563FF]" />
                    <span>TALK TO US ON WHATSAPP</span>
                  </a>
                </div>
              </div>

              {/* CEO Quote per Section 18 */}
              <div className="border-l-4 border-[#2563FF] pl-6 py-2 my-4">
                <blockquote className="font-['Cinzel'] text-xl sm:text-2xl text-white font-semibold italic leading-relaxed">
                  {placeholders.CEO_QUOTE}
                </blockquote>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9D2E3] mt-2">
                  — CEO & Founder, Belford Collection
                </p>
              </div>

              {/* CEO Section CTAs per Section 19 */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('collections')}
                  className="px-8 py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] shadow-lg shadow-[#2563FF]/30 min-h-[48px] inline-flex items-center gap-2"
                >
                  <span>SHOP THE COLLECTION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={formatWhatsAppUrl(
                    placeholders.WHATSAPP_NUMBER,
                    'Hello Belford Collection, I would like to order on WhatsApp.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent hover:bg-white/10 border border-[#2563FF] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] min-h-[48px] inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#2563FF]" />
                  <span>ORDER ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL HOMEPAGE CTA */}
      <section className="py-20 lg:py-24 bg-[#EAF2FF] border-t border-[#C9D2E3]/50 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
            Elevate Your Presence
          </span>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#071A3D]">
            Your Wardrobe. Your Confidence.
          </h2>
          <p className="text-base text-[#071A3D]/80 max-w-lg mx-auto leading-relaxed">
            Choose fashion that speaks of refinement, ambition and impeccable personal taste.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('collections')}
              className="px-8 py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-md active:scale-[0.98] min-h-[48px]"
            >
              SHOP COLLECTION
            </button>
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white hover:bg-gray-50 border border-[#071A3D] text-[#071A3D] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 min-h-[48px]"
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
