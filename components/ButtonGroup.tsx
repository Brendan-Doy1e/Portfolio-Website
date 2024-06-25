import React from 'react';

interface ButtonGroupProps {
  next: () => void;
  previous: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => {
  return (
    <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4 pointer-events-none">
      <button
        onClick={previous}
        className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg pointer-events-auto"
      >
        &lt;
      </button>
      <button
        onClick={next}
        className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg pointer-events-auto"
      >
        &gt;
      </button>
    </div>
  );
};

export default ButtonGroup;
