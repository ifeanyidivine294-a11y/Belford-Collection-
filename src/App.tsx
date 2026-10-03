import React, { useState, useEffect } from 'react';
import { PageType, PlaceholderConfig, Product, OrderFormState } from './types';
import { getStoredPlaceholders } from './config/placeholders';
import { PRODUCTS } from './data/products';
import { CurrencyCode } from './utils/formatters';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PlaceholdersModal } from './components/PlaceholdersModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';

import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { MensFashionPage } from './pages/MensFashionPage';
import { WomensFashionPage } from './pages/WomensFashionPage';
import { FootwearAccessoriesPage } from './pages/FootwearAccessoriesPage';
import { BeautyPage } from './pages/BeautyPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { OrderPage } from './pages/OrderPage';
import { CustomMadePage } from './pages/CustomMadePage';
import { GroupOrdersPage } from './pages/GroupOrdersPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ExchangeReturnPage } from './pages/ExchangeReturnPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderPrefill, setOrderPrefill] = useState<Partial<OrderFormState> | undefined>(undefined);
  const [currency, setCurrency] = useState<CurrencyCode>('NGN');
  const [placeholders, setPlaceholders] = useState<PlaceholderConfig>(getStoredPlaceholders());
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  // Lightbox state for user viewing larger image versions (Section 1 & 44)
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: '',
    title: ''
  });

  const handleOpenLightbox = (imgUrl: string, title?: string) => {
    setLightbox({
      isOpen: true,
      url: imgUrl,
      title: title || 'Belford Collection Haute Couture Preview'
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  // Synchronize hash with current page for browser history & back/forward support
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '').replace(/^\//, '');
      const hash = rawHash === 'order-now' ? 'order' : rawHash;

      if (hash.startsWith('product/')) {
        const prodId = hash.replace('product/', '');
        const found = PRODUCTS.find((p) => p.id === prodId || p.code === prodId);
        if (found) {
          setSelectedProduct(found);
          setCurrentPage('product-detail');
          return;
        }
      }

      const validPages: PageType[] = [
        'home',
        'collections',
        'men',
        'women',
        'footwear-accessories',
        'beauty',
        'custom-made',
        'group-orders',
        'order',
        'about',
        'contact',
        'exchange-return'
      ];

      if (validPages.includes(hash as PageType)) {
        setCurrentPage(hash as PageType);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'order' ? 'order-now' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.location.hash = `product/${product.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderProduct = (
    product: Product,
    selectedSize: string,
    selectedColor: string,
    quantity: number
  ) => {
    const isFootwear = product.category === 'Footwear';
    setOrderPrefill({
      productName: product.name,
      productCode: product.code,
      category: `${product.department === 'men' ? "Men's " : product.department === 'women' ? "Women's " : ''}${product.category}`,
      size: isFootwear ? 'Standard' : selectedSize,
      shoeSize: isFootwear ? selectedSize : '42',
      colour: selectedColor,
      quantity: quantity,
      budgetTier: product.price > 50000 ? 'Above ₦50,000' : '₦15,000–₦50,000'
    });
    setCurrentPage('order');
    window.location.hash = 'order-now';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickOrder = (product: Product) => {
    handleOrderProduct(
      product,
      product.availableSizes[0] || 'Standard',
      product.availableColors[0] || 'Default',
      1
    );
  };

  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#071A3D] font-sans">
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        placeholders={placeholders}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      {/* Main View Port */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onQuickOrderProduct={handleQuickOrder}
            onOpenLightbox={handleOpenLightbox}
            placeholders={placeholders}
            currency={currency}
            featuredProducts={featuredProducts}
          />
        )}

        {currentPage === 'collections' && (
          <CollectionsPage
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onQuickOrderProduct={handleQuickOrder}
            onOpenLightbox={handleOpenLightbox}
            placeholders={placeholders}
            currency={currency}
            products={PRODUCTS}
          />
        )}

        {currentPage === 'men' && (
          <MensFashionPage
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onQuickOrderProduct={handleQuickOrder}
            onOpenLightbox={handleOpenLightbox}
            placeholders={placeholders}
            currency={currency}
            products={PRODUCTS}
          />
        )}

        {currentPage === 'women' && (
          <WomensFashionPage
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onQuickOrderProduct={handleQuickOrder}
            onOpenLightbox={handleOpenLightbox}
            placeholders={placeholders}
            currency={currency}
            products={PRODUCTS}
          />
        )}

        {currentPage === 'footwear-accessories' && (
          <FootwearAccessoriesPage
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onQuickOrderProduct={handleQuickOrder}
            onOpenLightbox={handleOpenLightbox}
            placeholders={placeholders}
            currency={currency}
            products={PRODUCTS}
          />
        )}

        {currentPage === 'beauty' && (
          <BeautyPage
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onQuickOrderProduct={handleQuickOrder}
            onOpenLightbox={handleOpenLightbox}
            placeholders={placeholders}
            currency={currency}
            products={PRODUCTS}
          />
        )}

        {currentPage === 'product-detail' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            onNavigate={navigateTo}
            onOrderProduct={handleOrderProduct}
            onOpenLightbox={handleOpenLightbox}
            placeholders={placeholders}
            currency={currency}
          />
        )}

        {currentPage === 'order' && (
          <OrderPage
            onNavigate={navigateTo}
            placeholders={placeholders}
            initialOrderData={orderPrefill}
          />
        )}

        {currentPage === 'custom-made' && (
          <CustomMadePage
            onNavigate={navigateTo}
            placeholders={placeholders}
          />
        )}

        {currentPage === 'group-orders' && (
          <GroupOrdersPage
            onNavigate={navigateTo}
            placeholders={placeholders}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenLightbox={handleOpenLightbox}
            placeholders={placeholders}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            placeholders={placeholders}
          />
        )}

        {currentPage === 'exchange-return' && (
          <ExchangeReturnPage
            onNavigate={navigateTo}
            placeholders={placeholders}
          />
        )}
      </main>

      {/* Global Luxury Footer */}
      <Footer
        onNavigate={navigateTo}
        placeholders={placeholders}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      {/* Placeholders Customizer Modal */}
      <PlaceholdersModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        config={placeholders}
        onUpdate={setPlaceholders}
      />

      {/* Global Lightbox Modal for enlarged image viewing */}
      <ImageLightboxModal
        isOpen={lightbox.isOpen}
        onClose={handleCloseLightbox}
        imageUrl={lightbox.url}
        title={lightbox.title}
      />
    </div>
  );
}
