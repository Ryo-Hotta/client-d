import { Quote } from "lucide-react"

export function StudentTestimonialsSection() {
  const testimonials = [
    {
      name: "Y.M.さん",
      school: "ヤマザキ動物看護大学 2年生",
      text: "同じ志を持つ学生と出会えて、とても刺激になりました。企業の方とも直接お話しできて、業界のリアルな情報が聞けたのが良かったです。",
      color: "primary"
    },
    {
      name: "S.K.さん",
      school: "日本大学 獣医保健看護学科 3年生",
      text: "就活前に企業を知る機会があって助かりました。実際に働いている方の話を聞いて、自分のキャリアプランを具体的に考えられるようになりました。",
      color: "accent"
    },
    {
      name: "R.T.さん",
      school: "ヤマザキ動物看護専門学校 1年生",
      text: "1年生から参加できて良かったです。早い段階から業界を知ることで、これからの学びの目的が明確になりました。次回も参加したいです！",
      color: "primary"
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            参加学生の声
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            第1回イベントに参加した学生からの感想
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-lg ${testimonial.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center mb-4`}>
                <Quote className={`h-5 w-5 ${testimonial.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.school}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 p-4 rounded-xl bg-card border border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            ※ 参加学生のプライバシー保護のため、イニシャル表記としています
          </p>
        </div>
      </div>
    </section>
  )
}
