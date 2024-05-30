import useViewport from '@/hooks/useViewport'

import IntroDesktop from './IntroDesktop'
import IntroMobile from './IntroMobile'
import { MAX_HEIGHT_IN_PX, MAX_WIDTH_IN_PX } from './introSection.constant'

interface Props {
  handleRegister: () => void
}

export default function IntroSection({ handleRegister }: Readonly<Props>) {
  const { isSmallLandscape, isMobile } = useViewport({ maxHeight: MAX_HEIGHT_IN_PX, maxWidth: MAX_WIDTH_IN_PX })

  if (!isMobile) {
    return <IntroDesktop handleRegister={handleRegister} />
  }

  if (isSmallLandscape) {
    return <IntroDesktop handleRegister={handleRegister} />
  }

  return <IntroMobile handleRegister={handleRegister} />
}
