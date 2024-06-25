import React from 'react';

interface CustomDotProps {
  onClick: () => void;
  active: boolean;
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
  return (
    <button
      className={`w-4 h-4 mx-1 rounded-full border-2 transition-colors duration-300 ${
        active ? 'bg-white border-white' : 'bg-transparent border-white'
      }`}
      onClick={onClick}
    />
  );
};

export default CustomDot;
