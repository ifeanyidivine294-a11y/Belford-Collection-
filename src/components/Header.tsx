import React, { useState } from 'react';
import { PageType, PlaceholderConfig } from '../types';
import { CurrencyCode } from '../utils/formatters';
import { resolveImageUrl } from '../utils/imageHelper';
import { formatWhatsAppUrl } from '../config/placeholders';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  placeholders: PlaceholderConfig;
  currency: CurrencyCode;
  onCurrencyChange: (c: CurrencyCode) => void;
  onOpenSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  placeholders,
  currency,
  onCurrencyChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Section 7 Navigation Items:
  // - Home
  // - Men
  // - Women
  // - Footwear & Accessories
  // - Beauty
  // - Custom Made
  // - About
  // - Contact
  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Men', page: 'men' },
    { label: 'Women', page: 'women' },
    { label: 'Footwear & Accessories', page: 'footwear-accessories' },
    { label: 'Beauty', page: 'beauty' },
    { label: 'Custom Made', page: 'custom-made' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Section 2: NEW OFFICIAL LOGO: https://postimg.cc/cgjQzM37
  const resolvedLogo = resolveImageUrl(placeholders.LOGO_URL);

  return (
    <header className="sticky top-0 z-40 bg-[#071A3D] border-b border-[#C9D2E3]/20 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Official Logo Zone (Section 2) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]"
              aria-label="Belford Collection Home"
            >
              {resolvedLogo ? (
                <div className="h-12 flex items-center">
                  <img
                    src={resolvedLogo}
                    alt="Belford Collection"
                    className="h-11 sm:h-12 w-auto max-w-[210px] object-contain rounded-none filter brightness-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-['Cinzel'] text-xl sm:text-2xl font-bold tracking-[0.2em] text-white group-hover:text-[#2563FF] transition-colors">
                    BELFORD
                  </span>
                  <span className="text-[9px] tracking-[0.35em] text-[#C9D2E3] uppercase -mt-1 font-medium">
                    COLLECTION
                  </span>
                </div>
              )}
            </button>
          </div>

          {/* Desktop Navigation (Section 7) */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`text-xs uppercase tracking-wider font-semibold transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563FF] ${
                    isActive
                      ? 'text-[#2563FF]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2563FF]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Zone: Currency + Secondary CTA (WHATSAPP) + Primary CTA (ORDER NOW) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Currency selector */}
            <div className="hidden sm:flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1.5 text-xs text-[#C9D2E3]">
              <Globe className="w-3.5 h-3.5 text-[#2563FF]" />
              <select
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
                className="bg-transparent text-xs text-white focus:outline-none cursor-pointer"
                title="Change display currency"
              >
                <option value="NGN" className="bg-[#071A3D] text-white">NGN (₦)</option>
                <option value="USD" className="bg-[#071A3D] text-white">USD ($)</option>
                <option value="GBP" className="bg-[#071A3D] text-white">GBP (£)</option>
                <option value="EUR" className="bg-[#071A3D] text-white">EUR (€)</option>
              </select>
            </div>

            {/* Secondary CTA: WHATSAPP per Section 7 */}
            <a
              href={formatWhatsAppUrl(
                placeholders.WHATSAPP_NUMBER,
                'Hello Belford Collection, I would like to make an enquiry.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#2563FF]" />
              <span>WHATSAPP</span>
            </a>

            {/* Primary CTA: ORDER NOW per Section 7 */}
            <button
              onClick={() => handleLinkClick('order')}
              className="px-5 py-2.5 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs tracking-wider uppercase font-bold transition-all active:scale-[0.98] shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              ORDER NOW
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-white hover:text-[#2563FF] focus-visible:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Section 2 & 7) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#071A3D] border-t border-white/10 px-6 pt-4 pb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            {resolvedLogo ? (
              <img
                src={resolvedLogo}
                alt="Belford Collection"
                className="h-10 w-auto max-w-[180px] object-contain"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="font-['Cinzel'] text-base font-bold tracking-[0.2em] text-white">
                BELFORD COLLECTION
              </span>
            )}
            <span className="text-[10px] tracking-widest text-[#2563FF] uppercase font-bold bg-[#2563FF]/10 px-2 py-0.5 border border-[#2563FF]/30">
              {placeholders.LOCATION}
            </span>
          </div>

          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`text-left text-sm font-semibold tracking-wider uppercase py-2 transition-colors border-b border-white/5 ${
                    isActive ? 'text-[#2563FF] pl-2' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleLinkClick('collections')}
              className="text-left text-sm font-semibold tracking-wider uppercase py-2 text-white/85 hover:text-white border-b border-white/5"
            >
              All Collections
            </button>
            <button
              onClick={() => handleLinkClick('group-orders')}
              className="text-left text-sm font-semibold tracking-wider uppercase py-2 text-white/85 hover:text-white border-b border-white/5"
            >
              Aso-Ebi / Group Orders
            </button>
            <button
              onClick={() => handleLinkClick('exchange-return')}
              className="text-left text-sm font-semibold tracking-wider uppercase py-2 text-white/85 hover:text-white border-b border-white/5"
            >
              Exchange / Return
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={formatWhatsAppUrl(
                placeholders.WHATSAPP_NUMBER,
                'Hello Belford Collection, I would like to make an enquiry.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-white/10 text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border border-white/20"
            >
              <MessageCircle className="w-4 h-4 text-[#2563FF]" />
              <span>WHATSAPP CONCIERGE</span>
            </a>

            <button
              onClick={() => handleLinkClick('order')}
              className="w-full py-3 bg-[#2563FF] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm"
            >
              <span>ORDER NOW</span>
            </button>

            <div className="flex items-center justify-between text-xs text-[#C9D2E3] pt-2">
              <span>Display Currency:</span>
              <div className="flex gap-2">
                {(['NGN', 'USD', 'GBP', 'EUR'] as CurrencyCode[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => onCurrencyChange(c)}
                    className={`px-2 py-1 text-xs ${
                      currency === c ? 'bg-[#2563FF] text-white font-semibold' : 'bg-white/10 text-white/70'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
