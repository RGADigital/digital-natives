import cn from '@/utils/cn'

interface Props {
  mode?: 'dark' | 'light'
}
export default function SectionDivider({ mode = 'light' }: Readonly<Props>) {
  return (
    <div
      className={cn('dn-section-divider', 'border-y-1', 'h-2', {
        'border-y-neutrals-beige': mode === 'light',
        'border-y-neutrals-cool-gray': mode === 'dark',
      })}
    ></div>
  )
}
