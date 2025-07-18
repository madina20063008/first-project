
import React from 'react';
import BgImage from '../../assets/images/Background.png';
import { color } from '../../components/Color';
import Button from '../../components/Button';
import { Arrow } from '../../assets/icons/icons';

const FooterTop = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex items-center justify-center px-4 py-12 sm:py-16 lg:py-0"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="text-center max-w-[952px]">
        <h5
          className="font-bold text-[28px] sm:text-[36px] lg:text-[50px] leading-tight"
          style={{ color: color.Blue }}
        >
          Join Us Today!
        </h5>

        <p className="font-medium text-[15px] sm:text-[18px] lg:text-[20px] mt-6 px-2 text-gray-800">
          Rapkhen is an outstanding Nursery & Primary school targeting educational system,
          helping kids to read and write and to establish strong identity on the internet
          with real developing knowledge & understanding.
        </p>

        <div className="mt-10 flex justify-center">
          <Button
            text="Contact us"
            icon={<Arrow />}
            style={{
              width: '202px',
              borderRadius: '5px',
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
