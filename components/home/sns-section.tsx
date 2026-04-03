import { SectionTitle } from "@/components/section-title"
import { Instagram } from "lucide-react"

export function SnsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="SNSでも情報発信中"
          subtitle="最新情報やお役立ち情報をSNSでも発信しています。お気軽にフォローしてください。"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Instagram */}
          {/* TODO: 要確認 - Instagram URL */}
          <a
            href="https://www.instagram.com/anicari_student?igsh=ODY4MzllbmlhMWR4&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                Instagram
              </p>
              <p className="text-sm text-muted-foreground">フォローする</p>
            </div>
          </a>

          {/* LINE for Business */}
          <a
            href="https://lin.ee/bUjvp8p"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#06C755] flex items-center justify-center">
              <span className="text-white font-bold text-sm">LINE</span>
            </div>
            <div>
              <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                LINE（企業様用）
              </p>
              <p className="text-sm text-muted-foreground">友だち追加</p>
            </div>
          </a>

          {/* LINE for Students */}
          <a
            href="https://lin.ee/v6tmmo1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#06C755] flex items-center justify-center">
              <span className="text-white font-bold text-sm">LINE</span>
            </div>
            <div>
              <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                LINE（学生さん用）
              </p>
              <p className="text-sm text-muted-foreground">友だち追加</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
