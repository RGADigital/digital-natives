import cn from '@/utils/cn'

import type { IColoredBox } from '@/atoms/index'
import { QuoteBox } from '@/molecules/index'
import { TextContent, TwoColumnStat } from '@/organisms/twoColumnStatText'
import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionFive({ isMobile }: Readonly<Props>) {
  return (
    <div className="flex flex-col">
      <TwoColumnStat
        type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
        isMobile={isMobile}
        title={LANG.section5.title}
        titleNumber={LANG.section5.titleNumber}
        contentWrapperClassName={cn({ 'mb-0': isMobile })}
        largeChildren={
          <>
            {LANG.section5.paragraph1Content && (
              <TextContent
                paragraph1Content={LANG.section5.paragraph1Content}
                paragraph2Content={LANG.section5.paragraph2Content}
                paragraph2ContentClassName={cn({ 'mt-5': isMobile })}
              />
            )}
          </>
        }
        largeContentWrapperClassName="pt-[126px] lg:pt-[52px] lg:pb-[60px] lg:col-span-11 lg:border-0"
        rootWrapperClassName={cn('border-b-neutrals-cool-gray-1', { '!pt-2.5': isMobile })}
        noMarginBottom
      />
      {/* START: quote */}
      <div className="grid grid-cols-12 pb-[59.51px] lg:border-b lg:border-b-black lg:p-5">
        {LANG.section5.quoteContent[0] && (
          <div className="col-span-12 bg-neutrals-cool-gray-1 lg:col-span-4 lg:h-full">
            <QuoteBox
              avatar={LANG.section5.quoteContent[0].avatar}
              author={LANG.section5.quoteContent[0].author}
              edgeColor={LANG.section5.quoteContent[0].edgeColor as IColoredBox['color']}
              quote={LANG.section5.quoteContent[0].quote}
              textClassName={cn({
                'text-[15.91px] leading-[19.09px]': isMobile,
              })}
              wrapperClassName="bg-white m-[39.77px] lg:m-[38.85px] lg:h-[calc(100%_-_77px)]"
            />
          </div>
        )}
        {LANG.section5.quoteContent[1] && (
          <div className="col-span-12 bg-accents-yellow lg:col-span-4">
            <QuoteBox
              avatar={LANG.section5.quoteContent[1].avatar}
              author={LANG.section5.quoteContent[1].author}
              edgeColor={LANG.section5.quoteContent[1].edgeColor as IColoredBox['color']}
              quote={LANG.section5.quoteContent[1].quote}
              textClassName={cn({
                'text-[15.91px] leading-[19.09px]': isMobile,
              })}
              wrapperClassName="bg-white m-[39.77px] lg:m-[38.85px] lg:h-[calc(100%_-_77px)]"
            />
          </div>
        )}
        {LANG.section5.quoteContent[2] && (
          <div className="col-span-12 bg-[#3F3F3F] lg:col-span-4">
            <QuoteBox
              avatar={LANG.section5.quoteContent[2].avatar}
              author={LANG.section5.quoteContent[2].author}
              edgeColor={LANG.section5.quoteContent[2].edgeColor as IColoredBox['color']}
              quote={LANG.section5.quoteContent[2].quote}
              textClassName={cn({
                'text-[15.91px] leading-[19.09px]': isMobile,
              })}
              wrapperClassName="bg-white m-[39.77px] lg:m-[38.85px] lg:h-[calc(100%_-_77px)]"
            />
          </div>
        )}
      </div>
      {/* END: quote */}
    </div>
  )
}
