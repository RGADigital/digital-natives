import cn from '@/utils/cn'

import { TWO_COLUMN_POSITION } from '@/templates/twoColumnTemplate'

import type { IStatContent, TwoColumnStatTextProps } from './TwoColumnStatText.type'

export default function StatContent({
  isMobile,
  statContent,
  type,
}: Readonly<{
  statContent?: IStatContent[]
  type: TwoColumnStatTextProps['type']
  isMobile?: boolean
}>) {
  return (
    <>
      {statContent?.map(({ src, srcMobile, alt, className }) => (
        <div
          key={alt}
          className={cn('w-full', 'lg:border-b-[1px] lg:border-b-neutrals-cool-gray-0 lg:last:border-b-0', {
            'lg:pl-5': type === TWO_COLUMN_POSITION.textLeft,
            'lg:px-5': type === TWO_COLUMN_POSITION.textRight,
            'lg:py-5': true,
          })}
        >
          <img src={isMobile && srcMobile ? srcMobile : src} alt={alt} className={cn(className)} />
        </div>
      ))}
    </>
  )
}
