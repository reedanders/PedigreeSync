import { forwardRef } from 'react'
import Link from 'next/link'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-all duration-200',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-all duration-200',
}

const variantStyles = {
  solid: {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
    white:
      'bg-white text-primary-900 hover:bg-gray-50 active:bg-gray-100 border border-gray-200',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-700',
  },
  outline: {
    primary: 'border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20',
    gray: 'border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800',
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
  { variant = 'solid', color = 'primary', className, href, ...props },
  ref
) {
  const combinedClassName = [
    baseStyles[variant],
    variantStyles[variant][color as keyof typeof variantStyles[typeof variant]],
    className
  ].filter(Boolean).join(' ')

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
