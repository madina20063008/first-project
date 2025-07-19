
import React from 'react'
import BgImage from '../../assets/images/Background.png';
import { color } from '../../components/Color';
import Button from '../../components/Button';

const Newsletter = () => {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat w-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex items-center justify-center px-4 py-12 sm:py-16 lg:py-0"
            style={{ backgroundImage: `url(${BgImage})` }}
        >
            <div className="flex flex-col items-center text-center w-full max-w-[1000px]">
                <h2 style={{ color: color.Blue }} className="block text-[24px] sm:text-[28px] lg:text-[30px] font-medium leading-snug">
                    JOIN OUR NEWSLETTER <br className="hidden sm:block" /> AND BE THE FIRST TO KNOW!
                </h2>

                <input
                    type="email"
                    placeholder="Enter your email to receive our newsletter"
                    className="w-full sm:w-[600px] lg:w-[900px] h-[60px] sm:h-[70px] lg:h-[80px] p-[20px] rounded-[5px] text-black border-[2px] border-[#80C4D3] mt-[30px] mb-[10px] text-sm sm:text-base"
                />
                <Button
                    style={{
                        width: '129px',
                        height: '50px',
                        borderRadius: '5px',
                        margin: 'auto'
                    }}
                    text="Submit"
                />
            </div>
        </div>
    )
}

export default Newsletter;
