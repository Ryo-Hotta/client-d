import { Clock, Shield, Info } from "lucide-react"

const notes = [
  {
    icon: Clock,
    title: "返信について",
    description: "2営業日以内にご返信いたします。お急ぎの場合はLINEをご利用ください。",
  },
  {
    icon: Shield,
    title: "個人情報の取り扱い",
    description: "ご入力いただいた情報は厳重に管理し、お問い合わせ対応以外には使用しません。",
  },
  {
    icon: Info,
    title: "対応時間",
    description: "平日 10:00〜18:00（土日祝を除く）",
  },
]

export function ContactNotes() {
  return (
    <div className="p-6 rounded-2xl bg-secondary border border-border/50">
      <h3 className="font-bold text-foreground mb-4">ご注意事項</h3>
      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note.title} className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <note.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">{note.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                {note.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
