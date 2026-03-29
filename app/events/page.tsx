import type { Metadata } from "next"
import { EventsClient } from "@/components/events/events-client"

export const metadata: Metadata = {
  title: "イベント情報",
  description:
    "学生団体AniCari.主催のキャリア交流イベント情報。獣医療系学生とペット企業が直接対話できる月次イベントです。",
}

export default function EventsPage() {
  return <EventsClient />
}
