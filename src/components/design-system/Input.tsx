import type { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
}

export default function Input({
  className = '',
  label,
  error,
  helperText,
  leftIcon,
  id,
  ...props
}: InputProps) {
  const baseInputStyles = "w-full rounded-xl border bg-surface-subtle py-3 text-sm outline-none transition-all placeholder:text-text-tertiary focus:bg-surface-default focus:ring-4 focus:ring-primary/5 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const stateStyles = error 
    ? "border-red-300 focus:border-red-500 focus:ring-red-500/5 text-red-900" 
    : "border-border-default focus:border-border-focus text-text-primary";

  const paddingLeft = leftIcon ? "pl-11" : "pl-4";

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-bold text-text-secondary mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
            {leftIcon}
          </div>
        )}
        <input
          id={id}
          className={`${baseInputStyles} ${stateStyles} ${paddingLeft} pr-4 ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">error</span>
          {error}
        </p>
      )}
      {!error && helperText && (
        <p className="mt-1.5 text-xs text-text-tertiary">{helperText}</p>
      )}
    </div>
  );
}
