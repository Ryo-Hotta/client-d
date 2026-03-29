import Link from "next/link"
import type { Metadata } from "next"
import { SectionTitle } from "@/components/section-title"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  GraduationCap, 
  Users, 
  Megaphone, 
  MessageSquare,
  Briefcase,
  FileSearch,
  Calendar,
  CheckCircle,
  Heart,
  CalendarDays,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "サービス",
  description: "アニキャリは、ペット・動物業界の企業様向けに採用・広報支援、学生さん向けにキャリア相談・求人紹介を提供しています。",
}

const businessServices = [
  {
    icon: Users,
    title: "求人・採用支援",
    description: "ペット業界に特化した採用活動をサポート。求人票の作成から、適切な人材とのマッチングまで、採用成功に向けて伴走します。",
  },
  {
    icon: Megaphone,
    title: "広報支援",
    description: "SNSやWebを活用した広報活動をサポート。企業の理念や魅力を効果的に発信し、ブランド価値を高めます。",
  },
  {
    icon: MessageSquare,
    title: "相談窓口",
    description: "採用や人材育成、事業運営に関するお悩みを気軽にご相談いただけます。業界経験豊富なスタッフが丁寧にお答えします。",
  },
]

const studentServices = [
  {
    icon: Briefcase,
    title: "キャリア相談",
    description: "将来の目標や不安、希望条件など、何でもお話しください。あなたの想いに寄り添い、最適なキャリアパスを一緒に考えます。",
  },
  {
    icon: FileSearch,
    title: "求人紹介",
    description: "あなたの希望や適性に合った求人をご紹介。動物病院、ペットホテル、トリミングサロンなど、幅広い求人情報をお届けします。",
  },
  {
    icon: Calendar,
    title: "面談予約",
    description: "オンラインまたは対面での面談を予約できます。就活の進め方から面接対策まで、しっかりサポートします。",
  },
]

const comparisons = [
  {
    aspect: "対応スタイル",
    others: "規模を活かした効率重視",
    anicary: "お一人おひとりに寄り添う伴走型",
  },
  {
    aspect: "コミュニケーション",
    others: "システム化された対応",
    anicary: "温かみのある丁寧な対話",
  },
  {
    aspect: "業界理解",
    others: "幅広い業界を網羅",
    anicary: "ペット・動物業界に特化した専門性",
  },
  {
    aspect: "サポート範囲",
    others: "紹介・マッチング中心",
    anicary: "相談から定着まで継続サポート",
  },
]

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            サービス紹介
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            企業様と学生さん、それぞれのニーズに合わせた
            きめ細やかなサポートをご提供しています。
          </p>
        </div>
      </section>

      {/* For Business */}
      <section id="business" className="py-16 md:py-24 bg-background scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              企業様向け
            </span>
          </div>
          
          <SectionTitle
            title="採用・広報支援サービス"
            subtitle="ペット業界・動物業界の企業様の採用活動と広報をトータルでサポートします。"
            center={false}
          />

          <div className="grid md:grid-cols-3 gap-6">
            {businessServices.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Business Image Placeholder */}
          <div className="mt-12 rounded-2xl overflow-hidden bg-muted aspect-[3/1] flex items-center justify-center">
            {/* TODO: 後で写真を差し替え - 企業サービスのイメージ画像 */}
            <p className="text-sm text-muted-foreground">企業様向けサービスイメージ（後日差し替え）</p>
          </div>
        </div>
      </section>

      {/* For Students */}
      <section id="student" className="py-16 md:py-24 bg-secondary scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              学生さん向け
            </span>
          </div>
          
          <SectionTitle
            title="キャリア相談・求人紹介サービス"
            subtitle="動物看護学生など、ペット業界を目指す方のキャリアを全力でサポートします。"
            center={false}
          />

          <div className="grid md:grid-cols-3 gap-6">
            {studentServices.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Events CTA Card */}
          <div className="mt-8 p-6 rounded-2xl bg-card border border-primary/20 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <CalendarDays className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">イベントに参加しよう</h4>
                  <p className="text-sm text-muted-foreground">セミナーや説明会など、就活に役立つイベントを開催中</p>
                </div>
              </div>
              <Button asChild className="rounded-full md:shrink-0">
                <Link href="/events">
                  イベント一覧を見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Student Image Placeholder */}
          <div className="mt-12 rounded-2xl overflow-hidden bg-muted aspect-[3/1] flex items-center justify-center">
            {/* TODO: 後で写真を差し替え - 学生サービスのイメージ画像 */}
            <p className="text-sm text-muted-foreground">学生さん向けサービスイメージ（後日差し替え）</p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            title="アニキャリの強み"
            subtitle="大手にはない、温かみのある伴走型サポートが私たちの特長です。"
          />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-4 text-left text-sm font-medium text-muted-foreground">
                    比較ポイント
                  </th>
                  <th className="py-4 px-4 text-left text-sm font-medium text-muted-foreground">
                    一般的なサービス
                  </th>
                  <th className="py-4 px-4 text-left text-sm font-medium text-primary bg-primary/5 rounded-t-lg">
                    アニキャリ
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={item.aspect} className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium text-foreground">
                      {item.aspect}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground text-sm">
                      {item.others}
                    </td>
                    <td className="py-4 px-4 bg-primary/5 text-foreground text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item.anicary}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-secondary border border-border/50 flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold text-foreground mb-1">
                「規模」ではなく「温かさ」で選ばれるサービスを目指しています
              </p>
              <p className="text-sm text-muted-foreground">
                大手企業にはない、一人ひとりに寄り添った丁寧なサポートで、
                企業様と学生さんの理想の出会いをお手伝いします。
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
