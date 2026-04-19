import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star, Award, ArrowRight, Presentation, FileText, Users } from "lucide-react"

export function SponsorPlansDetailSection() {
  return (
    <section id="sponsor" className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            スポンサープラン詳細
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            貴社のニーズに合わせた2つのプランをご用意
          </p>
        </div>

        {/* Plans Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Platinum Plan */}
          <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-primary/5 border-2 border-primary shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
              おすすめ
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                <Star className="h-7 w-7 text-primary fill-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">プラチナプラン</h3>
                <p className="text-sm text-muted-foreground">最大限の接点を確保</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">¥50,000</div>
              <p className="text-sm text-muted-foreground">1イベントあたり（税込）</p>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-foreground">ブース設置・個別面談</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-7">
                  専用ブースで学生と1対1で対話。企業の魅力を直接伝え、深い関係性を構築できます。
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Presentation className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-foreground">ステージでの企業紹介</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-7">
                  全参加学生に向けて企業紹介プレゼンテーション。ブランディング効果を最大化します。
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-foreground">当日資料・サンプル配布</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-7">
                  会社案内、採用資料、製品サンプルなどを学生に直接配布できます。
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="w-full rounded-full">
              <Link href="/contact">
                このプランで申し込む
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Gold Plan */}
          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <Award className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">ゴールドプラン</h3>
                <p className="text-sm text-muted-foreground">認知度向上に最適</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">¥20,000</div>
              <p className="text-sm text-muted-foreground">1イベントあたり（税込）</p>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Presentation className="h-5 w-5 text-accent" />
                  <h4 className="font-bold text-foreground">ステージでの企業紹介</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-7">
                  全参加学生に向けて企業紹介プレゼンテーション。効率的にブランド認知を高められます。
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-accent" />
                  <h4 className="font-bold text-foreground">当日資料・サンプル配布</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-7">
                  会社案内や採用資料などを学生に配布し、企業情報を効果的に伝えられます。
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground">
                  ※ ブース設置・個別面談はプラチナプランのみの特典です
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="w-full rounded-full" style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}>
              <Link href="/contact">
                このプランで申し込む
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-xl bg-secondary border border-border">
            <h4 className="font-bold text-foreground mb-3">スポンサー企業特典</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span>イベント告知時に企業名・ロゴを掲載</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span>参加学生のプロフィール情報（匿名化済み）を事前共有</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span>イベント後のフォローアップ支援</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-card border border-primary/20 text-center">
            <p className="text-muted-foreground leading-relaxed">
              複数回スポンサーをご希望の企業様には、
              <span className="font-bold text-primary">特別割引プラン</span>をご用意しています。
              <br />
              詳しくはお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
