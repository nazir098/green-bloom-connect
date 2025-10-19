import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import About from "@/components/About";  
import SEOContent from "@/components/SEOContent";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import MobileBottomNav from "@/components/MobileBottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Add structured data for homepage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          "name": "Minnat Herbal",
          "description": "Buy premium herbal tea, Ayurvedic products, and natural remedies online. India's trusted herbal store with 100% organic, lab-tested products.",
          "url": "https://minatherbal.com",
          "telephone": "+91-XXXXXXXXXX",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "currenciesAccepted": "INR",
          "paymentAccepted": ["Cash", "Credit Card", "UPI", "Net Banking"],
          "priceRange": "₹50-₹2000"
        })
      }} />
      
      <Header />
      <main role="main">
        <Hero />
        <ProductGrid />
        <SEOContent />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <About />
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <Cart />
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
      
      {/* Add padding to bottom for mobile nav */}
      <div className="h-16 md:hidden" />
    </div>
  );
};

export default Index;
