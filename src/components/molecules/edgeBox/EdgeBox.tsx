import cn from '@/utils/cn'

import { ColoredBox, type IColoredBox } from '@/atoms/index'

export interface IEdgeBox {
  avatar?: string
  children?: React.ReactNode
  edgeBoxClassName?: string
  edgeColor?: IColoredBox['color']
  quote?: string
  author?: string
  wrapperClassName?: string
}

export default function EdgeBox({
  children,
  edgeBoxClassName,
  edgeColor = 'blue',
  wrapperClassName,
}: Readonly<IEdgeBox>) {
  return (
    <blockquote
      className={cn(
        'dn-quote-box',
        'relative',
        'flex flex-col justify-between gap-[26.5px]',
        'p-5 m-1 lg:m-5',
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
      {children}
    </blockquote>
  )
}
