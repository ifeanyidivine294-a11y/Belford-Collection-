import { PlaceholderConfig } from '../types';
import { IMAGE_CONFIG } from './images';

export const DEFAULT_PLACEHOLDERS: PlaceholderConfig = {
  // Brand Logo (Section 2 - Official and Only Logo)
  LOGO_URL: IMAGE_CONFIG.logo, // "https://postimg.cc/cgjQzM37"

  // Primary Feature Images
  HERO_IMAGE_URL: IMAGE_CONFIG.hero, // "https://postimg.cc/jw9z1QfL"
  MEN_COLLECTION_IMAGE_URL: IMAGE_CONFIG.featuredMen, // "https://postimg.cc/18VM0xcz" (Updated corrected URL)
  WOMEN_COLLECTION_IMAGE_URL: IMAGE_CONFIG.featuredWomen, // "https://postimg.cc/RJm3ZHnD" (Updated per request)
  ACCESSORIES_COLLECTION_IMAGE_URL: IMAGE_CONFIG.featuredFootwear, // "https://postimg.cc/TLSrsqby"
  BEAUTY_COLLECTION_IMAGE_URL: IMAGE_CONFIG.featuredBeauty, // "https://postimg.cc/G8NkfJDy"
  ABOUT_IMAGE_URL: IMAGE_CONFIG.brandExperience, // "https://postimg.cc/TKdv1ry0"
  CUSTOM_FASHION_IMAGE_URL: IMAGE_CONFIG.customMade, // "https://postimg.cc/1fzKzXmt"
  CEO_IMAGE_URL: IMAGE_CONFIG.ceo, // "https://postimg.cc/QBtPgGW9"

  // 4 Featured Products (Section 11)
  PRODUCT_IMAGE_01: IMAGE_CONFIG.ankaraMaxiGown, // "https://postimg.cc/YhSxS0rm"
  PRODUCT_IMAGE_02: IMAGE_CONFIG.mensPremiumSuit, // "https://postimg.cc/jw9z1QfH"
  PRODUCT_IMAGE_03: IMAGE_CONFIG.womensBlockHeels, // "https://postimg.cc/xcdPd8fM"
  PRODUCT_IMAGE_04: IMAGE_CONFIG.premiumHandbag, // "https://postimg.cc/T5DrvLjD"

  // Brand Information (Section 3)
  BUSINESS_NAME: 'Belford Collection',
  EXPERIENCE: '18+ Years',
  PHONE_NUMBER: '09069710687',
  INTERNATIONAL_PHONE: '+2349069710687',
  WHATSAPP_NUMBER: '+2349069710687',
  EMAIL_ADDRESS: 'divineifeanyi06@gmail.com',
  LOCATION: 'Abadeta State',
  ADDRESS: 'Abadeta State, Nigeria',

  // Payment Details (Section 25 / Concierge)
  PALMPAY_NUMBER: '9069710687',
  PALMPAY_PLATFORM: 'PalmPay',
  PALMPAY_NAME: 'Chukwudebe Ifeanyi',
  PAYMENT_DETAILS: '[PAYMENT_DETAILS]',

  // Social & Reference URLs (Section 3 & 40)
  FACEBOOK_URL: 'https://www.facebook.com/profile.php?id=61578326773110',
  INSTAGRAM_URL: '[INSTAGRAM_URL]',
  TIKTOK_URL: '[TIKTOK_URL]',
  GOOGLE_MAPS_URL: '[GOOGLE_MAPS_URL]',
  RETURN_POLICY_URL: '[RETURN_POLICY_URL]',

  // Brand Experience Editable Fields (Section 35)
  BUSINESS_HISTORY: '[BUSINESS_HISTORY]',
  OUR_VALUES: '[OUR_VALUES]',
  OUR_APPROACH: '[OUR_APPROACH]',
  OUR_PROMISE: '[OUR_PROMISE]',

  // CEO & Founder Section (Section 12-19)
  CEO_NAME: 'Founder & Creative Director',
  CEO_TITLE: 'CEO & Founder, Belford Collection',
  CEO_MESSAGE:
    '“At Belford Collection, we believe fashion is more than clothing. It is confidence, identity and the way you choose to present yourself to the world. For more than 18 years, our vision has been to help our clients look refined, feel confident and find pieces that truly represent who they are. From timeless Nigerian styles to contemporary fashion, every piece is selected and created with quality, personality and occasion in mind.”',
  CEO_MESSAGE_PART2:
    '“Whether you are dressing for a business meeting, a celebration, a wedding, an important occasion or simply choosing to look your best, Belford Collection is here to help you make the right impression.”',
  CEO_MARKETING:
    'Choose fashion that reflects your confidence, your ambition and your personality. Discover carefully selected pieces, distinctive native styles, contemporary English wear and custom fashion created to help you stand out for the right reasons.',
  CEO_QUOTE:
    '“Style is not simply what you wear. It is the confidence you leave behind.”'
};

const STORAGE_KEY = 'belford_collection_config_v5';

export function getStoredPlaceholders(): PlaceholderConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return { ...DEFAULT_PLACEHOLDERS, ...JSON.parse(raw) };
    }
  } catch (e) {
    console.error('Failed reading placeholders from localStorage', e);
  }
  return DEFAULT_PLACEHOLDERS;
}

export function savePlaceholders(config: PlaceholderConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Failed saving placeholders to localStorage', e);
  }
}

export function cleanWhatsAppNumber(num: string): string {
  const digits = num.replace(/[^0-9]/g, '');
  if (digits.startsWith('0') && digits.length === 11) {
    return '234' + digits.slice(1);
  }
  return digits || '2349069710687';
}

export function formatWhatsAppUrl(number: string, message: string): string {
  const clean = cleanWhatsAppNumber(number);
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}
