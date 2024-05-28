import { Text } from '@mantine/core'

import cn from '@/utils/cn'

export default function Footer() {
  return (
    <footer className={cn('dn-footer', 'mt-20 lg:mt-[120px] pb-5 lg:pb-[120px]')}>
      <Text className={cn('!text-disclaimer', 'text-neutrals-cool-gray-5', 'lg:!w-1/3')}>
        {`By providing the above information to R/GA Media Group, Inc. ("R/GA"), you authorize R/GA to collect and use the
        data in order to: download content, communicate with you about R/GA's services, news, and R/GA events that may
        be of interest to you, and to store and transmit the data for these purposes, directly or through third-party
        vendors, whether within your country of residence or elsewhere. You may unsubscribe from these communications at
        any time.
      `}
      </Text>
    </footer>
  )
}
