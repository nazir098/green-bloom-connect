import turmericImage from "@/assets/turmeric.jpg";
import ashwagandhaImage from "@/assets/ashwagandha.jpg";
import greenTeaImage from "@/assets/green-tea.jpg";
import gingerImage from "@/assets/ginger.jpg";
import garlicImage from "@/assets/garlic.jpg";
import cinnamonImage from "@/assets/cinnamon.jpg";
import blackPepperImage from "@/assets/black-pepper.jpg";
import moringaImage from "@/assets/moringa.jpg";
import spirulinaImage from "@/assets/spirulina.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews?: number;
  isOrganic?: boolean;
  benefits: string[];
  ingredients?: string[];
  usage?: string;
  origin?: string;
}

// EDIT THIS ARRAY TO UPDATE YOUR PRODUCTS
// Simply modify the products below to change what appears on your website
export const products: Product[] = [
  {
    id: "1",
    name: "Organic Turmeric Powder",
    description: "Premium quality turmeric powder with high curcumin content for natural anti-inflammatory support.",
    fullDescription: "Our organic turmeric powder is sourced from the finest turmeric roots grown in certified organic farms. Rich in curcumin, this golden spice has been used for thousands of years in traditional medicine for its powerful anti-inflammatory and antioxidant properties.",
    image: turmericImage,
    price: "$24.99",
    originalPrice: "$29.99",
    rating: 4.8,
    reviews: 156,
    isOrganic: true,
    benefits: ["Anti-inflammatory", "Antioxidant", "Joint Health"],
    ingredients: ["100% Organic Turmeric Root Powder", "Standardized to 95% Curcumin"],
    usage: "Take 1-2 teaspoons daily with meals or as directed by your healthcare provider.",
    origin: "Sourced from organic farms in India"
  },
  {
    id: "2", 
    name: "Ashwagandha Root Extract",
    description: "Pure ashwagandha root extract to help manage stress and support overall wellness naturally.",
    fullDescription: "Our premium ashwagandha root extract is standardized to contain high levels of withanolides, the active compounds responsible for ashwagandha's adaptogenic properties. This ancient herb has been used in Ayurvedic medicine for over 3,000 years.",
    image: ashwagandhaImage,
    price: "$32.99",
    rating: 4.9,
    reviews: 203,
    isOrganic: true,
    benefits: ["Stress Relief", "Energy", "Adaptogen"],
    ingredients: ["Organic Ashwagandha Root Extract (Withania somnifera)", "Standardized to 5% Withanolides"],
    usage: "Take 300-500mg daily, preferably with meals or as recommended by your healthcare professional.",
    origin: "Premium quality roots from traditional Ayurvedic farms"
  },
  {
    id: "3",
    name: "Premium Green Tea Blend",
    description: "Hand-picked organic green tea leaves rich in antioxidants for daily wellness support.",
    fullDescription: "Our premium green tea blend features hand-picked leaves from high-altitude organic tea gardens. Rich in EGCG and other powerful antioxidants, this delicate blend offers a smooth, refreshing taste while providing numerous health benefits.",
    image: greenTeaImage,
    price: "$18.99",
    originalPrice: "$22.99",
    rating: 4.7,
    reviews: 89,
    isOrganic: true,
    benefits: ["Antioxidants", "Metabolism", "Focus"],
    ingredients: ["100% Organic Green Tea Leaves (Camellia sinensis)", "Natural caffeine content"],
    usage: "Steep 1 tea bag in hot water for 3-5 minutes. Enjoy 2-3 cups daily.",
    origin: "High-altitude tea gardens in the Himalayas"
  },
  {
    id: "4",
    name: "Organic Ginger Root",
    description: "Fresh organic ginger root perfect for teas, cooking, and natural digestive support.",
    fullDescription: "Pure organic ginger root powder to support digestive health and natural immunity. Our ginger is carefully dried and ground to preserve its natural oils and active compounds.",
    image: gingerImage,
    price: "$15.99",
    rating: 4.6,
    reviews: 98,
    isOrganic: true,
    benefits: ["Digestive Health", "Anti-nausea", "Circulation"],
    ingredients: ["100% Organic Fresh Ginger Root (Zingiber officinale)"],
    usage: "Use fresh in cooking, make ginger tea, or take as needed for digestive comfort.",
    origin: "Organically grown in tropical regions"
  },
  {
    id: "5",
    name: "Black Garlic Extract",
    description: "Aged black garlic with enhanced antioxidant properties and mild, sweet flavor.",
    fullDescription: "Premium garlic powder rich in allicin for cardiovascular health and immune support. Our black garlic undergoes a natural fermentation process that enhances its beneficial properties.",
    image: garlicImage,
    price: "$28.99",
    rating: 4.5,
    reviews: 76,
    isOrganic: true,
    benefits: ["Heart Health", "Immune Support", "Antioxidant"],
    ingredients: ["Aged Black Garlic Extract (Allium sativum)", "Natural fermentation process"],
    usage: "Take 1-2 cloves daily or use extract as directed. Can be eaten fresh or in supplement form.",
    origin: "Traditionally aged using ancient Korean methods"
  },
  {
    id: "6",
    name: "Ceylon Cinnamon Sticks",
    description: "Premium Ceylon cinnamon sticks with sweet, delicate flavor and natural health benefits.",
    fullDescription: "True Ceylon cinnamon powder for blood sugar support and natural sweetness. Our Ceylon cinnamon is the authentic variety, known for its superior quality and health benefits.",
    image: cinnamonImage,
    price: "$19.99",
    rating: 4.8,
    reviews: 87,
    isOrganic: true,
    benefits: ["Blood Sugar Support", "Antioxidant", "Anti-inflammatory"],
    ingredients: ["100% Pure Ceylon Cinnamon Bark (Cinnamomum verum)"],
    usage: "Use in cooking, teas, or grind fresh for maximum potency. 1-2 sticks daily in beverages.",
    origin: "Sustainably harvested from Sri Lankan cinnamon trees"
  },
  {
    id: "7",
    name: "Organic Black Pepper",
    description: "Freshly ground organic black pepper to enhance nutrient absorption and add natural flavor.",
    fullDescription: "Premium black pepper powder to enhance nutrient absorption and add natural flavor. Our black pepper is freshly ground to preserve its piperine content.",
    image: blackPepperImage,
    price: "$12.99",
    rating: 4.4,
    reviews: 52,
    isOrganic: true,
    benefits: ["Nutrient Absorption", "Digestive Aid", "Antioxidant"],
    ingredients: ["100% Organic Black Pepper (Piper nigrum)", "Freshly ground for maximum potency"],
    usage: "Use as seasoning in cooking or take with turmeric supplements to enhance absorption.",
    origin: "Premium peppercorns from organic spice gardens in Kerala, India"
  },
  {
    id: "8",
    name: "Moringa Leaf Powder",
    description: "Nutrient-dense moringa leaf powder packed with vitamins, minerals, and antioxidants.",
    fullDescription: "Nutrient-dense moringa leaves packed with vitamins, minerals, and essential amino acids. Known as the 'miracle tree', moringa provides complete nutrition in every serving.",
    image: moringaImage,
    price: "$26.99",
    rating: 4.7,
    reviews: 134,
    isOrganic: true,
    benefits: ["Nutritional Support", "Energy", "Immune Boost"],
    ingredients: ["100% Organic Moringa Leaf Powder (Moringa oleifera)", "Raw, air-dried leaves"],
    usage: "Mix 1-2 teaspoons into smoothies, juices, or water daily. Can also be added to foods.",
    origin: "Ethically sourced from sustainable moringa farms in Africa"
  },
  {
    id: "9",
    name: "Spirulina Powder",
    description: "Pure spirulina powder rich in protein, vitamins, and minerals for complete nutrition.",
    fullDescription: "Pure spirulina algae powder packed with protein, vitamins, and essential nutrients. This blue-green superfood is one of the most nutrient-dense foods on Earth.",
    image: spirulinaImage,
    price: "$23.99",
    rating: 4.6,
    reviews: 112,
    isOrganic: true,
    benefits: ["Complete Protein", "Energy", "Detox Support"],
    ingredients: ["100% Pure Spirulina Powder (Arthrospira platensis)", "Naturally cultivated blue-green algae"],
    usage: "Start with 1/2 teaspoon daily, gradually increase to 1-2 teaspoons. Mix into smoothies or water.",
    origin: "Cultivated in pristine alkaline lakes using sustainable methods"
  }
];

// Featured products (first 3 products) - used in ProductGrid component
export const featuredProducts = products.slice(0, 3);

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};