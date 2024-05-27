import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { useViewportSize } from '@mantine/hooks'

import cn from '@/utils/cn'

interface Props {
  isMobile?: boolean
}

export default function SectionOneAnimationLayerTwo({ isMobile }: Readonly<Props>) {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: scrollRef, offset: ['start end', 'end end'] })
  const { height: viewportHeight, width: viewportWidth } = useViewportSize()

  const vhToPx = (vh: number) => (vh / 100) * viewportHeight
  const vwToPx = (vw: number) => (vw / 100) * viewportWidth
  const x = useTransform(scrollYProgress, [0.4, 1], [vwToPx(0), vwToPx(25)])
  const y = useTransform(scrollYProgress, [0.1, 1], [vhToPx(100) - 600, vhToPx(200) - 600])

  console.log('scrollYProgress', scrollYProgress.get(), viewportHeight, viewportWidth, isMobile, x, y)

  return (
    <div
      className={cn(
        'dn-section-animation--layer-two',
        'container mx-auto',
        'absolute',
        '-top-[90px] left-0 !min-h-[200vh] z-0',
        // 'bg-green-300/20',
      )}
      ref={scrollRef}
    >
      {/* <motion.div className="dn-box-4 absolute mix-blend-overlay lg:left-[12%] lg:top-[100vh]">
        <div className="relative -rotate-90">
          <div className="bg-accents-cyan absolute top-0 mix-blend-overlay lg:h-[573px] lg:w-[161px] "></div>
          <div className="bg-gr-green-white absolute top-0 lg:h-[373px] lg:w-[161px]" />
        </div>
      </motion.div>

      <motion.div className="dn-box-5 bg-accents-yellow absolute mix-blend-difference lg:left-[45%] lg:top-[calc(100vh_-_92px)] lg:h-[112px] lg:w-[345px]"></motion.div> */}

      {/* <motion.div className="dn-box-6 bg-gr-pink-yellow absolute !mix-blend-plus-lighter lg:right-[21%] lg:top-[calc(100vh_-_326px)] lg:h-[195.102px] lg:w-[201.276px]"></motion.div> */}
    </div>
  )
}
