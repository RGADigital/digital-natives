import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useViewportSize } from '@mantine/hooks'

import cn from '@/utils/cn'

interface Props {
  isMobile?: boolean
}

export default function SectionOneAnimationLayer({ isMobile }: Readonly<Props>) {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: scrollRef, offset: ['start end', 'end end'] })
  const { height: viewportHeight, width: viewportWidth } = useViewportSize()

  const vhToPx = (vh: number) => (vh / 100) * viewportHeight
  const vwToPx = (vw: number) => (vw / 100) * viewportWidth
  const x = useTransform(scrollYProgress, [0.4, 1], [vwToPx(0), vwToPx(25)])
  const y = useTransform(scrollYProgress, [0.1, 1], [vhToPx(100) - 600, vhToPx(200) - 600])

  console.log('scrollYProgress', scrollYProgress.get(), viewportHeight, viewportWidth, isMobile, x, y)

  return (
    <
      // className={cn(
      //   'dn-section-animation',
      //   'container mx-auto',
      //   'absolute',
      //   '-top-[90px] left-0 !min-h-[200vh] z-0',
      //   // 'bg-green-300/20',
      // )}
      // ref={scrollRef}
    >
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
    </>
  )
}
