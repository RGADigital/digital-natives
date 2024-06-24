import type { IQuoteBox } from '@/molecules/index'
import type { ITwoColumnStatText } from '@/templates/twoColumnStatText'

export interface TwoColumnStatTextProps {
  bodyTitle?: string
  isMobile?: boolean
  leftChildren?: React.ReactNode
  noMarginTop?: boolean
  noMarginBottom?: boolean
  paragraph1Content?: string[]
  paragraph2Content?: string[]
  quoteContent?: IQuoteBox
  rightChildren?: React.ReactNode
  statContent?: {
    src: string
    srcMobile?: string
    alt: string
    className?: string
  }[]
  title?: string
  titleNumber?: string
  type: ITwoColumnStatText
}
