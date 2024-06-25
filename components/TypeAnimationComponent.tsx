"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { isMobile } from 'react-device-detect';

export default function TypeAnimationComponent() {
  const mobileSequence = [
    1200,
    'return "Hello world,\nI\'m Brendan!";}'
  ];

  const desktopSequence = [
    1200,
    '        return "Hello world, I\'m Brendan!";'
  ];

  return (
    <div className={`relative ${isMobile ? "h-auto" : "h-32"} w-full`}>
      <div className="mb-3 text-3xl font-semibold text-white text-shadow-lg whitespace-pre-wrap break-words">
        <TypeAnimation
          sequence={['public String welcome() {']}
          wrapper="div"
          cursor={false}
          repeat={0}
        />
      </div>
      <div className="mb-3 text-3xl font-semibold text-white text-shadow-lg whitespace-pre-wrap break-words">
        <TypeAnimation
          sequence={isMobile ? mobileSequence : desktopSequence}
          wrapper="div"
          cursor={false}
          repeat={0}
        />
      </div>
      {!isMobile && (
      <div className="mb-3 text-3xl font-semibold text-white text-shadow-lg whitespace-pre-wrap break-words">
        <TypeAnimation
          sequence={[
            4200,
            '}',
          ]}
          wrapper="div"
          cursor={true}
          repeat={0}
        />
      </div>
      )}
    </div>
  );
}
