
import React, { useState } from 'react';
import { Dark } from '../../assets/icons/icons';
import { color } from '../../components/Color';
import { Menu, X } from 'lucide-react'; 

const Nav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About us' },
    { href: '#management', label: 'Management' },
    { href: '#news', label: 'News & Event' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact us' },
  ];

  return (
    <div className="container relative">
      <div className="flex justify-between items-center py-4">
        <a href="/home" className="text-[24px] font-semibold">
          Rapkhen
        </a>

        <ul className="hidden lg:flex gap-6 text-[18px] font-normal">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="transition-all duration-300"
            >
              <a
                href={link.href}
                style={{
                  color: hoveredIndex === index ? color.Blue : 'inherit',
                  fontWeight: hoveredIndex === index ? 600 : 400,
                  transition: 'all 0.3s ease',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="ml-4">
          <Dark />
        </button>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 w-[75%] h-full bg-white shadow-lg z-50 px-6 py-10 transition-transform duration-300">
          <button
            className="absolute top-5 right-5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>

          <ul className="flex flex-col gap-6 text-[18px] font-normal mt-12">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: hoveredIndex === index ? color.Blue : 'inherit',
                    fontWeight: hoveredIndex === index ? 600 : 400,
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
