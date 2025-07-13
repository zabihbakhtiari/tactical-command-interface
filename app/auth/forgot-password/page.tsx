"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Shield, ArrowLeft, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsEmailSent(true)
  }

  if (isEmailSent) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-orange-500" />
              <h1 className="text-2xl font-bold text-white tracking-wider font-mono">TACTICAL OPS</h1>
            </div>
          </div>

          <Card className="bg-neutral-900 border-neutral-700">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <CardTitle className="text-xl font-bold text-white tracking-wider">CHECK YOUR EMAIL</CardTitle>
              <p className="text-sm text-neutral-400">We've sent a password reset link to</p>
              <p className="text-sm text-white font-mono">{email}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-4">
                <p className="text-sm text-neutral-400">
                  Didn't receive the email? Check your spam folder or try again.
                </p>

                <Button
                  onClick={() => setIsEmailSent(false)}
                  variant="outline"
                  className="w-full bg-neutral-800 border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors"
                >
                  Try another email
                </Button>

                <Link
                  href="/auth/sign-in"
                  className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-white tracking-wider font-mono">TACTICAL OPS</h1>
          </div>
          <p className="text-neutral-400 text-sm">Reset your password</p>
        </div>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl font-bold text-white tracking-wider text-center">FORGOT PASSWORD</CardTitle>
            <p className="text-sm text-neutral-400 text-center">
              Enter your email address and we'll send you a link to reset your password
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-neutral-300 tracking-wider">
                  EMAIL ADDRESS
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="agent@tactical.ops"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500 focus:border-orange-500 focus:ring-orange-500/20 font-mono"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium tracking-wider transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    SENDING...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    SEND RESET LINK
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>
            </form>

            <div className="text-center">
              <Link
                href="/auth/sign-in"
                className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
