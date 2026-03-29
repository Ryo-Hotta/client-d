import { HeroSection } from "@/components/home/hero-section"
import { NextEventSection } from "@/components/home/next-event-section"
import { PhotoCarouselSection } from "@/components/home/photo-carousel-section"
import { AboutOrganizationSection } from "@/components/home/about-organization-section"
import { LeaderProfileSection } from "@/components/home/leader-profile-section"
import { ValuePropositionSection } from "@/components/home/value-proposition-section"
import { WhyAniCariSection } from "@/components/home/why-anicari-section"
import { PastEventSection } from "@/components/home/past-event-section"
import { SponsorPlanSection } from "@/components/home/sponsor-plan-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FinalCTASection } from "@/components/home/final-cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NextEventSection />
      <PhotoCarouselSection />
      <AboutOrganizationSection />
      <LeaderProfileSection />
      <ValuePropositionSection />
      <WhyAniCariSection />
      <PastEventSection />
      <SponsorPlanSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  )
}
