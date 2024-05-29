import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import cn from '@/utils/cn'

import { SectionTemplate } from '@/components/templates'

import heroLg from '../../../../public/assets/coming-soon/hero-lg.png'
import heroSm from '../../../../public/assets/coming-soon/hero-sm.png'

interface Props {
  isMobile?: boolean
}

export default function SectionOne({ isMobile }: Readonly<Props>) {
  return (
    <SectionTemplate
      mode="dark"
      scrollText="Scroll down"
      microDetailText="01/03"
      microDetailPosition="bottom-right"
      isFullScreen
      isMobile={isMobile}
      showScrollIcon
      showMicroDetail
      microDetailBoxClassName="bg-accents-yellow"
      className="dn-coming-soon dn-section-one"
      contentClassName={cn('relative w-screen h-screen', isMobile ? '!pr-0 pl-4' : '')}
    >
      <div className="dn-section relative grid h-full grid-cols-12 lg:container lg:mx-auto">
        {isMobile ? (
          <div className={cn('dp-section--mobile', 'relative', 'col-span-12 max-w-full')}>
            <Image
              alt="Australia’s largest demographic is the one that’s never known a world without the internet."
              src={heroSm}
              loading="eager"
              objectFit="contain"
              className="bottom-0 portrait:!inset-[unset] portrait:!bottom-[-130px] portrait:h-auto md:portrait:!right-[-70px] landscape:mx-auto landscape:max-h-[100vw] landscape:max-w-[100vh]"
              fill
            />
          </div>
        ) : (
          <motion.div
            className={cn('dp-section--desktop', 'relative', 'col-start-2 col-end-12 max-w-[1153px]')}
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <Image
              alt="Australia’s largest demographic is the one that’s never known a world without the internet."
              src={heroLg}
              loading="eager"
              objectFit="scale-down"
              className="!-bottom-0 !top-[unset] !h-auto !max-h-screen"
              fill
            />
          </motion.div>
        )}
      </div>
    </SectionTemplate>
  )
}
