import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import { DefinitionBox, type IDefinitionBox } from '@/molecules/index'

interface Props {
  definitionContent?: IDefinitionBox[]
  isMobile?: boolean
}
export default function DefinitionContent({ definitionContent, isMobile }: Readonly<Props>) {
  return (
    <div className={cn('dn-definition-content flex flex-col', { 'gap-[46px]': isMobile })}>
      <Title
        order={3}
        className={cn(
          'lg:text-subheading lg:font-subheading',
          'border-b border-neutrals-cool-gray-0',
          'lg:pl-5 lg:pt-5 lg:pb-[70px]',
          { hidden: isMobile },
        )}
      >
        Definitions
      </Title>
      {definitionContent?.map((content, idx) => (
        <div
          key={content.terms}
          className={cn('border-t border-neutrals-cool-gray-0', {
            'border-0': idx === 0 || isMobile,
          })}
        >
          <DefinitionBox {...content} />
        </div>
      ))}
    </div>
  )
}
