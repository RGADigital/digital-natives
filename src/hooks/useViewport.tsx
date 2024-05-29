import { em } from '@mantine/core'
import { useMediaQuery, useOrientation, useViewportSize } from '@mantine/hooks'

import { BREAKPOINTS } from '@/utils/theme/container'

interface Props {
  maxWidth?: number
  maxHeight?: number
}

export default function useViewport({ maxWidth, maxHeight }: Readonly<Props>) {
  const { height: viewportHeight, width: viewportWidth } = useViewportSize()
  const { type } = useOrientation()

  const isMobile = useMediaQuery(`(max-width: ${em(BREAKPOINTS.md)})`)
  // Convert VH to Pixel with optional width constraint
  const vhToPx = (vh: number) => {
    const height = maxHeight && viewportHeight > maxHeight ? maxHeight : viewportHeight
    return (vh / 100) * height
  }
  // Convert VW to Pixel with optional width constraint
  const vwToPx = (vw: number) => {
    const width = maxWidth && viewportWidth > maxWidth ? maxWidth : viewportWidth
    return (vw / 100) * width
  }

  const isLandscape = type === 'landscape-primary'
  const isPortrait = type === 'portrait-primary'

  return {
    isMobile,
    viewportHeight,
    viewportWidth,
    vhToPx,
    vwToPx,
    isSmallLandscape: isLandscape && isMobile,
    isSmallPortrait: isPortrait && isMobile,
  }
}
