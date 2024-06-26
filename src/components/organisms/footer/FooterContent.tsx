import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import { Button } from '@/atoms/button'

import { LANG } from './footer.constant'

interface IFooterContent {
  handleRegister: () => void
}

// TODO: ask copyright desktop design, privacy policy etc
export default function FooterContent({ handleRegister }: Readonly<IFooterContent>) {
  return (
    <footer className={cn('dn-footer-content', 'bg-black text-white py-2.5 lg:pt-20 lg:pb-[120px]')}>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 mb-20 lg:col-span-3 lg:mb-0">
          <div className="size-10 bg-accents-red lg:size-[38.88px]" />
        </div>
        <div
          className={cn(
            'dn-footer__content',
            'col-span-12 lg:col-span-5 lg:max-w-[445px]',
            'flex flex-col gap-[50px] lg:gap-20',
          )}
        >
          <Title order={2} className="dn-footer__content__title font-m-h1 lg:font-h2 text-m-h1 lg:text-h2">
            {LANG.footerTitle}
          </Title>
          <Button type="primary" handleClick={handleRegister} className="w-fit">
            {LANG.registerButton}
          </Button>
        </div>
      </div>
    </footer>
  )
}
