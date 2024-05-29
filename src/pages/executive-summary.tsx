/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { em, Title } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import cn from '@/utils/cn'
import { BREAKPOINTS } from '@/utils/theme/container'

import { Meta } from '@/globals/index'
import { ExecutiveSummaryIntro } from '@/organisms/executiveSummary/index'
import { ModalRegister } from '@/organisms/index'
import SectionTemplate from '@/templates/Section'

const Header = dynamic(() => import('@/organisms/header/Header'), { ssr: false })

export default function ExecutiveSummary() {
  const scrollRef = useRef(null)
  const isMobile = useMediaQuery(`(max-width: ${em(BREAKPOINTS.lg)})`)
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
            <div className="col-span-12 lg:col-span-9 " style={isMobile ? {} : { borderLeft: '1px solid black' }}>
              {/* // TODO: Create as component: TEXT LEFT & STATS RIGHT */}
              <div className="pt-8" style={isMobile ? {} : { borderBottom: '1px solid black' }}>
                <div className="grid w-full grid-cols-12">
                  <div className="col-span-10">
                    <Title
                      order={2}
                      className="text-m-h2 lg:!text-h2 border-t-2 py-[25px] text-black lg:border-b-2 lg:pl-5"
                    >
                      The Challenge
                    </Title>
                  </div>
                  <div className="col-span-2 text-right">
                    <Title
                      order={2}
                      className="text-m-h2 lg:!text-h2 border-t-2 py-[25px] pl-5 text-black lg:border-b-2"
                    >
                      01
                    </Title>
                  </div>
                </div>
                <div className="grid w-full grid-cols-12 ">
                  <div className="col-span-12 lg:col-span-9 lg:mx-6 lg:border-r-2">
                    <div className="mt-6 grid w-full grid-cols-12">
                      <div className="col-span-12 lg:col-span-5">
                        <Title order={3} className="mb-6 text-black">
                          Our digital landscape has been shaped by, and for, Digital Adopters
                        </Title>
                      </div>
                    </div>
                    <div className="grid w-full grid-cols-12 lg:pr-4 ">
                      <div className="col-span-12 lg:col-span-6">
                        <p>
                          Those who were not born into the digital world but have had to adapt. However, the world is
                          now majority Digital Natives or 'Gen One' of a true digital world.
                        </p>
                        <p className="mt-6">
                          Digital Adopters are cautious when adopting new technology and old, inefficient experiences
                          have often been digitised rather than reimagining them for new audiences and technology.
                        </p>
                      </div>
                      <div className="col-span-12 lg:col-span-6 lg:pl-4">
                        <p>
                          Gen One are the most vocal critics of these technologies: they play a crucial role in
                          identifying issues and pushing for improvements.
                        </p>
                        <p className="mt-6">
                          Persisting with a design approach from the Digital Adopter era risks alienating Gen One and
                          limiting the adoption of new technology that can provide greater access and opportunities for
                          all.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 mb-12 mt-6 lg:col-span-3">
                    <img
                      src="/assets/exec-summary/the-challenge-1.jpg"
                      alt="Image with text that says Gen one is 18% Of Gen One are more likely to be concerned about their screen time than Digital Adopters"
                      className="w-full"
                    />
                    <img
                      src="/assets/exec-summary/the-challenge-2.jpg"
                      alt="Image with text that says They're out here living this luscious life and the average person is just at home watching them."
                      className="mt-6 w-full"
                    />
                  </div>
                </div>
              </div>

              {/* // TODO: Create as component: STATS LEFT & TEXT RIGHT */}
              <div className="pt-8" style={isMobile ? {} : { borderBottom: '1px solid black' }}>
                <div className="grid w-full grid-cols-12">
                  <div className="col-span-10">
                    <Title
                      order={2}
                      className="text-m-h2 lg:!text-h2 border-t-2 py-[25px] text-black lg:border-b-2 lg:pl-5"
                    >
                      The Opportunity
                    </Title>
                  </div>
                  <div className="col-span-2 text-right">
                    <Title
                      order={2}
                      className="text-m-h2 lg:!text-h2 border-t-2 py-[25px] pl-5 text-black lg:border-b-2"
                    >
                      02
                    </Title>
                  </div>
                </div>
                <div className="grid w-full grid-cols-12">
                  <div className="col-span-12 mb-12 mt-6 lg:col-span-3 lg:pl-5">
                    <img
                      src="/assets/exec-summary/the-opportunity-1.jpg"
                      alt="Image with text that says Gen one is 18% Of Gen One are more likely to be concerned about their screen time than Digital Adopters"
                      className="w-full"
                    />
                    <img
                      src="/assets/exec-summary/the-opportunity-2.jpg"
                      alt="Image with text that says They're out here living this luscious life and the average person is just at home watching them."
                      className="mt-6 w-full"
                    />
                  </div>
                  <div className="col-span-12 lg:col-span-9 lg:mx-6 lg:border-l-2 lg:pl-6">
                    <div className="mt-6 grid w-full grid-cols-12">
                      <div className="col-span-12 lg:col-span-5">
                        <Title order={3} className="mb-6 text-black">
                          In contrast, Gen One have grown up with technology as pervasive and integral to their lives.
                        </Title>
                      </div>
                    </div>
                    <div className="grid w-full grid-cols-12">
                      <div className="col-span-12 lg:col-span-6">
                        <p>
                          They seamlessly adopt new digital tools into their daily routines and have an expectation for
                          interactions to be fluid, intuitive, and almost imperceptible within their lifestyle. Their
                          usage habits and behaviours reflect a world that is now digital first.
                        </p>
                        <p className="mt-6">
                          Despite their ease with technology, Gen One shares the same fundamental life concerns as
                          previous generations, such as financial security, career progression, education, and adapting
                          to life changes.
                        </p>
                      </div>
                      <div className="col-span-12 lg:col-span-6 lg:pl-4">
                        <p>
                          Given their openness and enthusiasm for adopting new technology, both public and private
                          sector organisations should actively engage younger Australians as partners, and accelerate
                          technological advancements and innovations for their key life moments.
                        </p>
                        <p className="mt-6">
                          In our increasingly digital world, a Gen One first approach enables us to uplift and
                          accelerate our progress toward a more inclusive future for all.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* // TODO: Create as component: TEXT LEFT & STATS RIGHT */}
              <div className="pt-8" style={isMobile ? {} : { borderBottom: '1px solid black' }}>
                <div className="grid w-full grid-cols-12">
                  <div className="col-span-10">
                    <Title
                      order={2}
                      className="text-m-h2 lg:!text-h2 border-t-2 py-[25px] text-black lg:border-b-2 lg:pl-5"
                    >
                      Our Research
                    </Title>
                  </div>
                  <div className="col-span-2 text-right">
                    <Title
                      order={2}
                      className="text-m-h2 lg:!text-h2 border-t-2 py-[25px] pl-5 text-black lg:border-b-2"
                    >
                      03
                    </Title>
                  </div>
                </div>
                <div className="grid w-full grid-cols-12 ">
                  <div className="col-span-12 lg:col-span-9 lg:mx-6 lg:border-r-2">
                    <div className="mt-6 grid w-full grid-cols-12">
                      <div className="col-span-12 lg:col-span-5">
                        <Title order={3} className="mb-6 text-black">
                          R/GA sought to uncover the ambitions, behaviours, motivations and barriers of using digital
                          services among Gen One, and contrast that with Digital Adopters.
                        </Title>
                      </div>
                    </div>
                    <div className="grid w-full grid-cols-12 lg:pr-4 ">
                      <div className="col-span-12 lg:col-span-6">
                        <p>
                          In particular, we wanted to know how we could use the distinct behaviours of Gen One to unlock
                          new techniques to make digital services more accessible to vulnerable Australians - like First
                          Nations, CALD, neurodiverse and LGBTIQ+ Australians.
                        </p>
                        <p className="mt-6">
                          Our multimodal research with 1,579 Australians aged 15 and above included diary studies,
                          in-depth interviews and a quantitative study. Our research included a diversity of
                          demographics and geographies to ensure we heard from a
                        </p>
                      </div>
                      <div className="col-span-12 lg:col-span-6 lg:pl-4">
                        <p>
                          broad cross-section of Australians, and narrowed in on their experience around key life stages
                          like starting or finishing education, moving home or changing jobs.
                        </p>
                        <p className="mt-6">
                          While those born after 1997 are generally considered Digital Natives, our research found that
                          the characteristics of Gen One are even more prevalent among under 18s and present among those
                          in their 20s and 30s - a continuum, not a monolithic group.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 mb-12 mt-6 lg:col-span-3">
                    <img
                      src="/assets/exec-summary/the-research-1.jpg"
                      alt="Image with text that says 2x Gen One are twice more  likely to identify as neurodiverse or LGBTIQ+ than Digital Adopters"
                      className="w-full"
                    />
                    <img
                      src="/assets/exec-summary/the-research-2.jpg"
                      alt="Image with text that says I think it's entertaining to just kind of sit there and watch someone talk about all this stuff that's going on in their lives."
                      className="mt-6 w-full"
                    />
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
