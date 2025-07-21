
import React, { useState } from 'react';

import PageHeader from '../components/PageHeader';
import Newsletter from '../modules/Newsletter/Newsletter';

import BG from '../assets/images/bg.png';
import Gallery1 from '../assets/images/gallery1.png';
import Gallery2 from '../assets/images/gallery2.png';
import Gallery3 from '../assets/images/gallery3.png';
import Gallery4 from '../assets/images/gallery4.png';
import Gallery6 from '../assets/images/gallery6.png';
import Gallery7 from '../assets/images/gallery7.png';
import Children from '../assets/images/children.png';
import Gallery10 from '../assets/images/gallery10.png';
import Gallery11 from '../assets/images/gallery11.png';
import Gallery12 from '../assets/images/gallery12.png';
import Gallery13 from '../assets/images/gallery13.png';

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  const handlePrev = () => setCurrentPage((p) => (p > 1 ? p - 1 : p));
  const handleNext = () => setCurrentPage((p) => (p < totalPages ? p + 1 : p));
  const handleGoTo = (page) => setCurrentPage(page);

  const renderImage = (imgSrc, classes) => (
    <div
      key={imgSrc}
      className={`relative group overflow-hidden cursor-pointer ${classes}`}
      onClick={() => openModal(imgSrc)}
    >
      <img
        src={imgSrc}
        alt="gallery item"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white text-center px-4">
          <svg
            className="mx-auto w-8 h-8 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <p className="text-white text-lg font-medium leading-snug">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <PageHeader title="Gallery" current="Gallery" bg={BG} />

      <div className="container pt-[34px] !mb-[50px]">
        <div className="who-we-are mb-[50px] flex items-center justify-center gap-4 text-[#80C4D3] font-medium text-[18px] max-sm:text-[16px]  lg:justify-start uppercase">
          <span>•</span>
          <span>The school gallery</span>
          <span>•</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-[35px]">
          {renderImage(Gallery1, 'w-full lg:w-[66%] h-[200px] sm:h-[250px] lg:h-[330px]')}
          {renderImage(Gallery2, 'w-full lg:w-[33%] h-[200px] sm:h-[250px] lg:h-[330px]')}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-[35px]">
          {renderImage(Gallery3, 'w-full h-[260px] sm:h-[300px]')}
          {renderImage(Gallery4, 'w-full h-[260px] sm:h-[300px]')}
          {renderImage(Children, 'w-full h-[260px] sm:h-[300px] md:hidden lg:block')}
        </div>


        <div className="flex flex-col lg:flex-row gap-4 mb-[35px]">
          {renderImage(Gallery10, 'w-full lg:w-[66%] h-[200px] sm:h-[250px] lg:h-[330px]')}
          {renderImage(Gallery11, 'w-full lg:w-[33%] h-[200px] sm:h-[250px] lg:h-[330px]')}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-[35px]">
          {renderImage(Gallery12, 'w-full h-[260px] sm:h-[300px]')}
          {renderImage(Gallery6, 'w-full h-[260px] sm:h-[300px]')}
          {renderImage(Gallery13, 'w-full h-[260px] sm:h-[300px] md:hidden lg:block')}
        </div>



        <div className="flex items-center justify-between">
          <div className="flex">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-[#8CC9D5] text-white rounded-l disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ◂ Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-[#8CC9D5] text-white rounded-r disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next ▸
            </button>
          </div>

          <div className="relative flex items-center rounded">
            <span className="px-4 py-2 text-white select-none bg-[#8CC9D5] mr-[2px]">Page</span>
            <select
              className="px-4 py-2 pr-8 rounded-r bg-[#8CC9D5] text-white focus:outline-none appearance-none"
              value={currentPage}
              onChange={(e) => handleGoTo(Number(e.target.value))}
            >
              {[1, 2, 3].map((page) => (
                <option key={page} value={page} className="bg-[#8CC9D5] text-white">
                  {page}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <Newsletter />
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Expanded gallery item"
            className="max-w-[90%] max-h-[80%] rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
