import type { MotionValue } from 'framer-motion'

export function getTransformedValue(
  initialValue: number,
  finalValue: number,
  inputRange: [number, number],
  motionValue: MotionValue,
): number {
  const [inputStart, inputEnd] = inputRange
  const progress = (motionValue.get() - inputStart) / (inputEnd - inputStart)
  return initialValue + progress * (finalValue - initialValue)
}
