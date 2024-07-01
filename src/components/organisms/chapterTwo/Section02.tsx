import Image from 'next/image'

import cn from '@/utils/cn'

import { type IQuoteBox, QuoteBox } from '@/molecules/index'
import { TextContent, TwoColumnStat } from '@/organisms/twoColumnStatText'
import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionTwo({ isMobile }: Readonly<Props>) {
  return (
    <TwoColumnStat
      type={TWO_COLUMN_POSITION.textRight as ITwoColumnStatPosition}
      isMobile={isMobile}
      title={LANG.section2.title}
      titleNumber={LANG.section2.titleNumber}
      largeChildren={
        <>
          {LANG.section2.bodyTitle && (
            <TextContent
              bodyTitle={LANG.section2.bodyTitle}
              paragraph1Content={LANG.section2.paragraph1Content}
              paragraph2Content={LANG.section2.paragraph2Content}
              bodyTitleClassName="lg:mb-[30px]"
            />
          )}
        </>
      }
      smallChildren={
        <>
          {LANG.section2?.quoteContent?.[0] && (
            <QuoteBox
              {...(LANG.section2.quoteContent[0] as IQuoteBox)}
              wrapperClassName={cn('lg:h-[calc(100%_-_40px)]', {
                // 'mx-0': isMobile,
                'gap-[30px]': !isMobile,
              })}
            />
          )}
        </>
      }
      titleImageChildren={
        LANG.section2.image?.[0] && (
          <div className="lg:border-b lg:border-neutrals-cool-gray-1 lg:p-5">
            <div className="relative aspect-[1.43] h-auto bg-black lg:aspect-[2.3]">
              <Image
                src={isMobile ? LANG.section2.image[0].srcMobile : LANG.section2.image[0].src}
                alt={LANG.section2.image[0].alt}
                className="object-scale-down"
                priority
                fill
              />
            </div>
          </div>
        )
      }
      largeContentWrapperClassName="pb-5 lg:pb-[113px]"
      noMarginBottom
    />
  )
}