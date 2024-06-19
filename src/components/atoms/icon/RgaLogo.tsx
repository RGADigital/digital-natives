interface Props {
  className?: string
  height?: number | `${number}`
  width?: number | `${number}`
  mode?: 'dark' | 'light'
}

export default function RgaLogo({ height = 83, width = 20, mode = 'light', className }: Readonly<Props>) {
  const textColor = mode === 'light' ? '#000' : 'white'
  return (
    <svg width={width} height={height} viewBox="0 0 83 20" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M17.7747 1.08691H0V18.8626H17.7747V1.08691Z" fill="#FF0000" />
      <path
        d="M21.7109 18.899V1.08871H29.8767C31.3096 1.08871 32.505 1.29925 33.4629 1.72032C34.4251 2.1414 35.1394 2.73132 35.6059 3.49009C36.0766 4.2447 36.3119 5.12646 36.3119 6.13537C36.3119 7.07341 36.1266 7.87388 35.7559 8.53676C35.3893 9.19964 34.852 9.71661 34.144 10.0877C33.44 10.4545 32.5841 10.6755 31.5761 10.7505V10.0877C32.5924 10.171 33.4109 10.367 34.0315 10.6755C34.6521 10.984 35.1144 11.4197 35.4185 11.9825C35.7267 12.5412 35.91 13.2561 35.9683 14.1275L36.1557 16.8666C36.1724 17.0834 36.1911 17.2793 36.212 17.4544C36.2369 17.6295 36.2682 17.7942 36.3057 17.9484C36.3473 18.1277 36.3994 18.2966 36.4619 18.455C36.5243 18.6134 36.6014 18.7614 36.693 18.899H32.707C32.5612 18.6447 32.4529 18.3487 32.3821 18.011C32.3113 17.6733 32.2655 17.2772 32.2446 16.8228L32.1697 14.9655C32.1405 14.2567 32.0322 13.7043 31.8448 13.3083C31.6574 12.908 31.3741 12.6245 30.9951 12.4578C30.6161 12.2868 30.1037 12.2014 29.4581 12.2014H23.9789V9.19964H29.5519C30.1225 9.19964 30.614 9.10584 31.0263 8.91823C31.4428 8.73062 31.7636 8.44712 31.9885 8.06774C32.2134 7.68418 32.3259 7.20891 32.3259 6.64192C32.3259 6.09577 32.2113 5.64342 31.9822 5.28488C31.7531 4.92217 31.422 4.65327 30.9888 4.47817C30.5598 4.30306 30.0392 4.21551 29.4269 4.21551H24.0289L25.597 2.64586V18.899H21.7109Z"
        fill={textColor}
      />
      <path d="M37.3758 18.899L44.7481 1.08871H48.2156L40.8433 18.899H37.3758Z" fill={textColor} />
      <path
        d="M55.727 19.3117C53.9984 19.3117 52.4927 18.9157 51.2099 18.1235C49.9312 17.3272 48.9482 16.2224 48.2609 14.8091C47.5778 13.3958 47.2363 11.7824 47.2363 9.96884C47.2363 8.14278 47.5945 6.52935 48.3109 5.12854C49.0273 3.72773 50.054 2.63752 51.3911 1.8579C52.7322 1.07829 54.3046 0.688477 56.1081 0.688477C57.6076 0.688477 58.9467 0.953213 60.1254 1.48269C61.3041 2.01216 62.258 2.75842 62.9869 3.72148C63.7199 4.68453 64.1823 5.80393 64.3739 7.07967H60.4003C60.2504 6.44597 59.9734 5.9019 59.5694 5.44748C59.1653 4.99305 58.6697 4.6491 58.0824 4.41563C57.4951 4.17799 56.8516 4.05917 56.1518 4.05917C55.1855 4.05917 54.3337 4.2843 53.5965 4.73456C52.8634 5.18065 52.2907 5.85188 51.8784 6.74823C51.4702 7.64041 51.2661 8.73062 51.2661 10.0189C51.2661 11.2654 51.4639 12.3348 51.8596 13.227C52.2553 14.115 52.8218 14.7925 53.559 15.2594C54.2963 15.7263 55.1689 15.9598 56.1768 15.9598C57.0265 15.9598 57.7992 15.7909 58.4947 15.4533C59.1903 15.1114 59.7485 14.6153 60.1691 13.9649C60.594 13.3145 60.8293 12.5412 60.8751 11.6448H62.662V13.7085C62.3788 15.0051 61.8956 16.0703 61.2125 16.9041C60.5336 17.7379 59.7255 18.3487 58.7884 18.7364C57.8512 19.12 56.8308 19.3117 55.727 19.3117ZM61.806 18.899L61.325 16.1036V12.0575H56.408V9.1246H64.5113V18.899H61.806Z"
        fill={textColor}
      />
      <path
        d="M65.0254 18.899L71.5855 1.08871H76.2151L83.0002 18.899H78.9516L75.2592 8.53676C74.9052 7.49866 74.5928 6.57312 74.322 5.76016C74.0555 4.94302 73.7785 4.08836 73.4911 3.19617H74.2846C74.0513 3.9883 73.816 4.75541 73.5786 5.4975C73.3411 6.2396 73.0204 7.21725 72.6164 8.43045C72.6122 8.44295 72.6081 8.45546 72.6039 8.46797C72.5997 8.47631 72.5956 8.48673 72.5914 8.49924L68.9552 18.899H65.0254ZM69.3988 15.1718V12.0325H78.633V15.1718H69.3988Z"
        fill={textColor}
      />
    </svg>
  )
}
