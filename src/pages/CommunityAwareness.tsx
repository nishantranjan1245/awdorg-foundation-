import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Megaphone, BookOpen, MapPin, Lightbulb, HandshakeIcon, FileText, CheckCircle, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-community-awareness.png";
import usePageTitle from "@/hooks/usePageTitle";

const CommunityAwareness = () => {
  usePageTitle("Community Safety Awareness - Awdorg Foundation");
  const whyMatters = [
    "Awareness reduces harassment and unsafe behaviors",
    "Communities can respond quickly to risks",
    "Support systems build confidence among women",
    "Safer surroundings lead to healthier and more inclusive neighborhoods",
  ];

  const whatWeDo = [
    {
      icon: Megaphone,
      title: "Awareness Campaigns",
      description: "Conducting community-level awareness drives on women's safety, respect, and responsible behavior.",
    },
    {
      icon: BookOpen,
      title: "Safety Talks & Sessions",
      items: ["Public safety tips", "How to support women in distress", "How to report incidents", "Importance of active community involvement"],
    },
    {
      icon: HandshakeIcon,
      title: "Community Engagement",
      description: "Partnering with local groups, residents, youth, and volunteers to build a safety-first mindset.",
    },
    {
      icon: Lightbulb,
      title: "Safe Neighborhood Promotion",
      items: ["Lighting awareness", "Safe gathering points", "Community watch groups", "Responsible conduct"],
    },
    {
      icon: FileText,
      title: "Awareness Materials",
      description: "Distributing safety cards, awareness messages, and simple guidelines.",
    },
  ];

  const whoWeEngage = [
    "Local communities",
    "Women's groups",
    "Youth volunteers",
    "Market associations",
    "Residential areas",
    "Public environment stakeholders",
  ];

  const impactItems = [
    "Reduce unsafe incidents",
    "Build a culture of respect and responsibility",
    "Create supportive community networks",
    "Increase awareness about women's safety needs",
    "Strengthen public safety practices",
  ];

  const supportHelps = [
    "Fund awareness drives",
    "Print safety materials",
    "Support local sessions",
    "Engage volunteers",
    "Reach more communities",
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
            alt="Community Safety Awareness" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent/60 to-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 w-36 h-36 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-44 h-44 bg-primary-foreground/10 rounded-full blur-3xl float-slow" />
        
        {/* Floating Community Icons */}
        <div className="absolute top-32 right-24 text-primary-foreground/40 float-slow">
          <Users className="w-10 h-10" />
        </div>
        <div className="absolute bottom-36 left-24 text-accent/50 float-medium">
          <Heart className="w-8 h-8" />
        </div>
        <div className="absolute top-1/2 left-1/3 text-primary-foreground/30 float-fast">
          <Sparkles className="w-6 h-6" />
        </div>
        
        {/* Connected Dots Pattern */}
        <div className="absolute top-40 left-1/4">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-primary-foreground/40 rounded-full" />
            <div className="w-16 h-0.5 bg-primary-foreground/20" />
            <div className="w-2 h-2 bg-accent/50 rounded-full" />
            <div className="w-12 h-0.5 bg-accent/30" />
            <div className="w-3 h-3 bg-primary-foreground/30 rounded-full" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in border border-primary-foreground/30">
              <Users className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Community Safety <span className="text-accent">Awareness</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Building safer neighborhoods and empowering communities to protect women
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
              About Community Safety Awareness
            </h2>
            <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Community Safety Awareness program by Awdorg Foundation aims to build safer neighborhoods and empower communities to protect women.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By spreading awareness, promoting responsible behavior, and encouraging community cooperation, we help create environments where women feel safe, supported, and respected.
              </p>
              <p className="text-primary font-semibold">
                A strong community is the first step toward a safer society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Community Safety Matters */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 text-primary/20 float-slow">
          <Sparkles className="w-10 h-10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Community Safety Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Women often face challenges in public spaces due to lack of awareness, unsafe surroundings, and limited community support. Community safety is important because:
              </p>
              <ul className="space-y-4">
                {whyMatters.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-card/50 p-3 rounded-xl border border-border/30">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold mt-6">
                Safety is a shared responsibility.
              </p>
            </div>
            <div className="bg-gradient-hero rounded-3xl p-12 text-center animate-fade-in animation-delay-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 border border-primary-foreground/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/20 rounded-full blur-xl" />
              <MapPin className="w-24 h-24 text-primary-foreground mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                Safer Neighborhoods
              </h3>
              <p className="text-primary-foreground/80">
                When communities unite, women gain confidence and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            What We Do Under This Program
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our comprehensive approach to building safer communities
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft animate-fade-in border border-border/50 hover:border-primary/30 transition-colors group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {index + 1}. {item.title}
                  </h3>
                </div>
                {item.description && (
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                )}
                {item.items && (
                  <ul className="space-y-2">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Engage */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute top-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Who We Engage With
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Anyone in the community can participate and help make the environment safer for women
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {whoWeEngage.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 text-center shadow-soft animate-fade-in border border-border/50 hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 relative">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Impact of the Program
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our Community Safety Awareness program helps to:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {impactItems.map((item, index) => (
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
          <p className="text-center text-primary font-semibold mt-8">
            When communities unite, women gain confidence and support.
          </p>
        </div>
      </section>

      {/* How Your Support Helps */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              How Your Support Helps
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Your contribution can help:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {supportHelps.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 text-center shadow-soft animate-fade-in border border-border/50 hover:border-primary/30 transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-primary font-semibold mt-8">
              Every contribution helps create safer spaces for women.
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
          <Users className="w-10 h-10" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join the Movement for Safer Communities
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-4 max-w-2xl mx-auto">
            A safer community starts with awareness, action, and unity.
          </p>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Support Awdorg Foundation in spreading safety, respect, and empowerment across neighborhoods.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="shadow-gold">
              <Link to="/donate">Support Community Awareness</Link>
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

export default CommunityAwareness;