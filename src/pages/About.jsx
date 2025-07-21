
import React from 'react';
import BG from '../assets/images/bg.png';
import Child from '../assets/images/childrenpainting.png';
import Newsletter from '../modules/Newsletter/Newsletter';
import PageHeader from '../components/PageHeader'; 

const About = () => {
  return (
    <div>
      <PageHeader title="About us" current="About us" bg={BG} />

      <div className="container px-2 sm:px-2 lg:px-0">

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0 items-center lg:items-start text-center lg:text-left">
          <img 
            src={Child} 
            alt="" 
            className="w-full lg:w-[550px] h-auto lg:h-[450px] object-cover mx-auto lg:mx-0" 
          />
          <div className="w-full lg:max-w-[501px] mt-6 lg:mt-0">
            <div className="who-we-are flex items-center justify-center lg:justify-start gap-4 text-[#80C4D3] font-medium text-[24px] uppercase">
              <span>•</span>
              <span>WHO WE ARE</span>
              <span>•</span>
            </div>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] mt-[20px] lg:mt-[30px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod temp incit ut labore dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore dol magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipng elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 my-[50px] text-center lg:text-left items-center lg:items-start">
          <div className="w-full lg:max-w-[501px]">
            <div className="who-we-are flex items-center justify-center lg:justify-start gap-4 text-[#80C4D3] font-medium text-[18px] uppercase">
              <span>•</span>
              <span>Our mission</span>
              <span>•</span>
            </div>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] mt-[20px] lg:mt-[30px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod temp incit ut labore dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore dol magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipng elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-full lg:max-w-[501px] mt-10 lg:mt-0">
            <div className="who-we-are flex items-center justify-center lg:justify-start gap-4 text-[#80C4D3] font-medium text-[18px] uppercase">
              <span>•</span>
              <span>Our vision</span>
              <span>•</span>
            </div>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] mt-[20px] lg:mt-[30px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod temp incit ut labore dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore dol magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipng elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default About;
