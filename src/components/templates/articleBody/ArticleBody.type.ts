export interface ArticleBodyProps {
  isMobile?: boolean
  chapterTitle?: string
  title?: string
  menu: ({
    key: string
    label: string
    href: string
    sectionName: string
  } | null)[]
  activeStatus?: { [key: string]: any }
  content?: {
    [key: string]: { Component: React.ReactNode; ref: React.RefObject<HTMLDivElement>; id?: string; isActive?: boolean }
  }
}
