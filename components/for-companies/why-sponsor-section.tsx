import { Users, Sparkles, DollarSign, Target } from "lucide-react"

export function WhySponsorSection() {
  const benefits = [
    {
      icon: Users,
      title: "動物系学生との直接的な接点を創出",
      description: "意欲的な学生層に直接アプローチできる場。通常の採用活動では出会えない、キャリア志向の高い学生と対話できます。"
    },
    {
      icon: Sparkles,
      title: "質の高いマッチング機会",
      description: "自ら情報を求めて参加する学生ばかりなので、採用のミスマッチを防ぎ、企業と学生双方にとって有意義な出会いを実現します。"
    },
    {
      icon: DollarSign,
      title: "採用コスト・工数の削減",
      description: "効率的な母集団形成により、従来の採用活動と比べてコストと時間を大幅に削減。32名との接点を一度に確保できます。"
    },
    {
      icon: Target,
      title: "業界・学生へのブランディング効果",
      description: "次世代人材への認知度向上と好印象形成。イベントを通じて企業の魅力を直接伝え、採用ブランド価値を高められます。"
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            スポンサーになるメリット
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            効率的な採用活動とブランディングを同時に実現
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
