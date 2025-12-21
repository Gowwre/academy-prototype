
import { useState } from 'react';
import { STAFF_MEMBERS } from '../data/staff';
import StaffDetailModal from '../components/about/StaffDetailModal';
import Container from '../components/design-system/Container';
import { Heading, Text } from '../components/design-system/Typography';
import Button from '../components/design-system/Button';
import Card from '../components/design-system/Card';
import Badge from '../components/design-system/Badge';

export default function About() {
  const [selectedStaffId, setSelectedStaffId] = useState<string | null>(null);
  
  const selectedStaff = STAFF_MEMBERS.find(s => s.id === selectedStaffId) || null;

  return (
    <div className="w-full flex justify-center flex-col bg-white min-h-screen">
       {/* Hero Section */}
       {/* Hero Section */}
        <section className="py-5">
            <Container>
                <div className="@container">
                    <div className="@[480px]:p-4">
                        <div 
                            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-6 md:p-12 relative overflow-hidden group"
                            style={{ backgroundImage: 'linear-gradient(to right, rgba(9, 89, 162, 0.85), rgba(232, 22, 140, 0.85)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvItW7vc6NATP2M7AFyia2lu1sLv1GGyZOGZPtctcpDRbxxdKOPLHVW5Buozj4Kq06PYIDKA-XuTJKQK_GwsP79IXEx7Q4tU8aKNDwT4Y_EoR1e9lUfmOqWDNprxk1wN2xfXG4defBVAn7EaHUSiZs6kUkGPwyKdDqDRo4LJsgzOwM3krLyRV77cXgl8Wz0hrnBb4Dzo34Q4Ggl0N3NU2dmfOC4Ux71ZHcQkOCDpSFkA-pDS4q-djZuWe__QL9oJOHMrqvhWgmblc")' }}
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                            <div className="relative flex flex-col gap-4 text-center max-w-[800px]">
                                <span className="text-white/90 font-bold tracking-widest uppercase text-xs md:text-sm">Establish Your Legacy</span>
                                <Heading as="h1" variant="display" className="text-white leading-tight">
                                    FORGING THE FUTURE OF PICKLEBALL
                                </Heading>
                                <Text variant="body-lg" className="text-white/90 font-normal max-w-[600px] mx-auto">
                                    Our mission is to cultivate elite athletic potential through rigorous training, world-class facilities, and expert mentorship. We don't just teach the game; we build champions.
                                </Text>
                            </div>
                            <div className="relative flex gap-4 mt-4">
                                <Button className="bg-white text-primary hover:bg-white/90 hover:scale-105 border-none shadow-xl">
                                    View Our Programs
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section> 

        {/* Our Story Section */}
        <section className="py-12">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 text-primary font-bold">
                            <span className="material-symbols-outlined text-xl">history_edu</span>
                            <span className="uppercase tracking-wider text-sm">Our Story</span>
                        </div>
                        <Heading as="h2" variant="h2" className="text-text-primary leading-tight">
                            From Humble Beginnings to National Excellence
                        </Heading>
                        <div className="flex flex-col gap-4 text-text-secondary text-lg leading-relaxed">
                            <Text>
                                Founded in 2018, DJoy Academy began with a single vision: to professionalize the sport of pickleball. What started as a grassroots initiative on two converted tennis courts has evolved into the nation's premier development center.
                            </Text>
                            <Text>
                                We saw a gap in the market—passionate players with nowhere to go for serious, data-driven instruction. Our journey has been defined by an unyielding commitment to excellence, investing in top-tier coaching talent and biomechanical analysis technology that was previously reserved for major league sports.
                            </Text>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4 pt-8">
                            <div className="w-full aspect-[3/4] bg-center bg-no-repeat bg-cover rounded-xl shadow-lg border border-gray-200 opacity-80 hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdWISP6q9Cjrad9w9Sieyrej9XxlXZkwaiw9zM6z4iFNEQosVqyyuMbO1_Y7KfhK7_pUCyuMbySH3mM53THL8clHiUcdnGmVGZoMKU1wXtXfx3ZVbzb3jc8l3GEAAomyHdOksQtI5nRS8eBmqeCUxsUSVi1PFA0eZrmdg1qXmBf9iP_67kmHvvHIza-45Stk6PkKBb6kt1pBuh_oVLHr47HaOHZYD5lZH7Se_mIz9eQgtgCcehRRwz-n3e6-lKFxPPFc3LoChAsnM")' }}></div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-full aspect-[3/4] bg-center bg-no-repeat bg-cover rounded-xl shadow-lg border border-gray-200 hover:scale-[1.02] transition-transform duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCc1p9lsYITdasiQOT9LObEhIgoGGxkDPdxh7aD0uG-uoIG7fH9F8xR-AZLqR9QFgZCSWyUs5GrtI4iHHOyJ097kKAgf1y6ECFqX_ijuBc0s1yFZ4KnweQYx9pCfJnhhcXZ3QVT1JQnoMKJfMeocQu6KqwJf9CCrz6A72ulrRXR8UQ-R_cQhBVy9VvYIlZBq-aLMdWkyJ86JtiBbp2UoDIsFapWcjAFoU00yBv4Y5WD1Wig4EuVGMvWs0ZiUM3zvSdP5HmPUVUGnhE")' }}></div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        {/* Philosophy Section */}
        <section className="py-12 bg-surface-subtle border-y border-border-default">
            <Container>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4 text-center items-center">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Methodology</span>
                        <Heading as="h2" variant="h2" className="text-text-primary leading-tight">
                            The Elite Philosophy
                        </Heading>
                        <Text className="text-base md:text-lg max-w-[720px]">
                            We believe champions are made, not born. Our holistic approach integrates technical precision, physical conditioning, and mental fortitude.
                        </Text>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <Card variant="elevated" className="gap-5 flex flex-col hover:border-primary/50 transition-colors duration-300">
                            <div className="text-primary bg-surface-highlight w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Heading as="h3" variant="h4" className="text-text-primary leading-tight">Technical Mastery</Heading>
                                <Text variant="body-sm" className="leading-relaxed">
                                    We deconstruct every stroke. Through high-repetition drilling and video analysis, we turn complex mechanics into instinctual reflexes.
                                </Text>
                            </div>
                        </Card>
                        {/* Card 2 */}
                        <Card variant="elevated" className="gap-5 flex flex-col hover:border-primary/50 transition-colors duration-300">
                            <div className="text-primary bg-surface-highlight w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">fitness_center</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Heading as="h3" variant="h4" className="text-text-primary leading-tight">Physical Dominance</Heading>
                                <Text variant="body-sm" className="leading-relaxed">
                                    State-of-the-art strength and conditioning tailored for court sports. We build explosive speed, endurance, and injury resilience.
                                </Text>
                            </div>
                        </Card>
                        {/* Card 3 */}
                        <Card variant="elevated" className="gap-5 flex flex-col hover:border-primary/50 transition-colors duration-300">
                            <div className="text-primary bg-surface-highlight w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">psychology</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Heading as="h3" variant="h4" className="text-text-primary leading-tight">Mental Resilience</Heading>
                                <Text variant="body-sm" className="leading-relaxed">
                                    Psychological training to perform under championship pressure. We teach athletes to control the tempo and master their mindset.
                                </Text>
                            </div>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>

        {/* Staff Section */}
        <section className="py-16">
            <Container>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border-default pb-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Leadership</span>
                            <Heading as="h2" variant="h2" className="text-text-primary leading-tight">Meet The Elite Staff</Heading>
                        </div>
                        <Text className="text-text-secondary max-w-md text-sm md:text-base mb-1">
                            Our coaches are former pros, certified master instructors, and lifelong students of the game.
                        </Text>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {STAFF_MEMBERS.map((staff) => (
                            <Card key={staff.id} variant="elevated" className="flex flex-col gap-4 p-4 group hover:-translate-y-1 transition-transform duration-300">
                                <div 
                                    className="aspect-[4/5] w-full rounded-xl bg-center bg-cover bg-no-repeat grayscale group-hover:grayscale-0 transition-all duration-500" 
                                    style={{ backgroundImage: `url("${staff.imageUrl}")` }}
                                ></div>
                                <div className="flex flex-col gap-1 px-1">
                                    <Heading as="h3" variant="h4" className="text-text-primary">{staff.name}</Heading>
                                    <Text className="text-primary text-sm font-bold uppercase tracking-wide">{staff.role}</Text>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {staff.badges.map((badge, idx) => (
                                            <Badge key={idx} variant="neutral" size="sm">
                                                {badge}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <Button 
                                    variant="secondary" 
                                    size="sm"
                                    onClick={() => setSelectedStaffId(staff.id)}
                                    className="mt-2 w-full uppercase tracking-wider"
                                >
                                    View Credentials
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
        
        <StaffDetailModal 
            staff={selectedStaff}
            onClose={() => setSelectedStaffId(null)}
        />

        {/* Facilities Section */}
        <section className="py-16 bg-brand-gradient">
            <Container>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 text-center mb-4">
                        <span className="text-white/80 font-bold tracking-widest uppercase text-sm">Environment</span>
                        <Heading as="h2" variant="h2" className="text-white leading-tight">World-Class Facilities</Heading>
                        <Text className="text-white/90 text-base max-w-2xl mx-auto">
                            Designed for optimal performance. Our 50,000 sq ft complex features 20 championship courts, dedicated recovery zones, and advanced biomechanics labs.
                        </Text>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
                        {/* Large item spanning 2 rows on large screens */}
                        <div className="lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden relative group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9q2h9i6dR_YE3dK0XeueAVnPyADYhj2JoqZWw7HflL6dooX4zNqbnto9FomJ6f_eTMVVcQCNpVtlGWFNK2G7_7kbyHn75_GOVs0TW1v-ZP_fxkycA6DABLXgUv2BMfHQVNhGhe0npxp6DvvbVSD20st1mNC513-I6enVC7uPn2F1hYwHeLbSvYz_NhGrZgFn3o3XvciEYnvPgRY3r_64U0eIkPOHikhbmAkRxu0wbxlFmrPpoXqhlVDvftSduF1vxbxokeM34XUI")' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-xl">Championship Arena</h3>
                                <p className="text-white/80 text-sm">Pro-cushion surfacing and broadcast-ready lighting.</p>
                            </div>
                        </div>
                        {/* Regular items */}
                        <div className="rounded-2xl overflow-hidden relative group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCM0ilXNR1IeT8BK5BfUPqC26jad-XsHTG4TCREGaBpH6Qq3lBreGJaxiQW2GYaG9DFMMSivD6vC3Vz10DBOPlDvndFV5dYbwq_bRo0QRb2KtbTETfw7eV9Cmc1MqW8etsCuSQ-6mxIVqFVeMh5jaWQ21y8Pl43hpuyY-iTyeqRRzM7_yILcmWakd4tg_KQrJFTpa53TuKC3t6dyg6hFeYUYX8M5Y5s6i25OMVXNW7Bo3N4QO8G1bV0JVCs3vR-ep5vh71Tf3LxySM")' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-lg">Performance Gym</h3>
                                <p className="text-white/80 text-sm">Olympic lifting stations & functional turf.</p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden relative group">
                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9g4A33TQYZ11iHwj0cpKF4EOXuidZM1U3mpLm7S2bScDSSliXlaJqcGFonj968BkYdfnZHj8ornI6DOhod12Oa79OGx-F9f0_ugyX-0-vr7dMFhct1Eh1EX5d-yKmFthcDdPXrcnpU4qPXED-geCaclPjaaEcn9Bxx2YYbR1sswJlFHkEaG_vF2tGvEmDYrS2pribxtkKY4jCVTr2z_u49gqwcD0YXdfO_sjYt5yN-k3P0ArXF0GQC6UsRphaUpzf70NaQH7e7QM")' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-lg">Recovery Lounge</h3>
                                <p className="text-white/80 text-sm">Normatec compression & cryotherapy.</p>
                            </div>
                        </div>
                         {/* Bottom wide item */}
                         <div className="md:col-span-2 lg:col-span-1 rounded-2xl overflow-hidden relative group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXJk-NOiZqmoaU6MXSO8sfrxEUttpigxiQf7Y5t4d-bD5Jj2f3mBrlq5L9-3zXpSjbBCBo439P4NzG68rOyNeoSmzswRy7cm7b0IJdwSHrRTnpWR8NuwHMwFyLb-UDOVgoe8tGJ_SON756wYGkr8D5-Bg8T4D79t9AfiY9XUQjcvB3FzeuyLYK8KvXKjW2Ol7j2rLf_HsruHygLSBJojGmg5o750Hb4kcyj6EGG4z5si4_QBaIOjEgMvGo8X5xVt1czFHI18s_4sI")' }}></div>
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-lg">Biomechanics Lab</h3>
                                <p className="text-white/80 text-sm">High-speed motion capture analysis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        {/* Trust / Certifications */}
        <section className="py-12 border-t border-border-default bg-surface-subtle">
            <Container>
                <div className="flex flex-col items-center gap-6">
                    <p className="text-text-tertiary text-sm font-bold tracking-widest uppercase">Certified & Supported By</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2 text-text-secondary font-black text-xl">
                            <span className="material-symbols-outlined text-3xl">verified_user</span> PPR
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary font-black text-xl">
                            <span className="material-symbols-outlined text-3xl">sports_score</span> IPTPA
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary font-black text-xl">
                            <span className="material-symbols-outlined text-3xl">health_and_safety</span> USAPA
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary font-black text-xl">
                            <span className="material-symbols-outlined text-3xl">trophy</span> PPA TOUR
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </div>
  );
}
