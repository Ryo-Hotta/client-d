import type { Metadata } from "next"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { 
  Target, 
  Eye, 
  Users,
  Calendar,
  Award,
  Briefcase,
  Heart,
  Handshake,
  Lock,
  Phone,
  Clock,
  Shield
} from "lucide-react"
import { SectionTitle } from "@/components/section-title"
import { CTASection } from "@/components/cta-section"

const safetyPoints = [
  {
    title: "セキュリティ対策",
    description: "お客様の情報を厳格に管理し、セキュリティ対策を徹底しています。",
    icon: Lock,
  },
  {
    title: "サポート体制",
    description: "24時間365日対応のサポート体制を整えています。",
    icon: Phone,
  },
  {
    title: "信頼性",
    description: "多くの企業様と学生様との成功事例で信頼性を確立しています。",
    icon: Shield,
  },
]

export const metadata: Metadata = {
  title: "団体について",
  description: "学生団体AniCari.の理念、ミッション、代表紹介、活動内容についてご紹介します。獣医療系学生のキャリア支援を通じて、人と動物の共生社会を目指しています。",
}

const achievements = [
  "石川SDGsでの保護犬猫支援活動に従事",
  "動物学生コミュニティ「TUMUGI学生部」副代表",
  "株式会社New One 元取締役",
  "「TUMUGI ANIMAL FES」実行委員・コンテンツリーダー",
  "株式会社ドッグラン広場 運営スタッフ",
  "大学で一番楽しかった講義：ライオンの解剖実習",
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            学生団体AniCari.について
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            獣医療系学生のキャリア支援を通じて、人と動物の共生社会を目指す学生団体です
          </p>
        </div>
      </section>

      {/* Organization Overview with Image */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-8 items-center mb-16">
            <div className="md:col-span-2">
              <ImagePlaceholder
                label="団体メンバー4名の集合写真"
                aspectRatio="1/1"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%99%B4%E3%80%804%E4%BA%BA%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC-vwW1l5pr8IfOq9vgPMZfqU6djsufqZ.jpg"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                学生団体AniCari.とは
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>創立：2025年11月</p>
                <p>メンバー数：4名</p>
                <p>事業内容：獣医療系学生のキャリア支援事業</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-primary/20">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">ミッション</h3>
              <p className="font-bold text-primary text-lg mb-3">「可能性を広げる」</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                キャリアに関する早期の内省と学習、実践的経験の獲得により、個人の潜在能力が開花し、より自律的で充実した人生設計が可能になる。
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-secondary/20">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <Eye className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">ビジョン</h3>
              <p className="font-bold text-secondary text-lg mb-3">「一歩を踏み出せる場所を提供する」</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                不確実性の中で一人で行動し続けることは困難だからこそ、仲走者と仲間がいる環境で、継続的な成長と挑戦を支援する。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Profile */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            代表プロフィール
          </h2>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Left: Images */}
            <div className="md:col-span-2 space-y-4">
              <ImagePlaceholder
                label="西沢晴さんのポートレート写真"
                aspectRatio="3/4"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_%E8%A5%BF%E6%B2%A2%E5%86%99%E7%9C%9F_260224_6%20%E6%99%B4%E3%81%95%E3%82%93%E3%80%80%E5%86%99%E7%9C%9F-38QOLHyVEtXNQ91WbyRFFr4uPu8Z2P.jpg"
              />
            </div>

            {/* Right: Content */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  西沢 晴（Nishizawa Haru）
                </h3>
                <p className="text-primary font-medium">学生団体AniCari. 代表</p>
              </div>

              <div className="p-5 rounded-xl bg-muted border border-border/50">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-foreground">Why AniCari?</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  高校時代の保護活動を通じて、ボランティアの限界と"動物と人の幸せな共生社会"にはビジネスが必要という気付きを得て、社会起業を志す。現在は大学生活を通し、ペット業界の人材不足や離職率の高さ、教育体制の弱さなど、構造的な課題を実感。この歪みを変えるため、学生が早期から実戦経験を積み、企業と正しく出会える仕組みづくりに挑戦中。
                </p>
              </div>

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

      {/* Activity Stats */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            活動実績
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">第1回 AniCari</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">2025年12月6日開催</p>
              <div className="space-y-2">
                <p className="text-sm"><span className="font-bold text-foreground">参加学生：</span>13名</p>
                <p className="text-sm text-muted-foreground">ヤマザキ動物看護大学、日本大学、専門学校など</p>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-card border border-secondary/20">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">第3回 AniCari</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">2026年4月29日開催</p>
              <div className="space-y-2">
                <p className="text-sm"><span className="font-bold text-foreground">開催形式：</span>日曜19:00〜21:00</p>
                <p className="text-sm text-muted-foreground">継続的な成長を実現</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            一緒に未来を創りませんか？
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            学生の方も、企業の方も、お気軽にお問い合わせください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/for-students#join"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              学生の方へ
            </a>
            <a
              href="/for-companies#sponsor"
              className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors"
            >
              企業の方へ
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
