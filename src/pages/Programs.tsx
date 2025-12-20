
import { Link } from 'react-router-dom';
import { programs } from '../data/programs';

export default function Programs() {
  const juniorPrograms = programs.filter(p => p.category === 'junior');
  const adultPrograms = programs.filter(p => p.category === 'adult');

  return (
    <div className="w-full flex-col">
      {/* Hero Section */}
      <div className="flex flex-col">
        <div className="@container">
            <div 
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 relative" 
                style={{ backgroundImage: 'linear-gradient(to right, rgba(9, 89, 162, 0.8), rgba(232, 22, 140, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC68_hTQ9agpLcVI-F7iwBVqutc07Fu3bpHV1fekWe0BlxTqUBqQw_LNIe-jNPTkqRK9G8saZxrIXq5lgtvmEI2wGPDMaQtQFyutSSScyIipMnHNuZVP6DGA_MgSNvtEv5N0sp1P-YP32IO3wFxpJqnNezKn_EP1ACD0MP-CNJuVtBA3dL_CsZ98zNUGVwRlOTf5NAR8VZBn9B1Mmd-_fQufQREEJ_uGEs3aFOcsOOA5EuSkz3yi7S4PKy2piSm2H_L61YwbYt0adk")' }}
            >
                <div className="flex flex-col gap-4 text-center max-w-[800px] z-10">
                    <div className="flex justify-center">
                        <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/30">Fall Registration Open</span>
                    </div>
                    <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                        Forging the Future of Pickleball
                    </h1>
                    <h2 className="text-white/90 text-lg font-normal leading-relaxed md:text-xl max-w-2xl mx-auto">
                        World-class coaching and elite athletic development tailored for every stage of your game.
                    </h2>
                </div>
                <div className="flex gap-4 mt-4 z-10">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform shadow-xl">
                        <span className="truncate">Explore Programs</span>
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 flex justify-center">
            <div className="flex overflow-x-auto no-scrollbar justify-between md:justify-start md:gap-12 w-full max-w-[960px]">
                <button className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-slate-900 pb-3 pt-4 px-2 min-w-fit">
                    <p className="text-slate-900 text-sm font-bold leading-normal tracking-[0.015em]">All Programs</p>
                </button>
                <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 hover:text-primary pb-3 pt-4 px-2 min-w-fit transition-colors">
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Junior Academy</p>
                </button>
                <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 hover:text-primary pb-3 pt-4 px-2 min-w-fit transition-colors">
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Adult Leagues</p>
                </button>
                <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 hover:text-primary pb-3 pt-4 px-2 min-w-fit transition-colors">
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Camps & Clinics</p>
                </button>
            </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex grow flex-col py-10">
        
        {/* Junior Section */}
        <div className="flex flex-1 justify-center">
            <div className="flex flex-col max-w-[960px] flex-1 w-full px-4 md:px-0">
                <div className="flex items-center justify-between px-4 pb-6 pt-2">
                    <h2 className="text-slate-900 text-2xl font-bold leading-tight tracking-[-0.015em]">Junior Development</h2>
                    <span className="hidden md:inline-flex items-center gap-1 text-primary text-sm font-bold cursor-pointer hover:underline">
                        View Schedule <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                </div>
                <div className="flex flex-col gap-6 px-4">
                    {juniorPrograms.map((program) => (
                        <div key={program.id} className="flex flex-col items-stretch justify-start rounded-2xl md:flex-row md:items-start shadow-md bg-white border border-gray-200 hover:border-primary/50 transition-colors group overflow-hidden">
                            <div className="w-full md:w-[320px] bg-center bg-no-repeat aspect-video md:aspect-auto md:h-auto bg-cover shrink-0" style={{ backgroundImage: `url('${program.image}')` }}></div>
                            <div className="flex w-full grow flex-col items-stretch justify-center gap-1 p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="text-primary text-xs font-bold uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-md">{program.badge}</p>
                                    <div className="flex gap-1">
                                        {[...Array(program.rating)].map((_, i) => (
                                            <span key={i} className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-slate-900 text-xl font-bold leading-tight tracking-[-0.015em]">{program.title}</h3>
                                <p className="text-slate-600 text-base font-normal leading-relaxed mt-2 mb-4">
                                    {program.shortDescription}
                                </p>
                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    {program.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-slate-600 text-sm">
                                            <span className="material-symbols-outlined text-primary text-sm">{feature.icon}</span> {feature.text}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                                    <span className="text-slate-900 font-bold">{program.price}<span className="text-slate-500 font-normal text-sm"> {program.pricePeriod}</span></span>
                                    <Link to={`/programs/${program.slug}`} className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-5 bg-brand-gradient text-white text-sm font-bold leading-normal hover:shadow-lg transition-all">
                                        <span className="truncate">{program.ctaText}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Stats / Why Choose Us Strip */}
        <div className="w-full bg-gray-50 border-y border-gray-200 my-16 py-12">
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row max-w-[960px] flex-1 w-full px-8 gap-8 justify-between items-center text-center md:text-left">
                    <div className="flex flex-col gap-2 items-center md:items-start">
                        <div className="p-3 rounded-full bg-white border border-gray-200 text-primary mb-2 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">school</span>
                        </div>
                        <h4 className="text-slate-900 text-3xl font-black">50+</h4>
                        <p className="text-slate-500 font-medium">Pro Alumni Graduated</p>
                    </div>
                    <div className="w-full h-px bg-gray-200 md:w-px md:h-16"></div>
                    <div className="flex flex-col gap-2 items-center md:items-start">
                        <div className="p-3 rounded-full bg-white border border-gray-200 text-primary mb-2 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">groups</span>
                        </div>
                        <h4 className="text-slate-900 text-3xl font-black">10:1</h4>
                        <p className="text-slate-500 font-medium">Player to Coach Ratio</p>
                    </div>
                    <div className="w-full h-px bg-gray-200 md:w-px md:h-16"></div>
                    <div className="flex flex-col gap-2 items-center md:items-start">
                        <div className="p-3 rounded-full bg-white border border-gray-200 text-primary mb-2 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">stadium</span>
                        </div>
                        <h4 className="text-slate-900 text-3xl font-black">12</h4>
                        <p className="text-slate-500 font-medium">Pro-Surface Courts</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Adult Section */}
        <div className="flex flex-1 justify-center">
            <div className="flex flex-col max-w-[960px] flex-1 w-full px-4 md:px-0">
                <div className="flex items-center justify-between px-4 pb-6">
                    <h2 className="text-slate-900 text-2xl font-bold leading-tight tracking-[-0.015em]">Adult Programs</h2>
                    <span className="hidden md:inline-flex items-center gap-1 text-primary text-sm font-bold cursor-pointer hover:underline">
                        League Standings <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                    {adultPrograms.map((program) => (
                        <div key={program.id} className="flex flex-col rounded-2xl bg-white border border-gray-200 hover:border-primary/50 transition-all group overflow-hidden shadow-md">
                            <div className="w-full h-48 bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `url('${program.image}')` }}>
                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 border border-gray-200">{program.badge}</div>
                            </div>
                            <div className="flex flex-col p-6 flex-grow">
                                <h3 className="text-slate-900 text-xl font-bold mb-2">{program.title}</h3>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                                    {program.shortDescription}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                                        <span className="material-symbols-outlined text-base">schedule</span> {program.schedule}
                                    </div>
                                    <Link to={`/programs/${program.slug}`} className="text-primary font-bold text-sm hover:text-white transition-colors">
                                        {program.ctaText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
        {/* Private Instruction Banner */}
        <div className="flex justify-center mt-12 mb-8">
            <div className="w-full max-w-[960px] px-4">
                <div className="relative overflow-hidden rounded-2xl bg-brand-gradient p-8 md:p-12">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-white text-2xl md:text-3xl font-black mb-2">Private Instruction</h2>
                            <p className="text-white/90 font-medium max-w-md">Get 1-on-1 analysis with our certified pros. Video breakdown included with every package.</p>
                        </div>
                        <Link to="/booking?program=private-lesson" className="whitespace-nowrap rounded-full bg-white px-6 py-3 text-primary font-bold hover:bg-opacity-90 transition-opacity">
                             Book a Lesson
                        </Link>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
