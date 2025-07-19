
import React from 'react';
import { color } from '../../components/Color';
import Logo from '../../assets/images/Logo.png';
import Line from '../../assets/images/Line.png';
import {
  FacebookWhite,
  Bird,
  InstagramWhite,
  WhatsAppWhite,
  TelegramWhite,
} from '../../assets/icons/icons';

const FooterBottom = () => {
  return (
    <div
      className="w-full flex flex-col items-center pt-[49px]"
      style={{ backgroundColor: color.Blue }}
    >
      <div className="container flex flex-col items-center px-4">
        <img src={Logo} alt="Logo" className="w-[70px] h-auto" />
        <img src={Line} alt="Line" className="mt-[40px]" />

        <ul className="mt-[50px] flex flex-wrap justify-center gap-x-10 gap-y-4 text-white font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-center px-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/management">Management</a></li>
          <li><a href="/news">News & Event</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact us</a></li>
        </ul>

        <div className="flex flex-wrap justify-center mt-[40px] gap-[30px] sm:gap-[40px]">
          <FacebookWhite />
          <Bird />
          <InstagramWhite />
          <WhatsAppWhite />
          <TelegramWhite />
        </div>

        <p className="text-white font-medium text-[14px] sm:text-[16px] opacity-50 text-center pt-[36px] pb-[50px]">
          &copy; {new Date().getFullYear()} Rapkhen. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
