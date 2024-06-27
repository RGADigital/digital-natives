import Image from 'next/image'
import { Text } from '@mantine/core'

import cn from '@/utils/cn'

import { MicroDetail } from '@/atoms/index'
import type { IDefinitionBox } from '@/molecules/index'
import { DefinitionContent, TextContent, TitleContent, TwoColumnStat } from '@/organisms/twoColumnStatText'
import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionOne({ isMobile }: Readonly<Props>) {
  const PointContent = ({ point, content }: { point: string; content: string }) => (
    <li
      key={point}
      className={cn('col-span-12 lg:col-span-6 ', 'flex flex-col', {
        'lg:!min-h-[187px]': true,
        'mt-5 lg:mr-5 lg:mt-5': true,
      })}
    >
      <MicroDetail
        boxClassName="!size-2 mt-1"
        color="red"
        text={point}
        textClassName="capitalize font-m-body lg:font-nav text-m-body lg:text-nav !font-normal"
        containerClassName="items-start"
      />
      <Text component="p" className="font-m-body lg:font-nav mt-5 text-m-body !font-normal lg:text-nav">
        {content}
      </Text>
    </li>
  )

  const points = [...(LANG.section1?.point1Content || []), ...(LANG.section1?.point2Content || [])]
  return (
    <>
      {/* START: section header */}
      <div className={cn('dn-section-one__section-header', { 'mt-[30px]': isMobile }, 'grid grid-cols-12]')}>
        <TitleContent
          title={isMobile ? LANG.section1.titleMobile : LANG.section1.title}
          titleNumber={LANG.section1.titleNumber}
        />
        <div
          className={cn('relative order-3 col-span-12 h-auto w-full', {
            'aspect-[41/10]': !isMobile,
            'aspect-[10/12]': isMobile,
            'mt-[110px]': isMobile,
          })}
        >
          <Image
            alt={LANG.section1.titleImageAlt}
            src={isMobile ? LANG.section1.titleImageMobile : LANG.section1.titleImage}
            fill
            priority
          />
        </div>
      </div>
      {/* END: section header */}
      <TwoColumnStat
        type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
        isMobile={isMobile}
        largeChildren={
          <>
            {LANG.section1.bodyTitle && (
              <TextContent bodyTitle={LANG.section1.bodyTitle} titleWrapperClassName="mt-[46px] lg:mt-5" />
            )}
            {(LANG.section1.point1Content || LANG.section1.point2Content) && (
              <ul className={cn('grid grid-cols-12', 'text-black')}>
                {points?.map(({ point, content }) => <PointContent point={point} content={content} key={point} />)}
              </ul>
            )}
            <Text
              component="p"
              className={cn(
                '!font-normal text-m-nav lg:text-body2 font-m-nav lg:font-body2',
                'lg:max-w-[50%] pt-[46px] lg:pt-1',
              )}
            >
              {LANG.section1.source1}
            </Text>
          </>
        }
        smallChildren={
          <>
            {LANG.section1.definitionContent && (
              <DefinitionContent
                definitionContent={LANG.section1.definitionContent as IDefinitionBox[]}
                isMobile={isMobile}
              />
            )}
            <Text
              component="p"
              className={cn('!font-normal text-m-nav lg:text-body2 font-m-nav lg:font-body2 ', 'lg:px-5 lg:pb-5')}
            >
              {LANG.section1.source2}
            </Text>
          </>
        }
        noMarginTop
        noMarginBottom
      />
    </>
  )
}
