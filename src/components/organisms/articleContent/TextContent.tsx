import { Title } from '@mantine/core'

import cn from '@/utils/cn'

export default function TextContent({
  bodyTitle,
  bodyTitleClassName,
  titleWrapperClassName,
  paragraph1Content,
  paragraph1ContentClassName,
  paragraph2Content,
  paragraph2ContentClassName,
}: Readonly<{
  bodyTitle?: React.ReactNode
  bodyTitleClassName?: string
  noMarginTop?: boolean
  paragraph1Content?: React.ReactNode[]
  paragraph1ContentClassName?: string
  paragraph2Content?: React.ReactNode[]
  paragraph2ContentClassName?: string
  titleWrapperClassName?: string
}>) {
  return (
    <>
      {bodyTitle && (
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
      )}
      <div
        className={cn(
          'dn-two-column-template__text-content__content',
          'grid w-full grid-cols-12 lg:pr-5 ',
          'font-m-body lg:font-body text-m-body lg:text-body',
          { hidden: !paragraph1Content && !paragraph2Content },
        )}
      >
        <div className={cn('col-span-12 lg:col-span-6 lg:mb-5', paragraph1ContentClassName)}>
          {paragraph1Content &&
            paragraph1Content?.length > 0 &&
            paragraph1Content.map((content, idx) => (
              <p key={`paragraph-1-${idx}`} className="mt-5 first:mt-0">
                {content}
              </p>
            ))}
        </div>
        <div className={cn('col-span-12 lg:col-span-6 lg:pl-5', paragraph2ContentClassName)}>
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
