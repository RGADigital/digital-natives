import Image from 'next/image'
import { useViewportSize } from '@mantine/hooks'

import cn from '@/utils/cn'

import { type IQuoteBox, QuoteBox } from '@/molecules/index'
import { TextContent, TwoColumnStat } from '@/organisms/articleContent'
import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionFour({ isMobile }: Readonly<Props>) {
  const { width: viewportWidth } = useViewportSize()
  const showScrollbar = isMobile && viewportWidth < 868

  return (
    <div className="flex flex-col">
      <TwoColumnStat
        type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
        isMobile={isMobile}
        title={LANG.section4.title}
        titleNumber={LANG.section4.titleNumber}
        contentWrapperClassName={cn({ 'mb-[65px]': isMobile })}
        largeChildren={
          <>
            {LANG.section4.bodyTitle && (
              <TextContent
                bodyTitle={LANG.section4.bodyTitle}
                paragraph1Content={LANG.section4.paragraph1Content}
                paragraph2Content={LANG.section4.paragraph2Content}
                bodyTitleClassName="lg:mb-[30px]"
                titleWrapperClassName={cn({ 'mt-[46px]': isMobile })}
              />
            )}
          </>
        }
        rootWrapperClassName={cn({ '!pt-2.5': isMobile })}
        smallChildren={
          <>
            {LANG.section2?.quoteContent?.[0] && (
              <QuoteBox
                {...(LANG.section4.quoteContent[0] as IQuoteBox)}
                wrapperClassName={cn('lg:h-[calc(100%_-_40px)]', {
                  'gap-[30px]': !isMobile,
                })}
              />
            )}
          </>
        }
        largeContentWrapperClassName="pb-0 lg:pb-[110px] !order-first"
        smallContentWrapperClassName="lg:pb-[51px]"
        noMarginBottom
      />
      {LANG.section4.image[0] && (
        <div
          className={cn('lg:p-5', 'lg:border-t lg:border-t-neutrals-cool-gray-1 lg:border-b lg:border-b-black', {
            '!overflow-x-scroll pb-5 scrollbar-always-visible': showScrollbar && isMobile,
            'mb-[96.45px]': isMobile,
          })}
        >
          <div
            className={cn(
              'relative h-auto lg:w-full ',
              {
                'w-[868px]': isMobile,
              },
              'aspect-[2] lg:aspect-[1.8] ',
            )}
          >
            <Image alt={LANG.section4.image[0].alt} src={LANG.section4.image[0].src} priority fill />
          </div>
        </div>
      )}
    </div>
  )
}
