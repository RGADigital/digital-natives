import cn from '@/utils/cn'

import { TextContent, TwoColumnStat } from '@/organisms/articleContent'
import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionSix({ isMobile }: Readonly<Props>) {
  return (
    <div className="flex flex-col">
      <TwoColumnStat
        type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
        isMobile={isMobile}
        title={LANG.section6.title}
        titleNumber={LANG.section6.titleNumber}
        contentWrapperClassName={cn({ 'mb-0': isMobile })}
        largeChildren={
          <>
            {LANG.section6.paragraph1Content && (
              <TextContent
                paragraph1Content={LANG.section6.paragraph1Content}
                paragraph2Content={LANG.section6.paragraph2Content}
                paragraph2ContentClassName={cn({ 'mt-5': isMobile })}
              />
            )}
          </>
        }
        largeContentWrapperClassName="pt-[126px] pb-[63px] lg:pt-[52px] lg:pb-[60px] lg:col-span-11 lg:border-0"
        rootWrapperClassName={cn('border-b-neutrals-cool-gray-1', { '!pt-2.5': isMobile })}
        noMarginBottom
      />
    </div>
  )
}
