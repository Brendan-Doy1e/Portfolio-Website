"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function TypeAnimationComponent() {
  return (
    <div className="h-32">
      <div className="mb-3 text-3xl font-semibold text-white text-shadow-lg">
        <TypeAnimation
          sequence={['public String welcome() {']}
          wrapper="div"
          cursor={false}
          repeat={0}
        />
      </div>
      <div className="mb-3 text-3xl font-semibold text-white text-shadow-lg">
        <TypeAnimation
          sequence={[
            1200,
            '        return "Hello world, I\'m Brendan!";'.replace(/ /g, '\u00a0'),
          ]}
          wrapper="div"
          cursor={false}
          repeat={0}
        />
      </div>
      <div className="mb-3 text-3xl font-semibold text-white text-shadow-lg">
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
    </div>
  );
}
