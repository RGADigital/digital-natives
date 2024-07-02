import { Modal } from '@mantine/core'

import cn from '@/utils/cn'

import { Form as RegisterForm } from '@/organisms/form/RegisterForm'

interface Props {
  size?: string
  isMobile?: boolean
  onClose: () => void
  showRegisterModal?: boolean
  withCloseButton?: boolean
}

export default function ModalRegister({
  showRegisterModal = false,
  withCloseButton,
  onClose,
  size = 'auto',
  isMobile,
}: Readonly<Props>) {
  return (
    <Modal
      opened={showRegisterModal}
      withCloseButton={withCloseButton}
      onClose={onClose}
      size={size}
      className={cn('dn-modal-register', { 'dn-modal-register--mobile': isMobile })}
    >
      <RegisterForm />
    </Modal>
  )
}
