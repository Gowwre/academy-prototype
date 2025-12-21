import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { LEARNING_RESOURCES, type Category, type DifficultyLevel } from '../data/learningResources';
import Container from '../components/design-system/Container';
import { Heading, Text } from '../components/design-system/Typography';
import Button from '../components/design-system/Button';
import Card from '../components/design-system/Card';
import Badge from '../components/design-system/Badge';
import Input from '../components/design-system/Input';
import Box from '../components/design-system/Box';

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

  // Difficulty badge style
  const getDifficultyVariant = (diff: DifficultyLevel): "neutral" | "brand" | "success" | "warning" | "error" => {
    switch (diff) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'error';
      default: return 'neutral';
    }
  };

  const getCategoryVariant = (cat: Category): "neutral" | "brand" | "success" | "warning" | "error" => {
    switch (cat) {
      case 'Technique': return 'brand';
      case 'Strategy': return 'brand';
      case 'Fitness': return 'warning';
      case 'Mental Game': return 'success';
      case 'Equipment': return 'neutral';
      default: return 'neutral';
    }
  };

  return (
    <div className="min-h-screen bg-surface-subtle pb-20">
      {/* Hero Section */}
      <section className="bg-text-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-text-primary to-surface-default/10 z-0"></div>
        <Container className="relative z-10 text-center">
          <Heading as="h1" variant="display" className="text-white mb-6 tracking-tight">
            LEARNING <span className="text-transparent bg-clip-text bg-brand-gradient">CENTER</span>
          </Heading>
          <Text variant="body-lg" className="text-white/80 max-w-2xl mx-auto mb-10">
            Elevate your game with expert insights, professional drills, and strategic analysis tailored for every level.
          </Text>
          
          {/* Search Bar - Floating */}
          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-0 bg-brand-gradient rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative flex items-center bg-surface-default rounded-full p-2 shadow-2xl">
              <div className="flex-1">
                <Input 
                  placeholder="Search topics, drills, or guides..." 
                  className="border-none bg-transparent focus:ring-0 shadow-none px-6"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={<span className="material-symbols-outlined text-text-tertiary">search</span>}
                />
              </div>
              <Button size="lg" className="rounded-full shadow-lg">
                Search
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="relative z-20 -mt-10">
        <Container>
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', 'Technique', 'Strategy', 'Fitness', 'Mental Game', 'Equipment'].map((cat) => (
               <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat as any)}
                  className={`rounded-full shadow-sm hover:scale-105 transition-transform ${
                    selectedCategory === cat ? 'ring-2 ring-primary ring-offset-2' : 'bg-surface-default/90 backdrop-blur-sm'
                  }`}
               >
                  {cat}
               </Button>
            ))}
          </div>

          {/* Resources Grid */}
          {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                  <Card 
                      key={resource.id} 
                      variant="elevated"
                      className="group overflow-hidden flex flex-col h-full p-0 border-border-subtle"
                  >
                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden">
                          <img 
                              src={resource.image} 
                              alt={resource.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                              <Badge variant={getCategoryVariant(resource.category)} size="sm" className="uppercase tracking-wider">
                                  {resource.category}
                              </Badge>
                          </div>
                      </div>
  
                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                          <div className="flex items-center gap-3 mb-4">
                              <Badge variant={getDifficultyVariant(resource.difficulty)} size="sm" className="flex items-center gap-1">
                                  <span className="material-symbols-outlined text-xs">signal_cellular_alt</span>
                                  {resource.difficulty}
                              </Badge>
                              <span className="text-border-default">•</span>
                              <div className="text-text-tertiary text-xs font-bold flex items-center gap-1">
                                  <span className="material-symbols-outlined text-sm">schedule</span>
                                  {resource.readTime}
                              </div>
                          </div>
  
                          <Heading as="h3" variant="h4" className="text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {resource.title}
                          </Heading>
                          
                          <Text variant="body-sm" className="text-text-secondary mb-6 flex-grow line-clamp-3 leading-relaxed">
                              {resource.excerpt}
                          </Text>
  
                          <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                              <Text variant="caption" className="text-text-tertiary font-medium">{resource.date}</Text>
                              <Link 
                                  to={`/posts/${resource.id}`} 
                                  className="text-sm font-bold text-text-primary group-hover:text-primary flex items-center gap-1 transition-colors"
                              >
                                  Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
                              </Link>
                          </div>
                      </div>
                  </Card>
              ))}
              </div>
          ) : (
              <Card variant="outlined" className="text-center py-20 bg-surface-default border-dashed border-border-default">
                  <span className="material-symbols-outlined text-6xl text-border-default mb-4">search_off</span>
                  <Heading as="h3" variant="h3" className="text-text-primary mb-2">No resources found</Heading>
                  <Text className="text-text-secondary mb-6">Try adjusting your search or filter criteria.</Text>
                  <Button 
                      variant="secondary"
                      onClick={() => {setSelectedCategory('All'); setSearchQuery('')}}
                      className="mx-auto"
                  >
                      Clear all filters
                  </Button>
              </Card>
          )}
        </Container>
      </section>


      {/* Featured / Newsletter CTA */}
      <section className="mt-20">
        <Container>
          <Box className="bg-brand-gradient rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 max-w-2xl mx-auto">
                  <Heading as="h2" variant="h2" className="text-white mb-6">Want personalized coaching?</Heading>
                  <Text variant="body-lg" className="text-white/90 mb-8 font-medium">
                      Our expert coaches can analyze your game and create a custom development plan just for you.
                  </Text>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button to="/programs" variant="secondary" size="lg" className="rounded-full shadow-lg">
                          View Programs
                      </Button>
                      <Button to="/about" variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                          Meet the Coaches
                      </Button>
                  </div>
              </div>
          </Box>
        </Container>
      </section>
    </div>
  );
}
