import Image from 'next/image'
import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import SectionTemplate from '@/components/templates/Section'

export default function SectionOne() {
  return (
    <SectionTemplate
      mode="dark"
      scrollText="Scroll down"
      microDetailText="01/03"
      isFullScreen
      showScrollIcon
      showMicroDetail
    >
      <div className="dp-section grid grid-cols-12">
        <div className="dp-section__left col-span-12 lg:col-span-7">
          <Title order={1} className="text-m-h1 text-neutrals-cream delay-200 lg:!text-h1">
            Australia’s largest demographic is the one that’s never known a world without the internet.
          </Title>
        </div>
        <div className="col-span-12 lg:col-span-1"></div>
        <div
          className={cn(
            'dp-section__right',

            'col-span-12 lg:col-span-4',
            'flex lg:justify-end ',
            'mt-[37px] lg:mt-0',
          )}
        >
          <div className="relative aspect-square size-full rounded-sm bg-gray-800 lg:w-[438px]">
            <Image
              alt="holding gadget"
              src="/assets/coming-soon/coming-soon__section-1.jpg"
              fill
              className="rounded-sm object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </SectionTemplate>
  )
}
