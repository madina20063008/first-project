
import React from 'react';
import PageHeader from '../components/PageHeader';
import BG from '../assets/images/bg.png';
import { BirdBlue, Facebook, Instagram, WhatsApp } from '../assets/icons/icons';
import Man from '../assets/images/man.jpg';
import Person1 from '../assets/images/person1.png';
import Person3 from '../assets/images/person4.jpg';
import Person4 from '../assets/images/person3.jpg';
import { color } from '../components/Color';

const staffList = [
    { img: Person3, name: 'Afuwape J. Abiodun', role: 'Headmistress' },
    { img: Person1, name: 'Afuwape J. Abiodun', role: 'Headmaster' },
    { img: Person4, name: 'Afuwape J. Abiodun', role: 'Headmistress' },
];

const staffListFive = [
    { img: Person1, name: 'Afuwape J. Abiodun', role: 'Teacher' },
    { img: Person3, name: 'Afuwape J. Abiodun', role: 'Teacher' },
    { img: Person4, name: 'Afuwape J. Abiodun', role: 'Teacher' },
    { img: Person1, name: 'Afuwape J. Abiodun', role: 'Teacher' },
    { img: Person3, name: 'Afuwape J. Abiodun', role: 'Teacher' },
    { img: Person1, name: 'Afuwape J. Abiodun', role: 'Teacher' },
    { img: Person4, name: 'Afuwape J. Abiodun', role: 'Teacher' },
];

const staffListFour = [
    { img: Person4, name: 'Afuwape J. Abiodun', role: 'Security' },
    { img: Person1, name: 'Afuwape J. Abiodun', role: 'Gardener' },
    { img: Person3, name: 'Afuwape J. Abiodun', role: 'Headmistress' },
    { img: Person4, name: 'Afuwape J. Abiodun', role: 'Driver' },
];

const Card = ({ img, name, role }) => (
    <div className="w-[224px] flex flex-col items-center">
        <img
            src={img}
            alt={name}
            className="w-[120px] h-[120px] rounded-full object-cover"
        />
        <h4 className="font-semibold text-[22px] mt-[10px] text-center">{name}</h4>
        <p className="text-center" style={{ color: color.Blue }}>
            {role}
        </p>
        <div className="flex w-[120px] justify-between mt-[10px]">
            <Facebook />
            <WhatsApp />
            <Instagram />
        </div>
    </div>
);

const Management = () => {
    return (
        <div>
            <PageHeader title="Management" current="Management" bg={BG} />
            <div className="container px-4 sm:px-6 lg:px-0">

                <div className="flex flex-col-reverse lg:flex-row lg:justify-between mb-[50px] gap-8 lg:gap-0 items-center lg:items-start text-center lg:text-left">
                    <div>
                        <div className="who-we-are flex items-center lg:justify-start justify-center gap-4 text-[#80C4D3] font-medium text-[18px] uppercase">
                            <span>•</span>
                            <span>the Founder</span>
                            <span>•</span>
                        </div>
                        <p className="font-medium size-[20px] w-[165px] mt-[10px] mx-auto lg:mx-0">
                            MR. LOREM IPSUM
                        </p>
                        <p className="mt-[30px] max-w-[501px] text-[20px] mx-auto lg:mx-0">
                            Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod
                            temp incit ut labore dolore magna aliqua. computer science students Ut
                            enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod temp incididunt ut labore dol magna
                            aliqua. olabisi oanbanjo unuversity Ut enim ad minim Lorem ipsum
                            eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam Lorem ipsum dolor sit amet.
                        </p>
                        <div className="mt-[30px] flex gap-[25px] justify-center lg:justify-start">
                            <Facebook />
                            <WhatsApp />
                            <Instagram />
                            <BirdBlue />
                        </div>
                    </div>
                    <img
                        src={Man}
                        alt="Founder"
                        className="w-[501px] h-[470px] mx-auto lg:mx-0"
                    />
                </div>
            </div>


            <div className="bg-[#F2F2F2]">
                <div className="container">
                    <div>
                        <div className="who-we-are flex items-center justify-center lg:justify-start gap-4 text-[#80C4D3] font-medium text-[18px] uppercase py-[50px]">
                            <span>•</span>
                            <span>Meet our management</span>
                            <span>•</span>
                        </div>
                        <div className="pb-10">
                            <div className="container pt-[12px]">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 place-items-center">
                                    {staffList.map((person, idx) => (
                                        <Card key={idx} {...person} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="who-we-are flex items-center justify-center lg:justify-start gap-4 text-[#80C4D3] font-medium text-[18px] uppercase py-[50px]">
                            <span>•</span>
                            <span>Our advisory board</span>
                            <span>•</span>
                        </div>
                       
                        <div className="pb-10">
                            <div className="container pt-[12px]">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-10 place-items-center">
                                    {staffListFive.map((person, idx) => (
                                        <Card key={idx} {...person} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="who-we-are flex items-center justify-center lg:justify-start gap-4 text-[#80C4D3] font-medium text-[18px] uppercase py-[50px]">
                            <span>•</span>
                            <span>Meet our NON-Staff</span>
                            <span>•</span>
                        </div>
                        <div className="pb-10">
                            <div className="container pt-[12px]">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 place-items-center">
                                    {staffListFour.map((person, idx) => (
                                        <Card key={idx} {...person} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Management;
