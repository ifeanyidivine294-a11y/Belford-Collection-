import React from 'react';
import { PageType, PlaceholderConfig } from '../types';
import { resolveImageUrl } from '../utils/imageHelper';
import { Settings, CreditCard } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  placeholders: PlaceholderConfig;
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  placeholders,
  onOpenSettings
}) => {
  const handleLink = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resolvedLogo = resolveImageUrl(placeholders.LOGO_URL);

  return (
    <footer className="bg-[#071A3D] text-white border-t border-[#C9D2E3]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Col 1: Logo & Official Brand Information (Section 44) */}
          <div className="space-y-4">
            <div className="flex items-center">
              {resolvedLogo ? (
                <div className="h-12 flex items-center">
                  <img
                    src={resolvedLogo}
                    alt={placeholders.BUSINESS_NAME}
                    className="h-10 sm:h-11 w-auto max-w-[200px] object-contain rounded-sm filter brightness-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-['Cinzel'] text-2xl font-bold tracking-[0.2em] text-white">
                    BELFORD
                  </span>
                  <span className="text-[10px] tracking-[0.35em] text-[#C9D2E3] uppercase -mt-0.5">
                    COLLECTION
                  </span>
                </div>
              )}
            </div>

            <p className="text-[#C9D2E3] text-xs leading-relaxed max-w-sm font-light">
              Premium fashion boutique in Agbor, Delta State offering refined clothing, native and English wear, footwear, accessories, beauty and custom tailoring.
            </p>

            <div className="pt-2 text-xs text-[#C9D2E3] space-y-1">
              <p className="text-white font-medium">{placeholders.ADDRESS}</p>
              <p>Phone: {placeholders.PHONE_NUMBER}</p>
              <p>WhatsApp: {placeholders.WHATSAPP_NUMBER}</p>
              <p>Email: {placeholders.EMAIL_ADDRESS}</p>
            </div>
          </div>

          {/* Col 2: Quick Links (Section 44) */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-[#C9D2E3]">
              <li>
                <button onClick={() => handleLink('home')} className="hover:text-white hover:underline transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('men')} className="hover:text-white hover:underline transition-colors">
                  Men
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('women')} className="hover:text-white hover:underline transition-colors">
                  Women
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('footwear-accessories')} className="hover:text-white hover:underline transition-colors">
                  Footwear & Accessories
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('beauty')} className="hover:text-white hover:underline transition-colors">
                  Beauty
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('custom-made')} className="hover:text-white hover:underline transition-colors">
                  Custom Made
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('group-orders')} className="hover:text-white hover:underline transition-colors">
                  Group Orders
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('about')} className="hover:text-white hover:underline transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('contact')} className="hover:text-white hover:underline transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer & Payment (Section 44) */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-white/90">
              Customer Care
            </h3>
            <ul className="space-y-2 text-xs text-[#C9D2E3]">
              <li>
                <button onClick={() => handleLink('order')} className="hover:text-white hover:underline transition-colors font-medium text-white">
                  Order Now
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('exchange-return')} className="hover:text-white hover:underline transition-colors">
                  Exchanges
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('collections')} className="hover:text-white hover:underline transition-colors">
                  All Collections
                </button>
              </li>
            </ul>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-white/90 flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-[#2563FF]" />
                <span>Payment Account</span>
              </span>
              <div className="text-[11px] text-[#C9D2E3]/80 space-y-0.5 font-mono">
                <p>{placeholders.PALMPAY_PLATFORM}: {placeholders.PALMPAY_NUMBER}</p>
                <p>Name: {placeholders.PALMPAY_NAME}</p>
                <p className="font-sans text-[10px] text-[#C9D2E3]/60 pt-0.5">{placeholders.PAYMENT_DETAILS}</p>
              </div>
            </div>
          </div>

          {/* Col 4: Social & Placeholders (Section 44) */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-white/90">
              Connect
            </h3>
            <div className="space-y-2 text-xs text-[#C9D2E3]">
              {placeholders.FACEBOOK_URL && (
                <p>
                  <a
                    href={placeholders.FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2563FF] transition-colors"
                  >
                    Facebook: Belford Collection
                  </a>
                </p>
              )}
              {placeholders.INSTAGRAM_URL && !placeholders.INSTAGRAM_URL.startsWith('[') && (
                <p>Instagram: {placeholders.INSTAGRAM_URL}</p>
              )}
              {placeholders.TIKTOK_URL && !placeholders.TIKTOK_URL.startsWith('[') && (
                <p>TikTok: {placeholders.TIKTOK_URL}</p>
              )}
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={onOpenSettings}
                className="flex items-center gap-2 text-xs text-[#C9D2E3]/70 hover:text-[#2563FF] transition-colors"
                title="Configure Placeholders & Launch Notes"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Brand Placeholders & Launch Notes</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright per Section 44 */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C9D2E3] gap-4">
          <p>
            © Belford Collection. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleLink('exchange-return')}
              className="hover:text-white transition-colors"
            >
              Exchange Policy
            </button>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Delivery and pickup available. Details confirmed on WhatsApp.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
