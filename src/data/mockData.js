// Import your local images
import { stakeLogo, winLogo } from '../assets';
// Add more imports as needed



// Add video/gif imports
import carouselVideo1 from '../assets/carousel/video1.mp4';
import carouselVideo2 from '../assets/carousel/img1.jpg';
import carouselVideo3 from '../assets/carousel/gif2.gif';

export const bettingSites = [
  {
    id: '1',
    name: 'Stake',
    rating: 4.5,
    image: stakeLogo,
    affiliateLink: 'https://stake.com/?c=CASINOHINDI2025',
    additionalLinks: [
      { url: 'https://stake.com/?c=CASINOHINDI2025', label: 'Mirror Link 1' }
    ],
    description: 'Stake.com is a popular crypto betting platform offering fast transactions, sports betting, and casino games with a sleek and fair gaming experience.🚀',
    bonus: '100% up to $500',
    promoCode: 'CasinoHindi'
  },
  {
    id: '2',
    name: '1 Win Bet',
    rating: 4.3,
    image: winLogo,
    affiliateLink: 'https://1wuyue.top/?open=register&p=375q',
    description: '1Win is a trusted betting platform offering sports betting, casino games, and generous bonuses, all with a smooth and user-friendly experience. 🚀',
    bonus: '+500% ON YOUR FIRST DEPOSIT',
    promoCode: 'CasinoHindi'
  }
];

export const carouselSlides = [
  {
    id: '1',
    title: 'Find Your Perfect Betting Site',
    description: 'Compare the best betting platforms in one place',
    mediaType: 'image',
    mediaUrl: '/images/img1.jpg', // Updated path
    cta: {
      text: 'Explore Now',
      link: '#sites'  // This already points to betting sites
    }
  },
  {
    id: '2',
    title: 'Exclusive Welcome Bonuses',
    description: 'Get the best deals from top betting sites',
    mediaType: 'gif',
    mediaUrl: carouselVideo3,
    cta: {
      text: 'View Offers',
      link: '#sites'  // Changed from '#offers' to '#sites'
    }
  },
  {
    id: '3',
    title: 'Expert Reviews & Ratings',
    description: 'Make informed decisions with our detailed analysis',
    mediaType: 'video',
    mediaUrl: carouselVideo1,
    cta: {
      text: 'Read Reviews',
      link: '#reviews'
    }
  }
];