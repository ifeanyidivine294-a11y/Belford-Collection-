import React, { useState } from 'react';
import { PageType, PlaceholderConfig, Product } from '../types';
import { formatPrice, CurrencyCode } from '../utils/formatters';
import { BelfordImage } from '../components/BelfordImage';
import { Sparkles, Eye, ShoppingBag, Scissors } from 'lucide-react';

interface WomensFashionPageProps {
  onNavigate: (page: PageType) => void;
  onSelectProduct: (product: Product) => void;
  onQuickOrderProduct: (product: Product) => void;
  onOpenLightbox: (imgUrl: string, title?: string) => void;
  placeholders: PlaceholderConfig;
  currency: CurrencyCode;
  products: Product[];
}

export const WomensFashionPage: React.FC<WomensFashionPageProps> = ({
  onNavigate,
  onSelectProduct,
  onQuickOrderProduct,
  onOpenLightbox,
  placeholders,
  currency,
  products
}) => {
  const [selectedSection, setSelectedSection] = useState<'all' | 'English Wear' | 'Native Wear'>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');

  const englishCategories = [
    'Dresses',
    'Gowns',
    'Tops',
    'Skirts',
    'Jumpsuits',
    'Two-Piece Sets',
    'Blazers',
    'Jean Trousers',
    'Corporate Wear',
    'Party Wear'
  ];

  const nativeCategories = [
    'Ankara',
    'Lace',
    'George',
    'Aso-Ebi',
    'Native Dresses',
    'Wrapper & Blouse',
    'African Two-Piece'
  ];

  const womenProducts = products.filter((p) => p.department === 'women');

  const filteredProducts = womenProducts.filter((p) => {
    if (selectedSection !== 'all' && p.category !== selectedSection) return false;
    if (selectedSubCategory !== 'all' && p.subCategory !== selectedSubCategory) return false;
    return true;
  });

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D]">
      {/* Header & Women's Showcase */}
      <section className="bg-[#071A3D] text-white py-12 sm:py-16 relative overflow-hidden border-b border-[#2563FF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2563FF]/20 border border-[#2563FF]/40 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-[#2563FF] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-white">
                  Women's Atelier Line
                </span>
              </div>
              <h1 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Haute Couture & Ready-to-Wear
              </h1>
              <p className="text-sm sm:text-base text-[#C9D2E3] leading-relaxed font-light max-w-xl">
                Elegant womenswear designed for confidence, poise, and effortless presence. Discover Ankara gowns, royal lace, contemporary two-piece sets, tailored blazers, jean trousers, and occasion wear.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setSelectedSection('English Wear');
                    setSelectedSubCategory('all');
                  }}
                  className="px-5 py-3 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 shadow-md inline-flex items-center gap-2"
                >
                  <span>Explore English Wear</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedSection('Native Wear');
                    setSelectedSubCategory('all');
                  }}
                  className="px-5 py-3 bg-[#071A3D] hover:bg-[#112d61] text-white border border-[#2563FF]/50 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span>Explore Native Wear</span>
                </button>
                <button
                  onClick={() => onNavigate('custom-made')}
                  className="px-5 py-3 bg-[#EAF2FF] hover:bg-[#d5e5ff] text-[#071A3D] text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 inline-flex items-center gap-2"
                >
                  <Scissors className="w-3.5 h-3.5 text-[#2563FF]" />
                  <span>Custom Design</span>
                </button>
              </div>
            </div>

            {/* Women's Showcase Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white border-2 border-[#2563FF]/60 rounded-sm shadow-2xl overflow-hidden group">
                <div className="relative w-full block overflow-hidden">
                  <BelfordImage
                    src={placeholders.WOMEN_COLLECTION_IMAGE_URL}
                    alt="Women's Collection Showcase"
                    className="w-full h-auto block"
                    allowZoom={true}
                    onZoom={onOpenLightbox}
                  />
                  <div className="absolute top-4 left-4 bg-[#071A3D] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-[#2563FF]/40 rounded-sm pointer-events-none">
                    WOMEN'S COLLECTION
                  </div>
                </div>
                <div className="p-4 bg-[#071A3D] border-t border-[#2563FF]/40 flex items-center justify-between text-white">
                  <div>
                    <p className="font-['Cinzel'] text-sm font-bold tracking-wide">Women's Atelier Showcase</p>
                    <p className="text-[11px] text-[#C9D2E3]">Full-body feminine distinction</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563FF] bg-white/10 px-2.5 py-1 rounded-sm">
                    Belford Signature
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Section Switcher (Section 18 & 19) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#C9D2E3]/50">
          <div className="flex items-center gap-2 p-1 bg-[#EAF2FF]">
            <button
              onClick={() => {
                setSelectedSection('all');
                setSelectedSubCategory('all');
              }}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                selectedSection === 'all'
                  ? 'bg-[#2563FF] text-white shadow-sm'
                  : 'text-[#071A3D] hover:bg-white/60'
              }`}
            >
              All Women's Wear
            </button>
            <button
              onClick={() => {
                setSelectedSection('English Wear');
                setSelectedSubCategory('all');
              }}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                selectedSection === 'English Wear'
                  ? 'bg-[#2563FF] text-white shadow-sm'
                  : 'text-[#071A3D] hover:bg-white/60'
              }`}
            >
              English Wear
            </button>
            <button
              onClick={() => {
                setSelectedSection('Native Wear');
                setSelectedSubCategory('all');
              }}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                selectedSection === 'Native Wear'
                  ? 'bg-[#2563FF] text-white shadow-sm'
                  : 'text-[#071A3D] hover:bg-white/60'
              }`}
            >
              Native / African Wear
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('group-orders')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#071A3D] hover:text-[#2563FF] uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
              <span>Aso-Ebi Wedding Packages</span>
            </button>
          </div>
        </div>

        {/* Sub-Category Quick Filter Tabs */}
        <div className="py-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2">
            Categories:
          </span>
          <button
            onClick={() => setSelectedSubCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium transition-colors ${
              selectedSubCategory === 'all'
                ? 'bg-[#071A3D] text-white'
                : 'bg-[#EAF2FF] text-[#071A3D] hover:bg-[#C9D2E3]/50'
            }`}
          >
            All Sub-Categories
          </button>

          {(selectedSection === 'Native Wear' ? nativeCategories : selectedSection === 'English Wear' ? englishCategories : [...englishCategories, ...nativeCategories]).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedSubCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedSubCategory === cat
                  ? 'bg-[#071A3D] text-white'
                  : 'bg-[#EAF2FF] text-[#071A3D] hover:bg-[#C9D2E3]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid: full width edge-to-edge images, no padding, no background bars, top aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 pt-6 items-start">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#C9D2E3]/60 rounded-sm flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-[#2563FF]/50 overflow-hidden"
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
                <div className="absolute top-3 left-3 bg-[#071A3D] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-xs pointer-events-none">
                  {product.subCategory}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1.5">
                    <span className="font-mono">{product.code}</span>
                    <span className="text-[#2563FF] font-semibold uppercase tracking-wider">{product.category}</span>
                  </div>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-medium text-base text-[#071A3D] group-hover:text-[#2563FF] transition-colors cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#071A3D]/70 mt-1.5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#C9D2E3]/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-base text-[#071A3D] tabular-nums">
                      {product.priceDisplay || formatPrice(product.price, currency)}
                    </span>
                    <span className="text-[10px] font-bold text-[#2563FF] uppercase tracking-wider bg-[#EAF2FF] px-2 py-0.5 rounded-sm">
                      ESTIMATE
                    </span>
                  </div>

                  {/* Premium CTA Buttons (Instruction 8) */}
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

        {/* Custom Gown Banner */}
        <div className="mt-16 bg-[#EAF2FF] border border-[#C9D2E3]/50 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#071A3D]">
              Bespoke Ankara & Evening Gowns
            </h3>
            <p className="text-xs sm:text-sm text-[#071A3D]/75 leading-relaxed">
              Have a sketch, fabric from your own bridal train, or specific corsetry preference? Consult with our head couturier for bespoke women's commissions.
            </p>
          </div>
          <button
            onClick={() => onNavigate('custom-made')}
            className="px-6 py-3 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-md"
          >
            REQUEST CUSTOM GOWN
          </button>
        </div>
      </div>
    </div>
  );
};
