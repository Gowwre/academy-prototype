import { useState, useEffect } from 'react';
import PostCard from '../components/posts/PostCard';
import Container from '../components/design-system/Container';
import { Heading, Text } from '../components/design-system/Typography';
import Button from '../components/design-system/Button';
import Card from '../components/design-system/Card';
import Input from '../components/design-system/Input';

const MOCK_POSTS = [
  {
    id: '1',
    title: 'Academy Players Dominate Regional Qualifiers',
    excerpt: 'Our elite squad secured 5 out of 8 spots for the upcoming National Championship, showcasing the depth of talent being developed here.',
    date: 'Oct 12, 2024',
    category: 'Tournament Results',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyboF-IaOX4Ovfkto2dUg2r_rcKstGdWN8EtrTP23y66JPycWBF0aO-X4zylXvyVb_82adlh7tLyqfOyd9zJmOkOw1OJDnjInCQ40gT8SbtpFNWTAsycJ5pRRlpuXGSpLdVAsB8ICZW0qebwj1KLWZCZu29WoAk3bvGji0ws_r5liKEyUDzJfRfNu7dB5xmW1A_HnPx_IMCSjI-xix3ryaPZR2UC8M_IQH2fyR_PsVdmW-UuA-1HxoiAM7KTbaidKG3NVCfq1Bk1w',
  },
  {
    id: '2',
    title: 'New High-Performance Training Facility Opens',
    excerpt: 'Featuring 4 indoor hard courts, a dedicated fitness center, and video analysis suites to take player development to the next level.',
    date: 'Sept 28, 2024',
    category: 'Academy News',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdOeDj_d0h2xawvDTJ3_JMg9DmIWVSonT7B_LCg7gHRbFu1FV1ow8xnugqSKkA7NF2CIsWyV-lYgq0AWMprenDRcsRv6jInKpr5EHkE7fWRn93J-I-PGCLdls3KBqgvZSpWFOexYww7-63fZv998FyZ_1bJHtgJJl-MLQGGMBLMofBPeVP9gFW0B2nAbRMWYs_4gI1XhLPtWmpW_mUQ7_10_V5FQiU73aGelMpkqemftYq4kKm_2pG9wCfTcce5dP0WQhNsLoz_0E',
  },
  {
    id: '3',
    title: 'Coach Martinez Joins Senior Staff',
    excerpt: 'Former ATP top 100 player brings his wealth of professional experience to our High Performance program.',
    date: 'Sept 15, 2024',
    category: 'Staff Announcement',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB99vJikVg1liGViql88UdRBmLERRbAxPnbW0q537VkJJYgXeWAeo_rPTVA2KOkZVnzSRRXXWJC89TUxU_VjbhNkSqiAtz1zPzmOyobzV1Cr-IrCO0SOVoPRe4yTlvp2OVlrDtvWBtxzCAmGDZdoSVz9rcyfRj7lkZhYBRR6zR_ZmScEgLVgtrxYZvOpefne1m5wztSSOI9C-5EloZWt7eyCbapUzj-qudaFRpLS6R-E4QhbgDgnCPIDDUrpkVPM1SgPK0sYHYS7oU',
  },
  {
    id: '4',
    title: 'Fall Junior Camps: Registration Now Open',
    excerpt: 'Limited spots available for our intensive 2-week camps designed for U12 and U14 players looking to fast-track their improvement.',
    date: 'Aug 30, 2024',
    category: 'Events',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbBI51u09W7OaEwlz9N4edjZxwkKaQ4LsCyVmmB1gsUB71R5uiMAc2yT-ucQHfhPghSVRMjW7utcSc9nKaNhya3fbA1y6HL1cFPtgOAOvvdyVagIFjbEqb8YMEyb436iPa7AGpVsNNGTMlhqcNXPXFddxyGBiXiT_xFUlngyfLGyp7-f_OKznWUy9WE1AZEZLFq6g8fVTye8b_ZeRHTVvrnOGL4Ye7-t1_gNbjjOFosdX0_ePsS-dhO74P6dqp8N-YUmkrE7qOs2s',
  },
  {
    id: '5',
    title: 'Understanding the Mental Game: Workshop Series',
    excerpt: 'Dr. Sarah Chen leads a 4-part series on sports psychology, focus, and handling pressure in competitions.',
    date: 'Aug 10, 2024',
    category: 'Education',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfhQbz6oCWl6vphCvqUHT2dZRMBtwJfoHVpcWZha9HOx8G2_NlnZN5ir_VkDDHjNCLvSKulNqvHn5xTPEYQutc7TfMVN17_3_TvJlICf-P0i2SmZBMGfHIOW-IQa7LYJX2QQH57SVln-U9-kTMG7X7eeNYfCU83Z3wc4BFiBasu62Gc6bcfqrKv-a0hPm7x68PZl37r2UXpe80sq4nG_J467cvZVo7rQKM1r-0vweUXFoURfhAKBKnMgkeqgBRx7ovQqD488Jh6CM',
  },
  {
    id: '6',
    title: 'Alumni Spotlight: Jessica M. Wins D1 Title',
    excerpt: 'From our development squad to NCAA Champion. Read about Jessica’s journey and how the academy helped shape her career.',
    date: 'July 22, 2024',
    category: 'Alumni Status',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2stjTW6-woAzmeYdRdn1OdMYH1XdgZuO0lWEfcc8gJtdkNjr8SVL0xwkdkevbo8HLgSDevH3FpRLyPm2269DYtAjIQ-2qCi7VIigicHE0Ssf_j_CrcF5aCTBkf9TbPS0iECH50p0ggynG30wUGloVfFKI5FGJ90qWSaIy-KBU2uAgdNpvz41RFiqmNGeSxBhki3LlgCaC9fc7GxvJ2KPajO-utOU1Yo-GWYtpV8gXWCaNAxINptoSHNAc169TU1FGVqUnT418tL0',
  },
  {
    id: '7',
    title: 'Summer Camp Success Stories',
    excerpt: 'Over 200 athletes participated in our summer programs. See the highlights and player progression reports.',
    date: 'July 15, 2024',
    category: 'Camp Recap',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdOeDj_d0h2xawvDTJ3_JMg9DmIWVSonT7B_LCg7gHRbFu1FV1ow8xnugqSKkA7NF2CIsWyV-lYgq0AWMprenDRcsRv6jInKpr5EHkE7fWRn93J-I-PGCLdls3KBqgvZSpWFOexYww7-63fZv998FyZ_1bJHtgJJl-MLQGGMBLMofBPeVP9gFW0B2nAbRMWYs_4gI1XhLPtWmpW_mUQ7_10_V5FQiU73aGelMpkqemftYq4kKm_2pG9wCfTcce5dP0WQhNsLoz_0E',
  },
  {
    id: '8',
    title: 'Pro Shop Summer Sale Ends Soon',
    excerpt: 'Get ready for the fall season with 20% off all rackets and shoes. Elite equipment for elite performance.',
    date: 'July 01, 2024',
    category: 'Academy News',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB99vJikVg1liGViql88UdRBmLERRbAxPnbW0q537VkJJYgXeWAeo_rPTVA2KOkZVnzSRRXXWJC89TUxU_VjbhNkSqiAtz1zPzmOyobzV1Cr-IrCO0SOVoPRe4yTlvp2OVlrDtvWBtxzCAmGDZdoSVz9rcyfRj7lkZhYBRR6zR_ZmScEgLVgtrxYZvOpefne1m5wztSSOI9C-5EloZWt7eyCbapUzj-qudaFRpLS6R-E4QhbgDgnCPIDDUrpkVPM1SgPK0sYHYS7oU',
  },
  {
    id: '9',
    title: 'Nutrition for Tennis Athletes',
    excerpt: 'Lead nutritionist Sarah Boyd explains the ideal hydration and recovery strategies for hot weather play.',
    date: 'June 20, 2024',
    category: 'Education',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfhQbz6oCWl6vphCvqUHT2dZRMBtwJfoHVpcWZha9HOx8G2_NlnZN5ir_VkDDHjNCLvSKulNqvHn5xTPEYQutc7TfMVN17_3_TvJlICf-P0i2SmZBMGfHIOW-IQa7LYJX2QQH57SVln-U9-kTMG7X7eeNYfCU83Z3wc4BFiBasu62Gc6bcfqrKv-a0hPm7x68PZl37r2UXpe80sq4nG_J467cvZVo7rQKM1r-0vweUXFoURfhAKBKnMgkeqgBRx7ovQqD488Jh6CM',
  },
  {
    id: '10',
    title: 'New Assistant Head Coach Announced',
    excerpt: 'We are thrilled to welcome Coach David Kim, bringing 15 years of ITF coaching experience to our team.',
    date: 'June 10, 2024',
    category: 'Staff Announcement',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyboF-IaOX4Ovfkto2dUg2r_rcKstGdWN8EtrTP23y66JPycWBF0aO-X4zylXvyVb_82adlh7tLyqfOyd9zJmOkOw1OJDnjInCQ40gT8SbtpFNWTAsycJ5pRRlpuXGSpLdVAsB8ICZW0qebwj1KLWZCZu29WoAk3bvGji0ws_r5liKEyUDzJfRfNu7dB5xmW1A_HnPx_IMCSjI-xix3ryaPZR2UC8M_IQH2fyR_PsVdmW-UuA-1HxoiAM7KTbaidKG3NVCfq1Bk1w',
  },
  {
    id: '11',
    title: 'U10 Tournament Results',
    excerpt: 'Our youngest competitors showed incredible spirit and skill at the City Open this weekend. Future stars in the making!',
    date: 'May 28, 2024',
    category: 'Tournament Results',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbBI51u09W7OaEwlz9N4edjZxwkKaQ4LsCyVmmB1gsUB71R5uiMAc2yT-ucQHfhPghSVRMjW7utcSc9nKaNhya3fbA1y6HL1cFPtgOAOvvdyVagIFjbEqb8YMEyb436iPa7AGpVsNNGTMlhqcNXPXFddxyGBiXiT_xFUlngyfLGyp7-f_OKznWUy9WE1AZEZLFq6g8fVTye8b_ZeRHTVvrnOGL4Ye7-t1_gNbjjOFosdX0_ePsS-dhO74P6dqp8N-YUmkrE7qOs2s',
  },
  {
    id: '12',
    title: 'Court Resurfacing Complete',
    excerpt: 'Courts 5-8 have been upgraded with the latest US Open standard hard court surface for optimal playability.',
    date: 'May 15, 2024',
    category: 'Facility Update',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2stjTW6-woAzmeYdRdn1OdMYH1XdgZuO0lWEfcc8gJtdkNjr8SVL0xwkdkevbo8HLgSDevH3FpRLyPm2269DYtAjIQ-2qCi7VIigicHE0Ssf_j_CrcF5aCTBkf9TbPS0iECH50p0ggynG30wUGloVfFKI5FGJ90qWSaIy-KBU2uAgdNpvz41RFiqmNGeSxBhki3LlgCaC9fc7GxvJ2KPajO-utOU1Yo-GWYtpV8gXWCaNAxINptoSHNAc169TU1FGVqUnT418tL0',
  },
  {
    id: '13',
    title: 'Member Appreciation Day',
    excerpt: 'Join us this Saturday for a BBQ, exhibition matches, and prize giveaways to celebrate our amazing community.',
    date: 'May 01, 2024',
    category: 'Events',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdOeDj_d0h2xawvDTJ3_JMg9DmIWVSonT7B_LCg7gHRbFu1FV1ow8xnugqSKkA7NF2CIsWyV-lYgq0AWMprenDRcsRv6jInKpr5EHkE7fWRn93J-I-PGCLdls3KBqgvZSpWFOexYww7-63fZv998FyZ_1bJHtgJJl-MLQGGMBLMofBPeVP9gFW0B2nAbRMWYs_4gI1XhLPtWmpW_mUQ7_10_V5FQiU73aGelMpkqemftYq4kKm_2pG9wCfTcce5dP0WQhNsLoz_0E',
  },
  {
    id: '14',
    title: 'Video Analysis Tech Upgrade',
    excerpt: 'We have installed the latest SwingVision camera systems on all match courts for instant automated stats and highlights.',
    date: 'April 20, 2024',
    category: 'Facility Update',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyboF-IaOX4Ovfkto2dUg2r_rcKstGdWN8EtrTP23y66JPycWBF0aO-X4zylXvyVb_82adlh7tLyqfOyd9zJmOkOw1OJDnjInCQ40gT8SbtpFNWTAsycJ5pRRlpuXGSpLdVAsB8ICZW0qebwj1KLWZCZu29WoAk3bvGji0ws_r5liKEyUDzJfRfNu7dB5xmW1A_HnPx_IMCSjI-xix3ryaPZR2UC8M_IQH2fyR_PsVdmW-UuA-1HxoiAM7KTbaidKG3NVCfq1Bk1w',
  },
  {
    id: '15',
    title: 'Fall League Winners',
    excerpt: 'Congratulations to Team Vipers for winning the Premier League title in a thrilling tie-breaker finish.',
    date: 'April 05, 2024',
    category: 'Tournament Results',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB99vJikVg1liGViql88UdRBmLERRbAxPnbW0q537VkJJYgXeWAeo_rPTVA2KOkZVnzSRRXXWJC89TUxU_VjbhNkSqiAtz1zPzmOyobzV1Cr-IrCO0SOVoPRe4yTlvp2OVlrDtvWBtxzCAmGDZdoSVz9rcyfRj7lkZhYBRR6zR_ZmScEgLVgtrxYZvOpefne1m5wztSSOI9C-5EloZWt7eyCbapUzj-qudaFRpLS6R-E4QhbgDgnCPIDDUrpkVPM1SgPK0sYHYS7oU',
  },
  {
    id: '16',
    title: 'Winter Schedule Released',
    excerpt: 'Book your permanent court times now. Priority booking open for gold members until next Friday.',
    date: 'March 25, 2024',
    category: 'Academy News',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfhQbz6oCWl6vphCvqUHT2dZRMBtwJfoHVpcWZha9HOx8G2_NlnZN5ir_VkDDHjNCLvSKulNqvHn5xTPEYQutc7TfMVN17_3_TvJlICf-P0i2SmZBMGfHIOW-IQa7LYJX2QQH57SVln-U9-kTMG7X7eeNYfCU83Z3wc4BFiBasu62Gc6bcfqrKv-a0hPm7x68PZl37r2UXpe80sq4nG_J467cvZVo7rQKM1r-0vweUXFoURfhAKBKnMgkeqgBRx7ovQqD488Jh6CM',
  },
  {
    id: '17',
    title: 'Charity Fundraiser Success',
    excerpt: 'Together we raised over $10,000 for local youth sports initiatives. Thank you to everyone who participated.',
    date: 'March 10, 2024',
    category: 'Academy News',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbBI51u09W7OaEwlz9N4edjZxwkKaQ4LsCyVmmB1gsUB71R5uiMAc2yT-ucQHfhPghSVRMjW7utcSc9nKaNhya3fbA1y6HL1cFPtgOAOvvdyVagIFjbEqb8YMEyb436iPa7AGpVsNNGTMlhqcNXPXFddxyGBiXiT_xFUlngyfLGyp7-f_OKznWUy9WE1AZEZLFq6g8fVTye8b_ZeRHTVvrnOGL4Ye7-t1_gNbjjOFosdX0_ePsS-dhO74P6dqp8N-YUmkrE7qOs2s',
  },
  {
    id: '18',
    title: 'Open House Event',
    excerpt: 'Curious about the academy? Come meet the coaches, try the courts, and learn about our methodology for free.',
    date: 'Feb 28, 2024',
    category: 'Events',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2stjTW6-woAzmeYdRdn1OdMYH1XdgZuO0lWEfcc8gJtdkNjr8SVL0xwkdkevbo8HLgSDevH3FpRLyPm2269DYtAjIQ-2qCi7VIigicHE0Ssf_j_CrcF5aCTBkf9TbPS0iECH50p0ggynG30wUGloVfFKI5FGJ90qWSaIy-KBU2uAgdNpvz41RFiqmNGeSxBhki3LlgCaC9fc7GxvJ2KPajO-utOU1Yo-GWYtpV8gXWCaNAxINptoSHNAc169TU1FGVqUnT418tL0',
  }
];

export default function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const totalPages = Math.ceil(MOCK_POSTS.length / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = MOCK_POSTS.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
        paginate(currentPage + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 1) {
        paginate(currentPage - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface-subtle pb-20">
      {/* Header */}
      <section className="bg-text-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRjvf40oYxauAFwuWNkL0fTS_qDWxbc7jtH2z7Um_zh5LdGNwyOL6WpG3Tsd5tiF-VEZqJhiabYmTq6p9W2C1S5j2wcYnJIw6sl5ppFrEiry0o-j6DlyMwrThsqUzZy90T6iOPJSMx5AKrlEWEtWYSnU8FR6FG5vaOGQ5glLQqjFfMGrJUKTWa25yTZzdELqDsWXa75EqMghC2ylv8sKIwEmgkHE1O2cKiRoJ39EFi_xnII01SQqP98ZVdXJtbMoq5yWTDYEdzaWU')] bg-cover bg-center opacity-20"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Heading as="h1" variant="h1" className="text-white mb-6">
              ACADEMY <span className="text-transparent bg-clip-text bg-brand-gradient">NEWS</span>
            </Heading>
            <Text variant="body-lg" className="text-white/80">
              Stay updated with the latest tournament results, facility upgrades, and player success stories.
            </Text>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="relative z-20 -mt-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentItems.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                  <Button 
                    variant="secondary"
                    size="sm"
                    onClick={goToPrev}
                    disabled={currentPage === 1}
                    className="w-10 h-10 p-0 rounded-full"
                    leftIcon={<span className="material-symbols-outlined">chevron_left</span>}
                  />
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                      <Button
                          key={number}
                          variant={currentPage === number ? 'primary' : 'secondary'}
                          size="sm"
                          onClick={() => paginate(number)}
                          className={`w-10 h-10 p-0 rounded-full text-sm font-bold shadow-sm ${
                              currentPage === number ? 'ring-2 ring-primary ring-offset-2' : ''
                          }`}
                      >
                          {number}
                      </Button>
                  ))}
  
                  <Button 
                    variant="secondary"
                    size="sm"
                    onClick={goToNext}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 p-0 rounded-full"
                    leftIcon={<span className="material-symbols-outlined">chevron_right</span>}
                  />
              </div>
          )}
        </Container>
      </section>
      
      {/* Newsletter / CTA */}
      <section className="mt-20">
        <Container>
          <Card variant="elevated" className="rounded-[2rem] p-8 md:p-12 border border-border-subtle shadow-sm text-center max-w-4xl mx-auto">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">mail</span>
            <Heading as="h2" variant="h2" className="text-text-primary mb-4">Never Miss an Update</Heading>
            <Text className="text-text-secondary mb-8 max-w-lg mx-auto">Subscribe to our weekly newsletter for training tips, upcoming event schedules, and exclusive academy announcements.</Text>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <Input type="email" placeholder="Your email address" className="flex-1" />
                <Button variant="primary" className="px-8 shadow-md">Subscribe</Button>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
