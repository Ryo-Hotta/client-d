"use client"

import { Users, Building2 } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

export function ValuePropositionSection() {
  const valueImages = [
    { 
      label: "学生同士の対話写真", 
      caption: "キャリア志向の高い仲間との出会い",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%99%B4%E3%80%80%E5%AD%A6%E7%94%9F%E8%A9%B1%E3%81%97%E5%90%88%E3%81%84-pdah6YIjBkZyWjcyvCn5SZdZHtPMKd.jpg"
    },
    { 
      label: "企業担当者と学生の面談", 
      caption: "ペット企業と直接対話できる機会",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%99%B4%E3%80%80%E4%BC%81%E6%A5%AD%E9%9D%A2%E8%AB%87-cOWKimo8pw17ruosoHRVCJ2uUj8D43.jpg"
    },
    { 
      label: "ステージ発表を聞く学生", 
      caption: "早期からのキャリア形成",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%99%B4%E3%80%80%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8%E7%99%BA%E8%A1%A8-2Y48zpGZYDM82WDwPxxTL2X8cC8oIB.jpg"
    },
    { 
      label: "イベント全体の活気", 
      caption: "月次開催で継続的成長",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%99%B4%E3%80%80%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E5%85%A8%E4%BD%93-32Y7xTs905dOBMNPFYdbLj6nIFriDK.jpg"
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            AniCariが提供する価値
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            学生と企業、双方にとって有意義な交流の場を創出
          </p>
        </div>

        {/* 4-Image Grid (2x2) */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          {valueImages.map((image, index) => (
            <div key={index} className="space-y-3 group">
              <div className="overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <ImagePlaceholder
                  label={image.label}
                  aspectRatio="1/1"
                  src={image.src}
                />
              </div>
              <p className="text-sm font-medium text-center text-foreground transition-colors group-hover:text-primary">{image.caption}</p>
            </div>
          ))}
        </div>

        {/* 2-Column Text Area */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Students */}
          <div className="p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">学生にとって</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>キャリア志向の高い仲間との出会い</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>ペット企業と直接対話できる機会</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>スライドを用いて発表</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>月次開催のイベントの様子</span>
              </li>
            </ul>
          </div>

          {/* For Companies */}
          <div className="p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-bold text-foreground">企業にとって</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">✓</span>
                <span>意欲的な獣医療系学生との接点</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">✓</span>
                <span>早期からの企業認知度向上</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">✓</span>
                <span>採用ブランディング強化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">✓</span>
                <span>業界全体への貢献機会</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
