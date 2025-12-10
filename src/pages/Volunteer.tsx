import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Users, Calendar, Package, MessageCircle, Share2, Megaphone, CheckCircle, Clock, GraduationCap, Briefcase, Home, UserCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-volunteer.png";
import aboutImage from "@/assets/volunteer-about.png";
import whoCanJoinImage from "@/assets/volunteer-who-can-join.png";
import rolesImage from "@/assets/volunteer-roles.png";
import gettingStartedImage from "@/assets/volunteer-getting-started.png";
import usePageTitle from "@/hooks/usePageTitle";

const Volunteer = () => {
  usePageTitle("Volunteer - Awdorg Foundation");
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you soon.",
    });
    setFormData({ name: "", email: "", phone: "", city: "", message: "" });
  };

  const whyVolunteer = [
    "Support women in vulnerable situations",
    "Contribute to safety and empowerment initiatives",
    "Make a positive impact in local communities",
    "Learn and grow through meaningful experiences",
    "Become part of a dedicated and compassionate team",
  ];

  const volunteerRoles = [
    {
      icon: Package,
      title: "Safety Kit Distribution Volunteer",
      description: "Help distribute women's safety kits in communities, schools, workplaces, and public areas.",
    },
    {
      icon: Users,
      title: "Community Outreach Volunteer",
      description: "Engage with communities, participate in awareness drives, and help spread safety information.",
    },
    {
      icon: MessageCircle,
      title: "Crisis Support Volunteer",
      description: "Assist our team during awareness events and help guide women on how to seek support in unsafe situations. (Non-medical and non-legal guidance only.)",
    },
    {
      icon: Share2,
      title: "Digital & Social Media Volunteer",
      description: "Help us spread awareness online through content, posts, and digital support for women safety campaigns.",
    },
    {
      icon: Megaphone,
      title: "Event & Campaign Volunteer",
      description: "Participate in fundraising activities, public events, and community sessions to support Awdorg programs.",
    },
  ];

  const whoCanVolunteer = [
    { icon: GraduationCap, text: "Students" },
    { icon: Briefcase, text: "Working professionals" },
    { icon: Home, text: "Homemakers" },
    { icon: UserCheck, text: "Retirees" },
    { icon: Users, text: "Community members" },
    { icon: Heart, text: "Youth groups" },
  ];

  const timeCommitment = [
    "Part-time volunteering",
    "Event-based volunteering",
    "Regular weekly or monthly support",
  ];

  const howToStart = [
    "Fill out the volunteer form",
    "Our team will reach out to you",
    "You will be assigned to a suitable role or event",
    "Training or orientation will be provided (if required)",
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
            alt="Become a Volunteer" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 w-36 h-36 bg-accent/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-44 h-44 bg-primary-foreground/10 rounded-full blur-3xl float-slow" />
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-24 text-primary-foreground/40 float-slow">
          <Heart className="w-10 h-10" />
        </div>
        <div className="absolute bottom-36 left-24 text-accent/50 float-medium">
          <Users className="w-8 h-8" />
        </div>
        <div className="absolute top-1/2 right-1/3 text-primary-foreground/30 float-fast">
          <Sparkles className="w-6 h-6" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in border border-primary-foreground/30">
              <Heart className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Become a <span className="text-accent">Volunteer</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Make a Real Difference in Women's Lives
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

      {/* About Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={aboutImage} 
                  alt="Volunteers helping women" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Volunteers are at the heart of Awdorg Foundation's mission. Your time, skills, and compassion can help women feel safer, stronger, and more independent.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By joining us as a volunteer, you become a part of a movement that is creating safer communities and empowering women across different backgrounds.
                </p>
                <p className="text-primary font-semibold">
                  Together, we can bring hope, support, and change where it's needed the most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 text-primary/20 float-slow">
          <Sparkles className="w-10 h-10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Volunteer With Us?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Volunteering with Awdorg Foundation allows you to:
              </p>
              <ul className="space-y-4">
                {whyVolunteer.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-card/50 p-3 rounded-xl border border-border/30">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold mt-6">
                Every volunteer plays a vital role in building a safer world for women.
              </p>
            </div>
            <div className="bg-gradient-hero rounded-3xl p-12 text-center animate-fade-in animation-delay-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 border border-primary-foreground/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/20 rounded-full blur-xl" />
              <Users className="w-24 h-24 text-primary-foreground mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                Join Our Team
              </h3>
              <p className="text-primary-foreground/80">
                Be part of a compassionate community making real change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Volunteer Roles
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Volunteers can choose roles based on their skills, comfort, and availability
            </p>
            <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={rolesImage} 
                  alt="Volunteers distributing safety kits" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="space-y-4">
                {volunteerRoles.slice(0, 3).map((role, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-primary transition-all duration-300 animate-fade-in border border-border/50 hover:border-primary/30 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <role.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {index + 1}. {role.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm ml-16">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {volunteerRoles.slice(3).map((role, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-primary transition-all duration-300 animate-fade-in border border-border/50 hover:border-primary/30 group"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <role.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {index + 4}. {role.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Volunteer */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute top-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Who Can Volunteer?
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Anyone who wants to contribute to women's welfare can join us. No specific experience required—only willingness to help.
            </p>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {whoCanVolunteer.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-4 text-center shadow-soft animate-fade-in border border-border/50 hover:border-primary/30 transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={whoCanJoinImage} 
                  alt="Diverse volunteers" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Commitment & How to Start */}
      <section className="py-20 relative">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={gettingStartedImage} 
                  alt="Volunteer training session" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="space-y-6">
                {/* Time Commitment */}
                <div className="bg-card rounded-3xl p-6 shadow-soft border border-border/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Time Commitment
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Volunteers can choose flexible participation:
                  </p>
                  <ul className="space-y-2">
                    {timeCommitment.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-secondary/30 transition-colors">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to Get Started */}
                <div className="bg-card rounded-3xl p-6 shadow-soft border border-border/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      How to Get Started
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {howToStart.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-secondary/30 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Join Us Today
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Your involvement can support women in becoming safer, stronger, and more self-reliant. Volunteer with Awdorg Foundation and make a lasting difference in someone's life.
            </p>
            <div className="bg-card rounded-3xl p-8 shadow-soft animate-fade-in border border-border/50">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
                Become a Volunteer
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Why do you want to volunteer?</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full shadow-gold">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;