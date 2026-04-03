import { Instagram } from "lucide-react"

export function SnsLinks() {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border/50">
      <h3 className="font-bold text-foreground mb-4">
        SNSからもお問い合わせいただけます
      </h3>
      <div className="space-y-3">
        {/* Instagram */}
        {/* TODO: 要確認 - Instagram URL */}
        <a
          href="https://www.instagram.com/anicari_student?igsh=ODY4MzllbmlhMWR4&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Instagram className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-medium text-foreground text-sm">Instagram</p>
            <p className="text-xs text-muted-foreground">DMでお問い合わせ</p>
          </div>
        </a>

        {/* LINE for Business */}
        <a
          href="https://lin.ee/bUjvp8p"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-[#06C755] flex items-center justify-center">
            <span className="text-white font-bold text-xs">LINE</span>
          </div>
          <div>
            <p className="font-medium text-foreground text-sm">LINE（企業様用）</p>
            <p className="text-xs text-muted-foreground">友だち追加してお問い合わせ</p>
          </div>
        </a>

        {/* LINE for Students */}
        <a
          href="https://lin.ee/v6tmmo1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-[#06C755] flex items-center justify-center">
            <span className="text-white font-bold text-xs">LINE</span>
          </div>
          <div>
            <p className="font-medium text-foreground text-sm">LINE（学生さん用）</p>
            <p className="text-xs text-muted-foreground">友だち追加してお問い合わせ</p>
          </div>
        </a>
      </div>
    </div>
  )
}
