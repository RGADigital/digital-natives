/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Title } from '@mantine/core'

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
      <div className="dp-section grid grid-cols-12">
        <div className="dp-section__left lg:!max-w-2/3 col-span-12 lg:col-span-8">
          <Title order={1} className="pb-6 text-m-h1 text-black lg:!text-h1">
            Executive Summary
          </Title>
        </div>
      </div>
      {/* START: content */}
      <div className="grid w-full grid-cols-12 border-t-[1px] border-t-neutrals-cool-gray bg-white pt-4 lg:pt-0">
        <div className="relative col-span-12 lg:col-span-2">Menu goes here</div>
        <div className="lg:col-span-1"></div>
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
