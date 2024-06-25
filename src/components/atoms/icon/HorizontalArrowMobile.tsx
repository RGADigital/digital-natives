import type { IconProps } from './icon.type'

export default function HorizontalArrowMobile({ className, width = 19, height = 19 }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      className={className}
    >
      <path
        d="M18.8281 9.25225L9.79814 18.2822L8.36595 16.8478L14.9482 10.2656L0.542968 10.2656L0.542968 8.23891L14.9482 8.23891L8.36595 1.65671L9.79814 0.222272L18.8281 9.25225Z"
        fill="currentColor"
      />
    </svg>
  )
}
