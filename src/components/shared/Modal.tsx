import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto overflow-x-hidden p-4">
      {/* Backdrop - blurred and darkened */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Container - ensures centering */}
      <div className="relative w-full max-w-md transform rounded-[2rem] bg-white p-6 shadow-2xl transition-all sm:p-10 border border-slate-100 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-900"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {title && (
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          </div>
        )}
        
        <div className="relative">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
