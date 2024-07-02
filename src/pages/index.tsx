import useViewport from '@/hooks/useViewport'

import { Body as BodyExecutiveSummary } from '@/organisms/executiveSummary/index'
import { ArticlePageTemplate } from '@/templates/index'

export default function ExecutiveSummary() {
  const { isMobile } = useViewport({})

  return (
    <ArticlePageTemplate>
      <BodyExecutiveSummary isMobile={isMobile} />
    </ArticlePageTemplate>
  )
}
