import Image from 'next/image'
import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import SectionTemplate from '@/components/templates/Section'

export default function SectionTwo() {
  return (
    <SectionTemplate
      mode="light"
      microDetailText="02/03"
      scrollText="Keep scrolling"
      isFullScreen
      showScrollIcon
      showMicroDetail
    >
      <div className="dp-section grid grid-cols-12">
        <div className="dp-section__left col-span-12 lg:col-span-7">
          <Title order={1} className="text-m-h1 text-black lg:!text-h1">
            This means we have to evolve digital experiences to address their needs and expectations.
          </Title>
        </div>
        <div className="col-span-12 lg:col-span-1"></div>
        <div
          className={cn('dp-section__right', 'col-span-12 lg:col-span-4', 'flex lg:justify-end', 'mt-[37px] lg:mt-0')}
        >
          <div className="relative aspect-square size-full lg:w-[438px]">
            <Image
              alt="holding gadget"
              src="/assets/coming-soon/coming-soon__section-2.jpg"
              fill
              className="rounded-sm object-cover"
            />
          </div>
        </div>
      </div>
    </SectionTemplate>
  )
}
