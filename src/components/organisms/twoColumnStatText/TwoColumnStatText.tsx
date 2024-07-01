import { TwoColumnTemplate } from '@/templates/twoColumnTemplate'

import TitleContent from './TitleContent'
import type { TwoColumnStatTextProps } from './TwoColumnStatText.type'

// TODO[pops]: join this & template
export default function TwoColumnStat({
  type,
  isMobile,
  title,
  titleNumber,
  titleImageChildren,
  largeChildren,
  largeContentWrapperClassName,
  smallChildren,
  noMarginTop = false,
  noMarginBottom = false,
  contentWrapperClassName,
  smallContentWrapperClassName,
}: Readonly<TwoColumnStatTextProps>) {
  return (
    <TwoColumnTemplate
      noMarginTop={noMarginTop}
      noMarginBottom={noMarginBottom}
      isMobile={isMobile}
      type={type}
      contentWrapperClassName={contentWrapperClassName}
      largeContentWrapperClassName={largeContentWrapperClassName}
      smallContentWrapperClassName={smallContentWrapperClassName}
      largeChildren={largeChildren}
      smallChildren={smallChildren}
      titleContent={title && <TitleContent title={title} titleNumber={titleNumber} />}
      titleImageChildren={titleImageChildren}
    />
  )
}
