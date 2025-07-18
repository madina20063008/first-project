// src/Button.jsx
import React from 'react';
import { color } from './Color';

const Button = ({ style = {}, text, icon }) => {
  return (
    <div
      className="cursor-pointer flex items-center justify-center"
      style={{
        backgroundColor: color.Blue,
        height: '61px',
        ...style,
      }}
    >
      <span className="text-white font-medium text-[16px]">{text}</span>
      {icon && <span className="text-white text-sm rounded-[15px]">{icon}</span>}
    </div>
  );
};

export default Button;
