"use client"

import { cn } from "@/lib/utils"

import { useSearchParams, useRouter } from "next/navigation"
import { useCallback, useMemo, Suspense } from "react"
import { Search, X, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { events, getEventStatus, getAcademicYear } from "@/data/events"
import { EventCard } from "./event-card"
import { CTASection } from "@/components/cta-section"

// 年度の選択肢を生成
const years = Array.from(
  new Set(events.map((e) => getAcademicYear(e.startDate)))
).sort((a, b) => b - a)

// 月の選択肢
const months = Array.from({ length: 12 }, (_, i) => i + 1)

// 年齢範囲の選択肢
const ageRanges = [
  { value: "all", label: "全年齢" },
  { value: "18-22", label: "18-22歳" },
  { value: "23-26", label: "23-26歳" },
  { value: "27+", label: "27歳以上" },
]

// 開催形式の選択肢
const formats = [
  { value: "all", label: "すべて" },
  { value: "online", label: "オンライン" },
  { value: "offline", label: "オフライン" },
  { value: "hybrid", label: "ハイブリッド" },
]

// ステータスの選択肢
const statuses = [
  { value: "all", label: "すべて" },
  { value: "open", label: "募集中" },
  { value: "planned", label: "開催予定" },
  { value: "closed", label: "終了" },
]

function EventsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // URLパラメータから状態を取得
  const query = searchParams.get("q") || ""
  const year = searchParams.get("year") || "all"
  const status = searchParams.get("status") || "all"
  const month = searchParams.get("month") || "all"
  const age = searchParams.get("age") || "all"
  const format = searchParams.get("format") || "all"

  // URLパラメータを更新
  const updateParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value === "all" || value === "") {
        params.delete(key)
      } else {
        params.set(key, value)
      }
      router.push(`/events?${params.toString()}`, { scroll: false })
    },
    [router, searchParams]
  )

  // すべてのフィルタをリセット
  const resetFilters = useCallback(() => {
    router.push("/events", { scroll: false })
  }, [router])

  // アクティブなフィルタを取得
  const activeFilters = useMemo(() => {
    const filters: { key: string; label: string; value: string }[] = []
    if (query) filters.push({ key: "q", label: `"${query}"`, value: query })
    if (year !== "all")
      filters.push({ key: "year", label: `${year}年度`, value: year })
    if (status !== "all") {
      const statusLabel = statuses.find((s) => s.value === status)?.label || ""
      filters.push({ key: "status", label: statusLabel, value: status })
    }
    if (month !== "all")
      filters.push({ key: "month", label: `${month}月`, value: month })
    if (age !== "all") {
      const ageLabel = ageRanges.find((a) => a.value === age)?.label || ""
      filters.push({ key: "age", label: ageLabel, value: age })
    }
    if (format !== "all") {
      const formatLabel = formats.find((f) => f.value === format)?.label || ""
      filters.push({ key: "format", label: formatLabel, value: format })
    }
    return filters
  }, [query, year, status, month, age, format])

  // イベントをフィルタリング
  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        // キーワード検索
        if (query) {
          const searchTarget =
            `${event.title} ${event.summary} ${event.tags?.join(" ") || ""}`.toLowerCase()
          if (!searchTarget.includes(query.toLowerCase())) return false
        }

        // 年度フィルタ
        if (year !== "all") {
          const eventYear = getAcademicYear(event.startDate)
          if (eventYear !== Number.parseInt(year)) return false
        }

        // ステータスフィルタ
        if (status !== "all") {
          const eventStatus = getEventStatus(event)
          if (eventStatus !== status) return false
        }

        // 月フィルタ
        if (month !== "all") {
          const eventMonth = new Date(event.startDate).getMonth() + 1
          if (eventMonth !== Number.parseInt(month)) return false
        }

        // 年齢フィルタ
        if (age !== "all") {
          if (age === "18-22") {
            if (event.ageMin && event.ageMin > 22) return false
            if (event.ageMax && event.ageMax < 18) return false
          } else if (age === "23-26") {
            if (event.ageMin && event.ageMin > 26) return false
            if (event.ageMax && event.ageMax < 23) return false
          } else if (age === "27+") {
            if (event.ageMax && event.ageMax < 27) return false
          }
        }

        // 開催形式フィルタ
        if (format !== "all") {
          if (event.format !== format) return false
        }

        return true
      })
      .sort((a, b) => {
        // ソート: 募集中/予定 → 直近順、その後に終了を降順
        const statusA = getEventStatus(a)
        const statusB = getEventStatus(b)

        // 終了イベントは後ろに
        if (statusA === "closed" && statusB !== "closed") return 1
        if (statusA !== "closed" && statusB === "closed") return -1

        // 両方終了なら日付降順
        if (statusA === "closed" && statusB === "closed") {
          return (
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          )
        }

        // 両方終了以外なら日付昇順（直近順）
        return (
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
        )
      })
  }, [query, year, status, month, age, format])

  return (
    <div className="min-h-screen bg-background">
      {/* ヘッダーセクション */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            イベントを探す
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mb-6">
            動物看護学生・ペット業界を志望する方向けのキャリアイベント情報。
            <br className="hidden sm:block" />
            セミナー、説明会、職場見学など、あなたの就活に役立つイベントを探してみてください。
          </p>
          
          {/* クイックフィルタチップ */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => updateParams("status", status === "open" ? "all" : "open")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                status === "open"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              )}
            >
              募集中のイベント
            </button>
            <button
              type="button"
              onClick={() => updateParams("format", format === "online" ? "all" : "online")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                format === "online"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              )}
            >
              オンライン開催
            </button>
            <button
              type="button"
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString())
                if (year === new Date().getFullYear().toString()) {
                  params.delete("year")
                } else {
                  params.set("year", new Date().getFullYear().toString())
                }
                router.push(`/events?${params.toString()}`, { scroll: false })
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                year === new Date().getFullYear().toString()
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              )}
            >
              {new Date().getFullYear()}年度
            </button>
          </div>
        </div>
      </section>

      {/* 検索・フィルタセクション */}
      <section className="py-6 md:py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 z-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* 検索バーとフィルタ */}
          <div className="flex flex-col gap-4">
            {/* 検索バー */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="イベント名、キーワードで検索..."
                value={query}
                onChange={(e) => updateParams("q", e.target.value)}
                className="pl-10 bg-card"
              />
            </div>

            {/* フィルタ群 */}
            <div className="flex flex-wrap gap-2 items-center">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground hidden sm:block" />

              {/* 年度 */}
              <Select value={year} onValueChange={(v) => updateParams("year", v)}>
                <SelectTrigger className="w-[110px] bg-card">
                  <SelectValue placeholder="年度" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全年度</SelectItem>
                  {years.map((y) => (
                    <SelectItem key={y} value={y.toString()}>
                      {y}年度
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* ステータス */}
              <Select
                value={status}
                onValueChange={(v) => updateParams("status", v)}
              >
                <SelectTrigger className="w-[110px] bg-card">
                  <SelectValue placeholder="ステータス" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* 開催月 */}
              <Select
                value={month}
                onValueChange={(v) => updateParams("month", v)}
              >
                <SelectTrigger className="w-[100px] bg-card">
                  <SelectValue placeholder="開催月" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全月</SelectItem>
                  {months.map((m) => (
                    <SelectItem key={m} value={m.toString()}>
                      {m}月
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* 対象年齢 */}
              <Select value={age} onValueChange={(v) => updateParams("age", v)}>
                <SelectTrigger className="w-[110px] bg-card">
                  <SelectValue placeholder="対象年齢" />
                </SelectTrigger>
                <SelectContent>
                  {ageRanges.map((a) => (
                    <SelectItem key={a.value} value={a.value}>
                      {a.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* 開催形式 */}
              <Select
                value={format}
                onValueChange={(v) => updateParams("format", v)}
              >
                <SelectTrigger className="w-[130px] bg-card">
                  <SelectValue placeholder="開催形式" />
                </SelectTrigger>
                <SelectContent>
                  {formats.map((f) => (
                    <SelectItem key={f.value} value={f.value}>
                      {f.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* リセットボタン */}
              {activeFilters.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  リセット
                </Button>
              )}
            </div>

            {/* アクティブなフィルタチップ */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <Badge
                    key={filter.key}
                    variant="secondary"
                    className="pl-3 pr-1 py-1 gap-1"
                  >
                    {filter.label}
                    <button
                      type="button"
                      onClick={() => updateParams(filter.key, "all")}
                      className="ml-1 p-0.5 rounded-full hover:bg-muted-foreground/20"
                      aria-label={`${filter.label}を解除`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* イベント一覧 */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* 件数表示 */}
          <p className="text-sm text-muted-foreground mb-6">
            {filteredEvents.length}件のイベント
          </p>

          {/* イベントカードグリッド */}
          {filteredEvents.length > 0 ? (
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            // 空表示
            <div className="text-center py-16 px-4">
              <div className="bg-muted rounded-2xl p-8 max-w-md mx-auto">
                <p className="text-foreground font-medium mb-2">
                  該当するイベントが見つかりませんでした
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  検索条件を変更するか、フィルタをリセットしてみてください。
                </p>
                <Button onClick={resetFilters} variant="outline">
                  条件をリセットする
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* LINE誘導セクション */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="bg-card rounded-2xl p-6 md:p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
              最新イベント情報をLINEでお届け
            </h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              イベント情報や就活に役立つ情報を、LINEで受け取れます。
              <br />
              お気軽に友だち追加してくださいね。
            </p>
            <Button asChild className="rounded-full">
              {/* TODO: 要確認 - 学生向けLINEのURLを設定してください */}
              <a
                href="https://line.me/R/ti/p/@anicareer-student"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINEで友だち追加する
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="イベントについてのご質問は"
        description="イベントの詳細や参加方法についてご不明な点があれば、お気軽にお問い合わせください。"
        primaryCta={{ label: "お問い合わせ", href: "/contact" }}
        secondaryCta={{ label: "サービス詳細を見る", href: "/service" }}
      />
    </div>
  )
}

export function EventsClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-muted-foreground">読み込み中...</div>
        </div>
      }
    >
      <EventsContent />
    </Suspense>
  )
}
