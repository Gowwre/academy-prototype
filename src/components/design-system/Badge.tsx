import type { HTMLAttributes, ReactNode } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'neutral' | 'brand' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
}

export default function Badge({ 
  children, 
  className = '', 
  variant = 'neutral',
  size = 'md',
  ...props 
}: BadgeProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full tracking-wide";
  
  const variants = {
    neutral: "bg-surface-highlight text-text-secondary border border-border-default",
    brand: "bg-primary/10 text-primary border border-primary/20",
    success: "bg-green-50 text-green-700 border border-green-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
    error: "bg-red-50 text-red-700 border border-red-200",
  };
  
  const sizes = {
      sm: "text-[10px] px-2 py-0.5",
      md: "text-xs px-3 py-1"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </span>
  );
}
