import React from 'react';

const SEOContent = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Hidden SEO-rich content for search engines */}
        <div className="max-w-4xl mx-auto prose prose-green">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Buy Premium Herbal Products Online at Minnat Herbal
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                Why Choose Minnat Herbal for Your Wellness Journey?
              </h3>
              <p className="text-muted-foreground mb-4">
                When you're looking to buy herbal tea, Ayurvedic medicines, or natural remedies online, 
                Minnat Herbal stands as India's most trusted herbal products store. We offer an extensive 
                collection of premium organic herbs, herbal supplements, and traditional Ayurvedic formulations 
                that have been used for centuries to promote health and wellness.
              </p>
              <p className="text-muted-foreground">
                Our online herbal store features carefully curated products including organic turmeric, 
                premium green tea, fresh ginger, powerful ashwagandha, healing moringa, and many other 
                authentic Ayurvedic herbs sourced directly from certified organic farms across India.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                Premium Herbal Tea Collection
              </h3>
              <p className="text-muted-foreground mb-4">
                Discover our exceptional range of herbal teas perfect for every wellness need. From energizing 
                ginger tea and antioxidant-rich green tea to soothing chamomile and refreshing mint tea, 
                each blend is crafted using the finest organic ingredients.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Organic Green Tea - Rich in antioxidants</li>
                <li>Fresh Ginger Tea - Natural digestive aid</li>
                <li>Premium Jasmine Tea - Aromatic and calming</li>
                <li>Healthy Lemon Tea - Vitamin C boost</li>
                <li>Traditional Herbal Blends - Time-tested recipes</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Authentic Ayurvedic Products for Modern Wellness
            </h3>
            <p className="text-muted-foreground mb-4">
              At Minnat Herbal, we bridge ancient Ayurvedic wisdom with modern quality standards. 
              Every herbal product in our online store undergoes rigorous lab testing to ensure purity, 
              potency, and safety. Whether you're buying turmeric for its anti-inflammatory properties, 
              ashwagandha for stress relief, or moringa for nutritional support, you can trust our commitment 
              to authentic, high-quality herbal remedies.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-green-600 mb-2">Quality Assurance:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>100% Organic Certification</li>
                  <li>Third-party Lab Testing</li>
                  <li>Pesticide-free Guarantee</li>
                  <li>Authentic Ayurvedic Formulations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-green-600 mb-2">Customer Benefits:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Free Shipping Across India</li>
                  <li>30-Day Money Back Guarantee</li>
                  <li>24/7 Customer Support</li>
                  <li>Secure Online Payment</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Shop Herbal Products Online with Confidence
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Minnat Herbal for their wellness needs. 
              From traditional Ayurvedic herbs to modern herbal supplements, we provide everything you need 
              for a healthier, more natural lifestyle. Experience the difference that authentic, 
              high-quality herbal products can make in your daily wellness routine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;