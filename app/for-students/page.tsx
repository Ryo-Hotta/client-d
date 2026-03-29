import type { Metadata } from "next"
import { StudentHeroSection } from "@/components/for-students/student-hero-section"
import { WhatYouGetSection } from "@/components/for-students/what-you-get-section"
import { HowToJoinSection } from "@/components/for-students/how-to-join-section"
import { StudentTestimonialsSection } from "@/components/for-students/student-testimonials-section"
import { StudentFAQSection } from "@/components/for-students/student-faq-section"

export const metadata: Metadata = {
  title: "学生の方へ",
  description: "AniCariイベントに参加して、キャリアの可能性を広げよう。獣医療系学生向けの参加方法と得られる価値をご紹介します。"
}

export default function ForStudentsPage() {
  return (
    <>
      <StudentHeroSection />
      <WhatYouGetSection />
      <HowToJoinSection />
      <StudentTestimonialsSection />
      <StudentFAQSection />
    </>
  )
}
