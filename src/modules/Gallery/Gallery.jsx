
import React from 'react'
import Gallery1 from '../../assets/images/gallery1.png'
import Gallery2 from '../../assets/images/gallery2.png'
import Gallery3 from '../../assets/images/gallery3.png'
import Gallery4 from '../../assets/images/gallery4.png'
import Gallery6 from '../../assets/images/gallery6.png'
import Gallery7 from '../../assets/images/gallery7.png'
import Children from '../../assets/images/children.png'
import { Arrow } from '../../assets/icons/icons'
import Button from '../../components/Button'

const Gallery = () => {
    return (
        <div className='container'>
            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-medium py-[30px] text-center lg:text-left tracking-wider">
                FROM&nbsp;&nbsp;OUR&nbsp;&nbsp;
                <span style={{ color: '#98d6e9' }}>GALLERY</span>
            </h2>
            <div className="flex flex-col lg:flex-row gap-4 mb-[35px]">
                <img src={Gallery1} alt="children" className='w-full lg:w-[66%] h-[200px] sm:h-[250px] lg:h-[330px] object-cover' />
                <img src={Gallery2} alt="children" className='w-full lg:w-[33%] h-[200px] sm:h-[250px] lg:h-[330px] object-cover' />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-[35px]">
                <img src={Gallery3} alt="children" className='w-full h-[260px] sm:h-[300px] object-cover' />
                <img src={Gallery4} alt="children" className='w-full h-[260px] sm:h-[300px] object-cover' />
                <img src={Children} alt="children" className='w-full h-[260px] sm:h-[300px] object-cover' />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mb-[50px]">
                <img src={Gallery6} alt="children" className='w-full lg:w-[35%] h-[250px] lg:h-[360px] object-cover' />
                <img src={Gallery7} alt="children" className='w-full lg:w-[65%] h-[250px] lg:h-[360px] object-cover' />
            </div>
            <div className='flex justify-center lg:justify-start'>
                <Button
                    text="More Photos"
                    icon={<Arrow />}
                    style={{ width: '215px', borderRadius: '5px', display: 'flex', gap: '15px', marginBottom: '50px' }}
                />
            </div>
        </div>
    )
}

export default Gallery
