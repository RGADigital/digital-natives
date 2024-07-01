import type { ITwoColumnStatPosition } from '@/templates/twoColumnTemplate'

export interface TwoColumnStatTextProps {
  isMobile?: boolean
  largeChildren?: React.ReactNode
  noMarginTop?: boolean
  noMarginBottom?: boolean
  smallChildren?: React.ReactNode
  contentWrapperClassName?: string
  largeContentWrapperClassName?: string
  smallContentWrapperClassName?: string
  title?: string
  titleImageChildren?: React.ReactNode
  titleNumber?: string
  type: ITwoColumnStatPosition
}

export interface IStatContent {
  alt?: string
  className?: string
  src?: string
  srcMobile?: string
}
