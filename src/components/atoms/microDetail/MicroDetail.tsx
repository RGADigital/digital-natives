import { Text } from '@mantine/core'

import cn from '@/utils/cn'

interface Props {
  boxClassName?: string
  text?: string
  textClassName?: string
}

export default function MicroDetail({ boxClassName, text, textClassName }: Readonly<Props>) {
  return (
    <div className="dn-micro-detail z-20 flex items-center gap-[9px]">
      <div className={cn('!size-[11px] shrink-0', 'bg-accents-pink', boxClassName)}></div>
      {text && (
        <Text
          className={cn(
            'text-[10px] lg:text-[14px]',
            'leading-3 lg:leading-[16.8px] -tracking-[0.5px]',
            'font-normal',
            'uppercase',
            textClassName,
          )}
          component="p"
        >
          {text}
        </Text>
      )}
    </div>
  )
}
