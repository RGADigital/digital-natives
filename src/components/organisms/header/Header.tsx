'use client'

import Link from 'next/link'
import { em, Grid, NavLink, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import cn from '@/utils/cn'
import { CONTAINER_SIZES } from '@/utils/theme/container'

import { Button } from '@/atoms/button'
import RgaLogo from '@/atoms/icon/RgaLogo'

interface Props {
  mode?: 'dark' | 'light'
  handleRegister: (...props: any) => void
  showHeaderGradient?: boolean
}

export default function Header({ mode = 'dark', handleRegister, showHeaderGradient = false }: Readonly<Props>) {
  const isMobile = useMediaQuery(`(max-width: ${em(CONTAINER_SIZES.lg)})`)

  return (
    <nav
      className={cn('dn-header inset-0', 'w-screen h-[80px] lg:h-[76px]', 'transition-colors ease-in duration-300', {
        'bg-transparent': true,
        '!bg-white header--light': mode === 'light',
        'header--dark': mode === 'dark',
        'fixed z-30': true,
        'bg-gr-header': showHeaderGradient && mode === 'dark',
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
          <div>
            <NavLink
              component={Link}
              href="https://rga.com/"
              leftSection={<RgaLogo mode={mode} width={isMobile ? 53.12 : 83} height={isMobile ? 11.92 : 18.623} />}
              className="m-0 p-0 hover:bg-transparent"
            />
          </div>
        </Grid.Col>
        <Grid.Col span="auto">
          <Text
            className={cn('text-center pl-[31px] pr-[35px]', 'uppercase', {
              '!text-black': mode === 'light',
              'text-white': mode === 'dark',
              '!text-m-eyebrow': isMobile,
              'lg:text-eyebrow': !isMobile,
            })}
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
