import Image from 'next/image'
import { Text } from '@mantine/core'

import cn from '@/utils/cn'

import { type IColoredBox } from '@/atoms/index'

import EdgeBox from './EdgeBox'

export interface IQuoteBox {
  avatar?: string
  edgeBoxClassName?: string
  edgeColor?: IColoredBox['color']
  quote?: string
  author?: string
  textClassName?: string
  wrapperClassName?: string
}

export default function QuoteBox({
  avatar,
  edgeBoxClassName,
  edgeColor = 'blue',
  quote,
  author,
  textClassName,
  wrapperClassName,
}: Readonly<IQuoteBox>) {
  return (
    <EdgeBox edgeColor={edgeColor} edgeBoxClassName={edgeBoxClassName} wrapperClassName={wrapperClassName}>
      {avatar && (
        <Image width={63} height={63} loading="lazy" className="pulse" src={avatar} alt={`avatar of ${author}`} />
      )}
      <Text
        component="p"
        className={cn(
          'italic text-black ',
          'flex-grow',
          {
            'font-m-quote lg:font-quote text-m-quote lg:text-quote': avatar,
            'font-m-quote text-m-quote lg:text-[22px] lg:leading-[26.4px]': !avatar,
          },
          textClassName,
        )}
      >
        {`${quote}`}
      </Text>
      <Text component="footer" className="font-m-body lg:font-body text-m-body lg:text-body">
        {author}
      </Text>
    </EdgeBox>
  )
}
