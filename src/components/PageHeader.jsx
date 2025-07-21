
import React from 'react';
import { Arrow } from '../assets/icons/icons'; 

const PageHeader = ({ title, current, bg }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-white w-full h-[182px] mb-[50px] flex items-center px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <h1 className="text-[28px] sm:text-[33px] font-medium">{title}</h1>
        <div className="flex mt-[18px] gap-[7px] text-sm sm:text-base">
          <a href="/" className="opacity-[60%]" >Home</a>
          <div className="mt-[6px] sm:mt-[8px]"><Arrow /></div>
          <p className="font-medium">{current}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
