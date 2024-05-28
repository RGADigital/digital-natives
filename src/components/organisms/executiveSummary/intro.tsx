import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { em } from '@mantine/core'
import { useMediaQuery, useViewportSize } from '@mantine/hooks'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import cn from '@/utils/cn'
import { BREAKPOINTS } from '@/utils/theme/container'

import { SectionOne, SectionTwo } from '@/organisms/index'

export default function Intro() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['start end', 'end start'] })
  const { height: viewportHeight, width: viewportWidth } = useViewportSize()
  const vhToPx = (vh: number) => (vh / 100) * viewportHeight
  const vwToPx = (vw: number) => (vw / 100) * viewportWidth

  // start changing mix blend mode on section 2
  const { isIntersecting: isIntersecting2, ref: ref2 } = useIntersectionObserver({
    threshold: 0.5,
  })

  const section2Start = 0.35

  const isMobile = useMediaQuery(`(max-width: ${em(BREAKPOINTS.lg)})`)

  // set animation value
  const blueX0 = isMobile ? vwToPx(50) - 87.64 : vwToPx(50) - 300
  const blueX1 = isMobile ? viewportWidth - 79 : viewportWidth - 280
  const blueX = useTransform(scrollYProgress, [0.3, section2Start], [blueX0, blueX1])
  const blueY0 = isMobile ? vhToPx(50) - 160 : vhToPx(100) - 520
  const blueY1 = isMobile ? vhToPx(200) - 117 : vhToPx(120) + 140
  const blueY = useTransform(scrollYProgress, [0.3, section2Start], [blueY0, blueY1])

  const redX0 = isMobile ? vwToPx(100) - 87 : vwToPx(45)
  const redX1 = isMobile ? viewportWidth - 70 : viewportWidth - 280
  const redX = useTransform(scrollYProgress, [0.3, section2Start], [redX0, redX1])
  const redY0 = isMobile ? -62 : -100
  const redY1 = isMobile ? vhToPx(200) - 158 : vhToPx(120) + 115
  const redY = useTransform(scrollYProgress, [0.3, section2Start], [redY0, redY1])
  const redH0 = 160
  const redH1 = isMobile ? 44 : 26.7
  const redH = useTransform(scrollYProgress, [0.3, section2Start], [redH0, redH1])
  const redW0 = 201
  const redW1 = isMobile ? 160 : 87
  const redW = useTransform(scrollYProgress, [0.3, section2Start], [redW0, redW1])

  const pinkYellowX0 = isMobile ? -67 : vwToPx(50) + 140
  const pinkYellowX1 = isMobile ? viewportWidth + 30 : viewportWidth - 100
  const pinkYellowX = useTransform(scrollYProgress, [0.3, section2Start], [pinkYellowX0, pinkYellowX1])
  const pinkYellowY0 = isMobile ? vhToPx(100) - 249 : vhToPx(100) - 200
  const pinkYellowY1 = isMobile ? vhToPx(200) - 222 : vhToPx(120) - 5
  const pinkYellowY = useTransform(scrollYProgress, [0.3, section2Start], [pinkYellowY0, pinkYellowY1])
  const pinkYellowRotate = useTransform(scrollYProgress, [0.3, section2Start], [90, -90])
  const pinkYellowW0 = 201
  const pinkYellowW1 = isMobile ? 38.7 : 26.7
  const pinkYellowW = useTransform(scrollYProgress, [0.3, section2Start], [pinkYellowW0, pinkYellowW1])
  const pinkYellowH0 = 195
  const pinkYellowH1 = isMobile ? 196 : 267
  const pinkYellowH = useTransform(scrollYProgress, [0.3, section2Start], [pinkYellowH0, pinkYellowH1])

  const yellowX0 = isMobile ? vwToPx(100) - 126 : vwToPx(50)
  const yellowX1 = isMobile ? vwToPx(100) - 223 : -100
  const yellowX = useTransform(scrollYProgress, [0.3, section2Start], [yellowX0, yellowX1])
  const yellowY0 = isMobile ? vhToPx(100) - 110 : vhToPx(100) - 50
  const yellowY1 = isMobile ? vhToPx(100) + 91 : vhToPx(150) + 45
  const yellowY = useTransform(scrollYProgress, [0.3, section2Start], [yellowY0, yellowY1])

  const cyan1X0 = isMobile ? vwToPx(100) - 123 : vwToPx(35) - 300
  const cyan1X1 = isMobile ? vwToPx(100) - 223 - 80 : -200
  const cyan1X = useTransform(scrollYProgress, [0.3, section2Start], [cyan1X0, cyan1X1])
  const cyan1Y0 = isMobile ? 100 : viewportHeight - 161
  const cyan1Y1 = isMobile ? vhToPx(100) + 133 : vhToPx(150) - 143
  const cyan1Y = useTransform(scrollYProgress, [0.3, section2Start], [cyan1Y0, cyan1Y1])
  const cyan1H0 = isMobile ? 127 : 161
  const cyan1H1 = isMobile ? 127 : 300
  const cyan1H = useTransform(scrollYProgress, [0.3, section2Start], [cyan1H0, cyan1H1])
  const cyan1W0 = isMobile ? 201 : 573
  const cyan1W1 = isMobile ? 310 : 399.7
  const cyan1W = useTransform(scrollYProgress, [0.3, section2Start], [cyan1W0, cyan1W1])

  const cyan2X0 = isMobile ? vwToPx(100) - 123 : vwToPx(35) - 300
  const cyan2X1 = isMobile ? vwToPx(100) - 223 - 80 : -200
  const cyan2X = useTransform(scrollYProgress, [0.3, section2Start], [cyan2X0, cyan2X1])
  const cyan2Y0 = isMobile ? 100 : viewportHeight - 161
  const cyan2Y1 = isMobile ? vhToPx(100) + 133 : vhToPx(150) - 143
  const cyan2Y = useTransform(scrollYProgress, [0.3, section2Start], [cyan2Y0, cyan2Y1])
  const cyan2H0 = isMobile ? 127 : 161
  const cyan2H1 = isMobile ? 127 : 300
  const cyan2H = useTransform(scrollYProgress, [0.3, section2Start], [cyan2H0, cyan2H1])
  const cyan2W0 = isMobile ? 201 : 373
  const cyan2W1 = isMobile ? 310 : 300
  const cyan2W = useTransform(scrollYProgress, [0.3, section2Start], [cyan2W0, cyan2W1])

  return (
    <div
      className={cn(
        'px-0 mx-0',
        '!w-screen !max-w-screen min-h-screen !h-full',
        'flex flex-col dn-scroll-container overflow-hidden relative',
      )}
      ref={scrollRef}
    >
      <motion.div
        className="dn-blue-box absolute h-[317px] w-[223px] bg-ford-blue mix-blend-plus-lighter lg:!h-[292px] lg:!w-[743px]"
        style={{ x: blueX, y: blueY }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
      />

      <SectionOne isMobile={isMobile} />
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
          '!w-[201.276px] !h-[196px] top-[-112px] lg:top-[-160px] right-[-115px] lg:!left-[45vw] lg:!right-[unset]',
          'bg-gr-pink-white',
        )}
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, ease: 'easeIn' }}
      ></motion.div>
      <motion.div
        className={cn('dn-pink-yellow-box absolute  !mix-blend-plus-lighter', {
          'bg-gr-pink-yellow': !isIntersecting2,
          'bg-gr-pink-yellow-2': isIntersecting2,
        })}
        style={{ x: pinkYellowX, y: pinkYellowY, rotate: pinkYellowRotate, width: pinkYellowW, height: pinkYellowH }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
      />

      <motion.div
        className={cn('dn-cyan-box absolute bg-accents-cyan', {
          'mix-blend-normal': isIntersecting2 || isMobile,
          'mix-blend-overlay': !isIntersecting2 && !isMobile,
          '-z-20': isMobile,
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
        className="dn-yellow-box absolute h-[112px] w-[345px] bg-accents-yellow mix-blend-difference"
        style={{ x: yellowX, y: yellowY }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
      />
    </div>
  )
}
