import type { ElementType, HTMLAttributes, ReactNode } from 'react';

interface SharedTypographyProps {
  className?: string;
}

interface HeadingProps extends SharedTypographyProps, Omit<HTMLAttributes<HTMLHeadingElement>, 'children'> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'section';
    children: ReactNode;
}

export function Heading({ 
  children, 
  as: Component = 'h2', 
  variant = 'h2',
  className = '',
  ...props 
}: HeadingProps) {
  const variants = {
    display: "text-5xl md:text-7xl font-black tracking-tighter",
    h1: "text-4xl md:text-5xl font-extrabold tracking-tight",
    h2: "text-3xl md:text-4xl font-bold tracking-tight",
    h3: "text-2xl md:text-3xl font-bold",
    h4: "text-xl md:text-2xl font-bold",
    section: "text-lg font-bold uppercase tracking-wider text-primary",
  };

  return (
    <Component className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}

interface TextProps extends SharedTypographyProps, Omit<HTMLAttributes<HTMLElement>, 'children'> {
    as?: ElementType;
    variant?: 'body-lg' | 'body' | 'body-sm' | 'caption' | 'label';
    children: ReactNode;
}

export function Text({
    children,
    as: Component = 'p',
    variant = 'body',
    className = '',
    ...props
}: TextProps) {
    const variants = {
        'body-lg': "text-lg leading-relaxed text-text-secondary",
        'body': "text-base leading-relaxed text-text-secondary",
        'body-sm': "text-sm text-text-secondary",
        'caption': "text-xs text-text-tertiary",
        'label': "text-sm font-bold text-text-primary",
    };

    return (
        <Component className={`${variants[variant]} ${className}`} {...props}>
            {children}
        </Component>
    );
}
