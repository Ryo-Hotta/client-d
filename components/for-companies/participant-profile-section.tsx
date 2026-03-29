import { GraduationCap, Users, TrendingUp } from "lucide-react"

export function ParticipantProfileSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            参加学生プロフィール
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            第1回イベントに参加した学生の属性データ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Total Participants */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-card border border-primary/20">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">13名</div>
            <p className="text-sm text-muted-foreground">第1回参加学生数</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">次回は32名の参加を予定</p>
            </div>
          </div>

          {/* Schools */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-card border border-accent/20">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <GraduationCap className="h-7 w-7 text-accent" />
            </div>
            <div className="text-4xl font-bold text-accent mb-2">4校</div>
            <p className="text-sm text-muted-foreground">参加大学・専門学校</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">国家資格指定校を含む</p>
            </div>
          </div>

          {/* Diversity */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-card border border-primary/20">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">1〜3年</div>
            <p className="text-sm text-muted-foreground">学年の幅広さ</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">早期接点を確保可能</p>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">参加学生の内訳</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Schools */}
              <div>
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  所属校
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">ヤマザキ動物看護大学</span>
                    <span className="font-bold text-primary">8名</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">日本大学 獣医保健看護学科</span>
                    <span className="font-bold text-primary">2名</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">ヤマザキ動物看護専門学校</span>
                    <span className="font-bold text-primary">1名</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">高校3年生（志望者）</span>
                    <span className="font-bold text-primary">2名</span>
                  </div>
                </div>
              </div>

              {/* Grades */}
              <div>
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  学年別
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">大学1年生</span>
                      <span className="text-lg font-bold text-primary">4名</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "31%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">大学2年生</span>
                      <span className="text-lg font-bold text-primary">2名</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "15%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">大学3年生</span>
                      <span className="text-lg font-bold text-primary">7名</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: "54%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-bold text-primary">ポテンシャル層</span>の学生が中心。
                早期から企業との接点を持つことで、長期的な関係構築が可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
