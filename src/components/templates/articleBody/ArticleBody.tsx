import type { ArticleBodyProps } from './ArticleBody.type'
import ArticleBodyDesktop from './ArticleBodyDesktop'
import ArticleBodyMobile from './ArticleBodyMobile'

// TODO[pops]: deprecate this

export default function ArticleBody(props: Readonly<ArticleBodyProps>) {
  if (props.isMobile) {
    return <ArticleBodyMobile {...props} />
  }

  return <ArticleBodyDesktop {...props} />
}
