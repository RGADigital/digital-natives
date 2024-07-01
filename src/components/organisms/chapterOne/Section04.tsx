import React from 'react'
import Image from 'next/image'
import { Text } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'

import cn from '@/utils/cn'

import { HorizontalArrowScroll } from '@/atoms/index'
import { TitleContent, TwoColumnStat } from '@/organisms/articleContent'
import type { ITwoColumnStatPosition } from '@/templates/twoColumnTemplate'
import { TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionFour({ isMobile }: Readonly<Props>) {
  const { width: viewportWidth } = useViewportSize()

  const showScrollbar = isMobile && viewportWidth < 580
  return (
    <>
      <div
        className={cn('dn-section-three__section__header', 'grid grid-cols-12', { 'pt-[30px] pb-[46px]': isMobile })}
      >
        {/* START: part 1 */}
        <TitleContent title={LANG.section4.title} titleNumber={LANG.section4.titleNumber} />
        <div
          className={cn(
            'col-span-12 grid grid-cols-12 order-3',
            'lg:px-5 pt-[110px] lg:pt-[52px] lg:pb-[80px] lg:gap-5',
          )}
        >
          {/* START: p1 */}
          <div
            className={cn('col-span-12', {
              'flex flex-col gap-5': true,
              'col-span-6': !isMobile,
            })}
          >
            <Text component="p" className="font-m-body lg:!font-body text-m-body lg:!text-body">
              {LANG.section4.paragraph1Content[0]}
            </Text>
            <Text component="p" className="font-m-body lg:!font-body text-m-body lg:!text-body">
              {LANG.section4.paragraph1Content[1]}
            </Text>
          </div>
          {/* END: p1 */}
          {/* START: p2 */}
          <div
            className={cn('col-span-12', {
              'flex flex-col gap-5': true,
              'col-span-6': !isMobile,
            })}
          >
            <Text component="p" className="font-m-body lg:!font-body text-m-body lg:!text-body">
              For the public sector,{' '}
              <a
                href="https://www2.deloitte.com/us/en/insights/industry/public-sector/citizen-centric-government.html"
                rel="noreferrer"
                target="_blank"
              >
                Deloitte
              </a>{' '}
              and{' '}
              <a
                href="https://www.capgemini.com/insights/research-library/citizen-services-for-life/"
                rel="noreferrer"
                target="_blank"
              >
                Capgemini
              </a>{' '}
              have proposed frameworks for bundling government services together to make them more navigable by
              citizens, and the NSW Government has modelled their{' '}
              <a href="https://www.nsw.gov.au/life-events" rel="noreferrer" target="_blank">
                Life Events
              </a>{' '}
              hub after a similar model developed by the NZ Government.
            </Text>
            <Text component="p" className="font-m-body lg:!font-body text-m-body lg:!text-body">
              {LANG.section4.paragraph2Content[0]}
            </Text>
          </div>
          {/* END: p2 */}
        </div>
        {/* END: part 2 */}
      </div>
      <TwoColumnStat
        contentWrapperClassName="lg:border-t lg:border-black"
        type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
        isMobile={isMobile}
        largeChildren={
          <>
            <Text
              component="p"
              className="font-m-h3 lg:font-subheading text-m-h3 lg:mb-2.5 lg:mt-[15px] lg:text-subheading"
            >
              {LANG.section4.imageHeader}
            </Text>
            <div
              className={cn('w-full flex flex-col', {
                '!overflow-x-scroll pb-5 scrollbar-always-visible': showScrollbar,
              })}
            >
              <div
                className={cn('relative w-full h-auto aspect-[63/43] lg:aspect-square mt-5 lg:mb-5', {
                  'min-w-[580px]': isMobile,
                })}
              >
                <Image src={LANG.section4.image} alt={LANG.section4.imageAlt} priority fill />
              </div>
            </div>
            <div className={cn('hidden', { 'flex justify-end mt-[19px]': showScrollbar })}>
              <HorizontalArrowScroll />
            </div>
          </>
        }
        largeContentWrapperClassName="lg:pr-5"
        smallChildren={
          <div className="flex flex-col lg:h-full lg:p-5 ">
            <div className="flex flex-col">
              {LANG.section4.lifeStages?.map((stage: string, idx: number) => (
                <div key={stage} className="flex gap-1">
                  <Text component="p" className="font-m-body lg:font-body text-m-body lg:w-5 lg:text-body">
                    {idx + 1}.
                  </Text>
                  <Text component="p" className="font-m-body lg:font-body text-m-body lg:text-body ">
                    {stage}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        }
        smallContentWrapperClassName="lg:flex lg:flex-col lg:justify-between"
        noMarginTop
        noMarginBottom
      />
    </>
  )
}
