import type { SelectHTMLAttributes, ReactNode } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  options?: { value: string; label: string }[];
}

export default function Select({
  className = '',
  label,
  error,
  helperText,
  leftIcon,
  id,
  children,
  options,
  ...props
}: SelectProps) {
  const baseStyles = "w-full appearance-none rounded-xl border bg-surface-subtle py-3 text-sm outline-none transition-all focus:bg-surface-default focus:ring-4 focus:ring-primary/5 disabled:opacity-50 disabled:cursor-not-allowed";
  
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
        <select
          id={id}
          className={`${baseStyles} ${stateStyles} ${paddingLeft} pr-10 ${className}`}
          {...props}
        >
            {options ? options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            )) : children}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary">
            <span className="material-symbols-outlined text-xl">expand_more</span>
        </div>
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">error</span>
          {error}
        </p>
      )}
    </div>
  );
}
