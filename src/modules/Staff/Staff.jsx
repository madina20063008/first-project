
import React, { useState, useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { Facebook, Instagram, TelegramWhite, WhatsApp } from '../../assets/icons/icons';

const Staff = () => {
  const [staffList, setStaffList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const API_URL = import.meta.env.VITE_API_URL;

  const getInitialGroupSize = () => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1024;
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 4;
  };

  const [groupSize, setGroupSize] = useState(getInitialGroupSize());

  useEffect(() => {
    const fetchStaffWithSocials = async () => {
      try {
        const [staffRes, socialRes] = await Promise.all([
          fetch(`${API_URL}/education/staff/`),
          fetch(`${API_URL}/education/staff-social-media/`),
        ]);

        const staffData = await staffRes.json();
        const socialData = await socialRes.json();

        const combined = staffData.map((staff) => ({
          ...staff,
          staff_social_media: socialData.filter((sm) => sm.staff === staff.id),
        }));

        setStaffList(combined);
      } catch (err) {
        console.error('Error fetching staff or social media:', err);
      }
    };

    fetchStaffWithSocials();
  }, [API_URL]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setGroupSize(1);
      else if (width < 1024) setGroupSize(2);
      else setGroupSize(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  const groupSlides = [...Array(Math.ceil(staffList.length / groupSize))].map((_, i) =>
    staffList.slice(i * groupSize, i * groupSize + groupSize)
  );

  const getGridCols = () => {
    if (groupSize === 1) return 'flex justify-center';
    if (groupSize === 2) return 'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 place-items-center';
    return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 place-items-center';
  };

  const getIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('facebook')) return <Facebook />;
    if (t.includes('instagram')) return <Instagram />;
    if (t.includes('telegram')) return <TelegramWhite />;
    return null;
  };

  return (
    <div className="bg-[#EDEDED] pb-6">
      <div className="container pt-[12px]">
        <h2 className="text-[30px] font-medium pb-[50px] text-center lg:text-left">
          MEET&nbsp;&nbsp;OUR&nbsp;&nbsp;
          <span style={{ color: '#98d6e9' }}>STAFF</span>
        </h2>

        {staffList.length > 0 && (
          <div ref={sliderRef} className="keen-slider">
            {groupSlides.map((group, index) => (
              <div key={index} className={`keen-slider__slide ${getGridCols()}`}>
                {group.map((person, idx) => (
                  <div key={idx} className="w-[224px] flex flex-col items-center">
                    <img
                      src={
                        person.avatar?.startsWith('http')
                          ? person.avatar
                          : `${API_URL}${person.avatar}`
                      }
                      alt={person.full_name}
                      onError={(e) => {
                        e.target.src = '/default-staff.jpg';
                      }}
                      className="w-[120px] h-[120px] rounded-full object-cover"
                    />
                    <h4 className="font-semibold text-[22px] mt-[10px] text-center">
                      {person.full_name}
                    </h4>
                    <p className="text-center text-[#80C4D3]">{person.position}</p>
                    <div className="flex w-[120px] justify-between mt-[10px]">
                      {person.staff_social_media?.map((social, i) => {
                        const icon = getIcon(social.title);
                        return icon ? (
                          <a key={i} href={social.url} target="_blank" rel="noopener noreferrer">
                            {icon}
                          </a>
                        ) : null;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center items-center mt-6">
          <div className="flex gap-1 sm:gap-4">
            {groupSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-2.5 h-2.5 sm:w-5 sm:h-5 rounded-full border border-[#7cc5d8] sm:border-2 flex items-center justify-center transition-all`}
              >
                {idx === currentSlide && (
                  <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-[#7cc5d8]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
