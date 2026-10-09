import React, { useState, useMemo, useEffect } from 'react';
import { PageType, PlaceholderConfig, OrderFormState } from '../types';
import { PRODUCTS } from '../data/products';
import { formatWhatsAppUrl } from '../config/placeholders';
import { CheckCircle2, MessageCircle, ArrowLeft, Plus, Minus, Send, Check } from 'lucide-react';

interface OrderPageProps {
  onNavigate: (page: PageType) => void;
  placeholders: PlaceholderConfig;
  initialOrderData?: Partial<OrderFormState>;
}

export const OrderPage: React.FC<OrderPageProps> = ({
  onNavigate,
  placeholders,
  initialOrderData
}) => {
  const [formData, setFormData] = useState<OrderFormState>({
    fullName: initialOrderData?.fullName || '',
    whatsappNumber: initialOrderData?.whatsappNumber || '',
    email: initialOrderData?.email || '',
    state: initialOrderData?.state || 'Abadeta State',
    city: initialOrderData?.city || '',
    deliveryAddress: initialOrderData?.deliveryAddress || '',
    category: initialOrderData?.category || "Men's English Wear",
    productName: initialOrderData?.productName || '',
    productCode: initialOrderData?.productCode || '',
    size: initialOrderData?.size || 'M',
    shoeSize: initialOrderData?.shoeSize || '42',
    colour: initialOrderData?.colour || 'Navy',
    colourOther: initialOrderData?.colourOther || '',
    quantity: initialOrderData?.quantity || 1,
    deliveryOption: initialOrderData?.deliveryOption || 'deliver_to_me',
    budgetTier: initialOrderData?.budgetTier || '₦15,000–₦50,000',
    additionalNotes: initialOrderData?.additionalNotes || '',
    customMeasurements: {
      chest: '',
      waist: '',
      hip: '',
      shoulder: '',
      sleeveLength: '',
      trouserLength: '',
      neck: ''
    }
  });

  const [submitted, setSubmitted] = useState(false);

  // All 36 Nigerian States + FCT + Abadeta State
  const nigerianStates = [
    'Abadeta State',
    'Abia',
    'Adamawa',
    'Akwa Ibom',
    'Anambra',
    'Bauchi',
    'Bayelsa',
    'Benue',
    'Borno',
    'Cross River',
    'Delta',
    'Ebonyi',
    'Edo',
    'Ekiti',
    'Enugu',
    'Federal Capital Territory (Abuja)',
    'Gombe',
    'Imo',
    'Jigawa',
    'Kaduna',
    'Kano',
    'Katsina',
    'Kebbi',
    'Kogi',
    'Kwara',
    'Lagos',
    'Nasarawa',
    'Niger',
    'Ogun',
    'Ondo',
    'Osun',
    'Oyo',
    'Plateau',
    'Rivers',
    'Sokoto',
    'Taraba',
    'Yobe',
    'Zamfara',
    'International Order (UK / USA / Other)'
  ];

  const categories = [
    "Men's English Wear",
    "Men's Native Wear",
    "Women's English Wear",
    "Women's Native Wear",
    'Footwear',
    'Accessories',
    'Beauty & Makeup'
  ];

  const standardSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Custom Measurement'];
  const shoeSizes = ['37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', 'Custom'];
  const colourOptions = ['Black', 'White', 'Blue', 'Navy', 'Red', 'Green', 'Brown', 'Cream', 'Grey', 'Other'];
  const budgetOptions: ('Below ₦5,000' | '₦5,000–₦15,000' | '₦15,000–₦50,000' | 'Above ₦50,000')[] = [
    'Below ₦5,000',
    '₦5,000–₦15,000',
    '₦15,000–₦50,000',
    'Above ₦50,000'
  ];

  // Map category to department in PRODUCTS
  const filteredProducts = useMemo(() => {
    const cat = formData.category.toLowerCase();
    if (cat.includes("men's english")) {
      return PRODUCTS.filter((p) => p.department === 'men' && p.category === 'English Wear');
    }
    if (cat.includes("men's native")) {
      return PRODUCTS.filter((p) => p.department === 'men' && p.category === 'Native Wear');
    }
    if (cat.includes("women's english")) {
      return PRODUCTS.filter((p) => p.department === 'women' && p.category === 'English Wear');
    }
    if (cat.includes("women's native")) {
      return PRODUCTS.filter((p) => p.department === 'women' && p.category === 'Native Wear');
    }
    if (cat.includes('footwear')) {
      return PRODUCTS.filter((p) => p.department === 'footwear-accessories' && p.category === 'Footwear');
    }
    if (cat.includes('accessories')) {
      return PRODUCTS.filter((p) => p.department === 'footwear-accessories' && p.category === 'Accessories');
    }
    if (cat.includes('beauty')) {
      return PRODUCTS.filter((p) => p.department === 'beauty');
    }
    return PRODUCTS;
  }, [formData.category]);

  const isFootwear = formData.category.toLowerCase().includes('footwear');
  const isClothing = formData.category.toLowerCase().includes('men') || formData.category.toLowerCase().includes('women');

  // Auto-populate product if not set
  useEffect(() => {
    if (!formData.productName && filteredProducts.length > 0) {
      setFormData((prev) => ({
        ...prev,
        productName: filteredProducts[0].name,
        productCode: filteredProducts[0].code
      }));
    }
  }, [formData.category, filteredProducts, formData.productName]);

  const handleProductChange = (prodName: string) => {
    const selected = filteredProducts.find((p) => p.name === prodName);
    if (selected) {
      setFormData((prev) => ({
        ...prev,
        productName: selected.name,
        productCode: selected.code
      }));
    } else {
      setFormData((prev) => ({ ...prev, productName: prodName }));
    }
  };

  const currentProductObj = useMemo(() => {
    return PRODUCTS.find((p) => p.name === formData.productName || p.code === formData.productCode);
  }, [formData.productName, formData.productCode]);

  // Construct structured WhatsApp order message
  const generatedWhatsAppMessage = useMemo(() => {
    const effectiveColour = formData.colour === 'Other' ? (formData.colourOther || 'Other') : formData.colour;
    const effectiveSize = isFootwear ? `EU ${formData.shoeSize}` : formData.size;

    let measurementsText = '';
    if (formData.size === 'Custom Measurement' && formData.customMeasurements) {
      const m = formData.customMeasurements;
      measurementsText = `\nCustom Measurements:
Chest/Bust: ${m.chest || 'N/A'}, Waist: ${m.waist || 'N/A'}, Hip: ${m.hip || 'N/A'}, Shoulder: ${m.shoulder || 'N/A'}, Sleeve: ${m.sleeveLength || 'N/A'}, Trouser: ${m.trouserLength || 'N/A'}`;
    }

    return `Hello Belford Collection, I would like to place an order.

CUSTOMER
Full Name: ${formData.fullName}
WhatsApp Number: ${formData.whatsappNumber}
Email: ${formData.email || 'N/A'}
State: ${formData.state}
City/Town: ${formData.city || 'N/A'}
Delivery Address: ${formData.deliveryOption === 'deliver_to_me' ? (formData.deliveryAddress || 'Address will be confirmed') : 'Pickup at Belford Flagship'}

PRODUCT
Category: ${formData.category}
Product: ${formData.productName}
Product Code: ${formData.productCode || currentProductObj?.code || 'BC-ORDER'}
Size: ${effectiveSize}${measurementsText}
Colour: ${effectiveColour}
Quantity: ${formData.quantity}

DELIVERY & BUDGET
Delivery Option: ${formData.deliveryOption === 'deliver_to_me' ? 'Deliver to me' : "I'll pick it up"}
Budget: ${formData.budgetTier}

ADDITIONAL NOTES
${formData.additionalNotes || 'None'}`;
  }, [formData, isFootwear, currentProductObj]);

  const whatsappUrl = useMemo(() => {
    return formatWhatsAppUrl(placeholders.WHATSAPP_NUMBER, generatedWhatsAppMessage);
  }, [placeholders.WHATSAPP_NUMBER, generatedWhatsAppMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Direct user to WhatsApp with the formatted order
    window.open(whatsappUrl, '_blank');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D] py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => onNavigate('collections')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#071A3D]/70 hover:text-[#2563FF] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Collections</span>
          </button>
        </div>

        {submitted ? (
          <div className="bg-[#EAF2FF]/50 border border-[#2563FF]/30 p-8 sm:p-10 space-y-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2563FF] text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h1 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D]">
                  ORDER DISPATCHED TO WHATSAPP
                </h1>
                <p className="text-xs sm:text-sm text-[#071A3D]/80 mt-1">
                  Your order details have been compiled and sent to Belford Collection's concierge.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 border border-[#C9D2E3]/60 space-y-3 text-xs text-[#071A3D]/85">
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-gray-500">Customer:</span>
                <span className="font-bold text-[#071A3D]">{formData.fullName} ({formData.whatsappNumber})</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-gray-500">Item:</span>
                <span className="font-bold text-[#071A3D]">{formData.productName} [{formData.productCode || 'BC-ORDER'}]</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-gray-500">Selection:</span>
                <span>Size: {isFootwear ? `EU ${formData.shoeSize}` : formData.size} • Colour: {formData.colour === 'Other' ? formData.colourOther : formData.colour} • Qty: {formData.quantity}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-gray-500">Fulfillment:</span>
                <span>{formData.deliveryOption === 'deliver_to_me' ? `Deliver to ${formData.city || ''}, ${formData.state}` : 'Pickup at Belford Flagship'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-500">Budget Range:</span>
                <span className="font-bold text-[#2563FF]">{formData.budgetTier}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2563FF]/30 flex items-center justify-center gap-2.5 min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>RE-OPEN WHATSAPP CHAT</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-gray-50 border border-[#C9D2E3] text-[#071A3D] text-xs font-bold tracking-wider uppercase transition-colors"
              >
                Edit Information
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
                Boutique Order Portal
              </span>
              <h1 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#071A3D] mt-2">
                Place Your Order
              </h1>
              <p className="text-xs sm:text-sm text-[#071A3D]/75 mt-2 leading-relaxed">
                Select your specifications below. We use intuitive selectors so ordering is fast, effortless, and verified before payment.
              </p>
            </div>

            {/* CUSTOMER INFORMATION */}
            <div className="bg-white border border-[#C9D2E3]/60 p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="font-['Cinzel'] text-lg font-bold text-[#071A3D] border-b border-[#C9D2E3]/40 pb-3">
                1. Customer Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Divine Ifeanyi"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    placeholder="e.g. 09069710687"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. client@example.com"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    State <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    {nigerianStates.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    City / Town
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Abadeta, Asaba, Lagos, Port Harcourt"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    value={formData.deliveryAddress}
                    onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                    placeholder="Street, Landmark, Residential estate"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                  />
                </div>
              </div>
            </div>

            {/* PRODUCT SPECIFICATION */}
            <div className="bg-white border border-[#C9D2E3]/60 p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="font-['Cinzel'] text-lg font-bold text-[#071A3D] border-b border-[#C9D2E3]/40 pb-3">
                2. Product Selection
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Category <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => {
                      const newCat = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        category: newCat,
                        productName: '',
                        productCode: ''
                      }));
                    }}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Product <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.productName}
                    onChange={(e) => handleProductChange(e.target.value)}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    {filteredProducts.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} {p.priceDisplay ? `(${p.priceDisplay})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Product Code
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={formData.productCode || currentProductObj?.code || 'BC-ITEM'}
                    className="w-full px-4 py-3 bg-gray-100 border border-[#C9D2E3] text-sm font-mono text-[#071A3D]/70 cursor-not-allowed"
                  />
                </div>

                {/* Conditional Shoe Size or Clothing Size */}
                {isFootwear ? (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                      Shoe Size <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
                      {shoeSizes.map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setFormData({ ...formData, shoeSize: sz })}
                          className={`py-2 text-xs font-semibold border transition-all ${
                            formData.shoeSize === sz
                              ? 'border-[#2563FF] bg-[#2563FF] text-white shadow-xs'
                              : 'border-[#C9D2E3] bg-[#EAF2FF]/20 text-[#071A3D] hover:border-[#2563FF]'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                      Size Selection <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {standardSizes.map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setFormData({ ...formData, size: sz })}
                          className={`px-3 py-2 text-xs font-semibold border transition-all ${
                            formData.size === sz
                              ? 'border-[#2563FF] bg-[#2563FF] text-white shadow-xs'
                              : 'border-[#C9D2E3] bg-[#EAF2FF]/20 text-[#071A3D] hover:border-[#2563FF]'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Conditional Measurement Inputs if Custom Measurement chosen */}
                {formData.size === 'Custom Measurement' && !isFootwear && (
                  <div className="sm:col-span-2 p-4 bg-[#EAF2FF]/40 border border-[#2563FF]/30 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2563FF]">
                      Enter Your Custom Measurements (Inches):
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] text-gray-600 block">Chest / Bust</label>
                        <input
                          type="text"
                          value={formData.customMeasurements?.chest || ''}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              customMeasurements: { ...formData.customMeasurements, chest: e.target.value }
                            })
                          }
                          placeholder="e.g. 40 in"
                          className="w-full px-2.5 py-1.5 bg-white border border-[#C9D2E3] text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-gray-600 block">Waist</label>
                        <input
                          type="text"
                          value={formData.customMeasurements?.waist || ''}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              customMeasurements: { ...formData.customMeasurements, waist: e.target.value }
                            })
                          }
                          placeholder="e.g. 34 in"
                          className="w-full px-2.5 py-1.5 bg-white border border-[#C9D2E3] text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-gray-600 block">Hips</label>
                        <input
                          type="text"
                          value={formData.customMeasurements?.hip || ''}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              customMeasurements: { ...formData.customMeasurements, hip: e.target.value }
                            })
                          }
                          placeholder="e.g. 42 in"
                          className="w-full px-2.5 py-1.5 bg-white border border-[#C9D2E3] text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-gray-600 block">Shoulder Width</label>
                        <input
                          type="text"
                          value={formData.customMeasurements?.shoulder || ''}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              customMeasurements: { ...formData.customMeasurements, shoulder: e.target.value }
                            })
                          }
                          placeholder="e.g. 18 in"
                          className="w-full px-2.5 py-1.5 bg-white border border-[#C9D2E3] text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-gray-600 block">Sleeve Length</label>
                        <input
                          type="text"
                          value={formData.customMeasurements?.sleeveLength || ''}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              customMeasurements: { ...formData.customMeasurements, sleeveLength: e.target.value }
                            })
                          }
                          placeholder="e.g. 25 in"
                          className="w-full px-2.5 py-1.5 bg-white border border-[#C9D2E3] text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-gray-600 block">Trouser / Skirt Length</label>
                        <input
                          type="text"
                          value={formData.customMeasurements?.trouserLength || ''}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              customMeasurements: { ...formData.customMeasurements, trouserLength: e.target.value }
                            })
                          }
                          placeholder="e.g. 41 in"
                          className="w-full px-2.5 py-1.5 bg-white border border-[#C9D2E3] text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Colour Selection */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Colour Selection <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {colourOptions.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setFormData({ ...formData, colour: c })}
                        className={`px-3 py-1.5 text-xs font-semibold border transition-all ${
                          formData.colour === c
                            ? 'border-[#2563FF] bg-[#2563FF] text-white shadow-xs'
                            : 'border-[#C9D2E3] bg-[#EAF2FF]/20 text-[#071A3D] hover:border-[#2563FF]'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>

                  {formData.colour === 'Other' && (
                    <div className="mt-2 max-w-sm">
                      <input
                        type="text"
                        value={formData.colourOther || ''}
                        onChange={(e) => setFormData({ ...formData, colourOther: e.target.value })}
                        placeholder="Please specify preferred colour/pattern"
                        className="w-full px-3 py-2 bg-white border border-[#2563FF] text-xs text-[#071A3D] focus:outline-none"
                      />
                    </div>
                  )}
                </div>

                {/* Quantity with - 1 + stepper */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Quantity <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, quantity: Math.max(1, p.quantity - 1) }))}
                      className="w-12 h-12 border border-[#C9D2E3] bg-[#EAF2FF]/30 flex items-center justify-center text-[#071A3D] hover:bg-[#EAF2FF] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="w-16 h-12 border-y border-[#C9D2E3] flex items-center justify-center text-sm font-bold bg-white tabular-nums">
                      {formData.quantity}
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, quantity: p.quantity + 1 }))}
                      className="w-12 h-12 border border-[#C9D2E3] bg-[#EAF2FF]/30 flex items-center justify-center text-[#071A3D] hover:bg-[#EAF2FF] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Special instructions, event date, tailoring details..."
                  className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                />
              </div>
            </div>

            {/* DELIVERY & BUDGET SELECTION */}
            <div className="bg-white border border-[#C9D2E3]/60 p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="font-['Cinzel'] text-lg font-bold text-[#071A3D] border-b border-[#C9D2E3]/40 pb-3">
                3. Delivery & Budget
              </h2>

              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D]">
                  Delivery Option <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label
                    onClick={() => setFormData({ ...formData, deliveryOption: 'deliver_to_me' })}
                    className={`p-4 border cursor-pointer flex items-center justify-between transition-colors ${
                      formData.deliveryOption === 'deliver_to_me'
                        ? 'border-[#2563FF] bg-[#EAF2FF]/50 ring-1 ring-[#2563FF]'
                        : 'border-[#C9D2E3] hover:border-gray-400'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wider text-[#071A3D] block">Deliver to me</span>
                      <span className="text-xs text-[#071A3D]/70">Shipped directly to your doorstep in Nigeria or abroad.</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      formData.deliveryOption === 'deliver_to_me' ? 'border-[#2563FF] bg-[#2563FF]' : 'border-gray-400'
                    }`}>
                      {formData.deliveryOption === 'deliver_to_me' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>
                  </label>

                  <label
                    onClick={() => setFormData({ ...formData, deliveryOption: 'pickup' })}
                    className={`p-4 border cursor-pointer flex items-center justify-between transition-colors ${
                      formData.deliveryOption === 'pickup'
                        ? 'border-[#2563FF] bg-[#EAF2FF]/50 ring-1 ring-[#2563FF]'
                        : 'border-[#C9D2E3] hover:border-gray-400'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wider text-[#071A3D] block">I'll pick it up</span>
                      <span className="text-xs text-[#071A3D]/70">Collect at Belford Collection flagship boutique.</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      formData.deliveryOption === 'pickup' ? 'border-[#2563FF] bg-[#2563FF]' : 'border-gray-400'
                    }`}>
                      {formData.deliveryOption === 'pickup' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D]">
                  Budget Range <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budgetTier: b })}
                      className={`p-3 text-xs font-semibold border text-center transition-all ${
                        formData.budgetTier === b
                          ? 'border-[#2563FF] bg-[#2563FF] text-white shadow-xs'
                          : 'border-[#C9D2E3] bg-[#EAF2FF]/20 text-[#071A3D] hover:border-[#2563FF]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Action: Button "SEND ORDER" per Section 25 */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2563FF]/30 flex items-center justify-center gap-2 min-h-[50px]"
              >
                <span>SEND ORDER</span>
                <Send className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#071A3D]/70 text-center mt-2.5">
                Submitting opens WhatsApp with your pre-filled order for instant confirmation with our atelier team.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
