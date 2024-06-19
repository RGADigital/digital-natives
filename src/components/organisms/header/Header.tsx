'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Grid, NavLink, Text } from '@mantine/core'

import { useDimensions } from '@/hooks/useDimension'
import useViewport from '@/hooks/useViewport'

import cn from '@/utils/cn'
import { CONTAINER_SIZES } from '@/utils/theme/container'

import { Button } from '@/atoms/button'
import RgaLogo from '@/atoms/icon/RgaLogo'
import { Menu, MenuButton } from '@/molecules/index'

interface Props {
  mode?: 'dark' | 'light'
  handleRegister: (...props: any) => void
  showHeaderGradient?: boolean
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 85vw -100px)`,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
      opacity: 1,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 85vw -100px)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
      opacity: 0,
    },
  },
}

export default function Header({ mode = 'dark', handleRegister, showHeaderGradient = false }: Readonly<Props>) {
  const { isMobile } = useViewport({ maxWidth: +(CONTAINER_SIZES?.lg ?? 100) })
  const containerRef = useRef(null)

  const { height } = useDimensions({ ref: containerRef?.current })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenuOpen = () => setIsMenuOpen(isMenuOpen => !isMenuOpen)

  const headerMode = isMenuOpen ? 'light' : mode

  return (
    <motion.div
      initial={'closed'}
      animate={isMenuOpen ? 'open' : 'closed'}
      className={cn('dn-header__wrapper', 'h-fit max-h-screen w-full flex flex-col', {
        'fixed z-30': true,
        'overflow-y-auto': true,
      })}
      custom={{
        height,
      }}
      ref={containerRef}
    >
      <nav
        className={cn(
          'dn-header inset-0',
          'w-screen h-[80px] lg:h-[76px]',
          'transition-colors ease-in duration-300 delay-600',
          {
            'bg-transparent': true,
            '!bg-white header--light': headerMode === 'light',
            'header--dark': headerMode === 'dark',
            'bg-gr-header': showHeaderGradient && headerMode === 'dark',
            'fixed z-30': true,
          },
        )}
      >
        <Grid
          align="center"
          component="header"
          gutter={{
            sm: '12px',
            lg: '24px',
          }}
          className={cn('container mx-auto', 'py-7 lg:py-4 !lg:px-0')}
        >
          <Grid.Col span="content">
            <div>
              <NavLink
                component={Link}
                href="https://rga.com/"
                leftSection={
                  <RgaLogo mode={headerMode} width={isMobile ? 53.12 : 83} height={isMobile ? 11.92 : 18.623} />
                }
                className="m-0 p-0 hover:bg-transparent"
              />
            </div>
          </Grid.Col>
          <Grid.Col span="auto">
            <Text
              className={cn(
                'text-center pl-[31px] pr-[35px]',
                'uppercase',
                'transition-colors ease-in duration-300 delay-600',
                {
                  'text-white': headerMode === 'dark',
                  '!text-black': headerMode === 'light',
                  '!text-m-eyebrow': isMobile,
                  'lg:text-eyebrow': !isMobile,
                },
              )}
            >
              THE GEN ONE REPORT
              {isMobile ? <br /> : ' / '}
              coming soon
            </Text>
          </Grid.Col>
          <Grid.Col span="content" className="flex gap-[15px]">
            <Button
              handleClick={() => {
                if (isMenuOpen) toggleMenuOpen()
                handleRegister()
              }}
            >
              Register
            </Button>
            <MenuButton handleClick={toggleMenuOpen} isOpen={isMenuOpen} />
          </Grid.Col>
        </Grid>
      </nav>
      <motion.div
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        className="background bg-white"
        variants={sidebar}
      >
        <Menu />
      </motion.div>
    </motion.div>
  )
}
