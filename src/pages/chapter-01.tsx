import useViewport from '@/hooks/useViewport'

import { Body as BodyChapterOne } from '@/organisms/chapterOne/index'
import { ArticlePageTemplate } from '@/templates/index'

export default function ChapterOne() {
  const { isMobile } = useViewport({})

  return (
    <ArticlePageTemplate>
      <BodyChapterOne isMobile={isMobile} />
    </ArticlePageTemplate>
  )
}
