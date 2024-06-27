import cn from '@/utils/cn'

import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/components/templates/twoColumnTemplate'
import { StatContent, TextContent, TwoColumnStat } from '@/organisms/twoColumnStatText'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionThree({ isMobile }: Readonly<Props>) {
  return (
    <TwoColumnStat
      type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
      isMobile={isMobile}
      title={LANG.section3.title}
      titleNumber={LANG.section3.titleNumber}
      largeContentWrapperClassName={cn({ '!gap-5': isMobile })}
      largeChildren={
        <>
          {LANG.section3.bodyTitle && (
            <TextContent
              bodyTitle={LANG.section3.bodyTitle}
              paragraph1Content={LANG.section3.paragraph1Content}
              paragraph2Content={LANG.section3.paragraph2Content}
            />
          )}
        </>
      }
      smallChildren={
        <>
          {LANG.section3.statContent && (
            <StatContent
              statContent={LANG.section3.statContent}
              type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
              isMobile={isMobile}
            />
          )}
        </>
      }
    />
  )
}
