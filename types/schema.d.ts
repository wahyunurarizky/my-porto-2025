interface TextAndImageProps {
  theme: 'Blue' | 'Orange' | 'Navy' | 'Lime';
  heading: string;
  body: string;
  imageUrl: string;
  quote?: string;
  index: number;
  imageOnLeft?: boolean;
}
