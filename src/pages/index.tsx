/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from 'react'
import { useDisclosure } from '@mantine/hooks'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import useViewport from '@/hooks/useViewport'

import cn from '@/utils/cn'

import { Meta } from '@/globals/index'
import Body from '@/organisms/executiveSummary/Body'
import { ExecutiveSummaryIntro } from '@/organisms/executiveSummary/index'
import FooterContent from '@/organisms/footer/FooterContent'
import { Header, ModalRegister } from '@/organisms/index'

const SHOW_GRADIENT_HEADER_Y = 220
const SECTION_3_THRESHOLD_DESKTOP = 0.3
const SECTION_3_THRESHOLD_MOBILE = 0.1

// TODO[pops]: extract header & footer into template
// TODO[pops]: fix header  on content section not white
export default function ExecutiveSummary() {
  const scrollRef = useRef(null)
  const { isMobile, isSmallLandscape } = useViewport({})
  const [showRegisterModal, { open: openRegisterModal, close }] = useDisclosure(false)
  // change header to light background when section 3 is intersecting
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: isSmallLandscape ? SECTION_3_THRESHOLD_MOBILE : SECTION_3_THRESHOLD_DESKTOP,
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
      ref={scrollRef as React.RefObject<HTMLDivElement>}
    >
      <Header
        mode={isIntersecting ? 'light' : 'dark'}
        handleRegister={openRegisterModal}
        key={`intersecting-${isIntersecting}-${isSmallLandscape}`}
        showHeaderGradient={showHeaderGradient}
      />
      <Meta />

      <ExecutiveSummaryIntro handleRegister={openRegisterModal} />
      <div ref={ref} className=" flex flex-col bg-neutrals-cream lg:bg-white">
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
