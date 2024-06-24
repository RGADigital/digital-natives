import { Modal } from '@mantine/core'

import useViewport from '@/hooks/useViewport'

import cn from '@/utils/cn'

import { Close as CloseIcon } from '@/atoms/index'
import CardArticle from '@/organisms/card/CardArticle'

interface IModalArticle {
  isModalOpen?: boolean
  image?: string
  imageClassName?: string
  title?: string
  subtitle?: string
  content?: string[]
  closeModal: () => void
}
export default function ModalArticle({
  isModalOpen = false,
  imageClassName,
  closeModal,
  title,
  subtitle,
  image,
  content,
}: Readonly<IModalArticle>) {
  const { isMobile } = useViewport({})
  return (
    <Modal.Root
      opened={isModalOpen}
      onClose={closeModal}
      className={cn('dn-modal-article', {
        'dn-modal-article--mobile': isMobile,
      })}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Body
          className={cn(
            'dn-card-article',
            'bg-white',
            'h-screen lg:max-h-[calc(100vh_-_110px)]',
            'flex flex-col',
            '!pl-[10.6px] lg:!pl-5 !pr-2.5 lg:!pr-[25px]',
          )}
        >
          {/* START: close modal */}
          <div className={cn('flex flex-row-reverse', 'pt-5 pb-6 lg:pb-11')}>
            <button className="size-fit bg-transparent text-black transition duration-200 ease-in" onClick={closeModal}>
              <CloseIcon
                width={isMobile ? 21.54 : 24}
                height={isMobile ? 21.27 : 24}
                className="hover:fill-black hover:text-white "
              />
            </button>
          </div>
          {/* END: close modal */}
          <CardArticle
            image={image}
            title={title}
            subtitle={subtitle}
            content={content}
            imageClassName={imageClassName}
          />
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}
