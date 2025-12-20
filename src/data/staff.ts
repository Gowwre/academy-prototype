export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  verificationId?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  badges: string[];
  bio: string;
  philosophy: string;
  certifications: Certification[];
  experience: Experience[];
}

export const STAFF_MEMBERS: StaffMember[] = [
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'Director of Pickleball',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkcSKk0gruFpuAxRSaR6TxtPJwgIij0D76Z_WXuXKQJSqVEm2IQy-IZ6GTYYRUFgJV2oOuNhQjj__ikL9W2A5Gwpl2jmYSKtiL0IYuJO9y2fnsQVI-_76p0r5hkDMyjC7vQjnOCu2fXnrHhG0d06Gw3wa-Le4Vqs14RtzM9r3GRu39QE9tR-pusFEI_k1678HJy5hjnixgvddyEtoxkTfPwMXc1dozIsVymrH0ab_9DlqsRPRvuXYtM6CHbP3EbVKE29ZjrHoWFY0',
    badges: ['IPTPA Level II', '15yrs Pro'],
    bio: 'Sarah is a pioneer in the sport with over 15 years of professional experience. As a former top-10 ranked player globally, she brings elite-level insight to our academy. She specializes in advanced strategy and mental conditioning.',
    philosophy: 'My coaching philosophy centers on the belief that technical precision unlocks creative freedom. Once you master the fundamentals, the court becomes a canvas.',
    certifications: [
      {
        id: 'c1',
        name: 'Certified Pickleball Instructor Level II',
        issuer: 'IPTPA',
        date: '2018',
        verificationId: 'IPTPA-88291'
      },
      {
        id: 'c2',
        name: 'Elite Coach Certification',
        issuer: 'PPR',
        date: '2019'
      }
    ],
    experience: [
      {
        id: 'e1',
        role: 'Director of Pickleball',
        organization: 'DJoy Academy',
        period: '2021 - Present',
        description: 'Leading the development of curriculum and coaching staff.'
      },
      {
        id: 'e2',
        role: 'Head Pro',
        organization: 'Sunset Valley Club',
        period: '2015 - 2021',
        description: 'Managed a program of 500+ active players.'
      }
    ]
  },
  {
    id: 'marcus-thorne',
    name: 'Marcus Thorne',
    role: 'Senior Head Coach',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6MPF-8RgY7r1HVf7JLg4RJHPXhyb9NJAeW90fWJqko--smqv5QBK7fB-NWam7PNhGna6VKi3qkzZ2ubK7xg2zLjWKnsJgI6YypBcVJ3Emi1BmhFJ7a_bOO-o83EoI4Lh0Ln6gyC7VD0BNiasj7QGtDgX7AL5s8-yJke950m9aTjFkaYaZ3SxuEVIuuqz9LTnQn7xqrdhJCOOd6ywhgSxXsvCeIDZrteNzyIdKj6PByyqjrexbim87-DQcAL0WnYet8jGHfXtfJ24',
    badges: ['PPR Certified', 'Natl. Champion'],
    bio: 'Marcus is a National Champion known for his explosive playstyle and analytical coaching methods. He has trained multiple regional champions and focuses on high-performance athlete development.',
    philosophy: 'Intensity and focus are the keys to breakthrough. I push my students to find comfort in the uncomfortable.',
    certifications: [
      {
        id: 'c3',
        name: 'Professional Pickleball Registry Coach',
        issuer: 'PPR',
        date: '2020',
        verificationId: 'PPR-22104'
      }
    ],
    experience: [
      {
        id: 'e3',
        role: 'Senior Head Coach',
        organization: 'DJoy Academy',
        period: '2022 - Present',
        description: 'Overseeing high-performance training groups.'
      }
    ]
  },
  {
    id: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    role: 'Performance Director',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALFiAd6l1IEs4NddRZObBL4P7zaxLj9QCwFDpBA7h7EkWxrc9a4MQz_1I09vj6b1iLRFjhTQfvCHATydeeh9A_xAGOkTn2VMe5sDGtsblWv42MPyC3p5UKEQZhNKsKKzPP37wguVCHl-U8xPpeqKAQAcOp4LZBKaHvBfydHyuXnJWDss-aohNFML8x-6gasWERikbJ6trWHtJhJRmqoY34U68iSW3MBamEBeErXMlAAKalxYScHIYOPGvpHFhDJ-zpqKfuuTB1Pjk',
    badges: ['CSCS', 'PhD Kinesiology'],
    bio: 'Dr. Rodriguez combines her academic background in Kinesiology with practical coaching to provide a biomechanical advantage to her students. She ensures that training is safe, efficient, and scientifically sound.',
    philosophy: 'Your body is your most important piece of equipment. Understanding how it moves is the first step to mastering the game.',
    certifications: [
      {
        id: 'c4',
        name: 'Certified Strength and Conditioning Specialist',
        issuer: 'NSCA',
        date: '2016',
        verificationId: 'CSCS-99812'
      }
    ],
    experience: [
      {
        id: 'e4',
        role: 'Performance Director',
        organization: 'DJoy Academy',
        period: '2020 - Present',
        description: 'Integrating sports science into daily training.'
      }
    ]
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'Strategy Specialist',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9J1ASh4fcV67sXYF9h9KM6_EOPYZzlkZHs4hacBgw6lMWmrAcuHSTd4NShTEd17jGjnSHsd9q9EUEWexG2eaFaQA1el7mZEwbgsMfg97f2-hAgy8d-ltZDtRTJ_qxoa0EZzDWAUt6fweOflomgsG7kmcWO6_gITvWgHi2DM43wZeG4IzsAxLOIGUVAYJsYgiBiJesdzn6ZA1lCKS_9g3bmsKSRS8MyhzfGTicPtIfRxqK272XGQzD-0ZoIHoTjYSIvy4nLQqzSJo',
    badges: ['Data Analyst', 'US Open Gold'],
    bio: 'David brings a moneyball approach to pickleball. With a background in data analytics, he helps players understand high-percentage plays and game theory.',
    philosophy: 'Play smarter, not just harder. The numbers don\'t lie, and they can show you the path to victory.',
    certifications: [
      {
        id: 'c5',
        name: 'level 1 Instructor',
        issuer: 'PPR',
        date: '2021'
      }
    ],
    experience: [
      {
        id: 'e5',
        role: 'Strategy Specialist',
        organization: 'DJoy Academy',
        period: '2021 - Present',
        description: 'Analyzing match data and developing game plans.'
      }
    ]
  }
];
