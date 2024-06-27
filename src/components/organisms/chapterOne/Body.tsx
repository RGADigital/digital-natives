/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import type { UseInViewOptions } from 'framer-motion'
import { useInView } from 'framer-motion'
import Image from 'next/image'

// import cn from '@/utils/cn'
import type { IQuoteBox } from '@/molecules/index'
// import { CardArticlePreview } from '@/organisms/card'
import { NextSection } from '@/organisms/nextSection'
import TwoColumnStat from '@/organisms/twoColumnStatText/TwoColumnStatText'
import ArticleBody from '@/templates/articleBody/ArticleBody'
import { type ITwoColumnStatText, TWO_COLUMN_STAT } from '@/templates/twoColumnStatText'

import TitleContent from '../twoColumnStatText/TitleContent'

import { LANG, NAVIGATION_HEADER } from './Body.constant'

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
          Component: (
            <>
              <div className="grid grid-cols-12">
                <TitleContent title={LANG.section1.title} titleNumber={LANG.section1.titleNumber} />
                <div className="relative col-span-12 aspect-[41/10] h-auto w-full">
                  <Image alt={LANG.section1.titleImageAlt} src={LANG.section1.titleImage} fill priority />
                </div>
              </div>
              <TwoColumnStat
                type={TWO_COLUMN_STAT.textLeft as ITwoColumnStatText}
                isMobile={isMobile}
                // title={LANG.section1.title}
                // titleNumber={LANG.section1.titleNumber}
                bodyTitle={LANG.section1.bodyTitle}
                paragraph1Content={isMobile ? LANG.section1.paragraph1ContentMobile : LANG.section1.paragraph1Content}
                paragraph2Content={LANG.section1.paragraph2Content}
                statContent={LANG.section1.statContent}
                quoteContent={LANG.section1.quoteContent as IQuoteBox}
              />
            </>
          ),
          ref: section1Ref,
          id: LANG.section1.id,
          isActive: activeStatus.isInView1,
        },
      }}
      nextSection={<NextSection isMobile={isMobile} />}
    />
  )
}
