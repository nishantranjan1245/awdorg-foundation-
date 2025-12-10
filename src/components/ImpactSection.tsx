import { Users, Package, Shield, Laptop, TrendingUp, Sparkles } from "lucide-react";

const ImpactSection = () => {
  const impacts = [
    {
      icon: Users,
      number: "1,000+",
      title: "Women Supported",
      description: "Through safety and self-reliance programs",
      iconBg: "bg-gradient-to-br from-primary to-rose-dark",
    },
    {
      icon: Package,
      number: "500+",
      title: "Safety Kits",
      description: "Distributed across communities",
      iconBg: "bg-gradient-to-br from-teal to-emerald-600",
    },
    {
      icon: Shield,
      number: "50+",
      title: "Crisis Cases",
      description: "Assisted through Awdorg Shield",
      iconBg: "bg-gradient-to-br from-gold to-amber-600",
    },
    {
      icon: Laptop,
      number: "200+",
      title: "Cyber Safety",
      description: "Guidance provided to women",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary via-primary to-rose-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-float-reverse" />
        <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-primary-foreground/5 rounded-full blur-xl animate-pulse-glow" />
        
        {/* Small floating dots */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 right-1/5 w-2 h-2 bg-accent/60 rounded-full animate-twinkle" />
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary-foreground/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-accent/30 to-transparent" />
      </div>
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-background rounded-t-[50%]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 animate-slide-down">
              <TrendingUp className="w-4 h-4" />
              Our Impact
            </span>
          </div>

          {/* Title */}
          <div className="text-center mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Impact <span className="text-accent">Highlights</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-white/80 text-center max-w-xl mx-auto mb-12">
            Numbers that reflect our unwavering commitment to creating positive change in women's lives.
          </p>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="group bg-card/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700" />
                </div>
                
                <div className={`w-14 h-14 ${impact.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg relative z-10`}>
                  <impact.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-accent mb-1 relative z-10">{impact.number}</div>
                <div className="text-foreground font-semibold text-sm mb-1 relative z-10">{impact.title}</div>
                <p className="text-muted-foreground text-xs leading-relaxed relative z-10">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-white/80 text-sm">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <p>Every number represents a life touched, a woman empowered, a community strengthened.</p>
              <Sparkles className="w-4 h-4 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
