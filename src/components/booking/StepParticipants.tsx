
import { useState } from 'react';
import Button from '../design-system/Button';
import Input from '../design-system/Input';
import Select from '../design-system/Select';

interface StepParticipantsProps {
  bookingData: any;
  updateBookingData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepParticipants({ bookingData, updateBookingData, onNext, onBack }: StepParticipantsProps) {
  const [formData, setFormData] = useState({
    firstName: bookingData.participants[0]?.firstName || '',
    lastName: bookingData.participants[0]?.lastName || '',
    email: bookingData.participants[0]?.email || '',
    phone: bookingData.participants[0]?.phone || '',
    skillLevel: bookingData.participants[0]?.skillLevel || 'Beginner',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    // Basic validation
    if (!formData.firstName || !formData.email) return;

    updateBookingData({ 
        participants: [formData] // Currently single player flow for simplicity
    });
    onNext();
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">1</span>
          Primary Participant
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6">
        <h3 className="font-bold text-lg mb-4 text-slate-800">Primary Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            label="First Name"
            placeholder="John" 
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          />
          <Input 
             label="Last Name"
            placeholder="Doe"
             value={formData.lastName}
             onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          />
          <Input 
             label="Email Address"
             type="email"
            placeholder="john@example.com"
             value={formData.email}
             onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="md:col-span-2"
          />
          <Input 
             label="Phone Number"
             type="tel"
            placeholder="(555) 123-4567"
             value={formData.phone}
             onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="md:col-span-2"
          />
          <Select
            label="Skill Level"
            name="skillLevel"
            value={formData.skillLevel}
            onChange={handleChange}
            className="md:col-span-2"
            options={[
                { value: "Beginner", label: "Beginner (1.0 - 2.5)" },
                { value: "Intermediate", label: "Intermediate (3.0 - 4.0)" },
                { value: "Advanced", label: "Advanced (4.5+)" }
            ]}
          />
        </div>
      </div>
             <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Skill Level</label>
                <select 
                    name="skillLevel"
                    value={formData.skillLevel}
                    onChange={handleChange}
                    className="p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                >
                    <option value="Beginner">Beginner (1.0 - 2.5)</option>
                    <option value="Intermediate">Intermediate (3.0 - 4.0)</option>
                    <option value="Advanced">Advanced (4.5+)</option>
                </select>
            </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex justify-between pt-4 border-t border-slate-100 mt-4">
        <Button 
            onClick={onBack}
            variant="ghost"
        >
            Back
        </Button>
        <Button 
            onClick={handleContinue}
            disabled={!formData.firstName || !formData.email}
            variant="primary"
        >
            Review & Pay
        </Button>
      </div>
    </div>
  );
}
