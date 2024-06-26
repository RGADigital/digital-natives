export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const calculateTimeLeft = (targetDate: string) => {
  const difference = +new Date(targetDate) - +new Date()
  let timeLeft = null

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export default calculateTimeLeft
