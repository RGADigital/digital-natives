import dynamic from 'next/dynamic'
import { useDisclosure } from '@mantine/hooks'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import cn from '@/utils/cn'

import { Meta } from '@/globals/index'
import SectionFooter from '@/organisms/comingSoon/SectionFooter'
import SectionOne from '@/organisms/comingSoon/SectionOne'
import SectionRegister from '@/organisms/comingSoon/SectionRegister'
import SectionThree from '@/organisms/comingSoon/SectionThree'
import SectionTwo from '@/organisms/comingSoon/SectionTwo'
import ModalRegister from '@/organisms/modalRegister/ModalRegister'

const Header = dynamic(() => import('@/organisms/header/Header'), { ssr: false })

export default function ComingSoon() {
  const [showRegisterModal, { open, close }] = useDisclosure(false)
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })

  return (
    <div className={cn('px-0 mx-0', 'w-screen min-h-screen', 'flex flex-col dn-scroll-container')}>
      <Meta />
      <Header mode={isIntersecting ? 'dark' : 'light'} handleRegister={open} />
      <div ref={ref}>
        <SectionOne />
      </div>

      <SectionTwo />
      <SectionThree />

      <SectionRegister />
      <SectionFooter />
      <ModalRegister showRegisterModal={showRegisterModal} withCloseButton={false} onClose={close} size="auto" />
    </div>
  )
}
