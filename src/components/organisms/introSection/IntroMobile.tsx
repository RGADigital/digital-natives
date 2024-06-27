import { useMemo, useRef } from 'react'
import { useMotionValue } from 'framer-motion'
import Image from 'next/image'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import useViewport from '@/hooks/useViewport'

import cn from '@/utils/cn'

import { MotionDiv } from '@/atoms/index'
import type { IMotionDiv, IMotionDivPosition, IMotionDivSize } from '@/atoms/motionDiv/motionDiv.type'

import { ASSETS, LANG, MOTION_DIVS_MOBILE, SECTION_2_THRESHOLD } from './IntroSection.constant'
import SectionTwo from './SectionTwo'

interface Props {
  handleRegister: () => void
}

// TODO: reuse the similar code on mobile and desktop
export default function IntroMobile({ handleRegister }: Readonly<Props>) {
  const { viewportWidth, viewportHeight, vwToPx } = useViewport({})
  const scrollRef = useRef<HTMLElement>(null)
  const { ref: section2Ref, entry } = useIntersectionObserver({
    threshold: SECTION_2_THRESHOLD,
  })

  const motionDivsInPx: { [key: string]: IMotionDiv & { size: IMotionDivSize; position: IMotionDivPosition } } =
    useMemo(() => {
      return Object.entries(MOTION_DIVS_MOBILE).reduce(
        (acc: {}, [key, { sizeInPercent, positionInPercent, ...rest }]: [string, IMotionDiv]) => {
          const sizeInPx: IMotionDivSize = {
            w0: vwToPx(sizeInPercent.w0),
            h0: vwToPx(sizeInPercent.h0),
          }
          if (sizeInPercent.w1) sizeInPx.w1 = vwToPx(sizeInPercent.w1)
          if (sizeInPercent.h1) sizeInPx.h1 = vwToPx(sizeInPercent.h1)

          const positionInPx: IMotionDivPosition = {
            x0: vwToPx(positionInPercent.x0),
            y0: vwToPx(positionInPercent.y0),
          }
          if (positionInPercent.x1) positionInPx.x1 = vwToPx(positionInPercent.x1)
          if (positionInPercent.y1) positionInPx.y1 = vwToPx(positionInPercent.y1)

          return { ...acc, [key]: { size: sizeInPx, position: positionInPx, ...rest } }
        },
        {},
      )
    }, [viewportWidth, viewportHeight])

  const motionInputRange: [number, number] = [0.49, 0.5]
  const motionValue = useMotionValue(0)
  motionValue.set(entry?.intersectionRatio ?? 0)

  return (
    <div
      className={cn('dn-intro--desktop', 'flex flex-col gap-y-[39.77px]', 'w-screen h-full bg-black mt-[75px]')}
      ref={scrollRef as React.RefObject<HTMLDivElement>}
    >
      <section className={cn('dn-intro__hero', 'h-min')}>
        <div className="relative mx-0 h-[100vw] w-full overflow-hidden px-0">
          {motionDivsInPx.blueMobile && (
            <MotionDiv
              {...motionDivsInPx.blueMobile}
              className={cn('bg-accents-blue absolute')}
              motionValue={motionValue}
              inputRange={motionInputRange}
            />
          )}
          {motionDivsInPx.redPinkMobile && (
            <MotionDiv
              {...motionDivsInPx.redPinkMobile}
              className={cn('absolute bg-accents-red transition-all')}
              motionValue={motionValue}
              inputRange={motionInputRange}
              ease="easeIn"
            >
              <div className="h-[52.8%] w-full bg-gr-pink-white pt-[17.66%] mix-blend-plus-lighter" />
            </MotionDiv>
          )}

          <Image
            fill
            alt={LANG.heroAlt}
            src={ASSETS.heroSm}
            priority
            className="object-contain transition-opacity delay-300"
          />
          {motionDivsInPx.redMobile && (
            <MotionDiv
              {...motionDivsInPx.redMobile}
              className={cn('absolute bg-accents-red mix-blend-plus-lighter transition-colors')}
              motionValue={motionValue}
              inputRange={motionInputRange}
            />
          )}
          {motionDivsInPx.cyanGreenMobile && (
            <MotionDiv
              {...motionDivsInPx.cyanGreenMobile}
              className={cn('absolute mix-blend-exclusion transition-all')}
              motionValue={motionValue}
              inputRange={motionInputRange}
              ease="easeIn"
            >
              <div className="size-full bg-accents-cyan mix-blend-overlay">
                <div className="h-full w-[38.82%] bg-gr-green-white pl-[61.26%] mix-blend-normal" />
              </div>
            </MotionDiv>
          )}
        </div>
      </section>
      {/* TODO: remove props drilling by bring the section2 component up */}
      <SectionTwo handleRegister={handleRegister} sectionRef={section2Ref} />
    </div>
  )
}
