import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, CheckCircle, Users, Heart, Shield, Home, HandHeart, Target, TrendingUp, Banknote, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-skill-fund.png";
import aboutImage from "@/assets/skill-fund-about.png";
import selfRelianceImage from "@/assets/skill-fund-self-reliance.png";
import whoWeHelpImage from "@/assets/skill-fund-who-we-help.png";
import impactImage from "@/assets/skill-fund-impact.png";
import usePageTitle from "@/hooks/usePageTitle";

const SkillFund = () => {
  usePageTitle("Women Skill & Self-Reliance Fund - Awdorg Foundation");
  const whySelfReliance = [
    "The ability to make independent decisions",
    "Confidence to overcome hardships",
    "A path to livelihood and dignity",
    "Freedom from dependency and unsafe situations",
  ];

  const fundSupports = [
    { icon: Briefcase, title: "Livelihood Support Items", description: "Basic tools, materials, or resources to start small earning activities" },
    { icon: Shield, title: "Women Safety Kits", description: "Essential items that help women stay safe in public and at home" },
    { icon: Heart, title: "Emergency Assistance", description: "Immediate support for women facing unsafe conditions" },
    { icon: Users, title: "Community Outreach", description: "Awareness campaigns that promote safety, dignity, and empowerment" },
    { icon: HandHeart, title: "Support for Vulnerable Women", description: "Assistance for women who are at risk or recovering from crisis situations" },
  ];

  const whoWeHelp = [
    "Women from low-income communities",
    "Women facing unsafe or difficult situations",
    "Women seeking independence and stability",
    "Survivors needing support to rebuild their lives",
    "Women with limited access to livelihood opportunities",
  ];

  const fundImpact = [
    "Helping women start small income-generating activities",
    "Providing essential safety items",
    "Supporting women during emergencies",
    "Building safer and more aware communities",
    "Encouraging confidence and personal growth",
  ];

  const donationLevels = [
    { amount: "₹500", description: "Supports a woman with a basic safety kit" },
    { amount: "₹1,500", description: "Provides essential materials for self-reliance" },
    { amount: "₹3,000 – ₹5,000", description: "Helps a woman start a small livelihood" },
    { amount: "Monthly Support", description: "Sustains ongoing programs and outreach" },
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
            alt="Women Skill & Self-Reliance Fund" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl float-slow" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl float-medium" />
        
        {/* Floating Sparkles */}
        <div className="absolute top-32 right-20 text-primary-foreground/40 float-slow">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-accent/60 float-medium">
          <Sparkles className="w-6 h-6" />
        </div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-40 left-1/4 w-20 h-20 border-2 border-primary-foreground/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-32 right-1/4 w-16 h-16 border border-accent/30 rotate-45" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in border border-primary-foreground/30">
              <Briefcase className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Women Skill & <span className="text-accent">Self-Reliance Fund</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Awdorg Foundation
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

      {/* About the Fund */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              About the Fund
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={aboutImage} 
                  alt="Women learning skills" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Women Skill & Self-Reliance Fund by Awdorg Foundation supports women in becoming independent, confident, and self-reliant. This fund provides practical assistance, tools, and resources that help women take steps toward financial stability, dignity, and safety in their daily lives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our goal is to strengthen women so they can lead safe, independent, and empowered lives within their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Self-Reliance Matters */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 text-primary/20 float-slow">
          <Sparkles className="w-10 h-10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Why Self-Reliance Matters
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              Many women face challenges such as lack of opportunities, limited support, and unsafe environments. Self-reliance gives women:
            </p>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="grid sm:grid-cols-2 gap-4">
                {whySelfReliance.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card p-5 rounded-2xl border border-border/50 shadow-soft hover:shadow-primary transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="relative group order-first lg:order-last">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={selfRelianceImage} 
                  alt="Confident self-reliant woman" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
            <p className="text-primary font-semibold text-center mt-10">
              Self-reliant women build stronger families and safer communities.
            </p>
          </div>
        </div>
      </section>

      {/* What This Fund Supports */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            What This Fund Supports
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Your contribution to the Women Skill & Self-Reliance Fund helps provide:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {fundSupports.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border border-border/50 hover:shadow-primary hover:border-primary/30 transition-all duration-300 animate-fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute top-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Who We Help
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-center">
              The fund directly supports:
            </p>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={whoWeHelpImage} 
                  alt="Women community support" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <ul className="space-y-3">
                {whoWeHelp.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-card/50 p-4 rounded-xl border border-border/30 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-primary font-semibold text-center mt-10">
              Every woman deserves safety, respect, and the opportunity to become self-reliant.
            </p>
          </div>
        </div>
      </section>

      {/* Impact of the Fund */}
      <section className="py-20 relative">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Impact of the Fund
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-10 text-center">
              The Women Skill & Self-Reliance Fund creates real change by:
            </p>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="grid sm:grid-cols-2 gap-4">
                {fundImpact.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card p-5 rounded-2xl border border-border/50 shadow-soft animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <Target className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="relative group order-first lg:order-last">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={impactImage} 
                  alt="Impact and transformation" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
            <p className="text-muted-foreground text-center mt-10 italic">
              Each contribution directly empowers a woman to take control of her life.
            </p>
          </div>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
        <div className="absolute top-20 right-20 text-primary-foreground/30 float-slow">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Banknote className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              How Your Donation Helps
            </h2>
            <p className="text-primary-foreground/80 mb-10">
              Your donation can make an immediate difference:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {donationLevels.map((level, index) => (
                <div key={index} className="bg-background/10 backdrop-blur-sm p-6 rounded-2xl border border-primary-foreground/20 hover:bg-background/20 transition-colors animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="font-display text-2xl font-bold text-accent mb-2">{level.amount}</div>
                  <p className="text-primary-foreground/80 text-sm">{level.description}</p>
                </div>
              ))}
            </div>
            <p className="text-primary-foreground mt-8 font-medium">
              Every amount helps a woman move closer to independence and safety.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Us in Empowering Women
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Your support helps women build a secure, independent, and dignified life. Together, we can create lasting change for women in need.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="hero" size="lg" className="shadow-gold">
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SkillFund;