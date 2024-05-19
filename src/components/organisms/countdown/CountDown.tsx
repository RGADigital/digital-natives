'use client'

import { useEffect, useState } from 'react'
import { Container, Text, Title } from '@mantine/core'
import { useInterval } from '@mantine/hooks'

import { calculateTimeLeft, type TimeLeft } from '@/helpers/calculateTimeLeft'
import cn from '@/utils/cn'

interface CounterBoxProps {
  value: number
  label: string
}
function CounterBox({ value, label }: Readonly<CounterBoxProps>) {
  return (
    <div
      className={cn(
        ' flex flex-col  p-2 lg:p-6 w-1/4 lg:w-1/5 lg:!min-w-fit lg:max-w-[100px]',
        'text-center',
        'shadow-md rounded-lg ',
        'backdrop-blur-sm bg-white/30',
      )}
    >
      <Title order={2} className="text-[40px] text-black">
        {value}
      </Title>
      <Text className="capitalize text-black">{label}</Text>
    </div>
  )
}

const LAUNCH_DATE = '2024-12-31'
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
    <Container
      className={cn('dn-countdown', 'w-full h-fit', 'py-[25px]', 'flex justify-center items-center gap-2 lg:gap-4')}
    >
      <CounterBox value={timeLeft.days} label="days" />
      <CounterBox value={timeLeft.hours} label="hours" />
      <CounterBox value={timeLeft.minutes} label="minutes" />
      <CounterBox value={timeLeft.seconds} label="seconds" />
    </Container>
  )
}
