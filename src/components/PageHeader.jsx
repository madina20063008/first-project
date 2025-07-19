// import React from 'react';
// import { Arrow } from '../assets/icons/icons';
// import PropTypes from 'prop-types';

// const PageHeader = ({ title, current, bg }) => {
//   return (
//     <div
//       className="bg-cover bg-center bg-no-repeat text-white w-full h-[182px] mb-[50px] flex items-center px-4"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <div className="container">
//         <h1 className="text-[28px] sm:text-[33px] font-medium">{title}</h1>
//         <div className="flex mt-[18px] gap-[7px] text-sm sm:text-base">
//           <p className="opacity-[60%]">Home</p>
//           <div className="mt-[6px] sm:mt-[8px]"><Arrow /></div>
//           <p className="font-medium">{current}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// PageHeader.propTypes = {
//   title: PropTypes.string.isRequired,
//   current: PropTypes.string.isRequired,
//   bg: PropTypes.string.isRequired,
// };

// export default PageHeader;


import React from 'react';
import { Arrow } from '../assets/icons/icons'; // make sure this path is correct

const PageHeader = ({ title, current, bg }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-white w-full h-[182px] mb-[50px] flex items-center px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <h1 className="text-[28px] sm:text-[33px] font-medium">{title}</h1>
        <div className="flex mt-[18px] gap-[7px] text-sm sm:text-base">
          <p className="opacity-[60%]">Home</p>
          <div className="mt-[6px] sm:mt-[8px]"><Arrow /></div>
          <p className="font-medium">{current}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
