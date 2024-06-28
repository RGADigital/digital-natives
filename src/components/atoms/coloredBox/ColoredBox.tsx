import cn from '@/utils/cn'

export interface IColoredBox {
  className?: string
  color?: 'blue' | 'cyan' | 'red' | 'yellow' | 'magenta' | 'pink' | 'grey' | 'green'
}

export default function ColoredBox({ className, color }: Readonly<IColoredBox>) {
  return (
    <div
      className={cn(
        'dn-colored-box',
        {
          'bg-accents-yellow': color === 'yellow',
          'bg-[#01FFFF]': color === 'cyan',
          'bg-accents-green': color === 'green',
          'bg-accents-pink': color === 'magenta' || color === 'pink',
          'bg-accents-blue': color === 'blue',
          'bg-[#E40004]': color === 'red',
          'bg-neutrals-cool-gray-1': color === 'grey',
        },
        className,
      )}
    ></div>
  )
}
