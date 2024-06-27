import { TWO_COLUMN_POSITION, TwoColumnTemplate } from '@/templates/twoColumnTemplate'

import TitleContent from './TitleContent'
import type { TwoColumnStatTextProps } from './TwoColumnStatText.type'

// TODO[pops]: join this & template
export default function TwoColumnStat({
  type,
  isMobile,
  title,
  titleNumber,
  largeChildren,
  smallChildren,
  noMarginTop = false,
  noMarginBottom = false,
  largeContentWrapperClassName,
  smallContentWrapperClassName,
}: Readonly<TwoColumnStatTextProps>) {
  return (
    <TwoColumnTemplate
      noMarginTop={noMarginTop}
      noMarginBottom={noMarginBottom}
      isMobile={isMobile}
      type={isMobile ? TWO_COLUMN_POSITION.textLeft : type}
      largeContentWrapperClassName={largeContentWrapperClassName}
      smallContentWrapperClassName={smallContentWrapperClassName}
      largeChildren={largeChildren}
      smallChildren={smallChildren}
      titleContent={title && <TitleContent title={title} titleNumber={titleNumber} />}
    />
  )
}
