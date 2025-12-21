
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { programs } from '../data/programs';
import StepSelection from '../components/booking/StepSelection';
import StepParticipants from '../components/booking/StepParticipants';
import StepSummary from '../components/booking/StepSummary';
import StepCoachSelection from '../components/booking/StepCoachSelection';
import Container from '../components/design-system/Container';
import { Heading, Text } from '../components/design-system/Typography';
import Card from '../components/design-system/Card';

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
    <div className="min-h-screen bg-surface-subtle flex flex-col">
      {/* Header / Progress Bar */}
      <header className="bg-surface-default border-b border-border-default sticky top-0 z-50 transition-shadow shadow-sm">
        <Container className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate(-1)}>
             <span className="material-symbols-outlined text-text-tertiary group-hover:text-text-primary transition-colors">close</span>
             <span className="text-text-tertiary font-bold text-sm tracking-wider uppercase group-hover:text-text-primary transition-colors">Cancel</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
             {[1, 2, 3].map(step => (
                <div key={step} className={`flex items-center gap-2 ${step === currentStep ? 'text-primary' : step < currentStep ? 'text-text-primary' : 'text-text-tertiary'}`}>
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors duration-300
                      ${step === currentStep ? 'border-primary text-primary' : 
                        step < currentStep ? 'border-text-primary bg-text-primary text-surface-default' : 'border-border-default text-text-tertiary'}`}>
                      {step < currentStep ? <span className="material-symbols-outlined text-sm">check</span> : step}
                   </div>
                   <span className={`hidden md:block font-bold text-sm uppercase tracking-wide ${step === currentStep ? 'text-primary' : 'text-text-tertiary'}`}>
                      {step === 1 ? (isPrivate ? 'Coach & Time' : 'Selection') : step === 2 ? 'Details' : 'Success'}
                   </span>
                </div>
             ))}
          </div>

          <div className="w-20 hidden md:block"></div> {/* Spacer for center alignment */}
        </Container>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-8">
        <Container className="max-w-3xl">
            {/* Context Header */}
            <div className="text-center mb-10">
                <Heading as="h1" variant="h2" className="text-text-primary mb-2">
                    {currentStep === 1 ? (isPrivate ? 'Private Instruction' : 'Configure Your Program') : currentStep === 2 ? 'Participant Details' : 'Booking Confirmed'}
                </Heading>
                <Text className="text-text-secondary">
                    {bookingData.programTitle ? `Booking for: ${bookingData.programTitle}` : 'Select a program to start'}
                </Text>
            </div>

            {/* Steps Render */}
            <Card variant="elevated" className="p-6 md:p-10 min-h-[400px]">
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
            </Card>
        </Container>
      </main>
    </div>
  );
}
