import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Calendar } from "lucide-react"

export function ContactCTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-primary/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          次世代人材との出会いを、
          <br />
          今すぐ始めませんか？
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          スポンサーのお申し込み・ご相談は、お問い合わせフォームから承っております。
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-card border-2 border-accent/20 hover:border-accent transition-colors">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">スポンサー申し込み</h3>
            <p className="text-sm text-muted-foreground mb-6">
              お問い合わせフォームから
              <br />
              お気軽にご相談ください
            </p>
            <Button asChild size="lg" className="w-full rounded-full" style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}>
              <Link href="/contact">
                お問い合わせ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Next Event */}
          <div className="p-8 rounded-2xl bg-card border-2 border-primary/20 hover:border-primary transition-colors">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">次回イベント情報</h3>
            <p className="text-sm text-muted-foreground mb-6">
              2026年2月11日（水・祝）
              <br />
              15:00〜20:00 開催予定
            </p>
            <Button asChild size="lg" variant="outline" className="w-full rounded-full bg-transparent">
              <Link href="/events#next">
                詳細を見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="p-6 rounded-xl bg-card border border-border max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            イベント開催の2週間前までにお申し込みください。
            <br />
            定員に達し次第、受付を終了いたします。
          </p>
        </div>
      </div>
    </section>
  )
}
