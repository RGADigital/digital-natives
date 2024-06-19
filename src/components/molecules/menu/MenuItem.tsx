import { motion } from 'framer-motion'

import cn from '@/utils/cn'

import type { IMenuItem } from './menu.type'
import { MenuItemContent } from './MenuItemContent'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default function MenuItem({ boxText, boxClassName, isComingSoon, menuLink, menuText }: Readonly<IMenuItem>) {
  return (
    <motion.li
      className={cn(
        'dn-menu-item',
        'w-full  py-6',
        {
          'border-t': true,
          'border-t-black': !isComingSoon,
          'border-t-neutrals-cool-gray-5': isComingSoon,
        },
        {
          'cursor-pointer': !isComingSoon,
          'cursor-not-allowed': isComingSoon,
        },
      )}
      variants={variants}
    >
      {isComingSoon ? (
        <div className="grid grid-cols-12 lg:gap-5">
          <MenuItemContent
            boxText={boxText}
            boxClassName={boxClassName}
            isComingSoon={isComingSoon}
            menuText={menuText}
          />
        </div>
      ) : (
        <a href={menuLink} className="grid grid-cols-12 lg:gap-5">
          <MenuItemContent
            boxText={boxText}
            boxClassName={boxClassName}
            isComingSoon={isComingSoon}
            menuText={menuText}
          />
        </a>
      )}
    </motion.li>
  )
}
