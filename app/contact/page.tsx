import Link from "next/link"
import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { SnsLinks } from "@/components/contact/sns-links"
import { ContactNotes } from "@/components/contact/contact-notes"
import { CalendarDays, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "学生団体AniCari.へのお問い合わせはこちらから。イベント参加、企業スポンサー、その他のご質問など、お気軽にご連絡ください。",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            お問い合わせ
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            イベント参加、企業スポンサー、その他のご質問など、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  お問い合わせフォーム
                </h2>
                <p className="text-muted-foreground mb-8 text-sm">
                  学生の方のイベント参加申込、企業様のスポンサー相談など、お気軽にご連絡ください。
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <SnsLinks />
                
                {/* Events Link */}
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CalendarDays className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm">次回イベント</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1 font-bold">
                    2026年2月11日（水・祝）
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    企業5社 × 学生32名の交流イベント
                  </p>
                  <Link
                    href="/events#next"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    詳細を見る
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                
                <ContactNotes />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
