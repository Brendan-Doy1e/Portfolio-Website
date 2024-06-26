import React from 'react';
import { isMobile } from 'react-device-detect';

interface ButtonGroupProps {
  next: () => void;
  previous: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => {
  if (isMobile) return null; 

  return (
    <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2 pointer-events-none">
      <button
        onClick={previous}
        className="bg-transparent text-white rounded-full w-10 h-10 flex items-center justify-center pointer-events-auto border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 absolute left-0 ml-4"
      >
        &lt;
      </button>
      <button
        onClick={next}
        className="bg-transparent text-white rounded-full w-10 h-10 flex items-center justify-center pointer-events-auto border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 absolute right-0 mr-4"
      >
        &gt;
      </button>
    </div>
  );
};

export default ButtonGroup;
