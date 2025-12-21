import { useState, type FormEvent } from 'react';
import Button from '../design-system/Button';
import Modal from '../design-system/Modal';
import Input from '../design-system/Input';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) {
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
          <Input
            id="email"
            type="email"
            label="Email Address"
            required
            placeholder="name@example.com"
            leftIcon={<span className="material-symbols-outlined text-xl">mail</span>}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm font-bold text-text-secondary" htmlFor="password">
              Password
            </label>
            <button type="button" className="text-xs font-bold text-primary hover:underline">
              Forgot?
            </button>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary text-xl">
              lock
            </span>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              className="w-full rounded-xl border border-border-default bg-surface-subtle py-3 pl-11 pr-11 text-sm outline-none transition-all focus:border-primary focus:bg-surface-default focus:ring-4 focus:ring-primary/5 placeholder:text-text-tertiary text-text-primary"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-secondary transition-colors"
            >
              <span className="material-symbols-outlined text-xl">
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
        </div>



        <Button
          type="submit"
          isLoading={isLoading}
          variant="primary"
          fullWidth
          className="rounded-xl py-3.5"
        >
          Sign In
        </Button>
      </form>

      <div className="mt-8">
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-slate-100"></div>
          <span className="mx-4 text-xs font-bold text-slate-400 uppercase tracking-widest">or continue with</span>
          <div className="flex-grow border-t border-slate-100"></div>
        </div>

        <div className="mt-6 flex gap-3">
          <Button 
            variant="secondary"
            className="flex-1 rounded-xl py-2.5 justify-center"
            leftIcon={<img src="https://www.google.com/favicon.ico" alt="Google" className="h-4 w-4" />}
          >
            Google
          </Button>
          <Button 
            variant="secondary"
            className="flex-1 rounded-xl py-2.5 justify-center"
            leftIcon={<span className="material-symbols-outlined text-xl">facebook</span>}
          >
            Facebook
          </Button>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?{' '}
        <button 
            onClick={onSwitchToRegister}
            className="font-bold text-secondary hover:underline"
        >
          Join the Academy
        </button>
      </p>
    </Modal>
  );
}
