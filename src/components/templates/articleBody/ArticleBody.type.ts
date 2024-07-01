import type { IColoredBox } from '@/atoms/coloredBox'

export interface ArticleBodyProps {
  isMobile?: boolean
  chapterTitle?: string
  title?: string
  menu: ({
    key: string
    label: string
    href: string
    sectionName: string
    color: IColoredBox['color']
  } | null)[]
  activeStatus?: { [key: string]: any }
  nextSection?: React.ReactNode
  content?: {
    [key: string]: {
      Component: React.ReactNode
      ref: React.RefObject<HTMLDivElement>
      id?: string
      isActive?: boolean
    }
  }
}

export interface IBody {
  color: string
  navigation: string
  id: string
  title: string
  titleNumber: string
  bodyTitle?: string
  paragraph1Content?: string[]
  paragraph2Content?: string[]
  paragraphOlContent?: {
    title: string
    description: string
  }[]
  quoteContent?: {
    avatar: string
    author: string
    edgeColor: string
    quote: string
  }[]
  image?: {
    alt: string
    src: string
    srcMobile: string
  }[]
}
