

import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import Newsletter from '../modules/Newsletter/Newsletter';
import BG from '../assets/images/bg.png';
import { Facebook, Instagram, WhatsApp, BirdBlue, TelegramWhite } from '../assets/icons/icons';
import Man from '../assets/images/man.jpg';
import { color } from '../components/Color';

const Card = ({ img, name, role, social }) => (
  <div className="w-[224px] flex flex-col items-center">
    <img
      src={img}
      alt={name}
      className="rounded-full w-[120px] h-[120px] object-cover"
    />
    <h4 className="font-semibold text-[22px] mt-[10px] text-center">{name}</h4>
    <p className="text-center" style={{ color: color.Blue }}>
      {role}
    </p>
    <div className="flex w-[120px] justify-between mt-[10px]">
      {social?.map((s) => {
        const title = s.title.toLowerCase();
        const url = s.url;
        if (title === 'facebook') return <a key={s.id} href={url} target="_blank" rel="noreferrer"><Facebook /></a>;
        if (title === 'instagram') return <a key={s.id} href={url} target="_blank" rel="noreferrer"><Instagram /></a>;
        if (title === 'whatsapp') return <a key={s.id} href={url} target="_blank" rel="noreferrer"><WhatsApp /></a>;
        if (title === 'twitter') return <a key={s.id} href={url} target="_blank" rel="noreferrer"><BirdBlue /></a>;
        if (title === 'telegram') return <a key={s.id} href={url} target="_blank" rel="noreferrer"><TelegramWhite /></a>;
        return null;
      })}
    </div>
  </div>
);

const Section = ({ title, people }) => (
  <div>
    <div className="who-we-are flex items-center justify-center lg:justify-start gap-4 text-[#80C4D3] font-medium text-[24px] uppercase py-[50px]">
      <span>•</span>
      <span>{title}</span>
      <span>•</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 place-items-center pb-[50px]">
      {people.map((person, idx) => (
        <Card key={idx} {...person} />
      ))}
    </div>
  </div>
);

const Management = () => {
  const [management, setManagement] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [nonStaff, setNonStaff] = useState([]);

  useEffect(() => {
    fetch('https://educationalwebsite.pythonanywhere.com/education/staff/')
      .then((res) => res.json())
      .then((data) => {
        const mgmt = [];
        const staff = [];
        const non = [];

        data.forEach((person) => {
          const imageUrl = person.avatar?.startsWith('/')
            ? `https://educationalwebsite.pythonanywhere.com${person.avatar}`
            : person.avatar;

          const personData = {
            img: imageUrl,
            name: person.full_name,
            role: person.position,
            social: person.staff_social_media || [],
          };

          const pos = person.position?.toLowerCase();
          if (pos === 'headmaster' || pos === 'headmistress') {
            mgmt.push(personData);
          } else if (pos === 'teacher') {
            staff.push(personData);
          } else {
            non.push(personData);
          }
        });

        setManagement(mgmt);
        setTeachers(staff);
        setNonStaff(non);
      })
      .catch((error) => console.error('Error fetching staff:', error));
  }, []);

  return (
    <div>
      <PageHeader title="Management" current="Management" bg={BG} />
      <div className="container px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between mb-[50px] gap-8 lg:gap-0 items-center lg:items-start text-center lg:text-left">
          <div>
            <div className="who-we-are flex items-center lg:justify-start justify-center gap-4 text-[#80C4D3] font-medium text-[24px] uppercase">
              <span>•</span>
              <span>the Founder</span>
              <span>•</span>
            </div>
            <p className="font-medium text-[20px] w-[180px] mt-[10px] mx-auto lg:mx-0">
              MR. LOREM IPSUM
            </p>
            <p className="mt-[30px] max-w-[501px] text-[20px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod temp incit ut labore dolore magna aliqua. computer science students Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore dol magna aliqua. olabisi oanbanjo unuversity Ut enim ad minim Lorem ipsum eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet.
            </p>
            <div className="mt-[30px] flex gap-[25px] justify-center lg:justify-start">
              <Facebook />
              <WhatsApp />
              <Instagram />
              <BirdBlue />
            </div>
          </div>
          <img src={Man} alt="Founder" className="w-[501px] h-[470px] mx-auto lg:mx-0" />
        </div>
      </div>

      <div className="bg-[#F2F2F2]">
        <div className="container">
          <Section title="Meet our Management" people={management} />
          <Section title="Meet our Staff" people={teachers} />
          <Section title="Meet our NON-Staff" people={nonStaff} />
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Management;
