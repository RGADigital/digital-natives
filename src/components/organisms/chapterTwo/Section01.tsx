import Image from 'next/image'

import cn from '@/utils/cn'

import { TextContent, TwoColumnStat } from '@/organisms/twoColumnStatText'
import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionOne({ isMobile }: Readonly<Props>) {
  return (
    <TwoColumnStat
      type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
      isMobile={isMobile}
      title={LANG.section1.title}
      titleNumber={LANG.section1.titleNumber}
      largeChildren={
        <>
          {LANG.section1.bodyTitle && (
            <TextContent
              bodyTitle={LANG.section1.bodyTitle}
              bodyTitleClassName="text-m-h1 font-m-h1 lg:!text-h1 lg:!font-h1 lg:max-w-[441px] lg:mr-5"
              paragraph1Content={LANG.section1.paragraph1Content}
              paragraph2Content={LANG.section1.paragraph2Content}
            />
          )}
        </>
      }
      largeContentWrapperClassName="lg:col-span-5"
      smallChildren={
        <>
          {LANG.section1?.image?.[0] && (
            <div
              className={cn(
                'bg-accents-cyan relative',
                `w-full h-auto aspect-[0.77] lg:aspect-[100/77] lg:mt-5 lg:ml-5`,
              )}
            >
              <Image
                src={isMobile ? LANG.section1.image[0].srcMobile : LANG.section1.image[0].src}
                alt={LANG.section1.image[0].alt}
                className="object-scale-down"
                priority
                fill
              />
            </div>
          )}
        </>
      }
      smallContentWrapperClassName="lg:col-span-7 mb-[46px] lg:mb-5"
      noMarginBottom
    />
  )
}
