
import React from 'react'
import Person1 from '../../assets/images/person1.png'
import { color } from '../../components/Color'
import { Facebook, Instagram, WhatsApp } from '../../assets/icons/icons'
import Person2 from '../../assets/images/person4.jpg'
import Person3 from '../../assets/images/person3.jpg'
import Person4 from '../../assets/images/person2.jpg'

const Staff = () => {
    return (
        <div className='bg-[#EDEDED]'>
            <div className="container pt-[12px]">
                <h2 className="text-[30px] font-medium pb-[50px] text-center lg:text-left">
                    MEET&nbsp;&nbsp;OUR&nbsp;&nbsp;
                    <span style={{ color: '#98d6e9' }}>STAFF</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 pb-[45px] place-items-center">
                    {[
                        { img: Person1, role: 'Headmistress' },
                        { img: Person2, role: 'Headmaster' },
                        { img: Person3, role: 'Teacher' },
                        { img: Person4, role: 'Teacher' },
                    ].map((person, index) => (
                        <div key={index} className="w-[224px] flex flex-col items-center">
                            <img
                                src={person.img}
                                alt="person"
                                className={index === 0 ? '' : 'w-[120px] h-[120px] rounded-full'}
                            />
                            <h4 className="font-semibold text-[22px] mt-[10px] text-center">
                                Afuwape J. Abiodun
                            </h4>
                            <p className="text-center" style={{ color: color.Blue }}>{person.role}</p>
                            <div className="flex w-[120px] justify-between mt-[10px]">
                                <Facebook />
                                <WhatsApp />
                                <Instagram />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#f1f1f1] flex justify-center items-center h-20">
                    <div className="flex gap-4">
                        <span className="w-5 h-5 rounded-full border-2 border-[#7cc5d8]"></span>
                        <span className="w-5 h-5 rounded-full border-2 border-[#7cc5d8] flex items-center justify-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#7cc5d8]"></span>
                        </span>
                        <span className="w-5 h-5 rounded-full border-2 border-[#7cc5d8]"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staff


