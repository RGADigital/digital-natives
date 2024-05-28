import { useViewportSize } from '@mantine/hooks'

interface Props {
  maxWidth?: number
  maxHeight?: number
}

export default function useViewport({ maxWidth, maxHeight }: Readonly<Props>) {
  const { height: viewportHeight, width: viewportWidth } = useViewportSize()
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

  return {
    viewportHeight,
    viewportWidth,
    vhToPx,
    vwToPx,
  }
}
