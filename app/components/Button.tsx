import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  variant: 'outline' | 'solid';
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ variant, disabled, isLoading, className, children, onClick }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
        variant === 'outline' ? 'text-sky-100 bg-sky-500 border-sky-400 hover:bg-sky-600  focus:ring-sky-500 focus:ring-offset-sky-300' : 'text-sky-100 bg-sky-100 bg-opacity-10 border-transparent hover:bg-sky-700 hover:bg-opacity-30 focus:ring-sky-800 focus:ring-offset-sky-700',
        disabled && 'opacity-50 cursor-not-allowed',
        isLoading && 'opacity-75 cursor-wait',
        className,
      )}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
