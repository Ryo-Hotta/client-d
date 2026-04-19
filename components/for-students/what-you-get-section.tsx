import { Users, Building2, Target, TrendingUp, Heart, Sparkles } from "lucide-react"

export function WhatYouGetSection() {
  const benefits = [
    {
      icon: Users,
      title: "キャリア志向の高い仲間との出会い",
      description: "同じ目標を持ち、意欲的に行動する学生と交流できます。互いに刺激し合い、成長を加速させる仲間との出会いが待っています。",
      color: "primary"
    },
    {
      icon: Building2,
      title: "ペット企業と直接対話できる貴重な機会",
      description: "企業ブースでの個別面談やステージ発表を通じて、実際に働く方から直接話を聞き、質問できます。普段は得られない生の情報が手に入ります。",
      color: "accent"
    },
    {
      icon: Target,
      title: "早期からのキャリア形成と自己分析",
      description: "在学中から自分の強みや興味を深く理解し、計画的にキャリアを設計できます。ミスマッチを防ぎ、理想の進路を見つけられます。",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "月次開催で継続的な成長をサポート",
      description: "一度きりではなく、月1回の定期開催で段階的にスキルと視野を広げられます。継続的な参加で着実に成長を実感できます。",
      color: "accent"
    },
    {
      icon: Heart,
      title: "人と動物の共生社会への貢献",
      description: "業界の未来を担う一員として、社会課題の解決に貢献できます。あなたの学びと経験が、より良い未来を創ります。",
      color: "primary"
    },
    {
      icon: Sparkles,
      title: "実践的な経験と自信の獲得",
      description: "企業との対話やネットワーキングを通じて、実践的なコミュニケーション力が身につきます。就職活動にも直結するスキルです。",
      color: "accent"
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            AniCariで得られるもの
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            参加することで、キャリアと人生の可能性が大きく広がります
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 rounded-xl ${benefit.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center mb-4`}>
                <benefit.icon className={`h-6 w-6 ${benefit.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
              </div>
              <h3 className="font-bold text-foreground mb-2 leading-snug">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
