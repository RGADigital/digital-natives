import { Modal } from '@mantine/core'

import { Form as RegisterForm } from '@/organisms/form/RegisterForm'

interface Props {
  size?: string
  onClose: () => void
  showRegisterModal?: boolean
  withCloseButton?: boolean
}

export default function ModalRegister({
  showRegisterModal = false,
  withCloseButton,
  onClose,
  size = 'auto',
}: Readonly<Props>) {
  return (
    <Modal opened={showRegisterModal} withCloseButton={withCloseButton} onClose={onClose} size={size}>
      <RegisterForm />
    </Modal>
  )
}
