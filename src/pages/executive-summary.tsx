import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { useDisclosure } from '@mantine/hooks'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import cn from '@/utils/cn'

import { Meta } from '@/globals/index'
import { ExecutiveSummaryIntro } from '@/organisms/executiveSummary/index'
import { ModalRegister } from '@/organisms/index'

const Header = dynamic(() => import('@/organisms/header/Header'), { ssr: false })

export default function ExecutiveSummary() {
  const scrollRef = useRef(null)
  const [showRegisterModal, { open, close }] = useDisclosure(false)
  // change header to light background when section 3 is intersecting
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.3,
  })

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
      <Meta />
      <ExecutiveSummaryIntro />

      <div ref={ref} className=" flex h-screen w-screen flex-col bg-white">
        children goes here
      </div>
      <ModalRegister showRegisterModal={showRegisterModal} withCloseButton={false} onClose={close} size="auto" />
    </div>
  )
}
