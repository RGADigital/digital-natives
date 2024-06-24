import { Text, Title } from '@mantine/core'

import cn from '@/utils/cn'

import { Button } from '@/atoms/button'
import ScrollDownIcon from '@/atoms/icon/ScrollDown'
import MicroDetail from '@/atoms/microDetail/MicroDetail'

import { LANG } from './introSection.constant'

interface Props {
  handleRegister: () => void
  sectionRef?: (node?: Element | null) => void
}

export default function SectionTwo({ handleRegister, sectionRef }: Readonly<Props>) {
  return (
    <section
      className={cn(
        'dn-intro__intro',
        'w-screen h-min mt-[39.77px] lg:mt-0 lg:min-h-[775px] container mx-auto grow shrink-0',
        'flex justify-center items-start lg:items-center',
        'text-neutrals-white',
        'mix-blend-exclusion',
        'relative',
        'pb-7 lg:pb-[unset]',
      )}
      ref={sectionRef}
    >
      <div className="grid h-fit grid-cols-4 gap-[39.2px] lg:grid-cols-12 lg:gap-10">
        <div className="col-span-3 shrink-0 lg:hidden">
          <MicroDetail />
        </div>
        <Title order={2} size={3} className="col-span-3 !text-m-h3 lg:col-span-8 lg:col-start-3 lg:!text-h1">
          {LANG.section2Title}
        </Title>
        <Text component="p" className="col-span-3 !text-m-body lg:col-span-4 lg:col-start-3 lg:!text-body">
          {LANG.section2Subtitle}
          <br />
          <br />
          {LANG.section2Subtitle2}
        </Text>
        <div className="col-span-3 shrink-0 lg:col-span-8 lg:col-start-3">
          <Button handleClick={handleRegister}>{LANG.section2Register}</Button>
        </div>
        <div className="col-span-3 shrink-0 animate-bounce pb-[10.7px] duration-500 ease-in lg:hidden">
          <ScrollDownIcon />
        </div>
      </div>

      <div
        className={cn('dn-section__footer', 'hidden lg:block', 'animate-bounce duration-500 ease-in', {
          'lg:absolute lg:!bottom-5 lg:w-screen': true,
        })}
      >
        <div className={cn('container mx-auto', 'flex flex-row lg:items-center gap-[3.03px]')}>
          <ScrollDownIcon />
          <Text component="p" className={cn('hidden lg:block lg:text-eyebrow text-neutrals-white')}>
            {LANG.section2ScrollText}
          </Text>
        </div>
      </div>
    </section>
  )
}
