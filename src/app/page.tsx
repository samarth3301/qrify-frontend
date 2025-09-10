import HeroSection from "@/components/landing/heroSection"
import FeaturesSection from "@/components/landing/features"
import PricingSection from "@/components/landing/pricing"
import CtaSection from "@/components/landing/cta"

export default function QrifyLanding() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
    </div>
  )
}
