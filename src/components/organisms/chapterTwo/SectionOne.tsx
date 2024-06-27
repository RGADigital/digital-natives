import Image from 'next/image'

import type { IDefinitionBox } from '@/molecules/index'
import { DefinitionContent, TextContent, TitleContent, TwoColumnStat } from '@/organisms/twoColumnStatText'
import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionOne({ isMobile }: Readonly<Props>) {
  const paragraph1Content = isMobile ? LANG.section1.paragraph1ContentMobile : LANG.section1.paragraph1Content
  return (
    <>
      {/* START: section header */}
      <div className="grid grid-cols-12">
        <TitleContent title={LANG.section1.title} titleNumber={LANG.section1.titleNumber} />
        <div className="relative order-3 col-span-12 aspect-[41/10] h-auto w-full">
          <Image alt={LANG.section1.titleImageAlt} src={LANG.section1.titleImage} fill priority />
        </div>
      </div>
      {/* END: section header */}
      <TwoColumnStat
        type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
        isMobile={isMobile}
        largeChildren={
          <>
            {LANG.section1.bodyTitle && (
              <TextContent
                bodyTitle={LANG.section1.bodyTitle}
                paragraph1Content={paragraph1Content}
                paragraph2Content={LANG.section1.paragraph2Content}
              />
            )}
          </>
        }
        smallChildren={
          <>
            {LANG.section1.definitionContent && (
              <>{<DefinitionContent definitionContent={LANG.section1.definitionContent as IDefinitionBox[]} />}</>
            )}
          </>
        }
        noMarginTop
        noMarginBottom
      />
    </>
  )
}
