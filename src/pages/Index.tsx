import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";

const ProductKits = lazy(() => import("@/components/ProductKits"));
const ProductFeatures = lazy(() => import("@/components/ProductFeatures"));
const Benefits = lazy(() => import("@/components/Benefits"));
const Reviews = lazy(() => import("@/components/Reviews"));
const FAQ = lazy(() => import("@/components/FAQ"));
const SiteFooter = lazy(() => import("@/components/SiteFooter"));
const FloatingCart = lazy(() => import("@/components/FloatingCart"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Suspense fallback={null}>
        <ProductKits />
        <ProductFeatures />
        <Benefits />
        <Reviews />
        <FAQ />
        <SiteFooter />
        <FloatingCart />
      </Suspense>
    </div>
  );
};

export default Index;
