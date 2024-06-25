import cn from '@/utils/cn'

export interface IColoredBox {
  className?: string
  color?: 'blue' | 'cyan' | 'red' | 'yellow' | 'magenta' | 'grey'
}

export default function ColoredBox({ className, color }: Readonly<IColoredBox>) {
  return (
    <div
      className={cn(
        'dn-colored-box',
        {
          'bg-accents-yellow': color === 'yellow',
          'bg-[#01FFFF]': color === 'cyan',
          'bg-accents-pink': color === 'magenta',
          'bg-accents-blue': color === 'blue',
          'bg-[#E40004]': color === 'red',
          'bg-cool-gray-1': color === 'grey',
        },
        className,
      )}
    ></div>
  )
}
