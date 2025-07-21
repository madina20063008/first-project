
import React from 'react'
import Boy from '../../assets/images/boy.png'
import { Arrow, Message } from '../../assets/icons/icons'
import Playing from '../../assets/images/playing.png'
import Children from '../../assets/images/children.png'
import Button from '../../components/Button'

const Blogs = () => {
    return (
        <div className='container pt-[34px]'>
            <h2 className="text-[30px] font-medium pb-[50px] text-center lg:text-left">
                FROM&nbsp;&nbsp;OUR&nbsp;&nbsp;
                <span style={{ color: '#98d6e9' }}>BLOG</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[110px] mb-[50px] place-items-center">
                <div className="max-w-[300px] max-h-[550px]">
                    <img src={Boy} alt="boy" className="w-[300px] h-[238px] object-cover" />
                    <p className='text-[20px] mt-[20px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className='text-[20px] mt-[20px] font-medium'>
                        September 10, 2021 by Admin
                    </p>
                    <div className="flex gap-[10px] mt-[20px] items-center">
                        <Message />
                        <p className='text-[30px] font-bold'>10</p>
                    </div>
                </div>

                <div className="max-w-[300px] max-h-[550px]">
                    <img src={Children} alt="children" className="w-[300px] h-[330px] object-cover" />
                    <p className='text-[20px] mt-[20px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...
                    </p>
                    <p className='text-[20px] mt-[20px] font-medium'>
                        September 10, 2021 by Admin
                    </p>
                    <div className="flex gap-[10px] mt-[20px] items-center">
                        <Message />
                        <p className='text-[30px] font-bold'>31</p>
                    </div>
                </div>

                <div className="max-w-[300px] max-h-[550px]">
                    <img src={Playing} alt="playing" className="w-[300px] h-[240px] object-cover" />
                    <p className='text-[20px] mt-[20px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className='text-[20px] mt-[20px] font-medium'>
                        September 10, 2021 by Admin
                    </p>
                    <div className="flex gap-[10px] mt-[20px] items-center">
                        <Message />
                        <p className='text-[30px] font-bold'>10</p>
                    </div>
                </div>

            </div>


            <div className="flex justify-center lg:justify-start">
                <Button
                    text="More Articles"
                    icon={<Arrow />}
                    style={{
                        width: '227px',
                        borderRadius: '5px',
                        display: 'flex',
                        gap: '15px',
                        marginBottom: '50px',
                        justifyContent: 'center'
                    }}
                />
            </div>

        </div>
    )
}

export default Blogs
