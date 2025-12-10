import { Briefcase, Package, Shield, Wifi, Users, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Briefcase,
      title: "Women Skill & Self-Reliance Fund",
      description: "Supports women with livelihood materials, small tools, and independence-focused assistance.",
      link: "/programs/skill-fund",
      iconBg: "bg-gradient-to-br from-primary to-rose-dark",
      badge: "Most Popular",
      badgeColor: "bg-gradient-to-r from-primary to-rose-dark text-white",
    },
    {
      icon: Package,
      title: "Women Safety Kit Drive",
      description: "Provides personal safety kits including torch, whistle, and emergency information.",
      link: "/programs/safety-kit",
      iconBg: "bg-gradient-to-br from-accent to-amber-500",
    },
    {
      icon: Shield,
      title: "Awdorg Shield – Crisis Support",
      description: "Helps women in unsafe situations with immediate guidance, support, and referrals.",
      link: "/programs/crisis-support",
      iconBg: "bg-gradient-to-br from-gold to-amber-600",
      badge: "Emergency",
      badgeColor: "bg-gradient-to-r from-gold to-amber-600 text-white",
    },
    {
      icon: Wifi,
      title: "CyberSafe Women Initiative",
      description: "Provides awareness and digital safety assistance to protect women online.",
      link: "/programs/cybersafe",
      iconBg: "bg-gradient-to-br from-teal to-emerald-600",
    },
    {
      icon: Users,
      title: "Community Safety Awareness",
      description: "Running awareness drives in local communities to create safer environments for women through education.",
      link: "/programs/community-awareness",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    },
  ];

  return (
    <section id="programs" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-50/50 via-transparent to-gold/5" />
      
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-rose-light/20 via-transparent to-transparent rounded-full" />
      
      {/* Decorative elements */}
      <div className="absolute top-32 right-16 w-3 h-3 bg-primary/40 rounded-full animate-twinkle" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent/50 rounded-full animate-twinkle" style={{ animationDelay: '0.3s' }} />
      <Sparkles className="absolute top-40 left-1/4 w-5 h-5 text-primary/20 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-primary/10">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Our Programs
            </span>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Programs That <span className="text-gradient">Transform</span> Lives
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our carefully designed programs address the diverse needs of women across communities, providing practical support and lasting change.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {programs.slice(0, 3).map((program, index) => (
              <div
                key={index}
                className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-2xl transition-all duration-500 relative overflow-hidden hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700" />
                </div>
                
                {/* Decorative background gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                
                {program.badge && (
                  <span className={`absolute top-4 right-4 ${program.badgeColor} px-3 py-1 rounded-full text-xs font-medium shadow-lg`}>
                    {program.badge}
                  </span>
                )}
                <div className={`w-12 h-12 ${program.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg relative z-10`}>
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 relative z-10">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed relative z-10">
                  {program.description}
                </p>
                <Link to={program.link} className="relative z-10">
                  <Button variant="outline" size="sm" className="group/btn border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            {programs.slice(3).map((program, index) => (
              <div
                key={index}
                className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-2xl transition-all duration-500 relative overflow-hidden hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700" />
                </div>
                
                <div className={`w-12 h-12 ${program.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {program.description}
                </p>
                <Link to={program.link}>
                  <Button variant="outline" size="sm" className="group/btn border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/programs">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white group glow-primary">
                View All Programs
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
