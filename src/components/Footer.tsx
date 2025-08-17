import { Leaf, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
return (
  <footer className="bg-herb-green text-cream">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-herb-light" />
            <span className="text-2xl font-extrabold tracking-wide text-herb-light">
              Minnat Herbal
            </span>
          </div>
          <p className="text-cream/80 mb-6 max-w-md leading-relaxed">
            Your trusted partner in <span className="text-herb-light font-semibold">natural wellness</span>.  
            We bring you premium herbal products sourced from the finest organic farms worldwide.
          </p>
          <div className="flex gap-4">
            <Facebook className="w-6 h-6 hover:text-herb-light cursor-pointer transition-colors" />
            <Instagram className="w-6 h-6 hover:text-herb-light cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 hover:text-herb-light cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-cream/80">
            <li><a href="#home" className="hover:text-herb-light transition-colors">Home</a></li>
            <li><a href="#products" className="hover:text-herb-light transition-colors">Products</a></li>
            <li><a href="#about" className="hover:text-herb-light transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-herb-light transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-herb-light transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-herb-light transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-3 text-cream/80">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+7 968 414-40-33</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>g.n.bangles@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Aamna+Global/@28.5201312,77.2663101,19.03z/data=!4m6!3m5!1s0x390ce1e1870e7f6b:0x8b8311b226a07495!8m2!3d28.5198534!4d77.2665338!16s%2Fg%2F11rmt8cdmd?entry=ttu"
              >
                <span className="w-4 h-4 mt-1">📍</span>
                <span>Aamna Bangles<br />New Delhi, IN 110044</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-cream/20 mt-12 pt-8 text-center text-cream/60">
        <p>
          &copy; 2024 <span className="font-semibold text-herb-light">Minnat Herbal</span>.  
          All rights reserved. |{" "}
          <a href="/privacy-policy" className="hover:text-herb-light transition-colors">Privacy Policy</a> |{" "}
          <a href="/terms-of-service" className="hover:text-herb-light transition-colors">Terms of Service</a>
        </p>
        <p className="mt-2 text-xs">
          Crafted with <span className="text-red-400">♥</span> by <span className="font-medium">Nazir</span>
        </p>
      </div>
    </div>
  </footer>
);

};

export default Footer;