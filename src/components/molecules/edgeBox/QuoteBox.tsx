import Image from 'next/image'
import { Text } from '@mantine/core'

import { type IColoredBox } from '@/atoms/index'

import EdgeBox from './EdgeBox'

export interface IQuoteBox {
  avatar?: string
  edgeBoxClassName?: string
  edgeColor?: IColoredBox['color']
  quote?: string
  author?: string
  wrapperClassName?: string
}

export default function QuoteBox({
  avatar,
  edgeBoxClassName,
  edgeColor = 'blue',
  quote,
  author,
  wrapperClassName,
}: Readonly<IQuoteBox>) {
  return (
    <EdgeBox edgeColor={edgeColor} edgeBoxClassName={edgeBoxClassName} wrapperClassName={wrapperClassName}>
      {avatar && (
        <Image width={63} height={63} loading="lazy" className="pulse" src={avatar} alt={`avatar of ${author}`} />
      )}
      <Text component="p" className="font-m-quote lg:font-quote text-m-quote italic text-black lg:text-quote">
        {`${quote}`}
      </Text>
      <Text component="footer" className="font-m-body lg:font-body text-m-body lg:text-body">
        {author}
      </Text>
    </EdgeBox>
  )
}
