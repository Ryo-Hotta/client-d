import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight, Sparkles } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

export function NextEventSection() {
  return (
    <section id="next" className="py-16 md:py-20" style={{ backgroundColor: '#FFF3E0' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            【第3回 アニキャリ交流祭 開催決定！】
          </h2>
          <p className="text-muted-foreground">開催実績2回 / 累計参加学生30名</p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
          {/* Left: Image (40%) */}
          <div className="md:col-span-2">
            <ImagePlaceholder
              label="前回イベントのハイライト写真"
              aspectRatio="4/3"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%99%B4%E3%80%801-YvLPQRYwJ2l0sI4KENDNsS8E5IzYpi.jpg"
            />
          </div>

          {/* Right: Content (60%) */}
          <div className="md:col-span-3 space-y-6">
            {/* Event Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-foreground">日程</p>
                  <p className="text-muted-foreground">2026年4月26日（日）19:00〜21:00</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-foreground">会場</p>
                  <p className="text-muted-foreground">板橋区立企業活性化センター</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-foreground">参加予定</p>
                  <p className="text-muted-foreground">動物看護学生 約30名 / 企業 限定5社</p>
                </div>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* Event Content */}
            <div className="p-5 rounded-xl bg-white/50 border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground">当日の内容</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>第1部：企業紹介（30分）- 企業様に学生に向けたピッチをしていただきます</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>第2部：企業×学生 レクリエーション（30分）- アイスブレイクで人柄を知る時間</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>第3部：個別面談タイム（60分）- 各ブースで業務内容や条件面の具体的な対話</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-border" />

            {/* Target Audience */}
            <div>
              <h4 className="font-bold text-foreground mb-2">【参加学生】</h4>
              <p className="text-sm text-muted-foreground mb-4">動物看護学生 約30名（就職活動を控えた意識の高い学生が中心）</p>
              
              <h4 className="font-bold text-foreground mb-2">【参加企業】</h4>
              <p className="text-sm text-muted-foreground">動物病院・犬の保育園・ペットサロンなど 限定5社</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full flex-1">
                <Link href="/for-students#join">
                  学生の方：参加申込
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="rounded-full flex-1 bg-secondary hover:bg-secondary/90">
                <Link href="/for-companies#sponsor">
                  企業の方：スポンサー詳細
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
