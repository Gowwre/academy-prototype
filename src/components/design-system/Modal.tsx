import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Box from './Box';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function Modal({ isOpen, onClose, children, maxWidth = 'max-w-md' }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity fade-in"
        onClick={onClose}
      />
      
      <Box 
        className={`relative w-full ${maxWidth} transform rounded-[2rem] bg-surface-default p-8 shadow-2xl transition-all zoom-in border border-border-default`}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full p-2 text-text-tertiary hover:bg-surface-highlight hover:text-text-primary transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        {children}
      </Box>
    </div>,
    document.body
  );
}
