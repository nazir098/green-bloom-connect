import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, MapPin, Clock, Leaf } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hi! I'm interested in your herbal products.", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@herbalbliss.com?subject=Product Inquiry";
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
          <Card className="text-center hover:shadow-natural transition-shadow">
            <CardHeader>
              <MessageCircle className="w-12 h-12 text-herb-green mx-auto mb-4" />
              <CardTitle className="text-xl">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Chat with us instantly for quick product questions and personalized recommendations.
              </p>
              <Button variant="herbal" onClick={handleWhatsApp} className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat Now
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-natural transition-shadow">
            <CardHeader>
              <Mail className="w-12 h-12 text-herb-green mx-auto mb-4" />
              <CardTitle className="text-xl">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Send us detailed inquiries and we'll respond within 24 hours with comprehensive information.
              </p>
              <Button variant="outline" onClick={handleEmail} className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-natural transition-shadow">
            <CardHeader>
              <Phone className="w-12 h-12 text-herb-green mx-auto mb-4" />
              <CardTitle className="text-xl">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Speak directly with our herbal experts for detailed product consultations.
              </p>
              <Button variant="nature" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-herb-green mb-3" />
            <h3 className="font-semibold text-lg text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">
              123 Herbal Way<br />
              Wellness City, WC 12345
            </p>
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