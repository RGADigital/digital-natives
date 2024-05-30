import cn from '@/utils/cn'

import { type ITwoColumnStat, TWO_COLUMN_STAT } from './TwoColumnStat.type'

interface Props {
  type?: ITwoColumnStat
  id?: string
  isMobile?: boolean
  isInView?: boolean
  columnRef?: React.RefObject<HTMLDivElement>
  titleContent: React.ReactNode
  textContent: React.ReactNode
  statContent: React.ReactNode
}

export default function TwoColumnStatTemplate({
  type = TWO_COLUMN_STAT.textLeft,
  id,
  isMobile,
  isInView,
  statContent,
  titleContent,
  textContent,
  columnRef,
}: Readonly<Props>) {
  return (
    <div
      className={cn('pt-8', {
        'dn-two-column-stat': true,
        'dn-two-column-stat--text-right': type === TWO_COLUMN_STAT.textRight,
        'dn-two-column-stat--text-left': type === TWO_COLUMN_STAT.textLeft,
        'border-b-[1px] border-b-black': !isMobile,
      })}
      ref={columnRef as React.RefObject<HTMLDivElement>}
      id={id}
      style={{
        opacity: isInView ? 1 : 0.7,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <div className="grid w-full grid-cols-12">{titleContent}</div>
      <div className="dn-two-column-stat__content grid w-full grid-cols-12 ">
        <div
          className={cn('dn-two-column-stat__text-content', 'col-span-12 lg:col-span-9', {
            'order-last lg:border-l-2 lg:pl-6': type === TWO_COLUMN_STAT.textRight,
            'lg:ml-6 lg:border-r-2': type === TWO_COLUMN_STAT.textLeft,
          })}
        >
          {textContent}
        </div>
        <div
          className={cn('dn-two-column-stat__stat-content', 'col-span-12 mb-12 mt-6 lg:my-0  lg:col-span-3', {
            'order-first': type === TWO_COLUMN_STAT.textRight,
          })}
        >
          {statContent}
        </div>
      </div>
    </div>
  )
}
