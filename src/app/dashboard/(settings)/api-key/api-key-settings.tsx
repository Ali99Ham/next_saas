"use client"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const ApiKeySettings = ({ apiKey }: { apiKey: string }) => {
  return (
    <Card className="max-w-xl w-full">
      <div>
        <Label>Your API Key</Label>
        <div className="mt-1 relative">
          <Input type="password" value={apiKey} readOnly />
          <div className="absolute space-x-0.5 inset-y-0 right-0 flex items-center"></div>
        </div>

        <p className="mt-2 text-sm/6 text-gray-600">
          Keep your key secret and do not share it with others.
        </p>
      </div>
    </Card>
  )
}
