import { useParams, Link, Navigate } from 'react-router-dom';
import { programs } from '../data/programs';
import Container from '../components/design-system/Container';
import { Heading, Text } from '../components/design-system/Typography';
import Button from '../components/design-system/Button';
import Card from '../components/design-system/Card';
import Badge from '../components/design-system/Badge';
import Box from '../components/design-system/Box';

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="w-full bg-surface-default min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${program.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-text-primary/90 via-text-primary/50 to-transparent"></div>
        </div>
        
        <Container className="z-10 pb-16">
          <div className="max-w-4xl">
            <Link to="/programs" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium">
              <span className="material-symbols-outlined text-xl mr-1">arrow_back</span> Back to Programs
            </Link>
            <div className="flex gap-3 mb-4 flex-wrap">
              <Badge variant="brand" className="uppercase tracking-widest">{program.badge}</Badge>
              {program.category === 'junior' && program.ageGroup && (
                <Badge variant="neutral" className="bg-white/10 text-white backdrop-blur-md border-white/20 uppercase tracking-widest">{program.ageGroup}</Badge>
              )}
            </div>
            <Heading as="h1" variant="h1" className="text-white leading-tight mb-4">
              {program.title}
            </Heading>
            <Text variant="body-lg" className="text-white/90 max-w-2xl font-light">
              {program.shortDescription}
            </Text>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Description & Features */}
          <div className="flex-1">
            <Heading as="h2" variant="h3" className="text-text-primary mb-6">Program Overview</Heading>
            <Text variant="body-lg" className="text-text-secondary leading-relaxed mb-10">
              {program.fullDescription}
            </Text>

            <Heading as="h3" variant="h4" className="text-text-primary mb-6">What You'll Learn</Heading>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {program.features.map((feature, idx) => (
                <Card key={idx} variant="outlined" className="flex items-start p-6 bg-surface-subtle border-border-subtle">
                  <span className="material-symbols-outlined text-primary text-2xl mr-4 mt-0.5">{feature.icon}</span>
                  <Text className="text-text-primary font-semibold mb-0">{feature.text}</Text>
                </Card>
              ))}
            </div>

            {/* Why Choose Us / Generic Info Strip for this program */}
             <Box className="bg-brand-gradient p-10 rounded-2xl text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <Heading as="h3" variant="h3" className="text-white mb-3">Ready to take your game to the next level?</Heading>
                    <Text className="text-white/90 mb-8 font-medium">Join our community of passionate players and expert coaches today.</Text>
                    <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">verified</span> Certified Coaches
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">videocam</span> Video Analysis
                        </div>
                    </div>
                </div>
            </Box>
          </div>

          {/* Right Column: Sidebar (Schedule, Price, CTA) */}
          <div className="lg:w-[400px] shrink-0">
             <Card variant="elevated" className="sticky top-24 border-border-default p-8 shadow-2xl">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <Text variant="caption" className="text-text-tertiary font-bold uppercase tracking-widest mb-2">Tuition</Text>
                        <div className="flex items-baseline">
                            <Heading variant="h2" className="text-text-primary text-4xl">{program.price}</Heading>
                            <Text className="text-text-tertiary font-medium ml-1">{program.pricePeriod}</Text>
                        </div>
                    </div>
                </div>

                <div className="space-y-8 mb-10">
                    <div className="flex items-start pb-6 border-b border-border-subtle">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary mr-5">
                            <span className="material-symbols-outlined text-2xl">calendar_month</span>
                        </div>
                        <div>
                            <Heading as="h4" variant="h4" className="text-text-primary mb-1">Schedule</Heading>
                            <Text className="text-text-secondary font-medium mb-0">{program.schedule}</Text>
                        </div>
                    </div>
                     <div className="flex items-start pb-6 border-b border-border-subtle">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary mr-5">
                            <span className="material-symbols-outlined text-2xl">location_on</span>
                        </div>
                        <div>
                            <Heading as="h4" variant="h4" className="text-text-primary mb-1">Location</Heading>
                            <Text className="text-text-secondary font-medium mb-0">Main Academy Courts</Text>
                            <Text variant="caption" className="text-text-tertiary">Courts 1-4</Text>
                        </div>
                    </div>
                    {program.rating && (
                         <div className="flex items-start">
                             <div className="p-3 rounded-xl bg-primary/10 text-primary mr-5">
                                <span className="material-symbols-outlined text-2xl">star</span>
                            </div>
                            <div>
                                <Heading as="h4" variant="h4" className="text-text-primary mb-1">Rating</Heading>
                                <div className="flex items-center">
                                    <Text className="text-text-primary font-bold mr-2 mb-0">{program.rating}.0</Text>
                                    <div className="flex text-amber-400 text-sm gap-0.5">
                                         {[...Array(program.rating)].map((_, i) => (
                                            <span key={i} className="material-symbols-outlined text-base font-variation-settings-fill">star</span>
                                        ))}
                                    </div>
                                    <Text variant="caption" className="text-text-tertiary ml-2">(24 reviews)</Text>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <Button to={`/booking?program=${program.slug}`} size="lg" className="w-full h-14 text-lg shadow-xl uppercase tracking-widest">
                    {program.ctaText}
                </Button>
                <Text variant="caption" className="text-center text-text-tertiary mt-6 mb-0">
                    Secure payment • Limited spots available
                </Text>
             </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
