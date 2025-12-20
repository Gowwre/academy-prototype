import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  maxWidth?: string;
}

export default function Modal({ isOpen, onClose, children, title, maxWidth = 'max-w-md' }: ModalProps) {
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop - blurred and darkened */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Container - ensures centering */}
      <div className={`relative w-full ${maxWidth} max-h-[90vh] flex flex-col transform rounded-[2rem] bg-white shadow-2xl transition-all border border-slate-100 animate-in fade-in zoom-in duration-300`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-900"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {title && (
          <div className="flex-none px-6 pt-6 sm:px-10 sm:pt-10 mb-2">
            <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          </div>
        )}
        
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
