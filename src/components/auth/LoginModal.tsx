import { useState, type FormEvent } from 'react';
import Modal from '../shared/Modal';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    console.log('Login attempt with:', { email, password });
    alert('This is a prototype. Login functionality is not yet implemented.');
    setIsLoading(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary">
          <span className="material-symbols-outlined text-4xl">stadium</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">Welcome Back</h2>
        <p className="mt-2 text-sm text-slate-500">
          Enter your credentials to access your academy dashboard
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              mail
            </span>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm font-semibold text-slate-700" htmlFor="password">
              Password
            </label>
            <button type="button" className="text-xs font-bold text-primary hover:underline">
              Forgot?
            </button>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              lock
            </span>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-11 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full cursor-pointer rounded-xl bg-brand-gradient py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-primary/25 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Signing In...
            </span>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      <div className="mt-8">
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-slate-100"></div>
          <span className="mx-4 text-xs font-bold text-slate-400 uppercase tracking-widest">or continue with</span>
          <div className="flex-grow border-t border-slate-100"></div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="h-4 w-4" />
            Google
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50">
             <span className="material-symbols-outlined text-xl">facebook</span>
            Facebook
          </button>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?{' '}
        <button className="font-bold text-secondary hover:underline">
          Join the Academy
        </button>
      </p>
    </Modal>
  );
}
