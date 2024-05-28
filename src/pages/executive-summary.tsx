import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { Grid, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import cn from '@/utils/cn'

import { Meta } from '@/globals/index'
import { ExecutiveSummaryIntro } from '@/organisms/executiveSummary/index'
import { ModalRegister } from '@/organisms/index'
import SectionTemplate from '@/templates/Section'

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
        <SectionTemplate mode="light" className="pt-[95px] lg:pt-[132px]">
          <div className="dp-section grid grid-cols-12">
            <div className="dp-section__left lg:!max-w-2/3 col-span-12 lg:col-span-8">
              <Title order={1} className="text-m-h1 text-black lg:!text-h1">
                Executive Summary
              </Title>
            </div>
          </div>
          <div className="grid w-full grid-cols-12 border-t-[1px]  border-t-neutrals-cool-gray pt-4 lg:pt-5">
            <div className="col-span-12 lg:col-span-2">Menu goes here</div>
            <div className="lg:col-span-1"></div>
            <div className="col-span-6 lg:col-span-10">
              <Title order={2} className="text-m-h2 lg:!text-h2 border-b-2 pb-[25px] text-black">
                The Challenge
              </Title>
              <Grid>
                <Grid.Col span={4}>Our digital landscape has been shaped by, and for, Digital Adopters</Grid.Col>
              </Grid>
            </div>
          </div>
        </SectionTemplate>
      </div>
      <ModalRegister showRegisterModal={showRegisterModal} withCloseButton={false} onClose={close} size="auto" />
    </div>
  )
}
