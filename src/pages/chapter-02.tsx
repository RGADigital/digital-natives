/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useDisclosure } from '@mantine/hooks'

import useViewport from '@/hooks/useViewport'

import cn from '@/utils/cn'

import { Body, IntroSection } from '@/components/organisms/chapterTwo/index'
import { Meta } from '@/globals/index'
import FooterContent from '@/organisms/footer/FooterContent'
import { Header, ModalRegister } from '@/organisms/index'

const SHOW_GRADIENT_HEADER_Y = 220

export default function ChapterOne() {
  const scrollRef = useRef(null) as React.RefObject<HTMLDivElement>
  const { isMobile, isSmallLandscape } = useViewport({})
  const [showRegisterModal, { open: openRegisterModal, close }] = useDisclosure(false)
  // change header to light background when section 3 is intersecting

  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: 0.1,
    margin: `300% 0px 0px 0px`,
  })

  const [showHeaderGradient, setShowHeaderGradient] = useState(false)
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
        'flex flex-col dn-scroll-container relative',
        'bg-black',
      )}
      ref={scrollRef}
    >
      <Header
        mode={isInView ? 'light' : 'dark'}
        handleRegister={openRegisterModal}
        key={`intersecting-${isInView}-${isSmallLandscape}`}
        showHeaderGradient={showHeaderGradient}
      />
      <Meta />
      <IntroSection handleRegister={openRegisterModal} />
      <div ref={ref} className={cn('flex flex-col', 'bg-white')}>
        <Body isMobile={isMobile} />
      </div>
      <FooterContent handleRegister={openRegisterModal} />
      <ModalRegister
        showRegisterModal={showRegisterModal}
        withCloseButton={false}
        onClose={close}
        size="auto"
        isMobile={isMobile}
      />
    </div>
  )
}

// TODO[pops]: move modal register to separate template
