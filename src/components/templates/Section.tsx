import React from 'react'
import { Text } from '@mantine/core'

import cn from '@/utils/cn'

import ScrollDownIcon from '@/atoms/icon/ScrollDown'
import MicroDetail from '@/atoms/microDetail/MicroDetail'

interface Props {
  mode: 'light' | 'dark'
  children?: React.ReactNode
  className?: string
  contentClassName?: string
  isMobile?: boolean
  isFullScreen?: boolean
  microDetailBoxClassName?: string
  microDetailPosition?: 'top-left' | 'bottom-right'
  microDetailText?: string
  showMicroDetail?: boolean
  showScrollIcon?: boolean
  scrollText?: string
}

export default function SectionTemplate({
  mode,
  className,
  children,
  contentClassName,
  isFullScreen = false,
  isMobile = false,
  showMicroDetail = false,
  microDetailText,
  microDetailPosition = 'top-left',
  microDetailBoxClassName,
  showScrollIcon = false,
  scrollText,
}: Readonly<Props>) {
  const mdTopLeft = microDetailPosition === 'top-left' && showMicroDetail
  const mdBottomRight = microDetailPosition === 'bottom-right' && showMicroDetail
  return (
    <section
      className={cn(
        'dn-section-wrapper',
        'flex flex-col justify-between w-screen ',
        {
          '!min-h-screen': isFullScreen,
          '!snap-start snap-always container mx-auto': !isFullScreen,
        },
        {
          relative: mdBottomRight && !isMobile,
        },
        className,
      )}
    >
      <div
        className={cn(
          'grow lg:!px-0',
          {
            relative: true,
            'flex flex-col': mdTopLeft || isMobile,
            '!container !mx-auto': isFullScreen,
          },
          contentClassName,
        )}
      >
        {showMicroDetail && (
          <div
            className={cn({
              '': mdTopLeft,
              'lg:absolute lg:!bottom-8 lg:w-screen lg:left-0': mdBottomRight,
              'pt-[95px]': mdBottomRight && isMobile,
            })}
          >
            <div
              className={cn({
                'container mx-auto flex flex-row-reverse': mdBottomRight && !isMobile,
              })}
            >
              <MicroDetail
                text={microDetailText}
                textClassName={cn({ 'text-white ': mode === 'dark', 'text-black': mode === 'light' })}
                boxClassName={microDetailBoxClassName}
              />
            </div>
          </div>
        )}
        {children}
      </div>
      {showScrollIcon && (
        <div
          className={cn('dp-section__footer', 'animate-bounce duration-500 ease-in', {
            'absolute !bottom-8 lg:w-screen': mdBottomRight,
          })}
        >
          <div className={cn('container mx-auto', 'flex flex-col-reverse lg:flex-row lg:items-center gap-1')}>
            <ScrollDownIcon />
            {scrollText && (
              <Text
                component="p"
                className={cn('text-m-eyebrow uppercase  lg:text-eyebrow', {
                  'text-neutrals-cream': mode === 'dark',
                  'text-black': mode === 'light',
                })}
              >
                {scrollText}
              </Text>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
