
export interface Program {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  badge: string;
  category: 'junior' | 'adult' | 'private';
  ageGroup?: string;
  rating?: number; // 0-5
  features: { icon: string; text: string }[];
  schedule: string;
  price: string;
  pricePeriod: string;
  ctaText: string;
}

export const programs: Program[] = [
  {
    id: 'junior-1',
    slug: 'future-stars-program',
    title: 'Future Stars Program',
    shortDescription: 'Build a solid foundation with fun, fundamental-focused training designed to ignite a passion for the sport.',
    fullDescription: 'The Future Stars Program is the perfect entry point for young athletes. We focus on developing comprehensive motor skills, hand-eye coordination, and the fundamental mechanics of pickleball in a high-energy, supportive environment. Our certified coaches use game-based learning to ensure kids fall in love with the sport while building the athletic base they need for future success.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUgvwKpvJCQaoN9GW2GUHNPi-bCgc5oRyEKXeGkxsoaLgIxyS-Znb7vSxEhB43Np14vqTV-7tXaBCi8jwGbMqVXdy00Yp_epXeabmnFbmnsuGkkpOV0BPJ8IFC1ejvCHYHYcipIW5R57IpDol9idrT97966eZBE-u5AqlZKneRPy3Qf6St1xIb4MEFUI0mki15bdF7YbLASmZFyk74I0EDRPfbQIlFPJv1_3KWDNGNLeZCToIZsWWrVlvWv_ezrxX-vAwjTC_sHzk',
    badge: 'Ages 6-10',
    category: 'junior',
    ageGroup: 'Ages 6-10',
    rating: 5,
    features: [
      { icon: 'check_circle', text: 'Motor Skills' },
      { icon: 'check_circle', text: 'Hand-Eye Coord.' },
      { icon: 'check_circle', text: 'Game Basics' },
      { icon: 'check_circle', text: 'Teamwork' },
    ],
    schedule: 'Mon/Wed 4:00 PM',
    price: '$150',
    pricePeriod: '/ month',
    ctaText: 'Register Now',
  },
  {
    id: 'junior-2',
    slug: 'elite-academy-squad',
    title: 'Elite Academy Squad',
    shortDescription: 'Advanced technical training and strategic development for competitive juniors aiming for tournament success.',
    fullDescription: 'Designed for the committed junior player, the Elite Academy Squad provides a rigorous training environment modeled after professional academies. Players delve deep into advanced stroke mechanics, court positioning, and match strategy. With a focus on tournament preparation and mental toughness, this program produces champions on and off the court.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChpPPc-mg24K_xNFAdTbK_dB9ZmmOmriTfPFbcUqCb7Q3gXd-NRw_KgVuUmIs8A_j63cy_W_ORyMl9qw50Xq06OqfAQRQ7WMAkukVCfrH3hlz_YZtGvMWmO9fuEY1llYWekjWQBG37K5IIe_QHNyYGf9b3GvoCtoHlk83SrBYo9bfkVBsu6KHSipYNH57Yi8H_QeqSwC2bDJiRSZptvkgF_uUCtscja8HntkrdDRU5VjaUsM0JO0Xw06DMyh2DyVvI4wXaChkC8XA',
    badge: 'Ages 11-18',
    category: 'junior',
    ageGroup: 'Ages 11-18',
    rating: 5, // Assuming high rating
    features: [
      { icon: 'check_circle', text: 'Advanced Tactics' },
      { icon: 'check_circle', text: 'Match Analysis' },
      { icon: 'check_circle', text: 'Tournament Prep' },
      { icon: 'check_circle', text: 'Mental Toughness' },
    ],
    schedule: 'Tue/Thu 5:30 PM',
    price: '$225',
    pricePeriod: '/ month',
    ctaText: 'Apply Now',
  },
  {
    id: 'adult-1',
    slug: 'skills-lab-clinics',
    title: 'Skills Lab Clinics',
    shortDescription: 'Weekly 90-minute sessions focusing on specific mechanics: dinking, third shot drops, and transition zone mastery.',
    fullDescription: 'Stop playing the guessing game with your shots. Our Skills Lab Clinics break down complex techniques into manageable drills. Each week focuses on a specific aspect of the game—from mastering the soft game at the kitchen line to power drives and effective lob retrieval. Perfect for players looking to break through a plateau.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA-pDRXHrvAow7v7e6BxVmHIjd4-bXjEMMWTfqRiOAbfysmk7vTxmGgSm9YhleEUvMZRx-a6nwrpQWumPgC--7jZU2qKjMCnS4VDKgh5bCgiUr-xqDZoInhtJ_RLUl3xY8J-qRwatBH7xAIVqsFZ2YLFSbZlsv08tidh5rvHducjspSMFFm2DkXR94fCATA3QVq2GrYh-ybGHwW_JUo5z7metd0Zj4c7wa5difigXRXvQp1DASWqFiJVH4aLHMx9_27UBKslyB2HE',
    badge: 'Beginner / Intermediate',
    category: 'adult',
    features: [
      { icon: 'schedule', text: 'Tue/Thu 6pm' }, // Using features for time info in card if needed, but preserved in schedule too
    ],
    schedule: 'Tue/Thu 6:00 PM',
    price: '$35', // Assuming per session or similar
    pricePeriod: '/ session',
    ctaText: 'Learn More',
  },
  {
    id: 'adult-2',
    slug: 'ladder-league',
    title: 'Ladder League',
    shortDescription: 'Our flagship competitive league. Move up or down courts weekly based on performance. Verified DUPR required.',
    fullDescription: 'Experience the thrill of weekly competition in our Ladder League. You\'ll be matched with players of similar skill levels, ensuring every game is competitive and fun. Win your court to move up; lose, and you move down. It\'s the best way to test your skills, meet new players, and get an accurate DUPR rating.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw5RRXky1KgUHnhK3wbkoAX2XOKiRXwMsYaejwUwEJCV8_1k5ZkrjRNMfOCzmfjWMwLH4dnhkrz5itq09B2xvp2YtC5NfNtKRICUKz0uC5jmN8eZiclYjzLH4MNQlKiuUJV3EUjU7yZJxBpfQBFRMc1y9hO2EATXuwl90RaRh5bSywwAv8xnHYGjfC13TOSzdpkn4XD7E1g5A3u6COnIKuh0Q0jUFBmU9kYYZXbZZooH6jVNn8W2gxu0NKil9yR11iW2ZHs60jJoM',
    badge: 'Competitive',
    category: 'adult',
    features: [
      { icon: 'calendar_month', text: 'Starts Oct 1st' },
    ],
    schedule: 'Wednesdays 7:00 PM',
    price: '$80', 
    pricePeriod: '/ season',
    ctaText: 'Join Waitlist',
  },
  {
    id: 'private-1',
    slug: 'private-lesson',
    title: 'Private Instruction',
    shortDescription: 'One-on-one or small group coaching tailored to your specific goals and skill level.',
    fullDescription: 'Experience the fastest way to improve your game with personalized attention from our world-class coaches. Whether you need to fix a specific stroke, work on strategy, or get a high-intensity drill session, our private lessons are customized to your needs. Choose your preferred coach and schedule a time that works for you.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9J1ASh4fcV67sXYF9h9KM6_EOPYZzlkZHs4hacBgw6lMWmrAcuHSTd4NShTEd17jGjnSHsd9q9EUEWexG2eaFaQA1el7mZEwbgsMfg97f2-hAgy8d-ltZDtRTJ_qxoa0EZzDWAUt6fweOflomgsG7kmcWO6_gITvWgHi2DM43wZeG4IzsAxLOIGUVAYJsYgiBiJesdzn6ZA1lCKS_9g3bmsKSRS8MyhzfGTicPtIfRxqK272XGQzD-0ZoIHoTjYSIvy4nLQqzSJo',
    badge: 'All Ages',
    category: 'private',
    features: [
      { icon: 'person', text: '1-on-1 Coaching' },
      { icon: 'videocam', text: 'Video Analysis' },
      { icon: 'tune', text: 'Custom Plan' },
    ],
    schedule: 'Flexible',
    price: '$80+',
    pricePeriod: '/ hour',
    ctaText: 'Book Coach',
  },
];
