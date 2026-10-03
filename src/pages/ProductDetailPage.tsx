import React, { useState } from 'react';
import { PageType, PlaceholderConfig, Product } from '../types';
import { formatPrice, CurrencyCode } from '../utils/formatters';
import { formatWhatsAppUrl } from '../config/placeholders';
import { BelfordImage } from '../components/BelfordImage';
import { ArrowLeft, MessageCircle, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

interface ProductDetailPageProps {
  product: Product;
  onNavigate: (page: PageType) => void;
  onOrderProduct: (product: Product, selectedSize: string, selectedColor: string, quantity: number) => void;
  onOpenLightbox: (imgUrl: string, title?: string) => void;
  placeholders: PlaceholderConfig;
  currency: CurrencyCode;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onNavigate,
  onOrderProduct,
  onOpenLightbox,
  placeholders,
  currency
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    product.availableSizes.length > 0 ? product.availableSizes[0] : 'Standard'
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.availableColors.length > 0 ? product.availableColors[0] : 'Default'
  );
  const [quantity, setQuantity] = useState<number>(1);

  const handleOrderClick = () => {
    onOrderProduct(product, selectedSize, selectedColor, quantity);
  };

  // Section 31 Contextual Message Format:
  // “Hello Belford Collection, I would like to order [PRODUCT NAME]. Product Code: [PRODUCT CODE]. Size: [SIZE]. Colour: [COLOUR]. Quantity: [QUANTITY].”
  const whatsappMessage = `Hello Belford Collection, I would like to order ${product.name}. Product Code: ${product.code}. Size: ${selectedSize}. Colour: ${selectedColor}. Quantity: ${quantity}.`;

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <button
          onClick={() => onNavigate(product.department as PageType)}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#071A3D]/70 hover:text-[#2563FF] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {product.department.replace('-', ' & ')}</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Product Image Gallery with Zoom (Instruction 1 & 9) */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] sm:aspect-[2/3] max-h-[640px] bg-[#F8FAFC] border border-[#C9D2E3]/60 rounded-sm overflow-hidden shadow-md flex items-center justify-center p-4">
              <BelfordImage
                src={product.image}
                alt={product.name}
                objectFit="contain"
                className="w-full h-full object-contain object-center"
                allowZoom={true}
                onZoom={onOpenLightbox}
              />
              <div className="absolute top-4 left-4 bg-[#071A3D] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-sm shadow-xs">
                {product.inStock ? 'Available' : 'Bespoke Order'}
              </div>
            </div>

            {/* Delivery notice per Section 37 */}
            <div className="p-3.5 bg-[#EAF2FF]/60 border border-[#2563FF]/30 text-xs text-[#071A3D]/80">
              <p className="font-semibold text-[#071A3D] uppercase text-[11px] tracking-wider mb-0.5">Delivery Policy</p>
              <p>Delivery and pickup available. Details confirmed on WhatsApp.</p>
            </div>
          </div>

          {/* Right Column: Purchase Module */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">
                <span>{product.category}</span>
                <span>·</span>
                <span className="text-[#2563FF]">{product.subCategory}</span>
                <span>·</span>
                <span>Code: {product.code}</span>
              </div>

              <h1 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#071A3D] tracking-wide">
                {product.name}
              </h1>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-2xl sm:text-3xl text-[#071A3D] tabular-nums">
                  {product.priceDisplay || formatPrice(product.price, currency)}
                </span>
                <span className="text-xs font-bold text-[#2563FF] bg-[#2563FF]/10 px-2 py-0.5 border border-[#2563FF]/30 uppercase tracking-wider">
                  ESTIMATE
                </span>
                <span className="text-xs text-emerald-700 font-semibold uppercase tracking-wider bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  {product.inStock ? 'Available' : 'Bespoke Order'}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="pt-2 border-t border-[#C9D2E3]/40">
              <p className="text-sm text-[#071A3D]/80 leading-relaxed font-normal">
                {product.description}
              </p>
            </div>

            {/* Available Sizes */}
            {product.availableSizes.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#071A3D]">
                    Available Sizes:
                  </label>
                  <span className="text-xs text-[#2563FF] font-medium">{selectedSize}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-xs font-semibold transition-all border ${
                        selectedSize === size
                          ? 'border-[#2563FF] bg-[#2563FF] text-white shadow-sm'
                          : 'border-[#C9D2E3] bg-white text-[#071A3D] hover:border-[#071A3D]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Available Colours */}
            {product.availableColors.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#071A3D]">
                    Available Colours:
                  </label>
                  <span className="text-xs text-[#2563FF] font-medium">{selectedColor}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.availableColors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 text-xs font-medium transition-all border ${
                        selectedColor === color
                          ? 'border-[#2563FF] bg-[#EAF2FF] text-[#2563FF] font-bold ring-1 ring-[#2563FF]'
                          : 'border-[#C9D2E3] bg-white text-[#071A3D] hover:border-[#071A3D]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper */}
            <div className="space-y-2 pt-2">
              <label className="text-xs uppercase font-bold tracking-wider text-[#071A3D]">
                Quantity:
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#C9D2E3] bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-2 text-base text-[#071A3D] hover:bg-gray-100 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 text-sm font-semibold text-[#071A3D] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-2 text-base text-[#071A3D] hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
                {product.price > 0 && (
                  <span className="text-xs text-[#071A3D]/60">
                    Total: {formatPrice(product.price * quantity, currency)}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons (Section 12: ORDER THIS ITEM & CHAT ON WHATSAPP) */}
            <div className="pt-6 space-y-3">
              <button
                type="button"
                onClick={handleOrderClick}
                className="w-full py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-200 shadow-md active:scale-[0.99] flex items-center justify-center gap-3"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ORDER THIS ITEM</span>
              </button>

              <a
                href={formatWhatsAppUrl(placeholders.WHATSAPP_NUMBER, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#EAF2FF] hover:bg-[#d5e5ff] border border-[#2563FF]/30 text-[#071A3D] text-xs font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 text-[#2563FF]" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
