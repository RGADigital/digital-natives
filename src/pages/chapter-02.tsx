import useViewport from '@/hooks/useViewport'

import { Body as BodyChapterTwo } from '@/organisms/chapterTwo/index'
import { ArticlePageTemplate } from '@/templates/index'

export default function ChapterTwo() {
  const { isMobile } = useViewport({})

  return (
    <ArticlePageTemplate>
      <BodyChapterTwo isMobile={isMobile} />
    </ArticlePageTemplate>
  )
}
