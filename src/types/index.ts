export type PageType =
  | 'home'
  | 'collections'
  | 'men'
  | 'women'
  | 'footwear-accessories'
  | 'beauty'
  | 'custom-made'
  | 'group-orders'
  | 'order'
  | 'about'
  | 'contact'
  | 'exchange-return'
  | 'product-detail';

export type DepartmentType = 'men' | 'women' | 'footwear-accessories' | 'beauty';

export interface Product {
  id: string;
  code: string;
  name: string;
  department: DepartmentType;
  category: string; // e.g. "English Wear", "Native Wear", "Footwear", "Accessories", "Beauty"
  subCategory: string; // e.g. "Suits", "Senator", "Agbada", "Ankara", "Dresses", etc.
  price: number; // in NGN
  priceDisplay?: string; // e.g. "₦38,000"
  isEstimate?: boolean; // Always true per specification Section 10 & 51
  image: string; // supplied URL
  description: string; // Maximum 12 words per Section 39 & 48
  availableSizes: string[];
  availableColors: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface PlaceholderConfig {
  LOGO_URL: string;
  HERO_IMAGE_URL: string;
  MEN_COLLECTION_IMAGE_URL: string;
  WOMEN_COLLECTION_IMAGE_URL: string;
  ACCESSORIES_COLLECTION_IMAGE_URL: string;
  BEAUTY_COLLECTION_IMAGE_URL: string;
  ABOUT_IMAGE_URL: string;
  CUSTOM_FASHION_IMAGE_URL: string;
  CEO_IMAGE_URL: string;
  PRODUCT_IMAGE_01: string;
  PRODUCT_IMAGE_02: string;
  PRODUCT_IMAGE_03: string;
  PRODUCT_IMAGE_04: string;
  BUSINESS_NAME: string;
  BUSINESS_TYPE: string;
  ADDRESS: string;
  PHONE_NUMBER: string;
  INTERNATIONAL_PHONE: string;
  WHATSAPP_NUMBER: string;
  EMAIL_ADDRESS: string;
  LOCATION: string;
  PALMPAY_NUMBER: string;
  PALMPAY_PLATFORM: string;
  PALMPAY_NAME: string;
  PAYMENT_DETAILS: string;
  FACEBOOK_URL: string;
  INSTAGRAM_URL: string;
  TIKTOK_URL: string;
  GOOGLE_MAPS_URL: string;
  RETURN_POLICY_URL: string;
  ABOUT_STORY: string;
  CEO_NAME: string;
  CEO_TITLE: string;
  CEO_MESSAGE: string;
  CEO_QUOTE: string;
}

export interface OrderFormState {
  fullName: string;
  whatsappNumber: string;
  email: string;
  state: string;
  city: string;
  deliveryAddress: string;
  category: string;
  productName: string;
  productCode: string;
  size: string;
  shoeSize: string;
  colour: string;
  quantity: number;
  deliveryOption: 'delivery' | 'pickup';
  paymentStatus: 'unpaid' | 'paid';
  budgetTier?: string;
  additionalNotes: string;
}

export interface CustomOutfitFormState {
  fullName: string;
  whatsappNumber: string;
  gender: 'Male' | 'Female' | 'Prefer not to say';
  outfitType: string;
  styleDescription: string;
  measurements: string;
  fabric: string;
  requiredDate: string;
  budget: string;
  additionalNotes: string;
}

export interface GroupOrderFormState {
  fullName: string;
  whatsappNumber: string;
  eventType: string;
  numberOfPeople: string;
  fabric: string;
  colour: string;
  style: string;
  eventDate: string;
  budget: string;
  additionalNotes: string;
}

export interface ExchangeReturnFormState {
  fullName: string;
  whatsappNumber: string;
  orderDate: string;
  product: string;
  reason: string;
  replacementRequest: string;
}
