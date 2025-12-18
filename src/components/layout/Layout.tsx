
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 z-50 flex items-center justify-center gap-2 h-14 px-6 rounded-full bg-primary text-background-dark shadow-[0_4px_20px_rgba(83,210,45,0.4)] transition-transform hover:scale-105 hover:-translate-y-1 font-bold">
        <span className="material-symbols-outlined">calendar_month</span>
        <span className="hidden md:inline">Book a Court</span>
      </button>
    </div>
  );
}
