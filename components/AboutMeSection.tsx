import React from 'react';
import TypeAnimationComponent from './TypeAnimationComponent';

export default function AboutMeSection() {
  return (
    <div className="flex-1 mb-32 lg:mb-0 w-full lg:w-2/3 lg:text-left text-center flex flex-col justify-center bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 sm:p-6">
      <TypeAnimationComponent />
      <hr className="my-4 border-t-2 border-gray-300 opacity-50" />
      <p className="max-w-full sm:max-w-[80ch] text-base sm:text-lg leading-relaxed text-white text-shadow-lg">
        I am a recent graduate of computer science at BCIT. I am actively seeking software development positions where I can grow my technical skills, 
        passion for innovation, and bring value to your company.
        <br /><br />
        I am an avid golfer and extreme sports enthusiast. I&apos;m a licensed skydiver, advanced scuba diver, certified ski instructor and 
        represented the national team in skeleton sliding.
      </p>
    </div>
  );
}
