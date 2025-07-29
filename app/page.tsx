"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  SocialLoginStep,
  EmailSignupStep,
  SigninStep,
  VerifyIdentityStep,
  type FormStep
} from "@/components/onboarding"

export default function LoginPage() {
  const [currentStep, setCurrentStep] = useState<FormStep>("signin")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNext = () => {
    setCurrentStep("verify")
  }

  const handleBack = () => {
    if (currentStep === "verify") {
      setCurrentStep("social")
    } else if (currentStep === "email") {
      setCurrentStep("social")
    } else if (currentStep === "signin") {
      setCurrentStep("social")
    }
  }

  const handleStepChange = (step: FormStep) => {
    setCurrentStep(step)
  }

  return (
    <div className="bg-white">
      {/* Navbar + Background Image Section - Exactly 100vh */}
      <div className="h-screen flex flex-col">
        {/* Header Navigation */}
        <header className="flex-shrink-0 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 relative z-20">
          <div className="flex items-center">
            <Image
              src="https://cdn.honeycomb.credit/hclogo.svg"
              alt="Honeycomb Credit"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Invest Now
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Business Owners
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Investors
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              About Us
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Learn
            </Link>
          </nav>

          {/* Desktop Sign In Button */}
          <Button className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md">
            Sign in
          </Button>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden z-50">
              <nav className="flex flex-col p-4 space-y-4">
                <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                  Invest Now
                </Link>
                <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                  Business Owners
                </Link>
                <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                  Investors
                </Link>
                <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                  About Us
                </Link>
                <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                  Learn
                </Link>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md mt-4">
                  Sign in
                </Button>
              </nav>
            </div>
          )}
        </header>

        {/* Main Content - Dynamically fills remaining viewport space */}
        <main className="relative flex-1 min-h-0">
          {/* Background Image - Hidden on mobile */}
          <div className="absolute inset-0 hidden md:block">
            <Image
              src="https://cdn.honeycomb.credit/DWT05580.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex items-center justify-center md:justify-start h-full p-0 md:pl-12 md:pr-6 lg:pl-24 lg:pr-16">
            {/* Sign Up Card - Full screen on mobile, card style on desktop */}
            <div className="bg-white w-full h-full md:rounded-2xl md:p-6 md:w-full md:max-w-sm md:shadow-xl md:h-auto p-6">
              <div className="relative overflow-hidden min-h-[440px]">
                <div
                  className={`transition-transform duration-300 ease-in-out ${
                    currentStep === "social"
                      ? "translate-x-0"
                      : currentStep === "email"
                        ? "-translate-x-full"
                        : currentStep === "signin"
                          ? "-translate-x-full"
                          : "-translate-x-[200%]"
                  }`}
                >
                  <SocialLoginStep
                    onNext={handleNext}
                    onStepChange={handleStepChange}
                  />
                </div>

                <div
                  className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out ${
                    currentStep === "social"
                      ? "translate-x-full"
                      : currentStep === "email"
                        ? "translate-x-0"
                        : currentStep === "signin"
                          ? "translate-x-full"
                          : "-translate-x-full"
                  }`}
                >
                  <EmailSignupStep
                    onNext={handleNext}
                    onBack={handleBack}
                    onStepChange={handleStepChange}
                  />
                </div>

                <div
                  className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out ${
                    currentStep === "social"
                      ? "translate-x-full"
                      : currentStep === "email"
                        ? "translate-x-full"
                        : currentStep === "signin"
                          ? "translate-x-0"
                          : "-translate-x-full"
                  }`}
                >
                  <SigninStep
                    onNext={handleNext}
                    onBack={handleBack}
                    onStepChange={handleStepChange}
                  />
                </div>

                <div
                  className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out ${
                    currentStep === "social"
                      ? "translate-x-[200%]"
                      : currentStep === "email"
                        ? "translate-x-full"
                        : currentStep === "signin"
                          ? "translate-x-full"
                          : "translate-x-0"
                  }`}
                >
                  <VerifyIdentityStep
                    onNext={handleNext}
                    onStepChange={handleStepChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <Image
                  src="https://cdn.honeycomb.credit/hclogo.svg"
                  alt="Honeycomb Credit"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Connecting local businesses with community investors to build stronger neighborhoods and support local
                entrepreneurship.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Investors</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Investment Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Returns & Risk
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Businesses</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Raise Capital
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2024 Honeycomb Credit. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}