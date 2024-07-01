import React, { useRef } from 'react'
import type { UseInViewOptions } from 'framer-motion'
import { useInView } from 'framer-motion'

import { NextSection } from '@/organisms/nextSection'
import ArticleBodyDesktop from '@/templates/articleBody/ArticleBodyDesktop'
import ArticleBodyMobile from '@/templates/articleBody/ArticleBodyMobile'

import { LANG, NAVIGATION_HEADER } from './Body.constant'
import SectionOne from './Section01'
import SectionTwo from './Section02'
import SectionThree from './Section03'
import SectionFour from './Section04'
import SectionFive from './Section05'
import SectionSix from './Section06'
import SectionSeven from './Section07'

interface Props {
  isMobile?: boolean
}

export default function Body({ isMobile = false }: Readonly<Props>) {
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)
  const section4Ref = useRef<HTMLDivElement>(null)
  const section5Ref = useRef<HTMLDivElement>(null)
  const section6Ref = useRef<HTMLDivElement>(null)
  const section7Ref = useRef<HTMLDivElement>(null)

  const inViewSetting: UseInViewOptions = {
    amount: 'some',
    margin: '-300px 0px 0px 0px',
  }
  const isInView1 = useInView(section1Ref, inViewSetting)
  const isInView2 = useInView(section2Ref, inViewSetting)
  const isInView3 = useInView(section3Ref, inViewSetting)
  const isInView4 = useInView(section4Ref, inViewSetting)
  const isInView5 = useInView(section5Ref, inViewSetting)
  const isInView6 = useInView(section6Ref, inViewSetting)
  const isInView7 = useInView(section7Ref, inViewSetting)

  const activeStatus: { [key: string]: any } = {
    isInView1,
    isInView2: isInView2 && !isInView1,
    isInView3: isInView3 && !isInView2,
    isInView4: isInView4 && !isInView3,
    isInView5: isInView5 && !isInView4,
    isInView6: isInView6 && !isInView5,
    isInView7: isInView7 && !isInView6,
  }

  if (isMobile) {
    return (
      <ArticleBodyMobile
        chapterTitle={LANG.chapterTitle}
        title={LANG.title}
        menu={NAVIGATION_HEADER}
        activeStatus={activeStatus}
        content={{
          section1: {
            Component: <SectionOne isMobile />,
            ref: section1Ref,
            id: LANG.section1.id,
            isActive: activeStatus.isInView1,
          },
          section2: {
            Component: <SectionTwo isMobile />,
            ref: section2Ref,
            id: LANG.section2.id,
            isActive: activeStatus.isInView2,
          },
          section3: {
            Component: <SectionThree isMobile />,
            ref: section3Ref,
            id: LANG.section3.id,
            isActive: activeStatus.isInView3,
          },
          section4: {
            Component: <SectionFour isMobile />,
            ref: section4Ref,
            id: LANG.section4.id,
            isActive: activeStatus.isInView4,
          },
          section5: {
            Component: <SectionFive isMobile />,
            ref: section5Ref,
            id: LANG.section5.id,
            isActive: activeStatus.isInView5,
          },
          section6: {
            Component: <SectionSix isMobile />,
            ref: section6Ref,
            id: LANG.section6.id,
            isActive: activeStatus.isInView6,
          },
          section7: {
            Component: <SectionSeven isMobile />,
            ref: section7Ref,
            id: LANG.section7.id,
            isActive: activeStatus.isInView7,
          },
        }}
        nextSection={<NextSection isMobile chapter={3} />}
        isMobile
      />
    )
  }

  return (
    <ArticleBodyDesktop
      chapterTitle={LANG.chapterTitle}
      title={LANG.title}
      menu={NAVIGATION_HEADER}
      activeStatus={activeStatus}
      content={{
        section1: {
          Component: <SectionOne />,
          ref: section1Ref,
          id: LANG.section1.id,
          isActive: activeStatus.isInView1,
        },
        section2: {
          Component: <SectionTwo />,
          ref: section2Ref,
          id: LANG.section2.id,
          isActive: activeStatus.isInView2,
        },
        section3: {
          Component: <SectionThree />,
          ref: section3Ref,
          id: LANG.section3.id,
          isActive: activeStatus.isInView3,
        },
        section4: {
          Component: <SectionFour />,
          ref: section4Ref,
          id: LANG.section4.id,
          isActive: activeStatus.isInView4,
        },
        section5: {
          Component: <SectionFive />,
          ref: section5Ref,
          id: LANG.section5.id,
          isActive: activeStatus.isInView5,
        },
        section6: {
          Component: <SectionSix />,
          ref: section6Ref,
          id: LANG.section6.id,
          isActive: activeStatus.isInView6,
        },
        section7: {
          Component: <SectionSeven />,
          ref: section7Ref,
          id: LANG.section7.id,
          isActive: activeStatus.isInView7,
        },
      }}
      nextSection={<NextSection chapter={3} wrapperClassName={'border-t border-black'} />}
    />
  )
}
