import { AppConfig } from '@/utils/AppConfig'

import { Meta } from '@/globals/index'
import CountDown from '@/organisms/countdown/CountDown'

import ComingSoon from './ComingSoon'
import { MailChimp } from './MailChimp'

const Base = () => (
  <div className="flex h-screen w-full flex-col items-center justify-center bg-[#efefef] antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {/* <Hero /> */}
    {/* <Sponsors /> */}
    {/* <VerticalFeatures /> */}
    {/* <Banner /> */}

    <ComingSoon />
    <MailChimp />
    <CountDown />
    {/* <Footer /> */}
  </div>
)

export { Base }
