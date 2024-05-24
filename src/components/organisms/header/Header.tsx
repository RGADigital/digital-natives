'use client'

import Link from 'next/link'
import { Button, em, Grid, NavLink, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import cn from '@/utils/cn'
import { CONTAINER_SIZES } from '@/utils/theme/container'

import RgaLogo from '@/atoms/icon/RgaLogo'

interface Props {
  mode?: 'dark' | 'light'
  handleRegister: (...props: any) => void
}

export default function Header({ mode = 'light', handleRegister }: Readonly<Props>) {
  const isMobile = useMediaQuery(`(max-width: ${em(CONTAINER_SIZES.sm)})`)

  return (
    <Grid
      align="center"
      component="header"
      gutter={{
        sm: '12px',
        lg: '24px',
      }}
      className={cn('inset-0', 'pt-[26px] pb-[25px] lg:py-4', 'pl-[14px] pr-[15.64px] lg:!px-10 h-[75px] lg:h-[81px]', {
        'bg-white': mode === 'light',
        'bg-black ': mode === 'dark',

        'fixed z-30': true,
      })}
    >
      <Grid.Col span="content">
        <NavLink
          component={Link}
          href="/"
          leftSection={<RgaLogo mode={mode} width={isMobile ? 53.12 : 83} height={isMobile ? 11.92 : 18.623} />}
          className="m-0 p-0 hover:bg-transparent"
        />
      </Grid.Col>
      <Grid.Col span="auto">
        <Text
          className={cn('text-xs lg:text-sm lg:text-center', 'pl-[31px] pr-[35px]', 'flex-grow', {
            'text-black': mode === 'light',
            'text-white': mode === 'dark',
          })}
        >
          GEN ONE DESIGN • REPORT DROPS • 25.05.24 •
        </Text>
      </Grid.Col>
      <Grid.Col span="content">
        <Button
          className={cn(
            'bg-accents-cyan hover:bg-accents-cyan/50 !text-black hover:!text-black hover:ease-in-out transition-all',

            'h-[22px] lg:!h-[33px]',
            '!px-[11px] lg:pt-[6px] lg:pb-2',

            'text-m-disclaimer lg:!text-disclaimer',
          )}
          radius="md"
          px={{
            xs: '11px',
          }}
          lh={{
            xs: '120%',
          }}
          onClick={handleRegister}
        >
          Register
        </Button>
      </Grid.Col>
    </Grid>
  )
}
