/* eslint-disable react/no-unescaped-entities */
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
        'flex flex-col dn-scroll-container relative',
      )}
      ref={scrollRef}
    >
      <Header mode={isIntersecting ? 'light' : 'dark'} handleRegister={open} />
      <Meta />
      <ExecutiveSummaryIntro />

      <div ref={ref} className=" flex flex-col bg-white">
        <SectionTemplate mode="light" className="pt-[95px] lg:pt-[132px]">
          <div className="dp-section grid grid-cols-12">
            <div className="dp-section__left lg:!max-w-2/3 col-span-12 lg:col-span-8">
              <Title order={1} className="pb-6 text-m-h1 text-black lg:!text-h1">
                Executive Summary
              </Title>
            </div>
          </div>
          <div className="grid w-full grid-cols-12 border-t-[1px] border-t-neutrals-cool-gray bg-white pt-4 lg:pt-5">
            <div className="col-span-12 lg:col-span-2">Menu goes here</div>
            <div className="lg:col-span-1"></div>
            <div className="col-span-12 lg:col-span-9" style={{ borderLeft: '1px solid black' }}>
              <div className="ml-6 pb-10" style={{ borderBottom: '1px solid black' }}>
                <Title order={2} className="text-m-h2 lg:!text-h2 border-b-2 pb-[25px] text-black">
                  The Challenge
                </Title>
                <Grid>
                  <Grid.Col span={{ base: 12 }}>
                    <Title order={3} className="mt-6 text-black">
                      Our digital landscape has been shaped by, and for, Digital Adopters
                    </Title>
                  </Grid.Col>
                </Grid>
                <div className="mt-12 grid w-full grid-cols-12">
                  <div className="col-span-12 pl-0 lg:col-span-4 lg:px-6">
                    <p>
                      Those who were not born into the digital world but have had to adapt. However, the world is now
                      majority Digital Natives or 'Gen One' of a true digital world.
                    </p>
                    <p>
                      Digital Adopters are cautious when adopting new technology and old, inefficient experiences have
                      often been digitised rather than reimagining them for new audiences and technology.
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 lg:px-4">
                    <p>
                      Gen One are the most vocal critics of these technologies: they play a crucial role in identifying
                      issues and pushing for improvements.
                    </p>
                    <p>
                      Persisting with a design approach from the Digital Adopter era risks alienating Gen One and
                      limiting the adoption of new technology that can provide greater access and opportunities for all.
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                    <img
                      src="/assets/exec-summary/the-challenge-1.jpg"
                      alt="Image with text that says Gen one is 18% Of Gen One are more likely to be concerned about their screen time than Digital Adopters"
                    />
                    <img
                      src="/assets/exec-summary/the-challenge-2.jpg"
                      alt="Image with text that says They're out here living this luscious life and the average person is just at home watching them."
                      className="mt-6"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-6 pb-10" style={{ borderBottom: '1px solid black' }}>
                <Title order={2} className="text-m-h2 lg:!text-h2 border-b-2 py-[25px] text-black">
                  The Opportunity
                </Title>
                <Grid>
                  <Grid.Col span={{ base: 12 }}>
                    <Title order={3} className="mt-6 text-black">
                      In contrast, Gen One have grown up with technology as pervasive and integral to their lives.
                    </Title>
                  </Grid.Col>
                </Grid>
                <div className="mt-12 grid w-full grid-cols-12">
                  <div className="col-span-12 pl-0 lg:col-span-4 lg:px-6">
                    <img
                      src="/assets/exec-summary/the-opportunity-1.jpg"
                      alt="Image with text that says Gen one is 18% Of Gen One are more likely to be concerned about their screen time than Digital Adopters"
                    />
                    <img
                      src="/assets/exec-summary/the-opportunity-2.jpg"
                      alt="Image with text that says They're out here living this luscious life and the average person is just at home watching them."
                      className="mt-6"
                    />
                  </div>
                  <div className="col-span-12 lg:col-span-4 lg:px-4">
                    <p>
                      They seamlessly adopt new digital tools into their daily routines and have an expectation for
                      interactions to be fluid, intuitive, and almost imperceptible within their lifestyle. Their usage
                      habits and behaviours reflect a world that is now digital first.
                    </p>
                    <p>
                      Despite their ease with technology, Gen One shares the same fundamental life concerns as previous
                      generations, such as financial security, career progression, education, and adapting to life
                      changes.
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                    <p>
                      Gen One are the most vocal critics of these technologies: they play a crucial role in identifying
                      issues and pushing for improvements.
                    </p>
                    <p>
                      Persisting with a design approach from the Digital Adopter era risks alienating Gen One and
                      limiting the adoption of new technology that can provide greater access and opportunities for all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionTemplate>
      </div>
      <ModalRegister showRegisterModal={showRegisterModal} withCloseButton={false} onClose={close} size="auto" />
    </div>
  )
}
