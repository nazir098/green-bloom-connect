# Minnat - Herbal Wellness Products

A modern, responsive e-commerce website for herbal wellness products built with React, TypeScript, and Tailwind CSS.

## 🌿 Features

- **Product Showcase**: Beautiful product grid with detailed information
- **Shopping Cart**: Add/remove items with real-time cart updates
- **Product Search**: Search products by name, description, or benefits
- **Product Details**: Comprehensive product pages with ingredients, usage, and origin
- **Responsive Design**: Works perfectly on all devices
- **Organic Certification**: Clear organic product indicators

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── data/               # Product data (EDIT HERE!)
│   └── products.ts     # Central product management file
├── assets/            # Images and media files
│   └── products/      # Product images directory
└── pages/             # Application pages
```

## 🛠️ Managing Your Products

### Quick Start - Edit Products
1. Open `src/data/products.ts`
2. Modify the products array to update:
   - Product names and descriptions
   - Prices and ratings
   - Benefits and ingredients
   - Usage instructions

### Adding Product Images
1. Place images in `src/assets/products/` (recommended: 400x400px, under 500KB)
2. Import them in `src/data/products.ts`
3. Update the image property in your product entries

### Image Specifications
- **Dimensions**: 400x400 pixels (1:1 aspect ratio)
- **Format**: PNG (with transparency) or JPG  
- **Size**: Under 500KB for fast loading
- **Background**: Clean, preferably white or transparent

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Customization

### Adding New Products
Edit `src/data/products.ts` and add new entries to the products array:

```typescript
{
  id: "10",
  name: "Your Product Name",
  description: "Product description",
  image: yourProductImage,
  price: "$29.99",
  rating: 4.8,
  isOrganic: true,
  benefits: ["Benefit 1", "Benefit 2"],
  ingredients: ["Ingredient 1", "Ingredient 2"],
  usage: "How to use instructions",
  origin: "Where it comes from"
}
```

### Updating Existing Products
Simply modify the existing entries in the products array - changes will appear throughout the entire website automatically.

## 🎨 Design System

The project uses a consistent design system with:
- Semantic color tokens (herb-green, herb-light, etc.)
- Responsive typography
- Consistent spacing and shadows
- Dark/light mode support

## 📦 Technologies Used

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## 💡 Tips

- All product data is centralized in one file for easy management
- The website automatically updates when you modify product data
- Use the recommended image specifications for best results
- The design system ensures consistency across all components

---

**Happy selling! 🌱**
