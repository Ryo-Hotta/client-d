import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2 } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          一歩を踏み出す準備は
          <br />
          できていますか？
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          学生の方はイベント参加申し込みを、企業の方はスポンサーのお問い合わせをお待ちしています。
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* For Students */}
          <div className="p-8 rounded-2xl bg-card border-2 border-primary/20 hover:border-primary transition-colors">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">学生の方へ</h3>
            <p className="text-sm text-muted-foreground mb-6">
              イベント参加申し込み・
              <br />
              キャリア相談はこちらから
            </p>
            <Button asChild size="lg" className="w-full rounded-full">
              <Link href="/for-students#join">
                参加申し込み
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* For Companies */}
          <div className="p-8 rounded-2xl bg-card border-2 border-accent/20 hover:border-accent transition-colors">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">企業の方へ</h3>
            <p className="text-sm text-muted-foreground mb-6">
              スポンサー募集・
              <br />
              協賛のお問い合わせ
            </p>
            <Button asChild size="lg" className="w-full rounded-full" style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}>
              <Link href="/for-companies#sponsor">
                スポンサー詳細
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Additional Contact */}
        <div className="mt-12 pt-8 border-t border-border max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">
            その他のお問い合わせはこちらから
          </p>
          <Button asChild variant="outline" className="rounded-full bg-transparent">
            <Link href="/contact">
              お問い合わせフォーム
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
