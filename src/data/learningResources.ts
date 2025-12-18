export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type Category = 'Technique' | 'Strategy' | 'Fitness' | 'Mental Game' | 'Equipment';

export interface Resource {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  difficulty: DifficultyLevel;
  readTime: string;
  image: string;
  date: string;
  content?: string; // Added for flexible detail view
}

export const LEARNING_RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'The Modern Forehand: Grip and Stance',
    excerpt: 'Master the semi-western grip and open stance mechanics used by today\'s top pros for maximum power and spin.',
    category: 'Technique',
    difficulty: 'Beginner',
    readTime: '8 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyboF-IaOX4Ovfkto2dUg2r_rcKstGdWN8EtrTP23y66JPycWBF0aO-X4zylXvyVb_82adlh7tLyqfOyd9zJmOkOw1OJDnjInCQ40gT8SbtpFNWTAsycJ5pRRlpuXGSpLdVAsB8ICZW0qebwj1KLWZCZu29WoAk3bvGji0ws_r5liKEyUDzJfRfNu7dB5xmW1A_HnPx_IMCSjI-xix3ryaPZR2UC8M_IQH2fyR_PsVdmW-UuA-1HxoiAM7KTbaidKG3NVCfq1Bk1w',
    date: 'Oct 20, 2024',
    content: `
      <h2>The Foundation of Power</h2>
      <p>The modern forehand has evolved significantly over the last two decades. Gone are the days of the continental grip and closed stance. Today's game is built on topspin and rotational power.</p>
      <h3>The Semi-Western Grip</h3>
      <p>To find this grip, place your base knuckle on bevel 4. This allows you to brush up on the back of the ball, generating the heavy topspin needed to keep powerful shots in the court.</p>
      <h3>The Open Stance</h3>
      <p>Loading on the outside leg (open stance) allows for quicker recovery and more efficient use of the kinetic chain. It enables you to uncoil your torso into the shot.</p>
    `
  },
  {
    id: '2',
    title: 'Doubles Positioning 101',
    excerpt: 'Stop getting passed down the alley. Learn the essential court coverage zones and how to move in sync with your partner.',
    category: 'Strategy',
    difficulty: 'Intermediate',
    readTime: '6 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdOeDj_d0h2xawvDTJ3_JMg9DmIWVSonT7B_LCg7gHRbFu1FV1ow8xnugqSKkA7NF2CIsWyV-lYgq0AWMprenDRcsRv6jInKpr5EHkE7fWRn93J-I-PGCLdls3KBqgvZSpWFOexYww7-63fZv998FyZ_1bJHtgJJl-MLQGGMBLMofBPeVP9gFW0B2nAbRMWYs_4gI1XhLPtWmpW_mUQ7_10_V5FQiU73aGelMpkqemftYq4kKm_2pG9wCfTcce5dP0WQhNsLoz_0E',
    date: 'Oct 15, 2024',
    content: `
      <h2>Moving as a Unit</h2>
      <p>In doubles, you and your partner are connected by an invisible rope. When one moves left, the other should move left.</p>
      <h3>Covering the Middle</h3>
      <p>The center of the court is the highest percentage target. Always prioritize closing the middle over covering the alleys. It's harder to hit a winner down the line than through the center.</p>
    `
  },
  {
    id: '3',
    title: 'Building Match Endurance',
    excerpt: 'A 4-week interval training program designed specifically for tennis athletes to last through grueling 3-setters.',
    category: 'Fitness',
    difficulty: 'Advanced',
    readTime: '12 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB99vJikVg1liGViql88UdRBmLERRbAxPnbW0q537VkJJYgXeWAeo_rPTVA2KOkZVnzSRRXXWJC89TUxU_VjbhNkSqiAtz1zPzmOyobzV1Cr-IrCO0SOVoPRe4yTlvp2OVlrDtvWBtxzCAmGDZdoSVz9rcyfRj7lkZhYBRR6zR_ZmScEgLVgtrxYZvOpefne1m5wztSSOI9C-5EloZWt7eyCbapUzj-qudaFRpLS6R-E4QhbgDgnCPIDDUrpkVPM1SgPK0sYHYS7oU',
    date: 'Oct 05, 2024',
     content: `
      <h2>The Demands of Tennis</h2>
      <p>Tennis is a sport of repeated sprints. You need anaerobic power for the point and aerobic capacity for recovery between points.</p>
      <h3>The 4-Week Plan</h3>
      <ul>
        <li><strong>Week 1:</strong> Base aerobic conditioning (Long slow distance).</li>
        <li><strong>Week 2:</strong> 400m intervals.</li>
        <li><strong>Week 3:</strong> Spider drills and on-court conditioning.</li>
        <li><strong>Week 4:</strong> Match simulation and recovery.</li>
      </ul>
    `
  },
  {
    id: '4',
    title: 'Visualizing Success: Pre-match Rituals',
    excerpt: 'Calm your nerves and sharpen your focus before you even step on the court with these sports psychology techniques.',
    category: 'Mental Game',
    difficulty: 'Beginner',
    readTime: '5 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfhQbz6oCWl6vphCvqUHT2dZRMBtwJfoHVpcWZha9HOx8G2_NlnZN5ir_VkDDHjNCLvSKulNqvHn5xTPEYQutc7TfMVN17_3_TvJlICf-P0i2SmZBMGfHIOW-IQa7LYJX2QQH57SVln-U9-kTMG7X7eeNYfCU83Z3wc4BFiBasu62Gc6bcfqrKv-a0hPm7x68PZl37r2UXpe80sq4nG_J467cvZVo7rQKM1r-0vweUXFoURfhAKBKnMgkeqgBRx7ovQqD488Jh6CM',
    date: 'Sept 28, 2024',
     content: `
      <h2>The Power of Visualization</h2>
      <p>See it to believe it. Visualization activates the same neural pathways as physical practice.</p>
      <h3>Breathing Techniques</h3>
      <p>Box breathing (4-4-4-4) is a proven method to lower heart rate and reduce cortisol levels before a match.</p>
    `
  },
  {
    id: '5',
    title: 'Choosing the Right String Tension',
    excerpt: 'Low tension vs. high tension? Poly vs. multifilament? We break down the physics to help you find your perfect setup.',
    category: 'Equipment',
    difficulty: 'Intermediate',
    readTime: '7 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbBI51u09W7OaEwlz9N4edjZxwkKaQ4LsCyVmmB1gsUB71R5uiMAc2yT-ucQHfhPghSVRMjW7utcSc9nKaNhya3fbA1y6HL1cFPtgOAOvvdyVagIFjbEqb8YMEyb436iPa7AGpVsNNGTMlhqcNXPXFddxyGBiXiT_xFUlngyfLGyp7-f_OKznWUy9WE1AZEZLFq6g8fVTye8b_ZeRHTVvrnOGL4Ye7-t1_gNbjjOFosdX0_ePsS-dhO74P6dqp8N-YUmkrE7qOs2s',
    date: 'Sept 10, 2024',
    content: `
      <h2>Physics of String Tension</h2>
      <p><strong>Lower Tension (40-50 lbs):</strong> More power, larger sweet spot, more comfort. Less control.</p>
      <p><strong>Higher Tension (55-65 lbs):</strong> More control, spin potential. Less power, harsher feel.</p>
    `
  },
  {
    id: '6',
    title: 'The Kick Serve Masterclass',
    excerpt: 'Add a dangerous weapon to your arsenal. Learn how to generate massive topspin to jump the ball out of your opponent\'s strike zone.',
    category: 'Technique',
    difficulty: 'Advanced',
    readTime: '15 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2stjTW6-woAzmeYdRdn1OdMYH1XdgZuO0lWEfcc8gJtdkNjr8SVL0xwkdkevbo8HLgSDevH3FpRLyPm2269DYtAjIQ-2qCi7VIigicHE0Ssf_j_CrcF5aCTBkf9TbPS0iECH50p0ggynG30wUGloVfFKI5FGJ90qWSaIy-KBU2uAgdNpvz41RFiqmNGeSxBhki3LlgCaC9fc7GxvJ2KPajO-utOU1Yo-GWYtpV8gXWCaNAxINptoSHNAc169TU1FGVqUnT418tL0',
    date: 'Aug 22, 2024',
    content: `
      <h2>The Mechanics of Spin</h2>
      <p>To hit a kick serve, you must swing up and across the ball from 7 o'clock to 1 o'clock.</p>
      <h3>The Ball Toss</h3>
      <p>Toss the ball slightly behind your head (to the left for right-handers) to allow your racquet to brush up the back of the ball effectively.</p>
    `
  },
];
