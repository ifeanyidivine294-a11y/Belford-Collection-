import React, { useState } from 'react';
import { PageType, PlaceholderConfig, Product } from '../types';
import { formatPrice, CurrencyCode } from '../utils/formatters';
import { BelfordImage } from '../components/BelfordImage';
import { Eye, ShoppingBag } from 'lucide-react';

interface BeautyPageProps {
  onNavigate: (page: PageType) => void;
  onSelectProduct: (product: Product) => void;
  onQuickOrderProduct: (product: Product) => void;
  onOpenLightbox: (imgUrl: string, title?: string) => void;
  placeholders: PlaceholderConfig;
  currency: CurrencyCode;
  products: Product[];
}

export const BeautyPage: React.FC<BeautyPageProps> = ({
  onNavigate,
  onSelectProduct,
  onQuickOrderProduct,
  onOpenLightbox,
  placeholders,
  currency,
  products
}) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');

  const beautyCategories = [
    'Makeup',
    'Lip Products',
    'Foundation',
    'Powder',
    'Eyelashes',
    'Beauty Accessories'
  ];

  const beautyProducts = products.filter((p) => p.department === 'beauty');

  const filteredProducts = beautyProducts.filter((p) => {
    if (selectedSubCategory !== 'all' && p.subCategory !== selectedSubCategory) return false;
    return true;
  });

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D]">
      {/* Header */}
      <section className="bg-[#071A3D] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
              Refined Cosmetics & Skincare
            </span>
            <h1 className="font-['Cinzel'] text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Complete Your Look
            </h1>
            <p className="text-base text-[#C9D2E3] leading-relaxed font-light">
              Beauty essentials selected to complete your look.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Categories Pills */}
        <div className="py-4 flex flex-wrap items-center gap-2 border-b border-[#C9D2E3]/50 pb-8">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2">
            Categories:
          </span>
          <button
            onClick={() => setSelectedSubCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
              selectedSubCategory === 'all'
                ? 'bg-[#071A3D] text-white'
                : 'bg-[#EAF2FF] text-[#071A3D] hover:bg-[#C9D2E3]/50'
            }`}
          >
            All Beauty
          </button>

          {beautyCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedSubCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
                selectedSubCategory === cat
                  ? 'bg-[#071A3D] text-white'
                  : 'bg-[#EAF2FF] text-[#071A3D] hover:bg-[#C9D2E3]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {/* Products Grid: full width edge-to-edge images, no padding, no background bars, top aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 pt-8 items-start">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#C9D2E3]/60 rounded-sm flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-[#2563FF]/50 overflow-hidden"
            >
              {/* Edge-to-edge flush image */}
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
      </div>
    </div>
  );
};
