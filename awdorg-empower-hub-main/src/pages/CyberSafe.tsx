import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wifi, Shield, Lock, Eye, AlertTriangle, CheckCircle, MessageCircle, Users, BookOpen, Smartphone, Camera, UserX, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cybersafe.png";
import aboutImage from "@/assets/cybersafe-about.png";
import supportImage from "@/assets/cybersafe-support.png";
import whoCanJoinImage from "@/assets/cybersafe-who-can-join.png";
import impactImage from "@/assets/cybersafe-impact.png";
import usePageTitle from "@/hooks/usePageTitle";

const CyberSafe = () => {
  usePageTitle("CyberSafe Women Initiative - Awdorg Foundation");
  const challenges = [
    "Online harassment or bullying",
    "Stalking on social media",
    "Misuse of photos and personal information",
    "Fake profiles or impersonation",
    "Unwanted messages or threats",
    "Privacy violations",
  ];

  const whatWeDo = [
    {
      icon: BookOpen,
      title: "Awareness Sessions",
      description: "Simple, easy-to-understand guidance on staying safe online.",
    },
    {
      icon: Shield,
      title: "Digital Safety Tips",
      items: ["Keeping accounts secure", "Using privacy settings", "Avoiding suspicious links or contacts", "Protecting personal information"],
    },
    {
      icon: MessageCircle,
      title: "Reporting Support",
      items: ["Cyber harassment", "Fake profiles", "Threats or misuse", "Unwanted messages"],
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Promoting responsible online behavior and respect for women on all digital platforms.",
    },
  ];

  const threats = [
    { icon: Eye, title: "Online Stalking", description: "Monitoring and tracking someone's online activity" },
    { icon: UserX, title: "Catfishing", description: "Creating fake identities to deceive" },
    { icon: AlertTriangle, title: "Blackmail Attempts", description: "Using private information to threaten" },
    { icon: Lock, title: "Identity Theft", description: "Stealing personal identity for misuse" },
    { icon: Camera, title: "Screenshot Misuse", description: "Sharing private images without consent" },
    { icon: Smartphone, title: "Social Media Manipulation", description: "Using platforms to harass or defame" },
  ];

  const supportItems = [
    "Guidance for responding to online harassment",
    "Awareness resources on safe internet usage",
    "Help in documenting incidents",
    "Steps for reporting issues to platforms or authorities",
    "Empowering women to navigate digital spaces safely",
  ];

  const whoCanJoin = [
    "Students",
    "Working women",
    "Homemakers",
    "Social media users",
    "Women facing harassment online",
    "Community groups wanting digital safety awareness",
  ];

  const impactItems = [
    "Stay safe while using phones, apps, and social media",
    "Build confidence in digital spaces",
    "Protect themselves from online threats",
    "Make informed decisions",
    "Understand their digital rights",
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
            alt="CyberSafe Women Initiative" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-[hsl(220,60%,40%,0.8)] to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 w-36 h-36 bg-accent/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-44 h-44 bg-[hsl(220,60%,60%,0.2)] rounded-full blur-3xl float-slow" />
        
        {/* Floating Tech Icons */}
        <div className="absolute top-32 right-24 text-primary-foreground/40 float-slow">
          <Wifi className="w-10 h-10" />
        </div>
        <div className="absolute bottom-36 left-24 text-accent/50 float-medium">
          <Shield className="w-8 h-8" />
        </div>
        <div className="absolute top-1/2 left-1/3 text-primary-foreground/30 float-fast">
          <Lock className="w-6 h-6" />
        </div>
        
        {/* Digital Pattern Lines */}
        <div className="absolute top-40 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
        <div className="absolute bottom-32 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in border border-primary-foreground/30 rotate-3">
              <Wifi className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              CyberSafe <span className="text-accent">Women Initiative</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Helping women stay safe, confident, and secure in the digital world
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
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
              About the CyberSafe Women Initiative
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={aboutImage} 
                  alt="Woman using laptop safely" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The CyberSafe Women Initiative by Awdorg Foundation is designed to help women stay safe in the digital world. As online spaces grow, so do risks like harassment, misuse of information, and cyber threats.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This initiative provides awareness, practical guidance, and support so women can use the internet with confidence and security.
                </p>
                <p className="text-primary font-semibold">
                  Our goal is to ensure that every woman feels protected—both offline and online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cyber Safety Matters */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 text-primary/20 float-slow">
          <Sparkles className="w-10 h-10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Cyber Safety Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Women often face challenges such as:
              </p>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 bg-destructive/5 p-3 rounded-xl border border-destructive/20">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold mt-6">
                Cyber safety is essential because these issues can affect a woman's confidence, well-being, and safety in real life.
              </p>
            </div>
            <div className="bg-gradient-hero rounded-3xl p-12 text-center animate-fade-in animation-delay-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 border border-primary-foreground/20 rounded-lg rotate-12" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/20 rounded-full blur-xl" />
              <Shield className="w-24 h-24 text-primary-foreground mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                Digital Protection
              </h3>
              <p className="text-primary-foreground/80">
                Every woman deserves to feel safe and secure in the digital world.
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
            What We Do
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The CyberSafe Women Initiative focuses on:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
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
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {index + 1}. {item.title}
                  </h3>
                </div>
                {item.description && (
                  <p className="text-muted-foreground">{item.description}</p>
                )}
                {item.items && (
                  <ul className="space-y-2 ml-4">
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

      {/* Common Cyber Threats */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute top-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Common Cyber Threats Women Face
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our initiative educates women about threats such as:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((threat, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-primary transition-all duration-300 animate-fade-in border border-border/50 hover:border-destructive/30 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <threat.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {threat.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {threat.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-primary font-semibold mt-8">
            Understanding these threats helps prevent them.
          </p>
        </div>
      </section>

      {/* How We Support */}
      <section className="py-20 relative">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
              How We Support Women
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Through the CyberSafe Women Initiative, Awdorg Foundation offers:
                </h3>
                <ul className="space-y-4">
                  {supportItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-primary font-semibold mt-6">
                  We ensure that no woman feels helpless in the digital world.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={supportImage} 
                  alt="Women learning digital safety" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Who Can Join This Initiative
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Everyone who uses the internet can benefit from cyber safety awareness
            </p>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={whoCanJoinImage} 
                  alt="Diverse group of women" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {whoCanJoin.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-4 text-center shadow-soft animate-fade-in border border-border/50 hover:border-primary/30 transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Impact of the Initiative
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              The CyberSafe Women Initiative helps women:
            </p>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="grid grid-cols-2 gap-4">
                {impactItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-4 text-center shadow-soft animate-fade-in border border-border/50 hover:border-primary/30 transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={impactImage} 
                  alt="Digital empowerment impact" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
            <p className="text-center text-primary font-semibold mt-10">
              Safer online spaces lead to safer communities overall.
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
          <Wifi className="w-10 h-10" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Support the CyberSafe Women Initiative
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-4 max-w-2xl mx-auto">
            Your contribution helps us reach more women with awareness, guidance, and protective support.
          </p>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Together, we can make the digital world safer for every woman.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="shadow-gold">
              <Link to="/donate">Support This Initiative</Link>
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

export default CyberSafe;