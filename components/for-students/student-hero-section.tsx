import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react"

export function StudentHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            学生の方へ
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
            キャリアの可能性を広げる、
            <br />
            <span className="text-primary">あなたの第一歩をここから。</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            AniCariは、獣医療系学生・愛玩動物看護師を目指す方のためのキャリア交流イベントです。
            意欲的な仲間と企業との出会いを通じて、あなたの未来を切り拓きましょう。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="rounded-full w-full sm:w-auto sm:min-w-[200px]">
              <Link href="#join">
                参加申し込み
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full w-full sm:w-auto sm:min-w-[200px] bg-transparent">
              <Link href="/events">
                イベント情報を見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Key Points */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">仲間との出会い</h3>
              <p className="text-sm text-muted-foreground">キャリア志向の高い学生と交流</p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">企業と直接対話</h3>
              <p className="text-sm text-muted-foreground">ペット企業の方から直接話を聞ける</p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">継続的な成長</h3>
              <p className="text-sm text-muted-foreground">月次開催で段階的にスキルアップ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
