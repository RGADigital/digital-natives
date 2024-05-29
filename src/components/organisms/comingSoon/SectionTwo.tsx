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
      scrollText="Keep scrolling"
      isFullScreen
      isMobile={isMobile}
      showScrollIcon
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
          className={cn(
            ' text-neutrals-cream lg:border-[2px] lg:w-max lg:border-[#379FFF]',
            {
              'text-[31px] leading-[33.17px] font-normal': isMobile,
              'lg:!text-h1 lg:mix-blend-difference ': !isMobile,
              'lg:relative': !isMobile,
            },
            '!z-20',
          )}
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
