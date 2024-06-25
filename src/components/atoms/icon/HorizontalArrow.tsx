import type { IconProps } from './icon.type'

export default function HorizontalArrow({ className, width = 38, height = 38 }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      className={className}
    >
      <path
        d="M37.8477 19.109L19.1569 37.7998L16.1925 34.8307L29.8167 21.2065L-7.25317e-07 21.2065L-9.08684e-07 17.0115L29.8167 17.0115L16.1925 3.38729L19.1569 0.418212L37.8477 19.109Z"
        fill="currentColor"
      />
    </svg>
  )
}
