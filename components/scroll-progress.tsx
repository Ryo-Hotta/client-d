"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const updateScrollProgress = () => {
      if (typeof window === 'undefined') return
      
      const scrollTop = window.pageYOffset
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrollPercent)
    }

    updateScrollProgress()
    window.addEventListener("scroll", updateScrollProgress, { passive: true })
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-50 transition-all duration-150 ease-out"
      style={{ width: `${scrollProgress}%` }}
    />
  )
}
