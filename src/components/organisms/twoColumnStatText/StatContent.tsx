import cn from '@/utils/cn'

import { TWO_COLUMN_STAT } from '@/templates/twoColumnStatText'

import type { TwoColumnStatTextProps } from './TwoColumnStatText.type'

export default function StatContent({
  isMobile,
  statContent,
  type,
}: Readonly<{
  statContent: TwoColumnStatTextProps['statContent']
  type: TwoColumnStatTextProps['type']
  isMobile?: boolean
}>) {
  return (
    <>
      {statContent?.map(({ src, srcMobile, alt, className }) => (
        <div
          key={alt}
          className={cn('w-full', 'lg:border-b-[1px] lg:border-b-neutrals-cool-gray-0 lg:last:border-b-0', {
            'lg:pl-5': type === TWO_COLUMN_STAT.textLeft,
            'lg:px-5': type === TWO_COLUMN_STAT.textRight,
            'lg:py-5': true,
          })}
        >
          <img src={isMobile && srcMobile ? srcMobile : src} alt={alt} className={cn(className)} />
        </div>
      ))}
    </>
  )
}
