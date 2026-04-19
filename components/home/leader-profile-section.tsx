import { Award, Briefcase, Heart } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

export function LeaderProfileSection() {
  const achievements = [
    "石川SDGsでの保護犬猫支援活動に従事",
    "動物学生コミュニティ「TUMUGI学生部」副代表",
    "株式会社New One 元取締役",
    "「TUMUGI ANIMAL FES」実行委員・コンテンツリーダー",
    "株式会社ドッグラン広場 運営スタッフ",
    "大学で一番楽しかった講義：ライオンの解剖実習",
  ]

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            代表プロフィール
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
          {/* Left: Images (40%) */}
          <div className="md:col-span-2 space-y-4">
            {/* Main Portrait */}
            <ImagePlaceholder
              label="西沢晴さんのポートレート写真"
              aspectRatio="3/4"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_%E8%A5%BF%E6%B2%A2%E5%86%99%E7%9C%9F_260224_6%20%E6%99%B4%E3%81%95%E3%82%93%E3%80%80%E5%86%99%E7%9C%9F-38QOLHyVEtXNQ91WbyRFFr4uPu8Z2P.jpg"
            />
          </div>

          {/* Right: Content (60%) */}
          <div className="md:col-span-3 space-y-6">
            {/* Name & Title */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                西沢 晴（Nishizawa Haru）
              </h3>
              <p className="text-primary font-medium">学生団体AniCari. 代表</p>
            </div>

            {/* Story */}
            <div className="p-5 rounded-xl bg-secondary border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <h4 className="font-bold text-foreground">Why AniCari?</h4>
              </div>
              <p className="text-sm leading-relaxed text-primary-foreground">
                高校時代の保護活動を通じて、ボランティアの限界と"動物と人の幸せな共生社会"にはビジネスが必要という気付きを得て、社会起業を志す。現在は大学生活を通し、ペット業界の人材不足や離職率の高さ、教育体制の弱さなど、構造的な課題を実感。この歪みを変えるため、学生が早期から実戦経験を積み、企業と正しく出会える仕組みづくりに挑戦中。
              </p>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h4 className="font-bold text-foreground">活動実績</h4>
              </div>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
