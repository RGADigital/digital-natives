import Image from 'next/image'
import { Container, Text, Title } from '@mantine/core'

import cn from '@/utils/cn'

export default function ComingSoon() {
  return (
    <Container className={cn('dn-mailchimp-form', 'pt-10 lg:pt-15')}>
      <Image src="rga.svg" alt="logo" width={64} height={64} />

      <Title order={1} className="mb-2 uppercase tracking-widest text-black">
        Coming Soon
      </Title>
      <Text className="mb-2 leading-4 ">
        Something great is on the way. <br /> Sign up to be the first to know when we launch.
      </Text>
    </Container>
  )
}
