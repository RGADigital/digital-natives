import Image from 'next/image'
import { Text, Title } from '@mantine/core'

import cn from '@/utils/cn'

import ScrollDownIcon from '@/components/atoms/icon/ScrollDown'
import MicroDetail from '@/components/atoms/microDetail/MicroDetail'

export default function SectionTwo() {
  return (
    <section
      className={cn(
        'dn-section-wrapper',
        'flex flex-col justify-between',
        '!min-h-screen bg-white',
        'pt-[95px] lg:pt-[132px] pb-[41px] lg:pb-4 ',
      )}
    >
      <div className="container mx-auto grow">
        <MicroDetail text="02/03" className="text-black" />
        <div className="dp-section mb-[17px] grid grid-cols-12 lg:mb-7">
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
      </div>

      <div
        className={cn(
          'dp-section__footer',
          'container mx-auto',
          'flex flex-col items-center lg:items-start gap-[29px] lg:gap-[27px]',

          'animate-bounce duration-1000',
        )}
      >
        <Text component="p" className="text-m-disclaimer uppercase text-black lg:text-disclaimer">
          Keep Scrolling
        </Text>
        <ScrollDownIcon />
      </div>
    </section>
  )
}
