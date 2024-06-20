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
import { Header, ModalRegister } from '@/organisms/index'

const SHOW_GRADIENT_HEADER_Y = 220
const SECTION_3_THRESHOLD_DESKTOP = 0.3
const SECTION_3_THRESHOLD_MOBILE = 0.1

export default function ExecutiveSummary() {
  const scrollRef = useRef(null)
  const { isMobile, isSmallLandscape } = useViewport({})
  const [showRegisterModal, { open, close }] = useDisclosure(false)
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
        handleRegister={open}
        key={`intersecting-${isIntersecting}-${isSmallLandscape}`}
        showHeaderGradient={showHeaderGradient}
      />
      <Meta />

      {/* <div className="container mx-auto w-1/2 bg-red-200">
        <CardArticlePreview
          title="Their relationship to technology"
          content={[
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
            'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
          ]}
          subtitle="Finding 01"
          image="/assets/page-executive-summary/4-what-we-found-card-1-preview.jpg"
          imageClassName="w-full h-auto md:aspect-[10/7] "
        />
      </div> */}
      <ExecutiveSummaryIntro handleRegister={open} />
      <div ref={ref} className=" flex flex-col bg-white">
        <Body isMobile={isMobile} />
      </div>
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
