import { motion } from 'framer-motion'

import cn from '@/utils/cn'

import { buttonFramerConfig } from './animation'

export interface ButtonProps {
  children?: React.ReactNode
  className?: string
  handleClick: (...props: any) => void
  type?: 'primary' | 'white'
}

export default function Button({ className, handleClick, children, type = 'primary' }: Readonly<ButtonProps>) {
  return (
    <motion.button
      {...buttonFramerConfig}
      className={cn(
        'dn-button',

        '!h-[28px] lg:!h-[41px]',
        'px-4 lg:!px-6',
        'text-m-nav lg:text-nav',

        'rounded-[16px] lg:rounded-[46px]',
        '!cursor-pointer',

        {
          'bg-accents-cyan  text-black ': type === 'primary',
          'bg-white text-black': type === 'white',
        },
        className,
      )}
      onClick={handleClick}
    >
      {children}
    </motion.button>
  )
}
