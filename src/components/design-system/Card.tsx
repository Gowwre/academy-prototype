import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'elevated' | 'outlined' | 'flat';
}

export default function Card({ 
  children, 
  className = '', 
  variant = 'elevated',
  ...props 
}: CardProps) {
  const baseStyles = "rounded-2xl p-6 transition-all";
  
  const variants = {
    elevated: "bg-surface-default shadow-lg border border-border-subtle",
    outlined: "bg-transparent border-2 border-border-default",
    flat: "bg-surface-highlight border border-transparent",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
