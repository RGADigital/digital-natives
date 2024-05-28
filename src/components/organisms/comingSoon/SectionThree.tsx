import { Title } from '@mantine/core'

import SectionTemplate from '@/components/templates/Section'

interface Props {
  isMobile?: boolean
}
export default function SectionThree({ isMobile }: Readonly<Props>) {
  return (
    <SectionTemplate
      mode="light"
      className="pt-[95px] lg:pt-[132px]"
      microDetailText="03/03"
      showMicroDetail
      microDetailPosition="top-left"
    >
      <div className="dp-section grid grid-cols-12">
        <div className="dp-section__left lg:!max-w-2/3 col-span-12 lg:col-span-8">
          <Title order={1} className="text-m-h1 text-black lg:!text-h1">
            New research has revealed that {!isMobile && <br />}when we create experiences{!isMobile && <br />}for Gen
            One – we improve{!isMobile && <br />}
            technology for everyone.
          </Title>
        </div>
      </div>
    </SectionTemplate>
  )
}
