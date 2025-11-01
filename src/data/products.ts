import turmericImage from "@/assets/turmeric.jpg";
import ashwagandhaImage from "@/assets/ashwagandha.jpg";
import greenTeaImage from "@/assets/green-tea.jpg";
import gingerImage from "@/assets/ginger.jpg";
import garlicImage from "@/assets/garlic.jpg";
import cinnamonImage from "@/assets/cinnamon.jpg";
import blackPepperImage from "@/assets/black-pepper.jpg";
import moringaImage from "@/assets/moringa.jpg";
import spirulinaImage from "@/assets/spirulina.jpg";
import gingerTeaImage from "@/assets/Ginger Tea.png";
import jasmineGreenTeaImage from "@/assets/Jasmin Green Tea.png";
import lemonTeaImage from "@/assets/Lemon Tea.png";
import mangoImage from "@/assets/Mango.png";
import exampleProductImage from "@/assets/example-product-image.jpg";
import premiumHerbsJar from "@/assets/premium-herbs-jar.jpg";
import blackTeaPosterImage from "@/assets/blackTea/BLACK TEA ITS POSTER.jpg";
import mockupPage1Image from "@/assets/blackTea/MOCKOUP_Page_1.jpg";
import mockupPage2Image from "@/assets/blackTea/MOCKOUP_Page_2.jpg";
import mockupPage3Image from "@/assets/blackTea/MOCKOUP_Page_3.jpg";
import mockupPage4Image from "@/assets/blackTea/MOCKOUP_Page_4.jpg";
import mockupPage6Image from "@/assets/blackTea/MOCKOUP_Page_6.jpg";
import mockupPage7Image from "@/assets/blackTea/MOCKOUP_Page_7.jpg";
import mockupMainImage from "@/assets/blackTea/MOCKOUP.jpg";



export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  image: string;
  images?: string[]; // Multiple images for carousel
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
//600*600px image to be uploaded and import is needed
// JPG format is suitable
export const products: Product[] = [
{
  id: "15",
  name: "Premium Black Tea",
  description: "Aromatic and rich black tea crafted from handpicked tea leaves, offering a bold and refreshing taste.",
  fullDescription:
    "Our Premium Black Tea is a classic blend of carefully selected tea leaves from high-altitude gardens. Each batch is processed using traditional methods to preserve its deep aroma and flavor. Perfect for morning refreshment or evening relaxation, this tea provides natural antioxidants and an energizing experience in every sip.",
  image: blackTeaPosterImage,
  images: [
    mockupPage1Image,
    mockupPage2Image,
    mockupPage3Image,
    mockupPage4Image,
    mockupPage6Image,
    mockupPage7Image,
    mockupMainImage, 
    blackTeaPosterImage
  ],
  price: "$19.99",
  originalPrice: "$24.99",
  rating: 4.8,
  reviews: 187,
  isOrganic: true,
  benefits: [
    "Rich in antioxidants",
    "Boosts energy and focus",
    "Supports heart health",
    "Enhances mood and alertness"
  ],
  ingredients: ["100% Organic Black Tea Leaves"],
  usage: "Add one teaspoon of black tea to 200ml hot water, steep for 3–5 minutes, strain, and enjoy plain or with milk.",
  origin: "Sourced from premium tea estates in Assam, India"
}
,
  {
    id: "14",
    name: "Premium Turmeric Root in Glass Jar",
    description: "High-quality dried turmeric root pieces preserved in a clear glass jar for maximum freshness.",
    fullDescription: "Our premium turmeric root pieces are carefully selected and stored in an elegant glass jar to preserve their natural golden color and potent curcumin content. Perfect for grinding fresh or using whole in traditional preparations.",
    image: exampleProductImage,
    images: [exampleProductImage, turmericImage, gingerImage, cinnamonImage],
    price: "$29.99",
    originalPrice: "$35.99",
    rating: 4.9,
    reviews: 187,
    isOrganic: true,
    benefits: ["Maximum Freshness", "High Curcumin", "Traditional Quality"],
    ingredients: ["100% Organic Whole Turmeric Root (Curcuma longa)"],
    usage: "Grind fresh as needed for maximum potency or use whole in cooking and teas.",
    origin: "Premium quality roots from certified organic farms in India"
  },
  // {
  //   id: "2", 
  //   name: "Ashwagandha Root Extract",
  //   description: "Pure ashwagandha root extract to help manage stress and support overall wellness naturally.",
  //   fullDescription: "Our premium ashwagandha root extract is standardized to contain high levels of withanolides, the active compounds responsible for ashwagandha's adaptogenic properties. This ancient herb has been used in Ayurvedic medicine for over 3,000 years.",
  //   image: ashwagandhaImage,
  //   price: "$32.99",
  //   rating: 4.9,
  //   reviews: 203,
  //   isOrganic: true,
  //   benefits: ["Stress Relief", "Energy", "Adaptogen"],
  //   ingredients: ["Organic Ashwagandha Root Extract (Withania somnifera)", "Standardized to 5% Withanolides"],
  //   usage: "Take 300-500mg daily, preferably with meals or as recommended by your healthcare professional.",
  //   origin: "Premium quality roots from traditional Ayurvedic farms"
  // },
  {
    id: "3",
    name: "Organic Mint Green Tea",
  description: "Refreshing green tea infused with mint leaves for digestion and relaxation.",
  fullDescription: "Our organic mint green tea combines premium green tea leaves with refreshing mint. This blend is excellent for digestion, cooling the body, and promoting mental clarity. A perfect cup after meals or on hot days.",
  image: greenTeaImage,
  images: [greenTeaImage, jasmineGreenTeaImage, lemonTeaImage, gingerTeaImage],
  price: "$14.49",
  originalPrice: "$18.49",
  rating: 4.8,
  reviews: 145,
  isOrganic: true,
  benefits: ["Aids Digestion", "Promotes Relaxation", "Cooling Effect"],
  ingredients: ["Organic Green Tea Leaves", "Organic Mint Leaves"],
  usage: "Steep one teaspoon in hot water for 2–3 minutes. Best enjoyed without milk.",
  origin: "Sourced from organic farms in Himachal Pradesh, India"
  },
{
  id: "10",
  name: "Organic Ginger Tea",
  description: "Soothing herbal tea with natural ginger for digestion and immunity support.",
  fullDescription: "Our organic ginger tea is crafted from pure, sun-dried ginger roots, offering a naturally spicy and warming flavor. Known for aiding digestion, reducing nausea, and boosting immunity, this tea is perfect for daily wellness.",
  image: gingerTeaImage,
  images: [gingerTeaImage, gingerImage, lemonTeaImage, mangoImage],
  price: "$14.99",
  originalPrice: "$18.99",
  rating: 4.7,
  reviews: 132,
  isOrganic: true,
  benefits: ["Supports Digestion", "Boosts Immunity", "Relieves Nausea"],
  ingredients: ["100% Organic Ginger Root"],
  usage: "Steep one teaspoon in hot water for 3–5 minutes. Enjoy hot or iced.",
  origin: "Sourced from organic farms in India"
},
{
  id: "11",
  name: "Organic Jasmine Green Tea",
  description: "Refreshing green tea infused with jasmine blossoms for relaxation and antioxidants.",
  fullDescription: "Our organic jasmine green tea is delicately scented with fresh jasmine flowers, creating a calming aroma and smooth taste. Rich in antioxidants, this tea promotes relaxation, skin health, and overall vitality.",
  image: jasmineGreenTeaImage,
  images: [jasmineGreenTeaImage, greenTeaImage, lemonTeaImage, gingerTeaImage],
  price: "$16.99",
  originalPrice: "$20.99",
  rating: 4.9,
  reviews: 178,
  isOrganic: true,
  benefits: ["Rich in Antioxidants", "Promotes Relaxation", "Supports Skin Health"],
  ingredients: ["Organic Green Tea Leaves", "Organic Jasmine Blossoms"],
  usage: "Steep one teaspoon in hot water for 2–3 minutes. Best enjoyed without milk.",
  origin: "Sourced from certified organic farms in Assam, India"
},
{
  id: "12",
  name: "Organic Lemon Tea",
  description: "Zesty lemon-flavored tea to refresh, detox, and boost energy.",
  fullDescription: "Our organic lemon tea blends premium tea leaves with natural lemon essence for a tangy, refreshing cup. It helps detoxify the body, boost energy, and improve digestion, making it an ideal daily drink.",
  image: lemonTeaImage,
  images: [lemonTeaImage, greenTeaImage, mangoImage, gingerTeaImage],
  price: "$13.99",
  originalPrice: "$17.99",
  rating: 4.6,
  reviews: 98,
  isOrganic: true,
  benefits: ["Detoxifying", "Energy Boost", "Aids Digestion"],
  ingredients: ["Organic Tea Leaves", "Natural Lemon Extract"],
  usage: "Steep one teaspoon in hot water for 3–5 minutes. Add honey for extra flavor.",
  origin: "Sourced from organic farms in Darjeeling, India"
},
{
  id: "13",
  name: "Organic Mango Herbal Blend",
  description: "Fruity herbal infusion with natural mango flavor for a tropical wellness experience.",
  fullDescription: "Our organic mango herbal blend is a delightful infusion of dried herbs and mango essence. With its tropical sweetness and refreshing aroma, it’s rich in antioxidants and promotes hydration and overall wellness.",
  image: mangoImage,
  price: "$15.99",
  originalPrice: "$19.99",
  rating: 4.7,
  reviews: 121,
  isOrganic: true,
  benefits: ["Rich in Antioxidants", "Supports Hydration", "Tropical Flavor"],
  ingredients: ["Organic Herbal Blend", "Natural Mango Extract"],
  usage: "Steep one teaspoon in hot or cold water for 3–5 minutes. Serve chilled for a refreshing iced tea.",
  origin: "Sourced from organic farms in India"
} , {
    id: "1",
    name: "Organic Turmeric Powder",
    description: "Premium quality turmeric powder with high curcumin content for natural anti-inflammatory support.",
    fullDescription: "Our organic turmeric powder is sourced from the finest turmeric roots grown in certified organic farms. Rich in curcumin, this golden spice has been used for thousands of years in traditional medicine for its powerful anti-inflammatory and antioxidant properties.",
    image: turmericImage,
    images: [turmericImage, gingerImage, cinnamonImage, blackPepperImage],
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
    id: "4",
    name: "Organic Ginger Root",
    description: "Fresh organic ginger root perfect for teas, cooking, and natural digestive support.",
    fullDescription: "Pure organic ginger root powder to support digestive health and natural immunity. Our ginger is carefully dried and ground to preserve its natural oils and active compounds.",
    image: gingerImage,
    images: [gingerImage, turmericImage, gingerTeaImage, blackPepperImage],
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
    images: [garlicImage, blackPepperImage, gingerImage, turmericImage],
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
    images: [cinnamonImage, turmericImage, blackPepperImage, gingerImage],
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
    images: [blackPepperImage, turmericImage, cinnamonImage, garlicImage],
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
    images: [moringaImage, spirulinaImage, greenTeaImage, turmericImage],
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
    images: [spirulinaImage, moringaImage, greenTeaImage, ashwagandhaImage],
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

// Featured products (first 4 products) - used in ProductGrid component
export const featuredProducts = products.slice(0, 4);

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
