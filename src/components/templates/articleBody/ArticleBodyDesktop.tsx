import { useRef } from 'react'
import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import MicroDetail from '@/atoms/microDetail/MicroDetail'

import type { ArticleBodyProps } from './ArticleBody.type'

export default function ArticleBodyDesktop({
  title,
  menu,
  content,
  activeStatus,
  nextSection: NextSection,
}: Readonly<ArticleBodyProps>) {
  // track active status then highlight the sidebar
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className={cn('dn-article-body--desktop', 'container mx-auto')}>
      <div className={cn('dn-section', 'sticky grid w-full grid-cols-12  bg-white z-30 top-[70px]')}>
        <div className={cn('dn-section__title', 'col-span-12 lg:col-span-8')}>
          <Title order={1} className="lg:!max-w-2/3 pb-6 text-m-h1 text-black lg:!text-h1 ">
            {title}
          </Title>
        </div>
        <div className="col-span-12 mr-[1px] h-[1px] bg-black"></div>
      </div>
      {/* START: content */}
      <div
        className={cn('dn-section__article', 'grid w-full grid-cols-12 border-t-[1px]  bg-white pt-4 lg:pt-0')}
        ref={containerRef}
      >
        {/* START: content sidebar */}
        <div className={cn('sticky h-fit self-start z-20', 'top-[159px]', 'col-span-12 lg:col-span-3 bg-white')}>
          <div className="w-full gap-2 lg:flex lg:w-2/3 lg:flex-col lg:gap-6 lg:py-[93px]">
            {menu?.map(props => {
              const { label, href, key, color } = props || {}
              if (!label) return null

              const isActive = activeStatus?.[`isInView${key}`] ? activeStatus[`isInView${key}`] : false
              return (
                <a
                  href={href}
                  key={key}
                  className={cn('dn-section__article__sidebar-item', {
                    'dn-section__article__sidebar-item--active': isActive,
                    'dn-section__article__sidebar-item--inactive': !isActive,
                  })}
                >
                  <MicroDetail
                    text={label}
                    color={color}
                    boxClassName={cn('lg:size-[10px]')}
                    containerClassName={cn('lg:gap-[3.02px]')}
                    textClassName={cn('capitalize', {
                      'text-black': isActive,
                    })}
                  />
                </a>
              )
            })}
          </div>
        </div>
        {/* END: content sidebar */}
        {/* START: content body */}
        <div className="dn-section__article__body col-span-12 border-l-[1px] border-l-black lg:col-span-9">
          {content &&
            Object.values(content).map(({ ref, Component: Section, id }) => {
              return (
                <div ref={ref} id={id} key={id} className="scroll-mt-[150px]">
                  {Section}
                </div>
              )
            })}
          {NextSection}
        </div>
        {/* END: content body */}
      </div>
      {/* END: content */}
    </div>
  )
}
