import { motion } from 'framer-motion'
import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import SectionTemplate from '@/templates/Section'

interface Props {
  isMobile?: boolean
}

export default function SectionTwo({ isMobile }: Readonly<Props>) {
  return (
    <SectionTemplate
      mode="dark"
      className="!h-screen !w-screen"
      microDetailText="02/03"
      microDetailPosition="bottom-right"
      scrollText="Keep scrolling"
      isFullScreen
      isMobile={isMobile}
      showScrollIcon
      showMicroDetail
      microDetailBoxClassName="bg-accents-yellow "
      contentClassName={cn('relative w-screen h-screen', isMobile ? '!pr-0 pl-4' : '')}
    >
      <motion.div
        className="dn-section container mx-auto flex !h-full items-center justify-center"
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, ease: 'easeIn' }}
      >
        <Title
          order={1}
          className={cn('text-m-h1 text-neutrals-cream lg:!text-h1 lg:border-[2px] lg:w-max lg:border-[#379FFF]', {
            'lg:relative': !isMobile,
          })}
        >
          <div className={cn({ hidden: isMobile, 'absolute -top-1 -left-1 w-2 h-2 bg-[#379FFF]': !isMobile })} />
          <div className={cn({ hidden: isMobile, 'absolute -bottom-1 -left-1 w-2 h-2 bg-[#379FFF]': !isMobile })} />
          <div className={cn({ hidden: isMobile, 'absolute -top-1 -right-1 w-2 h-2 bg-[#379FFF]': !isMobile })} />
          <div className={cn({ hidden: isMobile, 'absolute -bottom-1 -right-1 w-2 h-2 bg-[#379FFF]': !isMobile })} />
          This means we have to evolve {!isMobile && <br />}digital experiences to address {!isMobile && <br />} their
          needs and expectations
        </Title>
      </motion.div>
    </SectionTemplate>
  )
}
