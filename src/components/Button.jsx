import React from 'react';

const Button = ({ className, label, onClick }) => {
  return (
    <>
      <button
        className={`bg-indigo-500 py-2.5 px-4 text-white font-medium rounded-[5px] hover:bg-indigo-700 transition-colors ease-in-out duration-200 ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
