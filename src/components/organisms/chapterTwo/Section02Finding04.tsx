import Image from 'next/image'
import { useViewportSize } from '@mantine/hooks'

import cn from '@/utils/cn'

import { HorizontalArrowScroll } from '@/atoms/index'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

// TODO[pops]: extract scroll image component

export default function Section02Finding04({ isMobile }: Readonly<Props>) {
  const { width: viewportWidth } = useViewportSize()

  const image2Scroll = isMobile && viewportWidth < 580
  const image3Scroll = isMobile && viewportWidth < 626
  const image4Scroll = isMobile && viewportWidth < 625

  return (
    <div className={cn('flex flex-col')}>
      {/* START: col 1 */}
      <div
        className={cn(
          'flex flex-col lg:flex-row lg:h-fit lg:gap-5',
          'lg:p-5',
          'lg:border-t lg:border-t-black',
          'min-h-[583px] lg:min-h-[370px]',
        )}
      >
        <div className="relative aspect-[36/58] w-full lg:aspect-[58/10] lg:w-1/3">
          <Image
            className="object-right-center object-scale-down lg:object-cover"
            alt={`${LANG.section2.cards?.[3]?.modal?.alt1}`}
            src={`${LANG.section2.cards?.[3]?.modal?.image1}`}
            fill
            priority
          />
        </div>
        <div
          className={cn('w-full lg:w-2/3', 'pb-8', {
            '!overflow-x-scroll scrollbar-always-visible': image2Scroll,
          })}
        >
          <div className={cn('w-full relative aspect-[58/41] lg:aspect-[46/33]')}>
            <Image
              className="object-scale-down object-left-bottom lg:object-cover"
              alt={`${LANG.section2.cards?.[3]?.modal?.alt2}`}
              src={`${LANG.section2.cards?.[3]?.modal?.image2}`}
              fill
              priority
            />
          </div>
        </div>
      </div>
      <div className={cn('hidden', { 'flex justify-end mt-[19px]': image2Scroll })}>
        <HorizontalArrowScroll />
      </div>
      {/* END: col 1 */}
      {/* START: col 2 */}
      <div
        className={cn(
          'flex lg:flex-row lg:h-fit lg:gap-5',
          'pt-8 lg:p-5',
          'lg:border-t lg:border-t-black',
          'lg:min-h-[486px]',
          {
            '!overflow-x-scroll pb-8 scrollbar-always-visible': image3Scroll,
          },
        )}
      >
        <div
          className={cn('w-full relative aspect-[60/42] lg:aspect-[68/48]', {
            'min-w-[580px]': isMobile,
          })}
        >
          <Image
            className="object-scale-down"
            alt={`${LANG.section2.cards?.[3]?.modal?.alt3}`}
            src={`${LANG.section2.cards?.[3]?.modal?.image3}`}
            fill
            priority
          />
        </div>
      </div>

      <div className={cn('hidden', { 'flex justify-end mt-[19px]': image3Scroll })}>
        <HorizontalArrowScroll />
      </div>
      {/* END: col 2 */}
      {/* START: col 3 */}
      <div
        className={cn(
          'flex lg:flex-row lg:h-fit lg:gap-5',
          'pt-8 lg:p-5',
          'lg:border-t lg:border-t-black',
          'lg:min-h-[500px]',
          {
            '!overflow-x-scroll !pb-8 scrollbar-always-visible': image4Scroll,
          },
        )}
      >
        <div
          className={cn('w-full relative aspect-[62/43] lg:aspect-[67/48] ', {
            'min-w-[626px]': isMobile,
          })}
        >
          <Image
            className="object-scale-down"
            alt={`${LANG.section2.cards?.[3]?.modal?.alt4}`}
            src={`${LANG.section2.cards?.[3]?.modal?.image4}`}
            fill
            priority
          />
        </div>
      </div>
      <div className={cn('hidden', { 'flex justify-end mt-[19px]': image4Scroll })}>
        <HorizontalArrowScroll />
      </div>
      {/* END: col 3 */}
    </div>
  )
}
