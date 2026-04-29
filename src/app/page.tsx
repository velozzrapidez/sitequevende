import { ToastProvider } from "@/app/components/Toast";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import PainSection from "@/app/components/PainSection";
import SolutionSection from "@/app/components/SolutionSection";
import BenefitsSection from "@/app/components/BenefitsSection";
import ProofSection from "@/app/components/ProofSection";
import HowItWorksSection from "@/app/components/HowItWorksSection";
import OfferSection from "@/app/components/OfferSection";
import FAQSection from "@/app/components/FAQSection";
import PortfolioSection from "@/app/components/PortfolioSection";
import UrgencySection from "@/app/components/UrgencySection";
import ContactForm from "@/app/components/ContactForm";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import WhatsAppFab from "@/app/components/WhatsAppFab";

export default function Home() {
  return (
    <ToastProvider>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <BenefitsSection />
        <PortfolioSection />
        <ProofSection />
        <HowItWorksSection />
        <OfferSection />
        <FAQSection />
        <UrgencySection />
        <ContactForm />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFab />
    </ToastProvider>
  );
}
