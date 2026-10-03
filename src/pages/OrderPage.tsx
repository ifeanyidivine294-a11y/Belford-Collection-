import React, { useState, useMemo, useEffect } from 'react';
import { PageType, PlaceholderConfig, OrderFormState } from '../types';
import { PRODUCTS } from '../data/products';
import { formatWhatsAppUrl } from '../config/placeholders';
import { CheckCircle2, MessageCircle, ArrowRight, ArrowLeft, ShieldCheck, Plus, Minus, CreditCard } from 'lucide-react';

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
    state: initialOrderData?.state || 'Delta',
    city: initialOrderData?.city || 'Agbor',
    deliveryAddress: initialOrderData?.deliveryAddress || '',
    category: initialOrderData?.category || "Men's English Wear",
    productName: initialOrderData?.productName || '',
    productCode: initialOrderData?.productCode || '',
    size: initialOrderData?.size || 'M',
    shoeSize: initialOrderData?.shoeSize || '42',
    colour: initialOrderData?.colour || 'Deep Navy',
    quantity: initialOrderData?.quantity || 1,
    deliveryOption: initialOrderData?.deliveryOption || 'delivery',
    paymentStatus: initialOrderData?.paymentStatus || 'unpaid',
    budgetTier: initialOrderData?.budgetTier || 'Standard',
    additionalNotes: initialOrderData?.additionalNotes || ''
  });

  const [submitted, setSubmitted] = useState(false);

  const nigerianStates = [
    'Delta', 'Edo', 'Lagos', 'Abuja (FCT)', 'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra',
    'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Ebonyi', 'Ekiti', 'Enugu',
    'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
    'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto',
    'Taraba', 'Yobe', 'Zamfara', 'International'
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

  const isFootwear = formData.category.toLowerCase().includes('footwear') ||
    filteredProducts.some((p) => p.name === formData.productName && p.category === 'Footwear');

  // Sync product selection
  useEffect(() => {
    if (!formData.productName && filteredProducts.length > 0) {
      setFormData((prev) => ({
        ...prev,
        productName: filteredProducts[0].name,
        productCode: filteredProducts[0].code,
        size: filteredProducts[0].availableSizes[0] || 'Standard',
        colour: filteredProducts[0].availableColors[0] || 'As shown'
      }));
    }
  }, [formData.category, filteredProducts, formData.productName]);

  const handleProductChange = (prodName: string) => {
    const selected = filteredProducts.find((p) => p.name === prodName);
    if (selected) {
      setFormData((prev) => ({
        ...prev,
        productName: selected.name,
        productCode: selected.code,
        size: selected.availableSizes[0] || 'Standard',
        colour: selected.availableColors[0] || 'As shown'
      }));
    } else {
      setFormData((prev) => ({ ...prev, productName: prodName }));
    }
  };

  const currentProductObj = useMemo(() => {
    return PRODUCTS.find((p) => p.name === formData.productName || p.code === formData.productCode);
  }, [formData.productName, formData.productCode]);

  // Construct exact WhatsApp message per Section 27
  const generatedWhatsAppMessage = useMemo(() => {
    const paymentLabel = formData.paymentStatus === 'paid' ? 'PAID' : 'NOT PAID';
    return `Hello Belford Collection, I would like to place an order.

CUSTOMER
Name: ${formData.fullName}
WhatsApp: ${formData.whatsappNumber}
Email: ${formData.email || 'N/A'}
State: ${formData.state}
City: ${formData.city}
Address: ${formData.deliveryAddress || 'Store Pickup'}

ORDER
Category: ${formData.category}
Product: ${formData.productName}
Product Code: ${formData.productCode || 'N/A'}
Size: ${formData.size || 'Standard'}
Shoe Size: ${isFootwear ? formData.shoeSize : 'N/A'}
Colour: ${formData.colour || 'Standard'}
Quantity: ${formData.quantity}
Delivery/Pickup: ${formData.deliveryOption === 'delivery' ? 'Delivery' : 'Pickup'}
Budget: ${formData.budgetTier || 'Standard'}

PAYMENT STATUS
${paymentLabel}

NOTES
${formData.additionalNotes || 'None'}`;
  }, [formData, isFootwear]);

  const whatsappUrl = useMemo(() => {
    return formatWhatsAppUrl(placeholders.WHATSAPP_NUMBER, generatedWhatsAppMessage);
  }, [placeholders.WHATSAPP_NUMBER, generatedWhatsAppMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#071A3D] py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('collections')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#071A3D]/70 hover:text-[#2563FF] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Collections</span>
          </button>
        </div>

        {/* Section 25: Order Confirmation State */}
        {submitted ? (
          <div className="bg-[#EAF2FF]/50 border border-[#2563FF]/30 p-8 sm:p-10 space-y-7 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2563FF] text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#071A3D]">
                  ORDER REQUEST READY
                </h1>
                <p className="text-xs sm:text-sm text-[#071A3D]/80 mt-1">
                  Your details have been prepared for Belford Collection. Continue to WhatsApp to complete your order enquiry.
                </p>
              </div>
            </div>

            {/* Payment Status Display per Section 25 */}
            <div className="bg-white p-5 border border-[#C9D2E3]/60 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#C9D2E3]/30">
                <span className="text-xs uppercase font-bold text-[#071A3D]/70 tracking-wider">
                  Payment Status
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 ${
                  formData.paymentStatus === 'paid'
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-amber-100 text-amber-800 border border-amber-300'
                }`}>
                  {formData.paymentStatus === 'paid'
                    ? 'Customer indicated payment sent'
                    : 'Not paid'}
                </span>
              </div>

              {/* Display payment details per Section 24 & 25 */}
              <div className="pt-2 text-xs text-[#071A3D]/80 space-y-1.5">
                <p className="font-bold text-[#071A3D] uppercase tracking-wider text-[11px]">
                  Belford Collection Payment Details:
                </p>
                <div className="bg-[#EAF2FF]/60 p-3 rounded text-xs space-y-1 font-mono">
                  <p><span className="text-[#071A3D]/60 font-sans">Platform:</span> {placeholders.PALMPAY_PLATFORM}</p>
                  <p><span className="text-[#071A3D]/60 font-sans">Account/Number:</span> <span className="font-bold text-[#071A3D]">{placeholders.PALMPAY_NUMBER}</span></p>
                  <p><span className="text-[#071A3D]/60 font-sans">Account Name:</span> {placeholders.PALMPAY_NAME}</p>
                  <p className="text-[10px] text-[#071A3D]/60 font-sans pt-1">
                    {placeholders.PAYMENT_DETAILS}
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#071A3D]/75 space-y-1">
                <p><strong>Item:</strong> {formData.productName} ({formData.productCode})</p>
                <p><strong>Quantity:</strong> {formData.quantity} • <strong>Size:</strong> {isFootwear ? formData.shoeSize : formData.size}</p>
                <p><strong>Fulfillment:</strong> {formData.deliveryOption === 'delivery' ? `Delivery to ${formData.city}, ${formData.state}` : 'Pickup at Agbor Flagship'}</p>
              </div>
            </div>

            {/* Exact delivery notice per Section 23 & 37 */}
            <p className="text-xs text-[#071A3D]/80 italic">
              Delivery and pickup available. Details confirmed on WhatsApp.
            </p>

            {/* Continue to WhatsApp Button (Section 25) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2563FF]/30 flex items-center justify-center gap-2.5 min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CONTINUE TO WHATSAPP</span>
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
          /* Form Content */
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Title & Intro */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#2563FF]">
                Boutique Order Request
              </span>
              <h1 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#071A3D] mt-2">
                Place Your Order
              </h1>
              <p className="text-xs sm:text-sm text-[#071A3D]/75 mt-2 leading-relaxed">
                Complete your details below. You will be directed to WhatsApp where size, availability, and delivery are confirmed before payment.
              </p>
            </div>

            {/* SECTION 1: CUSTOMER INFORMATION */}
            <div className="bg-white border border-[#C9D2E3]/60 p-6 sm:p-8 space-y-6">
              <h2 className="font-['Cinzel'] text-lg font-bold text-[#071A3D] border-b border-[#C9D2E3]/40 pb-3 flex items-center gap-2">
                <span>1. Customer Information</span>
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
                    placeholder="e.g. Chukwuma Obi"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]"
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
                    placeholder="e.g. 0801 234 5678"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. client@example.com"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    State <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF] cursor-pointer"
                  >
                    {nigerianStates.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    City / Town <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Agbor, Asaba, Warri, Lagos"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]"
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
                    placeholder="Street, Landmark, Estate"
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] focus:ring-1 focus:ring-[#2563FF]"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: PRODUCT SELECTION */}
            <div className="bg-white border border-[#C9D2E3]/60 p-6 sm:p-8 space-y-6">
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
                        {p.name} {p.priceDisplay ? `(${p.priceDisplay} ESTIMATE)` : ''}
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
                    value={formData.productCode || currentProductObj?.code || 'BC-CAT'}
                    className="w-full px-4 py-3 bg-gray-100 border border-[#C9D2E3] text-sm font-mono text-[#071A3D]/70 cursor-not-allowed"
                  />
                </div>

                {/* Conditional Shoe Size or Clothing Size */}
                {isFootwear ? (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                      Shoe Size <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.shoeSize}
                      onChange={(e) => setFormData({ ...formData, shoeSize: e.target.value })}
                      className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                    >
                      {['37', '38', '39', '40', '41', '42', '43', '44', '45', '46'].map((sz) => (
                        <option key={sz} value={sz}>EU {sz}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                      Size Selection
                    </label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                    >
                      {(currentProductObj?.availableSizes || ['S', 'M', 'L', 'XL', 'XXL', 'Custom Measurement']).map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Colour / Shade
                  </label>
                  <select
                    value={formData.colour}
                    onChange={(e) => setFormData({ ...formData, colour: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF] cursor-pointer"
                  >
                    {(currentProductObj?.availableColors || ['Deep Navy', 'Electric Cobalt', 'White', 'As Photographed']).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                    Quantity
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, quantity: Math.max(1, p.quantity - 1) }))}
                      className="w-12 h-12 border border-[#C9D2E3] bg-[#EAF2FF]/30 flex items-center justify-center text-[#071A3D] hover:bg-[#EAF2FF]"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="w-16 h-12 border-y border-[#C9D2E3] flex items-center justify-center text-sm font-bold">
                      {formData.quantity}
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, quantity: p.quantity + 1 }))}
                      className="w-12 h-12 border border-[#C9D2E3] bg-[#EAF2FF]/30 flex items-center justify-center text-[#071A3D] hover:bg-[#EAF2FF]"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#071A3D] mb-1.5">
                  Additional Notes or Specific Measurements
                </label>
                <textarea
                  rows={2}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Any particular fit adjustments, event deadlines, or custom details..."
                  className="w-full px-4 py-3 bg-[#EAF2FF]/20 border border-[#C9D2E3] text-sm text-[#071A3D] focus:outline-none focus:border-[#2563FF]"
                />
              </div>
            </div>

            {/* SECTION 3: DELIVERY SELECTION */}
            <div className="bg-white border border-[#C9D2E3]/60 p-6 sm:p-8 space-y-4">
              <h2 className="font-['Cinzel'] text-lg font-bold text-[#071A3D] border-b border-[#C9D2E3]/40 pb-3">
                3. Delivery Options
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, deliveryOption: 'delivery' })}
                  className={`p-4 border text-left flex items-start justify-between transition-colors ${
                    formData.deliveryOption === 'delivery'
                      ? 'border-[#2563FF] bg-[#EAF2FF]/50 ring-1 ring-[#2563FF]'
                      : 'border-[#C9D2E3] hover:border-gray-400'
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#071A3D]">Direct Delivery</p>
                    <p className="text-xs text-[#071A3D]/70 mt-1">Shipped securely to your specified address.</p>
                  </div>
                  <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center ${
                    formData.deliveryOption === 'delivery' ? 'border-[#2563FF] bg-[#2563FF]' : 'border-gray-400'
                  }`}>
                    {formData.deliveryOption === 'delivery' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, deliveryOption: 'pickup' })}
                  className={`p-4 border text-left flex items-start justify-between transition-colors ${
                    formData.deliveryOption === 'pickup'
                      ? 'border-[#2563FF] bg-[#EAF2FF]/50 ring-1 ring-[#2563FF]'
                      : 'border-[#C9D2E3] hover:border-gray-400'
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#071A3D]">Store Pickup</p>
                    <p className="text-xs text-[#071A3D]/70 mt-1">Pickup at No. 2 Citycare Estate, Agbor.</p>
                  </div>
                  <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center ${
                    formData.deliveryOption === 'pickup' ? 'border-[#2563FF] bg-[#2563FF]' : 'border-gray-400'
                  }`}>
                    {formData.deliveryOption === 'pickup' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                  </div>
                </button>
              </div>

              {/* Exact delivery notice per Section 23 & 37 */}
              <div className="bg-[#EAF2FF]/40 border-l-4 border-[#2563FF] p-3 text-xs text-[#071A3D]/80">
                <span className="font-semibold text-[#071A3D]">Delivery Policy: </span>
                Delivery and pickup available. Details confirmed on WhatsApp.
              </div>
            </div>

            {/* SECTION 4: PAYMENT DECLARATION (Section 24) */}
            <div className="bg-white border border-[#C9D2E3]/60 p-6 sm:p-8 space-y-5">
              <h2 className="font-['Cinzel'] text-lg font-bold text-[#071A3D] border-b border-[#C9D2E3]/40 pb-3 flex items-center justify-between">
                <span>4. Payment Declaration</span>
                <span className="text-[11px] font-sans font-normal text-[#071A3D]/60">(Optional)</span>
              </h2>

              <p className="text-xs text-[#071A3D]/70">
                Payment is optional at this stage. You may declare whether you have sent payment or wish to confirm order details on WhatsApp first.
              </p>

              {/* Radio options per Section 24 */}
              <div className="space-y-3">
                <label className={`flex items-center gap-3 p-3.5 border cursor-pointer transition-colors ${
                  formData.paymentStatus === 'unpaid'
                    ? 'border-[#2563FF] bg-[#EAF2FF]/40 ring-1 ring-[#2563FF]'
                    : 'border-[#C9D2E3] hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    name="paymentDeclaration"
                    value="unpaid"
                    checked={formData.paymentStatus === 'unpaid'}
                    onChange={() => setFormData({ ...formData, paymentStatus: 'unpaid' })}
                    className="w-4 h-4 text-[#2563FF] focus:ring-0"
                  />
                  <div className="text-xs font-semibold text-[#071A3D]">
                    I have not paid <span className="text-[11px] text-[#071A3D]/60 font-normal">(Confirm details & total on WhatsApp first)</span>
                  </div>
                </label>

                <label className={`flex items-center gap-3 p-3.5 border cursor-pointer transition-colors ${
                  formData.paymentStatus === 'paid'
                    ? 'border-[#2563FF] bg-[#EAF2FF]/40 ring-1 ring-[#2563FF]'
                    : 'border-[#C9D2E3] hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    name="paymentDeclaration"
                    value="paid"
                    checked={formData.paymentStatus === 'paid'}
                    onChange={() => setFormData({ ...formData, paymentStatus: 'paid' })}
                    className="w-4 h-4 text-[#2563FF] focus:ring-0"
                  />
                  <div className="text-xs font-semibold text-[#071A3D]">
                    I have sent payment <span className="text-[11px] text-[#071A3D]/60 font-normal">(Via PalmPay transfer)</span>
                  </div>
                </label>
              </div>

              {/* If customer chooses "I have sent payment", show payment details per Section 24 */}
              {formData.paymentStatus === 'paid' && (
                <div className="p-4 bg-[#EAF2FF]/60 border border-[#2563FF]/30 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#071A3D] font-bold uppercase tracking-wider text-[11px]">
                    <CreditCard className="w-4 h-4 text-[#2563FF]" />
                    <span>PAYMENT DETAILS</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono pt-1 text-[#071A3D]">
                    <div>
                      <span className="text-[#071A3D]/60 block font-sans text-[10px] uppercase">Platform:</span>
                      <strong>{placeholders.PALMPAY_PLATFORM}</strong>
                    </div>
                    <div>
                      <span className="text-[#071A3D]/60 block font-sans text-[10px] uppercase">Account/Number:</span>
                      <strong>{placeholders.PALMPAY_NUMBER}</strong>
                    </div>
                    <div>
                      <span className="text-[#071A3D]/60 block font-sans text-[10px] uppercase">Account Name:</span>
                      <strong>{placeholders.PALMPAY_NAME}</strong>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#071A3D]/60 pt-1">
                    {placeholders.PAYMENT_DETAILS}
                  </p>
                </div>
              )}
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#2563FF] hover:bg-[#1a51dd] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2563FF]/30 flex items-center justify-center gap-2 min-h-[50px]"
              >
                <span>REVIEW & CONTINUE TO WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#071A3D]/60 text-center mt-3">
                No automatic charges. Details and availability are verified directly on WhatsApp.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
