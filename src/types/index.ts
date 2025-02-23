export interface BettingSite {
  id: string;
  name: string;
  rating: number;
  image: string;
  affiliateLink: string;
  description: string;
  bonus: string;
}

export interface CarouselSlide {
  id: string;
  title: string;
  description: string;
  mediaType: 'image' | 'video' | 'gif';  // Add this line
  mediaUrl: string;  // Rename from 'image' to 'mediaUrl'
  cta: {
    text: string;
    link: string;
  };
}