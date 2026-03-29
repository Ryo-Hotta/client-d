"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle } from "lucide-react"

type FormData = {
  userType: "business" | "student" | "other"
  name: string
  email: string
  phone: string
  company: string
  message: string
  preferredDate1: string
  preferredDate2: string
  preferredDate3: string
  isReservation: boolean
  privacyAgreed: boolean
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    userType: "business",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    preferredDate1: "",
    preferredDate2: "",
    preferredDate3: "",
    isReservation: false,
    privacyAgreed: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: 要確認 - フォーム送信先を実装（Googleフォーム、Calendly、またはバックエンドAPI）
    // 現在はダミー送信（コンソール出力のみ）
    console.log("[v0] Form submitted:", formData)
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 md:p-12 rounded-2xl bg-card border border-border/50 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">
          送信完了しました
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          お問い合わせいただきありがとうございます。
          <br />
          2営業日以内にご連絡いたします。
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              userType: "business",
              name: "",
              email: "",
              phone: "",
              company: "",
              message: "",
              preferredDate1: "",
              preferredDate2: "",
              preferredDate3: "",
              isReservation: false,
              privacyAgreed: false,
            })
          }}
          className="rounded-full"
        >
          新しいお問い合わせを送る
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* User Type */}
      <div className="p-6 rounded-2xl bg-card border border-border/50">
        <Label className="text-base font-bold text-foreground mb-4 block">
          ご利用区分 <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={formData.userType}
          onValueChange={(value) => 
            setFormData({ ...formData, userType: value as FormData["userType"] })
          }
          className="flex flex-wrap gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="business" id="business" />
            <Label htmlFor="business" className="cursor-pointer">企業様</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="student" id="student" />
            <Label htmlFor="student" className="cursor-pointer">学生さん</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other" className="cursor-pointer">その他</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Basic Info */}
      <div className="space-y-5">
        <div>
          <Label htmlFor="name" className="text-foreground mb-2 block">
            お名前 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            required
            placeholder="山田 太郎"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="rounded-xl"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground mb-2 block">
            メールアドレス <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="rounded-xl"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-foreground mb-2 block">
            電話番号
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="090-1234-5678"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="rounded-xl"
          />
        </div>

        {formData.userType === "business" && (
          <div>
            <Label htmlFor="company" className="text-foreground mb-2 block">
              会社名・店舗名
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="株式会社〇〇 / 〇〇動物病院"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="rounded-xl"
            />
          </div>
        )}
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-foreground mb-2 block">
          お問い合わせ内容 <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          required
          placeholder="ご質問・ご相談内容をご記入ください"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="rounded-xl resize-none"
        />
      </div>

      {/* Reservation Option */}
      <div className="p-6 rounded-2xl bg-secondary border border-border/50">
        <div className="flex items-start space-x-3 mb-4">
          <Checkbox
            id="isReservation"
            checked={formData.isReservation}
            onCheckedChange={(checked) => 
              setFormData({ ...formData, isReservation: checked as boolean })
            }
          />
          <div>
            <Label htmlFor="isReservation" className="cursor-pointer font-bold text-foreground">
              無料相談を予約する
            </Label>
            <p className="text-sm text-muted-foreground mt-1">
              オンラインまたは対面での相談をご希望の場合はチェックしてください
            </p>
          </div>
        </div>

        {formData.isReservation && (
          <div className="mt-5 pt-5 border-t border-border/50 space-y-4">
            <p className="text-sm text-muted-foreground">
              ご希望の日時を3つまでご記入ください（例：1/20 14:00〜）
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="preferredDate1" className="text-sm text-muted-foreground mb-1 block">
                  第1希望
                </Label>
                <Input
                  id="preferredDate1"
                  type="text"
                  placeholder="1/20 14:00〜"
                  value={formData.preferredDate1}
                  onChange={(e) => setFormData({ ...formData, preferredDate1: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="preferredDate2" className="text-sm text-muted-foreground mb-1 block">
                  第2希望
                </Label>
                <Input
                  id="preferredDate2"
                  type="text"
                  placeholder="1/21 10:00〜"
                  value={formData.preferredDate2}
                  onChange={(e) => setFormData({ ...formData, preferredDate2: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="preferredDate3" className="text-sm text-muted-foreground mb-1 block">
                  第3希望
                </Label>
                <Input
                  id="preferredDate3"
                  type="text"
                  placeholder="1/22 15:00〜"
                  value={formData.preferredDate3}
                  onChange={(e) => setFormData({ ...formData, preferredDate3: e.target.value })}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Privacy Agreement */}
      <div className="flex items-start space-x-3">
        <Checkbox
          id="privacyAgreed"
          required
          checked={formData.privacyAgreed}
          onCheckedChange={(checked) => 
            setFormData({ ...formData, privacyAgreed: checked as boolean })
          }
        />
        <Label htmlFor="privacyAgreed" className="cursor-pointer text-sm text-muted-foreground leading-relaxed">
          個人情報の取り扱いに同意します。
          ご入力いただいた情報は、お問い合わせへの対応およびサービスのご案内にのみ使用し、
          第三者への提供は行いません。
        </Label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting || !formData.privacyAgreed}
        className="w-full rounded-full"
      >
        {isSubmitting ? "送信中..." : "送信する"}
      </Button>
    </form>
  )
}
