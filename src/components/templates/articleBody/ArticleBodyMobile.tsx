import { Accordion, Title } from '@mantine/core'

import cn from '@/utils/cn'

import Chevron from '@/atoms/icon/Chevron'
import MicroDetail from '@/atoms/microDetail/MicroDetail'

import type { ArticleBodyProps } from './ArticleBody.type'

export default function ArticleBodyMobile({ title, chapterTitle, menu, content }: Readonly<ArticleBodyProps>) {
  return (
    <div className={cn('dn-article-body--mobile', 'container mx-auto flex flex-col gap-[30px] py-10')}>
      {chapterTitle && <MicroDetail text={chapterTitle} />}
      <Title order={1} className="lg:!max-w-2/3 !text-m-h1 text-black lg:!text-h1 ">
        {title}
      </Title>
      <div className="dn-article-body__content">
        {menu?.length > 0 && (
          <Accordion defaultValue={menu?.[0]?.key} chevron={<Chevron />}>
            {menu.map(item => {
              const { label, href, sectionName = '', key = '', color = 'grey' } = item || {}
              if (!label || !href) return null

              return (
                <Accordion.Item key={href} value={key}>
                  <Accordion.Control>
                    <MicroDetail text={label} isCircle color={color} />
                  </Accordion.Control>
                  <Accordion.Panel>{content?.[sectionName]?.Component}</Accordion.Panel>
                </Accordion.Item>
              )
            })}
          </Accordion>
        )}
      </div>
    </div>
  )
}
