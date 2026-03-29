import { Calendar, Users, GraduationCap, Award } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

export function PastEventSection() {
  const schools = [
    { name: "ヤマザキ動物看護大学（国家資格指定校）", count: 8 },
    { name: "日本大学 生物資源科学部 獣医保健看護学科", count: 2 },
    { name: "ヤマザキ動物看護専門学校（国家資格指定校）", count: 1 },
    { name: "動物病院・トリマー志望の高校3年生", count: 2 }
  ]

  const gradeBreakdown = [
    { grade: "大学1年生", count: 4 },
    { grade: "大学2年生", count: 2 },
    { grade: "大学3年生", count: 7 }
  ]

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            【第1回 AniCari 開催報告】
          </h2>
          <p className="text-lg text-muted-foreground">
            2025年12月6日（土）に第1回イベントを開催しました
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold text-foreground mb-1">12/6</p>
            <p className="text-sm text-muted-foreground">開催日</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold text-foreground mb-1">13名</p>
            <p className="text-sm text-muted-foreground">学生参加者</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <GraduationCap className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold text-foreground mb-1">4校</p>
            <p className="text-sm text-muted-foreground">参加学校数</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <Award className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold text-foreground mb-1">3社</p>
            <p className="text-sm text-muted-foreground">参加企業数</p>
          </div>
        </div>

        {/* School Breakdown */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">参加学校内訳</h3>
            <ul className="space-y-3">
              {schools.map((school, index) => (
                <li key={index} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{school.name}</span>
                  <span className="font-bold text-foreground">{school.count}名</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">学年内訳</h3>
            <ul className="space-y-3">
              {gradeBreakdown.map((item, index) => (
                <li key={index} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{item.grade}</span>
                  <span className="font-bold text-foreground">{item.count}名</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
