import React, { useRef } from 'react'
import type { UseInViewOptions } from 'framer-motion'
import { useInView } from 'framer-motion'

import { NextSection } from '@/organisms/nextSection'
import ArticleBody from '@/templates/articleBody/ArticleBody'

import { LANG, NAVIGATION_HEADER } from './Body.constant'
import SectionOne from './Section01'
import SectionTwo from './Section02'
import SectionThree from './Section03'
import SectionFour from './Section04'
import SectionFive from './Section05'

interface Props {
  isMobile?: boolean
}

export default function Body({ isMobile = false }: Readonly<Props>) {
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)
  const section4Ref = useRef<HTMLDivElement>(null)
  const section5Ref = useRef<HTMLDivElement>(null)

  const inViewSetting: UseInViewOptions = {
    amount: 'some',
    margin: '-300px 0px 0px 0px',
  }
  const isInView1 = useInView(section1Ref, inViewSetting)
  const isInView2 = useInView(section2Ref, inViewSetting)
  const isInView3 = useInView(section3Ref, inViewSetting)
  const isInView4 = useInView(section4Ref, inViewSetting)
  const isInView5 = useInView(section5Ref, inViewSetting)

  const activeStatus: { [key: string]: any } = {
    isInView1,
    isInView2: isInView2 && !isInView1,
    isInView3: isInView3 && !isInView2,
    isInView4: isInView4 && !isInView3,
    isInView5: isInView5 && !isInView4,
  }

  return (
    <ArticleBody
      chapterTitle={LANG.chapterTitle}
      title={LANG.title}
      menu={NAVIGATION_HEADER}
      activeStatus={activeStatus}
      isMobile={isMobile}
      content={{
        section1: {
          Component: <SectionOne isMobile={isMobile} />,
          ref: section1Ref,
          id: LANG.section1.id,
          isActive: activeStatus.isInView1,
        },
        section2: {
          Component: <SectionTwo isMobile={isMobile} />,
          ref: section2Ref,
          id: LANG.section2.id,
          isActive: activeStatus.isInView1,
        },
        section3: {
          Component: <SectionThree isMobile={isMobile} />,
          ref: section3Ref,
          id: LANG.section3.id,
          isActive: activeStatus.isInview3,
        },
        section4: {
          Component: <SectionFour isMobile={isMobile} />,
          ref: section4Ref,
          id: LANG.section4.id,
          isActive: activeStatus.isInview4,
        },
        section5: {
          Component: <SectionFive isMobile={isMobile} />,
          ref: section5Ref,
          id: LANG.section5.id,
          isActive: activeStatus.isInview5,
        },
      }}
      nextSection={<NextSection isMobile={isMobile} chapter={2} />}
    />
  )
}
