import { Text } from '@mantine/core'

import cn from '@/utils/cn'

import { MicroDetail } from '@/atoms/index'

export default function ParagraphUlContent({ point, content }: Readonly<{ point: string; content: string }>) {
  return (
    <li
      key={point}
      className={cn('col-span-12 lg:col-span-6 ', 'flex flex-col', {
        'lg:!min-h-[187px]': true,
        'mt-5 lg:mr-5 lg:mt-5': true,
      })}
    >
      <MicroDetail
        boxClassName="!size-2 mt-1"
        color="red"
        text={point}
        textClassName="capitalize font-m-body lg:font-nav text-m-body lg:text-nav !font-normal"
        containerClassName="items-start"
      />
      <Text component="p" className="font-m-body lg:font-nav mt-5 text-m-body !font-normal lg:text-nav">
        {content}
      </Text>
    </li>
  )
}
