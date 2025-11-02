import { Shield, Leaf, Users, Award } from "lucide-react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
              <span className="block text-herb-green">{t('about.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {t('about.description2')}
            </p>
            <div className="flex gap-4">
              <button className="bg-herb-green text-cream px-6 py-3 rounded-lg font-medium hover:bg-herb-green/90 transition-colors">
                {t('about.ourStory')}
              </button>
              <button className="border border-herb-green text-herb-green px-6 py-3 rounded-lg font-medium hover:bg-herb-green hover:text-cream transition-colors">
                {t('about.certifications')}
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-natural transition-shadow">
              <div className="mb-4"><Leaf className="w-8 h-8 text-herb-green" /></div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{t('about.features.organic.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('about.features.organic.description')}</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-natural transition-shadow">
              <div className="mb-4"><Shield className="w-8 h-8 text-herb-green" /></div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{t('about.features.tested.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('about.features.tested.description')}</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-natural transition-shadow">
              <div className="mb-4"><Users className="w-8 h-8 text-herb-green" /></div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{t('about.features.curated.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('about.features.curated.description')}</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-natural transition-shadow">
              <div className="mb-4"><Award className="w-8 h-8 text-herb-green" /></div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{t('about.features.sustainable.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('about.features.sustainable.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;