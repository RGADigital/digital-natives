import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import cn from '@/utils/cn'

import SectionTemplate from '@/templates/Section'

import SectionTwo from './SectionTwo'

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
      className="dn-coming-soon dn-section-one bg-black!px-0 flex h-[200vh] flex-col !pb-0 lg:!h-[200vh]"
      contentClassName={cn('relative', isMobile ? '!pr-0 pl-4' : '')}
    >
      {/* START: layer 1 */}
      <React.Fragment key="animation-layer-1">
        <motion.div
          className={cn('dn-blue-box bg-ford-blue', 'absolute', 'w-[223px] lg:!w-[743px] h-[317px] lg:!h-[292px]')}
          initial={{ opacity: 0.3, top: isMobile ? '152px' : 'auto', left: '20%', bottom: '172px' }}
          whileInView={{ opacity: 1, top: isMobile ? '152px' : 'auto', bottom: '200px' }}
          transition={{ delay: 0, ease: 'easeInOut' }}
        />
      </React.Fragment>
      {/* END: layer 1 */}

      {/* START: content */}
      <div className="dn-section relative  grid h-full w-screen grid-cols-12">
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
            className={cn('dp-section--desktop', 'relative', 'col-start-2 col-end-11 ')}
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <Image
              alt="Australia’s largest demographic is the one that’s never known a world without the internet."
              src="/assets/coming-soon/hero-lg.png"
              loading="eager"
              objectFit="scale-down"
              className="!top-[unset] bottom-0 !h-auto"
              fill
            />
          </motion.div>
        )}
      </div>
      {/* END: content */}

      {/* START: layer 2 */}
      {/* <React.Fragment>
        <motion.div className="dn-box-6 absolute bg-gr-pink-yellow !mix-blend-plus-lighter lg:right-[21%] lg:top-[calc(100vh_-_356px)] lg:h-[195.102px] lg:w-[201.276px]"></motion.div>

        <motion.div className="dn-box-4 absolute mix-blend-plus-lighter lg:bottom-[100px] lg:left-[-201px] lg:!h-[161px] lg:!w-[573px]">
          <div className="relative -rotate-90 mix-blend-plus-lighter">
            <div className="absolute top-0 bg-accents-cyan mix-blend-overlay lg:h-[573px] lg:w-[161px] "></div>
            <div className="absolute top-0 bg-gr-green-white lg:h-[373px] lg:w-[161px]" />
          </div>
        </motion.div>

        <motion.div className="dn-box-5 absolute bg-accents-yellow mix-blend-difference lg:left-[45%] lg:top-[calc(100vh_-_192px)] lg:h-[112px] lg:w-[345px]"></motion.div>
        <motion.div
          className={cn('dn-box-1', 'absolute', '!w-[201.276px] !h-[159.813px]', 'bg-accents-red')}
          initial={{ opacity: 0.7, left: '33%', top: '-182px' }}
          whileInView={{ opacity: 1, top: '-160px' }}
          transition={{ delay: 0.1, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className={cn(
            'dn-box-2',
            'absolute',
            '!w-[201.276px] !h-[196px]',
            'bg-gr-pink-white',
            'mix-blend-plus-lighter',
          )}
          initial={{ opacity: 0.3, top: '-232px', left: '33%' }}
          whileInView={{ opacity: 1, top: '-214px' }}
          transition={{ delay: 0.3, ease: 'easeInOut' }}
        ></motion.div>
      </React.Fragment> */}
      {/* END: layer 2 */}
      {/* START: Section 2 */}
      <SectionTwo isMobile={isMobile} />
      {/* END: Section 2 */}
    </SectionTemplate>
  )
}
