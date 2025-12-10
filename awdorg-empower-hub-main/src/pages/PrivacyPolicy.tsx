import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Sparkles } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";

const PrivacyPolicy = () => {
  usePageTitle("Privacy Policy - Awdorg Foundation");
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
          <Shield className="w-10 h-10" />
        </div>
        <div className="absolute bottom-36 left-24 text-accent/50 float-medium">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in border border-primary-foreground/30">
              <Shield className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Privacy <span className="text-accent">Policy</span>
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
                Awdorg Foundation ("we", "our", "us") is committed to protecting the privacy of all visitors, donors, volunteers, beneficiaries, and users of our website. This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with us. By using our website or sharing your information with us, you agree to the terms described in this policy.
              </p>

              <div className="space-y-8">
                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    1. Information We Collect
                  </h2>
                  
                  <h3 className="font-display text-xl font-medium text-foreground mb-3">1.1 Personal Information</h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Address</li>
                    <li>Donation details</li>
                    <li>Volunteer application details</li>
                    <li>Messages or inquiries shared through contact forms</li>
                  </ul>

                  <h3 className="font-display text-xl font-medium text-foreground mb-3">1.2 Non-Personal Information</h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>IP address</li>
                    <li>Pages visited</li>
                    <li>Website usage statistics</li>
                  </ul>

                  <h3 className="font-display text-xl font-medium text-foreground mb-3">1.3 Donation Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">When you donate to Awdorg Foundation, we may collect:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Transaction details</li>
                    <li>Mode of payment</li>
                    <li>Amount donated</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-2 italic">(We do not store your bank account or card details.)</p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may use your information to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Process donations and issue receipts</li>
                    <li>Respond to your inquiries</li>
                    <li>Provide information about our programs</li>
                    <li>Manage volunteer participation</li>
                    <li>Improve our website and services</li>
                    <li>Send updates and newsletters</li>
                    <li>Maintain legal and financial records</li>
                    <li>Ensure security and prevent misuse</li>
                  </ul>
                  <p className="text-primary leading-relaxed mt-4 font-medium">
                    We will never sell or misuse your personal information.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    3. How We Protect Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use appropriate security measures to protect your data against unauthorized access, misuse, or alteration.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    4. Sharing of Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may share your information only when:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Required by law</li>
                    <li>Necessary to complete donations (payment processors)</li>
                    <li>To prevent fraud or misuse</li>
                    <li>You give explicit permission</li>
                  </ul>
                  <p className="text-primary leading-relaxed mt-4 font-medium">
                    We do not sell or trade personal information.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    5. Cookies & Tracking
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our website may use cookies for:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Improving user experience</li>
                    <li>Tracking website performance</li>
                    <li>Understanding visitor preferences</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    You can disable cookies anytime through your browser.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    6. Your Rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You may:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Request access to your personal data</li>
                    <li>Ask for corrections</li>
                    <li>Request deletion (when applicable)</li>
                    <li>Opt out of communications</li>
                    <li>Ask how your data is being used</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Contact us at: <a href="mailto:info@awdorgfoundation.org" className="text-primary hover:underline">info@awdorgfoundation.org</a>
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    7. Data Retention
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We keep your information only as long as needed for legal, financial, or operational purposes, then securely delete it.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    8. External Links
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are not responsible for third-party website content or privacy practices.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    9. Children's Privacy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not knowingly collect information from children under 18.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    10. Updates to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Any updates to this policy will be posted on this page with the updated date "July 2025" or later.
                  </p>
                </section>

                <section className="bg-gradient-hero rounded-2xl p-6 text-primary-foreground">
                  <h2 className="font-display text-2xl font-semibold mb-4">
                    11. Contact Us
                  </h2>
                  <p className="leading-relaxed">
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

export default PrivacyPolicy;