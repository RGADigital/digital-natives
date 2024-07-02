import React from 'react'

import cn from '@/utils/cn'

import { TitleContent } from '@/organisms/articleContent'

import ParagraphOlContent from '../articleContent/ParagraphOlContent'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionSeven({ isMobile }: Readonly<Props>) {
  return (
    <div
      className={cn('dn-section-seven__section__header', 'grid grid-cols-12', {
        'pt-2.5 pb-[46px]': isMobile,
        'border-t-[1px] border-t-black': !isMobile,
      })}
    >
      <TitleContent title={LANG.section7.title} titleNumber={LANG.section7.titleNumber} removeBorder />
      <div
        className={cn('col-span-12', 'order-3', 'lg:px-5 pt-[82px] lg:pt-[52px] lg:pb-[80px] lg:gap-5', {
          'lg:border-t lg:border-t-neutrals-cool-gray-1': !isMobile,
        })}
      >
        <ParagraphOlContent content={LANG.section7.paragraphOlContent} />
      </div>
    </div>
  )
}
