import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Target } from "lucide-react"

export function CompanyHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 py-16 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Building2 className="h-4 w-4" />
            企業の方へ
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
            次世代を担う人材との
            <br />
            <span className="text-accent">直接的な接点を創出。</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            AniCariは、意欲的な獣医療系学生32名と直接対話できる月次キャリア交流イベントです。
            効率的な採用活動とブランディングを実現します。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }} className="rounded-full min-w-[200px]">
              <Link href="#sponsor">
                スポンサープラン詳細
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full min-w-[200px] bg-transparent">
              <Link href="/contact">
                お問い合わせ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Key Points */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-1">32名の学生</h3>
              <p className="text-sm text-muted-foreground">次回イベント参加予定</p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <Target className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-1">質の高い層</h3>
              <p className="text-sm text-muted-foreground">キャリア志向の学生が集結</p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <Building2 className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-1">月次開催</h3>
              <p className="text-sm text-muted-foreground">継続的な接点を確保</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
