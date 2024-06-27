import { Title } from '@mantine/core'

import type { TwoColumnStatTextProps } from './TwoColumnStatText.type'

export default function TitleContent({
  title,
  titleNumber,
}: Readonly<{ title: TwoColumnStatTextProps['title']; titleNumber: TwoColumnStatTextProps['titleNumber'] }>) {
  return (
    <>
      <div className="order-2 col-span-12 lg:order-1 lg:col-span-10">
        <Title
          order={2}
          className="font-m-h1 lg:font-h2 text-m-h1 text-black lg:border-b  lg:border-t-0 lg:border-b-neutrals-cool-gray-0 lg:py-[25px] lg:pl-5 lg:!text-h2"
        >
          {title}
        </Title>
      </div>
      <div className="order-1 col-span-12 lg:order-2 lg:col-span-2 lg:text-right">
        <Title
          order={2}
          className="font-m-h1 lg:font-h2 text-m-h1 text-black  lg:border-b lg:border-t-0 lg:border-b-neutrals-cool-gray-0 lg:py-[25px] lg:pl-5 lg:!text-h2"
        >
          {titleNumber}
        </Title>
      </div>
    </>
  )
}
