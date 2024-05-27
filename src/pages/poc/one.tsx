import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useViewportSize } from '@mantine/hooks'

import cn from '@/utils/cn'

export default function PocOne() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: scrollRef, offset: ['start end', 'end end'] })
  const { height: viewportHeight, width: viewportWidth } = useViewportSize()
  const vhToPx = (vh: number) => (vh / 100) * viewportHeight
  const vwToPx = (vw: number) => (vw / 100) * viewportWidth
  const x = useTransform(scrollYProgress, [0.4, 1], [vwToPx(0), vwToPx(25)])
  const y = useTransform(scrollYProgress, [0.1, 1], [vhToPx(100) - 600, vhToPx(200) - 600])

  console.log('scrollYProgress', scrollYProgress.get(), viewportHeight, viewportWidth)

  return (
    <section className={cn(' bg-purple-300 text-white overflow-scroll relative h-screen')} ref={scrollRef}>
      <motion.div
        className="absolute !h-[200px] !w-[400px] bg-gr-pink-white text-black mix-blend-plus-lighter"
        style={{ x, y }}
        initial={{ opacity: 0.7, width: 0, left: '-100px' }}
        whileInView={{ opacity: 1, width: '300px', left: '0px' }}
        transition={{ delay: 0.1, ease: 'easeInOut' }}
      >
        HEHEHHEHEHHEHEHEHEH
      </motion.div>
      <div className="section-01 flex min-h-screen w-screen flex-col items-center justify-center bg-black">
        <motion.div
          className="size-fit overflow-hidden"
          initial={{ opacity: 0.3, height: 0 }}
          whileInView={{ opacity: 1, height: 576 }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <Image
            width={576}
            height={654}
            src="/assets/coming-soon/hero__gal-pal.png"
            alt=""
            className="rotate-[-4.97deg]"
          />
        </motion.div>
        <motion.h1
          className="absolute left-0 top-[50vh] w-screen text-center text-h1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }}
        >
          Text goes here
        </motion.h1>
        <div className="absolute left-[40w] top-[50vh] size-[200px] bg-gr-pink-yellow font-bold mix-blend-lighten" />
      </div>
      <div className="section-02 min-h-screen w-screen bg-green-200 text-white">section 2</div>
      <div className="section-03 min-h-screen w-screen bg-blue-200 text-white">section 3</div>
    </section>
  )
}
