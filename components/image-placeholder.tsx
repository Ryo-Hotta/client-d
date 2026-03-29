import { cn } from "@/lib/utils"
import { ImageIcon } from "lucide-react"
import Image from "next/image"

interface ImagePlaceholderProps {
  label: string
  aspectRatio?: "16/9" | "4/3" | "3/4" | "1/1" | "21/9"
  className?: string
  overlay?: boolean
  overlayOpacity?: number
  src?: string
}

export function ImagePlaceholder({
  label,
  aspectRatio = "16/9",
  className,
  overlay = false,
  overlayOpacity = 0.5,
  src,
}: ImagePlaceholderProps) {
  const aspectRatioClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "3/4": "aspect-[3/4]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        src ? "border-0" : "border-2 border-dashed border-primary/30 bg-muted",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      {/* Actual Image */}
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        /* Placeholder Content */
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div className="rounded-full bg-primary/10 p-4">
            <ImageIcon className="h-8 w-8 text-primary" />
          </div>
          <p className="text-sm font-medium text-muted-foreground max-w-xs">
            {label}
          </p>
          <p className="text-xs text-muted-foreground/60">
            画像を後からアップロード可能
          </p>
        </div>
      )}

      {/* Optional Overlay (for hero backgrounds) */}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  )
}
