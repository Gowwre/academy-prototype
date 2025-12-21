
import { Link } from 'react-router-dom';
import ProgramCard from '../components/shared/ProgramCard';
import StatItem from '../components/home/StatItem';
import AlumniCard from '../components/home/AlumniCard';
import TestimonialCard from '../components/home/TestimonialCard';
import TickerItem from '../components/home/TickerItem';
import SponsorLogo from '../components/home/SponsorLogo';

import Button from '../components/design-system/Button';
import Container from '../components/design-system/Container';
import { Heading, Text } from '../components/design-system/Typography';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRjvf40oYxauAFwuWNkL0fTS_qDWxbc7jtH2z7Um_zh5LdGNwyOL6WpG3Tsd5tiF-VEZqJhiabYmTq6p9W2C1S5j2wcYnJIw6sl5ppFrEiry0o-j6DlyMwrThsqUzZy90T6iOPJSMx5AKrlEWEtWYSnU8FR6FG5vaOGQ5glLQqjFfMGrJUKTWa25yTZzdELqDsWXa75EqMghC2ylv8sKIwEmgkHE1O2cKiRoJ39EFi_xnII01SQqP98ZVdXJtbMoq5yWTDYEdzaWU')" }}
        >
          {/* Refined Overlay for better contrast and light theme consistency */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/90"></div>
        </div>
        <Container className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6 backdrop-blur-sm border border-primary/20">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            World-Class Coaching Staff
          </div>
          <Heading as="h1" variant="display" className="max-w-4xl mb-6 text-text-primary">
            FORGING THE NEXT <br/>
            <span className="text-transparent bg-clip-text bg-brand-gradient">GENERATION OF PROS</span>
          </Heading>
          <Text variant="body-lg" className="max-w-2xl font-medium mb-10">
            Elite coaching, data-driven training, and a proven pathway to the podium. Join the academy that builds champions.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button variant="primary" size="lg" className="min-w-[200px] shadow-pink-500/20">
              REGISTER FOR TRYOUTS
            </Button>
            <Button 
              to="/programs" 
              variant="secondary" 
              size="lg" 
              className="min-w-[200px]"
              leftIcon={<span className="material-symbols-outlined text-primary">play_circle</span>}
            >
              EXPLORE PROGRAMS
            </Button>
          </div>
        </Container>
      </section>

      {/* News Ticker */}
      <div className="ticker-wrap">
        <div className="ticker">
          <TickerItem text="🎉 Congratulations to Sarah J. for Gold at Nationals!" />
          <TickerItem text="📢 Fall Tryouts begin Oct 15th — Limited Spots Available" />
          <TickerItem text="🌤️ Outdoor Courts Status: OPEN for Evening Play" />
          <TickerItem text="🏆 New 'Elite Masterclass' with Pro John Doe starting next month" />
          <TickerItem text="🎾 Junior Development Squad Registration closes soon" />
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-surface-subtle border-b border-border-default">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value="500" suffix="k+" label="Scholarship Funding" />
            <StatItem value="12" label="National Titles" />
            <StatItem value="24" suffix="/7" label="Facility Access" />
            <StatItem value="100" suffix="%" label="Pro Certified Coaches" />
          </div>
        </Container>
      </section>

      {/* Our Programs */}
      <section className="py-20 bg-surface-default relative">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <Heading as="h2" variant="h2" className="text-text-primary mb-4">Our Programs</Heading>
              <Text className="max-w-lg">Tailored training pathways designed to take athletes from foundational skills to professional competition.</Text>
            </div>
            <Link className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" to="/programs">
              View All Programs <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProgramCard 
              title="Development Squad"
              description="Foundational skills, coordination, and game understanding for young aspiring athletes."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBdOeDj_d0h2xawvDTJ3_JMg9DmIWVSonT7B_LCg7gHRbFu1FV1ow8xnugqSKkA7NF2CIsWyV-lYgq0AWMprenDRcsRv6jInKpr5EHkE7fWRn93J-I-PGCLdls3KBqgvZSpWFOexYww7-63fZv998FyZ_1bJHtgJJl-MLQGGMBLMofBPeVP9gFW0B2nAbRMWYs_4gI1XhLPtWmpW_mUQ7_10_V5FQiU73aGelMpkqemftYq4kKm_2pG9wCfTcce5dP0WQhNsLoz_0E"
              badge="AGES 8-12"
            />
            <ProgramCard 
              title="High Performance"
              description="Intense drilling, strategy sessions, and physical conditioning for tournament preparation."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAyboF-IaOX4Ovfkto2dUg2r_rcKstGdWN8EtrTP23y66JPycWBF0aO-X4zylXvyVb_82adlh7tLyqfOyd9zJmOkOw1OJDnjInCQ40gT8SbtpFNWTAsycJ5pRRlpuXGSpLdVAsB8ICZW0qebwj1KLWZCZu29WoAk3bvGji0ws_r5liKEyUDzJfRfNu7dB5xmW1A_HnPx_IMCSjI-xix3ryaPZR2UC8M_IQH2fyR_PsVdmW-UuA-1HxoiAM7KTbaidKG3NVCfq1Bk1w"
              badge="MOST POPULAR"
            />
            <ProgramCard 
              title="Private Instruction"
              description="1-on-1 personalized coaching to refine specific mechanics and gameplay weaknesses."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuB99vJikVg1liGViql88UdRBmLERRbAxPnbW0q537VkJJYgXeWAeo_rPTVA2KOkZVnzSRRXXWJC89TUxU_VjbhNkSqiAtz1zPzmOyobzV1Cr-IrCO0SOVoPRe4yTlvp2OVlrDtvWBtxzCAmGDZdoSVz9rcyfRj7lkZhYBRR6zR_ZmScEgLVgtrxYZvOpefne1m5wztSSOI9C-5EloZWt7eyCbapUzj-qudaFRpLS6R-E4QhbgDgnCPIDDUrpkVPM1SgPK0sYHYS7oU"
              badge="ALL AGES"
            />
          </div>
        </Container>
      </section>

      {/* Alumni Spotlight */}
      <section className="py-20 bg-surface-default">
        <Container>
          <Heading as="h2" variant="h2" className="text-text-primary mb-12 text-center">Alumni Success</Heading>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Main Spotlight */}
            <div className="w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden group">
              <div className="aspect-[4/3] lg:aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbBI51u09W7OaEwlz9N4edjZxwkKaQ4LsCyVmmB1gsUB71R5uiMAc2yT-ucQHfhPghSVRMjW7utcSc9nKaNhya3fbA1y6HL1cFPtgOAOvvdyVagIFjbEqb8YMEyb436iPa7AGpVsNNGTMlhqcNXPXFddxyGBiXiT_xFUlngyfLGyp7-f_OKznWUy9WE1AZEZLFq6g8fVTye8b_ZeRHTVvrnOGL4Ye7-t1_gNbjjOFosdX0_ePsS-dhO74P6dqp8N-YUmkrE7qOs2s')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <span className="material-symbols-outlined">emoji_events</span>
                  <span className="font-bold text-sm tracking-wider uppercase">National Champion</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2">JESSICA M.</h3>
                <p className="text-lg text-white/80 mb-6">Recruited by Top D1 University Program</p>
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-white/60 uppercase">Win Rate</p>
                    <p className="text-xl font-bold text-white">92%</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase">Titles</p>
                    <p className="text-xl font-bold text-white">14</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase">Rank</p>
                    <p className="text-xl font-bold text-white">#3</p>
                  </div>
                </div>
              </div>
            </div>
            {/* List of others */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AlumniCard 
                name="Michael R."
                achievement="Pro Tour Debut"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBfhQbz6oCWl6vphCvqUHT2dZRMBtwJfoHVpcWZha9HOx8G2_NlnZN5ir_VkDDHjNCLvSKulNqvHn5xTPEYQutc7TfMVN17_3_TvJlICf-P0i2SmZBMGfHIOW-IQa7LYJX2QQH57SVln-U9-kTMG7X7eeNYfCU83Z3wc4BFiBasu62Gc6bcfqrKv-a0hPm7x68PZl37r2UXpe80sq4nG_J467cvZVo7rQKM1r-0vweUXFoURfhAKBKnMgkeqgBRx7ovQqD488Jh6CM"
                quote="The coaching here transformed my backhand and mental game entirely."
              />
              <AlumniCard 
                name="Sarah K."
                achievement="Regional Gold"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuB67x0It2z2e4FAasWk-XJ6f5pWrNRz4xdHJ2kGq6De3jTPSxbPzfZ2Ttq_s5i1KzdLdRsEmzi-oD99y6i_JARZ2q2RHjt8mSnQg8korEEhVFb6-ccLL54QaJot0l1-lIbXSBPQS9HeinIJYUchr5emA893mllyZwOUQw7waMOW1GrMDsXbvA1AlKAKML567Bry6HF_0B0nvoFmEbIjyE4FBDuRpgN-R3kG-IDDKFC1kqW1nGgZ06TzJ23FvAAzngyBVTCLhixOCG8"
                quote="Incredible facilities and a community that pushes you to be your best."
              />
              <AlumniCard 
                name="David L."
                achievement="U18 Finalist"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuD2stjTW6-woAzmeYdRdn1OdMYH1XdgZuO0lWEfcc8gJtdkNjr8SVL0xwkdkevbo8HLgSDevH3FpRLyPm2269DYtAjIQ-2qCi7VIigicHE0Ssf_j_CrcF5aCTBkf9TbPS0iECH50p0ggynG30wUGloVfFKI5FGJ90qWSaIy-KBU2uAgdNpvz41RFiqmNGeSxBhki3LlgCaC9fc7GxvJ2KPajO-utOU1Yo-GWYtpV8gXWCaNAxINptoSHNAc169TU1FGVqUnT418tL0"
                quote="The strategic analysis sessions are game-changing. Truly elite level."
              />
              <div className="bg-surface-default p-6 rounded-2xl border border-border-default flex items-center justify-center group hover:bg-surface-subtle transition-all cursor-pointer shadow-sm">
                <div className="text-center">
                  <div className="mx-auto h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                  <span className="text-sm font-bold text-text-primary">View All Alumni</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface-subtle">
        <Container>
          <Heading as="h2" variant="h2" className="text-text-primary mb-12 text-center">Voices from the Court</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="As a parent investing in my child's future, I couldn't be happier. The disciplined approach and professional environment are unmatched."
              initials="JD"
              name="James Davidson"
              role="Parent of U14 Athlete"
            />
            <TestimonialCard 
              quote="The level of detail in the coaching is incredible. They don't just teach you how to hit the ball, they teach you how to win."
              initials="EP"
              name="Elena P."
              role="Professional Player"
            />
            <TestimonialCard 
              quote="The facilities are pristine and the community is electric. It's the only place I trust for my off-season training."
              initials="MR"
              name="Marcus Rodriguez"
              role="Semi-Pro Athlete"
            />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-brand-gradient">
        <div className="absolute inset-0 bg-white/10 z-0"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/20 rounded-full blur-[100px]"></div>
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-white/20 rounded-full blur-[100px]"></div>
        <Container className="relative z-10 text-center">
          <Heading as="h2" className="text-4xl md:text-5xl font-black text-white mb-6">READY TO ELEVATE YOUR GAME?</Heading>
          <Text variant="body-lg" className="text-white/80 mb-10 max-w-2xl mx-auto">Spaces for the upcoming Fall session are filling up fast. Secure your spot in the tryouts today.</Text>
          <Button variant="secondary" size="lg" className="hover:shadow-2xl hover:scale-105">
            JOIN THE ACADEMY
          </Button>
          <div className="mt-8 flex justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <SponsorLogo image="https://lh3.googleusercontent.com/aida-public/AB6AXuAGOEsWMpqPc_-tr3iHvaENXGTYCnTx9JXGl2lP8rxh0huvLbIRxSEhae1thEJvh-d6i2AtFrgEIz-EaLrmHz4xldwARILcx0hW7c0VRFdhMNMMNGXL3GdyLVpG9VZI3_6KQMof9yDJUJviYhcKoeHOGkSLpI2mD3pGp7-_Z975UQE67is4X4uPtFAMiBZ3ZjijL0BZr4H4D1SCUHH3Yo5r5x17EEthKP6moKmsytd_pZpFZhry_SQy8vbdD6iSaTiRfWQL4Xt9NRQ" />
            <SponsorLogo image="https://lh3.googleusercontent.com/aida-public/AB6AXuDKjOlIQLriZmF-lbHVvpmZ-iqk-BA6R3J-Ohht19cfHUk2om9z7Yqu9Tpls9Fuld3Bg0gLA1B76J3KQauIjVfdhLHf9dfYrwTvEN1gjE2gai1lNeBJuEGWOQf9lfkU-pb-6GrIyUDY3vxEOOh4wmV4cY17y6g8J9S7EHaIbwnf0SSBAwDv3Eb5lP6GBQN3MF9YDgcKIvVya7lzlXMmoSx-TUptaAqvHt-HuHHkIWxXug0KO4Ua4wXvqCAWjlVZkWLa4ksXME0FvU4" />
            <SponsorLogo image="https://lh3.googleusercontent.com/aida-public/AB6AXuA5PvO0LXL1q30NKsVgm2LPFxKkR8w-3K4GVQZvVxD_K4M2n2X6rzfEIycztGPZL8c-z_TML89KkJk11RlxNOC3GVYmEUQFU79P5kJxkW3WrYi6_2MGbh5742DSv_W3I2DtLnW7SeKRyazf3QcbMXqtTMslHXqVTs4U3GYQ9LNOrChZtN45kBzGsAQSveINSz_c6HnqKPkJmsCjxFLMXV6LfRteB9_JdOBpfv6YlM48vRgdh07uG54EA95_hS7vU6WwP5-x-52Qp0k" />
          </div>
        </Container>
      </section>
    </>
  );
}
