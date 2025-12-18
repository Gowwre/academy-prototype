import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { LEARNING_RESOURCES, type Category, type DifficultyLevel } from '../data/learningResources';

export default function LearningCenter() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = useMemo(() => {
    return LEARNING_RESOURCES.filter((resource) => {
      const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
      const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Color mapping for category badges
  const getCategoryColor = (cat: Category) => {
    switch (cat) {
      case 'Technique': return 'bg-blue-100 text-blue-700';
      case 'Strategy': return 'bg-purple-100 text-purple-700';
      case 'Fitness': return 'bg-orange-100 text-orange-700';
      case 'Mental Game': return 'bg-teal-100 text-teal-700';
      case 'Equipment': return 'bg-gray-100 text-gray-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  // Difficulty badge style
  const getDifficultyColor = (diff: DifficultyLevel) => {
    switch (diff) {
      case 'Beginner': return 'text-green-600';
      case 'Intermediate': return 'text-yellow-600';
      case 'Advanced': return 'text-red-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
        {/* Animated background elements could go here */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            LEARNING <span className="text-transparent bg-clip-text bg-brand-gradient">CENTER</span>
          </h1>
          <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-10">
            Elevate your game with expert insights, professional drills, and strategic analysis tailored for every level.
          </p>
          
          {/* Search Bar - Floating */}
          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-0 bg-brand-gradient rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative flex items-center bg-white rounded-full p-2 shadow-2xl">
              <span className="material-symbols-outlined text-slate-400 ml-4 font-variation-settings-light">search</span>
              <input 
                type="text" 
                placeholder="Search topics, drills, or guides..." 
                className="flex-1 px-4 py-3 outline-none text-slate-700 placeholder-slate-400 font-medium bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
        
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Technique', 'Strategy', 'Fitness', 'Mental Game', 'Equipment'].map((cat) => (
             <button
                key={cat}
                onClick={() => setSelectedCategory(cat as any)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all shadow-sm ${
                    selectedCategory === cat 
                        ? 'bg-white text-slate-900 ring-2 ring-primary ring-offset-2' 
                        : 'bg-white/90 text-slate-600 hover:bg-white hover:text-primary backdrop-blur-sm'
                }`}
             >
                {cat}
             </button>
          ))}
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
                <article 
                    key={resource.id} 
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                >
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                        <img 
                            src={resource.image} 
                            alt={resource.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getCategoryColor(resource.category)}`}>
                                {resource.category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 mb-4 text-xs font-bold tracking-wide">
                            <span className={`${getDifficultyColor(resource.difficulty)} flex items-center gap-1`}>
                                <span className="material-symbols-outlined text-sm">signal_cellular_alt</span>
                                {resource.difficulty}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-500 flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                {resource.readTime}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {resource.title}
                        </h3>
                        
                        <p className="text-slate-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
                            {resource.excerpt}
                        </p>

                        <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-medium">{resource.date}</span>
                            <Link 
                                to={`/posts/${resource.id}`} 
                                className="text-sm font-bold text-slate-900 group-hover:text-primary flex items-center gap-1 transition-colors"
                            >
                                Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
            </div>
        ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">search_off</span>
                <h3 className="text-xl font-bold text-slate-900">No resources found</h3>
                <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
                <button 
                    onClick={() => {setSelectedCategory('All'); setSearchQuery('')}}
                    className="mt-6 text-primary font-bold hover:underline"
                >
                    Clear all filters
                </button>
            </div>
        )}

      </section>

      {/* Featured / Newsletter CTA */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="bg-brand-gradient rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black mb-6">Want personalized coaching?</h2>
                <p className="text-white/90 text-lg mb-8 font-medium">
                    Our expert coaches can analyze your game and create a custom development plan just for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/programs" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
                        View Programs
                    </Link>
                    <Link to="/about" className="px-8 py-4 bg-black/20 text-white border border-white/30 rounded-full font-bold hover:bg-black/30 transition-colors backdrop-blur-sm">
                        Meet the Coaches
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
