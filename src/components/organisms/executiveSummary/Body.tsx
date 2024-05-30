/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import MicroDetail from '@/components/atoms/microDetail/MicroDetail'
import { SectionTemplate } from '@/components/templates'
import TwoColumnStat from '@/organisms/twoColumnStat/TwoColumnStat'
import { type ITwoColumnStat, TWO_COLUMN_STAT } from '@/templates/twoColumnStat'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function Body({ isMobile = false }: Readonly<Props>) {
  return (
    <SectionTemplate mode="light" className="pt-[95px] lg:pt-[132px]">
      <div
        className={cn('dp-section', 'sticky top-[95px] grid w-full grid-cols-12  bg-white', {
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
      <div className={cn('dp-section__article', 'grid w-full grid-cols-12 border-t-[1px]  bg-white pt-4 lg:pt-0')}>
        <div
          className={cn(
            'sticky h-fit self-start',
            { 'top-[200px]': !isMobile, 'top-[180px]': isMobile },
            'col-span-12 lg:col-span-3 bg-white',
          )}
        >
          <div className="w-full lg:w-2/3 lg:pt-[60px]">
            <MicroDetail
              text="Challenge"
              boxClassName={cn({ 'bg-accents-blue': true })}
              textClassName={cn({ 'text-black': true })}
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9 " style={isMobile ? {} : { borderLeft: '1px solid black' }}>
          <TwoColumnStat
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
    </SectionTemplate>
  )
}
