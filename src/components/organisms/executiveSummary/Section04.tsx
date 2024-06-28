import cn from '@/utils/cn'

import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/components/templates/twoColumnTemplate'
import { CardArticlePreview } from '@/organisms/card'
import { TwoColumnStat } from '@/organisms/twoColumnStatText'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionFour({ isMobile }: Readonly<Props>) {
  return (
    <div className="flex flex-col">
      <TwoColumnStat
        type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
        isMobile={isMobile}
        title={LANG.section4.title}
        titleNumber={LANG.section4.titleNumber}
        largeChildren={
          LANG.section4?.cards?.[0]?.preview && (
            <div className="lg:mr-10 lg:mt-5">
              <CardArticlePreview
                title={LANG.section4.cards[0].preview.title}
                subtitle={LANG.section4.cards[0].preview.subtitle}
                image={isMobile ? LANG.section4.cards[0].preview.imageMobile : LANG.section4.cards[0].preview.image}
                modalImage={isMobile ? LANG.section4.cards[0].modal.imageMobile : LANG.section4.cards[0].modal.image}
                downloadLink={LANG.section4.cards[0].modal.downloadLink}
                content={LANG.section4.cards[0].modal.content}
                imageClassName="w-full h-auto aspect-[10/7]"
              />
            </div>
          )
        }
        smallChildren={
          LANG.section4?.cards?.[1]?.preview && (
            <div className="lg:ml-5 lg:mt-5">
              <CardArticlePreview
                title={LANG.section4.cards[1].preview.title}
                subtitle={LANG.section4.cards[1].preview.subtitle}
                image={isMobile ? LANG.section4.cards[1].preview.imageMobile : LANG.section4.cards[1].preview.image}
                downloadLink={LANG.section4.cards[1].modal.downloadLink}
                content={LANG.section4.cards[1].modal.content}
                imageClassName="w-full h-auto aspect-[10/7] md:aspect-[10/8]"
                modalImageClassName="object-scale-down bg-black"
                modalImage={LANG.section4.cards[1].modal.image}
              />
            </div>
          )
        }
        contentWrapperClassName={cn({
          'border-t border-neutrals-beige': isMobile,
          'mt-[30px] pt-[42px] gap-[42px]': isMobile,
        })}
        noMarginBottom
      />
      <TwoColumnStat
        type={TWO_COLUMN_POSITION.textRight as ITwoColumnStatPosition}
        isMobile={isMobile}
        smallChildren={
          LANG.section4?.cards?.[2]?.preview && (
            <div className="lg:mx-5 lg:mt-5">
              <CardArticlePreview
                title={LANG.section4.cards[2].preview.title}
                subtitle={LANG.section4.cards[2].preview.subtitle}
                image={isMobile ? LANG.section4.cards[2].preview.imageMobile : LANG.section4.cards[2].preview.image}
                modalImage={isMobile ? LANG.section4.cards[2].modal.imageMobile : LANG.section4.cards[2].modal.image}
                downloadLink={LANG.section4.cards[2].modal.downloadLink}
                content={LANG.section4.cards[2].modal.content}
                imageClassName="w-full h-auto aspect-[10/7] md:aspect-[34/32]"
              />
            </div>
          )
        }
        largeChildren={
          LANG.section4?.cards?.[3]?.preview && (
            <div className="lg:mt-5">
              <CardArticlePreview
                title={LANG.section4.cards[3].preview.title}
                subtitle={LANG.section4.cards[3].preview.subtitle}
                image={isMobile ? LANG.section4.cards[3].preview.imageMobile : LANG.section4.cards[3].preview.image}
                content={LANG.section4.cards[3].modal.content}
                imageClassName="w-full h-auto aspect-[10/7] md:aspect-[6.4/2.2]"
                modalImageClassName="object-scale-down bg-black"
                modalImage={isMobile ? LANG.section4.cards[3].modal.imageMobile : LANG.section4.cards[3].modal.image}
                downloadLink={LANG.section4.cards[3].modal.downloadLink}
              />
            </div>
          )
        }
        noMarginTop
      />
    </div>
  )
}
