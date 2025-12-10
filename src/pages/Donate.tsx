import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Shield, Package, Users, Wifi, CheckCircle, CreditCard, Smartphone, Building, Calendar, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-donate.png";
import aboutImage from "@/assets/donate-about.png";
import impactImage from "@/assets/donate-impact.png";
import howUsedImage from "@/assets/donate-how-used.png";
import usePageTitle from "@/hooks/usePageTitle";

const Donate = () => {
  usePageTitle("Donate - Awdorg Foundation");
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
  });

  const amounts = [500, 1000, 1500, 2500, 5000, 10000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank You!",
      description: "Your donation means the world to us. We'll send you a confirmation shortly.",
    });
  };

  const whyDonate = [
    "Provide safety kits to women in risk-prone areas",
    "Support women to become self-reliant",
    "Assist women in crisis through Awdorg Shield",
    "Promote cyber safety awareness",
    "Support community-level safety and empowerment activities",
  ];

  const donationOptions = [
    {
      icon: CreditCard,
      title: "One-Time Donation",
      description: "Make a single contribution to support our ongoing programs and outreach.",
    },
    {
      icon: Package,
      title: "Sponsor a Women Safety Kit",
      amount: "₹500 per kit",
      description: "Provides a woman with essential tools such as a whistle, torch, and emergency contact card.",
    },
    {
      icon: Heart,
      title: "Support the Women Skill & Self-Reliance Fund",
      amount: "₹1,500 – ₹5,000",
      description: "Helps women receive basic materials or tools to move toward independence.",
    },
    {
      icon: Calendar,
      title: "Monthly Supporter",
      description: "Become a monthly contributor to continuously support safety and empowerment programs.",
    },
    {
      icon: Users,
      title: "General Support Contribution",
      description: "Help us expand our programs, strengthen outreach, and reach more women in need.",
    },
  ];

  const howUsed = [
    "Safety kits and awareness materials",
    "Livelihood and self-reliance assistance",
    "Crisis support for women facing emergencies",
    "Digital & community safety programs",
    "Ground-level outreach activities",
  ];

  const paymentMethods = [
    { icon: CreditCard, text: "Online Payment" },
    { icon: Smartphone, text: "UPI / QR Code" },
    { icon: Building, text: "Bank Transfer" },
    { icon: Calendar, text: "Monthly Auto-Debit Option" },
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
            alt="Donate to Awdorg Foundation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent/70 to-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 w-36 h-36 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-44 h-44 bg-primary-foreground/10 rounded-full blur-3xl float-slow" />
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-24 text-primary-foreground/40 float-slow">
          <Heart className="w-10 h-10" />
        </div>
        <div className="absolute bottom-36 left-24 text-accent/50 float-medium">
          <Shield className="w-8 h-8" />
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
              <span className="text-accent">Donate</span> – Awdorg Foundation
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Support Women's Safety, Strength, and Self-Reliance
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

      {/* About Donation */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={aboutImage} 
                  alt="Women receiving help" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your contribution helps women feel safer, become more independent, and rebuild their confidence.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By donating to Awdorg Foundation, you directly support programs that provide safety kits, crisis assistance, livelihood support, and empowerment opportunities for women in vulnerable situations.
                </p>
                <p className="text-primary font-semibold">
                  Together, we can create a safer and more dignified future for women.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donation Matters */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 text-primary/20 float-slow">
          <Sparkles className="w-10 h-10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
              Why Your Donation Matters
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="animate-fade-in">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every contribution helps:
                </p>
                <ul className="space-y-3">
                  {whyDonate.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 bg-card/50 p-3 rounded-xl border border-border/30">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-primary font-semibold mt-6">
                  Your support brings immediate and meaningful impact.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={impactImage} 
                  alt="Donation impact" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Donation Options
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Choose how you'd like to support our mission
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationOptions.map((option, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-primary transition-all duration-300 animate-fade-in border border-border/50 hover:border-primary/30 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <option.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {index + 1}. {option.title}
                    </h3>
                    {option.amount && (
                      <p className="text-primary font-semibold text-sm">{option.amount}</p>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form & How It's Used */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute top-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div className="bg-card rounded-3xl p-8 shadow-soft animate-fade-in border border-border/50">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Make Your Donation
              </h2>
              
              {/* Amount Selection */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                      selectedAmount === amount
                        ? "bg-gradient-hero text-primary-foreground shadow-gold"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <Label htmlFor="custom">Or enter custom amount</Label>
                <div className="flex mt-2">
                  <span className="inline-flex items-center px-4 bg-secondary rounded-l-lg border-r-0 text-muted-foreground">
                    ₹
                  </span>
                  <Input
                    id="custom"
                    type="number"
                    className="rounded-l-none"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
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
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN (for 80G receipt)</Label>
                    <Input
                      id="pan"
                      value={formData.pan}
                      onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                    />
                  </div>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full shadow-gold">
                  Donate ₹{customAmount || selectedAmount?.toLocaleString() || "0"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  After completing your donation, please share your name, email, and transaction details for receipt generation.
                </p>
              </form>
            </div>

            {/* How Donation Is Used */}
            <div className="animate-fade-in animation-delay-300">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                How Your Donation Is Used
              </h2>
              <div className="relative group mb-6">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={howUsedImage} 
                  alt="Empowered woman" 
                  className="relative rounded-2xl shadow-xl w-full h-48 object-cover"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We follow a transparent and impact-focused approach. Your donation supports:
              </p>
              <ul className="space-y-3 mb-6">
                {howUsed.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-card/50 p-2 rounded-xl border border-border/30">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold mb-6">
                Every rupee is used responsibly to help women directly.
              </p>

              {/* Payment Methods */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                How to Donate
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-soft border border-border/50"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground text-sm">{method.text}</span>
                  </div>
                ))}
              </div>

              {/* Legal Info */}
              <div className="bg-secondary/50 rounded-2xl p-6 border border-border/50">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Transparency & Legal Information
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Awdorg Foundation operates with full legal compliance and transparency.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>CIN:</strong> U85300DL2020NPL367989</p>
                  <p><strong>FCRA Registration Number:</strong> 231662112</p>
                  <p><strong>Registered Address:</strong> K-66/B, Kalkaji, New Delhi – 110019</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Official receipts will be provided after every donation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
        <div className="absolute top-20 right-20 text-primary-foreground/30 float-slow">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Make a Difference Today
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-4 max-w-2xl mx-auto">
            Your kindness can help a woman feel safe, confident, and independent.
          </p>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Be a part of her journey toward dignity, empowerment, and hope.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="shadow-gold">
              <a href="#top">Donate Now</a>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;