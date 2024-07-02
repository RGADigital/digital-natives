import type { IconProps } from './icon.type'

export default function Checked({ width = '18', height = '18', className, onClick }: Readonly<IconProps>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.92 16L15.6 17.32L9.66399 11.384L3.72799 17.32L2.40799 16L8.34399 10.064L2.39999 4.12005L3.71999 2.80005L9.65599 8.73605L15.6 2.80005L16.92 4.12005L10.984 10.056L16.92 15.992V16Z"
        fill="#FF00FF"
      />
    </svg>
  )
}
