import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import { type ITwoColumnStat, TWO_COLUMN_STAT, TwoColumnStatTemplate } from '@/templates/twoColumnStat'

interface Props {
  type: ITwoColumnStat
  isMobile?: boolean

  isInView?: boolean
  id: string
  title: string
  titleNumber: string
  bodyTitle: string
  paragraph1Content: string[]
  paragraph2Content: string[]
  sectionRef?: React.RefObject<HTMLDivElement>
  statContent?: {
    src: string
    alt: string
    className?: string
  }[]
}

function TitleContent({ title, titleNumber }: Readonly<{ title: Props['title']; titleNumber: Props['titleNumber'] }>) {
  return (
    <>
      <div className="col-span-10">
        <Title
          order={2}
          className="text-m-h2 lg:!text-h2 border-t-2 py-[25px] text-black lg:border-b-2 lg:border-t-0 lg:pl-5"
        >
          {title}
        </Title>
      </div>
      <div className="col-span-2 text-right">
        <Title
          order={2}
          className="text-m-h2 lg:!text-h2 border-t-2 py-[25px] pl-5 text-black lg:border-b-2 lg:border-t-0"
        >
          {titleNumber}
        </Title>
      </div>
    </>
  )
}

function TextContent({
  bodyTitle,
  paragraph1Content,
  paragraph2Content,
}: Readonly<{
  bodyTitle: Props['bodyTitle']
  paragraph1Content: Props['paragraph1Content']
  paragraph2Content: Props['paragraph2Content']
}>) {
  return (
    <>
      <div className={cn('dn-two-column-stat__text-content__title', 'mt-6 grid w-full grid-cols-12')}>
        <div className="col-span-12 lg:col-span-5">
          <Title order={3} className="mb-6 text-black">
            {bodyTitle}
          </Title>
        </div>
      </div>
      <div className={cn('dn-two-column-stat__text-content__content', 'grid w-full grid-cols-12 lg:pr-4 ')}>
        <div className="col-span-12 lg:col-span-6 lg:mb-5">
          {paragraph1Content?.length > 0 &&
            paragraph1Content.map((content, idx) => (
              <p key={`paragraph-1-${idx}`} className="mt-5 first:mt-0">
                {content}
              </p>
            ))}
        </div>
        <div className="col-span-12 lg:col-span-6 lg:pl-4">
          {paragraph2Content?.length > 0 &&
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

function StatContent({ statContent, type }: Readonly<{ statContent: Props['statContent']; type: Props['type'] }>) {
  return (
    <>
      {statContent?.map(({ src, alt, className }) => (
        <div
          key={alt}
          className={cn('w-full', 'lg:border-b-[1px] lg:border-b-neutrals-cool-gray-5 lg:last:border-b-0', {
            'lg:pl-5': type === TWO_COLUMN_STAT.textLeft,
            'lg:px-5': type === TWO_COLUMN_STAT.textRight,
            'lg:py-5': true,
          })}
        >
          <img src={src} alt={alt} className={cn(className)} />
        </div>
      ))}
    </>
  )
}

export default function TwoColumnStat({
  type,
  id,
  isMobile,
  title,
  isInView,
  titleNumber,
  bodyTitle,
  paragraph1Content,
  paragraph2Content,
  statContent,
  sectionRef,
}: Readonly<Props>) {
  return (
    <TwoColumnStatTemplate
      id={id}
      isInView={isInView}
      columnRef={sectionRef}
      isMobile={isMobile}
      type={type}
      titleContent={<TitleContent title={title} titleNumber={titleNumber} />}
      statContent={<StatContent statContent={statContent} type={type} />}
      textContent={
        <TextContent
          bodyTitle={bodyTitle}
          paragraph1Content={paragraph1Content}
          paragraph2Content={paragraph2Content}
        />
      }
    />
  )
}
