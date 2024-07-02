import { Text } from '@mantine/core'

import cn from '@/utils/cn'

export interface IContent {
  description?: string
  gradientClassName?: string
  no?: string
  title?: string
}

export const ParagraphOlLiContent = ({ description, gradientClassName, no, title }: IContent) => {
  return (
    <li className={cn('dn-paragraph-content__li', 'col-span-12 lg:col-span-4 lg:h-full')}>
      <div className="flex flex-col">
        {/* START: number */}
        <div className={cn('relative', {})}>
          <div className={cn('absolute bottom-0 left-0', 'w-full h-6', 'mix-blend-multiply', gradientClassName)}></div>
          <Text className="lg:font-h1 text-[60px] font-normal leading-[64.2px] lg:text-h1">{no}</Text>
        </div>
        {/* END: number */}
        {/* START: content */}
        <Text className="font-m-h3 my-5 text-m-h3 lg:mt-4 lg:text-[28px] lg:leading-[29.96px]">{title}</Text>
        <Text component="p" className="font-m-body lg:font-body text-m-body lg:text-body">
          {description}
        </Text>
        {/* END: content */}
      </div>
    </li>
  )
}

interface IParagraphOlContent {
  content?: IContent[]
}
export default function ParagraphOlContent({ content }: Readonly<IParagraphOlContent>) {
  return (
    <ul className="grid grid-cols-12 lg:gap-5">
      {Array.isArray(content) &&
        content?.map(({ no, description, title, gradientClassName }) => (
          <ParagraphOlLiContent
            key={no}
            no={no}
            description={description}
            title={title}
            gradientClassName={gradientClassName}
          />
        ))}
    </ul>
  )
}
