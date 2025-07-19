
import React, { useState } from 'react';
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

const groupSlides = [];
for (let i = 0; i < 12; i += 4) {
  groupSlides.push(staffList.slice(i, i + 4));
}

const Staff = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    slides: {
      perView: 1,
    },
  });

  return (
    <div className="bg-[#EDEDED] pb-6">
      <div className="container pt-[12px]">
        <h2 className="text-[30px] font-medium pb-[50px] text-center lg:text-left">
          MEET&nbsp;&nbsp;OUR&nbsp;&nbsp;
          <span style={{ color: '#98d6e9' }}>STAFF</span>
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {groupSlides.map((group, index) => (
            <div
              key={index}
              className="keen-slider__slide grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 place-items-center"
            >
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
          <div className="flex gap-4">
            {groupSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-5 h-5 rounded-full border-2 border-[#7cc5d8] flex items-center justify-center transition-all`}
              >
                {idx === currentSlide && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7cc5d8]" />
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


