import type { Metadata } from "next"
import { CompanyHeroSection } from "@/components/for-companies/company-hero-section"
import { WhySponsorSection } from "@/components/for-companies/why-sponsor-section"
import { SponsorPlansDetailSection } from "@/components/for-companies/sponsor-plans-detail-section"
import { ParticipantProfileSection } from "@/components/for-companies/participant-profile-section"
import { CompanyFAQSection } from "@/components/for-companies/company-faq-section"
import { ContactCTASection } from "@/components/for-companies/contact-cta-section"

export const metadata: Metadata = {
  title: "企業の方へ",
  description: "AniCariの企業スポンサープランのご案内。次世代を担う獣医療系学生32名との直接接点を創出し、効率的な採用活動とブランディングを実現します。"
}

export default function ForCompaniesPage() {
  return (
    <>
      <CompanyHeroSection />
      <WhySponsorSection />
      <SponsorPlansDetailSection />
      <ParticipantProfileSection />
      <CompanyFAQSection />
      <ContactCTASection />
    </>
  )
}
