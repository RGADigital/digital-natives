import Image from 'next/image'
import { Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import useViewport from '@/hooks/useViewport'

import cn from '@/utils/cn'

import { Plus as PlusIcon } from '@/atoms/index'

import { ModalArticle } from '../modal'

interface ICardArticlePreview {
  customImage?: React.ReactNode
  image?: string
  imageClassName?: string
  titleClassName?: string
  title?: string
  subtitle?: string
  content?: string[]
}

export default function CardArticlePreview({
  customImage,
  image,
  imageClassName,
  subtitle,
  title,
  titleClassName,
  content,
}: Readonly<ICardArticlePreview>) {
  const { isMobile } = useViewport({})

  const [isModalOpen, { open: openModal, close: closeModal }] = useDisclosure(false)

  return (
    <>
      <div
        className={cn(
          'dn-card-article-preview',
          'bg-white',

          'flex flex-col',
        )}
      >
        {/* START: image */}
        {image && (
          <div
            className={cn('dn-card-article-preview__image', 'relative', 'bg-grey-300', 'w-full h-auto', imageClassName)}
          >
            <Image src={image} loading="lazy" alt={`Image for ${title}`} fill className="object-cover object-top" />
          </div>
        )}
        {customImage}
        {/* END: image */}
        {/* START: title */}
        <div className="lg:max-w-1/2 flex flex-col">
          <Text
            component="p"
            className={cn(
              'dn-card-article-preview__subtitle',
              'font-m-eyebrow lg:font-eyebrow text-m-eyebrow lg:text-eyebrow',
              'mt-6 mb-1',
            )}
          >
            {subtitle}
          </Text>
          <Title
            order={3}
            className={cn(
              'dn-card-article-preview__title',
              'text-m-h3 font-m-h3 lg:text-subheading lg:font-subheading',
              'mb-5 lg:mb-6',
              'flex gap-4 flex-wrap items-end',
              titleClassName,
            )}
          >
            {title}
            {/* START: open modal */}
            <button className="size-fit bg-transparent text-black transition duration-200 ease-in" onClick={openModal}>
              <PlusIcon
                width={isMobile ? 19.5 : 21.54}
                height={isMobile ? 19.5 : 21.27}
                className="hover:fill-black hover:text-white "
              />
            </button>
            {/* END: open modal */}
          </Title>
          {/* END: title */}
        </div>
      </div>
      <ModalArticle
        closeModal={closeModal}
        title={title}
        content={content}
        subtitle={subtitle}
        image={image}
        isModalOpen={isModalOpen}
      />
    </>
  )
}
