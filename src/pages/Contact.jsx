
import React from 'react';
import Newsletter from '../modules/Newsletter/Newsletter';
import PageHeader from '../components/PageHeader';
import BG from '../assets/images/bg.png';
import { color } from '../components/Color';
import Contact1 from '../assets/images/contact1.png';
import Contact2 from '../assets/images/contact2.png';
import Contact3 from '../assets/images/contact3.png';
import Button from '../components/Button';

const Contact = () => {
    return (
        <div>
            <PageHeader title="Contact us" current="Contact us" bg={BG} />

            <div className="container mx-auto">
                <div className="w-full mb-[50px] overflow-hidden">
                    <div className="rounded-[5px] mb-[50px]" style={{ backgroundColor: color.Blue }}>

                        <div className="flex flex-wrap justify-between">
                   
                            <div className="p-[30px] w-full lg:w-1/2 flex justify-center flex-wrap lg:justify-start">
                                <div className="max-w-[414px] w-full">
                                    <div className="who-we-are mb-[30px] flex items-center justify-center lg:justify-start gap-4 text-white font-medium text-[18px] uppercase" style={{ color: 'white' }}>
                                        <span>•</span>
                                        <span>Contact Info</span>
                                        <span>•</span>
                                    </div>

                                    <div className="bg-white rounded-[10px] w-full min-h-[180px] p-[30px] flex gap-[18px] flex-wrap">
                                        <img src={Contact1} alt="phone" className="max-w-[120px] hidden sm:block" />
                                        <img src={Contact1} alt="phone" className="max-w-[80px] sm:hidden" />
                                        <div>
                                            <h2 className="font-semibold text-[20px] mt-[5px]">Call us directly on</h2>
                                            <p className="text-[20px] font-medium mt-[9px]">+234 805 029 1265</p>
                                            <p className="text-[20px] font-medium mt-[9px]">+234 907 228 0656</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-[10px] w-full min-h-[180px] p-[30px] flex gap-[18px] mt-[30px] flex-wrap">
                                        <img src={Contact2} alt="email" className="max-w-[120px] hidden sm:block" />
                                        <img src={Contact2} alt="email" className="max-w-[80px] sm:hidden" />
                                        <div>
                                            <h2 className="font-semibold text-[20px] mt-[5px]">Mail us directly on</h2>
                                            <p className="text-[20px] font-medium mt-[9px]">Info20@gmail.com</p>
                                            <p className="text-[20px] font-medium mt-[9px]">Info21@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-[10px] w-full min-h-[180px] p-[30px] flex flex-wrap gap-[18px] mt-[30px] ">
                                        <img src={Contact3} alt="location" className="max-w-[120px] hidden sm:block" />
                                        <img src={Contact3} alt="location" className="max-w-[80px] sm:hidden" />
                                        <div>
                                            <h2 className="font-semibold text-[20px] mt-[5px]">Find us</h2>
                                            <p className="text-[20px] font-medium mt-[9px] max-w-[216px]">
                                                4 law castle agbole aro opp. fidelity bank omida, abeokuta.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-[30px] w-full lg:w-1/2 flex justify-center">
                                <div className="flex flex-col items-center lg:items-start max-w-[480px] w-full">
                                    <div className="who-we-are mb-[30px] flex items-center justify-center lg:justify-start gap-4 text-white font-medium text-[18px] uppercase" style={{ color: 'white' }}>
                                        <span>•</span>
                                        <span>Get in Touch</span>
                                        <span>•</span>
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full h-[80px] rounded-[5px] p-[20px]"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full h-[80px] rounded-[5px] p-[20px] mt-[30px]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full h-[80px] rounded-[5px] p-[20px] mt-[30px]"
                                    />
                                    <textarea
                                        placeholder="Mesaage here..."
                                        className="w-full h-[185px] rounded-[5px] p-[20px] mt-[30px]"
                                    ></textarea>

                                    <div className="mt-[30px] w-full flex justify-center lg:justify-end">
                                        <Button
                                            text="Send message"
                                            style={{
                                                border: "2px solid white",
                                                padding: "8px 16px",
                                                borderRadius: "2px",
                                                maxWidth: "206px",
                                                display: "flex",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d539111.8987128875!2d69.47539407912477!3d41.267160872657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1752955653751!5m2!1sen!2s"
                            width="100%"
                            height="540"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map - Contact Location"
                            className="max-w-full"
                        />
                    </div>
                </div>
            </div>

            <Newsletter />
        </div>
    );
};

export default Contact;


