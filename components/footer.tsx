import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/events", label: "イベント情報" },
  { href: "/about", label: "団体について" },
  { href: "/for-companies", label: "企業の方へ" },
  { href: "/for-students", label: "学生の方へ" },
  { href: "/contact", label: "お問い合わせ" },
]

const quickLinks = [
  { href: "/events#next", label: "次回イベント情報" },
  { href: "/for-companies#sponsor", label: "企業スポンサー募集" },
  { href: "/for-students#join", label: "学生参加申し込み" },
]

const studentLinks = [
  { href: "/for-students#join", label: "学生参加申し込み", external: false },
  { href: "/for-students#faq", label: "FAQ", external: false },
  { href: "https://example.com/student-resources", label: "学生リソース", external: true },
]

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-primary">AniCari.</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
              獣医療系学生とペット企業をつなぐ月次キャリア交流イベント。
              「人と動物の幸せな共生社会」の実現を目指す学生団体。
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>創立：2025年11月</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">次回イベント：2026年4月29日（日）</span>
              </div>
            </div>
            {/* SNS Links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/anicari_student?igsh=ODY4MzllbmlhMWR4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-foreground mb-4">ナビゲーション</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">クイックリンク</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              学生団体AniCari. | 代表：西沢 晴（Nishizawa Haru）
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} AniCari. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
