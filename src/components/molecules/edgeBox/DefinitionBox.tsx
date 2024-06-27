import { Text } from '@mantine/core'

import { type IColoredBox } from '@/atoms/index'

import EdgeBox from './EdgeBox'

export interface IDefinitionBox {
  avatar?: string
  edgeBoxClassName?: string
  edgeColor?: IColoredBox['color']
  terms?: string
  description?: string
  wrapperClassName?: string
}

export default function DefinitionBox({
  edgeBoxClassName,
  edgeColor = 'blue',
  terms,
  description,
  wrapperClassName,
}: Readonly<IDefinitionBox>) {
  return (
    <EdgeBox edgeColor={edgeColor} edgeBoxClassName={edgeBoxClassName} wrapperClassName={wrapperClassName}>
      <Text component="p" className="font-m-quote lg:font-quote text-m-quote !font-[700] text-black lg:text-quote">
        {`${terms}`}
      </Text>
      <Text component="footer" className="font-m-body lg:font-body text-m-body lg:text-body">
        {description}
      </Text>
    </EdgeBox>
  )
}
