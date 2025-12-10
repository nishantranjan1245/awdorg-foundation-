import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, Package, Shield, Wifi, Users, ArrowRight, CheckCircle, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-programs.png";
import usePageTitle from "@/hooks/usePageTitle";
import programSkillFund from "@/assets/program-skill-fund.png";
import programSafetyKit from "@/assets/program-safety-kit.png";
import programCrisisSupport from "@/assets/program-crisis-support.png";
import programCybersafe from "@/assets/program-cybersafe.png";
import programCommunity from "@/assets/program-community.png";

const Programs = () => {
  usePageTitle("Programs - Awdorg Foundation");
  const programs = [
    {
      icon: Briefcase,
      number: "1",
      title: "Women Skill & Self-Reliance Fund",
      description: "This program supports women in becoming independent by providing basic tools, materials, and practical assistance needed to start small livelihood activities. The fund helps women build confidence, stability, and long-term independence.",
      impactFocus: ["Livelihood support", "Independence building", "Self-confidence & dignity"],
      link: "/programs/skill-fund",
      image: programSkillFund,
    },
    {
      icon: Package,
      number: "2",
      title: "Women Safety Kit Drive",
      description: "The Safety Kit Drive provides essential safety tools to women, including a torch, whistle, and emergency contact card. These small items help women stay prepared and feel safe in their daily lives.",
      impactFocus: ["Personal safety", "Preparedness", "Emergency awareness"],
      link: "/programs/safety-kit",
      image: programSafetyKit,
    },
    {
      icon: Shield,
      number: "3",
      title: "Awdorg Shield (Women Crisis Support)",
      description: "A crisis support initiative designed for women facing unsafe or threatening situations. Awdorg Shield offers immediate guidance, emotional support, and referral assistance to help women navigate crisis moments safely.",
      impactFocus: ["Crisis guidance", "Immediate support", "Safety planning"],
      link: "/programs/crisis-support",
      image: programCrisisSupport,
    },
    {
      icon: Wifi,
      number: "4",
      title: "CyberSafe Women Initiative",
      description: "A program focused on digital safety and awareness, helping women stay protected online. It covers cyber threats, safe online behavior, reporting methods, and practical steps for digital security.",
      impactFocus: ["Online safety", "Cyber awareness", "Threat prevention"],
      link: "/programs/cybersafe",
      image: programCybersafe,
    },
    {
      icon: Users,
      number: "5",
      title: "Community Safety Awareness",
      description: "This initiative promotes safety awareness across neighborhoods and communities. Through sessions, outreach drives, and public awareness messages, the program encourages responsible behavior and support for women in public spaces.",
      impactFocus: ["Community engagement", "Safety awareness", "Supportive neighborhoods"],
      link: "/programs/community-awareness",
      image: programCommunity,
    },
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
            alt="Awdorg Foundation Programs" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl float-slow" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/30 rounded-full blur-2xl float-medium" />
        
        {/* Floating Sparkles */}
        <div className="absolute top-32 right-20 text-primary-foreground/40 float-slow">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-accent/60 float-medium">
          <Sparkles className="w-6 h-6" />
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-40 left-1/4 w-3 h-3 bg-accent rounded-full animate-ping" />
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-primary-foreground/60 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm font-medium">Our Initiatives</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Programs – <span className="text-accent">Awdorg Foundation</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary-foreground/90 mb-4 animate-fade-in animation-delay-200">
              Our Initiatives for Women's Safety, Support & Self-Reliance
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-300 mb-4">
              Awdorg Foundation runs a set of focused initiatives designed to support women through safety awareness, crisis assistance, empowerment, and community development.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed animate-fade-in animation-delay-400">
              Each program addresses a unique area of need and contributes to building safer and stronger lives for women.
            </p>
            <p className="text-accent font-medium mt-6 animate-fade-in animation-delay-500">
              Explore our core programs below.
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

      {/* Programs List */}
      <section className="py-20 relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-primary transition-all duration-500 animate-fade-in border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side - Image */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-48 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="absolute bottom-4 left-4 bg-accent/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Program {program.number}
                    </span>
                  </div>
                  
                  {/* Right Side - Content */}
                  <div className="lg:w-3/5 p-8 relative">
                    {/* Subtle Decorative */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
                    
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {program.description}
                    </p>
                    
                    {/* Impact Focus */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Impact Focus:</h4>
                      <ul className="space-y-2">
                        {program.impactFocus.map((impact, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild variant="hero" size="lg" className="group-hover:shadow-gold transition-shadow">
                      <Link to={program.link}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-foreground/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        
        {/* Sparkles */}
        <div className="absolute top-20 right-20 text-primary-foreground/30 float-slow">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-20 left-32 text-accent/40 float-medium">
          <Sparkles className="w-6 h-6" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Join Us in Empowering Women
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-4">
              Each program contributes to creating a safer, stronger, and more empowered environment for women.
            </p>
            <p className="text-primary-foreground/80 mb-8">
              Your support helps us extend these initiatives to more communities and individuals in need.
            </p>
            <Button asChild variant="secondary" size="lg" className="shadow-gold hover:shadow-lg transition-shadow">
              <Link to="/donate">Support Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;