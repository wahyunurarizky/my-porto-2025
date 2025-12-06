import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import React from 'react';

const Hero = () => {
  return (
    <div className='bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture pt-32'>
      <div className='absolute inset-0 mx-auto mt-24 grid place-items-center px-8 md:px-16 md:py-44'>
        <Logo className='animate-squiggle  text-brand-purple opacity-20 mix-blend-multiply  w-full max-w-full h-full max-h-full' />
      </div>
      <div className='absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr_auto] px-6 py-16'>
        <div className='place-self-start w-full flex justify-end tracking-wider '>
          <h1 className='text-right font-sans text-5xl font-bold'>
            Breaking Things,
            <br /> Learning More
          </h1>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center w-full'>
          <div>
            <p className='max-w-md font-semibold text-lg'>Blending logic and creativity to craft meaningful digital experiences.</p>
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
