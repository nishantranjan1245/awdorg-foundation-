import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Sparkles } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";

const Terms = () => {
  usePageTitle("Terms & Conditions - Awdorg Foundation");
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
          <FileText className="w-10 h-10" />
        </div>
        <div className="absolute bottom-36 left-24 text-accent/50 float-medium">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in border border-primary-foreground/30">
              <FileText className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Terms & <span className="text-accent">Conditions</span>
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
                Welcome to the official website of Awdorg Foundation. By accessing or using this website, you agree to follow the Terms & Conditions listed below. If you do not agree with any part of these terms, we request you to discontinue using the website. These Terms & Conditions apply to all visitors, users, donors, volunteers, and anyone interacting with our website or services.
              </p>

              <div className="space-y-8">
                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    1. Use of the Website
                  </h2>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>You agree to use this website only for lawful purposes.</li>
                    <li>You will not attempt to damage, interrupt, or misuse the website.</li>
                    <li>You will not upload harmful, abusive, or offensive content.</li>
                    <li>Unauthorized access or attempts to hack the website are strictly prohibited.</li>
                  </ul>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    2. Information Accuracy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We try our best to ensure all information on this website is accurate and updated. However:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Some information may change over time</li>
                    <li>We do not guarantee completeness or absolute accuracy</li>
                    <li>Content is for general awareness and informational purposes</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We are not responsible for any loss caused due to reliance on the information provided.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    3. Donations
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you donate to Awdorg Foundation:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>You agree to provide accurate personal and payment information</li>
                    <li>Donations are voluntary and non-refundable (unless specified in Refund Policy)</li>
                    <li>Donation receipts will be issued for each contribution</li>
                    <li>Donations are used for programs such as women safety, self-reliance, crisis support, and community awareness</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4 italic">
                    We do not store bank account or card details.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    4. Volunteer Participation
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you apply to volunteer:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>You must provide truthful information</li>
                    <li>Volunteer roles depend on availability and suitability</li>
                    <li>Awdorg Foundation holds the right to accept or reject applications</li>
                    <li>Volunteers must follow the organization's guidelines and code of conduct</li>
                  </ul>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    5. Intellectual Property Rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All content on this website—including text, design, graphics, logo, and materials—is the property of Awdorg Foundation. You cannot:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Copy</li>
                    <li>Reproduce</li>
                    <li>Modify</li>
                    <li>Distribute</li>
                    <li>Sell</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    any part of the website without written permission.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    6. Third-Party Links
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our website may contain links to external websites. We are not responsible for:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Content on third-party sites</li>
                    <li>Their privacy practices</li>
                    <li>Any damages caused by visiting those websites</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Please read their terms separately.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    7. Privacy & Data Protection
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Your use of this website is also governed by our Privacy Policy. Key points:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>We protect your personal information</li>
                    <li>We do not sell or misuse your data</li>
                    <li>We use appropriate security measures</li>
                    <li>You may contact us regarding your data rights</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Please read the full Privacy Policy for details.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    8. Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Awdorg Foundation is not liable for:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Technical issues or website downtime</li>
                    <li>Loss of data</li>
                    <li>Damage arising from the use or inability to use the website</li>
                    <li>Errors or omissions in website content</li>
                    <li>Third-party actions or content</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Your use of the website is at your own responsibility.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    9. Modification of Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Awdorg Foundation may update or modify these Terms & Conditions at any time. Updates will be posted on this page with the latest date.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    10. Governing Law
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms & Conditions are governed by the laws of India. Any disputes will fall under the jurisdiction of courts in New Delhi, India.
                  </p>
                </section>

                <section className="bg-gradient-hero rounded-2xl p-6 text-primary-foreground">
                  <h2 className="font-display text-2xl font-semibold mb-4">
                    11. Contact Us
                  </h2>
                  <p className="leading-relaxed">
                    If you have questions regarding these Terms & Conditions, please contact:<br /><br />
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

export default Terms;