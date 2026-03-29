"use client"

import { useState, useEffect } from "react"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  "学生と企業の面談風景",
  "ステージ発表の様子",
  "クイズ大会で盛り上がる参加者",
  "企業ブースでの説明",
  "参加者全員の集合写真",
]

export function PhotoCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
  }

  return (
    null
  )
}
