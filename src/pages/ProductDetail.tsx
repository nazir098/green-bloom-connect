import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Star, Leaf, ShoppingCart, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import turmericImage from "@/assets/turmeric.jpg";
import ashwagandhaImage from "@/assets/ashwagandha.jpg";
import greenTeaImage from "@/assets/green-tea.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart } = useCart();

  const products = [
    {
      id: "1",
      name: "Organic Turmeric Powder",
      description: "Premium quality turmeric powder with high curcumin content for natural anti-inflammatory support.",
      fullDescription: "Our organic turmeric powder is sourced from the finest turmeric roots grown in certified organic farms. Rich in curcumin, this golden spice has been used for thousands of years in traditional medicine for its powerful anti-inflammatory and antioxidant properties. Each batch is carefully tested for purity and potency to ensure you receive the highest quality product.",
      image: turmericImage,
      price: "$24.99",
      originalPrice: "$29.99",
      rating: 4.8,
      reviews: 156,
      isOrganic: true,
      benefits: ["Anti-inflammatory", "Antioxidant", "Joint Health", "Digestive Support", "Immune Boost"],
      ingredients: ["100% Organic Turmeric Root Powder", "No additives", "No preservatives"],
      usage: "Mix 1/2 teaspoon with warm milk or water daily. Can be added to cooking or smoothies.",
      origin: "Sourced from organic farms in India"
    },
    {
      id: "2", 
      name: "Ashwagandha Root Extract",
      description: "Pure ashwagandha root extract to help manage stress and support overall wellness naturally.",
      fullDescription: "Our premium ashwagandha root extract is standardized to contain high levels of withanolides, the active compounds responsible for ashwagandha's adaptogenic properties. This ancient herb has been used in Ayurvedic medicine for over 3,000 years to help the body manage stress, boost energy levels, and support overall vitality.",
      image: ashwagandhaImage,
      price: "$32.99",
      rating: 4.9,
      reviews: 203,
      isOrganic: true,
      benefits: ["Stress Relief", "Energy", "Adaptogen", "Sleep Quality", "Mental Clarity"],
      ingredients: ["Ashwagandha Root Extract (5% Withanolides)", "Vegetable Capsule", "No fillers"],
      usage: "Take 1-2 capsules daily with meals or as directed by your healthcare provider.",
      origin: "Wildcrafted from the foothills of the Himalayas"
    },
    {
      id: "3",
      name: "Premium Green Tea Blend",
      description: "Hand-picked organic green tea leaves rich in antioxidants for daily wellness support.",
      fullDescription: "Our premium green tea blend features hand-picked leaves from high-altitude organic tea gardens. Rich in EGCG and other powerful antioxidants, this delicate blend offers a smooth, refreshing taste while providing numerous health benefits. Each leaf is carefully selected and processed to preserve maximum nutritional value.",
      image: greenTeaImage,
      price: "$18.99",
      originalPrice: "$22.99",
      rating: 4.7,
      reviews: 89,
      isOrganic: true,
      benefits: ["Antioxidants", "Metabolism", "Focus", "Heart Health", "Weight Management"],
      ingredients: ["100% Organic Green Tea Leaves", "Natural flavoring", "No artificial additives"],
      usage: "Steep 1 tea bag in hot water (175°F) for 2-3 minutes. Enjoy 2-3 cups daily.",
      origin: "Grown in certified organic tea gardens in China"
    },
    {
      id: "4",
      name: "Fresh Ginger Powder",
      description: "Pure organic ginger root powder to support digestive health and natural immunity.",
      image: "/assets/ginger.jpg",
      price: "$21.99",
      rating: 4.6,
      reviews: 98,
      isOrganic: true,
      benefits: ["Digestive Health", "Anti-nausea", "Immunity", "Circulation"],
      ingredients: ["100% Organic Ginger Root (Zingiber officinale)"],
      usage: "Add 1/4 teaspoon to tea, smoothies, or cooking",
      origin: "Organically grown in India"
    },
    {
      id: "5",
      name: "Organic Garlic Powder",
      description: "Premium garlic powder rich in allicin for cardiovascular health and immune support.",
      image: "/assets/garlic.jpg",
      price: "$16.99",
      originalPrice: "$19.99",
      rating: 4.5,
      reviews: 76,
      isOrganic: true,
      benefits: ["Heart Health", "Immunity", "Antibacterial"],
      ingredients: ["100% Organic Garlic (Allium sativum)"],
      usage: "Use in cooking or mix 1/4 teaspoon in water",
      origin: "Certified organic farms"
    },
    {
      id: "6",
      name: "Moringa Leaf Powder",
      description: "Nutrient-dense moringa leaves packed with vitamins, minerals, and essential amino acids.",
      image: "/assets/moringa.jpg",
      price: "$28.99",
      rating: 4.8,
      reviews: 134,
      isOrganic: true,
      benefits: ["Superfood", "Energy", "Nutrition"],
      ingredients: ["100% Organic Moringa Leaves (Moringa oleifera)"],
      usage: "Mix 1 teaspoon in smoothies, juice, or yogurt daily",
      origin: "Sustainably harvested from India"
    },
    {
      id: "7",
      name: "Black Pepper Powder",
      description: "Premium black pepper powder to enhance nutrient absorption and add natural flavor.",
      image: "/assets/black-pepper.jpg",
      price: "$14.99",
      rating: 4.4,
      reviews: 52,
      isOrganic: true,
      benefits: ["Bioavailability", "Digestion", "Flavor"],
      ingredients: ["100% Organic Black Pepper (Piper nigrum)"],
      usage: "Use as seasoning or mix with other herbs for enhanced absorption",
      origin: "Premium spice gardens of Kerala, India"
    },
    {
      id: "8",
      name: "Ceylon Cinnamon Powder",
      description: "True Ceylon cinnamon powder for blood sugar support and natural sweetness.",
      image: "/assets/cinnamon.jpg",
      price: "$26.99",
      originalPrice: "$31.99",
      rating: 4.7,
      reviews: 87,
      isOrganic: true,
      benefits: ["Blood Sugar", "Antioxidant", "Natural Sweetener"],
      ingredients: ["100% Ceylon Cinnamon Bark (Cinnamomum verum)"],
      usage: "Add 1/2 teaspoon to beverages, oatmeal, or baking",
      origin: "Authentic Ceylon cinnamon from Sri Lanka"
    },
    {
      id: "9",
      name: "Spirulina Powder",
      description: "Pure spirulina algae powder packed with protein, vitamins, and essential nutrients.",
      image: "/assets/spirulina.jpg",
      price: "$34.99",
      rating: 4.6,
      reviews: 112,
      isOrganic: true,
      benefits: ["Protein", "Energy", "Detox"],
      ingredients: ["100% Pure Spirulina (Spirulina platensis)"],
      usage: "Mix 1-2 teaspoons in smoothies or juice daily",
      origin: "Cultivated in controlled freshwater environments"
    }
  ];

  const product = products.find(p => p.id === id);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")} variant="herbal">
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              {product.isOrganic && (
                <Badge className="absolute top-4 left-4 bg-herb-green text-cream">
                  <Leaf className="w-3 h-3 mr-1" />
                  Organic
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-current text-herb-light" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-herb-green">{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Key Benefits</h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit) => (
                  <Badge key={benefit} variant="secondary">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                variant="herbal" 
                className="flex-1 flex items-center gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Cart Section */}
        <div className="mt-16">
          <Cart />
        </div>

        {/* Additional Details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Ingredients</h3>
              <ul className="space-y-2 text-muted-foreground">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-sm">• {ingredient}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Usage Instructions</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{product.usage}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Origin</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{product.origin}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;