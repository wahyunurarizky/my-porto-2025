import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import React from 'react';

const Hero = () => {
  return (
    <div className='relative pt-32 overflow-hidden bg-brand-pink h-dvh text-zinc-800 bg-texture'>
      <div className='absolute inset-0 grid px-8 mx-auto mt-24 place-items-center'>
        <Logo className='w-full h-full max-h-full max-w-7xl animate-squiggle text-brand-purple opacity-15 mix-blend-multiply' />
      </div>
      <div className='absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr_auto] px-6 py-16'>
        <div className='flex justify-end w-full tracking-wider place-self-start'>
          <h1 className='font-sans font-bold text-right text-7xl'>
            Breaking Things,
            <br /> Learning More
          </h1>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center w-full'>
          <div>
            <p className='max-w-xl text-xl font-semibold tracking-wider'>Blending logic and creativity to craft meaningful digital experiences.</p>
          </div>
          <Button variant='orange' icon='skateboard'>
            My Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
