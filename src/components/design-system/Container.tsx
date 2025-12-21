import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  variant?: 'constrained' | 'full';
  className?: string;
}

export default function Container({ 
  children, 
  variant = 'constrained', 
  className = '' 
}: ContainerProps) {
  const baseStyles = "mx-auto px-4 md:px-6 w-full";
  const constrainedStyles = "container max-w-7xl";
  
  return (
    <div className={`${baseStyles} ${variant === 'constrained' ? constrainedStyles : ''} ${className}`}>
      {children}
    </div>
  );
}
