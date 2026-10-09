// Centralized image URL configuration according to Belford Collection Master Specification
export const IMAGE_CONFIG = {
  // Official and only brand logo (Section 2)
  logo: "https://postimg.cc/cgjQzM37",

  // Homepage Hero & Major Highlights (Section 9, 10, 11, 12, 34, 35)
  hero: "https://postimg.cc/jw9z1QfL",
  featuredMen: "https://postimg.cc/18VM0xcz", // Previously supplied corrected Men's Collection URL
  featuredWomen: "https://postimg.cc/RJm3ZHnD", // Front page Women Collection image updated per request
  featuredFootwear: "https://postimg.cc/TLSrsqby",
  featuredBeauty: "https://postimg.cc/G8NkfJDy",
  ankaraMaxiGown: "https://postimg.cc/YhSxS0rm",
  mensPremiumSuit: "https://postimg.cc/jw9z1QfH",
  womensBlockHeels: "https://postimg.cc/xcdPd8fM",
  premiumHandbag: "https://postimg.cc/T5DrvLjD",
  customMade: "https://postimg.cc/1fzKzXmt",
  ceo: "https://postimg.cc/QBtPgGW9",
  brandExperience: "https://postimg.cc/TKdv1ry0",

  // Men's English Wear (Section 27)
  mensSuits: "https://postimg.cc/hJJcgGBC",
  mensTwoPiece: "https://postimg.cc/QVj62yhN",
  mensThreePiece: "https://postimg.cc/D8ChRGGf",
  mensLongSleeve: "https://postimg.cc/5XQp5cq0",
  mensShortSleeve: "https://postimg.cc/3yM1nLtT",
  mensTrousers: "https://postimg.cc/3k09jMCZ",
  mensBlazers: "https://postimg.cc/18VM0xcz",
  mensWaistcoats: "https://postimg.cc/Vd7w2ttv",
  mensCorporate: "https://postimg.cc/crDWP33K",

  // Men's Native Wear (Section 28)
  senator: "https://postimg.cc/d77wv0Yj",
  agbada: "https://postimg.cc/8FqDCVks",
  nativeTwoPiece: "https://postimg.cc/SXXkqKhr",
  kaftan: "https://postimg.cc/gwfd0Pc9",
  nativeShirts: "https://postimg.cc/0MXbsQFM",
  traditional: "https://postimg.cc/DWWnFzTY",

  // Women's English Wear (Section 29)
  dresses: "https://postimg.cc/WdVWrbYn",
  gowns: "https://postimg.cc/RJm3ZHnD", // Female gown image updated per request
  tops: "https://postimg.cc/2b9VD6Mj",
  skirts: "https://postimg.cc/ygpkHdty",
  jumpsuits: "https://postimg.cc/1Vg45S1p",
  twoPieceSets: "https://postimg.cc/rRdzFT24",
  womensBlazers: "https://postimg.cc/LYQnpXwT",
  womensTrousers: "https://postimg.cc/06BdJrm8", // Women's Jean Trousers updated per request
  corporateWear: "https://postimg.cc/LYQnpXwT", // Corporate Wear updated per request
  partyWear: "https://postimg.cc/xNkqTQVR", // Party Wear updated per request

  // Women's Native / African Wear (Section 30)
  womensAnkara: "https://postimg.cc/BjChC9Rd",
  lace: "https://postimg.cc/MnYsY2gB",
  george: "https://postimg.cc/p9MmPrCW",
  asoEbi: "https://postimg.cc/qNGmGVW2",
  nativeDresses: "https://postimg.cc/SnGZGFH6",
  wrapperBlouse: "https://postimg.cc/LJVyVKGD",
  africanTwoPiece: "https://postimg.cc/BjChC9RY",

  // Footwear (Section 31)
  heels: "https://postimg.cc/Z9gBXHQ2",
  blockHeels: "https://postimg.cc/fJ0WkZJY",
  stilettos: "https://postimg.cc/FdVdWLMH",
  sandals: "https://postimg.cc/4mDfc308",
  flats: "https://postimg.cc/BLKsbBvG",
  sneakers: "https://postimg.cc/5Q5Vq9Lc",
  boots: "https://postimg.cc/06rKtFVh",
  loafers: "https://postimg.cc/rRGkCyxL",
  corporateShoes: "https://postimg.cc/LgkpB4LK",

  // Accessories (Section 32)
  bags: "https://postimg.cc/qzhmYB7R",
  earrings: "https://postimg.cc/BXLhyZvb",
  chains: "https://postimg.cc/FdJKJJZG",
  necklaces: "https://postimg.cc/56YPG9tN",
  bracelets: "https://postimg.cc/w7yWPxB6",
  rings: "https://postimg.cc/MvMs4ZGq",
  jewellerySets: "https://postimg.cc/qzhmYB7R", // Exactly preserved per prompt
  wristwatches: "https://postimg.cc/5jk7nQfJ",
  sunglasses: "https://postimg.cc/bdFC3Sqq",
  belts: "https://postimg.cc/4nFLBHXk",

  // Beauty & Makeup (Section 33)
  makeup: "https://postimg.cc/TKRhH1d8",
  lipProducts: "https://postimg.cc/tsX7mJXM",
  foundation: "https://postimg.cc/yDVWrxVM", // Updated per request
  powder: "https://i.postimg.cc/BvrYxvCW/Gemini-Generated-Image-wrp90uwrp90uwrp9.jpg", // Updated per request
  eyelashes: "https://postimg.cc/rD8zYsV2", // Exactly preserved per prompt
  beautyAccessories: "https://postimg.cc/9DWzN0mm"
} as const;

// Price configuration according to Section 11 & category requirements
export const PRICE_CONFIG: Record<string, string> = {
  // Four Homepage Highlights (Section 11)
  'Ankara Maxi Gown': '₦25,000',
  "Men's Premium Suit": '₦45,000',
  "Women's Block Heels": 'PRICE AVAILABLE ON REQUEST',
  'Premium Handbag': '₦32,000',

  // Footwear
  'Heels': '₦35,000',
  'Block Heels': '₦35,000',
  'Stilettos': '₦40,000',
  'Sandals': '₦25,000',
  'Flats': '₦25,000',
  'Sneakers': '₦45,000',
  'Boots': '₦60,000',
  'Loafers': '₦50,000',
  'Corporate Shoes': '₦50,000',

  // Accessories
  'Bags': '₦45,000',
  'Earrings': '₦15,000',
  'Chains': '₦20,000',
  'Necklaces': '₦20,000',
  'Bracelets': '₦15,000',
  'Rings': '₦15,000',
  'Jewellery Sets': '₦40,000',
  'Wristwatches': '₦35,000',
  'Sunglasses': '₦25,000',
  'Belts': '₦20,000',

  // Beauty
  'Makeup': '₦25,000',
  'Lip Products': '₦10,000',
  'Foundation': '₦15,000',
  'Powder': '₦12,000',
  'Eyelashes': '₦10,000',
  'Beauty Accessories': '₦15,000',

  // Men's English Wear
  'Suits': '₦95,000',
  '2-Piece Suits': '₦85,000',
  '3-Piece Suits': '₦110,000',
  'Long Sleeve Shirts': '₦22,000',
  'Short Sleeve Shirts': '₦18,000',
  'Trousers': '₦25,000',
  'Blazers': '₦65,000',
  'Waistcoats': '₦28,000',
  'Corporate Wear': '₦45,000',

  // Men's Native Wear
  'Senator': '₦55,000',
  'Agbada': '₦90,000',
  'Native Two-Piece': '₦48,000',
  'Kaftan': '₦42,000',
  'Native Shirts': '₦25,000',
  'Traditional Outfits': '₦75,000',

  // Women's English Wear
  'Dresses': '₦35,000',
  'Gowns': '₦45,000',
  'Tops': '₦18,000',
  'Skirts': '₦22,000',
  'Jumpsuits': '₦38,000',
  'Two-Piece Sets': '₦42,000',
  "Women's Blazers": '₦55,000',
  "Women's Trousers": '₦25,000',
  'Jean Trousers': '₦25,000',
  'Party Wear': '₦45,000',

  // Women's Native Wear
  'Ankara': '₦38,000',
  'Lace': '₦58,000',
  'George': '₦68,000',
  'Aso-Ebi': '₦45,000',
  'Native Dresses': '₦40,000',
  'Wrapper & Blouse': '₦52,000',
  'African Two-Piece': '₦45,000'
};

export interface TestimonialItem {
  label: string;
  location: string;
  text: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    label: "VERIFIED",
    location: "Abadeta",
    text: "I ordered a bespoke 3-piece suit and the fit was commanding. The craftsmanship and fabric selection exceeded my expectations."
  },
  {
    label: "VERIFIED",
    location: "Asaba",
    text: "The Ankara Maxi gown was radiant and perfectly proportioned. Ordering directly on WhatsApp was effortless."
  },
  {
    label: "VERIFIED",
    location: "Lagos",
    text: "Our Aso-Ebi family ensemble was coordinated flawlessly. Every member received their exact cut on time."
  },
  {
    label: "VERIFIED",
    location: "London, UK",
    text: "International delivery was swift and the handcrafted leather loafers are pure luxury. Belford Collection is truly international."
  }
];

