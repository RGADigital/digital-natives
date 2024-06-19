import { motion } from 'framer-motion'

import { LANG } from './menu.constant'
import MenuItem from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export default function MenuList() {
  return (
    <section className="dn-menu-open mt-[76px] w-full pt-10">
      <motion.ul variants={variants} className="container mx-auto">
        {LANG.menuContent.map(menu => (
          <MenuItem
            boxText={menu.microDetail}
            menuLink={menu.link}
            menuText={menu.title}
            isComingSoon={menu.isComingSoon}
            key={menu.microDetail}
          />
        ))}
      </motion.ul>
    </section>
  )
}
