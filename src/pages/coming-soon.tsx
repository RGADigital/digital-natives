import React, { useRef } from 'react'
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
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['start end', 'end start'] })
  const { height: viewportHeight, width: viewportWidth } = useViewportSize()
  const vhToPx = (vh: number) => (vh / 100) * viewportHeight
  const vwToPx = (vw: number) => (vw / 100) * viewportWidth

  const [showRegisterModal, { open, close }] = useDisclosure(false)
  // change header to light when section 3 is intersecting
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.3,
  })
  const { isIntersecting: isIntersecting2, ref: ref2 } = useIntersectionObserver({
    threshold: 0.5,
  })

  const section2Start = 0.35

  const isMobile = useMediaQuery(`(max-width: ${em(CONTAINER_SIZES.lg)})`)

  const blueX = useTransform(scrollYProgress, [0.3, section2Start], [vwToPx(50) - 300, viewportWidth - 280])
  const blueY = useTransform(scrollYProgress, [0.3, section2Start], [vhToPx(100) - 520, vhToPx(120) + 140])

  const redX = useTransform(scrollYProgress, [0.3, section2Start], [vwToPx(40), viewportWidth - 280])
  const redY = useTransform(scrollYProgress, [0.3, section2Start], [-100, vhToPx(120) + 111.7])
  const redH = useTransform(scrollYProgress, [0.3, section2Start], [160, 44])
  const redW = useTransform(scrollYProgress, [0.3, section2Start], [201, 87])

  const pinkYellowX = useTransform(scrollYProgress, [0.3, section2Start], [vwToPx(50) + 100, viewportWidth - 120])
  const pinkYellowY = useTransform(scrollYProgress, [0.3, section2Start], [vhToPx(100) - 190, vhToPx(120)])
  const pinkYellowRotate = useTransform(scrollYProgress, [0.3, section2Start], [90, -90])
  const pinkYellowW = useTransform(scrollYProgress, [0.3, section2Start], [201, 44])
  const pinkYellowH = useTransform(scrollYProgress, [0.3, section2Start], [195, 267])

  const yellowX = useTransform(scrollYProgress, [0.3, section2Start], [vwToPx(50), -100])
  const yellowY = useTransform(scrollYProgress, [0.3, section2Start], [vhToPx(100) - 50, vhToPx(150) + 45])

  const cyan1X = useTransform(scrollYProgress, [0.3, section2Start], [vwToPx(45) - 300, -200])
  const cyan1Y = useTransform(scrollYProgress, [0.3, section2Start], [viewportHeight - 161, vhToPx(150) - 143])
  const cyan1H = useTransform(scrollYProgress, [0.3, section2Start], [161, 300])
  const cyan1W = useTransform(scrollYProgress, [0.3, section2Start], [573, 399.7])

  const cyan2X = useTransform(scrollYProgress, [0.3, section2Start], [vwToPx(45) - 300, -200])
  const cyan2Y = useTransform(scrollYProgress, [0.3, section2Start], [viewportHeight - 161, vhToPx(150) - 143])
  const cyan2H = useTransform(scrollYProgress, [0.3, section2Start], [161, 300])
  const cyan2W = useTransform(scrollYProgress, [0.3, section2Start], [373, 300])

  return (
    <div
      className={cn(
        'px-0 mx-0',
        '!w-screen !max-w-screen min-h-screen !h-full',
        'flex flex-col dn-scroll-container overflow-hidden relative',
      )}
      ref={scrollRef}
    >
      <Header mode={isIntersecting ? 'light' : 'dark'} handleRegister={open} />

      <motion.div
        className="dn-blue-box absolute h-[317px] w-[223px] bg-ford-blue mix-blend-plus-lighter lg:!h-[292px] lg:!w-[743px]"
        style={{ x: blueX, y: blueY }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
      />

      <SectionOneTwo isMobile={isMobile} />
      <div ref={ref2}>
        <SectionTwo isMobile={isMobile} />
      </div>
      <motion.div
        className={cn('dn-red-box absolute bg-accents-red')}
        style={{ x: redX, y: redY, width: redW, height: redH }}
        initial={{ opacity: 0.7 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, ease: 'easeInOut' }}
      />
      <motion.div
        className={cn(
          'dn-pink-white-box absolute mix-blend-plus-lighter',
          '!w-[201.276px] !h-[196px] lg:top-[-160px] lg:!left-[40vw]',
          'bg-gr-pink-white',
        )}
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, ease: 'easeIn' }}
      ></motion.div>
      <motion.div
        className="dn-pink-yellow-box absolute bg-gr-pink-yellow !mix-blend-plus-lighter"
        style={{ x: pinkYellowX, y: pinkYellowY, rotate: pinkYellowRotate, width: pinkYellowW, height: pinkYellowH }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
      />

      <motion.div
        className={cn('dn-cyan-box absolute bg-accents-cyan', {
          'mix-blend-normal': isIntersecting2,
          'mix-blend-overlay': !isIntersecting2,
        })}
        style={{ x: cyan1X, y: cyan1Y, width: cyan1W, height: cyan1H }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="dn-cyan-box absolute bg-gr-green-white"
        style={{ x: cyan2X, y: cyan2Y, width: cyan2W, height: cyan2H }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
      ></motion.div>

      <motion.div
        className="dn-yellow-box absolute bg-accents-yellow mix-blend-difference lg:h-[112px] lg:w-[345px]"
        style={{ x: yellowX, y: yellowY }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
      />

      <div ref={ref} className="flex h-full flex-col bg-white">
        <SectionThree />
        <SectionRegister />
        <SectionFooter />
      </div>
      <ModalRegister showRegisterModal={showRegisterModal} withCloseButton={false} onClose={close} size="auto" />
    </div>
  )
}
