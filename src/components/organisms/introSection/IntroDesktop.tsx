import { useMemo, useRef } from 'react'
import { useMotionValue } from 'framer-motion'
import Image from 'next/image'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import useViewport from '@/hooks/useViewport'

import cn from '@/utils/cn'

import { MotionDiv } from '@/atoms/index'
import type { IMotionDiv, IMotionDivPosition, IMotionDivSize } from '@/atoms/motionDiv/motionDiv.type'

import {
  ASSETS,
  LANG,
  MAX_HEIGHT_IN_PX,
  MAX_WIDTH_IN_PX,
  MOTION_DIVS_DESKTOP,
  SECTION_2_THRESHOLD,
} from './IntroSection.constant'
import SectionTwo from './SectionTwo'

interface Props {
  handleRegister: () => void
}

export default function IntroDesktop({ handleRegister }: Readonly<Props>) {
  const { viewportWidth, viewportHeight, vhToPx, vwToPx } = useViewport({
    maxHeight: MAX_HEIGHT_IN_PX,
    maxWidth: MAX_WIDTH_IN_PX,
  })
  const scrollRef = useRef<HTMLElement>(null)
  const { ref: section2Ref, entry } = useIntersectionObserver({
    threshold: SECTION_2_THRESHOLD,
  })

  const motionDivsInPx: { [key: string]: IMotionDiv & { size: IMotionDivSize; position: IMotionDivPosition } } =
    useMemo(() => {
      return Object.entries(MOTION_DIVS_DESKTOP).reduce(
        (acc: {}, [key, { sizeInPercent, positionInPercent, ...rest }]: [string, IMotionDiv]) => {
          const sizeInPx: IMotionDivSize = {
            w0: vwToPx(sizeInPercent.w0),
            h0: vhToPx(sizeInPercent.h0),
          }
          if (sizeInPercent.w1) sizeInPx.w1 = vwToPx(sizeInPercent.w1)
          if (sizeInPercent.h1) sizeInPx.h1 = vhToPx(sizeInPercent.h1)

          const positionInPx: IMotionDivPosition = {
            x0: vwToPx(positionInPercent.x0),
            y0: vhToPx(positionInPercent.y0),
          }
          if (positionInPercent.x1) positionInPx.x1 = vwToPx(positionInPercent.x1)
          if (positionInPercent.y1) positionInPx.y1 = vhToPx(positionInPercent.y1)

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
      className={cn('dn-intro--desktop', 'flex flex-col', 'w-screen h-full bg-black', 'overflow-hidden')}
      ref={scrollRef as React.RefObject<HTMLDivElement>}
    >
      <section className={cn('dn-intro__hero', 'max-h-[755px] h-screen')}>
        <div className="container relative mx-auto size-full">
          {motionDivsInPx.blueDesktop && (
            <MotionDiv
              {...motionDivsInPx.blueDesktop}
              className={cn('bg-accents-blue absolute')}
              motionValue={motionValue}
              inputRange={motionInputRange}
            />
          )}
          {motionDivsInPx.redPinkDesktop && (
            <MotionDiv
              {...motionDivsInPx.redPinkDesktop}
              className={cn('absolute bg-accents-red  transition-all')}
              motionValue={motionValue}
              inputRange={motionInputRange}
              ease="easeIn"
            >
              <div className="h-[52.8%] w-full bg-gr-pink-white pt-[17.66%] mix-blend-plus-lighter" />
            </MotionDiv>
          )}

          <Image fill alt={LANG.heroAlt} src={ASSETS.heroLg} priority className="transition-opacity delay-300" />
          {motionDivsInPx.redDesktop && (
            <MotionDiv
              {...motionDivsInPx.redDesktop}
              className={cn('absolute bg-accents-red mix-blend-plus-lighter transition-colors')}
              motionValue={motionValue}
              inputRange={motionInputRange}
            />
          )}
          {motionDivsInPx.cyanGreenDesktop && (
            <MotionDiv
              {...motionDivsInPx.cyanGreenDesktop}
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
      <SectionTwo handleRegister={handleRegister} sectionRef={section2Ref} />
    </div>
  )
}
