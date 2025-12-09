interface TextAndImageProps {
  theme: 'Blue' | 'Orange' | 'Navy' | 'Lime';
  heading: string;
  body: string;
  imageUrl: string;
  quote?: string;
  index: number;
  imageOnLeft?: boolean;
}

interface IPortfolio {
  image: string;
  title: string;
  description: string;
  link: string;
  stack: string[];
  category: string;
  year: number;
  type: string;
}
