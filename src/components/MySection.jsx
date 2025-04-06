import React from "react";
import Typewriter from 'typewriter-effect';


function MySection() {
    return (
      <div id="top-page" className="flex items-center justify-center flex-col py-[8]">
        <div className="text-center">
          <div className="text-2xl md:text-4xl mb-1 md:mb-5 text-slate-800 font-semibold dark:text-[#13ecd4]">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(30) // speed
                  .pauseFor(500) // Pause 
                  .typeString("Hi I'm Dharm Singh!")
                  .pauseFor(2000) // Pause
                  .deleteAll(50) // Delete text speed
                  .pauseFor(1000) // Pause
                  .start(); // Restart
              }}
            />
          </div>

          {/* Intro Paragraphs */}
          <p className="text-md md:text-xl mb-20 text-slate-900 dark:text-gray-300">
          Passionate software developer skilled in building modern web applications. 
          This portfolio highlights my technical projects, professional achievements, 
          and the value I bring to development teams. Let’s build something great together.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center">
            <a href="#projects" className="inline-block mx-2 mb-2 md:mx-2 md:mb-0 px-8 py-4 border border-slate-900 dark:border-[#13ecd4] dark:hover:border-pink-500 text-base font-medium rounded-md text-slate-900 dark:text-[#13ecd4] hover:bg-slate-900 dark:hover:text-pink-500 hover:text-white md:text-md">Projects</a>
            <a href="#about-me" className="inline-block mx-2 mb-2 md:mx-2 md:mb-0 px-8 py-4 border border-slate-900 dark:border-[#13ecd4] dark:hover:border-pink-500 text-base font-medium rounded-md text-slate-900 dark:text-[#13ecd4] hover:bg-slate-900 dark:hover:text-pink-500 hover:text-white md:text-md">About Me</a>
            <a href="#contact" className="inline-block mx-2 mb-2 md:mx-2 md:mb-0 px-8 py-4 border border-slate-900 dark:border-[#13ecd4] dark:hover:border-pink-500 text-base font-medium rounded-md text-slate-900 dark:text-[#13ecd4] hover:bg-slate-900 dark:hover:text-pink-500 hover:text-white md:text-md">Contact</a>
          </div>
        </div>
      </div>

    
    )
}

export default MySection;



