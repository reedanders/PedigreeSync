import { forwardRef } from 'react'
import Link from 'next/link'

// Simple className utility to replace clsx
function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
} as const

type Variant = keyof typeof baseStyles
type Color = keyof typeof variantStyles[Variant]

interface ButtonProps {
  variant?: Variant
  color?: Color
  className?: string
  href?: string
  children?: React.ReactNode
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps & 
    (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>)
>(function Button(
  { variant = 'solid', color = 'gray', className, href, ...props },
  ref
) {
  const combinedClassName = cn(
    baseStyles[variant],
    variantStyles[variant][color as keyof typeof variantStyles[typeof variant]],
    className
  )

  return href ? (
    <Link 
      ref={ref as React.ForwardedRef<HTMLAnchorElement>} 
      href={href} 
      className={combinedClassName} 
      {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>} 
    />
  ) : (
    <button 
      ref={ref as React.ForwardedRef<HTMLButtonElement>} 
      className={combinedClassName} 
      {...props as React.ButtonHTMLAttributes<HTMLButtonElement>} 
    />
  )
})
