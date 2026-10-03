import { PlaceholderConfig } from '../types';
import { IMAGE_CONFIG } from './images';

export const DEFAULT_PLACEHOLDERS: PlaceholderConfig = {
  LOGO_URL: IMAGE_CONFIG.logo, // "https://postimg.cc/cgjQzM37"
  HERO_IMAGE_URL: IMAGE_CONFIG.hero, // "https://postimg.cc/jw9z1QfL"
  MEN_COLLECTION_IMAGE_URL: IMAGE_CONFIG.featuredMen, // "https://postimg.cc/18VM0xcz" per Instruction 4
  WOMEN_COLLECTION_IMAGE_URL: IMAGE_CONFIG.featuredWomen, // "https://postimg.cc/5YK6V0TH"
  ACCESSORIES_COLLECTION_IMAGE_URL: IMAGE_CONFIG.featuredFootwear, // "https://postimg.cc/TLSrsqby"
  BEAUTY_COLLECTION_IMAGE_URL: IMAGE_CONFIG.featuredBeauty, // "https://postimg.cc/G8NkfJDy"
  ABOUT_IMAGE_URL: IMAGE_CONFIG.brandExperience, // "https://postimg.cc/TKdv1ry0"
  CUSTOM_FASHION_IMAGE_URL: IMAGE_CONFIG.customMade, // "https://postimg.cc/1fzKzXmt"
  CEO_IMAGE_URL: IMAGE_CONFIG.ceo, // "https://postimg.cc/QBtPgGW9"
  PRODUCT_IMAGE_01: IMAGE_CONFIG.ankaraMaxiGown, // "https://postimg.cc/YhSxS0rm"
  PRODUCT_IMAGE_02: IMAGE_CONFIG.mensPremiumSuit, // "https://postimg.cc/jw9z1QfH"
  PRODUCT_IMAGE_03: IMAGE_CONFIG.womensBlockHeels, // "https://postimg.cc/xcdPd8fM"
  PRODUCT_IMAGE_04: IMAGE_CONFIG.premiumHandbag, // "https://postimg.cc/T5DrvLjD"

  BUSINESS_NAME: 'Belford Collection',
  BUSINESS_TYPE: 'Premium Fashion Boutique',
  ADDRESS: 'No. 2 Citycare Estate, Agbor, Delta State, Nigeria',
  PHONE_NUMBER: '09069710687',
  INTERNATIONAL_PHONE: '+2339069710687',
  WHATSAPP_NUMBER: '+2339069710687',
  EMAIL_ADDRESS: 'divineifeanyi@gmail.com',
  LOCATION: 'Agbor, Delta State, Nigeria',

  // Payment declaration details per Section 24
  PALMPAY_NUMBER: '9069710687',
  PALMPAY_PLATFORM: 'PalmPay',
  PALMPAY_NAME: 'Chukwudebe Ifeanyi',
  PAYMENT_DETAILS: '[PAYMENT_DETAILS]',

  FACEBOOK_URL: 'https://www.facebook.com/profile.php?id=61578326773110',
  INSTAGRAM_URL: '',
  TIKTOK_URL: '',
  GOOGLE_MAPS_URL: 'https://www.google.com/maps/search/?api=1&query=Asaba%2C+Delta+State%2C+Nigeria',
  RETURN_POLICY_URL: '[RETURN_POLICY_URL]',

  // Maximum 60 words per Section 33 & 48
  ABOUT_STORY: 'Belford Collection is a fashion boutique in Agbor, Delta State, offering refined clothing, native and English wear, footwear, accessories, beauty products and custom tailoring. We combine personal service with carefully selected styles to help customers dress confidently for everyday life, business and important occasions.',

  // Maximum 35 words per Section 34 & 48
  CEO_NAME: '[CEO_NAME]',
  CEO_TITLE: 'CEO, Belford Collection',
  CEO_MESSAGE: '“We believe great fashion should feel personal. Belford Collection helps every customer find a look that reflects confidence, individuality and the importance of the occasion.”',
  CEO_QUOTE: '“Style is not simply what you wear. It is the confidence you leave behind.”'
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
  return num.replace(/[^0-9]/g, '');
}

export function formatWhatsAppUrl(number: string, message: string): string {
  const clean = cleanWhatsAppNumber(number) || '2339069710687';
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}
