import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import { DefinitionBox, type IDefinitionBox } from '@/molecules/index'

interface Props {
  definitionContent?: IDefinitionBox[]
}
export default function DefinitionContent({ definitionContent }: Readonly<Props>) {
  return (
    <div className="dn-definition-content flex min-h-[167px] flex-col">
      <Title
        order={3}
        className={cn('lg:text-subheading lg:font-subheading', 'border-b border-neutrals-cool-gray-0', 'lg:pb-[70px]')}
      >
        Definitions
      </Title>
      {definitionContent?.map(content => <DefinitionBox key={content.terms} {...content} />)}
    </div>
  )
}
