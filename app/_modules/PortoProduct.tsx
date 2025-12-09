'use client';

import { HorizontalLine, VerticalLine } from '@/components/Line';
import { Scribble } from '@/components/Scribble';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import Image from 'next/image';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const VERTICAL_LINE_CLASSES = 'absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400';
const HORIZONTAL_LINE_CLASSES = '-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400';

const SCRIBBLE_COLORS = ['#4876ff', '#d9f154', '#2e3192', '#ff7347', '#f7d0e9', '#692e54'];

function hashStringToIndex(str: string, max: number) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % 2_147_483_647;
  }
  return hash % max;
}

export function PortoProduct({ portfolio }: { portfolio: IPortfolio }) {
  const [open, setOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const scribbleColor = SCRIBBLE_COLORS[hashStringToIndex(portfolio.title, SCRIBBLE_COLORS.length)];

  const openModal = () => {
    setOpen(true);

    requestAnimationFrame(() => {
      gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.7, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'power3.out' });

      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power1.out' });
    });
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.7,
      y: 40,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => setOpen(false)
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power1.in'
    });
  };

  return (
    <>
      {/* CARD */}
      <div className='group relative mx-auto w-full max-w-96 px-8 pt-4'>
        <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, 'left-4')} />
        <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, 'right-4')} />
        <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

        <div className='relative -mb-1 overflow-hidden py-4'>
          <Scribble className='absolute inset-0 h-full w-full' color={scribbleColor} />

          <Image
            src={portfolio.image}
            alt={portfolio.title}
            width={200}
            height={200}
            className='aspect-square object-contain mx-auto origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150'
          />
        </div>

        <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />
        <h3 className='my-2 text-center font-sans leading-tight text-xl'>{portfolio.title}</h3>

        <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
          <Button onClick={openModal}>View</Button>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div ref={overlayRef} className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm' onClick={closeModal}>
          <div ref={modalRef} className='relative mx-4 max-w-lg rounded-xl bg-white p-6 shadow-2xl' onClick={(e) => e.stopPropagation()}>
            <h2 className='text-2xl font-bold mb-2'>
              {portfolio.title} ({portfolio.year})
            </h2>
            <p className='text-sm text-gray-600 mb-4'>{portfolio.description}</p>

            <Image src={portfolio.image} alt={portfolio.title} width={300} height={300} className='mx-auto mb-4 rounded-lg border border-gray-200' />

            <div className='mb-4'>
              <p className='text-xs font-medium text-gray-400'>Stack:</p>
              <div className='flex flex-wrap gap-2 mt-1'>
                {portfolio.stack.map((s, i) => (
                  <span key={i} className='rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800'>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className='mb-6 grid grid-cols-2 gap-4'>
              <div>
                <p className='text-xs font-medium text-gray-400'>Category:</p>
                <p className='text-sm text-gray-800'>{portfolio.category}</p>
              </div>
              <div>
                <p className='text-xs font-medium text-gray-400'>Link:</p>
                <Link href={portfolio.link} target='_blank' className='text-sm  hover:underline'>
                  {portfolio.link}
                </Link>
              </div>
            </div>

            <div className='flex justify-end'>
              <Button onClick={closeModal} size={'sm'}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
