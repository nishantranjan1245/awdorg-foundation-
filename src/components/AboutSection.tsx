import { Shield, Award, FileCheck, MapPin, Heart, Users, Target, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-women-skills.png";

const AboutSection = () => {
  const stats = [
    { icon: Heart, value: "5+", label: "Years of Service" },
    { icon: Users, value: "1000+", label: "Lives Touched" },
    { icon: Target, value: "5", label: "Core Programs" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-rose-50/50 to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-gold/10" />
      
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-rose-light/30 via-transparent to-transparent rounded-full" />
      
      {/* Decorative patterns */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/10 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-accent/10 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-light to-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-right shadow-lg">
                <Heart className="w-4 h-4 animate-pulse" />
                About Us
              </div>

              {/* Heading */}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                About <span className="text-gradient">Awdorg Foundation</span>
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                <span className="font-semibold text-foreground">Awdorg Foundation</span> is a registered non-profit organization dedicated to strengthening women through safety awareness, crisis support, livelihood assistance, and empowerment activities.
              </p>

              {/* Quote */}
              <div className="border-l-4 border-primary pl-4 mb-8 bg-gradient-to-r from-rose-light/50 to-transparent py-3 pr-4 rounded-r-xl">
                <p className="text-foreground italic">
                  "Our goal is to help women live safer, more independent, and dignified lives."
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1 card-hover gradient-border"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-light to-primary/30 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <FileCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">CIN</div>
                  <div className="text-sm font-semibold text-foreground truncate">U85300DL2020NPL367989</div>
                </div>
                <div className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-light to-accent/30 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">FCRA</div>
                  <div className="text-sm font-semibold text-foreground">231662112</div>
                </div>
                <div className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Status</div>
                  <div className="text-sm font-semibold text-foreground">Registered Non-Profit</div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gradient-to-r from-secondary/80 to-secondary/40 rounded-2xl p-4 mb-8 border border-border/50 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Registered Office</div>
                    <div className="text-sm text-muted-foreground">K-66/B, Kalkaji, New Delhi – 110019</div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Link to="/about">
                <Button size="lg" className="bg-gradient-to-r from-primary to-rose-dark hover:from-primary/90 hover:to-rose-dark/90 shadow-lg rounded-full group glow-primary">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Right Image Card */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float-slow">
                {/* Main Image */}
                <img 
                  src={aboutImage} 
                  alt="Women learning skills" 
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                
                {/* Decorative frame */}
                <div className="absolute inset-4 border-2 border-primary-foreground/20 rounded-2xl" />
                
                {/* Sparkles */}
                <Sparkles className="absolute top-8 right-8 w-6 h-6 text-accent animate-pulse" />
                <Sparkles className="absolute bottom-20 left-8 w-4 h-4 text-primary-foreground/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-gold text-accent-foreground px-6 py-4 rounded-2xl shadow-xl animate-float glow-accent">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs">Years</div>
                </div>
                
                <div className="absolute bottom-8 -right-4 bg-card text-foreground px-4 py-2 rounded-full shadow-lg border border-border animate-float" style={{ animationDelay: '0.5s' }}>
                  <span className="text-primary font-medium text-sm">Making Impact</span>
                </div>
                
                <div className="absolute -bottom-4 left-8 bg-card rounded-2xl p-4 shadow-xl border border-border animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-light to-primary/30 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">1000+</div>
                      <div className="text-xs text-muted-foreground">Women Empowered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
