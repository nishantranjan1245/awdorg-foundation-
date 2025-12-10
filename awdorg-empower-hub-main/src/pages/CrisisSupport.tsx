import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Phone, MessageCircle, Users, Clock, Heart, CheckCircle, AlertTriangle, HandHeart, UserCheck, HelpCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-crisis-support.png";
import usePageTitle from "@/hooks/usePageTitle";

const CrisisSupport = () => {
  usePageTitle("Awdorg Shield (Crisis Support) - Awdorg Foundation");
  const whyImportant = [
    "Women often face emergencies with no support",
    "Immediate guidance can prevent harm",
    "Awareness helps women make safer decisions",
    "Community support can save lives",
    "Many women hesitate to seek help without trusted assistance",
  ];

  const howItWorks = [
    { step: "1", title: "Initial Contact", description: "Women or community members can reach out through our helpline or request form." },
    { step: "2", title: "Understanding the Situation", description: "Our team listens carefully and gathers basic information to assess the risk." },
    { step: "3", title: "Guidance & Assistance", description: "Based on the situation, we provide immediate safety guidance and possible next steps." },
    { step: "4", title: "Referral Support", description: "We help connect women with appropriate local resources, community support, or emergency services." },
    { step: "5", title: "Follow-Up", description: "We stay in touch (where possible) to ensure the woman remains safe and supported." },
  ];

  const supportTypes = [
    { icon: Shield, text: "Safety guidance" },
    { icon: AlertTriangle, text: "Crisis response instructions" },
    { icon: Heart, text: "Emotional reassurance" },
    { icon: Clock, text: "Emergency planning" },
    { icon: Users, text: "Referral to partner organizations" },
    { icon: HandHeart, text: "Support in accessing safe spaces" },
  ];

  const whoCanReach = [
    "Women in unsafe situations",
    "Women facing harassment or threats",
    "Women dealing with sudden emergencies",
    "Women needing immediate guidance",
    "Community members wanting to help someone in crisis",
  ];

  const whyMatters = [
    "Offering quick support in critical moments",
    "Helping women make safe and informed choices",
    "Reducing fear and confusion during emergencies",
    "Building a network of safety and trust",
    "Encouraging women to seek help without hesitation",
  ];

  const supportBenefits = [
    "Helps maintain outreach and response teams",
    "Supports emergency guidance resources",
    "Strengthens community safety networks",
    "Allows more women to access immediate support",
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
            alt="Awdorg Shield Crisis Support" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 w-36 h-36 bg-accent/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-44 h-44 bg-primary-foreground/10 rounded-full blur-3xl float-slow" />
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-24 text-primary-foreground/40 float-slow">
          <Shield className="w-10 h-10" />
        </div>
        <div className="absolute bottom-36 left-24 text-accent/50 float-medium">
          <Heart className="w-8 h-8" />
        </div>
        <div className="absolute top-1/2 right-1/3 text-primary-foreground/30 float-fast">
          <Sparkles className="w-6 h-6" />
        </div>
        
        {/* Decorative Shield Pattern */}
        <div className="absolute top-40 left-1/4 w-20 h-20 border-2 border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-accent rounded-full animate-ping" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in border border-primary-foreground/30 relative">
              <Shield className="w-12 h-12 text-primary-foreground" />
              <div className="absolute inset-0 rounded-full border-2 border-accent/50 animate-ping" style={{ animationDuration: '2s' }} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Awdorg Shield – <span className="text-accent">Crisis Support</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Immediate guidance, emotional support, and practical assistance for women in crisis
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
              About Awdorg Shield
            </h2>
            <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Awdorg Shield is a crisis support initiative by Awdorg Foundation created to assist women who are facing unsafe or threatening situations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our aim is to provide immediate guidance, emotional support, and practical assistance to help women stay safe and protected during moments of crisis.
              </p>
              <p className="text-primary font-semibold">
                This program focuses on safety, quick response, and connecting women to the right support network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Important */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 text-primary/20 float-slow">
          <Sparkles className="w-10 h-10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Crisis Support Is Important
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many women experience situations where they feel unsafe, threatened, or in need of urgent help. Awdorg Shield exists because:
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
                Timely support can change the entire outcome of a crisis situation.
              </p>
            </div>
            <div className="bg-gradient-hero rounded-3xl p-12 text-center animate-fade-in animation-delay-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 border border-primary-foreground/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/20 rounded-full blur-xl" />
              <Heart className="w-24 h-24 text-primary-foreground mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                You Are Not Alone
              </h3>
              <p className="text-primary-foreground/80">
                A small step of support can protect a life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            How Awdorg Shield Works
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Awdorg Shield follows a simple, effective, and supportive response system
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center animate-fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="font-display text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-2xl p-6 mt-12 max-w-3xl mx-auto shadow-soft border border-border/50">
            <p className="text-muted-foreground text-center italic">
              Awdorg Shield is not a replacement for emergency services—but it is a compassionate support system during vulnerable moments.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Support */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute top-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Types of Support We Provide
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Awdorg Shield focuses on practical, non-medical, non-legal advice such as:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {supportTypes.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-soft animate-fade-in border border-border/50 hover:border-primary/30 transition-colors group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-primary font-semibold mt-8">
            Our priority is to ensure women do not feel alone or helpless.
          </p>
        </div>
      </section>

      {/* Who Can Reach Out */}
      <section className="py-20 relative">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card rounded-3xl p-8 shadow-soft animate-fade-in border border-border/50">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-primary" />
                Awdorg Shield is available for:
              </h3>
              <ul className="space-y-4">
                {whoCanReach.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold mt-6">
                Anyone can request help on behalf of a woman in danger.
              </p>
            </div>
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who Can Reach Out
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Awdorg Shield is open to any woman who needs support during a crisis situation, as well as community members who want to help someone in need.
              </p>
              <Button asChild variant="hero" size="lg" className="shadow-gold">
                <Link to="/contact">Get Help Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Why Awdorg Shield Matters
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            This program helps create safer communities by:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {whyMatters.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 text-center shadow-soft animate-fade-in border border-border/50 hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Support */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              How You Can Support This Program
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Your contribution helps expand crisis support services for women who urgently need help.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {supportBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft animate-fade-in border border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-primary font-semibold mt-8">
              Every contribution helps keep women safe.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
        <div className="absolute top-20 right-20 text-primary-foreground/30 float-slow">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-20 left-32 text-accent/40 float-medium">
          <Shield className="w-10 h-10" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Stand With Women in Crisis
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-4 max-w-2xl mx-auto">
            Join Awdorg Foundation in supporting women when they need help the most.
          </p>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Your support strengthens our ability to respond quickly and effectively.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="shadow-gold">
              <Link to="/donate">Support Awdorg Shield</Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CrisisSupport;