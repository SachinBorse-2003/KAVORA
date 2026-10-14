import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Class merger the shadcn-registry components (Vengeance UI, Skiper UI) import. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
