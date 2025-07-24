
import React, { useEffect, useState } from 'react';
import Newsletter from '../modules/Newsletter/Newsletter';
import PageHeader from '../components/PageHeader';
import BG from '../assets/images/bg.png';
import { FadeLoader } from 'react-spinners';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/about/list/`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setAboutData(data[0]);
        }
      })
      .catch(err => console.error('Failed to fetch About data:', err))
      .finally(() => setTimeout(() => setLoading(false), 1000)); 
  }, [API_URL]);

  return (
    <div className="relative">
      <PageHeader title="About us" current="About us" bg={BG} />

      <div className="container px-2 sm:px-2 lg:px-0 relative min-h-[400px]">

        {/* 🔵 Loader overlay only when loading */}
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-md">
            <FadeLoader color="#36d7b7" />
          </div>
        )}

        {/* 🔵 Blur content when loading */}
        <div className={`transition-all duration-300 ${loading ? 'blur-sm scale-[0.98]' : ''}`}>
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0 items-center lg:items-start text-center lg:text-left">
            <img
              src={aboutData?.image || '/default-about.jpg'}
              alt="About us"
              onError={(e) => { e.target.src = '/default-about.jpg'; }}
              className="w-full lg:w-[550px] h-auto lg:h-[450px] object-cover mx-auto lg:mx-0"
            />
            <div className="w-full lg:max-w-[501px] mt-6 lg:mt-0">
              <div className="who-we-are flex items-center justify-center lg:justify-start gap-4 text-[#80C4D3] font-medium text-[24px] uppercase">
                <span>•</span>
                <span>WHO WE ARE</span>
                <span>•</span>
              </div>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] mt-[20px] lg:mt-[30px] leading-relaxed">
                {aboutData?.wwa}
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
                {aboutData?.our_mission}
              </p>
            </div>
            <div className="w-full lg:max-w-[501px] mt-10 lg:mt-0">
              <div className="who-we-are flex items-center justify-center lg:justify-start gap-4 text-[#80C4D3] font-medium text-[18px] uppercase">
                <span>•</span>
                <span>Our vision</span>
                <span>•</span>
              </div>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] mt-[20px] lg:mt-[30px] leading-relaxed">
                {aboutData?.our_vision}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default About;


