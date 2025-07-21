
import React from 'react';
import Nav from '../../components/Nav';
import { color } from '../../components/Color';
import Button from '../../components/Button';
import { Arrow, Ball, Music, Paint } from '../../assets/icons/icons';
import headerImg from '../../assets/images/header.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="bg-[#EDEDED] min-h-[500px]">
                <div className="container flex flex-col lg:flex-row justify-between items-center gap-10 py-[40px] lg:py-[81px]">
                    <div className="max-w-full lg:max-w-[500px] text-center lg:text-left">
                        <h1 className="text-[24px] sm:text-[28px] lg:text-[30px] font-semibold pb-[20px] lg:pb-[30px] leading-snug">
                            Lorem Ipsum dolor <br />
                            <span style={{ color: color.Blue }}>sit amet.</span>
                        </h1>
                        <p className="text-[16px] sm:text-[18px] lg:text-[20px] pb-[20px] lg:pb-[30px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <Button
                                text="More info"
                                icon={<Arrow />}
                                style={{ width: '186px', borderRadius: '5px', display: 'flex', gap: '15px' }}
                                onClick={() => navigate('/about')}
                            />
                        </div>
                    </div>

                    <div className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[550px]">
                        <img src={headerImg} alt="people" className="w-full h-auto object-cover" />
                    </div>
                </div>

                <div className="container pb-[36px]">
                    <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-medium pb-[30px] text-center lg:text-left tracking-wider">
                        SOME&nbsp;&nbsp;OF&nbsp;&nbsp;OUR&nbsp;&nbsp;
                        <span style={{ color: '#98d6e9' }}>ACTIVITIES</span>
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-[130px] items-center lg:items-start text-center lg:text-left">
                        <div className="w-full max-w-[300px]">
                            <div className="flex justify-center lg:justify-start">
                                <Button
                                    icon={<Ball />}
                                    style={{ width: '61px', borderRadius: '15px', marginBottom: '20px' }}
                                />
                            </div>
                            <h3 className="font-semibold text-[20px] lg:text-[22px] pb-[10px]">Sport</h3>
                            <p className="text-[15px] lg:text-[16px]">
                                Sports are games such as football and other leisure activities which need physical effort and skill.
                            </p>
                        </div>
                        <div className="w-full max-w-[300px]">
                            <div className="flex justify-center lg:justify-start">
                                <Button
                                    icon={<Music />}
                                    style={{ width: '61px', borderRadius: '15px', marginBottom: '20px' }}
                                />
                            </div>
                            <h3 className="font-semibold text-[20px] lg:text-[22px] pb-[10px]">Music</h3>
                            <p className="text-[15px] lg:text-[16px]">
                                Music expresses ideas and emotions in significant forms through rhythm and melody.
                            </p>
                        </div>
                        <div className="w-full max-w-[300px]">
                            <div className="flex justify-center lg:justify-start">
                                <Button
                                    icon={<Paint />}
                                    style={{ width: '61px', borderRadius: '15px', marginBottom: '20px' }}
                                />
                            </div>
                            <h3 className="font-semibold text-[20px] lg:text-[22px] pb-[10px]">Painting</h3>
                            <p className="text-[15px] lg:text-[16px]">
                                Painting is the expression or application of human creative skill and imagination in a visual form.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;
