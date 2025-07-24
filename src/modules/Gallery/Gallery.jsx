
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Newsletter from '../Newsletter/Newsletter';
import { Arrow, Search } from '../../assets/icons/icons';
import Button from '../../components/Button';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [modalImage, setModalImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://educationalwebsite.pythonanywhere.com/education/gallery/')
            .then((res) => res.json())
            .then((data) => {
                console.log('Gallery data:', data);
                setImages(data);
            })
            .catch((err) => console.error('Error fetching gallery:', err));
    }, []);

    const openModal = (img) => setModalImage(img);
    const closeModal = () => setModalImage(null);

    const renderImage = (imgSrc, description, classes) => (
        <div
            key={imgSrc}
            className={`relative group overflow-hidden cursor-pointer ${classes}`}
            onClick={() => openModal(imgSrc)}
        >
            <img
                src={imgSrc}
                alt={description || 'Gallery Image'}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                    e.target.style.display = 'none';
                }}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="mb-2">
                    <Search className="w-8 h-8 text-white" />
                </div>
                <p className="text-white text-lg font-medium px-4 text-center">{description}</p>
            </div>
        </div>
    );

    return (
        <div className="container">
            <h2 className="text-[30px] mt-[50px] font-medium pb-[50px] text-center lg:text-left">
                FROM&nbsp;&nbsp;OUR&nbsp;&nbsp;
                <span style={{ color: '#98d6e9' }}>GALLERY</span>
            </h2>
            {images.length > 0 ? (
                <>
                    <div className="flex flex-col lg:flex-row gap-4 mb-[35px]">
                        {renderImage(images[0]?.image, images[0]?.description, 'w-full lg:w-[66%] h-[200px] sm:h-[250px] lg:h-[330px]')}
                        {renderImage(images[1]?.image, images[1]?.description, 'w-full lg:w-[33%] h-[200px] sm:h-[250px] lg:h-[330px]')}
                    </div>

                    {/* Second Row (3 Images) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-[35px]">
                        {renderImage(images[2]?.image, images[2]?.description, 'w-full h-[260px] sm:h-[300px]')}
                        {renderImage(images[3]?.image, images[3]?.description, 'w-full h-[260px] sm:h-[300px]')}
                        {renderImage(images[4]?.image, images[4]?.description, 'w-full h-[260px] sm:h-[300px]')}
                    </div>

                    {/* Third Row (2 Images) */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-[50px]">
                        {renderImage(images[5]?.image, images[5]?.description, 'w-full lg:w-[35%] h-[250px] lg:h-[360px]')}
                        {renderImage(images[6]?.image, images[6]?.description, 'w-full lg:w-[65%] h-[250px] lg:h-[360px]')}
                    </div>
                </>
            ) : (
                <p style={{ textAlign: 'center', color: '#aaa' }}>No images found.</p>
            )}

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
    );
};

export default Gallery;

