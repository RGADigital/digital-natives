import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import { em } from '@mantine/core'
import { useDisclosure, useMediaQuery, useViewportSize } from '@mantine/hooks'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import cn from '@/utils/cn'
import { CONTAINER_SIZES } from '@/utils/theme/container'

import { SectionTwo } from '@/components/organisms'
import SectionOneTwo from '@/components/organisms/comingSoon/SectionOneTwo'
import SectionFooter from '@/organisms/comingSoon/SectionFooter'
import SectionRegister from '@/organisms/comingSoon/SectionRegister'
import SectionThree from '@/organisms/comingSoon/SectionThree'
import ModalRegister from '@/organisms/modalRegister/ModalRegister'

const Header = dynamic(() => import('@/organisms/header/Header'), { ssr: false })

export default function ComingSoon() {
  const { scrollYProgress } = useScroll()
  const { height: viewportHeight, width: viewportWidth } = useViewportSize()
  const vhToPx = (vh: number) => (vh / 100) * viewportHeight
  const vwToPx = (vw: number) => (vw / 100) * viewportWidth

  const [showRegisterModal, { open, close }] = useDisclosure(false)
  // change header to light when section 3 is intersecting
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.3,
  })

  const isMobile = useMediaQuery(`(max-width: ${em(CONTAINER_SIZES.lg)})`)

  const x = useTransform(scrollYProgress, [0.1, 0.8], [vwToPx(50) - 292, vwToPx(155)])
  const y = useTransform(scrollYProgress, [0.1, 0.8], [vhToPx(100) - 600, vhToPx(230)])

  console.log('<====== scrollYProgress', scrollYProgress)
  return (
    <div
      className={cn(
        'px-0 mx-0',
        '!w-screen !max-w-screen min-h-screen !h-full',
        'flex flex-col dn-scroll-container relative bg-black',
      )}
    >
      <Header mode={isIntersecting ? 'light' : 'dark'} handleRegister={open} />
      <motion.div
        className="dn-blue-box absolute h-[317px] w-[223px] bg-ford-blue text-black mix-blend-plus-lighter lg:!h-[292px] lg:!w-[743px]"
        style={{ x, y }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
      />
      {/* <motion.div
        className={cn(
          'dn-blue-box bg-ford-blue',
          'absolute inset-0',
          ' w-[223px] lg:!w-[743px] h-[317px] lg:!h-[292px]',
        )}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
        style={{
          x: useTransform(scrollYProgress, [0.1, 0.4], [0, vwToPx(80)]),
          y: useTransform(scrollYProgress, [0.1, 0.4], [0, vhToPx(20)]),
        }}
      /> */}

      <SectionOneTwo isMobile={isMobile} />
      <SectionTwo isMobile={isMobile} />

      <div ref={ref} className="flex h-full flex-col bg-white">
        <SectionThree />
        <SectionRegister />
        <SectionFooter />
      </div>
      <ModalRegister showRegisterModal={showRegisterModal} withCloseButton={false} onClose={close} size="auto" />
    </div>
  )
}
