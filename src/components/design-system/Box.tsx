import type { ElementType, HTMLAttributes } from 'react';

interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export default function Box({ 
  as: Component = 'div', 
  className = '', 
  children, 
  ...props 
}: BoxProps) {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}
