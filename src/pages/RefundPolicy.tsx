import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RotateCcw, Sparkles } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";

const RefundPolicy = () => {
  usePageTitle("Refund Policy - Awdorg Foundation");
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
          <RotateCcw className="w-10 h-10" />
        </div>
        <div className="absolute bottom-36 left-24 text-accent/50 float-medium">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in border border-primary-foreground/30">
              <RotateCcw className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Refund & <span className="text-accent">Cancellation</span> Policy
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
                At Awdorg Foundation, we value every contribution and strive to ensure transparency and clarity in our donation processes. This Refund & Cancellation Policy explains the terms under which donations may or may not be refunded.
              </p>

              <div className="space-y-8">
                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    1. Donations Are Generally Non-Refundable
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All donations made to Awdorg Foundation are considered final and non-refundable. Once a donation is processed, we cannot reverse or cancel the transaction, except under specific circumstances mentioned below. Donations are used immediately for ongoing women safety, empowerment, and self-reliance programs.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    2. Eligible Refund Situations
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A refund may be permitted only under the following conditions:
                  </p>
                  
                  <h3 className="font-display text-xl font-medium text-foreground mb-3">2.1 Duplicate Transaction</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If a donor accidentally makes the same donation twice, they may request a refund for the duplicate amount.
                  </p>

                  <h3 className="font-display text-xl font-medium text-foreground mb-3">2.2 Technical Error</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If a transaction fails or is incorrectly processed due to a technical issue (payment gateway error or system glitch), the donor may request a correction or refund.
                  </p>

                  <h3 className="font-display text-xl font-medium text-foreground mb-3">2.3 Unauthorized Transaction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If a donor believes their card or account was used without permission, they must notify us immediately for review.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    3. Refund Request Procedure
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To request a refund, donors must:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Contact us within 7 days of the donation</li>
                    <li>Provide:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Donation amount</li>
                        <li>Transaction date</li>
                        <li>Proof of payment / screenshot</li>
                        <li>Reason for refund request</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Email all refund requests to: <a href="mailto:info@awdorgfoundation.org" className="text-primary hover:underline">info@awdorgfoundation.org</a>
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-2 italic">
                    Refund requests submitted after 7 days may not be eligible for consideration.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    4. Verification Process
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Once a refund request is submitted:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Our team will verify the details</li>
                    <li>We may request additional information</li>
                    <li>Eligible refunds will be processed within 10–15 working days</li>
                    <li>Refunds will be made using the same payment method used during the donation</li>
                  </ul>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    5. No Refund for Utilized Funds
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If the donated amount has already been allocated to a program or used for any initiative, it cannot be refunded. This ensures transparency and continuity of our support activities.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    6. Event or Campaign Donations
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Donations made toward specific events, drives, or initiatives (like Safety Kit Drive or Self-Reliance Fund) are also non-refundable, unless the payment was made twice or through an error.
                  </p>
                </section>

                <section className="bg-secondary/30 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    7. Cancellation of Monthly Donations
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Donors enrolled in a monthly donation plan may request cancellation by emailing us at <a href="mailto:info@awdorgfoundation.org" className="text-primary hover:underline">info@awdorgfoundation.org</a>. The cancellation will apply from the next billing cycle onward.
                  </p>
                  <p className="text-muted-foreground leading-relaxed italic">
                    No refunds will be issued for amounts already deducted.
                  </p>
                </section>

                <section className="bg-gradient-hero rounded-2xl p-6 text-primary-foreground">
                  <h2 className="font-display text-2xl font-semibold mb-4">
                    8. Contact Information
                  </h2>
                  <p className="leading-relaxed">
                    For any questions or refund-related inquiries, please contact:<br /><br />
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

export default RefundPolicy;