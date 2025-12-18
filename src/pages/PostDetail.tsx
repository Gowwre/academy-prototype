import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

// Static mock data as requested
const MOCK_POST_DETAIL = {
  title: 'Academy Players Dominate Regional Qualifiers',
  date: 'Oct 12, 2024',
  category: 'Tournament Results',
  author: 'Coach Thompson',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyboF-IaOX4Ovfkto2dUg2r_rcKstGdWN8EtrTP23y66JPycWBF0aO-X4zylXvyVb_82adlh7tLyqfOyd9zJmOkOw1OJDnjInCQ40gT8SbtpFNWTAsycJ5pRRlpuXGSpLdVAsB8ICZW0qebwj1KLWZCZu29WoAk3bvGji0ws_r5liKEyUDzJfRfNu7dB5xmW1A_HnPx_IMCSjI-xix3ryaPZR2UC8M_IQH2fyR_PsVdmW-UuA-1HxoiAM7KTbaidKG3NVCfq1Bk1w',
  content: `
    <p>It was a weekend to remember for our academy at the 2024 Regional Qualifiers. After months of intensive preparation, our elite squad showcased not just their technical prowess, but the mental fortitude that defines a true champion.</p>
    
    <p>We are incredibly proud to announce that <strong>5 of our athletes have secured their spots for the National Championship</strong> in December. This is a new record for the academy and a testament to the hard work put in by both the players and our coaching staff.</p>

    <div class="my-12 rounded-2xl overflow-hidden shadow-lg">
        <img src="/academy-prototype/victory.png" alt="Victory Celebration" class="w-full h-auto" />
        <p class="text-sm text-slate-500 italic p-4 bg-gray-50 border-t border-gray-100 m-0">Members of the Academy Elite Squad celebrating their Regional Qualifier victory.</p>
    </div>

    <h3>Outstanding Performances</h3>
    <p>The U16 boys category saw an all-academy final, with Marcus R. edging out David L. in a grueling three-set match that lasted nearly three hours. Both players displayed professional-level sportsmanship and grit.</p>
    
    <p>"I've been working on my serve placement all summer, and it really paid off today," said Marcus after the match. "Playing against David is always tough, we know each other's game so well."</p>

    <h3>Looking Ahead</h3>
    <p>The focus now shifts immediately to Nationals. The training intensity will ramp up starting next week, with specific blocks dedicated to match-play simulation and recovery protocols.</p>

    <p>We want to thank all the parents and supporters who traveled to the event. Your energy on the sidelines makes a huge difference!</p>
  `
};

export default function PostDetail() {
  const { id } = useParams(); // Hooks are valid, even if we don't use the ID for data fetching yet.

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${MOCK_POST_DETAIL.image}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-20">
          <div className="container mx-auto max-w-4xl">
             <Link to="/posts" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium">
                <span className="material-symbols-outlined mr-2">arrow_back</span>
                Back to News
             </Link>
             <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
                    {MOCK_POST_DETAIL.category}
                </span>
                <span className="text-white/80 text-sm font-medium border-l border-white/20 pl-4">{MOCK_POST_DETAIL.date}</span>
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                {MOCK_POST_DETAIL.title}
             </h1>
             <div className="flex items-center gap-2 text-white/80">
                <span className="material-symbols-outlined text-lg">edit</span>
                <span className="text-sm font-bold uppercase tracking-wide">By {MOCK_POST_DETAIL.author}</span>
             </div>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
            <div 
                className="prose prose-lg md:prose-xl prose-slate mx-auto 
                prose-headings:font-bold prose-headings:text-slate-900 
                prose-p:text-slate-600 prose-p:leading-relaxed 
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-900 prose-strong:font-bold"
                dangerouslySetInnerHTML={{ __html: MOCK_POST_DETAIL.content }}
            ></div>

            {/* Tags / Share (Visual Only) */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-2">
                    {['Tournament', 'U16', 'Success'].map(tag => (
                        <span key={tag} className="px-4 py-2 bg-gray-50 rounded-lg text-slate-500 text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer">#{tag}</span>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-slate-400 text-sm font-bold uppercase">Share:</span>
                    <button className="w-10 h-10 rounded-full bg-facebook text-white flex items-center justify-center hover:opacity-90 transition-opacity bg-[#1877F2]">
                         <span className="font-bold text-lg">f</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-twitter text-white flex items-center justify-center hover:opacity-90 transition-opacity bg-[#1DA1F2]">
                         <span className="font-bold text-lg">𝕏</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                         <span className="material-symbols-outlined text-sm">link</span>
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Next Article Preview (Optional Visual) */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
            <p className="text-slate-500 font-bold uppercase tracking-wider mb-4">Up Next</p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 hover:text-primary cursor-pointer transition-colors">
                New High-Performance Training Facility Opens
            </h3>
            <Link to="/posts" className="inline-flex items-center justify-center h-12 px-8 rounded-full border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all">
                Read Next Article
            </Link>
        </div>
      </section>
    </div>
  );
}
