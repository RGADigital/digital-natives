import { AppConfig } from '@/utils/AppConfig'

import { Meta } from '@/globals/index'

import { Footer } from './Footer'
import { Hero } from './Hero'
import { MailChimp } from './MailChimp'
import { VerticalFeatures } from './VerticalFeatures'

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {/* <Sponsors /> */}
    <VerticalFeatures />
    {/* <Banner /> */}
    <MailChimp />
    <Footer />
  </div>
)

export { Base }
