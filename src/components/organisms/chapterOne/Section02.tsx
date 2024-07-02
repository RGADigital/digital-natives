import cn from '@/utils/cn'

import { TwoColumnStat } from '@/organisms/articleContent'
import { CardArticlePreview, type IContentType } from '@/organisms/card'
import { type ITwoColumnStatPosition, TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import { LANG } from './Body.constant'
import Section02Finding04 from './Section02Finding04'

interface Props {
  isMobile?: boolean
}

export default function SectionTwo({ isMobile }: Readonly<Props>) {
  return (
    <div className="flex flex-col">
      <TwoColumnStat
        type={TWO_COLUMN_POSITION.textLeft as ITwoColumnStatPosition}
        isMobile={isMobile}
        title={LANG.section2.title}
        titleNumber={LANG.section2.titleNumber}
        largeChildren={
          LANG.section2?.cards?.[0]?.preview && (
            <div className="lg:mr-10 lg:mt-5">
              <CardArticlePreview
                contentType={LANG.section2.cards[0].modal.contentType as IContentType}
                title={LANG.section2.cards[0].preview.title}
                subtitle={LANG.section2.cards[0].preview.subtitle}
                image={isMobile ? LANG.section2.cards[0].preview.imageMobile : LANG.section2.cards[0].preview.image}
                modalImage={isMobile ? LANG.section2.cards[0].modal.imageMobile : LANG.section2.cards[0].modal.image}
                downloadLink={LANG.section2.cards[0].modal.downloadLink}
                content={LANG.section2.cards[0].modal.content}
                imageClassName="w-full h-auto aspect-[10/7]"
                imageFitClassName="object-scale-down object-center"
              />
            </div>
          )
        }
        smallChildren={
          LANG.section2?.cards?.[1]?.preview && (
            <div className="lg:ml-5 lg:mt-5">
              <CardArticlePreview
                contentType={LANG.section2.cards[1].modal.contentType as IContentType}
                title={LANG.section2.cards[1].preview.title}
                subtitle={LANG.section2.cards[1].preview.subtitle}
                image={isMobile ? LANG.section2.cards[1].preview.imageMobile : LANG.section2.cards[1].preview.image}
                downloadLink={LANG.section2.cards[1].modal.downloadLink}
                content={LANG.section2.cards[1].modal.content}
                imageClassName="w-full h-auto aspect-[10/7] lg:aspect-[10/8]"
                modalImageClassName="bg-white"
                modalImage={LANG.section2.cards[1].modal.image}
                imageFitClassName="object-fit"
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
          LANG.section2?.cards?.[2]?.preview && (
            <div className="lg:mx-5 lg:mt-5">
              <CardArticlePreview
                contentType={LANG.section2.cards[2].modal.contentType as IContentType}
                title={LANG.section2.cards[2].preview.title}
                subtitle={LANG.section2.cards[2].preview.subtitle}
                image={isMobile ? LANG.section2.cards[2].preview.imageMobile : LANG.section2.cards[2].preview.image}
                modalImage={isMobile ? LANG.section2.cards[2].modal.imageMobile : LANG.section2.cards[2].modal.image}
                downloadLink={LANG.section2.cards[2].modal.downloadLink}
                content={LANG.section2.cards[2].modal.content}
                imageClassName="w-full h-auto aspect-[10/7] lg:aspect-[17/10] bg-white"
                imageFitClassName="object-fit object-center"
              />
            </div>
          )
        }
        largeChildren={
          LANG.section2?.cards?.[3]?.preview && (
            <div className="lg:mt-5">
              <CardArticlePreview
                modalChildren={<Section02Finding04 isMobile={isMobile} />}
                contentType={LANG.section2.cards[3].modal.contentType as IContentType}
                title={LANG.section2.cards[3].preview.title}
                subtitle={LANG.section2.cards[3].preview.subtitle}
                image={isMobile ? LANG.section2.cards[3].preview.imageMobile : LANG.section2.cards[3].preview.image}
                content={LANG.section2.cards[3].modal.content}
                imageClassName="w-full h-auto aspect-[10/7] lg:aspect-[28.9/10]"
                imageFitClassName="object-cover object-center object-bottom"
                modalImageClassName="object-scale-down"
                modalImage={isMobile ? LANG.section2.cards[3].modal.imageMobile : LANG.section2.cards[3].modal.image}
                downloadLink={LANG.section2.cards[3].modal.downloadLink}
              />
            </div>
          )
        }
        noMarginTop
      />
    </div>
  )
}
