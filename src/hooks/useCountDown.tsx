'use client'

import { useEffect, useState } from 'react'
import { useInterval } from '@mantine/hooks'

import { calculateTimeLeft, type TimeLeft } from '@/helpers/calculateTimeLeft'

export default function useCountDown(launchDate: string) {
  const [showCountDown, setShowCountDown] = useState(false)
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(launchDate))
  const interval = useInterval(() => setTimeLeft(calculateTimeLeft(launchDate)), 1000)

  useEffect(() => {
    setShowCountDown(true)
  }, [])

  useEffect(() => {
    interval.start()
    return interval.stop
  }, [])

  return {
    countDownText:
      timeLeft &&
      `${timeLeft?.days > 0 ? `${timeLeft?.days} day${timeLeft?.days > 1 ? 's' : ''} ` : ''}${timeLeft?.hours}:${timeLeft?.minutes}:${timeLeft?.seconds}`,
    showCountDown,
  }
}
