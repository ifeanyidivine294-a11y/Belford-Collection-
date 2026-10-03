import React, { useState } from 'react';
import { PageType, PlaceholderConfig, Product } from '../types';
import { formatPrice, CurrencyCode } from '../utils/formatters';
import { BelfordImage } from '../components/BelfordImage';
import { ArrowRight, Search, SlidersHorizontal, RotateCcw, Eye, ShoppingBag } from 'lucide-react';

interface CollectionsPageProps {
  onNavigate: (page: PageType) => void;
  onSelectProduct: (product: Product) => void;
  onQuickOrderProduct: (product: Product) => void;
  onOpenLightbox: (imgUrl: string, title?: string) => void;
  placeholders: PlaceholderConfig;
  currency: CurrencyCode;
  products: Product[];
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onNavigate,
  onSelectProduct,
  onQuickOrderProduct,
  onOpenLightbox,
  placeholders,
  currency,
  products
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState<'all' | 'men' | 'women' | 'footwear-accessories' | 'beauty'>('all');
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedInStockOnly, setSelectedInStockOnly] = useState<boolean>(false);

  // Section 23: 6 Collections
  // - Men
  // - Women
  // - Footwear & Accessories
  // - Beauty
  // - Custom Made
  // - Aso-Ebi / Group Orders
  const majorCollections = [
    {
      title: "Men's Collection",
      page: 'men' as PageType,
      image: placeholders.MEN_COLLECTION_IMAGE_URL,
      tag: 'English & Native Wear',
      description: 'Suits, blazers, shirts, Senator, and Agbada.'
    },
    {
      title: "Women's Collection",
      page: 'women' as PageType,
      image: placeholders.WOMEN_COLLECTION_IMAGE_URL,
      tag: 'Contemporary & African',
      description: 'Ankara gowns, lace, jumpsuits, and co-ords.'
    },
    {
      title: 'Footwear & Accessories',
      page: 'footwear-accessories' as PageType,
      image: placeholders.ACCESSORIES_COLLECTION_IMAGE_URL,
      tag: 'Shoes, Bags & Jewellery',
      description: 'Handcrafted loafers, heels, luxury totes, and jewelry.'
    },
    {
      title: 'Beauty & Cosmetics',
      page: 'beauty' as PageType,
      image: placeholders.BEAUTY_COLLECTION_IMAGE_URL,
      tag: 'Flawless Complexion',
      description: 'Velvet lips, silk foundation, powders, and lash suites.'
    },
    {
      title: 'Custom Made Atelier',
      page: 'custom-made' as PageType,
      image: placeholders.CUSTOM_FASHION_IMAGE_URL,
      tag: 'Bespoke Tailoring',
      description: 'Tailored to your exact measurements, fabric, and style.'
    },
    {
      title: 'Aso-Ebi / Group Orders',
      page: 'group-orders' as PageType,
      image: placeholders.ABOUT_IMAGE_URL,
      tag: 'Weddings & Celebrations',
      description: 'Bulk entourage coordination for traditional weddings.'
    }
  ];

  const allSizes = ['all', 'S', 'M', 'L', 'XL', 'XXL', '38', '40', '42', '44', '37', '39', '41', '43'];

  // Working search & filtering per Section 24
  const filteredProducts = products.filter((p) => {
    if (selectedDept !== 'all' && p.department !== selectedDept) return false;
    if (selectedInStockOnly && !p.inStock) return false;
    if (p.price > 0 && p.price > maxPrice) return false;
    if (selectedSize !== 'all' && !p.availableSizes.some((s) => s.toLowerCase().includes(selectedSize.toLowerCase()))) {
      return false;
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const match =
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedDept('all');
    setMaxPrice(100000);
    setSelectedSize('all');
    setSelectedInStockOnly(false);
  };

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
            Full Boutique Catalogue
          </span>
          <h1 className="font-['Cinzel'] text-4xl sm:text-5xl font-bold tracking-tight text-[#071A3D]">
            Explore Collections
          </h1>
          <p className="text-sm sm:text-base text-[#071A3D]/70 leading-relaxed font-light">
            Discover our curated portfolio of ready-to-wear lines, bespoke tailoring, footwear, accessories, and cosmetics.
          </p>
        </div>

        {/* 6 Major Collection Cards (Section 23) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {majorCollections.map((col) => (
            <div
              key={col.title}
              onClick={() => onNavigate(col.page)}
              className="group cursor-pointer bg-white border border-[#C9D2E3]/60 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#2563FF]/50 transition-all duration-300"
            >
              {/* Full-Body Visual Area with exact supplied image (Instruction 1 & 9) */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#F8FAFC] flex items-center justify-center p-3 border-b border-[#C9D2E3]/30">
                <BelfordImage
                  src={col.image}
                  alt={col.title}
                  objectFit="contain"
                  className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                  allowZoom={true}
                  onZoom={onOpenLightbox}
                />
                <div className="absolute top-3 left-3 bg-[#071A3D] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-[#2563FF]/40 rounded-sm pointer-events-none">
                  {col.tag}
                </div>
              </div>

              <div className="p-6 bg-white flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="font-['Cinzel'] text-xl font-bold text-[#071A3D] group-hover:text-[#2563FF] transition-colors">
                    {col.title}
                  </h2>
                  <p className="text-xs text-[#071A3D]/70 mt-1.5 leading-relaxed">
                    {col.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#C9D2E3]/40 flex items-center justify-between">
                  <span className="px-5 py-2.5 bg-[#071A3D] group-hover:bg-[#2563FF] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 inline-flex items-center gap-2">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search & Filtering Panel (Section 24) */}
        <div className="bg-[#EAF2FF]/40 border border-[#C9D2E3]/50 p-6 sm:p-8 mb-10 space-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#C9D2E3]/40 pb-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#2563FF]" />
              <h3 className="font-['Cinzel'] text-lg font-bold text-[#071A3D]">
                Filter Catalogue
              </h3>
            </div>

            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by product name, code (e.g. BC-MEN-SUITS), style..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#C9D2E3] focus:outline-none focus:border-[#2563FF]"
              />
            </div>

            <button
              onClick={handleResetFilters}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#071A3D] border border-gray-300 bg-white"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Department / Category Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="font-bold uppercase tracking-wider block text-gray-600 mb-1.5">
                Department
              </label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value as any)}
                className="w-full px-3 py-2 bg-white border border-[#C9D2E3] focus:outline-none focus:border-[#2563FF]"
              >
                <option value="all">All Departments</option>
                <option value="men">Men's Fashion</option>
                <option value="women">Women's Fashion</option>
                <option value="footwear-accessories">Footwear & Accessories</option>
                <option value="beauty">Beauty & Cosmetics</option>
              </select>
            </div>

            <div>
              <label className="font-bold uppercase tracking-wider block text-gray-600 mb-1.5">
                Size
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#C9D2E3] focus:outline-none focus:border-[#2563FF]"
              >
                {allSizes.map((s) => (
                  <option key={s} value={s}>{s === 'all' ? 'All Sizes' : `Size: ${s}`}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="font-bold uppercase tracking-wider text-gray-600">
                  Max Price
                </label>
                <span className="font-semibold text-xs text-[#2563FF] tabular-nums">
                  {formatPrice(maxPrice, currency)}
                </span>
              </div>
              <input
                type="range"
                min={10000}
                max={100000}
                step={5000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#2563FF]"
              />
            </div>

            <div className="flex items-end">
              <label className="flex items-center gap-2 p-2 bg-white border border-[#C9D2E3] w-full cursor-pointer text-xs font-semibold">
                <input
                  type="checkbox"
                  checked={selectedInStockOnly}
                  onChange={(e) => setSelectedInStockOnly(e.target.checked)}
                  className="accent-[#2563FF]"
                />
                <span>In Stock Pieces Only</span>
              </label>
            </div>
          </div>
        </div>

        {/* Filtered Products Count */}
        <div className="flex items-center justify-between mb-6 text-xs text-gray-500">
          <p>
            Showing <strong>{filteredProducts.length}</strong> verified boutique items
          </p>
        </div>

        {/* Filtered Products Grid with Full-Body Model Display (Instruction 1 & 9) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#C9D2E3]/60 rounded-sm flex flex-col group transition-all duration-300 hover:border-[#2563FF]/50 hover:shadow-xl overflow-hidden"
            >
              {/* Full-Body Container */}
              <div
                onClick={() => onSelectProduct(product)}
                className="cursor-pointer relative aspect-[3/4] sm:aspect-[4/5] bg-[#F8FAFC] flex items-center justify-center p-3 border-b border-[#C9D2E3]/30 overflow-hidden"
              >
                <BelfordImage
                  src={product.image}
                  alt={product.name}
                  objectFit="contain"
                  className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-300"
                  allowZoom={true}
                  onZoom={onOpenLightbox}
                />
                <div className="absolute top-2.5 left-2.5 bg-[#071A3D] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-xs pointer-events-none">
                  {product.subCategory}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
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
                </div>

                <div className="mt-4 pt-3 border-t border-[#C9D2E3]/30 space-y-3">
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-[#EAF2FF]/30 border border-[#C9D2E3]/40 space-y-3">
            <p className="text-[#071A3D] font-medium">No pieces found matching your filter criteria.</p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2 bg-[#2563FF] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
