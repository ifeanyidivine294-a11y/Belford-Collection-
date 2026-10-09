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
  priceDisplay?: string; // e.g. "₦25,000" or "PRICE AVAILABLE ON REQUEST"
  isEstimate?: boolean;
  image: string; // supplied URL
  description: string;
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
  EXPERIENCE: string;
  PHONE_NUMBER: string;
  INTERNATIONAL_PHONE: string;
  WHATSAPP_NUMBER: string;
  EMAIL_ADDRESS: string;
  LOCATION: string;
  ADDRESS: string;
  PALMPAY_NUMBER: string;
  PALMPAY_PLATFORM: string;
  PALMPAY_NAME: string;
  PAYMENT_DETAILS: string;
  FACEBOOK_URL: string;
  INSTAGRAM_URL: string;
  TIKTOK_URL: string;
  GOOGLE_MAPS_URL: string;
  RETURN_POLICY_URL: string;
  BUSINESS_HISTORY: string;
  OUR_VALUES: string;
  OUR_APPROACH: string;
  OUR_PROMISE: string;
  CEO_NAME: string;
  CEO_TITLE: string;
  CEO_MESSAGE: string;
  CEO_MESSAGE_PART2: string;
  CEO_MARKETING: string;
  CEO_QUOTE: string;
}

export interface CustomMeasurements {
  chest?: string;
  waist?: string;
  hip?: string;
  shoulder?: string;
  sleeveLength?: string;
  trouserLength?: string;
  neck?: string;
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
  colourOther?: string;
  quantity: number;
  deliveryOption: 'deliver_to_me' | 'pickup';
  budgetTier: 'Below ₦5,000' | '₦5,000–₦15,000' | '₦15,000–₦50,000' | 'Above ₦50,000';
  additionalNotes: string;
  customMeasurements?: CustomMeasurements;
}

export interface CustomOutfitFormState {
  fullName: string;
  whatsappNumber: string;
  gender: 'Male' | 'Female';
  outfitType: string;
  outfitTypeOther?: string;
  styleOption: string;
  styleDescription: string;
  measurementsMode: 'I have my measurements' | 'I need help with measurements' | 'I want to provide custom measurements';
  customMeasurements?: CustomMeasurements;
  fabric: string;
  fabricOther?: string;
  requiredDate: string;
  budget: 'Below ₦5,000' | '₦5,000–₦15,000' | '₦15,000–₦50,000' | 'Above ₦50,000';
  additionalNotes: string;
}

export interface GroupOrderFormState {
  fullName: string;
  whatsappNumber: string;
  eventType: string;
  eventTypeOther?: string;
  numberOfPeople: number;
  fabric: string;
  fabricOther?: string;
  colour: string;
  colourOther?: string;
  style: string;
  styleOther?: string;
  eventDate: string;
  budget: 'Below ₦5,000' | '₦5,000–₦15,000' | '₦15,000–₦50,000' | 'Above ₦50,000';
  additionalNotes: string;
}

export interface ExchangeReturnFormState {
  fullName: string;
  whatsappNumber: string;
  orderDate: string;
  product: string;
  reason: 'Wrong Size' | 'Wrong Colour' | 'Defective Item' | 'Incorrect Item' | 'Other';
  reasonOther?: string;
  replacementRequest: string;
}
