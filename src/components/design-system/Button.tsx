import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  to?: string; // If provided, renders as Link
}

export default function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  to,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-gradient text-text-on-primary shadow-lg hover:shadow-xl hover:scale-105 active:scale-[0.98]",
    secondary: "bg-surface-default text-text-primary border border-border-default hover:bg-surface-highlight active:scale-[0.98]",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-text-on-primary transform hover:scale-105 active:scale-[0.98]",
    ghost: "bg-transparent hover:bg-surface-highlight text-text-secondary active:scale-[0.98]",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg active:scale-[0.98]"
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-10 px-6 text-sm",
    lg: "h-14 px-8 text-lg"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const variantClass = variants[variant];
  const sizeClass = sizes[size];
  
  const combinedClasses = `${baseStyles} ${variantClass} ${sizeClass} ${widthClass} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </>
  );

  if (to) {
    return (
      <Link 
        to={to} 
        className={combinedClasses}
        {...(props as any)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={isLoading || disabled}
      {...props}
    >
      {content}
    </button>
  );
}
