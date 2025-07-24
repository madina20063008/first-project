
import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import { color } from '../../components/Color';
import Button from '../../components/Button';
import { Arrow } from '../../assets/icons/icons';
import headerImg from '../../assets/images/header.png';
import { useNavigate } from 'react-router-dom';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const Header = () => {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: {
      perView: 3,
      spacing: 30,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(max-width: 640px)': {
        slides: { perView: 1, spacing: 0 },
      },
    },
    created(slider) {
      setInterval(() => {
        if (slider) slider.next();
      }, 2000);
    },
  });

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/education/activity/list/`);
        const data = await res.json();
        setActivities(data);
      } catch (error) {
        console.error('Failed to fetch activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="bg-[#EDEDED] min-h-[500px]">
      <div className="container flex flex-col lg:flex-row justify-between items-center gap-10 py-[40px] lg:py-[81px]">
        <div className="max-w-full lg:max-w-[500px] text-center lg:text-left">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[30px] font-semibold pb-[20px] lg:pb-[30px] leading-snug">
            Lorem Ipsum dolor <br />
            <span style={{ color: color.Blue }}>sit amet.</span>
          </h1>
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] pb-[20px] lg:pb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              text="More info"
              icon={<Arrow />}
              style={{
                width: '186px',
                borderRadius: '5px',
                display: 'flex',
                gap: '15px',
              }}
              onClick={() => navigate('/about')}
            />
          </div>
        </div>

        <div className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[550px]">
          <img src={headerImg} alt="people" className="w-full h-auto object-cover" />
        </div>
      </div>

      <div className="container pb-[36px]">
        <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-medium pb-[30px] text-center lg:text-left tracking-wider">
          SOME&nbsp;&nbsp;OF&nbsp;&nbsp;OUR&nbsp;&nbsp;<span style={{ color: '#98d6e9' }}>ACTIVITIES</span>
        </h2>

        <div className="px-4 lg:px-0">
          {activities.length > 1 ? (
            <div ref={sliderRef} className="keen-slider">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="keen-slider__slide px-4 py-6 bg-white rounded-lg shadow-md text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-[61px] h-[61px] rounded-[15px] flex items-center justify-center overflow-hidden" style={{backgroundColor: color.Blue}}>
                      <img
                        src={
                          activity.icon?.startsWith('http')
                            ? activity.icon
                            : `https://educationalwebsite.pythonanywhere.com${activity.icon}`
                        }
                        alt="icon"
                        className="w-[50%] h-[50%] object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-[20px] lg:text-[22px] pb-[10px]">
                    {activity.title}
                  </h3>
                  <p className="text-[15px] lg:text-[16px]">{activity.description}</p>
                </div>
              ))}
            </div>
          ) : activities.length === 1 ? (
            <div className="px-4 py-6 bg-white rounded-lg shadow-md text-center max-w-[300px] mx-auto">
              <div className="flex justify-center mb-4">
                <div className="w-[61px] h-[61px] rounded-[15px] bg-[#F0F0F0] flex items-center justify-center overflow-hidden">
                  <img
                    src={
                      activities[0].icon?.startsWith('http')
                        ? activities[0].icon
                        : `https://educationalwebsite.pythonanywhere.com${activities[0].icon}`
                    }
                    alt="icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-[20px] lg:text-[22px] pb-[10px]">
                {activities[0].title}
              </h3>
              <p className="text-[15px] lg:text-[16px]">{activities[0].description}</p>
            </div>
          ) : (
            <p className="text-center text-gray-500">No activities available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
