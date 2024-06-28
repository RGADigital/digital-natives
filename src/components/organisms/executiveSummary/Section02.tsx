import cn from '@/utils/cn'

import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/components/templates/twoColumnTemplate'
import { type IQuoteBox, QuoteBox } from '@/molecules/index'
import { StatContent, TextContent, TwoColumnStat } from '@/organisms/twoColumnStatText'

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
            />
          )}
        </>
      }
      smallChildren={
        <>
          {LANG.section2.statContent && (
            <StatContent
              statContent={LANG.section2.statContent}
              type={TWO_COLUMN_POSITION.textRight as ITwoColumnStatPosition}
              isMobile={isMobile}
            />
          )}
          {LANG.section2.quoteContent && (
            <QuoteBox
              {...(LANG.section2.quoteContent as IQuoteBox)}
              wrapperClassName={cn('lg:mr-0', {
                'mx-0': isMobile,
              })}
            />
          )}
        </>
      }
    />
  )
}
