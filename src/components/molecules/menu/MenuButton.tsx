import { motion } from 'framer-motion'

import { Button } from '@/atoms/button'

import { LANG } from './menu.constant'

interface IMenu {
  isOpen?: boolean
  handleClick: (...props: any) => void
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default function MenuButton({ isOpen, handleClick }: Readonly<IMenu>) {
  return (
    <motion.div variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Button type="white" handleClick={handleClick} ariaLabel={isOpen ? 'open menu' : 'close menu'}>
        {isOpen ? LANG.buttonMenuClose : LANG.buttonMenu}
      </Button>
    </motion.div>
  )
}
