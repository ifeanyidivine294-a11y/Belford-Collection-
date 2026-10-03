// Centralized image URL configuration per Section 50 of specification
export const IMAGE_CONFIG = {
  logo: "https://postimg.cc/cgjQzM37",
  hero: "https://postimg.cc/jw9z1QfL",
  featuredMen: "https://postimg.cc/18VM0xcz", // Men's Main Collection per Instruction 4
  mensMainCollection: "https://postimg.cc/18VM0xcz",
  featuredWomen: "https://postimg.cc/5YK6V0TH",
  featuredFootwear: "https://postimg.cc/TLSrsqby",
  featuredBeauty: "https://postimg.cc/G8NkfJDy",
  ankaraMaxiGown: "https://postimg.cc/YhSxS0rm",
  mensPremiumSuit: "https://postimg.cc/jw9z1QfH",
  womensBlockHeels: "https://postimg.cc/xcdPd8fM",
  premiumHandbag: "https://postimg.cc/T5DrvLjD",
  customMade: "https://postimg.cc/1fzKzXmt",
  ceo: "https://postimg.cc/QBtPgGW9",
  brandExperience: "https://postimg.cc/TKdv1ry0",

  // Men's English Wear
  mensSuits: "https://postimg.cc/hJJcgGBC",
  mensTwoPiece: "https://postimg.cc/QVj62yhN",
  mensThreePiece: "https://postimg.cc/D8ChRGGf",
  mensLongSleeve: "https://postimg.cc/5XQp5cq0",
  mensShortSleeve: "https://postimg.cc/3yM1nLtT",
  mensTrousers: "https://postimg.cc/3k09jMCZ",
  mensBlazers: "https://postimg.cc/18VM0xcz",
  mensWaistcoats: "https://postimg.cc/Vd7w2ttv",
  mensCorporate: "https://postimg.cc/crDWP33K",

  // Men's Native Wear
  senator: "https://postimg.cc/d77wv0Yj",
  agbada: "https://postimg.cc/8FqDCVks",
  nativeTwoPiece: "https://postimg.cc/SXXkqKhr",
  kaftan: "https://postimg.cc/gwfd0Pc9",
  nativeShirts: "https://postimg.cc/0MXbsQFM",
  traditional: "https://postimg.cc/DWWnFzTY",

  // Women's English Wear
  dresses: "https://postimg.cc/WdVWrbYn",
  gowns: "https://postimg.cc/5YK6V0TH",
  tops: "https://postimg.cc/2b9VD6Mj",
  skirts: "https://postimg.cc/ygpkHdty",
  jumpsuits: "https://postimg.cc/1Vg45S1p",
  twoPieceSets: "https://postimg.cc/rRdzFT24",
  womensBlazers: "https://postimg.cc/LYQnpXwT",
  womensJeanTrouser: "https://postimg.cc/sGfGYjgM", // Updated per Instruction 6
  womensPartyWear: "https://postimg.cc/xNkqTQVR",
  corporateWear: "https://postimg.cc/N2G26sjL", // Updated per Instruction 5

  // Women's Native Wear
  womensAnkara: "https://postimg.cc/BjChC9Rd",
  lace: "https://postimg.cc/MnYsY2gB",
  george: "https://postimg.cc/p9MmPrCW",
  asoEbi: "https://postimg.cc/qNGmGVW2",
  nativeDresses: "https://postimg.cc/SnGZGFH6",
  wrapperBlouse: "https://postimg.cc/LJVyVKGD",
  africanTwoPiece: "https://postimg.cc/BjChC9RY",

  // Footwear
  heels: "https://postimg.cc/Z9gBXHQ2",
  blockHeels: "https://postimg.cc/fJ0WkZJY",
  stilettos: "https://postimg.cc/FdVdWLMH",
  sandals: "https://postimg.cc/4mDfc308",
  flats: "https://postimg.cc/BLKsbBvG",
  sneakers: "https://postimg.cc/5Q5Vq9Lc",
  boots: "https://postimg.cc/06rKtFVh",
  loafers: "https://postimg.cc/rRGkCyxL",
  corporateShoes: "https://postimg.cc/LgkpB4LK",

  // Accessories
  bags: "https://postimg.cc/qzhmYB7R",
  earrings: "https://postimg.cc/BXLhyZvb",
  chains: "https://postimg.cc/FdJKJJZG",
  necklaces: "https://postimg.cc/56YPG9tN",
  bracelets: "https://postimg.cc/w7yWPxB6",
  rings: "https://postimg.cc/MvMs4ZGq",
  jewellerySets: "https://postimg.cc/qzhmYB7R",
  wristwatches: "https://postimg.cc/5jk7nQfJ",
  sunglasses: "https://postimg.cc/bdFC3Sqq",
  belts: "https://postimg.cc/4nFLBHXk",

  // Beauty & Makeup
  makeup: "https://postimg.cc/TKRhH1d8",
  lipProducts: "https://postimg.cc/tsX7mJXM",
  foundation: "https://postimg.cc/yDVWrxVM",
  powder: "https://postimg.cc/rD8zYsV2",
  eyelashes: "https://postimg.cc/rD8zYsV2",
  beautyAccessories: "https://postimg.cc/9DWzN0mm"
} as const;

// Price configuration per Section 10 & 51 (all marked ESTIMATE)
export const PRICE_CONFIG: Record<string, string> = {
  // Four Homepage Highlights
  'Ankara Maxi Gown': '₦38,000',
  "Men's Premium Suit": '₦95,000',
  "Women's Block Heels": '₦35,000',
  'Premium Handbag': '₦45,000',

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
  'Jean Trouser': '₦25,000',
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

// Testimonials per Section 35
export interface TestimonialItem {
  label: string;
  location: string;
  text: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    label: "SAMPLE",
    location: "Agbor",
    text: "I ordered a suit and the fit was exactly what I needed. The team communicated clearly throughout."
  },
  {
    label: "SAMPLE",
    location: "Asaba",
    text: "The Ankara gown was beautiful and well presented. I loved how easy the ordering process felt."
  },
  {
    label: "SAMPLE",
    location: "Benin",
    text: "My custom outfit came together beautifully. The guidance on the style and measurements was helpful."
  },
  {
    label: "SAMPLE",
    location: "Lagos",
    text: "Our Aso-Ebi group order was handled clearly, from coordination to final collection."
  }
];
