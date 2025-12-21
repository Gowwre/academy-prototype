import { useEffect } from 'react';
import Container from '../components/design-system/Container';
import { Heading, Text } from '../components/design-system/Typography';
import Card from '../components/design-system/Card';
import Box from '../components/design-system/Box';
import Badge from '../components/design-system/Badge';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-surface-default min-h-screen">
      {/* Hero Section */}
      <section className="bg-text-primary py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594470117722-de43603ff3fa?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>
        <Container className="relative z-10 text-center">
            <div className="flex flex-col gap-4 max-w-[800px] mx-auto">
              <div className="flex justify-center">
                <Badge variant="brand" className="bg-white/10 text-white border-white/20 uppercase tracking-widest px-4 py-1.5">Academy Rules</Badge>
              </div>
              <Heading as="h1" variant="display" className="text-white">
                TERMS OF SERVICE
              </Heading>
              <Text variant="body-lg" className="text-white/80 max-w-[600px] mx-auto mb-0">
                The standards and agreements that govern your participation at DJoy Academy.
              </Text>
            </div>
        </Container>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <Container className="max-w-[800px]">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <Heading as="h2" variant="h3" className="text-text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl font-variation-settings-light">gavel</span>
                1. Acceptance of Terms
              </Heading>
              <Text className="text-text-secondary leading-relaxed">
                By accessing our facilities, registering for our programs, or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </Text>
            </div>

            <div className="flex flex-col gap-6">
              <Heading as="h2" variant="h3" className="text-text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl font-variation-settings-light">assignment_ind</span>
                2. Membership & Registration
              </Heading>
              <Text className="text-text-secondary leading-relaxed">
                To participate in DJoy Academy programs, you must provide accurate and complete registration information. Membership is personal and non-transferable. We reserve the right to refuse service or terminate memberships for violation of academy policies or conduct codes.
              </Text>
              <ul className="space-y-4 ml-2">
                {[
                  'Members must be at least 18 years old or have parental/guardian consent.',
                  'Required health waivers must be signed before any physical activity.',
                  'Users are responsible for maintaining the confidentiality of their account credentials.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></span>
                    <Text variant="body-sm" className="mb-0 text-text-secondary">{item}</Text>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <Heading as="h2" variant="h3" className="text-text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl font-variation-settings-light">calendar_today</span>
                3. Bookings & Cancellations
              </Heading>
              <Text className="text-text-secondary leading-relaxed">
                Court bookings and training sessions are subject to availability and must be reserved through our official platform.
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                {[
                  { title: 'Cancellation Window', desc: 'Cancellations must be made at least 24 hours in advance to receive credit or refund.' },
                  { title: 'No-Show Policy', desc: 'Failure to attend a booked session without prior notice may result in forfeiture of the session fee.' }
                ].map((item, i) => (
                  <Card key={i} variant="outlined" className="p-6 bg-surface-subtle border-border-default hover:border-primary/30 transition-colors">
                    <Heading as="h4" variant="h4" className="text-text-primary mb-2 text-sm uppercase tracking-widest">{item.title}</Heading>
                    <Text variant="body-sm" className="text-text-secondary mb-0 leading-relaxed">{item.desc}</Text>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Heading as="h2" variant="h3" className="text-text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl font-variation-settings-light">warning</span>
                4. Liability & Safety
              </Heading>
              <Text className="text-text-primary leading-relaxed font-bold italic border-l-4 border-primary/30 pl-6 py-2 bg-surface-subtle">
                Participation in pickleball and athletic training involves inherent risks of injury.
              </Text>
              <Text className="text-text-secondary leading-relaxed">
                By using our facilities, you voluntarily assume all risks associated with participation. DJoy Academy, its coaches, and staff shall not be liable for any injuries, damages, or losses sustained on our premises or during our programs, except in cases of gross negligence.
              </Text>
            </div>

            <div className="flex flex-col gap-6">
              <Heading as="h2" variant="h3" className="text-text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl font-variation-settings-light">groups</span>
                5. Code of Conduct
              </Heading>
              <Text className="text-text-secondary leading-relaxed">
                We pride ourselves on a respectful and inclusive community. All athletes and visitors are expected to:
              </Text>
              <ul className="space-y-4 ml-2">
                {[
                  'Display good sportsmanship at all times.',
                  'Respect coaches, staff, and other participants.',
                  'Adhere to safety instructions and court rules.',
                  'Refrain from abusive language or disruptive behavior.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></span>
                    <Text variant="body-sm" className="mb-0 text-text-secondary">{item}</Text>
                  </li>
                ))}
              </ul>
            </div>

            <Box className="p-10 rounded-[2rem] bg-brand-gradient text-white shadow-xl">
              <Heading as="h2" variant="h3" className="text-white flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-white text-3xl font-variation-settings-light">payments</span>
                6. Payments & Fees
              </Heading>
              <Text className="text-white/90 leading-relaxed font-medium mb-0">
                All fees for programs, court rentals, and events must be paid in full at the time of booking or according to the specified installment plan. We use secure third-party payment processors and do not store sensitive financial data on our own servers.
              </Text>
            </Box>

            <div className="flex flex-col gap-6">
              <Heading as="h2" variant="h3" className="text-text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl font-variation-settings-light">copyright</span>
                7. Intellectual Property
              </Heading>
              <Text className="text-text-secondary leading-relaxed">
                All content on our website and training materials, including text, graphics, logos, and videos, is the property of DJoy Academy and is protected by copyright and other intellectual property laws. Unauthorized use of these materials is strictly prohibited.
              </Text>
            </div>

            <div className="flex flex-col gap-10 pt-16 border-t border-border-subtle">
              <div className="text-center md:text-left">
                <Heading as="h2" variant="h3" className="text-text-primary mb-4">Questions?</Heading>
                <Text className="text-text-secondary mb-0 max-w-xl">
                  If you have any questions regarding these Terms of Service, please contact our administrative team.
                </Text>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card variant="outlined" className="flex items-center gap-6 p-6 border-border-subtle bg-surface-subtle">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-3xl font-variation-settings-light">support_agent</span>
                  </div>
                  <div>
                    <Text variant="caption" className="font-bold text-text-primary uppercase tracking-widest mb-1">Support</Text>
                    <Text className="text-text-secondary mb-0 font-medium">support@djoyacademy.com</Text>
                  </div>
                </Card>
                <Card variant="outlined" className="flex items-center gap-6 p-6 border-border-subtle bg-surface-subtle">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-3xl font-variation-settings-light">call</span>
                  </div>
                  <div>
                    <Text variant="caption" className="font-bold text-text-primary uppercase tracking-widest mb-1">Call Us</Text>
                    <Text className="text-text-secondary mb-0 font-medium">(555) 123-4567</Text>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
