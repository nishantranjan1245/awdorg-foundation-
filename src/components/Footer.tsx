import { Heart, MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import awdorgFooterIcon from "@/assets/awdorg-footer-icon.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Donate", href: "/donate" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const programs = [
    { name: "Women Skill & Self-Reliance Fund", href: "/programs/skill-fund" },
    { name: "Women Safety Kit Drive", href: "/programs/safety-kit" },
    { name: "Awdorg Shield (Crisis Support)", href: "/programs/crisis-support" },
    { name: "CyberSafe Women Initiative", href: "/programs/cybersafe" },
    { name: "Community Safety Awareness", href: "/programs/community-awareness" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-6 group">
              <img src={awdorgFooterIcon} alt="Awdorg Foundation" className="w-24 h-24 object-contain" />
              <span className="font-display text-2xl font-bold text-primary">
                Awdorg Foundation
              </span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">Awdorg Foundation works to support women through safety initiatives and self-reliance programs, helping them live safer and more independent lives.</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label={social.label}>
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}><Link to={link.href} className="text-primary-foreground/70 hover:text-primary transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}><Link to={program.href} className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">{program.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-primary-foreground/70 text-sm">K-66/B, Kalkaji, New Delhi – 110019</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+919876543210" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">+91-9876543210</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:info@awdorgfoundation.org" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">info@awdorgfoundation.org</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center lg:text-left">© 2020-2025 Awdorg Foundation. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <Link to="/privacy-policy" className="text-primary-foreground/70 hover:text-primary transition-colors">Privacy Policy</Link>
              <span className="text-primary-foreground/30">|</span>
              <Link to="/terms" className="text-primary-foreground/70 hover:text-primary transition-colors">Terms & Conditions</Link>
              <span className="text-primary-foreground/30">|</span>
              <Link to="/refund-policy" className="text-primary-foreground/70 hover:text-primary transition-colors">Refund Policy</Link>
              <span className="text-primary-foreground/30">|</span>
              <Link to="/disclaimer" className="text-primary-foreground/70 hover:text-primary transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
