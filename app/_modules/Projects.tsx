import { Bounded } from '@/components/Bounded';
import { Heading } from '@/components/Heading';
import { SlideIn } from '@/components/SlideIn';
import { JSX } from 'react';
import { PortoProduct } from './PortoProduct';
import portfolios from '@/data/portfolios.json';

const Projects = (): JSX.Element => {
  return (
    <Bounded className='bg-texture bg-brand-gray' id='projects'>
      <SlideIn>
        <Heading className='mb-6 text-center' as='h2'>
          PROJECTS
        </Heading>
      </SlideIn>
      <SlideIn>
        <div className='mb-10 text-center'>Stuff I made while learning, building, breaking things, and fixing them again.</div>
      </SlideIn>
      <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {portfolios.map((p, i) => (
          <PortoProduct key={i} portfolio={p} />
        ))}
      </div>
    </Bounded>
  );
};

export default Projects;
