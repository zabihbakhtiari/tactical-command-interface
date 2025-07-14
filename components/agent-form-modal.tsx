"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, Save, UserPlus } from "lucide-react"

interface Agent {
  id?: string
  name: string
  status: string
  location: string
  risk: string
  missions?: number
  lastSeen?: string
}

interface AgentFormModalProps {
  agent?: Agent | null
  isOpen: boolean
  onClose: () => void
  onSave: (agent: Agent) => void
}

export default function AgentFormModal({ agent, isOpen, onClose, onSave }: AgentFormModalProps) {
  const [formData, setFormData] = useState<Agent>({
    name: "",
    status: "standby",
    location: "",
    risk: "low",
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (agent) {
      setFormData(agent)
    } else {
      setFormData({
        name: "",
        status: "standby",
        location: "",
        risk: "low",
      })
    }
  }, [agent])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    onSave(formData)
    setIsLoading(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  if (!isOpen) return null

  const isEditing = !!agent

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="bg-neutral-900 border-neutral-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <UserPlus className="w-6 h-6 text-orange-500" />
            <div>
              <CardTitle className="text-xl font-bold text-white tracking-wider">
                {isEditing ? "EDIT AGENT" : "DEPLOY NEW AGENT"}
              </CardTitle>
              <p className="text-sm text-neutral-400">
                {isEditing ? `Modify agent ${agent?.id}` : "Add a new operative to the network"}
              </p>
            </div>
          </div>
          <Button variant="ghost" onClick={onClose} className="text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-neutral-300 tracking-wider">
                  CODENAME *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="GHOST WALKER"
                  className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500 focus:border-orange-500 focus:ring-orange-500/20 font-mono"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium text-neutral-300 tracking-wider">
                  LOCATION *
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="Berlin"
                  className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500 focus:border-orange-500 focus:ring-orange-500/20"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-neutral-300 tracking-wider">STATUS</Label>
                <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                  <SelectTrigger className="bg-neutral-800 border-neutral-600 text-white focus:border-orange-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-800 border-neutral-600">
                    <SelectItem value="active" className="text-white hover:bg-neutral-700">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Active
                      </div>
                    </SelectItem>
                    <SelectItem value="standby" className="text-white hover:bg-neutral-700">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                        Standby
                      </div>
                    </SelectItem>
                    <SelectItem value="training" className="text-white hover:bg-neutral-700">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        Training
                      </div>
                    </SelectItem>
                    <SelectItem value="compromised" className="text-white hover:bg-neutral-700">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Compromised
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-neutral-300 tracking-wider">RISK LEVEL</Label>
                <Select value={formData.risk} onValueChange={(value) => handleInputChange("risk", value)}>
                  <SelectTrigger className="bg-neutral-800 border-neutral-600 text-white focus:border-orange-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-800 border-neutral-600">
                    <SelectItem value="low" className="text-white hover:bg-neutral-700">
                      <Badge className="bg-white/20 text-white">LOW</Badge>
                    </SelectItem>
                    <SelectItem value="medium" className="text-white hover:bg-neutral-700">
                      <Badge className="bg-neutral-500/20 text-neutral-300">MEDIUM</Badge>
                    </SelectItem>
                    <SelectItem value="high" className="text-white hover:bg-neutral-700">
                      <Badge className="bg-orange-500/20 text-orange-500">HIGH</Badge>
                    </SelectItem>
                    <SelectItem value="critical" className="text-white hover:bg-neutral-700">
                      <Badge className="bg-red-500/20 text-red-500">CRITICAL</Badge>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {isEditing && (
              <div className="space-y-2">
                <Label className="text-sm font-medium text-neutral-300 tracking-wider">CURRENT STATUS</Label>
                <div className="p-3 bg-neutral-800 rounded border border-neutral-600">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Agent ID:</span>
                      <span className="text-white font-mono">{agent?.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Missions:</span>
                      <span className="text-white font-mono">{agent?.missions || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Last Seen:</span>
                      <span className="text-white font-mono">{agent?.lastSeen}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-4 border-t border-neutral-700">
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium tracking-wider"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    {isEditing ? "UPDATING..." : "DEPLOYING..."}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    {isEditing ? "UPDATE AGENT" : "DEPLOY AGENT"}
                  </div>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
