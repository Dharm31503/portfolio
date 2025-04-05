import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Myself from '../../src/assets/Me-noBg.png';
import NortcodersCertificate from '../../src/assets/NorthcodersCertificate.png';
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
            href='www.linkedin.com/in/dharm-singh-dagar'
            target='_blank'
            rel='Dharm Singh'
            className='mt-3 text-indigo-700 dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500 flex items-center'
          >
            <BsLinkedin className="mr-2"/>
            LinkedIn
          </a>
          <a 
            href='https://github.com/alessandro-001'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-3 text-indigo-700 dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500 flex items-center'
          >
            <VscGithub className="mr-2"/>
            GitHub
          </a>
        </div>
      </div>

      {/* Certification Section */}
      <div className='py-10'>
        <SectionTitle>Certifications</SectionTitle>
        <div className='flex flex-col items-start gap-8 mt-5'>
          {/* Certificate 1 */}
          <div className='flex items-center gap-4'>
            <figure className='w-36 md:w-48 shadow-lg rounded-lg overflow-hidden'>
              <img 
                src={NortcodersCertificate}
                className='w-full cursor-pointer'
                alt='Northcoders Certificate'
                loading='lazy'
                onClick={() => openModal(NortcodersCertificate)}
              />
            </figure>
            <figcaption className='text-left text-xl text-slate-700 dark:text-slate-300'>
              Northcoders Software Development Bootcamp Certificate - 2023
            </figcaption>
          </div>

          {/* Add more certificates here */}
          {/* <div className='flex items-center gap-4'>
            <figure className='w-36 md:w-48 shadow-lg rounded-lg overflow-hidden'>
              <img 
                src={NortcodersCertificate}
                className='w-full cursor-pointer'
                alt='Another Certificate'
                loading='lazy'
                onClick={() => openModal(NortcodersCertificate)}
              />
            </figure>
            <figcaption className='text-left text-xl text-slate-700 dark:text-slate-300'>
              Another Certificate
            </figcaption>
          </div> */}

        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='relative'>
            <button 
              onClick={closeModal}
              className='absolute top-0 right-0 p-4 text-red text-8xl'
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt='Certificate_Modal'
              className='max-w-full max-h-[90vh] object-contain'
            />
          </div>
        </div>
      )}
    </>
  );
}
