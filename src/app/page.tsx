"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FaqSection from "@/components/landing/FAQSection";
import CtaSection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </PageWrapper>
  );
}
