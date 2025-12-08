import { Bounded } from '@/components/Bounded';
import { Heading } from '@/components/Heading';
import { SlideIn } from '@/components/SlideIn';
import clsx from 'clsx';
import { JSX } from 'react';
import { ParallaxImage } from './ParallaxImage';
import { Button } from '@/components/ui/button';

declare module 'react' {
  interface CSSProperties {
    '--index'?: number;
  }
}

const TextAndImage = ({ theme, heading, body, imageUrl, quote, index, imageOnLeft }: TextAndImageProps): JSX.Element => {
  return (
    <Bounded
      className={clsx(
        'sticky top-[calc(var(--index)*2rem)]',
        theme === 'Blue' && 'bg-texture bg-brand-blue text-white',
        theme === 'Orange' && 'bg-texture bg-brand-orange text-white',
        theme === 'Navy' && 'bg-texture bg-brand-navy text-white',
        theme === 'Lime' && 'bg-texture bg-brand-lime'
      )}
      style={{ '--index': index }}
    >
      <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24'>
        <div className={clsx('flex flex-col items-center gap-8 text-center md:items-start md:text-left', imageOnLeft && 'md:order-2')}>
          <SlideIn>
            <Heading size='lg' as='h2'>
              {heading}
            </Heading>
          </SlideIn>
          <SlideIn>
            <div className='max-w-md text-lg leading-relaxed'>{body}</div>
          </SlideIn>
          <SlideIn>
            <Button variant={theme === 'Lime' ? 'orange' : 'lime'}>{quote}</Button>
          </SlideIn>
        </div>

        <ParallaxImage foregroundImage={imageUrl} backgroundImage={'/int0.png'} />
      </div>
    </Bounded>
  );
};

export default TextAndImage;
