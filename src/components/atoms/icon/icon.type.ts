export interface IconProps {
  className?: string
  width?: number | `${number}` | `${number}px`
  height?: number | `${number}` | `${number}px`
  fill?: string
  onClick?: (...props: any) => void
}
