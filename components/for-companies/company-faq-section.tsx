"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function CompanyFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "スポンサー申し込みの流れを教えてください",
      answer: "お問い合わせフォームまたはメールにて申し込み後、詳細なヒアリングを行います。その後、契約内容を確認いただき、正式にスポンサーとして参加いただけます。イベント2週間前までにお申し込みください。"
    },
    {
      question: "支払い方法について教えてください",
      answer: "銀行振込にて承っております。請求書を発行いたしますので、イベント開催の1週間前までにお振り込みください。領収書の発行も可能です。"
    },
    {
      question: "プレゼンテーション時間はどのくらいですか？",
      answer: "ステージでの企業紹介は、1社あたり5〜10分程度を予定しています。具体的な時間配分は参加企業数に応じて調整いたします。"
    },
    {
      question: "ブースのサイズや設備について教えてください",
      answer: "プラチナプランのブースは、テーブル1台・椅子2脚を基本とした対面式のスペースです。電源も利用可能です。追加の設備が必要な場合はご相談ください。"
    },
    {
      question: "配布資料の部数はどのくらい必要ですか？",
      answer: "参加学生数分（次回は32名分）をご準備ください。予備を含めて40部程度あると安心です。大きさや重さに制限はありません。"
    },
    {
      question: "イベント後のフォローアップはどのように行いますか？",
      answer: "興味を持った学生の連絡先（許可を得たもの）をお渡しします。また、イベント報告書もお送りしますので、今後の採用活動にお役立てください。"
    },
    {
      question: "複数回スポンサーの割引について詳しく教えてください",
      answer: "3回以上のスポンサーをご契約いただく場合、割引価格でのご提供が可能です。詳細はお問い合わせフォームからご相談ください。"
    },
    {
      question: "遠方からの参加ですが、宿泊施設の紹介はありますか？",
      answer: "会場周辺のホテル情報をご案内いたします。宿泊費は企業様のご負担となりますが、アクセスの良い施設をご紹介いたします。"
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
            企業様からよく寄せられる質問にお答えします
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-xl bg-card border border-border overflow-hidden hover:border-accent/30 transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-bold text-foreground">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-accent shrink-0 transition-transform",
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
