export type EventStatus = "open" | "closed" | "planned"
export type EventFormat = "online" | "offline" | "hybrid"
export type EventAudience = "student" | "company" | "both"

export interface Event {
  id: string
  title: string
  summary: string
  startDate: string // ISO date
  endDate?: string
  applicationDeadline?: string
  status?: EventStatus // If specified, use this. Otherwise auto-calculate.
  audience: EventAudience
  ageMin?: number
  ageMax?: number
  format?: EventFormat
  tags?: string[]
  ctaUrl?: string
  location?: string
}

// ステータス自動判定
export function getEventStatus(event: Event): EventStatus {
  // 明示的なステータスがあればそれを使用
  if (event.status) return event.status

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const startDate = new Date(event.startDate)
  const endDate = event.endDate ? new Date(event.endDate) : startDate
  const deadline = event.applicationDeadline
    ? new Date(event.applicationDeadline)
    : null

  // 終了日が過去 → closed
  if (endDate < today) return "closed"

  // 開始日が未来
  if (startDate > today) {
    // 申込締切が未来または当日 → open
    if (deadline && deadline >= today) return "open"
    // 申込締切がない、または締切が過去 → planned
    return "planned"
  }

  // 開催中（今日がstartDate〜endDateの範囲内）
  return "open"
}

// 年度を取得（4月始まり）
export function getAcademicYear(dateStr: string): number {
  const date = new Date(dateStr)
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return month < 4 ? year - 1 : year
}

// 対象年齢のラベル
export function getAgeRangeLabel(event: Event): string {
  if (!event.ageMin && !event.ageMax) return "全年齢"
  if (event.ageMin && event.ageMax) return `${event.ageMin}-${event.ageMax}歳`
  if (event.ageMin) return `${event.ageMin}歳以上`
  if (event.ageMax) return `${event.ageMax}歳以下`
  return "全年齢"
}

// 開催形式のラベル
export function getFormatLabel(format?: EventFormat): string {
  switch (format) {
    case "online":
      return "オンライン"
    case "offline":
      return "オフライン"
    case "hybrid":
      return "ハイブリッド"
    default:
      return ""
  }
}

// アニキャリ交流祭イベントデータ
export const events: Event[] = [
  {
    id: "3",
    title: "第3回 アニキャリ交流祭",
    summary:
      "より深い対話と理解を促進するため、レクリエーションと個別面談の時間を十分に確保。企業紹介30分、レクリエーション30分、個別面談60分の構成です。",
    startDate: "2026-04-29",
    applicationDeadline: "2026-04-25",
    status: "open",
    audience: "both",
    format: "offline",
    location: "都内会場（詳細は申込後にご案内）",
    tags: ["交流祭", "面談", "レクリエーション"],
    ctaUrl: "/for-students#join",
  },
  {
    id: "2",
    title: "【終了】第2回 アニキャリ交流祭",
    summary:
      "2026年2月11日に開催。企業ブース面談、ステージ企業紹介、クイズ大会など盛りだくさんの内容でした。",
    startDate: "2026-02-11",
    status: "closed",
    audience: "both",
    format: "offline",
    location: "板橋区立企業活性化センター",
    tags: ["交流祭", "面談", "企業紹介"],
  },
  {
    id: "1",
    title: "【終了】第1回 アニキャリ交流祭",
    summary:
      "2025年12月6日に記念すべき第1回を開催。学生13名、企業3社が参加し、活発な交流が行われました。",
    startDate: "2025-12-06",
    status: "closed",
    audience: "both",
    format: "offline",
    location: "都内会場",
    tags: ["交流祭", "面談", "初回"],
  },
]
