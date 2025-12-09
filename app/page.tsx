import AboutMe from './_modules/AboutMe';
import Hero from './_modules/Hero';
import Projects from './_modules/Projects';

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}
