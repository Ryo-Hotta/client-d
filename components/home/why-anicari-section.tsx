import { TrendingUp, Calendar, Users } from "lucide-react"

export function WhyAniCariSection() {
  const reasons = [
    {
      icon: TrendingUp,
      number: "01",
      title: "人材不足だからこそ活躍の場が豊富",
      description: "人材不足が深刻な業界だからこそ、学生にとって多様な選択肢と出会い、自分が輝ける場所を発見する機会となる。企業にとっては次世代を担う人材と早期に接点を持てる貴重な場。"
    },
    {
      icon: Calendar,
      number: "02",
      title: "早期のキャリア形成が未来を拓く",
      description: "在学中の限られた時間での進路選択がミスマッチや早期離職のリスクに繋がる。学生時代からの計画的なキャリア探索により、自分に合った理想の進路を見つけられる。"
    },
    {
      icon: Users,
      number: "03",
      title: "継続的な成長を支える仕組みがある",
      description: "定期的なキャリア交流の場が少ない業界だからこそ、月次開催で継続的に成長を支援し、仲走者と共に一歩を踏み出せる環境を創る。"
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            なぜAniCariが必要なのか
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            業界の課題に向き合い、学生と企業の未来を創る
          </p>
        </div>

        {/* Reasons */}
        <div className="space-y-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon & Number */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <reason.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-5xl font-bold text-primary/20">{reason.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
