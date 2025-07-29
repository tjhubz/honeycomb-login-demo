import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { OnboardingStepProps } from "./types"

export function VerifyIdentityStep({ onNext }: OnboardingStepProps) {
  return (
    <div className="flex flex-col h-full min-h-[440px]">
      <h1 className="text-2xl font-bold text-purple-900 mb-6 text-center">Verify Your Identity</h1>

      <p className="text-sm text-gray-700 text-center mb-8 leading-relaxed">
        Honeycomb Credit is required by state and federal law to verify your identity.
      </p>

      <div className="flex-1"></div>

      <div className="space-y-4 mt-auto">
        <p className="text-sm text-gray-700 text-center">
          Learn more about{" "}
          <Link href="#" className="text-blue-500 underline">
            Plaid
          </Link>
        </p>

        <Button className="w-full h-12 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg flex items-center justify-center space-x-3">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
          </svg>
          <span>Verify with Plaid</span>
        </Button>

        <button 
          onClick={onNext}
          className="text-sm text-gray-500 hover:text-gray-700 underline text-center w-full mt-2"
        >
          Skip for now
        </button>
      </div>
    </div>
  )
}