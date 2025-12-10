import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Package, Award, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-women-empowerment-new.png";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "1000+", label: "Women Supported" },
    { icon: Package, value: "50+", label: "Safety Kits" },
    { icon: Award, value: "25+", label: "Communities" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Women empowerment background" 
          className="w-full h-full object-cover object-center scale-110 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
        />
        {/* Multi-layer gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-rose-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 via-transparent to-primary-glow/40" />
        
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--accent)/0.4)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,hsl(var(--primary-glow)/0.5)_0%,transparent_50%)] animate-[pulse_8s_ease-in-out_infinite]" />
        
        {/* Moving gradient waves */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--accent)/0.5)_0%,transparent_40%)] animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--primary-glow)/0.6)_0%,transparent_40%)] animate-[float_8s_ease-in-out_infinite_reverse]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold)/0.3)_0%,transparent_35%)] animate-[pulse_10s_ease-in-out_infinite]" />
        </div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
      </div>
      
      {/* Top decorative border with animated glow */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent z-20 animate-[shimmer_3s_ease-in-out_infinite]" />
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-accent/20 to-transparent z-20 blur-sm" />
      
      {/* Animated geometric patterns at top */}
      <div className="absolute top-0 left-0 right-0 h-64 z-[5] overflow-hidden">
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, hsl(var(--primary-foreground)) 30px, hsl(var(--primary-foreground)) 31px)',
          }} />
        </div>
        
        {/* Animated corner decorations with glow */}
        <div className="absolute top-4 left-4 w-32 h-32">
          <div className="absolute inset-0 border-l-2 border-t-2 border-accent/60 animate-pulse" />
          <div className="absolute top-2 left-2 w-4 h-4 bg-accent/40 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
        </div>
        <div className="absolute top-4 right-4 w-32 h-32">
          <div className="absolute inset-0 border-r-2 border-t-2 border-accent/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-2 right-2 w-4 h-4 bg-accent/40 rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />
        </div>
        
        {/* Floating diamonds with glow trails */}
        <div className="absolute top-8 left-[15%] w-5 h-5 bg-accent/50 rotate-45 animate-float shadow-lg shadow-accent/30" />
        <div className="absolute top-12 left-[25%] w-4 h-4 bg-primary-foreground/40 rotate-45 animate-float" style={{ animationDelay: '0.3s' }} />
        <div className="absolute top-6 right-[20%] w-6 h-6 bg-accent/40 rotate-45 animate-float-reverse shadow-lg shadow-accent/20" />
        <div className="absolute top-16 right-[30%] w-4 h-4 bg-primary-foreground/50 rotate-45 animate-float" style={{ animationDelay: '0.6s' }} />
        
        {/* Horizontal decorative line with enhanced glow */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent blur-md" />
        
        {/* Floating stars */}
        <Star className="absolute top-10 left-[35%] w-4 h-4 text-accent/50 animate-[twinkle_2s_ease-in-out_infinite] fill-accent/30" />
        <Star className="absolute top-20 right-[25%] w-3 h-3 text-primary-foreground/40 animate-[twinkle_2.5s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
        <Star className="absolute top-14 left-[50%] w-5 h-5 text-gold/50 animate-[twinkle_3s_ease-in-out_infinite] fill-gold/20" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        {/* Large floating light orbs with enhanced glow */}
        <div className="absolute top-20 left-[10%] w-40 h-40 bg-accent/40 rounded-full blur-[80px] animate-float-slow" />
        <div className="absolute bottom-40 right-[15%] w-56 h-56 bg-primary-foreground/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-1/2 left-[5%] w-32 h-32 bg-primary-glow/30 rounded-full blur-[60px] animate-float-reverse" />
        <div className="absolute top-1/4 right-[8%] w-44 h-44 bg-accent/25 rounded-full blur-[90px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-[25%] w-36 h-36 bg-gold/20 rounded-full blur-[70px] animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Sparkle particles */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary-foreground rounded-full animate-twinkle"
            style={{ 
              top: `${15 + Math.random() * 70}%`, 
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${1.5 + Math.random()}s`
            }} 
          />
        ))}
        
        {/* Accent sparkle dots */}
        <div className="absolute top-1/4 left-[20%] w-2.5 h-2.5 bg-accent rounded-full animate-twinkle shadow-lg shadow-accent/50" />
        <div className="absolute top-[35%] right-[25%] w-3 h-3 bg-accent rounded-full animate-twinkle shadow-lg shadow-accent/50" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-[40%] w-2 h-2 bg-gold rounded-full animate-twinkle shadow-lg shadow-gold/50" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[60%] right-[10%] w-2.5 h-2.5 bg-accent rounded-full animate-twinkle shadow-lg shadow-accent/50" style={{ animationDelay: '1.5s' }} />
        
        {/* Animated rings with glow */}
        <div className="absolute top-32 right-[20%] w-24 h-24 border-2 border-primary-foreground/25 rounded-full animate-rotate-slow shadow-lg shadow-primary-foreground/10" />
        <div className="absolute bottom-48 left-[15%] w-32 h-32 border-2 border-accent/20 rounded-full animate-rotate-slow shadow-lg shadow-accent/10" style={{ animationDirection: 'reverse' }} />
        <div className="absolute top-40 left-[25%] w-20 h-20 border border-gold/25 rounded-full animate-rotate-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-[30%] w-16 h-16 border border-primary-foreground/20 rounded-full animate-rotate-slow" style={{ animationDelay: '0.5s', animationDirection: 'reverse' }} />
        
        {/* Light beams with enhanced glow */}
        <div className="absolute top-0 left-1/4 w-0.5 h-[45%] bg-gradient-to-b from-primary-foreground/30 via-primary-foreground/10 to-transparent animate-shimmer blur-[1px]" />
        <div className="absolute top-0 right-1/3 w-0.5 h-[35%] bg-gradient-to-b from-accent/40 via-accent/15 to-transparent animate-shimmer blur-[1px]" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-0 left-[40%] w-0.5 h-[30%] bg-gradient-to-b from-gold/30 via-gold/10 to-transparent animate-shimmer blur-[1px]" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 right-[45%] w-0.5 h-[40%] bg-gradient-to-b from-accent/35 via-accent/10 to-transparent animate-shimmer blur-[1px]" style={{ animationDelay: '0.8s' }} />
        
        {/* Side decorative lines with dots */}
        <div className="absolute left-8 top-1/4 w-0.5 h-40 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
        <div className="absolute left-8 top-[calc(25%+20px)] w-2 h-2 bg-accent/60 rounded-full animate-pulse" />
        <div className="absolute right-8 top-1/3 w-0.5 h-48 bg-gradient-to-b from-transparent via-primary-foreground/40 to-transparent" />
        <div className="absolute right-8 top-[calc(33%+24px)] w-2 h-2 bg-primary-foreground/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Circular pulse decorations */}
        <div className="absolute top-1/3 left-12 w-3 h-3 rounded-full bg-accent/70 animate-pulse shadow-lg shadow-accent/50" />
        <div className="absolute top-1/3 left-12 w-8 h-8 rounded-full border-2 border-accent/40 animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute bottom-1/3 right-12 w-3 h-3 rounded-full bg-primary-foreground/70 animate-pulse shadow-lg shadow-primary-foreground/50" />
        <div className="absolute bottom-1/3 right-12 w-8 h-8 rounded-full border-2 border-primary-foreground/40 animate-ping" style={{ animationDuration: '2.5s' }} />
        
        {/* Hexagon pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated badge with enhanced styling */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-xl text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium mb-8 animate-slide-down border border-primary-foreground/25 shadow-2xl shadow-primary/30 hover:bg-primary-foreground/25 transition-all duration-300 group">
            <Sparkles className="w-4 h-4 animate-pulse text-accent group-hover:animate-spin" />
            <span className="tracking-wide">Empowering Women Since 2020</span>
            <Sparkles className="w-4 h-4 animate-pulse text-accent group-hover:animate-spin" style={{ animationDelay: '0.5s' }} />
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-slide-up drop-shadow-2xl relative">
            <span className="bg-gradient-to-r from-primary-foreground via-accent via-gold to-primary-foreground bg-clip-text text-transparent bg-[length:300%_auto] animate-gradient-x">
              Awdorg Foundation
            </span>
            {/* Glow effect behind title */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-gold/20 to-accent/20 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '3s' }} />
          </h1>

          <p className="text-2xl md:text-3xl text-primary-foreground font-medium mb-4 animate-slide-up drop-shadow-lg tracking-wide" style={{ animationDelay: '0.1s' }}>
            Empowering Women with Safety, Support & Self-Reliance
          </p>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-12 animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            We work to support women through safety initiatives, self-reliance programs, and community-driven empowerment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/donate">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-2xl hover:shadow-[0_0_40px_rgba(255,193,7,0.5)] transition-all duration-500 group px-10 py-7 text-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse relative z-10" />
                <span className="relative z-10">Donate Now</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-xl group px-10 py-7 text-lg shadow-2xl hover:border-primary-foreground transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Shield className="w-5 h-5 mr-2 group-hover:animate-wiggle relative z-10" />
                <span className="relative z-10">Get Help</span>
              </Button>
            </Link>
          </div>

          {/* Stats Cards with enhanced glass effect */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-primary-foreground/10 backdrop-blur-2xl rounded-2xl p-5 md:p-6 border border-primary-foreground/25 hover:bg-primary-foreground/25 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-scale-in relative overflow-hidden"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-accent/25 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-accent/20">
                  <stat.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1 group-hover:scale-105 transition-transform">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-9 h-14 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2.5 backdrop-blur-sm bg-primary-foreground/5 shadow-lg">
          <div className="w-1.5 h-4 bg-accent rounded-full animate-scroll-indicator" />
        </div>
      </div>

      {/* Multi-layer wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Back wave */}
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full absolute bottom-2 opacity-50">
          <path d="M0 120L48 115C96 110 192 100 288 85C384 70 480 50 576 50C672 50 768 70 864 80C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="hsl(var(--primary-glow)/0.3)" />
        </svg>
        {/* Front wave */}
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full relative">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(30 50% 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
