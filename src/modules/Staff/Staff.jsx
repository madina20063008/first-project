
import React, { useState, useEffect, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Person1 from '../../assets/images/person1.png';
import Person2 from '../../assets/images/person4.jpg';
import Person3 from '../../assets/images/person3.jpg';
import Person4 from '../../assets/images/person2.jpg';
import { color } from '../../components/Color';
import { Facebook, Instagram, WhatsApp } from '../../assets/icons/icons';

const staffList = [
  { img: Person1, role: 'Headmistress' },
  { img: Person2, role: 'Headmaster' },
  { img: Person3, role: 'Teacher' },
  { img: Person4, role: 'Teacher' },
  { img: Person1, role: 'Teacher' },
  { img: Person2, role: 'Teacher' },
  { img: Person3, role: 'Teacher' },
  { img: Person4, role: 'Teacher' },
  { img: Person1, role: 'Teacher' },
  { img: Person2, role: 'Teacher' },
  { img: Person3, role: 'Teacher' },
  { img: Person4, role: 'Teacher' },
];

const Staff = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [groupSize, setGroupSize] = useState(4);
  const timer = useRef();

  useEffect(() => {
    const updateGroupSize = () => {
      const width = window.innerWidth;
      if (width < 640) setGroupSize(1);
      else if (width < 1024) setGroupSize(2);
      else setGroupSize(4);
    };

    updateGroupSize();
    window.addEventListener('resize', updateGroupSize);
    return () => window.removeEventListener('resize', updateGroupSize);
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
          }, 1000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
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

  return (
    <div className="bg-[#EDEDED] pb-6">
      <div className="container pt-[12px]">
        <h2 className="text-[30px] font-medium pb-[50px] text-center lg:text-left">
          MEET&nbsp;&nbsp;OUR&nbsp;&nbsp;
          <span style={{ color: '#98d6e9' }}>STAFF</span>
        </h2>

        <div ref={sliderRef} className="keen-slider">
          {groupSlides.map((group, index) => (
            <div key={index} className={`keen-slider__slide ${getGridCols()}`}>
              {group.map((person, idx) => (
                <div key={idx} className="w-[224px] flex flex-col items-center">
                  <img
                    src={person.img}
                    alt="person"
                    className="w-[120px] h-[120px] rounded-full"
                  />
                  <h4 className="font-semibold text-[22px] mt-[10px] text-center">
                    Afuwape J. Abiodun
                  </h4>
                  <p className="text-center" style={{ color: color.Blue }}>
                    {person.role}
                  </p>
                  <div className="flex w-[120px] justify-between mt-[10px]">
                    <Facebook />
                    <WhatsApp />
                    <Instagram />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

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
