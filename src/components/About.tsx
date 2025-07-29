import { Shield, Leaf, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-herb-green" />,
      title: "100% Organic",
      description: "All our products are certified organic and sourced from trusted farms worldwide."
    },
    {
      icon: <Shield className="w-8 h-8 text-herb-green" />,
      title: "Quality Tested",
      description: "Every batch undergoes rigorous testing for purity, potency, and safety standards."
    },
    {
      icon: <Users className="w-8 h-8 text-herb-green" />,
      title: "Expert Curated",
      description: "Our team of herbalists and wellness experts carefully select each product."
    },
    {
      icon: <Award className="w-8 h-8 text-herb-green" />,
      title: "Sustainably Sourced",
      description: "We work directly with growers who practice sustainable and ethical farming."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bringing Nature's
              <span className="block text-herb-green">Wisdom to You</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over a decade, we've been passionate about connecting people with the healing power of herbs. 
              Our mission is to provide the highest quality herbal products that support your natural wellness journey.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From ancient Ayurvedic traditions to modern scientific research, we bridge the gap between 
              traditional wisdom and contemporary wellness needs.
            </p>
            <div className="flex gap-4">
              <button className="bg-herb-green text-cream px-6 py-3 rounded-lg font-medium hover:bg-herb-green/90 transition-colors">
                Our Story
              </button>
              <button className="border border-herb-green text-herb-green px-6 py-3 rounded-lg font-medium hover:bg-herb-green hover:text-cream transition-colors">
                Certifications
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-natural transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;