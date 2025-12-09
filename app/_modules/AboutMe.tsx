import React from 'react';
import TextAndImage from './TextAndImage';
const textAndImages: TextAndImageProps[] = [
  {
    index: 0,
    theme: 'Blue',
    heading: 'Who I Am',
    body: 'Hello! I am Wahyu Nur Arizky, a passionate developer specializing in crafting engaging and dynamic web experiences. With a keen eye for design and a love for coding, I bring ideas to life through innovative solutions.',
    imageUrl: '/my2.png',
    imageOnLeft: false,
    quote: 'Every journey starts with an introduction.'
  },
  {
    index: 1,
    theme: 'Orange',
    heading: 'What I Learned',
    body: 'I have honed my skills in various web technologies, including React, Next.js, and TypeScript. My experience spans from building responsive user interfaces to implementing complex backend functionalities, ensuring seamless performance across all devices.',
    imageUrl: '/books.png',
    imageOnLeft: true,
    quote: 'Learning shaped who I am today.'
  },
  {
    index: 2,
    theme: 'Navy',
    heading: 'My Work',
    body: 'Over the years, I have contributed to numerous projects, ranging from small business websites to large-scale web applications. My work focuses on delivering high-quality code, optimizing user experience, and collaborating effectively with cross-functional teams.',
    imageUrl: '/work.png',
    imageOnLeft: false,
    quote: 'From ideas to shipped features.'
  },
  {
    index: 3,
    theme: 'Lime',
    heading: 'What’s Next',
    body: 'Looking ahead, I am excited to continue expanding my expertise in emerging web technologies and frameworks. I aim to take on more challenging projects that push the boundaries of web development and contribute to innovative solutions that make a difference.',
    imageUrl: '/goals.png',
    imageOnLeft: true,
    quote: 'The best part? My story is just beginning.'
  }
];
const AboutMe = () => {
  return (
    <div id='about'>
      {textAndImages.map((item, idx) => (
        <TextAndImage
          key={idx}
          index={item.index}
          theme={item.theme}
          heading={item.heading}
          body={item.body}
          imageUrl={item.imageUrl}
          imageOnLeft={item.imageOnLeft}
          quote={item.quote}
        />
      ))}
    </div>
  );
};

export default AboutMe;
