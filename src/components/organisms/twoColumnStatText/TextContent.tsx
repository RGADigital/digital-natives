import { Title } from '@mantine/core'

import cn from '@/utils/cn'

export default function TextContent({
  bodyTitle,
  bodyTitleClassName,
  titleWrapperClassName,
  paragraph1Content,
  paragraph2Content,
}: Readonly<{
  bodyTitle?: React.ReactNode
  bodyTitleClassName?: string
  noMarginTop?: boolean
  paragraph1Content?: React.ReactNode[]
  paragraph2Content?: React.ReactNode[]
  titleWrapperClassName?: string
}>) {
  return (
    <>
      <div
        className={cn(
          'dn-two-column-template__text-content__title',
          ' grid w-full grid-cols-12',
          'mt-[110px] lg:mt-5',
          titleWrapperClassName,
        )}
      >
        <div className="col-span-12">
          <Title
            order={3}
            className={cn(
              'font-m-h3 lg:font-subheading mb-[46px] text-m-h3 text-black lg:mb-5 lg:text-subheading',
              bodyTitleClassName,
            )}
          >
            {bodyTitle}
          </Title>
        </div>
      </div>
      <div
        className={cn(
          'dn-two-column-template__text-content__content',
          'grid w-full grid-cols-12 lg:pr-5 ',
          'font-body text-body',
          { hidden: !paragraph1Content && !paragraph2Content },
        )}
      >
        <div className="col-span-12 lg:col-span-6 lg:mb-5 ">
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
