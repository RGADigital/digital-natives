interface Props {
  width?: number | `${number}`
  height?: number | `${number}`
  fill?: string
}

export default function ScrollDown({ width = 24, height = 24, fill = '#FF00FF' }: Readonly<Props>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M12.14 23.97L11.89 23.72L3 14.79L4.64 13.14L4.89 13.39L10.98 19.51V1H13.3V19.5L19.63 13.14L21.27 14.79L21.03 15.04L12.14 23.98V23.97Z"
        fill={fill}
      />
    </svg>
  )
}
