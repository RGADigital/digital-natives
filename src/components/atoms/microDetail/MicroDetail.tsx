import { Text } from '@mantine/core'

import cn from '@/utils/cn'

interface Props {
  text?: string
  className?: string
}

export default function MicroDetail({ text, className }: Readonly<Props>) {
  return (
    <div className="dn-micro-detail flex gap-[9px]">
      <div className="mt-1 !size-[11px] shrink-0 bg-pink-600"></div>
      {text && (
        <Text
          className={cn(
            'text-[10px] lg:text-[14px]',
            'leading-3 lg:leading-[16.8px] -tracking-[0.5px] lg:-tracking-[0.7px]',
            'font-normal',
            'uppercase',
            className,
          )}
          component="p"
        >
          {text}
        </Text>
      )}
    </div>
  )
}
