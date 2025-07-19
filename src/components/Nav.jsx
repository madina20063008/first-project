
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { color } from './Color';

const Nav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About us' },
    { href: '/management', label: 'Management' },
    { href: '/news', label: 'News & Event' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact us' },
  ];

  useEffect(() => {
    const handleRouteChange = () => {
      setActivePath(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div className="container relative px-4 md:px-8 lg:px-0">
      <div className="flex justify-between items-center py-4">
        <a href="/" className="text-[24px] font-semibold">
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
                  color:
                    hoveredIndex === index || activePath === link.href
                      ? color.Blue
                      : 'inherit',
                  fontWeight: activePath === link.href ? '400' : 'normal',
                  transition: 'all 0.3s ease',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

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
                    color:
                      activePath === link.href ? color.Blue : 'inherit',
                    fontWeight: activePath === link.href ? '600' : 'normal',
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
