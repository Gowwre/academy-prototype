
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex justify-center flex-col bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full flex justify-center py-5 px-4 md:px-10">
        <div className="flex flex-col max-w-[1120px] w-full">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div 
                className="flex min-h-[320px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-6 md:p-12 relative overflow-hidden group"
                style={{ backgroundImage: 'linear-gradient(to right, rgba(9, 89, 162, 0.9), rgba(232, 22, 140, 0.9)), url("https://images.unsplash.com/photo-1594470117722-de43603ff3fa?q=80&w=2070&auto=format&fit=crop")' }}
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
                <div className="relative flex flex-col gap-4 text-center max-w-[800px]">
                  <span className="text-white/90 font-bold tracking-widest uppercase text-xs md:text-sm">Legal Transparency</span>
                  <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                    PRIVACY POLICY
                  </h1>
                  <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed max-w-[600px] mx-auto">
                    How DJoy Academy protects your data and respects your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="w-full flex justify-center py-12 px-4 md:px-10">
        <div className="flex flex-col max-w-[800px] w-full gap-10">
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">info</span>
              1. Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At DJoy Academy, we are committed to protecting the privacy and security of our students, athletes, and visitors. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our academy, use our website, or participate in our programs.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. Last updated: December 2023.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">person_search</span>
              2. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li><span className="font-bold">Contact Information:</span> Name, email address, phone number, and mailing address.</li>
              <li><span className="font-bold">Athlete Profiles:</span> Age, skill level, health and injury history relevant to performance training.</li>
              <li><span className="font-bold">Payment Information:</span> Credit card details and billing addresses (processed securely through third-party providers).</li>
              <li><span className="font-bold">Media Coverage:</span> Photos and videos taken during training sessions or tournaments (with your consent).</li>
            </ul>
          </section>

          <section className="flex flex-col gap-4 border-l-4 border-primary/20 pl-6 py-2">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">analytics</span>
              3. How We Use Your Information
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The information we collect is used to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1 italic">Service Provision</h4>
                <p className="text-sm text-slate-600">Register you for classes, track athletic progress, and manage court bookings.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1 italic">Communication</h4>
                <p className="text-sm text-slate-600">Send program updates, weather alerts for outdoor sessions, and marketing news.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1 italic">Safety & Health</h4>
                <p className="text-sm text-slate-600">Ensure athletes are training safely relative to their physical condition.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1 italic">Improvement</h4>
                <p className="text-sm text-slate-600">Analyze participation trends to optimize our program offerings and facilities.</p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">security</span>
              4. Data Protection & Security
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure. This includes encrypted data transmission, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">share</span>
              5. Sharing Your Information
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We do not sell your personal information to third parties. We may share information with trusted partners who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section className="flex flex-col gap-4 p-8 rounded-2xl bg-brand-gradient text-white">
            <h2 className="text-2xl font-black flex items-center gap-3">
              <span className="material-symbols-outlined text-white">verified_user</span>
              6. Your Rights
            </h2>
            <p className="text-white/90 leading-relaxed">
              You have the right to access, correct, or delete your personal information at any time. You may also opt-out of marketing communications by clicking the "unsubscribe" link in our emails or by contacting us directly.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">cookie</span>
              7. Cookies
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our website uses cookies to enhance your browsing experience, remember your preferences, and analyze traffic. You can choose to disable cookies through your browser settings, though some features of our site may not function properly as a result.
            </p>
          </section>

          <section className="flex flex-col gap-6 pt-6 border-t border-slate-200">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600 mb-6">
                If you have any questions about this Privacy Policy or our treatment of your personal data, please reach out to our privacy officer.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Email</p>
                  <p className="text-slate-600">privacy@djoyacademy.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Address</p>
                  <p className="text-slate-600">123 Pickleball Way, Austin, TX 78701</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
