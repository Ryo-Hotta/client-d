import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Calendar, Users, CheckCircle } from "lucide-react"

export function HowToJoinSection() {
  const steps = [
    {
      number: "01",
      icon: Mail,
      title: "参加申し込み",
      description: "下記のフォームまたはLINEから参加申し込みをしてください。"
    },
    {
      number: "02",
      icon: CheckCircle,
      title: "申し込み確認",
      description: "申し込み内容を確認後、参加確定のご連絡をいたします。"
    },
    {
      number: "03",
      icon: Calendar,
      title: "イベント詳細の案内",
      description: "開催日の数日前に、当日の詳細情報をお送りします。"
    },
    {
      number: "04",
      icon: Users,
      title: "イベント当日参加",
      description: "会場にお越しいただき、企業や仲間との交流をお楽しみください！"
    }
  ]

  return (
    <section id="join" className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            参加方法
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            簡単4ステップで参加できます
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="relative p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-3xl font-bold text-primary/20">{step.number}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Application Methods */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">申し込み方法</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Contact Form */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-card border border-primary/20">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">お問い合わせフォーム</h4>
              <p className="text-sm text-muted-foreground mb-6">
                フォームから必要事項を入力して申し込みできます
              </p>
              <Button asChild className="w-full rounded-full">
                <Link href="/contact">
                  フォームから申し込む
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* LINE */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-card border border-accent/20">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent font-bold text-xl">
                LINE
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">LINEで申し込み</h4>
              <p className="text-sm text-muted-foreground mb-6">
                LINEの公式アカウントから気軽に申し込みできます
              </p>
              <Button 
                asChild 
                className="w-full rounded-full" 
                style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
              >
                <Link href="https://lin.ee/v6tmmo1" target="_blank" rel="noopener noreferrer">
                  LINEで申し込む
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Eligibility */}
          <div className="p-6 rounded-xl bg-secondary border border-border">
            <h4 className="font-bold text-foreground mb-3">参加対象</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>獣医療系の学生（獣医学生、動物看護学生など）</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>愛玩動物看護師を目指す方</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>ペット業界でのキャリアに興味がある方</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
