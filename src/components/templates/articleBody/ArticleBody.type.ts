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
  content?: {
    [key: string]: { Component: React.ReactNode; ref: React.RefObject<HTMLDivElement>; id?: string; isActive?: boolean }
  }
}
