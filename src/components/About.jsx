import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Myself from '../../src/assets/image1.2.png';

import { TfiEmail } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <>
      <div className='pt-10'>
        <SectionTitle id='about-me'>About Me</SectionTitle>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='md:w-6/12'>
          <img 
            src={Myself}
            className='w-full mx-auto'
            alt='Dharm Singh'
            loading='lazy'
          />
        </div>
        <div className='md:w-6/12'>
        <p className='text-md text-slate-900 dark:text-slate-300 text-md md:text-xl'>
  I'm Dharm Singh, an aspiring software developer currently studying at IIITV-ICD. 
  My journey into tech started with a deep curiosity for how things work on the web. 
  Over time, I’ve gained hands-on experience in frontend technologies like React.js, 
  Tailwind CSS, and Material UI, and built multiple real-world projects including 
  portfolios, real estate platforms, and e-commerce frontends. I enjoy translating ideas 
  into smooth, interactive user interfaces. I’m passionate about learning, building, 
  and collaborating with others to create impactful software that solves real problems.
</p>

          <a 
            href='mailto:dagardharm31503@gmail.com'
            className='mt-3 text-indigo-700 dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500 flex items-center'
          >
            <TfiEmail className="mr-2"/>
            dagardharm31503@gmail.com
          </a>
          <a 
            href='https://www.linkedin.com/in/dharm-singh-dagar-4bb36628a/'
            target='_blank'
            rel='Dharm Singh'
            className='mt-3 text-indigo-700 dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500 flex items-center'
          >
            <BsLinkedin className="mr-2"/>
            LinkedIn
          </a>
          <a 
            href='https://github.com/Dharm31503'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-3 text-indigo-700 dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500 flex items-center'
          >
            <VscGithub className="mr-2"/>
            GitHub
          </a>
        </div>
      </div>

      

       

      
        
    
    </>
  );
}
