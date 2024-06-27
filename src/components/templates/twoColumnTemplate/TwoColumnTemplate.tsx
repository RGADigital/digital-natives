import React from 'react'

import cn from '@/utils/cn'

import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from './TwoColumnTemplate.type'

interface Props {
  isMobile?: boolean
  largeChildren?: React.ReactNode
  noMarginTop?: boolean
  noMarginBottom?: boolean
  smallChildren?: React.ReactNode
  largeContentWrapperClassName?: string
  smallContentWrapperClassName?: string
  titleContent: React.ReactNode
  type?: ITwoColumnStatPosition
}

export default function TwoColumnTemplate({
  isMobile,
  largeChildren,
  noMarginTop,
  noMarginBottom,
  smallChildren,
  largeContentWrapperClassName,
  smallContentWrapperClassName,
  titleContent,
  type = TWO_COLUMN_POSITION.textLeft,
}: Readonly<Props>) {
  return (
    <div
      className={cn({
        'pt-[30px]': !noMarginTop,
        'lg:pb-5': !noMarginBottom && titleContent,
        'dn-two-column-template': true,
        'dn-two-column-template--text-right': type === TWO_COLUMN_POSITION.textRight,
        'dn-two-column-template--text-left': type === TWO_COLUMN_POSITION.textLeft,
        'border-b-[1px] border-b-black': !isMobile,
      })}
    >
      <div className="grid w-full grid-cols-12">{titleContent}</div>
      <div
        className={cn(
          'dn-two-column-template__content grid w-full grid-cols-12 ',
          {
            'flex flex-col gap-[46px] mb-[30px]': isMobile,
          },
          largeContentWrapperClassName,
        )}
      >
        <div
          className={cn('dn-two-column-template__text-content', 'col-span-12 lg:col-span-8', {
            'order-last lg:border-l lg:pl-5 lg:border-l-neutrals-cool-gray-0': type === TWO_COLUMN_POSITION.textRight,
            'lg:ml-6 lg:border-r lg:border-r-neutrals-cool-gray-0': type === TWO_COLUMN_POSITION.textLeft,
          })}
        >
          {largeChildren}
        </div>
        <div
          className={cn(
            'dn-two-column-template__stat-content',
            'col-span-12 lg:my-0 lg:col-span-4',
            {
              'order-first': type === TWO_COLUMN_POSITION.textRight,
              'flex flex-col gap-[46px]': isMobile,
            },
            smallContentWrapperClassName,
          )}
        >
          {smallChildren}
        </div>
      </div>
    </div>
  )
}
