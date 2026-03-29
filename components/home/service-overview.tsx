import Link from "next/link"
import { SectionTitle } from "@/components/section-title"
import { Button } from "@/components/ui/button"
import { Building2, GraduationCap, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Building2,
    target: "企業様向け",
    title: "採用・広報支援",
    description: "ペット業界・動物業界での採用活動、広報、SNS発信をサポート。理念を整理し、求職者に届く形でお伝えします。",
    features: ["求人・採用支援", "広報支援", "相談窓口"],
    href: "/service#business",
  },
  {
    icon: GraduationCap,
    target: "学生さん向け",
    title: "キャリア相談・求人紹介",
    description: "動物看護学生など、ペット業界を目指す方のキャリアをサポート。あなたの想いに寄り添い、最適な就職先を一緒に探します。",
    features: ["キャリア相談", "求人紹介", "面談予約"],
    href: "/service#student",
  },
]

export function ServiceOverview() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="アニキャリのサービス"
          subtitle="企業様と学生さん、それぞれのニーズに合わせたサポートをご提供します。"
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.target}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {service.target}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-full bg-transparent">
                  <Link href={service.href}>
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {service.target === "学生さん向け" && (
                  <Button asChild className="rounded-full">
                    <Link href="/events">
                      イベント一覧
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
