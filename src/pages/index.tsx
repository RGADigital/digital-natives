import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRouter } from 'next/router'
import { em } from '@mantine/core'
import { useMediaQuery, useOrientation } from '@mantine/hooks'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import useViewport from '@/hooks/useViewport'

import cn from '@/utils/cn'
import { BREAKPOINTS } from '@/utils/theme/container'

import { Meta } from '@/globals/index'
import { Header, SectionFooter, SectionOne, SectionRegister, SectionThree, SectionTwo } from '@/organisms/index'

const SECTION_2_START = 0.35
const SECTION_3_THRESHOLD = 0.3
const SECTION_2_THRESHOLD = 0.6
const SHOW_GRADIENT_HEADER_Y = 220

export default function ComingSoon() {
  const router = useRouter()

  const scrollRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['start end', 'end start'] })

  const [showHeaderGradient, setShowHeaderGradient] = useState(false)

  const { type } = useOrientation()
  const isLandscape = type === 'landscape-primary'

  const { viewportWidth, vhToPx, vwToPx } = useViewport({ maxHeight: 755 })

  const isMobile = useMediaQuery(`(max-width: ${em(BREAKPOINTS.md)})`)

  // change header to light background when section 3 is intersecting
  const { isIntersecting: isIntersectingSection3, ref: section3Ref } = useIntersectionObserver({
    threshold: SECTION_3_THRESHOLD,
  })

  // start changing mix blend mode on section 2
  const { isIntersecting: isIntersectingSection2, ref: section2Ref } = useIntersectionObserver({
    threshold: SECTION_2_THRESHOLD,
  })

  // START: box animation
  // - [Stop] on section 2 start
  // - Goals: setup animation (position, size, color, blend mode) for each box
  const blueStartX = isMobile ? vwToPx(50) - 87.64 : vwToPx(50) - 300
  const blueEndX = isMobile ? viewportWidth - 79 : viewportWidth - 280
  const bluePositionX = useTransform(scrollYProgress, [0.3, SECTION_2_START], [blueStartX, blueEndX])
  const blueStartY = isMobile ? vhToPx(50) - 160 : vhToPx(100) - 520
  const blueEndY = isMobile ? vhToPx(200) - 117 : vhToPx(120) + 140
  const bluePositionY = useTransform(scrollYProgress, [0.3, SECTION_2_START], [blueStartY, blueEndY])

  const redStartX = isMobile ? vwToPx(100) - 87 : vwToPx(40)
  const redEndX = isMobile ? viewportWidth - 70 : viewportWidth - 280
  const redPositionX = useTransform(scrollYProgress, [0.3, SECTION_2_START], [redStartX, redEndX])
  const redStartY = isMobile ? -62 : -27.81
  const redEndY = isMobile ? vhToPx(200) - 158 : vhToPx(120) + 115
  const redPositionY = useTransform(scrollYProgress, [0.3, SECTION_2_START], [redStartY, redEndY])
  const redStartHeight = 160
  const redEndHeight = isMobile ? 44 : 44
  const redHeight = useTransform(scrollYProgress, [0.3, SECTION_2_START], [redStartHeight, redEndHeight])
  const redStartWidth = 201
  const redEndWidth = isMobile ? 160 : 59.8
  const redWidth = useTransform(scrollYProgress, [0.3, SECTION_2_START], [redStartWidth, redEndWidth])

  const pinkYellowStartX = isMobile ? -67 : vwToPx(50) + 280
  const pinkYellowEndX = isMobile ? viewportWidth + 30 : viewportWidth - 99.97
  const pinkYellowPositionX = useTransform(scrollYProgress, [0.3, SECTION_2_START], [pinkYellowStartX, pinkYellowEndX])
  const pinkYellowStartY = isMobile ? vhToPx(100) - 249 : vhToPx(100) - 260
  const pinkYellowEndY = isMobile ? vhToPx(200) - 222 : vhToPx(120) - 6
  const pinkYellowPositionY = useTransform(scrollYProgress, [0.3, SECTION_2_START], [pinkYellowStartY, pinkYellowEndY])
  const pinkYellowRotate = useTransform(scrollYProgress, [0.3, SECTION_2_START], [90, -90])
  const pinkYellowStartWidth = 201
  const pinkYellowEndWidth = isMobile ? 38.7 : 44
  const pinkYellowWidth = useTransform(
    scrollYProgress,
    [0.3, SECTION_2_START],
    [pinkYellowStartWidth, pinkYellowEndWidth],
  )
  const pinkYellowStartHeight = 195
  const pinkYellowEndHeight = isMobile ? 196 : 285.5
  const pinkYellowHeight = useTransform(
    scrollYProgress,
    [0.3, SECTION_2_START],
    [pinkYellowStartHeight, pinkYellowEndHeight],
  )

  const yellowStartX = isMobile ? vwToPx(100) - 200 : vwToPx(50)
  const yellowEndX = isMobile ? vwToPx(100) - 223 : -100
  const yellowPositionX = useTransform(scrollYProgress, [0.3, SECTION_2_START], [yellowStartX, yellowEndX])
  const yellowStartY = isMobile ? vhToPx(100) - 110 : vhToPx(100) - 50
  const yellowEndY = isMobile ? vhToPx(100) + 91 : vhToPx(150) + 45
  const yellowPositionY = useTransform(scrollYProgress, [0.3, SECTION_2_START], [yellowStartY, yellowEndY])

  const cyan1StartX = isMobile ? vwToPx(100) - 200 : vwToPx(40) - 250
  const cyan1EndX = isMobile ? vwToPx(100) - 223 - 80 : -200
  const cyan1X = useTransform(scrollYProgress, [0.3, SECTION_2_START], [cyan1StartX, cyan1EndX])
  const cyan1StartY = isMobile ? 100 : vhToPx(100) - 161
  const cyan1EndY = isMobile ? vhToPx(100) + 133 : vhToPx(150) - 143
  const cyan1Y = useTransform(scrollYProgress, [0.3, SECTION_2_START], [cyan1StartY, cyan1EndY])
  const cyan1StartHeight = isMobile ? 127 : 161
  const cyan1EndHeight = isMobile ? 127 : 300
  const cyan1Height = useTransform(scrollYProgress, [0.3, SECTION_2_START], [cyan1StartHeight, cyan1EndHeight])
  const cyan1StartWidth = isMobile ? 201 : 573
  const cyan1EndWidth = isMobile ? 310 : 399.7
  const cyan1Width = useTransform(scrollYProgress, [0.3, SECTION_2_START], [cyan1StartWidth, cyan1EndWidth])

  const cyan2StartX = isMobile ? vwToPx(100) - 200 : vwToPx(40) - 250
  const cyan2EndX = isMobile ? vwToPx(100) - 223 - 80 : -200
  const cyan2X = useTransform(scrollYProgress, [0.3, SECTION_2_START], [cyan2StartX, cyan2EndX])
  const cyan2StartY = isMobile ? 100 : vhToPx(100) - 161
  const cyan2EndY = isMobile ? vhToPx(100) + 133 : vhToPx(150) - 143
  const cyan2Y = useTransform(scrollYProgress, [0.3, SECTION_2_START], [cyan2StartY, cyan2EndY])
  const cyan2StartHeight = isMobile ? 127 : 161
  const cyan2EndHeight = isMobile ? 127 : 300
  const cyan2Height = useTransform(scrollYProgress, [0.3, SECTION_2_START], [cyan2StartHeight, cyan2EndHeight])
  const cyan2StartWidth = isMobile ? 201 : 573
  const cyan2EndWidth = isMobile ? 310 : 399.7

  const cyan2Width = useTransform(scrollYProgress, [0.3, SECTION_2_START], [cyan2StartWidth, cyan2EndWidth])
  // END: box animation

  const handleRegister = () => {
    router.push('#register-form')
  }

  // Change to gradient header on section 1 & 2
  // When: after scroll
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      if (typeof window === 'undefined') return
      const scrollTop = window.scrollY
      setShowHeaderGradient(scrollTop > SHOW_GRADIENT_HEADER_Y)
    }
    window.addEventListener('scroll', handleScroll)

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={cn(
        'px-0 mx-0',
        '!w-screen !max-w-screen min-h-screen !h-full',
        'flex flex-col dn-scroll-container overflow-hidden relative',
      )}
      ref={scrollRef as React.RefObject<HTMLDivElement>}
    >
      <Header
        mode={isIntersectingSection3 ? 'light' : 'dark'}
        handleRegister={handleRegister}
        key={`intersecting-${isIntersectingSection3}`}
        showHeaderGradient={showHeaderGradient || (isMobile && isLandscape)}
      />
      <Meta />
      <motion.div
        className={cn(
          'dn-blue-box bg-ford-blue',
          'mix-blend-plus-lighter transition-colors',
          'absolute h-[317px] w-[223px]  lg:!h-[292px] lg:!w-[743px]',
        )}
        style={{ x: bluePositionX, y: bluePositionY }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
      />

      <SectionOne isMobile={isMobile} />
      <div ref={section2Ref}>
        <SectionTwo isMobile={isMobile} />
      </div>
      <motion.div
        className={cn('dn-red-box absolute bg-accents-red transition-colors')}
        style={{ x: redPositionX, y: redPositionY, width: redWidth, height: redHeight }}
        initial={{ opacity: 0.7 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, ease: 'easeInOut' }}
      />
      <motion.div
        className={cn(
          'dn-pink-white-box absolute mix-blend-plus-lighter transition-colors',
          'bg-gr-pink-white',
          '!w-[201px] !h-[195.99px] top-[-112px] lg:top-[-88px] right-[-115px] lg:!left-[40vw] lg:!right-[unset]',
        )}
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, ease: 'easeIn' }}
      ></motion.div>
      <motion.div
        className={cn(
          'dn-pink-yellow-box absolute',
          {
            'bg-gr-pink-yellow': !isIntersectingSection2,
            'bg-gr-pink-yellow-2': isIntersectingSection2,
          },
          '!mix-blend-plus-lighter transition-colors',
        )}
        style={{
          x: pinkYellowPositionX,
          y: pinkYellowPositionY,
          rotate: pinkYellowRotate,
          width: pinkYellowWidth,
          height: pinkYellowHeight,
        }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
      />

      <motion.div
        className={cn('dn-cyan-1-box absolute', 'bg-accents-cyan transition-colors ', {
          'mix-blend-overlay': true,
          '-z-20': isMobile,
        })}
        style={{ x: cyan1X, y: cyan1Y, width: cyan1Width, height: cyan1Height }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeOut' }}
      ></motion.div>
      <motion.div
        className="dn-cyan-1-box absolute -z-10 bg-gr-green-white transition-colors"
        style={{ x: cyan2X, y: cyan2Y, width: cyan2Width, height: cyan2Height }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeOut' }}
      ></motion.div>

      <motion.div
        className={cn(
          'dn-yellow-box bg-accents-yellow absolute',
          'mix-blend-difference transition-colors',
          'h-[112px] w-[345px]',
        )}
        style={{ x: yellowPositionX, y: yellowPositionY }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut' }}
      />

      <div ref={section3Ref} className=" flex h-full flex-col bg-white">
        <SectionThree isMobile={isMobile} />
        <SectionRegister />
        <SectionFooter />
      </div>
    </div>
  )
}
