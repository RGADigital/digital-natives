/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import type { UseInViewOptions } from 'framer-motion'
import { useInView } from 'framer-motion'

import cn from '@/utils/cn'

import type { IQuoteBox } from '@/molecules/index'
import { CardArticlePreview } from '@/organisms/card'
import TwoColumnStat from '@/organisms/twoColumnStatText/TwoColumnStatText'
import ArticleBody from '@/templates/articleBody/ArticleBody'
import { type ITwoColumnStatText, TWO_COLUMN_STAT } from '@/templates/twoColumnStatText'

import { LANG, NAVIGATION_HEADER } from './Body.constant'
import NextSection from './NextSection'

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
            <TwoColumnStat
              type={TWO_COLUMN_STAT.textLeft as ITwoColumnStatText}
              isMobile={isMobile}
              title={LANG.section1.title}
              titleNumber={LANG.section1.titleNumber}
              bodyTitle={isMobile ? LANG.section1.bodyTitleMobile : LANG.section1.bodyTitle}
              paragraph1Content={isMobile ? LANG.section1.paragraph1ContentMobile : LANG.section1.paragraph1Content}
              paragraph2Content={LANG.section1.paragraph2Content}
              statContent={LANG.section1.statContent}
              quoteContent={LANG.section1.quoteContent as IQuoteBox}
            />
          ),
          ref: section1Ref,
          id: LANG.section1.id,
          isActive: activeStatus.isInView1,
        },
        section2: {
          Component: (
            <TwoColumnStat
              type={TWO_COLUMN_STAT.textRight as ITwoColumnStatText}
              isMobile={isMobile}
              title={LANG.section2.title}
              titleNumber={LANG.section2.titleNumber}
              bodyTitle={LANG.section2.bodyTitle}
              paragraph1Content={LANG.section2.paragraph1Content}
              paragraph2Content={LANG.section2.paragraph2Content}
              statContent={LANG.section2.statContent}
              quoteContent={LANG.section2.quoteContent as IQuoteBox}
            />
          ),
          ref: section2Ref,
          id: LANG.section2.id,
          isActive: activeStatus.isInView1,
        },
        section3: {
          Component: (
            <TwoColumnStat
              type={TWO_COLUMN_STAT.textLeft as ITwoColumnStatText}
              isMobile={isMobile}
              title={LANG.section3.title}
              titleNumber={LANG.section3.titleNumber}
              bodyTitle={LANG.section3.bodyTitle}
              paragraph1Content={LANG.section3.paragraph1Content}
              paragraph2Content={LANG.section3.paragraph2Content}
              statContent={LANG.section3.statContent}
              statContentTextRightClassName={cn({ '!gap-5': isMobile })}
            />
          ),
          ref: section3Ref,
          id: LANG.section3.id,
          isActive: activeStatus.isInview3,
        },
        section4: {
          Component: (
            <div className="flex flex-col">
              <TwoColumnStat
                type={TWO_COLUMN_STAT.textLeft as ITwoColumnStatText}
                isMobile={isMobile}
                title={LANG.section4.title}
                titleNumber={LANG.section4.titleNumber}
                leftChildren={
                  LANG.section4?.cards?.[0]?.preview && (
                    <div className="lg:mr-10 lg:mt-5">
                      <CardArticlePreview
                        title={LANG.section4.cards[0].preview.title}
                        subtitle={LANG.section4.cards[0].preview.subtitle}
                        image={
                          isMobile ? LANG.section4.cards[0].preview.imageMobile : LANG.section4.cards[0].preview.image
                        }
                        modalImage={
                          isMobile ? LANG.section4.cards[0].modal.imageMobile : LANG.section4.cards[0].modal.image
                        }
                        content={LANG.section4.cards[0].modal.content}
                        imageClassName="w-full h-auto aspect-[10/7]"
                      />
                    </div>
                  )
                }
                rightChildren={
                  LANG.section4?.cards?.[1]?.preview && (
                    <div className="lg:ml-5 lg:mt-5">
                      <CardArticlePreview
                        title={LANG.section4.cards[1].preview.title}
                        subtitle={LANG.section4.cards[1].preview.subtitle}
                        image={
                          isMobile ? LANG.section4.cards[1].preview.imageMobile : LANG.section4.cards[1].preview.image
                        }
                        content={LANG.section4.cards[1].modal.content}
                        imageClassName="w-full h-auto aspect-[10/7] md:aspect-[10/8]"
                        modalImageClassName="object-scale-down bg-black"
                        modalImage={LANG.section4.cards[1].modal.image}
                      />
                    </div>
                  )
                }
                statContentWrapperClassName={cn({
                  'border-t border-neutrals-beige': isMobile,
                  'mt-[30px] pt-[42px] gap-[42px]': isMobile,
                })}
                noMarginBottom
              />
              <TwoColumnStat
                type={TWO_COLUMN_STAT.textRight as ITwoColumnStatText}
                isMobile={isMobile}
                rightChildren={
                  LANG.section4?.cards?.[2]?.preview && (
                    <div className="lg:mx-5 lg:mt-5">
                      <CardArticlePreview
                        title={LANG.section4.cards[2].preview.title}
                        subtitle={LANG.section4.cards[2].preview.subtitle}
                        image={
                          isMobile ? LANG.section4.cards[2].preview.imageMobile : LANG.section4.cards[2].preview.image
                        }
                        modalImage={
                          isMobile ? LANG.section4.cards[2].modal.imageMobile : LANG.section4.cards[2].modal.image
                        }
                        content={LANG.section4.cards[2].modal.content}
                        imageClassName="w-full h-auto aspect-[10/7] md:aspect-[34/32]"
                      />
                    </div>
                  )
                }
                leftChildren={
                  LANG.section4?.cards?.[3]?.preview && (
                    <div className="lg:mt-5">
                      <CardArticlePreview
                        title={LANG.section4.cards[3].preview.title}
                        subtitle={LANG.section4.cards[3].preview.subtitle}
                        image={
                          isMobile ? LANG.section4.cards[3].preview.imageMobile : LANG.section4.cards[3].preview.image
                        }
                        content={LANG.section4.cards[3].modal.content}
                        imageClassName="w-full h-auto aspect-[10/7] md:aspect-[6.4/2.2]"
                        modalImageClassName="object-scale-down bg-black"
                        modalImage={
                          isMobile ? LANG.section4.cards[3].modal.imageMobile : LANG.section4.cards[3].modal.image
                        }
                      />
                    </div>
                  )
                }
                noMarginTop
              />
            </div>
          ),
          ref: section4Ref,
          id: LANG.section4.id,
          isActive: activeStatus.isInview4,
        },
        section5: {
          Component: (
            <TwoColumnStat
              type={TWO_COLUMN_STAT.textRight as ITwoColumnStatText}
              isMobile={isMobile}
              title={LANG.section5.title}
              titleNumber={LANG.section5.titleNumber}
              bodyTitle={LANG.section5.bodyTitle}
              paragraph1Content={LANG.section5.paragraph1Content}
              paragraph2Content={LANG.section5.paragraph2Content}
              statContent={LANG.section5.statContent}
              quoteContent={LANG.section5.quoteContent as IQuoteBox}
              noMarginBottom
            />
          ),
          ref: section5Ref,
          id: LANG.section5.id,
          isActive: activeStatus.isInview5,
        },
      }}
      nextSection={<NextSection isMobile={isMobile} />}
    />
  )
}
