import type { ITwoColumnStatPosition } from '@/templates/twoColumnTemplate'

export interface TwoColumnStatTextProps {
  isMobile?: boolean
  largeChildren?: React.ReactNode
  noMarginTop?: boolean
  noMarginBottom?: boolean
  smallChildren?: React.ReactNode
  largeContentWrapperClassName?: string
  smallContentWrapperClassName?: string
  title?: string
  titleNumber?: string
  type: ITwoColumnStatPosition
}

export interface IStatContent {
  alt?: string
  className?: string
  src?: string
  srcMobile?: string
}
