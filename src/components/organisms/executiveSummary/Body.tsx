/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import { SectionTemplate } from '@/components/templates'
import TwoColumnStat from '@/organisms/twoColumnStat/TwoColumnStat'
import { type ITwoColumnStat, TWO_COLUMN_STAT } from '@/templates/twoColumnStat'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function Body({ isMobile = false }: Readonly<Props>) {
  return (
    <SectionTemplate mode="light" className="pt-[95px] lg:pt-[132px]">
      <div className="dp-section grid grid-cols-12">
        <div className="dp-section__left lg:!max-w-2/3 col-span-12 lg:col-span-8">
          <Title order={1} className="pb-6 text-m-h1 text-black lg:!text-h1">
            Executive Summary
          </Title>
        </div>
      </div>
      {/* START: content */}
      <div className="grid w-full grid-cols-12 border-t-[1px] border-t-neutrals-cool-gray bg-white pt-4 lg:pt-0">
        <div className="relative col-span-12 lg:col-span-2">Menu goes here</div>
        <div className="lg:col-span-1"></div>
        <div className="col-span-12 lg:col-span-9 " style={isMobile ? {} : { borderLeft: '1px solid black' }}>
          {/* // TODO: Create as component: TEXT LEFT & STATS RIGHT */}
          <div className={cn('pt-8 lg:pt-20', 'lg:border-b-[1px] lg:border-black')}>
            <div className="grid w-full grid-cols-12">
              <div className="col-span-10">
                <Title
                  order={2}
                  className="text-m-h2 lg:!text-h2 border-t-2 py-[25px] text-black lg:border-b-2 lg:border-t-0 lg:pl-5"
                >
                  The Challenge
                </Title>
              </div>
              <div className="col-span-2 text-right">
                <Title
                  order={2}
                  className="text-m-h2 lg:!text-h2 border-t-2 py-[25px] pl-5 text-black lg:border-b-2 lg:border-t-0"
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
                      Those who were not born into the digital world but have had to adapt. However, the world is now
                      majority Digital Natives or 'Gen One' of a true digital world.
                    </p>
                    <p className="mt-6">
                      Digital Adopters are cautious when adopting new technology and old, inefficient experiences have
                      often been digitised rather than reimagining them for new audiences and technology.
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-6 lg:pl-4">
                    <p>
                      Gen One are the most vocal critics of these technologies: they play a crucial role in identifying
                      issues and pushing for improvements.
                    </p>
                    <p className="mt-6">
                      Persisting with a design approach from the Digital Adopter era risks alienating Gen One and
                      limiting the adoption of new technology that can provide greater access and opportunities for all.
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
                  className="text-m-h2 lg:!text-h2 border-t-2 py-[25px] text-black lg:border-b-2 lg:border-t-0 lg:pl-5"
                >
                  The Opportunity
                </Title>
              </div>
              <div className="col-span-2 text-right">
                <Title
                  order={2}
                  className="text-m-h2 lg:!text-h2 border-t-2 py-[25px] pl-5 text-black lg:border-b-2 lg:border-t-0"
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
                      interactions to be fluid, intuitive, and almost imperceptible within their lifestyle. Their usage
                      habits and behaviours reflect a world that is now digital first.
                    </p>
                    <p className="mt-6">
                      Despite their ease with technology, Gen One shares the same fundamental life concerns as previous
                      generations, such as financial security, career progression, education, and adapting to life
                      changes.
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-6 lg:pl-4">
                    <p>
                      Given their openness and enthusiasm for adopting new technology, both public and private sector
                      organisations should actively engage younger Australians as partners, and accelerate technological
                      advancements and innovations for their key life moments.
                    </p>
                    <p className="mt-6">
                      In our increasingly digital world, a Gen One first approach enables us to uplift and accelerate
                      our progress toward a more inclusive future for all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* // TODO: Create as component: TEXT LEFT & STATS RIGHT */}
          <TwoColumnStat
            type={TWO_COLUMN_STAT.textLeft as ITwoColumnStat}
            isMobile={isMobile}
            title={LANG.section3.title}
            titleNumber={LANG.section3.titleNumber}
            bodyTitle={LANG.section3.bodyTitle}
            paragraph1Content={LANG.section3.paragraph1Content}
            paragraph2Content={LANG.section3.paragraph2Content}
            statContent={LANG.section3.statContent}
          />
        </div>
      </div>
      {/* END: content */}
    </SectionTemplate>
  )
}
