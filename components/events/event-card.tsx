import Link from "next/link"
import { Calendar, MapPin, Users, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  type Event,
  type EventStatus,
  getEventStatus,
  getAgeRangeLabel,
  getFormatLabel,
} from "@/data/events"

interface EventCardProps {
  event: Event
}

function StatusBadge({ status }: { status: EventStatus }) {
  const config = {
    open: {
      label: "募集中",
      className: "bg-primary text-primary-foreground",
    },
    planned: {
      label: "開催予定",
      className: "bg-amber-500 text-white",
    },
    closed: {
      label: "終了",
      className: "bg-muted text-muted-foreground",
    },
  }

  const { label, className } = config[status]

  return <Badge className={className}>{label}</Badge>
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function EventCard({ event }: EventCardProps) {
  const status = getEventStatus(event)
  const formatLabel = getFormatLabel(event.format)
  const ageLabel = getAgeRangeLabel(event)

  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <StatusBadge status={status} />
          {formatLabel && (
            <Badge variant="outline" className="text-xs">
              <Monitor className="h-3 w-3 mr-1" />
              {formatLabel}
            </Badge>
          )}
        </div>
        <h3 className="font-bold text-foreground leading-snug line-clamp-2">
          {event.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {event.summary}
        </p>

        <div className="space-y-2 text-sm">
          {/* 開催日 */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 shrink-0" />
            <span>
              {formatDate(event.startDate)}
              {event.endDate && event.endDate !== event.startDate && (
                <> 〜 {formatDate(event.endDate)}</>
              )}
            </span>
          </div>

          {/* 場所 */}
          {event.location && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
          )}

          {/* 対象年齢 */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 shrink-0" />
            <span>対象: {ageLabel}</span>
          </div>

          {/* 申込締切 */}
          {event.applicationDeadline && status !== "closed" && (
            <p className="text-xs text-amber-600 font-medium">
              申込締切: {formatDate(event.applicationDeadline)}
            </p>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        {status === "open" && (
          <Button asChild className="w-full rounded-full">
            {event.ctaUrl ? (
              <a href={event.ctaUrl} target="_blank" rel="noopener noreferrer">
                参加を申し込む
              </a>
            ) : (
              <Link href="/contact">参加を申し込む</Link>
            )}
          </Button>
        )}

        {status === "planned" && (
          <div className="w-full space-y-2">
            <Button asChild variant="outline" className="w-full rounded-full bg-transparent">
              <Link href="/contact">詳細を問い合わせる</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full text-sm">
              {/* TODO: 要確認 - 学生向けLINEのURLを設定してください */}
              <a
                href="https://line.me/R/ti/p/@anicareer-student"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINEで最新情報を受け取る
              </a>
            </Button>
          </div>
        )}

        {status === "closed" && (
          <Button
            asChild
            variant="ghost"
            className="w-full text-muted-foreground"
          >
            <Link href="/events?status=open">他のイベントを見る</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
