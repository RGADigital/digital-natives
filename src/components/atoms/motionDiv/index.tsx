import { motion } from 'framer-motion'

import cn from '@/utils/cn'

import { getTransformedValue } from './motionDiv.helper'
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
  if (size?.w0) transformation.width = size.w0
  if (size?.h0) transformation.height = size.h0
  if (size && motionValue && inputRange) {
    if (size.w1) {
      transformation.width = getTransformedValue(size.w0, size.w1, inputRange, motionValue)
    }

    if (size.h1) {
      transformation.height = getTransformedValue(size.h0, size.h1, inputRange, motionValue)
    }
  }

  if (position?.x0) transformation.x = position.x0
  if (position?.y0) transformation.y = position.y0
  if (position && motionValue && inputRange) {
    if (position.x1) {
      transformation.x = getTransformedValue(position.x0, position.x1, inputRange, motionValue)
    }

    if (position.y1) {
      transformation.y = getTransformedValue(position.y0, position.y1, inputRange, motionValue)
    }
  }

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
