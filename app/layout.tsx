import React from "react"
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BottomNav } from '@/components/bottom-nav'
import { ScrollProgress } from '@/components/scroll-progress'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'AniCari. | 獣医療系学生とペット企業をつなぐキャリア交流イベント',
    template: '%s | AniCari.',
  },
  description: '獣医療系学生とペット企業が直接対話する月次キャリア交流イベント。「人と動物の幸せな共生社会」の実現を目指す学生団体AniCari.が主催。',
  keywords: ['獣医療系学生', 'ペット企業', 'キャリア交流', '学生団体', '動物看護師', '獣医学生', 'AniCari'],
  openGraph: {
    title: 'AniCari. | 獣医療系学生とペット企業をつなぐキャリア交流イベント',
    description: '獣医療系学生とペット企業が直接対話する月次キャリア交流イベント',
    type: 'website',
    locale: 'ja_JP',
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#FF6B35',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        <ScrollProgress />
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  )
}
