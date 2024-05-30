interface Props {
  className?: string
  height?: number | `${number}px`
  fill?: string
  width?: number | `${number}px`
}

export default function HorizontalArrow({ className, width = 22, height = 23, fill = 'black' }: Readonly<Props>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 23"
      fill="none"
      className={className}
    >
      <path
        d="M19.9102 13.5776L10.8802 22.6075L9.44798 21.1731L16.0302 14.5909L1.625 14.5909L1.625 12.5642L16.0302 12.5642L9.44798 5.98203L10.8802 4.54759L19.9102 13.5776Z"
        fill={fill}
      />
    </svg>
  )
}
