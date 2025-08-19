import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductGrid />
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
      <Footer />
    </div>
  );
};

export default Index;
