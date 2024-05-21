'use client'

import { useEffect, useState } from 'react'
import { useInterval } from '@mantine/hooks'

import { calculateTimeLeft, type TimeLeft } from '@/helpers/calculateTimeLeft'
import cn from '@/utils/cn'

const LAUNCH_DATE = '2024-05-25'
export default function CountDown() {
  const [showChild, setShowChild] = useState(false)
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(LAUNCH_DATE))
  const interval = useInterval(() => setTimeLeft(calculateTimeLeft(LAUNCH_DATE)), 1000)

  useEffect(() => {
    setShowChild(true)
  }, [])

  useEffect(() => {
    interval.start()
    return interval.stop
  }, [])

  if (!timeLeft) return null
  if (!showChild) return null

  return (
    <span
      className={cn('dn-countdown', 'w-full h-fit', 'py-[25px]', 'flex justify-center items-center gap-2 lg:gap-4')}
    >
      {`${timeLeft.days > 0 ? `${timeLeft.days} day${timeLeft.days > 1 ? 's' : ''}` : ''}${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}
    </span>
  )
}
