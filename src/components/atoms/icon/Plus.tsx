import type { IconProps } from './icon.type'

export default function Plus({ width, height, className }: Readonly<IconProps>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1606_6250)">
        <circle
          cx="16"
          cy="16"
          r="15.3333"
          transform="rotate(90 16 16)"
          fill="black"
          stroke="black"
          strokeWidth="1.33333"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.385 16.6155L15.385 23.9996L16.6158 23.9996L16.6158 16.6155L24.001 16.6155L24.001 15.3848L16.6158 15.3848L16.6158 7.99959L15.385 7.99959L15.385 15.3848L8.00098 15.3848L8.00098 16.6155L15.385 16.6155Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1606_6250">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
