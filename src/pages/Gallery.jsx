
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FadeLoader } from 'react-spinners';

import PageHeader from '../components/PageHeader';
import Newsletter from '../modules/Newsletter/Newsletter';
import BG from '../assets/images/bg.png';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 9;

  useEffect(() => {
    axios
      .get('https://educationalwebsite.pythonanywhere.com/education/gallery/')
      .then((res) => {
        setGalleryItems(res.data);
      })
      .catch((err) => {
        console.error('Error fetching gallery data:', err);
      })
      .finally(() => setTimeout(() => setLoading(false), 1000));
  }, []);

  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  const handlePrev = () => setCurrentPage((p) => (p > 1 ? p - 1 : p));
  const handleNext = () => setCurrentPage((p) => (p < totalPages ? p + 1 : p));
  const handleGoTo = (page) => setCurrentPage(page);

  const paginatedItems = galleryItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderImage = (item, index) => (
    <div
      key={index}
      className="relative group overflow-hidden cursor-pointer w-full h-[260px] sm:h-[300px] lg:h-[330px]"
      onClick={() => openModal(item.image)}
    >
      <img
        src={item.image}
        alt={`gallery ${index}`}
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
            {item.description || 'No description'}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <PageHeader title="Gallery" current="Gallery" bg={BG} />

      <div className="container pt-[34px] !mb-[50px] relative min-h-[600px]">
        {/* Loader Overlay */}
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-md">
            <FadeLoader color="#36d7b7" />
          </div>
        )}

        {/* Blurred Content */}
        <div className={`transition-all duration-300 ${loading ? 'blur-sm scale-[0.98]' : ''}`}>
          <div className="who-we-are mb-[50px] flex items-center justify-center gap-4 text-[#80C4D3] font-medium text-[18px] max-sm:text-[24px] lg:justify-start uppercase">
            <span>•</span>
            <span>The school gallery</span>
            <span>•</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-[35px]">
            {paginatedItems.map(renderImage)}
          </div>

          <div className="flex items-center justify-between px-2 sm:px-0">
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
                {Array.from({ length: totalPages }, (_, i) => (
                  <option key={i + 1} value={i + 1} className="bg-[#8CC9D5] text-white">
                    {i + 1}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />

      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-[90%] max-h-[80%]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold shadow-md hover:bg-gray-200 transition"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Expanded gallery item"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
