import React from 'react';
import DharmResume from "../../src/assets/Dharm_resume.pdf"; 

export default function CurriculumDownload() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <p className="text-md md:text-xl text-slate-900 dark:text-gray-300">
        Thank you for reaching this point!
      </p>
      <a href={DharmResume} download="Dharm_Singh_Resume.pdf">
        <button className="py-2 mx-5 mt-8 px-8 border border-slate-900 dark:border-[#13ecd4] dark:hover:border-pink-500 text-base font-medium rounded-md text-slate-900 dark:text-[#13ecd4] hover:bg-slate-900 dark:hover:text-pink-500 hover:text-white md:text-md text-center justify-center">
          Download my Resume
        </button>
      </a>
    </div>
  );
}
