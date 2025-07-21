import React from 'react';
import { color } from './Color';

const Button = ({ style = {}, text, icon, onClick }) => {
  return (
    <div
      className="cursor-pointer flex items-center justify-center group h-[54px] sm:h-[61px] px-3 sm:px-4"
      style={{
        backgroundColor: color.Blue,
        ...style,
      }}
      onClick={onClick}
    >
      <span className="text-white font-medium text-[15px] sm:text-[16px]">{text}</span>
      {icon && (
        <span className="ml-2 text-white text-sm rounded-[15px] transform transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </div>
  );
};

export default Button;
