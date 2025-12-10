import { Check, Sparkles, ArrowRight } from "lucide-react";
import howWeHelpImage from "@/assets/how-we-help-image.png";

const HowWeHelpSection = () => {
  const helpItems = [
    "Distributing women's safety kits",
    "Offering livelihood support for self-reliance",
    "Providing guidance during emergencies",
    "Running awareness drives in local communities",
    "Supporting women facing harassment or unsafe situations",
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-accent/10 to-rose-50/50" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-gold/10" />
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
      
      {/* Decorative elements */}
      <Sparkles className="absolute top-20 right-1/4 w-5 h-5 text-primary/30 animate-twinkle" />
      <Sparkles className="absolute bottom-24 left-1/3 w-4 h-4 text-accent/40 animate-twinkle" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-16 w-3 h-3 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-primary/10">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Our Approach
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              How We <span className="text-gradient">Help</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative hidden lg:block animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={howWeHelpImage} 
                  alt="Community awareness session" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                
                {/* Decorative frame */}
                <div className="absolute inset-3 border-2 border-primary-foreground/20 rounded-2xl" />
                
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg animate-float">
                  <div className="text-sm font-semibold text-foreground">Community Outreach</div>
                  <div className="text-xs text-muted-foreground">25+ neighborhoods</div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl" />
            </div>
            
            {/* Content */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border shadow-xl relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-4 relative z-10">
                {helpItems.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-4 bg-gradient-to-r from-secondary/80 to-secondary/40 rounded-2xl hover:from-primary/10 hover:to-accent/5 transition-all duration-500 hover:-translate-x-1 hover:shadow-lg cursor-default animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-rose-dark flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium flex-1">{item}</span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
