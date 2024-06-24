import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import type { TwoColumnStatTextProps } from './TwoColumnStatText.type'

export default function TextContent({
  bodyTitle,
  paragraph1Content,
  paragraph2Content,
}: Readonly<{
  bodyTitle: TwoColumnStatTextProps['bodyTitle']
  paragraph1Content: TwoColumnStatTextProps['paragraph1Content']
  paragraph2Content: TwoColumnStatTextProps['paragraph2Content']
}>) {
  return (
    <>
      <div className={cn('dn-two-column-stat__text-content__title', 'mt-6 lg:mt-5 grid w-full grid-cols-12')}>
        <div className="col-span-12">
          <Title order={3} className="lg:font-subheading mb-6 text-black lg:mb-5 lg:text-subheading">
            {bodyTitle}
          </Title>
        </div>
      </div>
      <div className={cn('dn-two-column-stat__text-content__content', 'grid w-full grid-cols-12 lg:pr-5 ')}>
        <div className="col-span-12 lg:col-span-6 lg:mb-5">
          {paragraph1Content &&
            paragraph1Content?.length > 0 &&
            paragraph1Content.map((content, idx) => (
              <p key={`paragraph-1-${idx}`} className="mt-5 first:mt-0">
                {content}
              </p>
            ))}
        </div>
        <div className="col-span-12 lg:col-span-6 lg:pl-5">
          {paragraph2Content &&
            paragraph2Content?.length > 0 &&
            paragraph2Content.map((content, idx) => (
              <p key={`paragraph-2-${idx}`} className="mt-5 first:mt-0">
                {content}
              </p>
            ))}
        </div>
      </div>
    </>
  )
}
