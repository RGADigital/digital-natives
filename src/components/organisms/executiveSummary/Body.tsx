/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import type { UseInViewOptions } from 'framer-motion'
import { useInView } from 'framer-motion'

import TwoColumnStat from '@/organisms/twoColumnStatText/TwoColumnStatText'
import ArticleBody from '@/templates/articleBody/ArticleBody'
import { type ITwoColumnStatText, TWO_COLUMN_STAT } from '@/templates/twoColumnStatText'

import { LANG, NAVIGATION_HEADER } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function Body({ isMobile = false }: Readonly<Props>) {
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)

  const inViewSetting: UseInViewOptions = {
    amount: 'all',
    // margin: '-100px 0px 0px 0px',
    // root: containerRef,
  }
  const isInView1 = useInView(section1Ref, inViewSetting)
  const isInView2 = useInView(section2Ref, inViewSetting)
  const isInView3 = useInView(section3Ref, inViewSetting)

  const activeStatus: { [key: string]: any } = {
    isInView1,
    isInView2,
    isInView3,
  }

  const Section1 = (
    <TwoColumnStat
      type={TWO_COLUMN_STAT.textLeft as ITwoColumnStatText}
      isMobile={isMobile}
      title={LANG.section1.title}
      titleNumber={LANG.section1.titleNumber}
      bodyTitle={LANG.section1.bodyTitle}
      paragraph1Content={LANG.section1.paragraph1Content}
      paragraph2Content={LANG.section1.paragraph2Content}
      statContent={LANG.section1.statContent}
    />
  )

  const Section2 = (
    <TwoColumnStat
      type={TWO_COLUMN_STAT.textRight as ITwoColumnStatText}
      isMobile={isMobile}
      title={LANG.section2.title}
      titleNumber={LANG.section2.titleNumber}
      bodyTitle={LANG.section2.bodyTitle}
      paragraph1Content={LANG.section2.paragraph1Content}
      paragraph2Content={LANG.section2.paragraph2Content}
      statContent={LANG.section2.statContent}
    />
  )

  const Section3 = (
    <TwoColumnStat
      type={TWO_COLUMN_STAT.textLeft as ITwoColumnStatText}
      isMobile={isMobile}
      title={LANG.section3.title}
      titleNumber={LANG.section3.titleNumber}
      bodyTitle={LANG.section3.bodyTitle}
      paragraph1Content={LANG.section3.paragraph1Content}
      paragraph2Content={LANG.section3.paragraph2Content}
      statContent={LANG.section3.statContent}
    />
  )

  return (
    <ArticleBody
      chapterTitle={LANG.chapterTitle}
      title={LANG.title}
      menu={NAVIGATION_HEADER}
      activeStatus={activeStatus}
      isMobile={isMobile}
      content={{
        section1: {
          Component: Section1,
          ref: section1Ref,
          id: LANG.section1.id,
          isActive: activeStatus.isInView1,
        },
        section2: {
          Component: Section2,
          ref: section2Ref,
          id: LANG.section2.id,
          isActive: activeStatus.isInView1,
        },
        section3: {
          Component: Section3,
          ref: section3Ref,
          id: LANG.section3.id,
          isActive: activeStatus.isInview3,
        },
      }}
    />
  )
}
