// Not using mantine accordion component
// Reason: create sticky accordion header

import React, { useEffect, useState } from 'react'
import { Title } from '@mantine/core'

import cn from '@/utils/cn'

import Chevron from '@/atoms/icon/Chevron'
import MicroDetail from '@/atoms/microDetail/MicroDetail'

import type { ArticleBodyProps } from './ArticleBody.type'

export default function ArticleBodyMobile({
  title,
  chapterTitle,
  menu,
  content,
  nextSection: NextSection,
}: Readonly<ArticleBodyProps>) {
  const [activeSection, setActiveSection] = useState(menu?.[0]?.sectionName)

  const changeSection = (sectionName?: string) => {
    const nextActiveSection = sectionName === activeSection ? '' : sectionName
    setActiveSection(nextActiveSection)
  }

  useEffect(() => {
    // reset scroll when accordion change
    if (activeSection) {
      const el = document.getElementById(activeSection)
      if (el) {
        el.scrollIntoView()
      }
    }
  }, [activeSection])

  if (!menu?.length || !Array.isArray(menu)) return null
  return (
    <div className={cn('dn-article-body--mobile container mx-auto flex flex-col pt-10 pb-[30.69px]')}>
      {chapterTitle && <MicroDetail text={chapterTitle} />}
      <div className={cn('bg-neutrals-cream', 'mt-1 -mx-5 px-5', 'pt-[25px] pb-[30px]')}>
        <Title order={1} className={cn('!font-m-h1 !text-m-h1 text-black ')}>
          {title}
        </Title>
      </div>
      <div className="dn-article-body__content">
        {menu?.length > 0 && (
          <div className="flex w-full flex-col">
            {menu.map(item => {
              const { label, href, color = 'grey', sectionName } = item || {}
              if (!label || !href) return null

              const isActive = sectionName === activeSection
              return (
                <React.Fragment key={href}>
                  <button
                    key={href}
                    className={cn(
                      'flex justify-between w-[calc(100%_+_40px)]',
                      'bg-neutrals-cream border-b border-neutrals-beige',
                      {
                        'z-40 sticky top-[78px]': true,
                      },
                      ' -mx-5 px-5 pt-[17px] pb-4',
                    )}
                    onClick={() => changeSection(sectionName)}
                  >
                    <MicroDetail
                      text={label}
                      isCircle
                      color={isActive ? color : 'grey'}
                      textClassName="capitalize !font-m-nav !text-m-nav"
                      boxClassName="!size-3"
                    />
                    <Chevron className={cn('transform duration-300 ease-in-out', { 'rotate-180': isActive })} />
                  </button>

                  {sectionName && (
                    <div
                      id={content?.[sectionName]?.id}
                      className={cn(
                        'dn-section__article__body ',
                        'scroll-m-[140px] transition-all duration-400 ease-in',
                        { hidden: !isActive },
                      )}
                    >
                      {content?.[sectionName]?.Component}
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>
        )}
        {NextSection}
      </div>
    </div>
  )
}
