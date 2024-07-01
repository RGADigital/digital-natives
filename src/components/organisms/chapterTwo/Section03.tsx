import cn from '@/utils/cn'

import type { IColoredBox } from '@/atoms/index'
import { QuoteBox } from '@/molecules/index'
import { TextContent, TwoColumnStat } from '@/organisms/twoColumnStatText'
import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionThree({ isMobile }: Readonly<Props>) {
  return (
    <div className="flex flex-col">
      <TwoColumnStat
        type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
        isMobile={isMobile}
        title={LANG.section3.title}
        titleNumber={LANG.section3.titleNumber}
        contentWrapperClassName={cn({ 'mb-0': isMobile })}
        largeChildren={
          <>
            {LANG.section3.bodyTitle && (
              <TextContent
                bodyTitle={LANG.section3.bodyTitle}
                bodyTitleClassName="text-m-h3 font-m-h3 lg:text-[28px] lg:leading-[33.6px] lg:mr-5"
              />
            )}
          </>
        }
        largeContentWrapperClassName="lg:col-span-7 lg:border-0"
        rootWrapperClassName={cn('border-b-neutrals-cool-gray-1', { '!pt-2.5': isMobile })}
        smallChildren={
          <div>
            {LANG.section3.bodyTitle && (
              <TextContent
                paragraph1Content={LANG.section3.paragraph1Content}
                paragraph1ContentClassName="lg:col-span-12"
                paragraph2Content={LANG.section3.paragraph2Content}
                paragraph2ContentClassName="hidden"
              />
            )}
          </div>
        }
        smallContentWrapperClassName="lg:col-span-5 mb-[46px] lg:m-5"
        noMarginBottom
      />
      {/* START: quote */}
      <div className="grid grid-cols-12 pb-[50.51px] lg:border-b lg:border-black lg:p-5">
        {LANG.section3.quoteContent[0] && (
          <div className="col-span-12 bg-black lg:col-span-4 lg:h-full">
            <QuoteBox
              avatar={LANG.section3.quoteContent[0].avatar}
              author={LANG.section3.quoteContent[0].author}
              edgeColor={LANG.section3.quoteContent[0].edgeColor as IColoredBox['color']}
              quote={LANG.section3.quoteContent[0].quote}
              textClassName={cn({
                'text-[15.91px] leading-[19.09px]': isMobile,
              })}
              wrapperClassName="bg-white m-[39.77px] lg:m-[38.85px] lg:h-[calc(100%_-_77px)]"
            />
          </div>
        )}
        {LANG.section3.quoteContent[1] && (
          <div className="col-span-12 bg-accents-pink lg:col-span-4">
            <QuoteBox
              avatar={LANG.section3.quoteContent[1].avatar}
              author={LANG.section3.quoteContent[1].author}
              edgeColor={LANG.section3.quoteContent[1].edgeColor as IColoredBox['color']}
              quote={LANG.section3.quoteContent[1].quote}
              textClassName={cn({
                'text-[15.91px] leading-[19.09px]': isMobile,
              })}
              wrapperClassName="bg-white m-[39.77px] lg:m-[38.85px] lg:h-[calc(100%_-_77px)]"
            />
          </div>
        )}
        {LANG.section3.quoteContent[2] && (
          <div className="col-span-12 bg-neutrals-cool-gray-0 lg:col-span-4">
            <QuoteBox
              avatar={LANG.section3.quoteContent[2].avatar}
              author={LANG.section3.quoteContent[2].author}
              edgeColor={LANG.section3.quoteContent[2].edgeColor as IColoredBox['color']}
              quote={LANG.section3.quoteContent[2].quote}
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
