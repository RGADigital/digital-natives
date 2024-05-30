import { motion, useTransform } from 'framer-motion'

import cn from '@/utils/cn'

import type { IStyle, ITransform, MotionDivProps } from './motionDiv.type'

export default function MotionDiv({
  className,
  children,
  delay = 0,
  ease = 'easeIn',
  fadeIn = false,
  size,
  position,
  motionValue,
  inputRange,
}: Readonly<MotionDivProps>) {
  const initial: IStyle = {}
  const whileInView: IStyle = {}

  if (fadeIn) {
    initial.opacity = 0.3
    whileInView.opacity = 1
  }

  const transformation: ITransform = {}
  transformation.width = useTransform(motionValue, inputRange, [size?.w0, size?.w1 ?? size?.w0])
  transformation.height = useTransform(motionValue, inputRange, [size?.h0, size?.h1 ?? size?.h0])
  transformation.x = useTransform(motionValue, inputRange, [position?.x0, position?.x1 ?? position?.x0])
  transformation.y = useTransform(motionValue, inputRange, [position?.y0, position?.y1 ?? position?.y0])

  return (
    <motion.div
      style={transformation}
      className={cn('cn-motion-div', className)}
      transition={{ delay, ease }}
      initial={initial}
      whileInView={whileInView}
    >
      {children}
    </motion.div>
  )
}
