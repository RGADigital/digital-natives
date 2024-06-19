import { motion } from 'framer-motion'
import { Text, Title } from '@mantine/core'

import cn from '@/utils/cn'

import { MicroDetail } from '@/atoms/index'

import { LANG } from './menu.constant'
import type { IMenuItem } from './menu.type'

export const MenuItemContent = ({ boxText, boxClassName, isComingSoon, menuText }: Readonly<IMenuItem>) => (
  <>
    <MicroDetail
      text={boxText}
      boxClassName={cn(boxClassName, {
        'bg-accents-blue': isComingSoon,
      })}
      containerClassName="col-span-12 lg:col-span-3"
      textClassName={cn({
        'text-neutrals-cool-gray-5': isComingSoon,
      })}
    />
    <motion.div
      className="dn-menu-item__title title col-span-12 flex flex-col lg:col-span-9 lg:flex-row lg:gap-5"
      whileHover={{ scale: isComingSoon ? 1 : 1.1 }}
      whileTap={{ scale: isComingSoon ? 1 : 0.95 }}
    >
      <Title
        order={1}
        className={cn('!text-m-h1 tracking-[-0.78px] text-black lg:!text-h1', {
          'text-black': !isComingSoon,
          'text-neutrals-cool-gray-5': isComingSoon,
        })}
      >
        {menuText}
      </Title>
      {isComingSoon && (
        <Text component="p" className="font-body text-body text-neutrals-cool-gray-5">
          {LANG.comingSoon}
        </Text>
      )}
    </motion.div>
  </>
)
