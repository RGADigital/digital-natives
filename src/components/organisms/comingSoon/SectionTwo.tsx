import { Title } from '@mantine/core'

import SectionTemplate from '@/templates/Section'

interface Props {
  isMobile?: boolean
}

export default function SectionTwo({ isMobile }: Readonly<Props>) {
  console.log('isMobile', isMobile)
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
    >
      <div className="dn-section container mx-auto flex !h-full !w-full items-center justify-center lg:w-2/3">
        <Title order={1} className="text-m-h1 text-neutrals-cream lg:!text-h1 ">
          This means we have to evolve digital experiences to address their needs and expectations
        </Title>
      </div>
    </SectionTemplate>
  )
}
