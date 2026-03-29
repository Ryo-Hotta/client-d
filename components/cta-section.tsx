import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
  variant?: "default" | "primary"
}

export function CTASection({
  title = "まずはお気軽にご相談ください",
  subtitle = "ペット・動物業界での採用活動やキャリアについて、丁寧にヒアリングいたします。",
  primaryText = "無料相談を予約する",
  primaryHref = "/contact#reserve",
  secondaryText = "問い合わせる",
  secondaryHref = "/contact",
  variant = "default",
}: CTASectionProps) {
  const bgClass = variant === "primary" 
    ? "bg-primary text-primary-foreground" 
    : "bg-secondary"

  return (
    <section className={`py-16 md:py-20 ${bgClass}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 text-balance ${
          variant === "primary" ? "text-primary-foreground" : "text-foreground"
        }`}>
          {title}
        </h2>
        <p className={`mb-8 max-w-2xl mx-auto leading-relaxed ${
          variant === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"
        }`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className={`rounded-full px-8 ${
              variant === "primary" 
                ? "bg-white text-primary hover:bg-white/90" 
                : ""
            }`}
          >
            <Link href={primaryHref}>{primaryText}</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className={`rounded-full px-8 ${
              variant === "primary" 
                ? "border-white/30 text-primary-foreground hover:bg-white/10 bg-transparent" 
                : ""
            }`}
          >
            <Link href={secondaryHref}>{secondaryText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
