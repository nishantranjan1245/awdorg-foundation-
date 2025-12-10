import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import awdorgIcon from "@/assets/icon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programs = [
    { name: "Women Skill & Self-Reliance Fund", href: "/programs/skill-fund", icon: "💪" },
    { name: "Women Safety Kit Drive", href: "/programs/safety-kit", icon: "🛡️" },
    { name: "Awdorg Shield (Crisis Support)", href: "/programs/crisis-support", icon: "🆘" },
    { name: "CyberSafe Women Initiative", href: "/programs/cybersafe", icon: "🔒" },
    { name: "Community Safety Awareness", href: "/programs/community-awareness", icon: "🏘️" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white backdrop-blur-xl border-b border-border/20 shadow-lg shadow-black/5" 
          : "bg-white backdrop-blur-md border-b border-border/10"
      )}
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group relative">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={awdorgIcon} 
                alt="Awdorg Foundation" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm sm:text-xl font-bold text-primary">
                Awdorg Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={cn(
                  "relative px-4 py-2 font-semibold transition-all duration-300 group",
                  isActive(link.href) 
                    ? "text-primary" 
                    : "text-foreground/70 hover:text-primary"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Hover background */}
                <span className={cn(
                  "absolute inset-0 rounded-lg bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300",
                  isActive(link.href) && "scale-100 bg-primary/15"
                )} />
                {/* Active indicator */}
                <span className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-300",
                  isActive(link.href) ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                )} />
              </Link>
            ))}

            {/* Programs Dropdown */}
            <div 
              className="relative group" 
              onMouseEnter={() => setIsProgramsOpen(true)} 
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <Link 
                to="/programs" 
                className={cn(
                  "relative px-4 py-2 font-semibold transition-all duration-300 flex items-center gap-1 group/trigger",
                  isActive("/programs") 
                    ? "text-primary" 
                    : "text-foreground/70 hover:text-primary"
                )}
              >
                <span className="relative z-10">Programs</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-300 text-primary", 
                  isProgramsOpen && "rotate-180"
                )} />
                <span className={cn(
                  "absolute inset-0 rounded-lg bg-primary/10 scale-0 group-hover/trigger:scale-100 transition-transform duration-300",
                  isActive("/programs") && "scale-100 bg-primary/15"
                )} />
              </Link>
              
              {/* Dropdown Menu */}
              <div className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 transition-all duration-300 z-50",
                isProgramsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
              )}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {programs.map((program) => (
                    <Link 
                      key={program.name} 
                      to={program.href} 
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                    >
                      {program.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={cn(
                  "relative px-4 py-2 font-semibold transition-all duration-300 group",
                  isActive(link.href) 
                    ? "text-primary" 
                    : "text-foreground/70 hover:text-primary"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                <span className={cn(
                  "absolute inset-0 rounded-lg bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300",
                  isActive(link.href) && "scale-100 bg-primary/15"
                )} />
                <span className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-300",
                  isActive(link.href) ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                )} />
              </Link>
            ))}
          </nav>

          {/* Donate Button */}
          <div className="hidden lg:block">
            <Button 
              asChild 
              className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] hover:bg-[position:right_center] text-primary-foreground font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 group"
            >
              <Link to="/donate" className="flex items-center gap-2">
                <span className="relative z-10">Donate Now</span>
                <span className="relative z-10 text-lg group-hover:animate-pulse">❤️</span>
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden relative p-2 rounded-xl hover:bg-primary/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={cn(
                "absolute inset-0 w-6 h-6 transition-all duration-300 text-primary",
                isMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
              )} />
              <X className={cn(
                "absolute inset-0 w-6 h-6 transition-all duration-300 text-primary",
                isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMenuOpen ? "max-h-[600px] pb-6" : "max-h-0"
        )}>
          <div className="relative pt-4">
            {/* Mobile menu decorative line */}
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <nav className="flex flex-col gap-2">
              {navLinks.slice(0, 2).map((link, index) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={cn(
                    "px-4 py-3 rounded-xl font-semibold transition-all duration-300",
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Programs Dropdown */}
              <div>
                <button 
                  className={cn(
                    "w-full px-4 py-3 font-semibold transition-all duration-300 flex items-center justify-between rounded-xl",
                    isActive("/programs")
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                  onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                >
                  <span>Programs</span>
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform duration-300 text-primary", 
                    isProgramsOpen && "rotate-180"
                  )} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-500",
                  isProgramsOpen ? "max-h-96 mt-2" : "max-h-0"
                )}>
                  <div className="ml-4 pl-4 border-l-2 border-primary/20 space-y-1">
                    {programs.map((program, index) => (
                      <Link 
                        key={program.name} 
                        to={program.href} 
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <span>{program.icon}</span>
                        <span>{program.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {navLinks.slice(2).map((link, index) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={cn(
                    "px-4 py-3 rounded-xl font-semibold transition-all duration-300",
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${(index + 3) * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Donate Button */}
              <div className="mt-4 px-4">
                <Button 
                  asChild 
                  className="w-full relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] text-primary-foreground font-semibold py-3 rounded-full shadow-lg shadow-primary/25"
                >
                  <Link to="/donate" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                    <span>Donate Now</span>
                    <span className="text-lg">❤️</span>
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
