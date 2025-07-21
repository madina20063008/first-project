
import React, { useState } from 'react'
import Gallery1 from '../../assets/images/gallery1.png'
import Gallery2 from '../../assets/images/gallery2.png'
import Gallery3 from '../../assets/images/gallery3.png'
import Gallery4 from '../../assets/images/gallery4.png'
import Gallery6 from '../../assets/images/gallery6.png'
import Gallery7 from '../../assets/images/gallery7.png'
import Children from '../../assets/images/children.png'
import { Arrow } from '../../assets/icons/icons'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
    const [modalImage, setModalImage] = useState(null)

    const openModal = (img) => setModalImage(img)
    const closeModal = () => setModalImage(null)
    const navigate = useNavigate();
    const renderImage = (imgSrc, classes) => (
        <div
            className={`relative group overflow-hidden cursor-pointer ${classes}`}
            onClick={() => openModal(imgSrc)}
        >
            <img
                src={imgSrc}
                alt="children"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center px-4">
                    <svg className="mx-auto w-8 h-8 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <p className="text-white text-lg font-medium">
                        AfLorem ipsum dolor sit amet, <br /> consectetur adcing elit.
                    </p>
                </div>
            </div>
        </div>
    )

    return (
        <div className='container'>
            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-medium py-[30px] text-center lg:text-left tracking-wider">
                FROM&nbsp;&nbsp;OUR&nbsp;&nbsp;
                <span style={{ color: '#98d6e9' }}>GALLERY</span>
            </h2>

            <div className="flex flex-col lg:flex-row gap-4 mb-[35px]">
                {renderImage(Gallery1, 'w-full lg:w-[66%] h-[200px] sm:h-[250px] lg:h-[330px]')}
                {renderImage(Gallery2, 'w-full lg:w-[33%] h-[200px] sm:h-[250px] lg:h-[330px]')}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-[35px]">
                {renderImage(Gallery3, 'w-full h-[260px] sm:h-[300px]')}
                {renderImage(Gallery4, 'w-full h-[260px] sm:h-[300px]')}
                {renderImage(Children, 'w-full h-[260px] sm:h-[300px]')}
            </div>

            <div className="flex flex-col lg:flex-row gap-4 mb-[50px]">
                {renderImage(Gallery6, 'w-full lg:w-[35%] h-[250px] lg:h-[360px]')}
                {renderImage(Gallery7, 'w-full lg:w-[65%] h-[250px] lg:h-[360px]')}
            </div>

            <div className='flex justify-center lg:justify-start'>
                <Button
                    text="More Photos"
                    icon={<Arrow />}
                    style={{ width: '215px', borderRadius: '5px', display: 'flex', gap: '15px', marginBottom: '50px' }}
                    onClick={() => navigate('/gallery')}

                />
            </div>

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
    )
}

export default Gallery

