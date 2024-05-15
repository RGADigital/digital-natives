import Link from 'next/link'

import { Background, Section } from '@/globals/index'
import { HeroOneButton, NavbarTwoColumns } from '@/organisms/index'

import { Logo } from './Logo'

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.rga.com/">Digital Natives</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'A boilerplate for\n'}
            <span className="text-primary-500">Digital Natives</span>
          </>
        }
        description=""
        button={''}
      />
    </Section>
  </Background>
)

export { Hero }
