import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ctaImage from "@/assets/cta-unity-image.png";

const CTASection = () => {
  return (
    <section id="volunteer" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-rose-50/50 to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-gold/5" />
      
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={ctaImage} 
                alt="Women unity" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-rose-dark/90" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/40" />
            </div>
            
            <div className="relative p-10 md:p-16 text-center">
              {/* Animated decorative elements */}
              <div className="absolute top-6 left-6 w-20 h-20 bg-primary-foreground/10 rounded-full animate-float" />
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-accent/20 rounded-full animate-float-slow" />
              <div className="absolute top-1/2 right-10 w-8 h-8 bg-primary-foreground/5 rounded-full animate-pulse" />
              <div className="absolute bottom-1/3 left-10 w-6 h-6 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
              
              {/* Sparkles */}
              <Sparkles className="absolute top-16 right-20 w-5 h-5 text-accent/60 animate-pulse" />
              <Sparkles className="absolute bottom-20 left-16 w-4 h-4 text-primary-foreground/40 animate-pulse" style={{ animationDelay: '0.3s' }} />
              
              {/* Animated rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary-foreground/5 rounded-full animate-rotate-slow" style={{ animationDuration: '40s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary-foreground/5 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '50s' }} />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-foreground/10">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  Join Our Mission
                </div>
                
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                  Your support can help women feel safer, stronger, and more independent.
                </h2>

                <p className="text-lg text-primary-foreground/85 mb-10 max-w-2xl mx-auto">
                  Join us in creating a safer world for women.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/donate">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all group glow-accent">
                      <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Donate Now
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Button>
                  </Link>
                  <Link to="/volunteer">
                    <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 group backdrop-blur-sm">
                      <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Volunteer
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 group backdrop-blur-sm">
                      <Shield className="w-5 h-5 mr-2 group-hover:animate-wiggle" />
                      Get Help
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
