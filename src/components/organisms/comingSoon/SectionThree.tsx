import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import MicroDetail from '@/atoms/microDetail/MicroDetail'
import Footer from '@/organisms/footer/Footer'
import RegisterForm from '@/organisms/form/RegisterForm'

export default function SectionThree() {
  return (
    <section className={cn('dn-section-wrapper', 'bg-white', 'pt-[95px] lg:pt-[132px] pb-[41px] lg:pb-4 ')}>
      <div className="container mx-auto">
        <MicroDetail text="03/03" className="text-black" />
        <div className="dp-section grid grid-cols-12 lg:pb-[120px]">
          <div className="dp-section__left lg:!max-w-2/3 col-span-12 lg:col-span-8">
            <Title order={1} className="text-m-h1 text-black lg:!text-h1">
              New research has revealed that when we create experiences for Gen One – we improve technology for
              everyone.
            </Title>
          </div>
          <div
            className={cn('dp-section__right', 'col-span-12 lg:col-span-4', 'flex lg:justify-end', 'mt-[37px] lg:mt-0')}
          >
            {/* space for blob */}
          </div>
        </div>

        <RegisterForm />
      </div>

      <Footer />
    </section>
  )
}
