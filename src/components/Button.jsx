import React from 'react';
import { color } from './Color';

const Button = ({ style = {}, text, icon, onClick }) => {
  return (
    <div
      className="cursor-pointer flex items-center justify-center group"
      style={{
        backgroundColor: color.Blue,
        height: '61px',
        ...style,
      }}
      onClick={onClick} // Added this
    >
      <span className="text-white font-medium text-[16px]">{text}</span>
      {icon && (
        <span className="text-white text-sm rounded-[15px] transform transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </div>
  );
};

export default Button;
