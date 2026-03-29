import { SectionTitle } from "@/components/section-title"
import { AlertCircle, MessageCircleOff, Users } from "lucide-react"

const problems = [
  {
    icon: MessageCircleOff,
    title: "SNSだけだと情報が散る",
    description: "投稿は流れてしまい、伝えたい理念やサービスの全体像が見えにくくなっていませんか？",
  },
  {
    icon: AlertCircle,
    title: "理念が伝わらない",
    description: "「どんな想いで事業をしているか」「なぜこの仕事を選んだか」が届きにくい。",
  },
  {
    icon: Users,
    title: "予約・問い合わせが増えない",
    description: "SNSのフォロワーは増えても、実際の予約や問い合わせにつながりにくい。",
  },
]

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="こんなお悩みはありませんか？"
          subtitle="ペット・動物業界でSNSを活用している企業様・学生さんの共通課題"
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <problem.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
