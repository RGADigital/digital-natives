import React from 'react'

import cn from '@/utils/cn'

import { type ITwoColumnStatText, TWO_COLUMN_STAT } from './TwoColumnStatText.type'

interface Props {
  isMobile?: boolean
  leftChildren?: React.ReactNode
  noMarginTop?: boolean
  noMarginBottom?: boolean
  rightChildren?: React.ReactNode
  statContent: React.ReactNode
  statContentWrapperClassName?: string
  statContentTextRightClassName?: string
  textContent: React.ReactNode
  titleContent: React.ReactNode
  type?: ITwoColumnStatText
  quoteContent?: React.ReactNode
}

export default function TwoColumnStatTemplate({
  isMobile,
  leftChildren,
  noMarginTop,
  noMarginBottom,
  rightChildren,
  statContent,
  statContentWrapperClassName,
  statContentTextRightClassName,
  textContent,
  titleContent,
  type = TWO_COLUMN_STAT.textLeft,
  quoteContent,
}: Readonly<Props>) {
  return (
    <div
      className={cn({
        'pt-[30px]': !noMarginTop,
        'lg:pb-5': !noMarginBottom && titleContent,
        'dn-two-column-stat': true,
        'dn-two-column-stat--text-right': type === TWO_COLUMN_STAT.textRight,
        'dn-two-column-stat--text-left': type === TWO_COLUMN_STAT.textLeft,
        'border-b-[1px] border-b-black': !isMobile,
      })}
    >
      <div className="grid w-full grid-cols-12">{titleContent}</div>
      <div
        className={cn(
          'dn-two-column-stat__content grid w-full grid-cols-12 ',
          {
            'flex flex-col gap-[46px] mb-[30px]': isMobile,
          },
          statContentWrapperClassName,
        )}
      >
        <div
          className={cn('dn-two-column-stat__text-content', 'col-span-12 lg:col-span-8', {
            'order-last lg:border-l lg:pl-5 lg:border-l-neutrals-cool-gray-0': type === TWO_COLUMN_STAT.textRight,
            'lg:ml-6 lg:border-r lg:border-r-neutrals-cool-gray-0': type === TWO_COLUMN_STAT.textLeft,
          })}
        >
          {textContent}
          {leftChildren}
        </div>
        <div
          className={cn(
            'dn-two-column-stat__stat-content',
            'col-span-12 lg:my-0 lg:col-span-4',
            {
              'order-first': type === TWO_COLUMN_STAT.textRight,
              'flex flex-col gap-[46px]': isMobile,
            },
            statContentTextRightClassName,
          )}
        >
          {statContent}
          {quoteContent}
          {rightChildren}
        </div>
      </div>
    </div>
  )
}
