/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import type { UseInViewOptions } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import MicroDetail from '@/atoms/microDetail/MicroDetail'
import TwoColumnStat from '@/organisms/twoColumnStat/TwoColumnStat'
import { type ITwoColumnStat, TWO_COLUMN_STAT } from '@/templates/twoColumnStatText'

import { LANG, NAVIGATION_HEADER } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function Body({ isMobile = false }: Readonly<Props>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)
  const inViewSetting: UseInViewOptions = {
    amount: isMobile ? 'some' : 'all',
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

  return (
    <>
      <div
        className={cn('dp-section', 'sticky top-[95px] grid w-full grid-cols-12  bg-white z-[31]', {
          'top-[80px]': isMobile,
          'top-[70px]': !isMobile,
        })}
      >
        <div className={cn('dp-section__title', 'col-span-12 lg:col-span-8')}>
          <Title order={1} className="lg:!max-w-2/3 pb-6 text-m-h1 text-black lg:!text-h1 ">
            Executive Summary
          </Title>
        </div>
        <div className="col-span-12 mr-[1px] h-[1px] bg-black"></div>
      </div>
      {/* START: content */}
      <div
        className={cn('dp-section__article', 'grid w-full grid-cols-12 border-t-[1px]  bg-white pt-4 lg:pt-0')}
        ref={containerRef}
      >
        <div
          className={cn(
            'sticky h-fit self-start z-30',
            { 'top-[200px]': !isMobile, 'top-[180px] py-2': isMobile },
            'col-span-12 lg:col-span-3 bg-white',
          )}
        >
          <div className="w-full gap-2 lg:flex lg:w-2/3 lg:flex-col lg:gap-6 lg:pt-[60px]">
            {NAVIGATION_HEADER.map(({ label, href, key }: any) => {
              const isActive = activeStatus?.[`isInView${key}`] ? activeStatus[`isInView${key}`] : false
              return (
                <a href={href} key={key}>
                  <MicroDetail
                    text={label}
                    boxClassName={cn({ 'bg-accents-blue': isActive, 'bg-[#eeeeee]': !isActive })}
                    textClassName={cn({ 'text-black': isActive, 'text-neutrals-cool-gray-5': !isActive })}
                  />
                </a>
              )
            })}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9 " style={isMobile ? {} : { borderLeft: '1px solid black' }}>
          <TwoColumnStat
            isInView={isInView1}
            sectionRef={section1Ref}
            id={LANG.section1.navigationLink}
            type={TWO_COLUMN_STAT.textLeft as ITwoColumnStat}
            isMobile={isMobile}
            title={LANG.section1.title}
            titleNumber={LANG.section1.titleNumber}
            bodyTitle={LANG.section1.bodyTitle}
            paragraph1Content={LANG.section1.paragraph1Content}
            paragraph2Content={LANG.section1.paragraph2Content}
            statContent={LANG.section1.statContent}
          />

          <TwoColumnStat
            isInView={isInView2 && !isInView1}
            sectionRef={section2Ref}
            id={LANG.section2.navigationLink}
            type={TWO_COLUMN_STAT.textRight as ITwoColumnStat}
            isMobile={isMobile}
            title={LANG.section2.title}
            titleNumber={LANG.section2.titleNumber}
            bodyTitle={LANG.section2.bodyTitle}
            paragraph1Content={LANG.section2.paragraph1Content}
            paragraph2Content={LANG.section2.paragraph2Content}
            statContent={LANG.section2.statContent}
          />

          <TwoColumnStat
            isInView={isInView3 && !isInView2}
            sectionRef={section3Ref}
            id={LANG.section3.navigationLink}
            type={TWO_COLUMN_STAT.textLeft as ITwoColumnStat}
            isMobile={isMobile}
            title={LANG.section3.title}
            titleNumber={LANG.section3.titleNumber}
            bodyTitle={LANG.section3.bodyTitle}
            paragraph1Content={LANG.section3.paragraph1Content}
            paragraph2Content={LANG.section3.paragraph2Content}
            statContent={LANG.section3.statContent}
          />
        </div>
      </div>
      {/* END: content */}
    </>
  )
}
