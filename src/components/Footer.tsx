import React from 'react';
import { PageType, PlaceholderConfig } from '../types';
import { resolveImageUrl } from '../utils/imageHelper';
import { Phone, Mail, MapPin, Settings } from 'lucide-react';

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

  // Section 41: NEW logo only: https://postimg.cc/cgjQzM37
  const resolvedLogo = resolveImageUrl(placeholders.LOGO_URL);

  return (
    <footer className="bg-[#071A3D] text-white border-t border-[#C9D2E3]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Col 1: Logo & Brand Description per Section 41 */}
          <div className="space-y-4">
            <div className="flex items-center">
              {resolvedLogo ? (
                <div className="h-12 flex items-center">
                  <img
                    src={resolvedLogo}
                    alt="Belford Collection"
                    className="h-11 sm:h-12 w-auto max-w-[210px] object-contain filter brightness-105"
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
              Premium Nigerian fashion house of 18+ years crafting bespoke tailoring, contemporary English wear, African native attire, handcrafted footwear, accessories and luxury beauty.
            </p>

            {/* Contact Information per Section 3 & 41 */}
            <div className="pt-2 text-xs text-[#C9D2E3] space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2563FF] shrink-0" />
                <span>{placeholders.LOCATION}, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2563FF] shrink-0" />
                <span>{placeholders.PHONE_NUMBER} / {placeholders.INTERNATIONAL_PHONE}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2563FF] shrink-0" />
                <a href={`mailto:${placeholders.EMAIL_ADDRESS}`} className="hover:text-white transition-colors">
                  {placeholders.EMAIL_ADDRESS}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links per Section 41 */}
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

          {/* Col 3: Customer Links per Section 41 */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-white/90">
              Customer Services
            </h3>
            <ul className="space-y-2 text-xs text-[#C9D2E3]">
              <li>
                <button onClick={() => handleLink('order')} className="hover:text-white hover:underline transition-colors font-medium text-white">
                  Order Now
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('group-orders')} className="hover:text-white hover:underline transition-colors">
                  Group Orders / Aso-Ebi
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('exchange-return')} className="hover:text-white hover:underline transition-colors">
                  Exchange / Return
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('collections')} className="hover:text-white hover:underline transition-colors">
                  All Collections
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Links & Placeholders per Section 3 & 41 */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-white/90">
              Connect With Us
            </h3>
            <div className="space-y-2.5 text-xs text-[#C9D2E3]">
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
              <p>
                <span className="text-white/60">Instagram:</span>{' '}
                {placeholders.INSTAGRAM_URL.startsWith('http') ? (
                  <a href={placeholders.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563FF]">
                    @belfordcollection
                  </a>
                ) : (
                  <span>{placeholders.INSTAGRAM_URL}</span>
                )}
              </p>
              <p>
                <span className="text-white/60">TikTok:</span>{' '}
                {placeholders.TIKTOK_URL.startsWith('http') ? (
                  <a href={placeholders.TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563FF]">
                    @belfordcollection
                  </a>
                ) : (
                  <span>{placeholders.TIKTOK_URL}</span>
                )}
              </p>
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

        {/* Bottom Bar: Exact Copyright per Section 41 */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C9D2E3] gap-4">
          <p className="font-medium text-white">
            © Belford Collection. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#C9D2E3]/80">
            <span>Abadeta State, Nigeria</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <button
              onClick={() => handleLink('exchange-return')}
              className="hover:text-white transition-colors"
            >
              Exchange Policy
            </button>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Delivery & Pickup Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
