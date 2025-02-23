// Import your local images
import bettingSite1 from '../assets/images/stake logo 1.jpg';
import bettingSite2 from '../assets/images/1win.png';
import bettingSite3 from '../assets/images/site3.jpg';
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
    image: bettingSite1, // Use the imported image
    affiliateLink: 'https://stake.com/?c=CASINOHINDI2025', // Updated to actual Stake URL
    additionalLinks: [
     
     
    ],
    description: 'Stake.com is a popular crypto betting platform offering fast transactions, sports betting, and casino games with a sleek and fair gaming experience.🚀 ',
    bonus: '200% deposit match up to ₹1,00,000.',
    promoCode: 'CasinoHindi' // Add this
  },
  {
    id: '2',
    name: '1 Win Bet',
    rating: 4.3,
    image: bettingSite2, // Use the imported image
    affiliateLink: 'https://1wuyue.top/?open=register&p=375q', // Updated to actual 1Win URL
    description: '1Win is a trusted betting platform offering sports betting, casino games, and generous bonuses, all with a smooth and user-friendly experience. 🚀',
    bonus: '+500%  ON YOUR FIRST DEPOSIT ',
    promoCode: 'CasinoHindi' // Add this
  }
];

export const carouselSlides = [
  {
    id: '1',
    title: 'Find Your Perfect Betting Site',
    description: 'Compare the best betting platforms in one place',
    mediaType: 'gif',
    mediaUrl: carouselVideo2,
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