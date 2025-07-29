export type FormStep = "social" | "email" | "verify" | "signin"

export interface OnboardingStepProps {
  onNext: () => void
  onBack?: () => void
  onStepChange: (step: FormStep) => void
}