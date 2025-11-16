import { Leaf, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
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
            {t('footer.description')}
          </p>
          <div className="flex gap-4">
            <Facebook className="w-6 h-6 hover:text-herb-light cursor-pointer transition-colors" />
            <Instagram className="w-6 h-6 hover:text-herb-light cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 hover:text-herb-light cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
          <ul className="space-y-2 text-cream/80">
            <li><a href="#home" className="hover:text-herb-light transition-colors">{t('footer.home')}</a></li>
            <li><a href="#products" className="hover:text-herb-light transition-colors">{t('footer.products')}</a></li>
            <li><a href="#about" className="hover:text-herb-light transition-colors">{t('footer.about')}</a></li>
            <li><a href="#contact" className="hover:text-herb-light transition-colors">{t('footer.contact')}</a></li>
            <li><a href="#" className="hover:text-herb-light transition-colors">{t('footer.blog')}</a></li>
            <li><a href="#" className="hover:text-herb-light transition-colors">{t('footer.faq')}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">{t('footer.contactInfo')}</h3>
          <ul className="space-y-3 text-cream/80">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{t('footer.phone')}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{t('footer.email')}</span>
            </li>
            <li className="flex items-start gap-2">
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Aamna+Global/@28.5201312,77.2663101,19.03z/data=!4m6!3m5!1s0x390ce1e1870e7f6b:0x8b8311b226a07495!8m2!3d28.5198534!4d77.2665338!16s%2Fg%2F11rmt8cdmd?entry=ttu"
              >
                <span className="w-4 h-4 mt-1">📍</span>
                <span className="whitespace-pre-line">{t('footer.address')}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* FSSAI License Badge */}
<div className="flex justify-center mt-10 px-4">
  <div className="
      relative w-full max-w-4xl 
      rounded-3xl 
      bg-[rgba(255,255,255,0.08)]
      border border-[rgba(255,255,255,0.18)]
      backdrop-blur-xl
      shadow-[0_20px_50px_rgba(0,0,0,0.25)]
      p-6 sm:p-10
  ">

    {/* Gold Accent Line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 rounded-full"></div>

    <div className="flex items-center gap-4 sm:gap-8 flex-wrap sm:flex-nowrap">

      {/* Icon */}
      <div className="
          w-16 h-16 sm:w-20 sm:h-20 
          bg-white 
          rounded-2xl 
          shadow-[0_10px_25px_rgba(0,0,0,0.15)]
          border border-gray-200
          flex items-center justify-center
      ">
        <img 
          src="src/assets/image.png"
          alt="FSSAI Logo"
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1">
        <p className="text-xs sm:text-sm text-gray-200 tracking-[0.18em] uppercase font-semibold">
          FSSAI Licensed
        </p>

        <p className="text-xl sm:text-3xl font-bold text-white mt-1 leading-tight">
          FSSAI Lic. No. 23322010000067
        </p>

        <p className="text-gray-300 text-xs sm:text-sm mt-3 tracking-wide">
          Certified by Food Safety and Standards Authority of India
        </p>
      </div>

    </div>
  </div>
</div>





      {/* Footer Bottom */}
      <div className="border-t border-cream/20 mt-12 pt-8 text-center text-cream/60">
        <p>
          &copy; 2024 <span className="font-semibold text-herb-light">Minnat Herbal</span>.  
          {t('footer.rights')}. |{" "}
          <a href="/privacy-policy" className="hover:text-herb-light transition-colors">{t('footer.privacy')}</a> |{" "}
          <a href="/terms-of-service" className="hover:text-herb-light transition-colors">{t('footer.terms')}</a>
        </p>
        <p className="mt-2 text-xs">
          {t('footer.crafted')} <span className="text-red-400">♥</span> by <span className="font-medium">Nazir</span>
        </p>
      </div>
    </div>
  </footer>
);

};

export default Footer;