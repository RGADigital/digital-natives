import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import cn from '@/utils/cn'

import { SectionTemplate } from '@/components/templates'

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
      showScrollIcon
      showMicroDetail
      microDetailBoxClassName="bg-accents-yellow"
      className="dn-coming-soon dn-section-one"
      contentClassName={cn('relative w-screen h-screen', isMobile ? '!pr-0 pl-4' : '')}
    >
      <div className="dn-section relative grid h-full max-w-full grid-cols-12 border-4 border-red-500">
        {isMobile ? (
          <div className={cn('dp-section--mobile', 'relative', 'col-span-12')}>
            <Image
              alt="Australia’s largest demographic is the one that’s never known a world without the internet."
              src="/assets/coming-soon/hero-sm.png"
              loading="eager"
              objectFit="scale-down"
              className="!top-[unset] bottom-0 !h-auto lg:max-h-[526px]"
              fill
            />
          </div>
        ) : (
          <motion.div
            className={cn('dp-section--desktop', 'relative', 'col-start-2 col-end-11')}
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <Image
              alt="Australia’s largest demographic is the one that’s never known a world without the internet."
              src="/assets/coming-soon/hero-lg.png"
              loading="eager"
              objectFit="scale-down"
              className="!-bottom-0 !top-[unset] !h-auto"
              fill
            />
          </motion.div>
        )}
      </div>
    </SectionTemplate>
  )
}
