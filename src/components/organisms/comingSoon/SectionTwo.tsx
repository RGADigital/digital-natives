import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import SectionTemplate from '@/templates/Section'

interface Props {
  isMobile?: boolean
}

export default function SectionTwo({ isMobile }: Readonly<Props>) {
  return (
    <SectionTemplate
      mode="dark"
      className="!h-screen !w-screen"
      microDetailText="02/03"
      microDetailPosition="bottom-right"
      scrollText="Keep scrolling"
      isFullScreen
      showScrollIcon
      showMicroDetail
      microDetailBoxClassName="bg-accents-yellow "
      contentClassName={cn('relative w-screen h-screen', isMobile ? '!pr-0 pl-4' : '')}
    >
      <div className="dn-section container mx-auto flex !h-full items-center justify-center">
        <Title order={1} className="text-m-h1 text-neutrals-cream lg:w-1/2 lg:!text-h1 ">
          This means we have to evolve digital experiences to address their needs and expectations
        </Title>
      </div>
    </SectionTemplate>
  )
}
