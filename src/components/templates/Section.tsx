import React from 'react'
import { Text } from '@mantine/core'

import cn from '@/utils/cn'

import ScrollDownIcon from '@/atoms/icon/ScrollDown'

import MicroDetail from '../atoms/microDetail/MicroDetail'

interface Props {
  mode: 'light' | 'dark'
  children?: React.ReactNode
  className?: string
  isFullScreen?: boolean
  microDetailText?: string
  showMicroDetail?: boolean
  showScrollIcon?: boolean
  scrollText?: string
}
export default function SectionTemplate({
  mode,
  className,
  children,
  isFullScreen,
  showMicroDetail = false,
  microDetailText,
  showScrollIcon = false,
  scrollText,
}: Readonly<Props>) {
  return (
    <section
      className={cn(
        'dn-section-wrapper',
        'flex flex-col justify-between',
        {
          'bg-black': mode === 'dark',
          '!min-h-screen': isFullScreen,
          'pt-[95px] lg:pt-[132px] pb-[41px] lg:pb-4': isFullScreen,
        },
        className,
      )}
    >
      <div className="container mx-auto grow">
        {showMicroDetail && (
          <MicroDetail
            text={microDetailText}
            className={cn('', { 'text-white ': mode === 'dark', 'text-black': mode === 'light' })}
          />
        )}
        {children}
      </div>
      {showScrollIcon && (
        <div
          className={cn(
            'dp-section__footer',
            'container mx-auto mt-[20px]',
            'flex flex-col items-center lg:items-start gap-[29px] lg:gap-[27px]',
            'animate-bounce duration-1000',
            { 'mt-[17px] lg:mt-7': showMicroDetail },
          )}
        >
          {scrollText && (
            <Text
              component="p"
              className={cn('text-m-disclaimer uppercase  lg:text-disclaimer', {
                'text-neutrals-cream': mode === 'dark',
                'text-black': mode === 'light',
              })}
            >
              {scrollText}
            </Text>
          )}
          <ScrollDownIcon />
        </div>
      )}
    </section>
  )
}
