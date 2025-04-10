import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { HiAcademicCap } from "react-icons/hi2";
import { AiOutlineStar } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { GiBinoculars } from "react-icons/gi";


export default function NewSkillsList() {
  return (
    <div name='skills' className='w-full'>
        <div className='max-w-screen-lg mx-auto p-4 pt-10 flex flex-col justify-center w-full h-full dark:text-[#13ecd4] text-slate-800'>
        <SectionTitle id='skills'>My Skills</SectionTitle>

            {/* Languages */}
            <div className="flex flex-col sm:flex-row items-center">
                <HiAcademicCap className="w-20 h-20 px-5"></HiAcademicCap>
                <p className="mb-2 sm:mr-2 sm:mb-0">LANGUAGES</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#ffff00] shadow-[#baba5c] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                        alt="javascript-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Javascript</p>
                </div>
                
                
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#d000ffd5] shadow-[#d000ffd5] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg
" 
                        alt="Csharp-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>C++</p>
                </div>
            </div>

            {/* Frontend tech */}
            <div className="flex flex-col sm:flex-row items-center">
                <AiOutlineStar className="w-20 h-20 px-5"></AiOutlineStar>
                <p className="mb-2 sm:mr-2 sm:mb-0">FRONTEND</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12.5 sm:px-0'>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#13ecd4] shadow-[#3c7972] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                        alt="React-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>React</p>
                </div>
                
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#FF6900] shadow-[#FF6900] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                        alt="html-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>HTML5</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#0096ff] shadow-[#0096ff] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                        alt="css-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>CSS3</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#1ea8e1] shadow-[#1ea8e1] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
                        alt="tailwindcss-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Tailwind</p>
                </div>
                
            </div>

          
            {/* tools tech */}
            <div className="flex flex-col sm:flex-row items-center">
                <BsTools className="w-20 h-20 px-5"></BsTools>
                <p className="mb-2 sm:mr-2 sm:mb-0">TOOLS & IDEs</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12.5 sm:px-0'>
                <div className='shadow-md hover:scale-110 duration-500 py-4 px-4 rounded-xl dark:shadow-[#d6295e] shadow-[#b14e08] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        alt="jest-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Git Version Control</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-4 px-4 rounded-xl dark:shadow-[#084ff7] shadow-[#194dc4] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
                        alt="VSC-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Visual Studio Code</p>
                </div>
                
                </div>
            <div className="flex flex-col sm:flex-row items-center">
                <GiBinoculars className="w-20 h-20 px-5"></GiBinoculars>
                <p className="mb-2 sm:mr-2 sm:mb-0">CURRENTLY EXPLORING</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12.5 sm:px-0'>
               
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#00ff3c] shadow-[#309000] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        alt="Python-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Python</p>
                </div>
            </div>
        </div>
    </div>
  )
}
