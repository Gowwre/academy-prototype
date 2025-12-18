
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-display text-slate-900 antialiased overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 z-50 flex items-center justify-center gap-2 h-14 px-6 rounded-full bg-brand-gradient text-white shadow-xl shadow-pink-500/20 transition-transform hover:scale-105 hover:-translate-y-1 font-bold">
        <span className="material-symbols-outlined">calendar_month</span>
        <span className="hidden md:inline" onClick={() => window.location.href = "https://djoypickleball.com/booking?t=walkin&c=50f89f27-a906-4e6d-ad44-f1ce1b0a7d60"}>Book a Court</span>
      </button>
    </div>
  );
}
