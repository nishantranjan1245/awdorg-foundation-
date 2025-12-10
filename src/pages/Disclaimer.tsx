import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertCircle, Sparkles } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";

const Disclaimer = () => {
  usePageTitle("Disclaimer - Awdorg Foundation");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 w-36 h-36 bg-accent/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-44 h-44 bg-primary-foreground/10 rounded-full blur-3xl float-slow" />
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-24 text-primary-foreground/40 float-slow">
          <AlertCircle className="w-10 h-10" />
        </div>
        <div className="absolute bottom-36 left-24 text-accent/50 float-medium">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in border border-primary-foreground/30">
              <AlertCircle className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              <span className="text-accent">Disclaimer</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Last Updated: July 2025
            </p>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-8">
                The information provided on the Awdorg Foundation website is for general awareness and informational purposes only. By using this website, you agree to the terms outlined in this Disclaimer.
              </p>

              <div className="space-y-8">
                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    1. No Professional Advice
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Awdorg Foundation provides general guidance related to women's safety, empowerment, self-reliance, and community awareness. However:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>We do not provide medical advice</li>
                    <li>We do not provide legal advice</li>
                    <li>We do not provide professional counseling</li>
                    <li>Information should not be treated as a substitute for professional services</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Users should seek appropriate professionals for legal, medical, or emergency help when needed.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    2. Accuracy of Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    While we strive to keep information accurate and updated, Awdorg Foundation:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Makes no guarantees about completeness or accuracy</li>
                    <li>May update content without prior notice</li>
                    <li>Is not responsible for errors or outdated information</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Our content is meant for educational and awareness purposes only.
                  </p>
                </section>

                <section className="bg-destructive/10 rounded-2xl p-6 border border-destructive/30">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    3. No Emergency Services
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Awdorg Foundation is not an emergency response agency.
                  </p>
                  <p className="text-primary leading-relaxed font-medium mb-4">
                    If you are in immediate danger or require urgent assistance, please contact your local authorities or emergency services immediately.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our programs offer guidance and support, but we cannot replace law enforcement or emergency responders.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    4. External Links
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our website may contain links to third-party websites. Awdorg Foundation:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Does not endorse external sites</li>
                    <li>Is not responsible for their content</li>
                    <li>Has no control over their policies or practices</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Users should read third-party terms separately.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    5. Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Awdorg Foundation is not liable for:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Any loss or damage caused by using this website</li>
                    <li>Errors, inaccuracies, or omissions in content</li>
                    <li>Technical issues, downtime, or website interruptions</li>
                    <li>Actions taken based on website information</li>
                    <li>Harm from third-party websites linked from our site</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    You use the website at your own discretion and risk.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    6. Program & Service Availability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The availability of our programs may vary depending on:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Resources</li>
                    <li>Location</li>
                    <li>Volunteer availability</li>
                    <li>Community needs</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We reserve the right to modify, pause, or discontinue programs at any time.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    7. No Guarantees of Outcome
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    While we aim to support women through various initiatives, we do not guarantee:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Specific results</li>
                    <li>Protection from all risks</li>
                    <li>Resolution of every crisis</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Our services are supportive in nature, not guaranteed solutions.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    8. Changes to This Disclaimer
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Awdorg Foundation may update this Disclaimer at any time. Changes will be reflected with the updated date at the top of this page.
                  </p>
                </section>

                <section className="bg-gradient-hero rounded-2xl p-6 text-primary-foreground">
                  <h2 className="font-display text-2xl font-semibold mb-4">
                    9. Contact Us
                  </h2>
                  <p className="leading-relaxed">
                    For questions regarding this Disclaimer, please contact:<br /><br />
                    Awdorg Foundation<br />
                    K-66/B, Kalkaji<br />
                    New Delhi – 110019<br />
                    Email: <a href="mailto:info@awdorgfoundation.org" className="text-accent hover:underline">info@awdorgfoundation.org</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;