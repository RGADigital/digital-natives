import React from 'react'
import Image from 'next/image'
import { Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import useViewport from '@/hooks/useViewport'

import cn from '@/utils/cn'

import { Plus as PlusIcon } from '@/atoms/index'

import { ModalArticle } from '../modal'

export type IContentType = 'ul' | 'ol' | 'p'
interface ICardArticlePreview {
  customImage?: React.ReactNode
  contentType?: IContentType
  downloadLink?: string
  image?: string
  imageClassName?: string
  imageFitClassName?: string
  modalChildren?: React.ReactNode
  modalImage?: string
  modalImageClassName?: string
  titleClassName?: string
  title?: string
  subtitle?: string
  content?: string[]
}

export default function CardArticlePreview({
  customImage,
  contentType = 'p',
  downloadLink,
  image,
  imageClassName,
  imageFitClassName,
  modalChildren,
  modalImage,
  modalImageClassName,
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
          'lg:mb-[22px] ',
          'hover:scale-105 transition duration-200 ease-in',
          'border border-black ',
        )}
        onClick={openModal}
        role="button"
      >
        {/* START: image */}
        {image && (
          <div
            className={cn('dn-card-article-preview__image', 'relative', 'bg-grey-300', 'w-full h-auto', imageClassName)}
          >
            <Image
              src={image}
              loading="lazy"
              alt={`Image for ${title}`}
              fill
              className={cn('object-cover object-top', imageFitClassName)}
            />
          </div>
        )}
        {customImage}
        {/* END: image */}
        {/* START: title */}
        <div
          className={cn(
            'flex flex-col lg:flex-row lg:justify-between lg:items-end gap-1 lg:gap-2.5',
            'pt-8 lg:pt-2.5',
            'pb-2 lg:pb-[13px]',
            'pl-2 lg:pl-2.5 pr-[17px]',
            'lg:border-t lg:border-t-black',
          )}
        >
          <div className={cn('flex flex-col ')}>
            <Text
              component="p"
              className={cn(
                'dn-card-article-preview__subtitle',
                'font-m-eyebrow lg:font-eyebrow text-m-eyebrow lg:text-eyebrow',
                'mb-1',
              )}
            >
              {subtitle}
            </Text>
            <Title
              order={3}
              className={cn(
                'dn-card-article-preview__title',
                'text-m-h3 font-m-h3 lg:text-subheading lg:font-subheading',
                titleClassName,
              )}
            >
              {title}
            </Title>
            {/* END: title */}
          </div>
          <PlusIcon width={isMobile ? 19.5 : 32} height={isMobile ? 19.5 : 32} />
        </div>
      </div>
      <ModalArticle
        modalChildren={modalChildren}
        closeModal={closeModal}
        downloadLink={downloadLink}
        contentType={contentType}
        title={title}
        content={content}
        subtitle={subtitle}
        image={modalImage ?? image}
        imageClassName={modalImageClassName}
        isModalOpen={isModalOpen}
      />
    </>
  )
}
