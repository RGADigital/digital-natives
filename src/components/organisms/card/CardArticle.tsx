import Image from 'next/image'
import { Text, Title } from '@mantine/core'

import useViewport from '@/hooks/useViewport'

import cn from '@/utils/cn'

interface ICardArticle {
  content?: string[]
  subtitle?: string
  image?: string
  imageClassName?: string
  imagePosition?: 'top' | 'bottom' | 'center'
  title?: string
  children?: React.ReactNode
}
export default function CardArticle({
  content,
  subtitle,
  title,
  image,
  children,
  imageClassName,
}: Readonly<ICardArticle>) {
  const { isMobile } = useViewport({})
  return (
    <>
      {/* START: image */}
      {image && (
        <div
          className={cn(
            'dn-card-article__image',
            'relative',
            {
              'aspect-[10/7]': isMobile,
              'aspect-[10/5.3]': !isMobile,
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
      {/* START: title */}
      <Text
        component="p"
        className={cn(
          'dn-card-article__subtitle',
          'font-m-eyebrow lg:font-eyebrow text-m-eyebrow lg:text-eyebrow',
          'mt-6 mb-5 lg:mb-1',
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
          'border border-neutrals-beige lg:border-black',
          'lg:-ml-5 lg:-mr-[25px]',
        )}
      />
      {/* START: content */}
      <div className={cn('dn-card-article__content', 'flex flex-col gap-5', 'lg:pr-[14%] py-5', 'text-black')}>
        {Array.isArray(content) &&
          content?.length > 0 &&
          content?.map(p => (
            <Text component="p" className={cn('text-m-body lg:text-body font-m-body lg:font-body')} key={p}>
              {p}
            </Text>
          ))}
      </div>
      {/* END: content */}
      {/* START: additional children */}
      {children}
      {/* END: additional children */}
    </>
  )
}
