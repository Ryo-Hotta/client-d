"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function StudentFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "参加費はかかりますか？",
      answer: "いいえ、学生の方の参加は完全無料です。企業とのマッチング機会を平等に提供するため、費用は一切いただいておりません。"
    },
    {
      question: "どの学年から参加できますか？",
      answer: "1年生から参加可能です。早い段階からキャリアを考えることで、より充実した学生生活と進路選択ができます。高校生の方もご相談ください。"
    },
    {
      question: "服装はどうすればいいですか？",
      answer: "私服で問題ありません。ただし、企業の方と直接お話しする場になりますので、清潔感のある服装をお勧めします。"
    },
    {
      question: "イベント当日の持ち物は？",
      answer: "筆記用具とメモ帳をお持ちください。また、名刺をお持ちの方はご持参いただくとスムーズです。企業の資料を持ち帰ることもあるため、A4サイズが入るバッグがあると便利です。"
    },
    {
      question: "毎回参加しないといけませんか？",
      answer: "いいえ、単発参加も大歓迎です。ただし、継続的に参加することで、より深い学びと成長が得られます。月1回の開催ですので、スケジュールに合わせてご参加ください。"
    },
    {
      question: "友達と一緒に参加できますか？",
      answer: "はい、もちろん可能です。友達と一緒に参加することで、イベント後も互いに刺激し合いながら成長できます。お誘い合わせの上、ぜひご参加ください。"
    },
    {
      question: "申し込み後にキャンセルできますか？",
      answer: "はい、可能です。ただし、企業様の準備の都合上、できるだけ早めにご連絡ください。無断欠席はご遠慮ください。"
    },
    {
      question: "オンライン参加はできますか？",
      answer: "現在は対面開催のみですが、今後オンライン開催も検討しています。遠方の方や日程が合わない方は、お問い合わせフォームからご相談ください。"
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            よくある質問
          </h2>
          <p className="text-muted-foreground text-lg">
            学生からよく寄せられる質問にお答えします
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-bold text-foreground">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-primary shrink-0 transition-transform",
                    openIndex === index && "rotate-180"
                  )} 
                />
              </button>
              {openIndex === index && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Note */}
        <div className="mt-8 p-6 rounded-xl bg-secondary border border-border text-center">
          <p className="text-sm text-card">
            その他ご不明な点がございましたら、
            <a href="/contact" className="font-medium hover:underline ml-1 text-card">
              お問い合わせフォーム
            </a>
            からお気軽にご連絡ください。
          </p>
        </div>
      </div>
    </section>
  )
}
