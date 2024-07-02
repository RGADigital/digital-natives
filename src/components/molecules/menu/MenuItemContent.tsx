import { motion } from 'framer-motion'
import { Text, Title } from '@mantine/core'

import cn from '@/utils/cn'

import { MicroDetail } from '@/atoms/index'

import { LANG } from './menu.constant'
import type { IMenuItem } from './menu.type'

export const MenuItemContent = ({ boxText, boxClassName, isComingSoon, menuText, isMobile }: Readonly<IMenuItem>) => (
  <>
    <div className="col-span-12 flex w-[100%] items-center justify-between lg:col-span-3 lg:flex-row lg:justify-start">
      <MicroDetail
        text={boxText}
        boxClassName={cn(boxClassName, 'size-[11px]', {
          'bg-accents-blue': isComingSoon,
        })}
        containerClassName="col-span-12 lg:col-span-3"
        textClassName={cn({
          'text-m-nav font-m-nav': isMobile,
          'text-neutrals-cool-gray-5': isComingSoon,
          capitalize: true,
        })}
      />
      {isComingSoon && isMobile && (
        <Text component="p" className="font-body mb-[5px] text-body text-neutrals-cool-gray-5">
          {LANG.comingSoon}
        </Text>
      )}
    </div>

    <motion.div
      className="dn-menu-item__title title col-span-12 flex flex-col gap-[9px] lg:col-span-9 lg:flex-row lg:gap-5"
      whileHover={{ scale: isComingSoon ? 1 : 1.1 }}
      whileTap={{ scale: isComingSoon ? 1 : 0.95 }}
    >
      <Title
        order={1}
        className={cn('!text-m-h3 !font-m-h3 tracking-[-0.78px] text-black lg:!font-h1 lg:!text-h1', {
          'text-black': !isComingSoon,
          'text-neutrals-cool-gray-5': isComingSoon,
        })}
      >
        {menuText}
      </Title>
      {isComingSoon && !isMobile && (
        <Text component="p" className="font-body text-body text-neutrals-cool-gray-5">
          {LANG.comingSoon}
        </Text>
      )}
    </motion.div>
  </>
)
