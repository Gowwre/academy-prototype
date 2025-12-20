
import { useParams, Link, Navigate } from 'react-router-dom';
import { programs } from '../data/programs';

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="w-full flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-end">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${program.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 pb-16">
          <div className="max-w-4xl">
            <Link to="/programs" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium">
              <span className="material-symbols-outlined text-xl mr-1">arrow_back</span> Back to Programs
            </Link>
            <div className="flex gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">{program.badge}</span>
              {program.category === 'junior' && program.ageGroup && (
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">{program.ageGroup}</span>
              )}
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] mb-4">
              {program.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              {program.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Description & Features */}
          <div className="flex-1">
            <h2 className="text-slate-900 text-2xl font-bold mb-6">Program Overview</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              {program.fullDescription}
            </p>

            <h3 className="text-slate-900 text-xl font-bold mb-6">What You'll Learn</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {program.features.map((feature, idx) => (
                <div key={idx} className="flex items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="material-symbols-outlined text-primary text-2xl mr-3 mt-0.5">{feature.icon}</span>
                  <span className="text-slate-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Why Choose Us / Generic Info Strip for this program */}
             <div className="bg-brand-gradient p-8 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Ready to take your game to the next level?</h3>
                    <p className="text-white/90 mb-6">Join our community of passionate players and expert coaches today.</p>
                    <div className="flex items-center gap-4 text-sm font-bold">
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined">verified</span> Certified Coaches
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined">videocam</span> Video Analysis
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Sidebar (Schedule, Price, CTA) */}
          <div className="lg:w-[400px] shrink-0">
             <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Tuition</p>
                        <div className="flex items-baseline">
                            <span className="text-4xl font-black text-slate-900">{program.price}</span>
                            <span className="text-slate-500 font-medium ml-1">{program.pricePeriod}</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 mb-8">
                    <div className="flex items-start pb-6 border-b border-slate-100">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
                            <span className="material-symbols-outlined text-xl">calendar_month</span>
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold mb-1">Schedule</h4>
                            <p className="text-slate-600 font-medium">{program.schedule}</p>
                        </div>
                    </div>
                     <div className="flex items-start pb-6 border-b border-slate-100">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
                            <span className="material-symbols-outlined text-xl">location_on</span>
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold mb-1">Location</h4>
                            <p className="text-slate-600 font-medium">Main Academy Courts</p>
                            <p className="text-slate-400 text-sm">Courts 1-4</p>
                        </div>
                    </div>
                    {program.rating && (
                         <div className="flex items-start">
                             <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
                                <span className="material-symbols-outlined text-xl">star</span>
                            </div>
                            <div>
                                <h4 className="text-slate-900 font-bold mb-1">Rating</h4>
                                <div className="flex items-center">
                                    <span className="text-slate-900 font-bold mr-2">{program.rating}.0</span>
                                    <div className="flex text-yellow-500 text-sm">
                                         {[...Array(program.rating)].map((_, i) => (
                                            <span key={i} className="material-symbols-outlined text-sm">star</span>
                                        ))}
                                    </div>
                                    <span className="text-slate-400 text-xs ml-2">(24 reviews)</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <Link to={`/booking?program=${program.slug}`} className="block w-full text-center py-4 rounded-xl bg-brand-gradient text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                    {program.ctaText}
                </Link>
                <p className="text-center text-slate-400 text-xs mt-4">
                    Secure payment • Limited spots available
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
