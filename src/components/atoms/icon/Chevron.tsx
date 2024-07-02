interface Props {
  className?: string
  color?: string
  width?: number | `${number}px`
  height?: number | `${number}px`
}

export default function Chevron({ className, width = 19, height = 19, color = '#141517' }: Readonly<Props>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.18891 6.56513C4.49807 6.25596 4.99933 6.25596 5.30849 6.56513L9.4987 10.7553L13.6889 6.56513C13.9981 6.25596 14.4993 6.25596 14.8085 6.56513C15.1177 6.87429 15.1177 7.37555 14.8085 7.68471L10.0585 12.4347C9.74933 12.7439 9.24807 12.7439 8.9389 12.4347L4.18891 7.68471C3.87974 7.37555 3.87974 6.87429 4.18891 6.56513Z"
        fill={color}
      />
    </svg>
  )
}
