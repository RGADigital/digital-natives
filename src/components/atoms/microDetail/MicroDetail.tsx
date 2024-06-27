import { Text } from '@mantine/core'

import cn from '@/utils/cn'

import { ColoredBox, type IColoredBox } from '@/atoms/coloredBox'

interface IMicroDetail {
  color?: IColoredBox['color']
  containerClassName?: string
  boxClassName?: string
  text?: string
  textClassName?: string
  isCircle?: boolean
}

export default function MicroDetail({
  boxClassName,
  color = 'magenta',
  containerClassName,
  text,
  isCircle,
  textClassName,
}: Readonly<IMicroDetail>) {
  return (
    <div className={cn('dn-micro-detail z-20 flex items-center gap-[9px]', containerClassName)}>
      <ColoredBox
        color={color}
        className={cn(
          '!size-[11px] shrink-0',
          {
            'rounded-lg': isCircle,
          },
          boxClassName,
        )}
      />
      {text && (
        <Text className={cn('!text-m-eyebrow lg:!text-eyebrow', 'uppercase', textClassName)} component="p">
          {text}
        </Text>
      )}
    </div>
  )
}
