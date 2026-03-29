import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon?: LucideIcon
  className?: string
}

export function FeatureCard({ title, description, icon: Icon, className = "" }: FeatureCardProps) {
  return (
    <Card className={`bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <CardHeader className="pb-3">
        {Icon && (
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
