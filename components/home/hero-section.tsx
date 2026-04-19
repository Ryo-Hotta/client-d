"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, Building2, ChevronDown } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="イベント交流風景の写真"
          aspectRatio="16/9"
          className="w-full h-full rounded-none"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%99%B4%E3%80%801-0M7Sde2ukTfJWuGe0nPtaYfvXVisNR.jpg"
          overlay
          overlayOpacity={0.85}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto text-white">
          {/* Main Heading */}
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight" 
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}
          >
            獣医療系学生とペット企業をつなぐ、
            <br />
            キャリア交流の場
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg md:text-2xl mb-4 text-balance leading-relaxed" 
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7), 0 3px 12px rgba(0,0,0,0.5)' }}
          >
            月1回開催。意欲的な学生と企業が直接対話し、未来を創る場所
          </p>

          {/* Mission Statement */}
          <div className="inline-block mb-10">
            <p className="text-base md:text-xl font-medium" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>
              「人と動物の幸せな共生社会」の実現を目指して
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full w-full sm:w-auto sm:min-w-[240px] text-base hover:scale-105 transition-transform">
              <Link href="/events#next">
                <CalendarDays className="mr-2 h-5 w-5" />
                次回イベント情報（4/26開催）
              </Link>
            </Button>
            <Button asChild size="lg" className="rounded-full w-full sm:w-auto sm:min-w-[240px] bg-secondary hover:bg-secondary/90 text-base hover:scale-105 transition-transform">
              <Link href="/for-companies#sponsor">
                <Building2 className="mr-2 h-5 w-5" />
                企業スポンサー募集
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-xs tracking-wider">SCROLL</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
