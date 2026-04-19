import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

export function AboutOrganizationSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            【学生団体AniCari.とは】
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mb-12 items-center">
          {/* Left: Image (45%) */}
          <div className="md:col-span-2 overflow-hidden rounded-xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <ImagePlaceholder
              label="団体メンバー4名の集合写真"
              aspectRatio="1/1"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%99%B4%E3%80%804%E4%BA%BA%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC-vwW1l5pr8IfOq9vgPMZfqU6djsufqZ.jpg"
            />
          </div>

          {/* Right: Content (55%) */}
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">
                <span className="font-bold text-foreground">創立：</span>2025年11月
              </p>
              <p className="text-muted-foreground text-sm">
                <span className="font-bold text-foreground">メンバー数：</span>4名
              </p>
              <p className="text-muted-foreground text-sm">
                <span className="font-bold text-foreground">事業内容：</span>獣医療系学生のキャリア支援事業
              </p>
            </div>

            <div className="h-px bg-border my-6" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Mission */}
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-card border border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">ミッション</h3>
            <p className="font-bold text-primary text-lg mb-3">「可能性を広げる」</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              キャリアに関する早期の内省と学習、実践的経験の獲得により、個人の潜在能力が開花し、より自律的で充実した人生設計が可能になる。
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-card border border-accent/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <Eye className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">ビジョン</h3>
            <p className="font-bold text-accent text-lg mb-3">「一歩を踏み出せる場所を提供する」</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              不確実性の中で一人で行動し続けることは困難だからこそ、仲走者と仲間がいる環境で、継続的な成長と挑戦を支援する。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
            <Link href="/about">
              団体について詳しく見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
