"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, Shield, ArrowRight, Github, Chrome, Check, X } from "lucide-react"
import Link from "next/link"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Password validation
  const passwordRequirements = [
    { label: "At least 8 characters", met: formData.password.length >= 8 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(formData.password) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(formData.password) },
    { label: "Contains number", met: /\d/.test(formData.password) },
    { label: "Contains special character", met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password) },
  ]

  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword.length > 0

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-white tracking-wider font-mono">TACTICAL OPS</h1>
          </div>
          <p className="text-neutral-400 text-sm">Join the command center</p>
        </div>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl font-bold text-white tracking-wider text-center">CREATE ACCOUNT</CardTitle>
            <p className="text-sm text-neutral-400 text-center">Enter your details to create your account</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-neutral-300 tracking-wider">
                    FIRST NAME
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500 focus:border-orange-500 focus:ring-orange-500/20 font-mono"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-neutral-300 tracking-wider">
                    LAST NAME
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500 focus:border-orange-500 focus:ring-orange-500/20 font-mono"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-neutral-300 tracking-wider">
                  EMAIL ADDRESS
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="agent@tactical.ops"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500 focus:border-orange-500 focus:ring-orange-500/20 font-mono"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-neutral-300 tracking-wider">
                  PASSWORD
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500 focus:border-orange-500 focus:ring-orange-500/20 font-mono pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 text-neutral-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Password Requirements */}
                {formData.password && (
                  <div className="space-y-1 mt-2">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        {req.met ? (
                          <Check className="w-3 h-3 text-white" />
                        ) : (
                          <X className="w-3 h-3 text-neutral-500" />
                        )}
                        <span className={req.met ? "text-white" : "text-neutral-500"}>{req.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-neutral-300 tracking-wider">
                  CONFIRM PASSWORD
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500 focus:border-orange-500 focus:ring-orange-500/20 font-mono pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 text-neutral-400 hover:text-white"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Password Match Indicator */}
                {formData.confirmPassword && (
                  <div className="flex items-center gap-2 text-xs mt-1">
                    {passwordsMatch ? (
                      <>
                        <Check className="w-3 h-3 text-white" />
                        <span className="text-white">Passwords match</span>
                      </>
                    ) : (
                      <>
                        <X className="w-3 h-3 text-red-500" />
                        <span className="text-red-500">Passwords don't match</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 bg-neutral-800 border-neutral-600 rounded focus:ring-orange-500 focus:ring-2 mt-0.5"
                  required
                />
                <Label htmlFor="terms" className="text-sm text-neutral-400 leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms" className="text-orange-500 hover:text-orange-400">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-orange-500 hover:text-orange-400">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isLoading || !passwordsMatch || !passwordRequirements.every((req) => req.met)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    CREATING ACCOUNT...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    CREATE ACCOUNT
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-neutral-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-neutral-900 px-2 text-neutral-500 tracking-wider">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="bg-neutral-800 border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="bg-neutral-800 border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors"
              >
                <Chrome className="w-4 h-4 mr-2" />
                Google
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-neutral-400">
                Already have an account?{" "}
                <Link
                  href="/auth/sign-in"
                  className="text-orange-500 hover:text-orange-400 transition-colors font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
