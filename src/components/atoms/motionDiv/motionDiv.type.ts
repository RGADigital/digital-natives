import type { MotionValue } from 'framer-motion'

export interface IStyle {
  opacity?: number
}

export interface ITransform {
  width?: number | MotionValue<number>
  height?: number | MotionValue<number>
  x?: number | MotionValue<number>
  y?: number | MotionValue<number>
}

export interface IMotionDivPosition {
  x0: number
  x1?: number
  y0: number
  y1?: number
}

export interface IMotionDivSize {
  w0: number
  h0: number
  w1?: number
  h1?: number
}

export interface MotionDivProps {
  className?: string
  children?: React.ReactNode
  fadeIn?: boolean
  delay?: number
  motionValue: MotionValue<number>
  inputRange: [number, number]
  size: IMotionDivSize
  position: IMotionDivPosition
  ease?: 'easeInOut' | 'easeOut' | 'easeIn' | 'linear'
}

export interface IMotionDiv {
  className?: string
  delay?: number
  inputRange?: [number, number]
  positionInPercent: IMotionDivPosition
  sizeInPercent: IMotionDivSize
  fadeIn?: boolean
  ease?: 'easeInOut' | 'easeOut' | 'easeIn' | 'linear'
}
