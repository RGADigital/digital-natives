import Image from 'next/image'
import { Text } from '@mantine/core'

import cn from '@/utils/cn'

import { TitleContent, TwoColumnStat } from '@/organisms/twoColumnStatText'
import type { ITwoColumnStatPosition } from '@/templates/twoColumnTemplate'
import { TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionThree({ isMobile }: Readonly<Props>) {
  return (
    <>
      <div
        className={cn('dn-section-three__section__header', 'grid grid-cols-12', { 'pt-[30px] pb-[46px]': isMobile })}
      >
        {/* START: part 1 */}
        <TitleContent title={LANG.section3.title} titleNumber={LANG.section3.titleNumber} />
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
              {LANG.section3.paragraph1Content[0]}
            </Text>
            <Text component="p" className="font-m-body lg:!font-body text-m-body lg:!text-body">
              {LANG.section3.paragraph1Content[1]}
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
              {LANG.section3.paragraph2Content[0]}
            </Text>
            <Text component="p" className="font-m-body lg:!font-body text-m-body lg:!text-body">
              {LANG.section3.paragraph2Content[1]}
            </Text>
          </div>
          {/* END: p2 */}
        </div>
        {/* END: part 2 */}
      </div>
      <TwoColumnStat
        contentWrapperClassName="lg:border-t lg:border-black"
        type={TWO_COLUMN_POSITION.textRight as ITwoColumnStatPosition}
        isMobile={isMobile}
        largeChildren={
          <div className="relative aspect-square h-auto w-full lg:my-5">
            <Image src={LANG.section3.image} alt={LANG.section3.imageAlt} priority fill />
          </div>
        }
        largeContentWrapperClassName="lg:col-span-7"
        smallChildren={
          <div className="flex flex-col lg:h-full lg:justify-between lg:p-5 ">
            <Text component="p" className="lg:font-subheading lg:h-full lg:content-center lg:text-subheading ">
              {LANG.section3.description}
            </Text>
            <Text
              component="p"
              className={cn('!font-normal text-m-nav lg:text-body2 font-m-nav lg:font-body2 lg:w-2/3', {
                hidden: isMobile,
              })}
            >
              {LANG.section3.source}
            </Text>
          </div>
        }
        smallContentWrapperClassName="lg:col-span-5 lg:flex lg:flex-col lg:justify-between"
        noMarginTop
        noMarginBottom
      />
      <Text
        component="p"
        className={cn('!font-normal text-m-nav lg:text-body2 font-m-nav lg:font-body2 lg:w-2/3', {
          hidden: !isMobile,
          'mt-[46px] mb-3': isMobile,
        })}
      >
        {LANG.section3.source}
      </Text>
    </>
  )
}
