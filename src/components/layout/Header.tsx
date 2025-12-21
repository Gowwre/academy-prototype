import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import DJoyLogo from '../shared/DJoyLogo';
import Button from '../design-system/Button';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleOpenLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleOpenRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Programs', path: '/programs' },
    { name: 'About Us', path: '/about' },
    { name: 'News', path: '/posts' },
    { name: 'Learning', path: '/learning' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <DJoyLogo size="md" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Field Status: Open</span>
            </div>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              to="/booking?program=private-lesson"
              variant="outline"
              className="hidden md:flex"
              leftIcon={<span className="material-symbols-outlined text-sm">event</span>}
            >
              Book Private
            </Button>
            <Button 
              variant="primary"
              onClick={handleOpenLogin}
              className="hidden md:flex min-w-[100px]"
            >
              Member Login
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white p-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? 'text-primary' : 'text-slate-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <div className="flex flex-col gap-2 pt-2">
               <Button 
                to="/booking?program=private-lesson"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="outline"
                fullWidth
                leftIcon={<span className="material-symbols-outlined text-sm">event</span>}
               >
                Book Private
               </Button>
               <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleOpenLogin();
                }}
                variant="primary"
                fullWidth
               >
                Member Login
              </Button>
             </div>
          </nav>
        </div>
      )}

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onSwitchToRegister={handleOpenRegister}
      />

      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
        onSwitchToLogin={handleOpenLogin}
      />
    </header>
  );
}
