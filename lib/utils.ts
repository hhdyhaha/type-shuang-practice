import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  const merged = clsx(...inputs)
  const classes = merged.split(' ')
  const uniqueClasses = Array.from(new Set(classes))
  return twMerge(uniqueClasses.join(' '))
}
