"use client"

import { cn } from "@/lib/utils"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, CalendarDays, Building2, Users, Briefcase } from "lucide-react"

const navItems = [
  { href: "/", label: "ホーム", icon: Home },
  { href: "/events", label: "イベント", icon: CalendarDays },
  { href: "/about", label: "団体", icon: Building2 },
  { href: "/for-students", label: "学生", icon: Users },
  { href: "/for-companies", label: "企業", icon: Briefcase },
]

export function BottomNav() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border safe-area-pb">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const active = isActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full px-2 transition-colors",
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon
                className={cn("h-5 w-5", active && "stroke-[2.5]")}
              />
              <span
                className={cn(
                  "text-[10px]",
                  active ? "font-bold" : "font-medium"
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
