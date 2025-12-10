import React from 'react';
import { Bounded } from './Bounded';
import { FooterPhysics } from './FooterPhysics';
import Logo from './Logo';
import Image from 'next/image';
import Link from 'next/link';

export async function Footer() {
  return (
    <footer className='bg-texture bg-zinc-900 text-white overflow-hidden' id='contact'>
      <div className='relative h-[75vh] p-16 md:aspect-auto'>
        <Image src='/bg2.jpg' alt='' fill className='object-cover opacity-70' />
        <FooterPhysics
          boardTextureURLs={['/langs/js.png', '/langs/python.png', '/langs/java.png', '/langs/go.png', '/langs/rust.png', '/langs/php.png']}
          className='absolute inset-0 overflow-hidden'
        />
        <Logo className='pointer-events-none relative h-20 mix-blend-exclusion md:h-28' />
      </div>
      <Bounded as='nav'>
        <ul className='flex flex-wrap justify-center gap-8 text-xl'>
          <li className='hover:underline'>
            <Link target='_blank' href='https://www.linkedin.com/in/wahyu-nur-arizky-a47275168/'>
              LinkedIn
            </Link>
          </li>
          <li className='hover:underline'>
            <Link href='https://github.com/wahyunurarizky' target='_blank'>
              GitHub
            </Link>
          </li>
          <li className='hover:underline'>
            <Link href='https://www.instagram.com/wahyunurarizky' target='_blank'>
              Instagram
            </Link>
          </li>
        </ul>
        <div className='w-full justify-center flex text-center mt-10'>© {new Date().getFullYear()} Wahyu Nur Arizky. Some Rights Maybe Reserved, Gue Lupa</div>
      </Bounded>
      {/* List of links */}
    </footer>
  );
}
