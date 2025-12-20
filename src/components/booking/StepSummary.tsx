
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface StepSummaryProps {
  bookingData: any;
  onBack: () => void;
}

export default function StepSummary({ bookingData, onBack }: StepSummaryProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Calculate Mock Total
  const basePrice = bookingData.price ? parseFloat(bookingData.price.replace(/[^0-9.]/g, '')) : 0;
  const multiplier = 1; // Could be duration multiplier
  const total = basePrice * multiplier;

  const handlePay = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
        setIsProcessing(false);
        setIsConfirmed(true);
    }, 2000);
  };

  if (isConfirmed) {
      return (
          <div className="flex flex-col items-center justify-center text-center py-10">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                  <span className="material-symbols-outlined text-5xl">check_circle</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Booking Confirmed!</h2>
              <p className="text-slate-600 max-w-md mb-8">
                  Thank you, <span className="font-bold">{bookingData.participants[0]?.firstName}</span>. Your spot in the <span className="font-bold">{bookingData.programTitle}</span> has been secured. A confirmation email has been sent to {bookingData.participants[0]?.email}.
              </p>
              <div className="flex gap-4">
                  <Link to="/" className="px-6 py-3 rounded-full border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors">
                      Return Home
                  </Link>
                  <button className="px-6 py-3 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-colors">
                      Download Receipt
                  </button>
              </div>
          </div>
      )
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Summary Details */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h3>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col gap-4">
                <div className="pb-4 border-b border-slate-200">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Program</p>
                    <p className="font-bold text-slate-900 text-lg">{bookingData.programTitle}</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        {bookingData.category === 'private' ? 'Details' : 'Session'}
                    </p>
                    <p className="font-medium text-slate-700">
                        {bookingData.category === 'private' ? (
                            <>
                                <span className="block text-slate-900 font-bold">{bookingData.coachName}</span>
                                <span className="block text-sm">{bookingData.slot}</span>
                                <span className="block text-sm text-slate-500 mt-1">{bookingData.focusLabel} • {bookingData.levelLabel}</span>
                                <span className="block text-sm text-slate-500">{bookingData.packageType === 'single' ? 'Single Session' : bookingData.packageType === '5-pack' ? '5-Pack Bundle' : '10-Pack Bundle'}</span>
                            </>
                        ) : (
                            bookingData.session === 'oct-1' ? 'Oct 1 - Oct 30' : 
                            bookingData.session === 'nov-1' ? 'Nov 1 - Nov 30' : 'Dec 1 - Dec 30'
                        )}
                    </p>
                </div>
                 <div className="pb-4 border-b border-slate-200">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Participants</p>
                    <p className="font-medium text-slate-700">
                        {bookingData.participants.length} Person ({bookingData.participants[0]?.firstName} {bookingData.participants[0]?.lastName})
                    </p>
                </div>
                 <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Total Due</p>
                    <p className="font-black text-brand-gradient text-3xl">${total}</p>
                </div>
            </div>
          </div>
          
          {/* Right: Payment Mock */}
          <div>
             <h3 className="text-xl font-bold text-slate-900 mb-6">Payment Method</h3>
             <div className="flex flex-col gap-4">
                 <div className="border border-primary bg-primary/5 p-4 rounded-xl flex items-center justify-between cursor-pointer">
                     <div className="flex items-center gap-3">
                         <span className="material-symbols-outlined text-primary">credit_card</span>
                         <span className="font-bold text-slate-900">Credit Card</span>
                     </div>
                     <span className="material-symbols-outlined text-primary">check_circle</span>
                 </div>
                 <div className="p-4 rounded-xl bg-slate-100 text-slate-400 text-sm text-center">
                     Secure SSL Encryption. No actual payment will be processed in this prototype.
                 </div>
             </div>
          </div>
      </div>

      {/* Action Bar */}
      <div className="flex justify-between pt-4 border-t border-slate-100 mt-4">
        <button 
            onClick={onBack}
            className="px-6 py-3 rounded-full font-bold text-slate-500 hover:bg-slate-100 transition-colors"
        >
            Back
        </button>
        <button 
            onClick={handlePay}
            disabled={isProcessing}
            className="px-8 py-3 rounded-full bg-brand-gradient text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all w-48 flex items-center justify-center"
        >
            {isProcessing ? (
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
            ) : (
                'Confirm & Pay'
            )}
        </button>
      </div>
    </div>
  );
}
