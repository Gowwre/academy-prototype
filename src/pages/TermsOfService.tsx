
import { useEffect } from 'react';

export default function TermsOfService() {
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
                  <span className="text-white/90 font-bold tracking-widest uppercase text-xs md:text-sm">Academy Rules</span>
                  <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                    TERMS OF SERVICE
                  </h1>
                  <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed max-w-[600px] mx-auto">
                    The standards and agreements that govern your participation at DJoy Academy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="w-full flex justify-center py-12 px-4 md:px-10">
        <div className="flex flex-col max-w-[800px] w-full gap-10">
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">gavel</span>
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing our facilities, registering for our programs, or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">assignment_ind</span>
              2. Membership & Registration
            </h2>
            <p className="text-slate-600 leading-relaxed">
              To participate in DJoy Academy programs, you must provide accurate and complete registration information. Membership is personal and non-transferable. We reserve the right to refuse service or terminate memberships for violation of academy policies or conduct codes.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Members must be at least 18 years old or have parental/guardian consent.</li>
              <li>Required health waivers must be signed before any physical activity.</li>
              <li>Users are responsible for maintaining the confidentiality of their account credentials.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-4 border-l-4 border-primary/20 pl-6 py-2">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              3. Bookings & Cancellations
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Court bookings and training sessions are subject to availability and must be reserved through our official platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1 italic">Cancellation Window</h4>
                <p className="text-sm text-slate-600">Cancellations must be made at least 24 hours in advance to receive credit or refund.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1 italic">No-Show Policy</h4>
                <p className="text-sm text-slate-600">Failure to attend a booked session without prior notice may result in forfeiture of the session fee.</p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">warning</span>
              4. Liability & Safety
            </h2>
            <p className="text-slate-600 leading-relaxed font-bold">
              Participation in pickleball and athletic training involves inherent risks of injury.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By using our facilities, you voluntarily assume all risks associated with participation. DJoy Academy, its coaches, and staff shall not be liable for any injuries, damages, or losses sustained on our premises or during our programs, except in cases of gross negligence.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">groups</span>
              5. Code of Conduct
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We pride ourselves on a respectful and inclusive community. All athletes and visitors are expected to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Display good sportsmanship at all times.</li>
              <li>Respect coaches, staff, and other participants.</li>
              <li>Adhere to safety instructions and court rules.</li>
              <li>Refrain from abusive language or disruptive behavior.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-4 p-8 rounded-2xl bg-brand-gradient text-white">
            <h2 className="text-2xl font-black flex items-center gap-3">
              <span className="material-symbols-outlined text-white">payments</span>
              6. Payments & Fees
            </h2>
            <p className="text-white/90 leading-relaxed">
              All fees for programs, court rentals, and events must be paid in full at the time of booking or according to the specified installment plan. We use secure third-party payment processors and do not store sensitive financial data on our own servers.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">copyright</span>
              7. Intellectual Property
            </h2>
            <p className="text-slate-600 leading-relaxed">
              All content on our website and training materials, including text, graphics, logos, and videos, is the property of DJoy Academy and is protected by copyright and other intellectual property laws. Unauthorized use of these materials is strictly prohibited.
            </p>
          </section>

          <section className="flex flex-col gap-6 pt-6 border-t border-slate-200">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Questions?</h2>
              <p className="text-slate-600 mb-6">
                If you have any questions regarding these Terms of Service, please contact our administrative team.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Support</p>
                  <p className="text-slate-600">support@djoyacademy.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Call Us</p>
                  <p className="text-slate-600">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
