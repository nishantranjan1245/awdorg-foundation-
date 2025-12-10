import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Package, CheckCircle, Flashlight, Bell, FileText, AlertTriangle, Users, MapPin, GraduationCap, Heart, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-safety-kit.png";
import usePageTitle from "@/hooks/usePageTitle";

const SafetyKit = () => {
  usePageTitle("Women Safety Kit Drive - Awdorg Foundation");
  const kitContents = [
    { icon: Bell, name: "Whistle", description: "To alert others quickly during emergencies" },
    { icon: Flashlight, name: "Torch/Flashlight", description: "For visibility in dark or unsafe areas" },
    { icon: FileText, name: "Emergency Contact Card", description: "With important helpline numbers" },
    { icon: AlertTriangle, name: "Basic Awareness Card", description: "Simple safety reminders and tips" },
  ];

  const whyImportant = [
    "Increasing personal readiness",
    "Reducing fear during travel or emergencies",
    "Providing tools that can attract help",
    "Promoting awareness and confidence",
    "Supporting women in vulnerable environments",
  ];

  const whoReceives = [
    { icon: Users, text: "Women from low-income or underserved communities" },
    { icon: MapPin, text: "Women who travel alone frequently" },
    { icon: AlertTriangle, text: "Women living in unsafe areas" },
    { icon: Heart, text: "Women facing crisis or emergency situations" },
    { icon: GraduationCap, text: "Students, working women, and neighborhood groups" },
  ];

  const outreachActivities = [
    "Community safety sessions",
    "Awareness talks",
    "Importance of emergency response",
    "Safe travel tips",
    "Harassment prevention awareness",
  ];

  const donationTiers = [
    { amount: "₹500", description: "Covers the cost of one safety kit" },
    { amount: "₹1,000", description: "Supports two women with safety kits" },
    { amount: "₹2,500", description: "Helps distribute kits in a small local group" },
    { amount: "Monthly Support", description: "Helps sustain the drive throughout the year" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Women Safety Kit Drive" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-accent/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 w-36 h-36 bg-accent/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-44 h-44 bg-primary-foreground/10 rounded-full blur-3xl float-slow" />
        
        {/* Floating Shapes */}
        <div className="absolute top-32 right-24 text-primary-foreground/40 float-slow">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-36 left-24 text-accent/50 float-medium">
          <Package className="w-10 h-10" />
        </div>
        
        {/* Decorative Rings */}
        <div className="absolute top-1/3 left-1/5 w-24 h-24 border-2 border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/6 w-16 h-16 border border-accent/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in border border-primary-foreground/30">
              <Package className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Women <span className="text-accent">Safety Kit</span> Drive
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Helping women stay safe, prepared, and confident in their daily lives
            </p>
            
            {/* Scroll Indicator */}
            <div className="mt-10 animate-bounce">
              <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full mx-auto flex items-start justify-center p-1">
                <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
              About the Safety Kit Drive
            </h2>
            <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Women Safety Kit Drive is an initiative by Awdorg Foundation to help women stay safe, prepared, and confident in their daily lives.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our safety kits are designed to provide basic but essential tools that can support women during uncertain or unsafe situations.
              </p>
              <p className="text-primary font-semibold">
                The kit empowers women with awareness, preparedness, and a sense of personal security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kit Contents */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 text-primary/20 float-slow">
          <Sparkles className="w-10 h-10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            What's Inside the Safety Kit
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Each Women Safety Kit includes practical items that support women during emergencies or when they feel unsafe
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kitContents.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-primary transition-all duration-300 animate-fade-in border border-border/50 hover:border-primary/30 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 font-medium">
            These items are small but powerful tools for safety and confidence.
          </p>
        </div>
      </section>

      {/* Why Important */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why the Safety Kit is Important
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many women face everyday risks such as traveling alone, visiting isolated places, or commuting at night. The safety kit helps women by:
              </p>
              <ul className="space-y-4">
                {whyImportant.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-card/50 p-3 rounded-xl border border-border/30">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold mt-6">
                A simple kit can make a meaningful difference in a woman's sense of security.
              </p>
            </div>
            <div className="bg-gradient-hero rounded-3xl p-12 text-center animate-fade-in animation-delay-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 border border-primary-foreground/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/20 rounded-full blur-xl" />
              <Package className="w-24 h-24 text-primary-foreground mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                Empowering Safety
              </h3>
              <p className="text-primary-foreground/80">
                Every kit distributed adds safety, confidence, and protection to a woman's life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Receives */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute top-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Who Receives the Safety Kits
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Awdorg Foundation distributes safety kits to women who need them the most
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whoReceives.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-soft animate-fade-in border border-border/50 hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-primary font-semibold mt-8">
            We ensure kits reach those who need protection and support.
          </p>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="py-20 relative">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card rounded-3xl p-8 shadow-soft animate-fade-in order-2 lg:order-1 border border-border/50">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Our Outreach Activities Include:
              </h3>
              <ul className="space-y-4">
                {outreachActivities.map((activity, index) => (
                  <li key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{activity}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold mt-6">
                These activities help communities create safer environments for women.
              </p>
            </div>
            <div className="animate-fade-in order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Community Outreach Drive
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Along with distributing safety kits, Awdorg Foundation also conducts community awareness programs to help create safer environments for women in neighborhoods and public spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            How Your Support Helps
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Your contribution helps us prepare and distribute more safety kits to women in need
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-primary transition-all duration-300 animate-fade-in border-2 border-transparent hover:border-primary group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {tier.amount === "Monthly Support" ? (
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  ) : (
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  {tier.amount}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-primary font-semibold mt-8">
            Every kit you sponsor adds safety, confidence, and protection to someone's life.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
        <div className="absolute top-20 right-20 text-primary-foreground/30 float-slow">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join the Safety Kit Drive
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-4 max-w-2xl mx-auto">
            You can make a real impact by helping us reach more women in need.
          </p>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Together, we can create safer communities and empower women to live without fear.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="shadow-gold">
              <Link to="/donate">Sponsor a Safety Kit</Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SafetyKit;