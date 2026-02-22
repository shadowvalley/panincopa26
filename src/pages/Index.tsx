import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import ProductKits from "@/components/ProductKits";
import ProductFeatures from "@/components/ProductFeatures";
import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import SiteFooter from "@/components/SiteFooter";
import FloatingCart from "@/components/FloatingCart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <HeroSection />
      <ProductKits />
      <ProductFeatures />
      <Benefits />
      <Reviews />
      <FAQ />
      <SiteFooter />
      <FloatingCart />
    </div>
  );
};

export default Index;
