import React, { useState } from 'react';
import { PageType, PlaceholderConfig, Product } from '../types';
import { formatPrice, CurrencyCode } from '../utils/formatters';
import { BelfordImage } from '../components/BelfordImage';
import { Scissors, Eye, ShoppingBag } from 'lucide-react';

interface MensFashionPageProps {
  onNavigate: (page: PageType) => void;
  onSelectProduct: (product: Product) => void;
  onQuickOrderProduct: (product: Product) => void;
  onOpenLightbox: (imgUrl: string, title?: string) => void;
  placeholders: PlaceholderConfig;
  currency: CurrencyCode;
  products: Product[];
}

export const MensFashionPage: React.FC<MensFashionPageProps> = ({
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
    'Suits',
    '2-Piece Suits',
    '3-Piece Suits',
    'Long Sleeve Shirts',
    'Short Sleeve Shirts',
    'Trousers',
    'Blazers',
    'Waistcoats',
    'Corporate Wear'
  ];

  const nativeCategories = [
    'Senator',
    'Agbada',
    'Native Two-Piece',
    'Kaftan',
    'Native Shirts',
    'Traditional Outfits'
  ];

  const menProducts = products.filter((p) => p.department === 'men');

  const filteredProducts = menProducts.filter((p) => {
    if (selectedSection !== 'all' && p.category !== selectedSection) return false;
    if (selectedSubCategory !== 'all' && p.subCategory !== selectedSubCategory) return false;
    return true;
  });

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D]">
      {/* Editorial Header & Men's Main Collection Showcase (Instruction 4) */}
      <section className="bg-[#071A3D] text-white py-12 sm:py-16 relative overflow-hidden border-b border-[#2563FF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2563FF]/20 border border-[#2563FF]/40 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-[#2563FF] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-white">
                  Men's Main Collection
                </span>
              </div>
              <h1 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Gentlemen's Sartorial Line
              </h1>
              <p className="text-sm sm:text-base text-[#C9D2E3] leading-relaxed font-light max-w-xl">
                Refined English and authentic native styles designed for confident men. Explore tailored suits, sharp blazers, executive shirts, and regal Senator and Agbada pieces crafted with master tailoring.
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
                  <span>Custom Tailoring</span>
                </button>
              </div>
            </div>

            {/* Men's Main Collection Showcase Card (Exact new image: https://postimg.cc/18VM0xcz) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-[#F8FAFC] border-2 border-[#2563FF]/60 rounded-sm shadow-2xl overflow-hidden group">
                <div className="relative aspect-[3/4] w-full flex items-center justify-center p-3">
                  <BelfordImage
                    src={placeholders.MEN_COLLECTION_IMAGE_URL}
                    alt="Men's Main Collection Showcase"
                    objectFit="contain"
                    className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-300"
                    allowZoom={true}
                    onZoom={onOpenLightbox}
                  />
                  <div className="absolute top-4 left-4 bg-[#071A3D] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-[#2563FF]/40 rounded-sm">
                    MAIN COLLECTION
                  </div>
                </div>
                <div className="p-4 bg-[#071A3D] border-t border-[#2563FF]/40 flex items-center justify-between text-white">
                  <div>
                    <p className="font-['Cinzel'] text-sm font-bold tracking-wide">Men's Sartorial Showcase</p>
                    <p className="text-[11px] text-[#C9D2E3]">Full-body tailored elegance</p>
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
        {/* Section Switcher (Section 16 & 17) */}
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
              All Men's Wear
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
              Native Wear
            </button>
          </div>

          <button
            onClick={() => onNavigate('custom-made')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#2563FF] hover:underline uppercase tracking-wider"
          >
            <Scissors className="w-4 h-4" />
            <span>Need Custom Tailored Measurements?</span>
          </button>
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

        {/* Products Grid with Complete Full-Body Model Visibility (Instruction 1 & 9) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 pt-6">
          {filteredProducts.map((product) => (
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
                <div className="absolute top-3 left-3 bg-[#071A3D] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-xs">
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

        {/* Custom Tailoring Callout for Men */}
        <div className="mt-16 bg-[#EAF2FF] border border-[#C9D2E3]/50 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#071A3D]">
              Bespoke Senator, Agbada & Tailored Suits
            </h3>
            <p className="text-xs sm:text-sm text-[#071A3D]/75 leading-relaxed">
              Prefer an exact custom fit with your own measurements or specialized Italian wool / Irish linen? Our master tailors craft bespoke menswear on request.
            </p>
          </div>
          <button
            onClick={() => onNavigate('custom-made')}
            className="px-6 py-3 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-md"
          >
            ORDER BESPOKE MENSWEAR
          </button>
        </div>
      </div>
    </div>
  );
};
