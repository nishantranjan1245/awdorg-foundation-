import { Shield, Heart, AlertTriangle, Laptop, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FocusAreasSection = () => {
  const focusAreas = [
    {
      icon: Shield,
      title: "Women Safety",
      description: "Awareness, safety practices, and protective support for vulnerable women.",
      link: "/programs/safety-kit",
      bgColor: "bg-gradient-to-br from-rose-100 to-rose-50",
      iconBg: "bg-gradient-to-br from-primary to-rose-dark",
      hoverGlow: "hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.3)]",
    },
    {
      icon: Heart,
      title: "Self-Reliance",
      description: "Practical assistance that helps women move towards independence and dignity.",
      link: "/programs/skill-fund",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      iconBg: "bg-gradient-to-br from-accent to-amber-500",
      hoverGlow: "hover:shadow-[0_20px_50px_-12px_hsl(var(--accent)/0.3)]",
    },
    {
      icon: AlertTriangle,
      title: "Crisis Support",
      description: "Immediate help and guidance through the Awdorg Shield program.",
      link: "/programs/crisis-support",
      bgColor: "bg-gradient-to-br from-amber-100 to-yellow-50",
      iconBg: "bg-gradient-to-br from-gold to-amber-600",
      hoverGlow: "hover:shadow-[0_20px_50px_-12px_hsl(var(--gold)/0.3)]",
    },
    {
      icon: Laptop,
      title: "Cyber Safety",
      description: "Support to protect women from online harassment and digital threats.",
      link: "/programs/cybersafe",
      bgColor: "bg-gradient-to-br from-gray-100 to-slate-50",
      iconBg: "bg-gradient-to-br from-slate-600 to-slate-800",
      hoverGlow: "hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)]",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-rose-50/30 to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-gold/5" />
      
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
      
      {/* Animated sparkles */}
      <Sparkles className="absolute top-20 right-20 w-6 h-6 text-primary/30 animate-twinkle" />
      <Sparkles className="absolute bottom-32 left-16 w-4 h-4 text-accent/40 animate-twinkle" style={{ animationDelay: '0.5s' }} />
      
      {/* Decorative lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-accent/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-slide-down backdrop-blur-sm border border-primary/10">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              What We Do
            </span>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Focus</span> Areas
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We concentrate our efforts on four key areas to create meaningful and lasting impact in women's lives across India.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <Link
                to={area.link}
                key={index}
                className={`${area.bgColor} rounded-2xl p-6 transition-all duration-500 group block hover:-translate-y-2 ${area.hoverGlow} relative overflow-hidden animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shine effect overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700" />
                </div>
                
                <div className={`w-14 h-14 ${area.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
