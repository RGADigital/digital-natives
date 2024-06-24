import cn from '@/utils/cn'

import { QuoteBox } from '@/molecules/index'
import { TWO_COLUMN_STAT, TwoColumnStatTemplate } from '@/templates/twoColumnStatText'

import StatContent from './StatContent'
import TextContent from './TextContent'
import TitleContent from './TitleContent'
import type { TwoColumnStatTextProps } from './TwoColumnStatText.type'

export default function TwoColumnStat({
  type,
  isMobile,
  title,
  titleNumber,
  bodyTitle,
  paragraph1Content,
  paragraph2Content,
  leftChildren,
  rightChildren,
  statContent,
  quoteContent,
  noMarginTop = false,
  noMarginBottom = false,
}: Readonly<TwoColumnStatTextProps>) {
  return (
    <TwoColumnStatTemplate
      noMarginTop={noMarginTop}
      noMarginBottom={noMarginBottom}
      isMobile={isMobile}
      type={type}
      leftChildren={leftChildren}
      rightChildren={rightChildren}
      titleContent={title && <TitleContent title={title} titleNumber={titleNumber} />}
      statContent={statContent && <StatContent statContent={statContent} type={type} isMobile={isMobile} />}
      quoteContent={
        quoteContent && (
          <QuoteBox
            {...quoteContent}
            wrapperClassName={cn({
              'mx-0': isMobile,
              'lg:mr-0': type === TWO_COLUMN_STAT.textLeft,
            })}
          />
        )
      }
      textContent={
        bodyTitle && (
          <TextContent
            bodyTitle={bodyTitle}
            paragraph1Content={paragraph1Content}
            paragraph2Content={paragraph2Content}
          />
        )
      }
    />
  )
}
