import type { IconProps } from './icon.type'

export default function HorizontalArrowScroll({ className, width = 16, height = 12 }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      className={className}
    >
      <path d="M0 6.23828H15M15 6.23828L8.5 1.23828M15 6.23828L8.5 11.2383" stroke="currentColor" />
    </svg>
  )
}
