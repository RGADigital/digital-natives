import Image from 'next/image'
import { Text, Title } from '@mantine/core'

import cn from '@/utils/cn'

import { HorizontalArrow, HorizontalArrowMobile } from '@/atoms/icon'

import { CONTENT } from './NextSection.constant'

interface Props {
  isMobile?: boolean
}
export default function NextSection({ isMobile = false }: Readonly<Props>) {
  return (
    <div
      className={cn('dn-article__next-section', 'group transition-all duration-200 ease-in-out ', {
        'border-t-[0.5px] border-t-black': isMobile,
        '-mx-5 px-5 pt-[9.2px]': isMobile,
        relative: !isMobile,
      })}
    >
      <div
        className="relative aspect-[51/22] h-auto !overflow-clip bg-black lg:my-5 lg:ml-5 lg:aspect-[1028/448]"
        role="button"
      >
        <Image
          fill
          priority
          alt="go to next section"
          src={isMobile ? CONTENT.backgroundMobile : CONTENT.background}
          className="object-cover object-center group-hover:scale-[1.2] group-hover:opacity-80 lg:object-scale-down"
        />
      </div>
      <div
        className={cn(
          'dn-article__next-section__content',
          'flex flex-col gap-1 lg:gap-0',
          'text-black lg:!text-white',
          'group-hover:scale-105',
          'pt-[4.9px] lg:pt-0',
          {
            'absolute bottom-0 right-4': !isMobile,
          },
        )}
      >
        <Text component="p" className="font-eyebrow text-eyebrow">
          {CONTENT.nextSubtitle}
        </Text>
        <Title
          order={2}
          className={cn('flex flex-col lg:flex-row gap-1 lg:gap-7', 'text-m-h2 font-m-h2 lg:text-h2 lg:font-h2')}
        >
          {CONTENT.nextTitle}
          {isMobile ? <HorizontalArrowMobile /> : <HorizontalArrow />}
        </Title>
      </div>
    </div>
  )
}
