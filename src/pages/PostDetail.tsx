import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Container from '../components/design-system/Container';
import { Heading, Text } from '../components/design-system/Typography';
import Badge from '../components/design-system/Badge';
import Button from '../components/design-system/Button';

// Static mock data as requested
import { LEARNING_RESOURCES } from '../data/learningResources';

// Static mock data as requested
const DEFAULT_POST_DETAIL = {
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
  const { id } = useParams();
  
  // Try to find the resource, otherwise fallback to default
  const learningResource = LEARNING_RESOURCES.find(r => r.id === id);
  
  const post = learningResource ? {
    title: learningResource.title,
    date: learningResource.date,
    category: learningResource.category,
    author: 'Academy Expert',
    image: learningResource.image,
    content: learningResource.content || `<p>${learningResource.excerpt}</p>`
  } : DEFAULT_POST_DETAIL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-surface-default">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.image}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-text-primary via-text-primary/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-20">
          <Container className="max-w-4xl">
             <Link to="/posts" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium">
                <span className="material-symbols-outlined mr-2">arrow_back</span>
                Back to News
             </Link>
             <div className="flex items-center gap-4 mb-4">
                <Badge variant="brand" className="uppercase tracking-wider">
                    {post.category}
                </Badge>
                <span className="text-white/80 text-sm font-medium border-l border-white/20 pl-4">{post.date}</span>
             </div>
             <Heading as="h1" variant="h1" className="text-white leading-tight mb-4">
                {post.title}
             </Heading>
             <div className="flex items-center gap-2 text-white/80">
                <span className="material-symbols-outlined text-lg">edit</span>
                <span className="text-sm font-bold uppercase tracking-wide">By {post.author}</span>
             </div>
          </Container>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-20">
        <Container className="max-w-3xl">
            <div 
                className="prose prose-lg md:prose-xl prose-slate mx-auto 
                prose-headings:font-bold prose-headings:text-text-primary 
                prose-p:text-text-secondary prose-p:leading-relaxed 
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-text-primary prose-strong:font-bold"
                dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>

            {/* Tags / Share (Visual Only) */}
            <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-2">
                    {['Tournament', 'U16', 'Success'].map(tag => (
                        <Badge key={tag} variant="neutral" className="px-4 py-2 bg-surface-subtle hover:bg-surface-highlight transition-colors cursor-pointer border-none shadow-none text-text-tertiary">#{tag}</Badge>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <Text variant="caption" className="text-text-tertiary font-bold uppercase">Share:</Text>
                    <button className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                         <span className="font-bold text-lg">f</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                         <span className="font-bold text-lg">𝕏</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-text-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                         <span className="material-symbols-outlined text-sm">link</span>
                    </button>
                </div>
            </div>
        </Container>
      </section>

      {/* Next Article Preview (Optional Visual) */}
      <section className="bg-surface-subtle py-20 border-t border-border-subtle">
        <Container className="text-center">
            <Text variant="caption" className="text-text-tertiary font-bold uppercase tracking-wider mb-4">Up Next</Text>
            <Heading as="h3" variant="h3" className="text-text-primary mb-6 hover:text-primary cursor-pointer transition-colors">
                New High-Performance Training Facility Opens
            </Heading>
            <Button to="/posts" variant="outline" size="lg" className="border-text-primary text-text-primary hover:bg-text-primary hover:text-white">
                Read Next Article
            </Button>
        </Container>
      </section>
    </div>
  );
}
