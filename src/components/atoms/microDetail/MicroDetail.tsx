import { Text } from '@mantine/core'

import cn from '@/utils/cn'

interface Props {
  containerClassName?: string
  boxClassName?: string
  text?: string
  textClassName?: string
}

export default function MicroDetail({ boxClassName, containerClassName, text, textClassName }: Readonly<Props>) {
  return (
    <div className={cn('dn-micro-detail z-20 flex items-center gap-[9px]', containerClassName)}>
      <div className={cn('!size-[11px] shrink-0', 'bg-accents-pink', boxClassName)}></div>
      {text && (
        <Text className={cn('text-m-eyebrow lg:text-eyebrow', 'uppercase', textClassName)} component="p">
          {text}
        </Text>
      )}
    </div>
  )
}
