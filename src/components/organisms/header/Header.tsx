'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { em, Grid, NavLink, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import cn from '@/utils/cn'
import { CONTAINER_SIZES } from '@/utils/theme/container'

import { Button, buttonFramerConfig } from '@/atoms/button'
import RgaLogo from '@/atoms/icon/RgaLogo'

interface Props {
  mode?: 'dark' | 'light'
  handleRegister: (...props: any) => void
}

export default function Header({ mode = 'light', handleRegister }: Readonly<Props>) {
  const isMobile = useMediaQuery(`(max-width: ${em(CONTAINER_SIZES.lg)})`)

  return (
    <nav
      className={cn('inset-0', 'w-screen h-[80px] lg:h-[76px]', {
        'bg-transparent': true,
        '!bg-white': mode === 'light',

        'fixed z-30': true,
      })}
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
          <motion.div {...buttonFramerConfig}>
            <NavLink
              component={Link}
              href="/"
              leftSection={<RgaLogo mode={mode} width={isMobile ? 53.12 : 83} height={isMobile ? 11.92 : 18.623} />}
              className="m-0 p-0 hover:bg-transparent"
            />
          </motion.div>
        </Grid.Col>
        <Grid.Col span="auto">
          <Text
            className={cn(
              '!text-m-eyebrow lg:!text-eyebrow text-center',
              'pl-[31px] pr-[35px]',
              'flex-grow',
              'uppercase',
              {
                'text-black': mode === 'light',
                'text-white': mode === 'dark',
              },
            )}
          >
            THE GEN ONE REPORT
            {isMobile ? <br /> : ' / '}
            coming soon
          </Text>
        </Grid.Col>
        <Grid.Col span="content">
          <Button handleClick={handleRegister}>Register</Button>
        </Grid.Col>
      </Grid>
    </nav>
  )
}
