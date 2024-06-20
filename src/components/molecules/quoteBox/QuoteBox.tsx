import { Text } from '@mantine/core'

import cn from '@/utils/cn'

import { ColoredBox } from '@/atoms/index'

export interface IQuoteBox {
  edgeBoxClassName?: string
  edgeColor?: 'blue' | 'cyan' | 'red' | 'yellow' | 'magenta'
  quote?: string
  author?: string
  wrapperClassName?: string
}

export default function QuoteBox({
  edgeBoxClassName,
  edgeColor = 'blue',
  quote,
  author,
  wrapperClassName,
}: Readonly<IQuoteBox>) {
  return (
    <blockquote
      className={cn(
        'dn-quote-box',
        'relative',
        'flex flex-col justify-between gap-6',
        'p-5 m-5',
        'border border-black',
        wrapperClassName,
      )}
    >
      {/* START: edge */}
      <ColoredBox
        color={edgeColor}
        className={cn('absolute', '-top-[5.07px] -left-[6px] ', 'size-[13px]', 'border border-black', edgeBoxClassName)}
      />
      <ColoredBox
        color={edgeColor}
        className={cn(
          'absolute',
          '-bottom-[4.93px] -left-[6px] ',
          'size-[13px]',
          'border border-black',
          edgeBoxClassName,
        )}
      />
      <ColoredBox
        color={edgeColor}
        className={cn(
          'absolute',
          '-top-[5.07px] -right-[6px] ',
          'size-[13px]',
          'border border-black',
          edgeBoxClassName,
        )}
      />
      <ColoredBox
        color={edgeColor}
        className={cn(
          'absolute',
          '-bottom-[4.93px] -right-[6px] ',
          'size-[13px]',
          'border border-black',
          edgeBoxClassName,
        )}
      />
      {/* END: edge */}
      <Text component="p" className="font-m-quote lg:font-quote text-m-quote italic text-black lg:text-quote">
        {`${quote}`}
      </Text>
      <Text component="footer" className="font-m-body lg:font-body text-m-body lg:text-body">
        {author}
      </Text>
    </blockquote>
  )
}
