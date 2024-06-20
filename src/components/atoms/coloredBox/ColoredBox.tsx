import cn from '@/utils/cn'

interface IColoredBox {
  className?: string
  color?: 'blue' | 'cyan' | 'red' | 'yellow' | 'magenta'
}

export default function ColoredBox({ className, color }: Readonly<IColoredBox>) {
  return (
    <div
      className={cn(
        'dn-colored-box',
        {
          'bg-[#FFFF00]': color === 'yellow',
          'bg-[#01FFFF]': color === 'cyan',
          'bg-[#FF00FF]': color === 'magenta',
          'bg-[#0000FF]': color === 'blue',
          'bg-[#E40004]': color === 'red',
        },
        className,
      )}
    ></div>
  )
}
