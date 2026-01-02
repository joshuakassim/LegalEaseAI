import React from 'react';

export const Button = ({
  classname = '',
  variant = 'default',
  size = 'default',
  disabled = false,
  children,
  ref,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus"outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    default: 'bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'bg-slate-100 text-slate-900 hover;bg-slate-200 focus:ring-slate-500',
    outline:
      'border border-slate-300 bg-white hover:bg-slate=500 focus:ring-slate-500',
    ghost: 'hover:bg-slate-100 focus:ring-slate-500',
  };

  const sizes = {
    default: 'px-6 py-3',
    sm: 'px-4 py-2 text-sm',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${classname}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
