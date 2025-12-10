import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Target, Award, CheckCircle, Eye, Handshake, Scale, Lock, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";
import directorCharanjeet from "@/assets/director-charanjeet.jpg";
import directorDeeksha from "@/assets/director-deeksha.jpg";
import aboutHeroImage from "@/assets/about-hero-image.png";
import aboutWhoWeAre from "@/assets/about-who-we-are.png";
import aboutMissionVision from "@/assets/about-mission-vision.png";
import aboutApproach from "@/assets/about-approach.png";
import { Link } from "react-router-dom";
import usePageTitle from "@/hooks/usePageTitle";

const AboutUs = () => {
  usePageTitle("About Us - Awdorg Foundation");
  const missionPoints = [
    "To support women in developing self-reliance and independence",
    "To increase women's safety through awareness and community support",
    "To provide crisis assistance for women in unsafe situations",
    "To promote dignity, equality, and empowerment for all women",
  ];

  const approachPoints = [
    "Providing women with essential safety tools",
    "Offering livelihood assistance and independence-focused support",
    "Increasing awareness about women's safety and rights",
    "Supporting women during emergencies through the Awdorg Shield initiative",
    "Building safer communities through outreach and collaboration",
  ];

  const values = [
    { icon: Shield, title: "Safety", description: "Every woman deserves physical, emotional, and digital safety." },
    { icon: Heart, title: "Dignity", description: "Respect and fairness for every individual." },
    { icon: Scale, title: "Equality", description: "Equal rights and opportunities for all women." },
    { icon: Lock, title: "Trust", description: "Transparent operations and ethical practices." },
    { icon: HeartHandshake, title: "Support", description: "Practical help for women in need." },
  ];

  const directors = [
    { name: "Charanjeet Dhiman", role: "Director", image: directorCharanjeet },
    { name: "Deeksha Sati", role: "Director", image: directorDeeksha },
  ];

  const legalInfo = [
    { label: "CIN", value: "U85300DL2020NPL367989" },
    { label: "FCRA Registration Number", value: "231662112" },
    { label: "Registered Address", value: "K-66/B, Kalkaji, New Delhi – 110019" },
    { label: "Date of Registration", value: "14 August 2020" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHeroImage} 
            alt="About Awdorg Foundation" 
            className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary-glow/30" />
          
          {/* Animated overlay patterns */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--accent)/0.3)_0%,transparent_50%)] animate-pulse-glow" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--primary-glow)/0.4)_0%,transparent_50%)] animate-pulse-glow" style={{ animationDelay: '1s' }} />
          </div>
        </div>
        
        {/* Top decorative border */}
        <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent z-20" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden z-[1]">
          {/* Floating orbs */}
          <div className="absolute top-24 left-[10%] w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-[15%] w-48 h-48 bg-primary-foreground/15 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/2 right-[8%] w-36 h-36 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
          
          {/* Sparkles */}
          <Sparkles className="absolute top-1/4 right-1/4 w-6 h-6 text-accent animate-twinkle" />
          <Sparkles className="absolute bottom-1/3 left-1/4 w-4 h-4 text-primary-foreground/60 animate-twinkle" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="absolute top-1/3 left-[15%] w-5 h-5 text-accent/80 animate-twinkle" style={{ animationDelay: '1s' }} />
          
          {/* Corner decorations */}
          <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-accent/50 animate-pulse" />
          <div className="absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-accent/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Floating diamonds */}
          <div className="absolute top-32 left-[20%] w-4 h-4 bg-accent/40 rotate-45 animate-float" />
          <div className="absolute top-40 right-[25%] w-3 h-3 bg-primary-foreground/30 rotate-45 animate-float" style={{ animationDelay: '0.3s' }} />
          
          {/* Animated rings */}
          <div className="absolute top-1/2 left-[5%] w-16 h-16 border border-primary-foreground/20 rounded-full animate-rotate-slow" />
          <div className="absolute bottom-1/3 right-[10%] w-24 h-24 border-2 border-accent/15 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
          
          {/* Light beams */}
          <div className="absolute top-20 left-1/4 w-px h-[30%] bg-gradient-to-b from-primary-foreground/20 via-primary-foreground/10 to-transparent animate-shimmer" />
          <div className="absolute top-20 right-1/3 w-px h-[25%] bg-gradient-to-b from-accent/30 via-accent/10 to-transparent animate-shimmer" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-md text-primary-foreground px-6 py-3 rounded-full text-sm font-medium mb-6 animate-slide-down border border-primary-foreground/30 shadow-lg">
              <Heart className="w-4 h-4 animate-pulse" />
              Learn About Us
              <Heart className="w-4 h-4 animate-pulse" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up drop-shadow-2xl">
              About <span className="bg-gradient-to-r from-accent via-gold to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Awdorg Foundation</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed animate-slide-up max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
              Empowering women through safety, support, and self-reliance
            </p>
            
            {/* Scroll indicator */}
            <div className="mt-12 animate-bounce">
              <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2 mx-auto">
                <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-scroll-indicator" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-rose-50/50 to-accent/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-gold/10" />
        
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <Sparkles className="absolute top-32 left-20 w-5 h-5 text-primary/30 animate-twinkle" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary/10">
                <Users className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Who We <span className="text-gradient">Are</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative animate-fade-in">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={aboutWhoWeAre} 
                    alt="Women community meeting" 
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                  
                  {/* Decorative frame */}
                  <div className="absolute inset-3 border-2 border-primary-foreground/20 rounded-2xl" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg animate-float">
                    <div className="text-sm font-semibold text-foreground">Community Support</div>
                    <div className="text-xs text-muted-foreground">Building Together</div>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl" />
              </div>
              
              {/* Content */}
              <div className="space-y-6 text-muted-foreground leading-relaxed bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg">
                  Awdorg Foundation is a non-profit organization dedicated to empowering women through safety support, self-reliance opportunities, and community-driven initiatives.
                </p>
                <p>
                  We work to create safer environments for women, provide practical assistance, raise awareness, and help women move toward independent and dignified lives.
                </p>
                <p className="text-primary font-medium text-lg border-l-4 border-primary pl-4 bg-gradient-to-r from-rose-light/50 to-transparent py-3 rounded-r-xl">
                  Our foundation stands for protection, empowerment, and equal opportunity for every woman—ensuring she feels safe, respected, and capable of shaping her own future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image with gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutMissionVision} 
            alt="Mission and Vision" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-rose-50/80 to-accent/20" />
          <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 via-transparent to-gold/10" />
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <Sparkles className="absolute top-20 right-20 w-6 h-6 text-primary/30 animate-twinkle" />
        <Sparkles className="absolute bottom-32 left-16 w-4 h-4 text-accent/40 animate-twinkle" style={{ animationDelay: '0.5s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary/10 backdrop-blur-sm">
              <Target className="w-4 h-4" />
              Our Purpose
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Mission & <span className="text-gradient">Vision</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border animate-fade-in hover:-translate-y-2 transition-all duration-500 group">
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl overflow-hidden">
                <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700" />
              </div>
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Our Mission
              </h3>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-rose-dark flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform shadow-lg">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="relative rounded-3xl p-8 shadow-xl animate-fade-in animation-delay-200 hover:-translate-y-2 transition-all duration-500 overflow-hidden group">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-rose-dark" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary-glow/30" />
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary-foreground/10 rounded-full animate-float" />
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-accent/20 rounded-full animate-float-slow" />
              <Sparkles className="absolute top-8 left-8 w-4 h-4 text-accent/60 animate-pulse" />
              
              {/* Animated ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-primary-foreground/10 rounded-full animate-rotate-slow" style={{ animationDuration: '20s' }} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">
                  Our Vision
                </h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  A society where every woman can live safely, confidently, and with full independence—free from fear, discrimination, and limitations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-50/50 via-transparent to-gold/5" />
        
        {/* Background decorations */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <Sparkles className="absolute top-40 right-1/4 w-5 h-5 text-primary/30 animate-twinkle" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary/10">
                <Handshake className="w-4 h-4" />
                How We Work
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-gradient">Approach</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Awdorg Foundation follows a practical and community-based approach focused on real impact:
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border animate-fade-in">
                <ul className="space-y-4">
                  {approachPoints.map((point, index) => (
                    <li key={index} className="group flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/80 to-secondary/40 rounded-2xl hover:from-primary/10 hover:to-accent/5 transition-all duration-500 hover:-translate-x-1 hover:shadow-lg" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-rose-dark flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <CheckCircle className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-foreground pt-2 font-medium">{point}</span>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-3 ml-auto" />
                    </li>
                  ))}
                </ul>
                <p className="text-primary font-medium mt-8 text-center text-lg">
                  We believe meaningful change begins with awareness, support, and empowerment at the ground level.
                </p>
              </div>
              
              {/* Image */}
              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={aboutApproach} 
                    alt="Women empowerment training" 
                    className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                  
                  {/* Decorative frame */}
                  <div className="absolute inset-3 border-2 border-primary-foreground/20 rounded-2xl" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="text-sm font-semibold text-foreground">Practical Support</div>
                    <div className="text-xs text-muted-foreground">Real Impact</div>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-accent/10 to-rose-50/50" />
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-gold/10" />
        
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <Sparkles className="absolute top-24 left-1/4 w-5 h-5 text-primary/30 animate-twinkle" />
        <Sparkles className="absolute bottom-32 right-1/3 w-4 h-4 text-accent/40 animate-twinkle" style={{ animationDelay: '0.5s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary/10">
              <Heart className="w-4 h-4" />
              What We Believe
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our <span className="text-gradient">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700" />
                </div>
                
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform relative z-10">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 relative z-10">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm relative z-10">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-50/50 via-transparent to-gold/5" />
        
        {/* Background decorations */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <Sparkles className="absolute top-20 right-1/4 w-5 h-5 text-primary/30 animate-twinkle" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary/10">
              <Users className="w-4 h-4" />
              Leadership
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground mb-12">
              Awdorg Foundation is guided by dedicated leadership committed to women's welfare.
            </p>
            
            <h3 className="font-display text-xl font-semibold text-foreground mb-8">Directors</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              {directors.map((director, index) => (
                <div
                  key={index}
                  className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                  
                  <img 
                    src={director.image} 
                    alt={director.name}
                    className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105 relative z-10"
                  />
                  <h4 className="font-display text-lg font-semibold text-foreground relative z-10">
                    {director.name}
                  </h4>
                  <p className="text-primary text-sm relative z-10">{director.role}</p>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border">
              Our team includes volunteers, community partners, and social workers who support our programs and outreach activities.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Identity */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-rose-50/30 to-accent/10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-gold/5" />
        
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <Sparkles className="absolute bottom-24 left-20 w-4 h-4 text-primary/30 animate-twinkle" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary/10">
                <Award className="w-4 h-4" />
                Registered NGO
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Legal <span className="text-gradient">Identity</span>
              </h2>
              <p className="text-muted-foreground">
                Awdorg Foundation is officially registered and operates with full compliance.
              </p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border">
              <div className="space-y-4">
                {legalInfo.map((info, index) => (
                  <div key={index} className="group flex flex-col sm:flex-row sm:items-center gap-2 py-3 border-b border-border last:border-0 hover:bg-gradient-to-r hover:from-secondary/50 hover:to-transparent rounded-lg px-2 transition-all duration-300">
                    <span className="font-semibold text-foreground min-w-[200px]">{info.label}:</span>
                    <span className="text-muted-foreground">{info.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-primary font-medium mt-8 text-center">
                We maintain transparency in all operations, reporting, and governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-rose-dark" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary-glow/30" />
        
        {/* Decorative elements */}
        <div className="absolute top-6 left-6 w-20 h-20 bg-primary-foreground/10 rounded-full animate-float" />
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-accent/20 rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-10 w-8 h-8 bg-primary-foreground/5 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-10 w-6 h-6 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        
        <Sparkles className="absolute top-16 right-20 w-5 h-5 text-accent/60 animate-pulse" />
        <Sparkles className="absolute bottom-20 left-16 w-4 h-4 text-primary-foreground/40 animate-pulse" style={{ animationDelay: '0.3s' }} />
        
        {/* Animated rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary-foreground/5 rounded-full animate-rotate-slow" style={{ animationDuration: '40s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary-foreground/5 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '50s' }} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-foreground/10">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Join Our Mission
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Together, we can create a safer and more empowering world for women.
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Your support makes a difference in the lives of women across India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg glow-accent group">
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Donate Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm group">
              <Link to="/volunteer">
                <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Become a Volunteer
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
