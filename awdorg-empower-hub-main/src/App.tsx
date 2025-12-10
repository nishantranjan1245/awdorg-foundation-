import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Programs";
import SkillFund from "./pages/SkillFund";
import SafetyKit from "./pages/SafetyKit";
import CrisisSupport from "./pages/CrisisSupport";
import CyberSafe from "./pages/CyberSafe";
import CommunityAwareness from "./pages/CommunityAwareness";
import Volunteer from "./pages/Volunteer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import Disclaimer from "./pages/Disclaimer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/skill-fund" element={<SkillFund />} />
          <Route path="/programs/safety-kit" element={<SafetyKit />} />
          <Route path="/programs/crisis-support" element={<CrisisSupport />} />
          <Route path="/programs/cybersafe" element={<CyberSafe />} />
          <Route path="/programs/community-awareness" element={<CommunityAwareness />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
