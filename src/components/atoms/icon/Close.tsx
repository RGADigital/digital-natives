import type { IconProps } from './icon.type'

export default function CloseIcon({ width, height, className = 'text-black' }: Readonly<IconProps>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="11.5" transform="rotate(90 12 12)" stroke="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 12.6527L15.9164 16.569L16.5691 15.9163L12.6528 12L16.5691 8.08372L15.9164 7.431L12.0001 11.3473L8.08379 7.431L7.43107 8.08371L11.3474 12L7.43107 15.9163L8.08379 16.569L12.0001 12.6527Z"
        fill="currentColor"
      />
    </svg>
  )
}
