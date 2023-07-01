import React from 'react';

const CustomButton = ({ onClick, children }) => {
  return (
    <button
      className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;