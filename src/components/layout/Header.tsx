import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Programs', path: '/programs' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2d372a] bg-background-dark/95 backdrop-blur supports-[backdrop-filter]:bg-background-dark/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-primary material-symbols-outlined !text-4xl">sports_tennis</span>
            <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              PICKLEBALL<span className="text-primary">ACADEMY</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Field Status: Open</span>
            </div>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-primary text-background-dark text-sm font-bold transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(83,210,45,0.4)]">
              Member Login
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#2d372a] bg-background-dark p-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? 'text-primary' : 'text-gray-300'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <button className="w-full cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-primary text-background-dark text-sm font-bold">
              Member Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
