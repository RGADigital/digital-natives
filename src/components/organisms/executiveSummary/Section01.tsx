import cn from '@/utils/cn'

import { type IQuoteBox, QuoteBox } from '@/molecules/index'
import { StatContent, TextContent, TwoColumnStat } from '@/organisms/articleContent'
import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionOne({ isMobile }: Readonly<Props>) {
  const section1BodyTitle = isMobile ? LANG.section1.bodyTitleMobile : LANG.section1.bodyTitle

  return (
    <TwoColumnStat
      type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
      isMobile={isMobile}
      title={LANG.section1.title}
      titleNumber={LANG.section1.titleNumber}
      largeChildren={
        <>
          {section1BodyTitle && (
            <TextContent
              bodyTitle={section1BodyTitle}
              paragraph1Content={isMobile ? LANG.section1.paragraph1ContentMobile : LANG.section1.paragraph1Content}
              paragraph2Content={LANG.section1.paragraph2Content}
            />
          )}
        </>
      }
      smallChildren={
        <>
          {LANG.section1.statContent && (
            <StatContent
              statContent={LANG.section1.statContent}
              type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
              isMobile={isMobile}
            />
          )}
          {LANG.section1.quoteContent && (
            <QuoteBox
              {...(LANG.section1.quoteContent as IQuoteBox)}
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
