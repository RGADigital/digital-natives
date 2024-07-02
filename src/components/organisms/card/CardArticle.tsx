import Image from 'next/image'
import { Text, Title } from '@mantine/core'

import useViewport from '@/hooks/useViewport'

import cn from '@/utils/cn'

import { Button } from '@/components/atoms/button'

interface ICardArticle {
  content?: string[]
  contentType?: 'ul' | 'ol' | 'p'
  downloadLink?: string
  subtitle?: string
  image?: string
  imageClassName?: string
  imagePosition?: 'top' | 'bottom' | 'center'
  title?: string
  children?: React.ReactNode
}
export default function CardArticle({
  content,
  contentType,
  downloadLink,
  subtitle,
  title,
  image,
  children,
  imageClassName,
}: Readonly<ICardArticle>) {
  const { isMobile } = useViewport({})
  const contentBody =
    Array.isArray(content) &&
    content?.length > 0 &&
    content?.map(p => (
      <Text
        component={contentType === 'p' ? 'p' : 'li'}
        className={cn('text-m-body lg:text-body font-m-body lg:font-body', {})}
        key={p}
      >
        {p}
      </Text>
    ))
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-5">
      <div
        className={cn('lg:col-span-5', 'flex flex-col', 'lg:sticky lg:top-[100px] lg:h-[calc(100vh_-_100px)] gap-6')}
      >
        {/* START: image */}
        {image && (
          <div
            className={cn(
              'dn-card-article__image',
              'relative',

              {
                'aspect-[10/7]': isMobile,
                'aspect-[18/10]': !isMobile,
              },
              'bg-grey-300',
              imageClassName,
            )}
          >
            <Image
              src={image}
              loading="lazy"
              alt={`Image for ${title}`}
              className={cn('object-cover object-top', imageClassName)}
              fill
            />
          </div>
        )}

        {/* END: image */}
        <div className="hidden lg:col-span-12 lg:grid">
          <a href={downloadLink} download={title}>
            <Button type="primary">Download PDF</Button>
          </a>
        </div>
      </div>
      {/* START: title */}
      <div className={cn('flex flex-col', { 'lg:col-span-5': !children, 'lg:col-span-7': children }, 'lg:mt-2')}>
        <Text
          component="p"
          className={cn(
            'dn-card-article__subtitle',
            'font-m-eyebrow lg:font-eyebrow text-m-eyebrow lg:text-eyebrow',
            'mt-6 mb-5 lg:mb-1 lg:mt-0',
          )}
        >
          {subtitle}
        </Text>
        <Title
          order={3}
          className={cn(
            'dn-card-article__title',
            'text-m-h3 font-m-h3 lg:text-subheading lg:font-subheading',
            'mb-5 lg:mb-6',
          )}
        >
          {title}
        </Title>
        {/* END: title */}
        <div
          className={cn(
            'dn-card-artile__separator',
            {
              'border border-neutrals-beige ': isMobile,
            },
            'lg:-ml-5 lg:-mr-[25px]',
          )}
        />
        {/* START: content */}
        <div
          className={cn('dn-card-article__content', 'flex flex-col gap-5', 'lg:pr-[14%] py-5 lg:py-0', 'text-black')}
        >
          {contentType === 'ul' && <ul className="list-outside list-disc lg:px-5">{contentBody}</ul>}
          {contentType === 'ol' && <ol className="list-outside list-decimal lg:px-5">{contentBody}</ol>}
          {contentType === 'p' && contentBody}

          {/* START: additional children */}
          <div className="col-span-12 grid">{children}</div>
          {/* END: additional children */}
        </div>
      </div>
      {/* END: content */}
    </div>
  )
}
