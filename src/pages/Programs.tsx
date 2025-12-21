import { Link } from 'react-router-dom';
import { programs } from '../data/programs';
import Container from '../components/design-system/Container';
import { Heading, Text } from '../components/design-system/Typography';
import Button from '../components/design-system/Button';
import Card from '../components/design-system/Card';
import Badge from '../components/design-system/Badge';
import Box from '../components/design-system/Box';

export default function Programs() {
  const juniorPrograms = programs.filter(p => p.category === 'junior');
  const adultPrograms = programs.filter(p => p.category === 'adult');

  return (
    <div className="w-full bg-surface-subtle min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC68_hTQ9agpLcVI-F7iwBVqutc07Fu3bpHV1fekWe0BlxTqUBqQw_LNIe-jNPTkqRK9G8saZxrIXq5lgtvmEI2wGPDMaQtQFyutSSScyIipMnHNuZVP6DGA_MgSNvtEv5N0sp1P-YP32IO3wFxpJqnNezKn_EP1ACD0MP-CNJuVtBA3dL_CsZ98zNUGVwRlOTf5NAR8VZBn9B1Mmd-_fQufQREEJ_uGEs3aFOcsOOA5EuSkz3yi7S4PKy2piSm2H_L61YwbYt0adk")' }}
        ></div>
        <Container className="relative z-10 text-center max-w-[800px]">
          <div className="flex justify-center mb-6">
            <Badge variant="brand" className="bg-white/10 text-white backdrop-blur-md border-white/20 uppercase tracking-widest px-4 py-1.5">
              Fall Registration Open
            </Badge>
          </div>
          <Heading as="h1" variant="display" className="text-white mb-6">
            Forging the Future of Pickleball
          </Heading>
          <Text variant="body-lg" className="text-white/80 max-w-2xl mx-auto mb-10">
            World-class coaching and elite athletic development tailored for every stage of your game.
          </Text>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="shadow-2xl">
              Explore Programs
            </Button>
          </div>
        </Container>
      </section>

      {/* Tabs Navigation */}
      <div className="sticky top-[72px] z-40 bg-surface-default/80 backdrop-blur-md border-b border-border-default">
        <Container>
            <div className="flex overflow-x-auto no-scrollbar justify-center gap-8 md:gap-12 py-1">
                <button className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-text-primary pb-3 pt-4 px-2 min-w-fit transition-all hover:text-primary">
                    <p className="text-sm font-bold uppercase tracking-widest">All Programs</p>
                </button>
                <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-text-tertiary hover:text-primary pb-3 pt-4 px-2 min-w-fit transition-all">
                    <p className="text-sm font-bold uppercase tracking-widest">Junior Academy</p>
                </button>
                <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-text-tertiary hover:text-primary pb-3 pt-4 px-2 min-w-fit transition-all">
                    <p className="text-sm font-bold uppercase tracking-widest">Adult Leagues</p>
                </button>
                <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-text-tertiary hover:text-primary pb-3 pt-4 px-2 min-w-fit transition-all">
                    <p className="text-sm font-bold uppercase tracking-widest">Camps & Clinics</p>
                </button>
            </div>
        </Container>
      </div>

      {/* Main Content Area */}
      <div className="flex grow flex-col py-20 pb-20">
        
        {/* Junior Section */}
        <Container className="max-w-[960px] mb-20">
          <div className="flex items-center justify-between pb-8 pt-2">
              <Heading as="h2" variant="h3" className="text-text-primary">Junior Development</Heading>
              <Link to="/schedule" className="hidden md:inline-flex items-center gap-1 text-primary text-sm font-bold cursor-pointer hover:underline">
                  View Schedule <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
          </div>
          <div className="flex flex-col gap-10">
              {juniorPrograms.map((program) => (
                  <Card key={program.id} variant="elevated" className="flex flex-col items-stretch justify-start p-0 md:flex-row md:items-stretch border-border-subtle hover:border-primary/30 transition-all group overflow-hidden shadow-md">
                      <div className="w-full md:w-[320px] bg-center bg-no-repeat aspect-video md:aspect-auto bg-cover shrink-0" style={{ backgroundImage: `url('${program.image}')` }}></div>
                      <div className="flex w-full grow flex-col items-stretch justify-center gap-1 p-8">
                          <div className="flex justify-between items-start mb-3">
                              <Badge variant="brand" size="sm" className="uppercase tracking-widest">{program.badge}</Badge>
                              <div className="flex gap-0.5">
                                  {[...Array(5)].map((_, i) => (
                                      <span key={i} className={`material-symbols-outlined text-sm ${i < (program.rating || 0) ? 'text-amber-400 font-variation-settings-fill' : 'text-text-tertiary'}`}>star</span>
                                  ))}
                              </div>
                          </div>
                          <Heading as="h3" variant="h4" className="text-text-primary mb-2">{program.title}</Heading>
                          <Text variant="body-sm" className="text-text-secondary mb-6 leading-relaxed">
                              {program.shortDescription}
                          </Text>
                          <div className="grid grid-cols-2 gap-4 mb-8">
                              {program.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-text-tertiary text-xs font-semibold">
                                      <span className="material-symbols-outlined text-primary/80 text-sm">{feature.icon}</span> {feature.text}
                                  </div>
                              ))}
                          </div>
                          <div className="flex items-center justify-between border-t border-border-subtle pt-6 mt-auto">
                              <div className="flex flex-col">
                                <Text className="text-text-primary font-bold text-lg">{program.price}</Text>
                                <Text variant="caption">{program.pricePeriod}</Text>
                              </div>
                              <Button to={`/programs/${program.slug}`} size="md" className="shadow-lg">
                                  {program.ctaText}
                              </Button>
                          </div>
                      </div>
                  </Card>
              ))}
          </div>
        </Container>

        {/* Stats Strip */}
        <section className="bg-surface-default border-y border-border-default py-16 mb-20">
          <Container className="max-w-[960px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
                  <div className="flex flex-col gap-3 items-center md:items-start">
                      <div className="p-4 rounded-2xl bg-surface-subtle border border-border-subtle text-primary shadow-sm mb-2">
                          <span className="material-symbols-outlined text-3xl font-variation-settings-light">school</span>
                      </div>
                      <Heading variant="h2" className="text-text-primary text-4xl">50+</Heading>
                      <Text className="text-text-tertiary font-bold uppercase tracking-widest text-xs">Pro Alumni Graduated</Text>
                  </div>
                  <div className="hidden md:block w-px h-24 bg-border-subtle mx-auto"></div>
                  <div className="flex flex-col gap-3 items-center md:items-start">
                      <div className="p-4 rounded-2xl bg-surface-subtle border border-border-subtle text-primary shadow-sm mb-2">
                          <span className="material-symbols-outlined text-3xl font-variation-settings-light">groups</span>
                      </div>
                      <Heading variant="h2" className="text-text-primary text-4xl">10:1</Heading>
                      <Text className="text-text-tertiary font-bold uppercase tracking-widest text-xs">Player to Coach Ratio</Text>
                  </div>
                  <div className="hidden md:block w-px h-24 bg-border-subtle mx-auto"></div>
                  <div className="flex flex-col gap-3 items-center md:items-start">
                      <div className="p-4 rounded-2xl bg-surface-subtle border border-border-subtle text-primary shadow-sm mb-2">
                          <span className="material-symbols-outlined text-3xl font-variation-settings-light">stadium</span>
                      </div>
                      <Heading variant="h2" className="text-text-primary text-4xl">12</Heading>
                      <Text className="text-text-tertiary font-bold uppercase tracking-widest text-xs">Pro-Surface Courts</Text>
                  </div>
              </div>
          </Container>
        </section>

        {/* Adult Section */}
        <Container className="max-w-[960px] mb-20">
          <div className="flex items-center justify-between pb-8">
              <Heading as="h2" variant="h3" className="text-text-primary">Adult Programs</Heading>
              <Link to="/leagues" className="hidden md:inline-flex items-center gap-1 text-primary text-sm font-bold cursor-pointer hover:underline">
                  League Standings <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {adultPrograms.map((program) => (
                  <Card key={program.id} variant="elevated" className="flex flex-col p-0 border-border-subtle hover:border-primary/30 transition-all group overflow-hidden shadow-md">
                      <div className="w-full h-56 bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `url('${program.image}')` }}>
                          <div className="absolute top-4 right-4 shadow-lg">
                            <Badge variant="brand" size="sm" className="bg-surface-default/95 backdrop-blur-md px-3 py-1.5 uppercase tracking-widest">{program.badge}</Badge>
                          </div>
                      </div>
                      <div className="flex flex-col p-8 flex-grow">
                          <Heading as="h3" variant="h4" className="text-text-primary mb-3">{program.title}</Heading>
                          <Text variant="body-sm" className="text-text-secondary mb-6 line-clamp-3">
                              {program.shortDescription}
                          </Text>
                          <div className="mt-auto pt-6 border-t border-border-subtle flex items-center justify-between">
                              <div className="flex items-center gap-1.5 text-text-tertiary text-xs font-bold uppercase tracking-wider">
                                  <span className="material-symbols-outlined text-sm text-primary/70">schedule</span> {program.schedule}
                              </div>
                              <Link to={`/programs/${program.slug}`} className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                  {program.ctaText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                              </Link>
                          </div>
                      </div>
                  </Card>
              ))}
          </div>
        </Container>
        
        {/* Private Instruction Banner */}
        <Container className="max-w-[960px] mb-12">
          <Box className="relative overflow-hidden rounded-[2rem] bg-brand-gradient p-10 md:p-16 shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="text-center md:text-left flex-grow">
                      <Heading as="h2" variant="h2" className="text-white mb-4">Private Instruction</Heading>
                      <Text variant="body-lg" className="text-white/90 max-w-lg mb-0 font-medium">
                        Elevate your performance with tailored 1-on-1 sessions. Every package includes intensive video analysis and a custom development roadmap.
                      </Text>
                  </div>
                  <Button to="/booking?program=private-lesson" variant="secondary" size="lg" className="shadow-xl px-10 h-16 text-lg hover:scale-110 active:scale-95 transition-all">
                        Book a Lesson
                  </Button>
              </div>
          </Box>
        </Container>

      </div>
    </div>
  );
}
