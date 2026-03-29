import { SectionTitle } from "@/components/section-title"
import { Shield, Clock, HeartHandshake, FileCheck } from "lucide-react"

const trustPoints = [
  {
    icon: HeartHandshake,
    title: "丁寧なヒアリング",
    description: "お一人おひとりの想いや状況を丁寧にお聞きし、最適なご提案をいたします。",
  },
  {
    icon: Shield,
    title: "情報の守秘徹底",
    description: "ご相談内容や個人情報は厳重に管理。安心してお話しいただけます。",
  },
  {
    icon: Clock,
    title: "スピーディーな対応",
    description: "お問い合わせには迅速にご返信。お待たせしない対応を心がけています。",
  },
  {
    icon: FileCheck,
    title: "幅広い対応領域",
    description: "採用から広報、キャリア相談まで、ペット・動物業界に特化した幅広いサポート。",
  },
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="アニキャリが選ばれる理由"
          subtitle="大手にはない、伴走型の温かいサポートをお約束します。"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="text-center p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <point.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
