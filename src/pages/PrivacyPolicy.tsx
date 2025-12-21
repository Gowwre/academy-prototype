import { useEffect } from 'react';
import Container from '../components/design-system/Container';
import { Heading, Text } from '../components/design-system/Typography';
import Card from '../components/design-system/Card';
import Box from '../components/design-system/Box';
import Badge from '../components/design-system/Badge';

export default function PrivacyPolicy() {
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
                <Badge variant="brand" className="bg-white/10 text-white border-white/20 uppercase tracking-widest px-4 py-1.5">Legal Transparency</Badge>
              </div>
              <Heading as="h1" variant="display" className="text-white">
                PRIVACY POLICY
              </Heading>
              <Text variant="body-lg" className="text-white/80 max-w-[600px] mx-auto mb-0">
                How DJoy Academy protects your data and respects your privacy.
              </Text>
            </div>
        </Container>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <Container className="max-w-[800px]">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <Heading as="h2" variant="h3" className="text-text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl font-variation-settings-light">info</span>
                1. Introduction
              </Heading>
              <Text className="text-text-secondary leading-relaxed">
                At DJoy Academy, we are committed to protecting the privacy and security of our students, athletes, and visitors. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our academy, use our website, or participate in our programs.
              </Text>
              <Text className="text-text-tertiary leading-relaxed italic border-l-2 border-border-default pl-4">
                By using our services, you agree to the collection and use of information in accordance with this policy. Last updated: December 2023.
              </Text>
            </div>

            <div className="flex flex-col gap-6">
              <Heading as="h2" variant="h3" className="text-text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl font-variation-settings-light">person_search</span>
                2. Information We Collect
              </Heading>
              <Text className="text-text-secondary leading-relaxed">
                We collect information that you provide directly to us, including:
              </Text>
              <ul className="space-y-4 ml-2">
                {[
                  { label: 'Contact Information', desc: 'Name, email address, phone number, and mailing address.' },
                  { label: 'Athlete Profiles', desc: 'Age, skill level, health and injury history relevant to performance training.' },
                  { label: 'Payment Information', desc: 'Credit card details and billing addresses (processed securely through third-party providers).' },
                  { label: 'Media Coverage', desc: 'Photos and videos taken during training sessions or tournaments (with your consent).' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></span>
                    <Text variant="body-sm" className="mb-0"><span className="font-bold text-text-primary">{item.label}:</span> {item.desc}</Text>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <Heading as="h2" variant="h3" className="text-text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl font-variation-settings-light">analytics</span>
                3. How We Use Your Information
              </Heading>
              <Text className="text-text-secondary leading-relaxed">
                The information we collect is used to:
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                {[
                  { title: 'Service Provision', desc: 'Register you for classes, track athletic progress, and manage court bookings.' },
                  { title: 'Communication', desc: 'Send program updates, weather alerts for outdoor sessions, and marketing news.' },
                  { title: 'Safety & Health', desc: 'Ensure athletes are training safely relative to their physical condition.' },
                  { title: 'Improvement', desc: 'Analyze participation trends to optimize our program offerings and facilities.' }
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
                <span className="material-symbols-outlined text-primary text-3xl font-variation-settings-light">security</span>
                4. Data Protection & Security
              </Heading>
              <Text className="text-text-secondary leading-relaxed">
                We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure. This includes encrypted data transmission, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </Text>
            </div>

            <div className="flex flex-col gap-6">
              <Heading as="h2" variant="h3" className="text-text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl font-variation-settings-light">share</span>
                5. Sharing Your Information
              </Heading>
              <Text className="text-text-secondary leading-relaxed">
                We do not sell your personal information to third parties. We may share information with trusted partners who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
              </Text>
            </div>

            <Box className="p-10 rounded-[2rem] bg-brand-gradient text-white shadow-xl">
              <Heading as="h2" variant="h3" className="text-white flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-white text-3xl font-variation-settings-light">verified_user</span>
                6. Your Rights
              </Heading>
              <Text className="text-white/90 leading-relaxed font-medium mb-0">
                You have the right to access, correct, or delete your personal information at any time. You may also opt-out of marketing communications by clicking the "unsubscribe" link in our emails or by contacting us directly.
              </Text>
            </Box>

            <div className="flex flex-col gap-6">
              <Heading as="h2" variant="h3" className="text-text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl font-variation-settings-light">cookie</span>
                7. Cookies
              </Heading>
              <Text className="text-text-secondary leading-relaxed">
                Our website uses cookies to enhance your browsing experience, remember your preferences, and analyze traffic. You can choose to disable cookies through your browser settings, though some features of our site may not function properly as a result.
              </Text>
            </div>

            <div className="flex flex-col gap-10 pt-16 border-t border-border-subtle">
              <div className="text-center md:text-left">
                <Heading as="h2" variant="h3" className="text-text-primary mb-4">Contact Us</Heading>
                <Text className="text-text-secondary mb-0 max-w-xl">
                  If you have any questions about this Privacy Policy or our treatment of your personal data, please reach out to our privacy officer.
                </Text>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card variant="outlined" className="flex items-center gap-6 p-6 border-border-subtle bg-surface-subtle">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-3xl font-variation-settings-light">mail</span>
                  </div>
                  <div>
                    <Text variant="caption" className="font-bold text-text-primary uppercase tracking-widest mb-1">Email</Text>
                    <Text className="text-text-secondary mb-0 font-medium">privacy@djoyacademy.com</Text>
                  </div>
                </Card>
                <Card variant="outlined" className="flex items-center gap-6 p-6 border-border-subtle bg-surface-subtle">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-3xl font-variation-settings-light">location_on</span>
                  </div>
                  <div>
                    <Text variant="caption" className="font-bold text-text-primary uppercase tracking-widest mb-1">Address</Text>
                    <Text className="text-text-secondary mb-0 font-medium">123 Pickleball Way, Austin, TX 78701</Text>
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
