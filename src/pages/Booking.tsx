
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { programs } from '../data/programs';
import StepSelection from '../components/booking/StepSelection';
import StepParticipants from '../components/booking/StepParticipants';
import StepSummary from '../components/booking/StepSummary';
import StepCoachSelection from '../components/booking/StepCoachSelection';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const programSlug = searchParams.get('program');
  
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    programId: '',
    programTitle: '',
    session: '',
    price: '',
    participants: [],
    visitorType: 'local', // Default intent
    extras: [],
    category: '', // Added category
    coachId: '', // For private
    coachName: '',
    slot: '',
    packageType: ''
  });

  // Load program from URL
  useEffect(() => {
    if (programSlug) {
      const program = programs.find(p => p.slug === programSlug);
      if (program) {
        setBookingData(prev => ({
          ...prev,
          programId: program.id,
          programTitle: program.title,
          price: program.price,
          category: program.category
        }));
      }
    }
  }, [programSlug]);

  const totalSteps = 3;
  const isPrivate = bookingData.category === 'private';

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };
  
  const prevStep = () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
     setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const updateBookingData = (data: any) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header / Progress Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 transition-shadow shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate(-1)}>
             <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-600 transition-colors">close</span>
             <span className="text-slate-500 font-bold text-sm tracking-wider uppercase group-hover:text-slate-700 transition-colors">Cancel</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
             {[1, 2, 3].map(step => (
                <div key={step} className={`flex items-center gap-2 ${step === currentStep ? 'text-primary' : step < currentStep ? 'text-slate-900' : 'text-slate-300'}`}>
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors duration-300
                      ${step === currentStep ? 'border-primary text-primary' : 
                        step < currentStep ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 text-slate-300'}`}>
                      {step < currentStep ? <span className="material-symbols-outlined text-sm">check</span> : step}
                   </div>
                   <span className={`hidden md:block font-bold text-sm uppercase tracking-wide ${step === currentStep ? 'text-primary' : 'text-slate-500'}`}>
                      {step === 1 ? (isPrivate ? 'Coach & Time' : 'Selection') : step === 2 ? 'Details' : 'Success'}
                   </span>
                </div>
             ))}
          </div>

          <div className="w-20 hidden md:block"></div> {/* Spacer for center alignment */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
            {/* Context Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-black text-slate-900 mb-2">
                    {currentStep === 1 ? (isPrivate ? 'Private Instruction' : 'Configure Your Program') : currentStep === 2 ? 'Participant Details' : 'Booking Confirmed'}
                </h1>
                <p className="text-slate-500">
                    {bookingData.programTitle ? `Booking for: ${bookingData.programTitle}` : 'Select a program to start'}
                </p>
            </div>

            {/* Steps Render */}
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-10 min-h-[400px]">
                {currentStep === 1 && (
                    isPrivate ? (
                        <StepCoachSelection 
                            bookingData={bookingData}
                            updateBookingData={updateBookingData}
                            onNext={nextStep}
                        />
                    ) : (
                        <StepSelection 
                            bookingData={bookingData} 
                            updateBookingData={updateBookingData} 
                            onNext={nextStep} 
                        />
                    )
                )}
                {currentStep === 2 && (
                    <StepParticipants 
                        bookingData={bookingData} 
                        updateBookingData={updateBookingData} 
                        onNext={nextStep}
                        onBack={prevStep} 
                    />
                )}
                {currentStep === 3 && (
                    <StepSummary 
                        bookingData={bookingData} 
                        onBack={prevStep} 
                    />
                )}
            </div>
        </div>
      </main>
    </div>
  );
}
