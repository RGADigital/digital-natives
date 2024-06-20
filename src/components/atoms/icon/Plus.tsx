import type { IconProps } from './icon.type'

export default function Plus({ width, height, className }: Readonly<IconProps>) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12.5" r="11.5" stroke="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4615 12.0385V6.5H11.5385V12.0385H6V12.9615H11.5385V18.5H12.4615V12.9615H18V12.0385H12.4615Z"
        fill="currentColor"
      />
    </svg>
  )
}
