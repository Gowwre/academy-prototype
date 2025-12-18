
import { Link } from 'react-router-dom';

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
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6 backdrop-blur-sm border border-primary/20">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            World-Class Coaching Staff
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6 drop-shadow-lg">
            FORGING THE NEXT <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-200">GENERATION OF PROS</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-300 md:text-xl font-medium mb-10 leading-relaxed">
            Elite coaching, data-driven training, and a proven pathway to the podium. Join the academy that builds champions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className="flex items-center justify-center h-14 px-8 rounded-full bg-primary text-background-dark text-lg font-extrabold tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(83,210,45,0.5)] min-w-[200px]">
              REGISTER FOR TRYOUTS
            </button>
            <Link to="/programs" className="flex items-center justify-center h-14 px-8 rounded-full bg-white/10 text-white border border-white/20 text-lg font-bold tracking-wide transition-all hover:bg-white/20 hover:border-white/40 backdrop-blur-sm min-w-[200px]">
              <span className="mr-2 material-symbols-outlined">play_circle</span>
              EXPLORE PROGRAMS
            </Link>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <div className="ticker-wrap">
        <div className="ticker">
          <div className="ticker__item">🎉 Congratulations to Sarah J. for Gold at Nationals!</div>
          <div className="ticker__item">📢 Fall Tryouts begin Oct 15th — Limited Spots Available</div>
          <div className="ticker__item">🌤️ Outdoor Courts Status: OPEN for Evening Play</div>
          <div className="ticker__item">🏆 New "Elite Masterclass" with Pro John Doe starting next month</div>
          <div className="ticker__item">🎾 Junior Development Squad Registration closes soon</div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-surface-dark border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">500<span className="text-primary">k+</span></p>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Scholarship Funding</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">12</p>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">National Titles</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">24<span className="text-primary">/7</span></p>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Facility Access</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">100<span className="text-primary">%</span></p>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Pro Certified Coaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-20 bg-background-dark relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Programs</h2>
              <p className="text-gray-400 max-w-lg">Tailored training pathways designed to take athletes from foundational skills to professional competition.</p>
            </div>
            <Link className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" to="/programs">
              View All Programs <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Program Card 1 */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdOeDj_d0h2xawvDTJ3_JMg9DmIWVSonT7B_LCg7gHRbFu1FV1ow8xnugqSKkA7NF2CIsWyV-lYgq0AWMprenDRcsRv6jInKpr5EHkE7fWRn93J-I-PGCLdls3KBqgvZSpWFOexYww7-63fZv998FyZ_1bJHtgJJl-MLQGGMBLMofBPeVP9gFW0B2nAbRMWYs_4gI1XhLPtWmpW_mUQ7_10_V5FQiU73aGelMpkqemftYq4kKm_2pG9wCfTcce5dP0WQhNsLoz_0E')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="mb-2 inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md">
                  AGES 8-12
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Development Squad</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">Foundational skills, coordination, and game understanding for young aspiring athletes.</p>
                <span className="inline-flex items-center text-white text-sm font-bold group-hover:text-primary transition-colors">
                  Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_outward</span>
                </span>
              </div>
            </div>
            {/* Program Card 2 */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyboF-IaOX4Ovfkto2dUg2r_rcKstGdWN8EtrTP23y66JPycWBF0aO-X4zylXvyVb_82adlh7tLyqfOyd9zJmOkOw1OJDnjInCQ40gT8SbtpFNWTAsycJ5pRRlpuXGSpLdVAsB8ICZW0qebwj1KLWZCZu29WoAk3bvGji0ws_r5liKEyUDzJfRfNu7dB5xmW1A_HnPx_IMCSjI-xix3ryaPZR2UC8M_IQH2fyR_PsVdmW-UuA-1HxoiAM7KTbaidKG3NVCfq1Bk1w')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="mb-2 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-bold text-background-dark backdrop-blur-md">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">High Performance</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">Intense drilling, strategy sessions, and physical conditioning for tournament preparation.</p>
                <span className="inline-flex items-center text-white text-sm font-bold group-hover:text-primary transition-colors">
                  Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_outward</span>
                </span>
              </div>
            </div>
            {/* Program Card 3 */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB99vJikVg1liGViql88UdRBmLERRbAxPnbW0q537VkJJYgXeWAeo_rPTVA2KOkZVnzSRRXXWJC89TUxU_VjbhNkSqiAtz1zPzmOyobzV1Cr-IrCO0SOVoPRe4yTlvp2OVlrDtvWBtxzCAmGDZdoSVz9rcyfRj7lkZhYBRR6zR_ZmScEgLVgtrxYZvOpefne1m5wztSSOI9C-5EloZWt7eyCbapUzj-qudaFRpLS6R-E4QhbgDgnCPIDDUrpkVPM1SgPK0sYHYS7oU')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="mb-2 inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md">
                  ALL AGES
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Private Instruction</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">1-on-1 personalized coaching to refine specific mechanics and gameplay weaknesses.</p>
                <span className="inline-flex items-center text-white text-sm font-bold group-hover:text-primary transition-colors">
                  Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_outward</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Spotlight */}
      <section className="py-20 bg-surface-dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Alumni Success</h2>
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
                <p className="text-lg text-gray-300 mb-6">Recruited by Top D1 University Program</p>
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Win Rate</p>
                    <p className="text-xl font-bold text-white">92%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Titles</p>
                    <p className="text-xl font-bold text-white">14</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Rank</p>
                    <p className="text-xl font-bold text-white">#3</p>
                  </div>
                </div>
              </div>
            </div>
            {/* List of others */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-background-dark p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-12 w-12 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfhQbz6oCWl6vphCvqUHT2dZRMBtwJfoHVpcWZha9HOx8G2_NlnZN5ir_VkDDHjNCLvSKulNqvHn5xTPEYQutc7TfMVN17_3_TvJlICf-P0i2SmZBMGfHIOW-IQa7LYJX2QQH57SVln-U9-kTMG7X7eeNYfCU83Z3wc4BFiBasu62Gc6bcfqrKv-a0hPm7x68PZl37r2UXpe80sq4nG_J467cvZVo7rQKM1r-0vweUXFoURfhAKBKnMgkeqgBRx7ovQqD488Jh6CM')" }}></div>
                  <div>
                    <h4 className="font-bold text-white">Michael R.</h4>
                    <p className="text-xs text-primary">Pro Tour Debut</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">"The coaching here transformed my backhand and mental game entirely."</p>
              </div>
              <div className="bg-background-dark p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-12 w-12 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB67x0It2z2e4FAasWk-XJ6f5pWrNRz4xdHJ2kGq6De3jTPSxbPzfZ2Ttq_s5i1KzdLdRsEmzi-oD99y6i_JARZ2q2RHjt8mSnQg8korEEhVFb6-ccLL54QaJot0l1-lIbXSBPQS9HeinIJYUchr5emA893mllyZwOUQw7waMOW1GrMDsXbvA1AlKAKML567Bry6HF_0B0nvoFmEbIjyE4FBDuRpgN-R3kG-IDDKFC1kqW1nGgZ06TzJ23FvAAzngyBVTCLhixOCG8')" }}></div>
                  <div>
                    <h4 className="font-bold text-white">Sarah K.</h4>
                    <p className="text-xs text-primary">Regional Gold</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">"Incredible facilities and a community that pushes you to be your best."</p>
              </div>
              <div className="bg-background-dark p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-12 w-12 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2stjTW6-woAzmeYdRdn1OdMYH1XdgZuO0lWEfcc8gJtdkNjr8SVL0xwkdkevbo8HLgSDevH3FpRLyPm2269DYtAjIQ-2qCi7VIigicHE0Ssf_j_CrcF5aCTBkf9TbPS0iECH50p0ggynG30wUGloVfFKI5FGJ90qWSaIy-KBU2uAgdNpvz41RFiqmNGeSxBhki3LlgCaC9fc7GxvJ2KPajO-utOU1Yo-GWYtpV8gXWCaNAxINptoSHNAc169TU1FGVqUnT418tL0')" }}></div>
                  <div>
                    <h4 className="font-bold text-white">David L.</h4>
                    <p className="text-xs text-primary">U18 Finalist</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">"The strategic analysis sessions are game-changing. Truly elite level."</p>
              </div>
              <div className="bg-background-dark p-6 rounded-2xl border border-white/5 flex items-center justify-center group hover:bg-surface-dark transition-all cursor-pointer">
                <div className="text-center">
                  <div className="mx-auto h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                  <span className="text-sm font-bold text-white">View All Alumni</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background-dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Voices from the Court</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-surface-dark p-8 rounded-[2rem] relative">
              <span className="material-symbols-outlined text-6xl text-primary/10 absolute top-6 right-6">format_quote</span>
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"As a parent investing in my child's future, I couldn't be happier. The disciplined approach and professional environment are unmatched."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">JD</div>
                <div>
                  <p className="text-white font-bold text-sm">James Davidson</p>
                  <p className="text-gray-500 text-xs">Parent of U14 Athlete</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-surface-dark p-8 rounded-[2rem] relative">
              <span className="material-symbols-outlined text-6xl text-primary/10 absolute top-6 right-6">format_quote</span>
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"The level of detail in the coaching is incredible. They don't just teach you how to hit the ball, they teach you how to win."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">EP</div>
                <div>
                  <p className="text-white font-bold text-sm">Elena P.</p>
                  <p className="text-gray-500 text-xs">Professional Player</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-surface-dark p-8 rounded-[2rem] relative">
              <span className="material-symbols-outlined text-6xl text-primary/10 absolute top-6 right-6">format_quote</span>
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"The facilities are pristine and the community is electric. It's the only place I trust for my off-season training."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">MR</div>
                <div>
                  <p className="text-white font-bold text-sm">Marcus Rodriguez</p>
                  <p className="text-gray-500 text-xs">Semi-Pro Athlete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-0"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">READY TO ELEVATE YOUR GAME?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Spaces for the upcoming Fall session are filling up fast. Secure your spot in the tryouts today.</p>
          <button className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-primary text-background-dark text-xl font-extrabold tracking-wide transition-transform hover:scale-105 hover:shadow-[0_0_40px_rgba(83,210,45,0.6)]">
            JOIN THE ACADEMY
          </button>
          <div className="mt-8 flex justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Fake Sponsor Logos */}
            <div className="h-8 w-24 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGOEsWMpqPc_-tr3iHvaENXGTYCnTx9JXGl2lP8rxh0huvLbIRxSEhae1thEJvh-d6i2AtFrgEIz-EaLrmHz4xldwARILcx0hW7c0VRFdhMNMMNGXL3GdyLVpG9VZI3_6KQMof9yDJUJviYhcKoeHOGkSLpI2mD3pGp7-_Z975UQE67is4X4uPtFAMiBZ3ZjijL0BZr4H4D1SCUHH3Yo5r5x17EEthKP6moKmsytd_pZpFZhry_SQy8vbdD6iSaTiRfWQL4Xt9NRQ')" }}></div>
            <div className="h-8 w-24 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKjOlIQLriZmF-lbHVvpmZ-iqk-BA6R3J-Ohht19cfHUk2om9z7Yqu9Tpls9Fuld3Bg0gLA1B76J3KQauIjVfdhLHf9dfYrwTvEN1gjE2gai1lNeBJuEGWOQf9lfkU-pb-6GrIyUDY3vxEOOh4wmV4cY17y6g8J9S7EHaIbwnf0SSBAwDv3Eb5lP6GBQN3MF9YDgcKIvVya7lzlXMmoSx-TUptaAqvHt-HuHHkIWxXug0KO4Ua4wXvqCAWjlVZkWLa4ksXME0FvU4')" }}></div>
            <div className="h-8 w-24 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5PvO0LXL1q30NKsVgm2LPFxKkR8w-3K4GVQZvVxD_K4M2n2X6rzfEIycztGPZL8c-z_TML89KkJk11RlxNOC3GVYmEUQFU79P5kJxkW3WrYi6_2MGbh5742DSv_W3I2DtLnW7SeKRyazf3QcbMXqtTMslHXqVTs4U3GYQ9LNOrChZtN45kBzGsAQSveINSz_c6HnqKPkJmsCjxFLMXV6LfRteB9_JdOBpfv6YlM48vRgdh07uG54EA95_hS7vU6WwP5-x-52Qp0k')" }}></div>
          </div>
        </div>
      </section>
    </>
  );
}
