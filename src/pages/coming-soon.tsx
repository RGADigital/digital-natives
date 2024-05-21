import dynamic from 'next/dynamic'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import cn from '@/utils/cn'

import { Form as RegisterForm } from '@/components/organisms/form/RegisterForm'
import SectionOne from '@/organisms/comingSoon/SectionOne'
import SectionThree from '@/organisms/comingSoon/SectionThree'
import SectionTwo from '@/organisms/comingSoon/SectionTwo'

const Header = dynamic(() => import('@/organisms/header/Header'), { ssr: false })

export default function ComingSoon() {
  const [showRegisterModal, { open, close }] = useDisclosure(false)
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })

  return (
    <div className={cn('px-0 mx-0', 'w-screen min-h-screen', 'flex flex-col dn-scroll-container')}>
      <Header mode={isIntersecting ? 'dark' : 'light'} handleRegister={open} />
      <div ref={ref}>
        <SectionOne />
      </div>

      <SectionTwo />
      <SectionThree />
      <Modal opened={showRegisterModal} withCloseButton={false} onClose={close} size="auto">
        <RegisterForm />
      </Modal>
    </div>
  )
}
