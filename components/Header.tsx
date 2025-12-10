import Link from 'next/link';
import Logo from './Logo';
import { Button } from './ui/button';

export async function Header() {
  return (
    <header className='absolute top-0 left-0 right-0 z-50 h-32 px-6 py-6 header'>
      <div className='mx-auto grid w-full grid-cols-[auto_auto] max-w-6xl items-center gap-6 md:grid-cols-[1fr_auto_1fr]'>
        <Logo className='h-12 text-brand-purple' />
        <nav aria-label='Main' className='col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1'>
          <ul className='flex flex-wrap items-center justify-center gap-8'>
            <li>
              <Link href='#about' className='text-lg font-medium text-zinc-800 hover:text-brand-purple dark:text-zinc-200 dark:hover:text-brand-lime'>
                About
              </Link>
            </li>
            <li>
              <Link href='#projects' className='text-lg font-medium text-zinc-800 hover:text-brand-purple dark:text-zinc-200 dark:hover:text-brand-lime'>
                Projects
              </Link>
            </li>
            <li>
              <Link href='#contact' className='text-lg font-medium text-zinc-800 hover:text-brand-purple dark:text-zinc-200 dark:hover:text-brand-lime'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className='justify-self-end'>
          <Button icon='call' size='sm' variant='purple' href='#contact' aria-label='Cart (1)'>
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
}
