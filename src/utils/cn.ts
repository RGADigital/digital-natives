// PURPOSE:
// Merge class conflict & support conditional class in tailwind
// https://medium.com/@naglaafouz4/enhancing-component-reusability-in-tailwind-css-with-clsx-and-tailwind-merge-986aa4e1fe76
// e.g:
// input: "text-black border-black text-blue"
// output: "border-black text-blue"

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}
