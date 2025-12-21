import { useState } from 'react';
import { STAFF_MEMBERS, type StaffMember } from '../../data/staff';
import StaffDetailModal from '../about/StaffDetailModal';
import { Heading, Text } from '../design-system/Typography';
import Button from '../design-system/Button';


interface StepCoachSelectionProps {
  bookingData: any;
  updateBookingData: (data: any) => void;
  onNext: () => void;
}

export default function StepCoachSelection({ bookingData, updateBookingData, onNext }: StepCoachSelectionProps) {
  const [selectedCoachId, setSelectedCoachId] = useState(bookingData.coachId || '');
  const [selectedSlot, setSelectedSlot] = useState(bookingData.slot || '');
  const [packageType, setPackageType] = useState(bookingData.packageType || 'single');
  const [lessonFocus, setLessonFocus] = useState(bookingData.lessonFocus || '');
  const [skillLevel, setSkillLevel] = useState(bookingData.skillLevel || '');
  const [viewingStaff, setViewingStaff] = useState<StaffMember | null>(null);

  // Mock slots - in a real app this would fetch based on coach availability
  const mockSlots = [
    { id: 'slot-1', day: 'Mon', time: '10:00 AM' },
    { id: 'slot-2', day: 'Mon', time: '2:00 PM' },
    { id: 'slot-3', day: 'Wed', time: '11:00 AM' },
    { id: 'slot-4', day: 'Thu', time: '4:00 PM' },
    { id: 'slot-5', day: 'Fri', time: '9:00 AM' },
  ];

  const packages = [
    { id: 'single', label: 'Single Session', price: '$80' },
    { id: '5-pack', label: '5-Pack Bundle', price: '$375' },
    { id: '10-pack', label: '10-Pack Bundle', price: '$700' },
  ];

  const focusOptions = [
    { id: 'technique', label: 'Technique & Form', icon: 'sports_tennis' },
    { id: 'strategy', label: 'Match Strategy', icon: 'psychology' },
    { id: 'fitness', label: 'Pickleball Fitness', icon: 'fitness_center' },
    { id: 'mental', label: 'Mental Game', icon: 'self_improvement' },
  ];

  const skillLevels = [
    { id: 'beginner', label: 'Beginner (1.0 - 2.5)' },
    { id: 'intermediate', label: 'Intermediate (3.0 - 3.5)' },
    { id: 'advanced', label: 'Advanced (4.0 - 4.5)' },
    { id: 'pro', label: 'Pro / Elite (5.0+)' },
  ];

  const handleContinue = () => {
    const coach = STAFF_MEMBERS.find(s => s.id === selectedCoachId);
    if (coach) {
        updateBookingData({ 
            coachId: selectedCoachId, 
            coachName: coach.name,
            slot: selectedSlot,
            packageType,
            price: packages.find(p => p.id === packageType)?.price,
            lessonFocus,
            skillLevel,
            focusLabel: focusOptions.find(f => f.id === lessonFocus)?.label,
            levelLabel: skillLevels.find(l => l.id === skillLevel)?.label,
        });
        onNext();
    }
  };

  return (
    <div className="flex flex-col gap-10">
      
      {/* 1. Select Coach */}
      <div>
        <Heading as="h3" variant="h4" className="text-text-primary mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-surface-highlight flex items-center justify-center text-sm">1</span>
          Choose your Coach
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {STAFF_MEMBERS.map((staff) => (
            <div 
              key={staff.id}
              onClick={() => setSelectedCoachId(staff.id)}
              className={`cursor-pointer group relative p-4 rounded-2xl border-2 transition-all hover:shadow-md flex items-start gap-4 
                ${selectedCoachId === staff.id ? 'border-primary bg-primary/5' : 'border-border-subtle bg-surface-default'}`}
            >
              <img 
                src={staff.imageUrl} 
                alt={staff.name} 
                className="w-16 h-16 rounded-full object-cover border border-border-default"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors">{staff.name}</h4>
                        <Text className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-1">{staff.role}</Text>
                    </div>
                    <div className="flex items-center gap-2">
                         <button 
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setViewingStaff(staff);
                            }}
                            className="p-1 px-2 rounded-lg bg-surface-highlight text-text-tertiary hover:text-primary transition-colors flex items-center gap-1"
                         >
                            <span className="material-symbols-outlined text-[18px]">info</span>
                            <span className="text-[10px] font-bold uppercase">Info</span>
                         </button>
                         {selectedCoachId === staff.id && <span className="material-symbols-outlined text-primary">check_circle</span>}
                    </div>
                </div>
                <Text className="text-sm text-text-secondary line-clamp-2">{staff.bio}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Lesson Focus */}
      <div>
         <Heading as="h3" variant="h4" className="text-text-primary mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-surface-highlight flex items-center justify-center text-sm">2</span>
          Lesson Focus
        </Heading>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
             {focusOptions.map((option) => (
                <div
                    key={option.id}
                    onClick={() => setLessonFocus(option.id)}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all text-center flex flex-col items-center gap-2
                        ${lessonFocus === option.id ? 'border-primary bg-primary/5' : 'border-border-subtle bg-surface-default'}`}
                >
                    <span className={`material-symbols-outlined text-3xl ${lessonFocus === option.id ? 'text-primary' : 'text-text-tertiary'}`}>{option.icon}</span>
                    <p className={`font-bold text-sm ${lessonFocus === option.id ? 'text-text-primary' : 'text-text-secondary'}`}>{option.label}</p>
                </div>
             ))}
        </div>
      </div>

       {/* 3. Skill Level */}
       <div>
         <Heading as="h3" variant="h4" className="text-text-primary mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-surface-highlight flex items-center justify-center text-sm">3</span>
          Skill Level
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {skillLevels.map((level) => (
                <div
                    key={level.id}
                    onClick={() => setSkillLevel(level.id)}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center justify-between
                        ${skillLevel === level.id ? 'border-primary bg-primary/5' : 'border-border-subtle bg-surface-default'}`}
                >
                    <span className={`font-bold ${skillLevel === level.id ? 'text-text-primary' : 'text-text-secondary'}`}>{level.label}</span>
                    {skillLevel === level.id && <span className="material-symbols-outlined text-primary">check_circle</span>}
                </div>
             ))}
        </div>
      </div>

      {/* 4. Select Package */}
      <div>
         <Heading as="h3" variant="h4" className="text-text-primary mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-surface-highlight flex items-center justify-center text-sm">4</span>
          Select Package
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             {packages.map((pkg) => (
                <div
                    key={pkg.id}
                    onClick={() => setPackageType(pkg.id)}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all text-center
                        ${packageType === pkg.id ? 'border-primary bg-primary/5' : 'border-border-subtle bg-surface-default'}`}
                >
                    <p className="font-bold text-text-primary mb-1">{pkg.label}</p>
                    <p className="text-primary font-black text-lg">{pkg.price}</p>
                </div>
             ))}
        </div>
      </div>

      {/* 5. Select Time */}
      <div className={!selectedCoachId ? 'opacity-50 pointer-events-none grayscale' : ''}>
        <Heading as="h3" variant="h4" className="text-text-primary mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-surface-highlight flex items-center justify-center text-sm">5</span>
          Available Times
        </Heading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {mockSlots.map((slot) => (
                <div
                    key={slot.id}
                    onClick={() => setSelectedSlot(slot.time + ' ' + slot.day)}
                    className={`cursor-pointer p-3 rounded-lg border text-center transition-all hover:border-primary
                        ${selectedSlot === (slot.time + ' ' + slot.day) ? 'border-primary bg-primary text-white shadow-md' : 'border-border-subtle bg-surface-default text-text-secondary'}`}
                >
                    <p className="text-xs font-bold uppercase opacity-70 mb-1">{slot.day}</p>
                    <p className="font-bold">{slot.time}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex justify-end pt-6 border-t border-border-default">
        <Button 
            onClick={handleContinue}
            disabled={!selectedCoachId || !selectedSlot || !lessonFocus || !skillLevel}
            size="lg"
            className="shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
            Continue to Details
        </Button>
      </div>

      {/* Detail Modal */}
      <StaffDetailModal 
        staff={viewingStaff}
        onClose={() => setViewingStaff(null)}
      />

    </div>
  );
}

