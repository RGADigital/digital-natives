import cn from '@/utils/cn'

import { type IQuoteBox, QuoteBox } from '@/molecules/index'
import { StatContent, TextContent, TwoColumnStat } from '@/organisms/articleContent'
import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionFive({ isMobile }: Readonly<Props>) {
  return (
    <TwoColumnStat
      type={TWO_COLUMN_POSITION.textRight as ITwoColumnStatPosition}
      isMobile={isMobile}
      title={LANG.section5.title}
      titleNumber={LANG.section5.titleNumber}
      noMarginBottom
      largeChildren={
        <>
          {LANG.section5.bodyTitle && (
            <TextContent
              bodyTitle={LANG.section5.bodyTitle}
              paragraph1Content={LANG.section5.paragraph1Content}
              paragraph2Content={LANG.section5.paragraph2Content}
            />
          )}
        </>
      }
      smallChildren={
        <>
          {LANG.section5.statContent && (
            <StatContent
              statContent={LANG.section5.statContent}
              type={TWO_COLUMN_POSITION.textRight as ITwoColumnStatPosition}
              isMobile={isMobile}
            />
          )}
          {LANG.section5.quoteContent && (
            <QuoteBox
              {...(LANG.section5.quoteContent as IQuoteBox)}
              wrapperClassName={cn({
                'mx-0': isMobile,
              })}
            />
          )}
        </>
      }
    />
  )
}
