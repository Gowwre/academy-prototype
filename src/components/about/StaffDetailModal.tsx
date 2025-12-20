import type { StaffMember } from '../../data/staff';
import Modal from '../shared/Modal';

interface StaffDetailModalProps {
  staff: StaffMember | null;
  onClose: () => void;
}

export default function StaffDetailModal({ staff, onClose }: StaffDetailModalProps) {
  if (!staff) return null;

  return (
    <Modal isOpen={!!staff} onClose={onClose} maxWidth="max-w-4xl">
      <div className="flex flex-col gap-6 md:gap-8 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0">
              <img 
                src={staff.imageUrl} 
                alt={staff.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 right-0 md:right-4 bg-white rounded-full p-1.5 shadow-md">
                <span className="material-symbols-outlined text-primary text-2xl">verified</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 text-center md:text-left flex-grow">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">{staff.name}</h2>
              <p className="text-primary font-bold uppercase tracking-widest text-sm">{staff.role}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-1">
              {staff.badges.map((badge, index) => (
                <span key={index} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Tabs/Sections */}
        <div className="flex flex-col gap-8">
          
          {/* Bio & Philosophy */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide">
                <span className="material-symbols-outlined">person</span>
                Biography
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {staff.bio}
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide">
                <span className="material-symbols-outlined">psychology</span>
                Philosophy
              </div>
              <blockquote className="text-slate-700 text-sm font-medium italic border-l-4 border-secondary/30 pl-4 py-1">
                "{staff.philosophy}"
              </blockquote>
            </div>
          </div>

          <div className="h-px bg-slate-100 w-full" />

          {/* Experience Timeline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide">
              <span className="material-symbols-outlined">history</span>
              Experience
            </div>
            <div className="space-y-4 relative pl-2">
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
              {staff.experience.map((exp) => (
                <div key={exp.id} className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white bg-primary shadow-sm z-10"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h4 className="font-bold text-slate-900">{exp.role}</h4>
                    <span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-slate-700">{exp.organization}</p>
                  <p className="text-xs text-slate-500 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

           <div className="h-px bg-slate-100 w-full" />

          {/* Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide">
              <span className="material-symbols-outlined">workspace_premium</span>
              Certifications
            </div>
            <div className="grid gap-3">
              {staff.certifications.map((cert) => (
                <div key={cert.id} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-secondary shadow-sm">
                     <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-900 text-sm">{cert.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-bold text-slate-500">{cert.issuer}</span>
                      <span className="text-[10px] text-slate-400">•</span>
                      <span className="text-xs text-slate-500">Issued {cert.date}</span>
                    </div>
                    {cert.verificationId && (
                      <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-green-50 text-[10px] font-medium text-green-700 border border-green-100">
                        <span className="material-symbols-outlined text-[10px]">check_circle</span>
                        Verified ID: {cert.verificationId}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Modal>
  );
}
