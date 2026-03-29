import { SectionTitle } from "@/components/section-title"

const steps = [
  {
    number: "01",
    title: "お問い合わせ・予約",
    description: "フォームまたはLINEから、お気軽にご連絡ください。ご希望の日時をお知らせいただければ、無料相談の日程を調整いたします。",
  },
  {
    number: "02",
    title: "ヒアリング・ご相談",
    description: "オンラインまたは対面で、現在の状況やお悩み、ご要望を丁寧にお聞きします。企業様も学生さんも、まずはお話しください。",
  },
  {
    number: "03",
    title: "ご提案・サポート開始",
    description: "ヒアリング内容をもとに、最適なプランやマッチングをご提案。ご納得いただけたら、サポートを開始します。",
  },
]

export function FlowSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="ご相談から開始までの流れ"
          subtitle="3つのステップで、スムーズにサポートを開始できます。"
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-5 mx-auto md:mx-0">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 text-center md:text-left">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-center md:text-left">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
