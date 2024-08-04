import { ReactNode } from 'react';
import { CloseIcon } from './icons';
import { twMerge } from 'tailwind-merge';

interface ModalProps {
  disabledClose?: boolean;
  className?: string;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, disabledClose, className, onClose }: ModalProps) {
  return (
    <div className={twMerge('fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-10 animate-fadein', className)}>
      <div className="relative border bg-[#1a1b26] border-[#282a34] rounded-lg shadow-lg px-8 py-10 max-w-2xl w-full">
        <button className="absolute -top-4 -right-4 bg-sky-600 rounded-full text-white w-12 h-12 flex items-center justify-center z-10 disabled:cursor-not-allowed" onClick={onClose} disabled={disabledClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
}
