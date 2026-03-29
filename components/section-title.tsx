interface SectionTitleProps {
  title: string
  subtitle?: string
  center?: boolean
}

export function SectionTitle({ title, subtitle, center = true }: SectionTitleProps) {
  return (
    <div className={`mb-10 md:mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
