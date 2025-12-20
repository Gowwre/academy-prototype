
import { useState } from 'react';

interface StepSelectionProps {
  bookingData: any;
  updateBookingData: (data: any) => void;
  onNext: () => void;
}

export default function StepSelection({ bookingData, updateBookingData, onNext }: StepSelectionProps) {
  const [visitorType, setVisitorType] = useState(bookingData.visitorType || 'local');
  const [selectedSession, setSelectedSession] = useState(bookingData.session || '');

  // Mock sessions
  const sessions = [
    { id: 'oct-1', label: 'Oct 1 - Oct 30', type: 'Monthly Cycle' },
    { id: 'nov-1', label: 'Nov 1 - Nov 30', type: 'Monthly Cycle' },
    { id: 'dec-1', label: 'Dec 1 - Dec 30', type: 'Monthly Cycle' },
  ];

  const handleContinue = () => {
    updateBookingData({ visitorType, session: selectedSession });
    onNext();
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Question 1: Intent */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">1</span>
          How are you joining us?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            className={`cursor-pointer p-6 rounded-2xl border-2 transition-all hover:shadow-md ${visitorType === 'local' ? 'border-primary bg-primary/5' : 'border-slate-100 bg-white'}`}
            onClick={() => setVisitorType('local')}
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="material-symbols-outlined text-3xl text-primary">directions_car</span>
              <h4 className="font-bold text-lg text-slate-900">Commuter / Local</h4>
            </div>
            <p className="text-slate-500 text-sm">I live nearby and just want to attend the training sessions.</p>
          </div>

          <div 
            className={`cursor-pointer p-6 rounded-2xl border-2 transition-all hover:shadow-md ${visitorType === 'visitor' ? 'border-primary bg-primary/5' : 'border-slate-100 bg-white'}`}
            onClick={() => setVisitorType('visitor')}
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="material-symbols-outlined text-3xl text-primary">flight_land</span>
              <h4 className="font-bold text-lg text-slate-900">Visitor / All-Inclusive</h4>
            </div>
            <p className="text-slate-500 text-sm">I'm traveling here and interested in accommodation packages.</p>
          </div>
        </div>
      </div>

      {/* Question 2: Session */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">2</span>
          Choose your Session
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {sessions.map((session) => (
             <div 
                key={session.id}
                className={`cursor-pointer p-4 rounded-xl border-2 transition-all text-center ${selectedSession === session.id ? 'border-primary bg-primary/5' : 'border-slate-100 bg-white'}`}
                onClick={() => setSelectedSession(session.id)}
             >
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{session.type}</p>
                <p className="font-bold text-slate-900">{session.label}</p>
             </div>
          ))}
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex justify-end pt-4 border-t border-slate-100 mt-4">
        <button 
            onClick={handleContinue}
            disabled={!selectedSession}
            className="px-8 py-3 rounded-full bg-brand-gradient text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Continue to Details
        </button>
      </div>
    </div>
  );
}
