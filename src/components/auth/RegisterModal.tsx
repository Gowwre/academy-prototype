import { useState, type FormEvent } from 'react';
import Button from '../shared/Button';
import Modal from '../shared/Modal';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Registration attempt with:', { name: formData.name, email: formData.email });
    alert('Registration successful! Please check your email to verify your account.');
    setIsLoading(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
          <span className="material-symbols-outlined text-4xl">person_add</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">Join the Academy</h2>
        <p className="mt-2 text-sm text-slate-500">
          Start your journey to becoming a pro today.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {error && (
            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">error</span>
                {error}
            </div>
        )}

        <div>
           <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="name">
            Full Name
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              badge
            </span>
            <input
              id="name"
              type="text"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>

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
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="password">
              Password
            </label>
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
              value={formData.password}
              onChange={handleChange}
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

        <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              lock_reset
            </span>
            <input
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-11 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          variant="primary"
          fullWidth
          className="rounded-xl py-3.5"
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-500">
        Already have an account?{' '}
        <button 
            onClick={onSwitchToLogin}
            className="font-bold text-primary hover:underline"
        >
          Sign In
        </button>
      </p>
    </Modal>
  );
}
