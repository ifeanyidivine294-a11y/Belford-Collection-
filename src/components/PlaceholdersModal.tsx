import React, { useState } from 'react';
import { PlaceholderConfig } from '../types';
import { DEFAULT_PLACEHOLDERS, savePlaceholders } from '../config/placeholders';
import { Settings, X, RotateCcw, Save, Check, AlertTriangle, ShieldAlert } from 'lucide-react';

interface PlaceholdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: PlaceholderConfig;
  onUpdate: (newConfig: PlaceholderConfig) => void;
}

export const PlaceholdersModal: React.FC<PlaceholdersModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdate
}) => {
  const [draft, setDraft] = useState<PlaceholderConfig>({ ...config });
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleChange = (key: keyof PlaceholderConfig, val: string) => {
    setDraft((prev) => ({ ...prev, [key]: val }));
  };

  const handleSave = () => {
    savePlaceholders(draft);
    onUpdate(draft);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    if (window.confirm('Reset all brand placeholders and image URLs to default settings?')) {
      setDraft({ ...DEFAULT_PLACEHOLDERS });
      savePlaceholders(DEFAULT_PLACEHOLDERS);
      onUpdate(DEFAULT_PLACEHOLDERS);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white text-[#071A3D] max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#C9D2E3]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#C9D2E3] bg-[#071A3D] text-white">
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-[#2563FF]" />
            <div>
              <h2 className="font-['Cinzel'] text-lg font-bold">
                Brand Placeholders & Launch Notes
              </h2>
              <p className="text-[11px] text-[#C9D2E3]">
                Easily update images, contact numbers, PalmPay accounts, and boutique details without editing code.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs flex-1">
          {/* Section 53: TWO HONEST WARNINGS (Internal launch notes) */}
          <div className="bg-amber-50 border border-amber-300 p-4 space-y-3 rounded-md">
            <div className="flex items-center gap-2 text-amber-900 font-bold uppercase tracking-wider text-xs">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              <span>Section 53 Internal Launch Notes</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-amber-900 text-xs">
              <div className="space-y-1 bg-white/70 p-3 border border-amber-200">
                <p className="font-bold text-[11px] uppercase">1. Testimonials Notice</p>
                <p className="text-[11px] leading-relaxed">
                  Sample reviews must be replaced with genuine customer feedback as soon as possible. After real purchases, ask customers to send their WhatsApp feedback or permission to publish their review.
                </p>
              </div>
              <div className="space-y-1 bg-white/70 p-3 border border-amber-200">
                <p className="font-bold text-[11px] uppercase">2. Prices Notice</p>
                <p className="text-[11px] leading-relaxed">
                  All displayed prices are estimates. Confirm them against actual Belford Collection stock before launch because customers may rely on the displayed prices.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Business Info */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#071A3D] uppercase tracking-wider text-xs border-b pb-1">
              Belford Boutique Details (Section 1)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-semibold block mb-1">Brand Name:</label>
                <input
                  type="text"
                  value={draft.BUSINESS_NAME}
                  onChange={(e) => handleChange('BUSINESS_NAME', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Business Address:</label>
                <input
                  type="text"
                  value={draft.ADDRESS}
                  onChange={(e) => handleChange('ADDRESS', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Phone Number:</label>
                <input
                  type="text"
                  value={draft.PHONE_NUMBER}
                  onChange={(e) => handleChange('PHONE_NUMBER', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">WhatsApp Number (+2339069710687):</label>
                <input
                  type="text"
                  value={draft.WHATSAPP_NUMBER}
                  onChange={(e) => {
                    handleChange('WHATSAPP_NUMBER', e.target.value);
                    handleChange('INTERNATIONAL_PHONE', e.target.value);
                  }}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Email Address:</label>
                <input
                  type="text"
                  value={draft.EMAIL_ADDRESS}
                  onChange={(e) => handleChange('EMAIL_ADDRESS', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Location:</label>
                <input
                  type="text"
                  value={draft.LOCATION}
                  onChange={(e) => handleChange('LOCATION', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>
            </div>
          </div>

          {/* Section: PalmPay Payment Details (Section 24) */}
          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-[#071A3D] uppercase tracking-wider text-xs border-b pb-1">
              PalmPay Payment Information (Section 24)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="font-semibold block mb-1">Platform:</label>
                <input
                  type="text"
                  value={draft.PALMPAY_PLATFORM}
                  onChange={(e) => handleChange('PALMPAY_PLATFORM', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Account / Number:</label>
                <input
                  type="text"
                  value={draft.PALMPAY_NUMBER}
                  onChange={(e) => handleChange('PALMPAY_NUMBER', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Account Name:</label>
                <input
                  type="text"
                  value={draft.PALMPAY_NAME}
                  onChange={(e) => handleChange('PALMPAY_NAME', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>
            </div>
          </div>

          {/* Section: Image Placeholders */}
          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-[#071A3D] uppercase tracking-wider text-xs border-b pb-1">
              Key Image URLs (Mapped from Section 50)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-semibold block mb-1">Official Logo URL:</label>
                <input
                  type="text"
                  value={draft.LOGO_URL}
                  onChange={(e) => handleChange('LOGO_URL', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Hero Image URL:</label>
                <input
                  type="text"
                  value={draft.HERO_IMAGE_URL}
                  onChange={(e) => handleChange('HERO_IMAGE_URL', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Men Collection Image:</label>
                <input
                  type="text"
                  value={draft.MEN_COLLECTION_IMAGE_URL}
                  onChange={(e) => handleChange('MEN_COLLECTION_IMAGE_URL', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Women Collection Image (Gowns):</label>
                <input
                  type="text"
                  value={draft.WOMEN_COLLECTION_IMAGE_URL}
                  onChange={(e) => handleChange('WOMEN_COLLECTION_IMAGE_URL', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Footwear & Accessories Image:</label>
                <input
                  type="text"
                  value={draft.ACCESSORIES_COLLECTION_IMAGE_URL}
                  onChange={(e) => handleChange('ACCESSORIES_COLLECTION_IMAGE_URL', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Beauty Collection Image:</label>
                <input
                  type="text"
                  value={draft.BEAUTY_COLLECTION_IMAGE_URL}
                  onChange={(e) => handleChange('BEAUTY_COLLECTION_IMAGE_URL', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Custom Made Image:</label>
                <input
                  type="text"
                  value={draft.CUSTOM_FASHION_IMAGE_URL}
                  onChange={(e) => handleChange('CUSTOM_FASHION_IMAGE_URL', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">CEO & Founder Image:</label>
                <input
                  type="text"
                  value={draft.CEO_IMAGE_URL}
                  onChange={(e) => handleChange('CEO_IMAGE_URL', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-[#071A3D] uppercase tracking-wider text-xs border-b pb-1">
              Social Channels & Placeholders
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-semibold block mb-1">Facebook URL:</label>
                <input
                  type="text"
                  value={draft.FACEBOOK_URL}
                  onChange={(e) => handleChange('FACEBOOK_URL', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Instagram Placeholder:</label>
                <input
                  type="text"
                  value={draft.INSTAGRAM_URL}
                  onChange={(e) => handleChange('INSTAGRAM_URL', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">TikTok Placeholder:</label>
                <input
                  type="text"
                  value={draft.TIKTOK_URL}
                  onChange={(e) => handleChange('TIKTOK_URL', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Return Policy URL:</label>
                <input
                  type="text"
                  value={draft.RETURN_POLICY_URL}
                  onChange={(e) => handleChange('RETURN_POLICY_URL', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C9D2E3]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-[#C9D2E3] bg-gray-50 flex items-center justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-2 text-rose-700 hover:bg-rose-50 border border-rose-200 font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Factory Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            {savedNotice && (
              <span className="flex items-center gap-1 text-emerald-600 font-bold text-xs">
                <Check className="w-4 h-4" />
                <span>Saved successfully!</span>
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-white hover:bg-gray-100 border border-[#C9D2E3] text-[#071A3D] font-semibold"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 bg-[#2563FF] hover:bg-[#1a51dd] text-white font-bold shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
