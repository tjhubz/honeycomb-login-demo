import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"
import type { OnboardingStepProps } from "./types"

export function EmailSignupStep({ onNext, onBack }: OnboardingStepProps) {
  const handleEmailContinue = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <div className="flex flex-col h-full min-h-[440px]">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </button>

      <h1 className="text-2xl font-bold text-purple-900 mb-2 text-center">Sign Up with Email</h1>

      <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
        This will be the email associated with your Honeycomb account.
      </p>

      <form onSubmit={handleEmailContinue} className="flex flex-col flex-1">
        <div className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox id="terms" className="mt-1" required />
            <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
              By creating an account, you agree to our{" "}
              <Link href="#" className="text-gray-900 font-medium underline">
                Privacy Policy
              </Link>
              ,{" "}
              <Link href="#" className="text-gray-900 font-medium underline">
                Term and Conditions
              </Link>
              , and{" "}
              <Link href="#" className="text-gray-900 font-medium underline">
                Notification settings
              </Link>
              .
            </label>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  )
}