import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, MapPin, Clock, Leaf } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
  window.open("https://wa.me/79684144033?text=Hi! I'm interested in your herbal products.", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:g.n.bangles@gmail.com?subject=Product Inquiry";
  };

  const handlePhone = () => {
    window.location.href = "tel:+7 9684144033";
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-herb-light/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products? We're here to help you find the perfect herbal solution for your wellness needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-natural transition-all duration-300 hover:scale-105 group">
            <CardHeader>
              <div className="bg-herb-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-herb-green/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-herb-green" />
              </div>
              <CardTitle className="text-xl text-foreground">WhatsApp Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 min-h-[48px]">
                Quick responses for instant product questions and recommendations
              </p>
              <div className="space-y-2 mb-6">
                {/* <p className="text-sm font-medium text-herb-green">+7 968 414-40-33</p> */}
                <p className="text-xs text-muted-foreground">Usually replies instantly</p>
              </div>
              <Button variant="herbal" onClick={handleWhatsApp} className="w-full hover:scale-105 transition-transform">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-natural transition-all duration-300 hover:scale-105 group">
            <CardHeader>
              <div className="bg-herb-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-herb-green/20 transition-colors">
                <Mail className="w-8 h-8 text-herb-green" />
              </div>
              <CardTitle className="text-xl text-foreground">Email Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 min-h-[48px]"> 
                Detailed inquiries with comprehensive product information
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-medium text-herb-green">g.n.bangles@gmail.com</p>
                <p className="text-xs text-muted-foreground">Response within 24 hours</p>
              </div>
              <Button variant="herbal" onClick={handleEmail} className="w-full hover:scale-105 transition-transform">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-natural transition-all duration-300 hover:scale-105 group">
            <CardHeader>
              <div className="bg-herb-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-herb-green/20 transition-colors">
                <Phone className="w-8 h-8 text-herb-green" />
              </div>
              <CardTitle className="text-xl text-foreground">Phone Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 min-h-[48px]">
                Direct consultation with our herbal wellness experts
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-medium text-herb-green">+7 968 414-40-33</p>
                <p className="text-xs text-muted-foreground">Mon-Fri 9AM-6PM</p>
              </div>
              <Button variant="herbal" onClick={handlePhone} className="w-full hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-herb-green mb-3" />
            <h3 className="font-semibold text-lg text-foreground mb-2">Location</h3>
            <a target="_blank" href="https://www.google.com/maps/place/Aamna+Global/@28.5201312,77.2663101,19.03z/data=!4m6!3m5!1s0x390ce1e1870e7f6b:0x8b8311b226a07495!8m2!3d28.5198534!4d77.2665338!16s%2Fg%2F11rmt8cdmd?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D">
               <p className="text-muted-foreground">Aamna Global<br />
                    New Delhi, IN 110044
              </p>
            </a>
          </div>

          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 text-herb-green mb-3" />
            <h3 className="font-semibold text-lg text-foreground mb-2">Business Hours</h3>
            <p className="text-muted-foreground">
              Mon - Fri: 9:00 AM - 6:00 PM<br />
              Sat - Sun: 10:00 AM - 4:00 PM
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Leaf className="w-8 h-8 text-herb-green mb-3" />
            <h3 className="font-semibold text-lg text-foreground mb-2">Consultation</h3>
            <p className="text-muted-foreground">
              Free herbal wellness<br />
              consultations available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;