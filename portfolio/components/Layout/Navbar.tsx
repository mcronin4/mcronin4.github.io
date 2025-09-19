'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigationItems } from '../../data/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const normalizedPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#010812' }}>
      <div className="px-4">
        <div className="h-16 flex items-center justify-between w-full">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="font-bold hover:text-blue-400 transition-all duration-300 relative group"
            style={{ 
              color: '#F7F7F7', 
              textDecoration: 'none',
              fontSize: '20px',
              paddingLeft: '16px'
            }}
            onClick={closeMobileMenu}
          >
            <strong>Michael Cronin</strong>
            <span className={`absolute bottom-0 left-4 right-0 h-1 bg-blue-400 transform transition-transform duration-300 ${normalizedPathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          {/* Desktop Navigation Links - hidden on mobile */}
          <div className="hidden md:flex items-center overflow-x-auto whitespace-nowrap max-w-full">
            {navigationItems.map((item, index) => {
              const isActive = normalizedPathname === item.href;
              const isLast = index === navigationItems.length - 1;

              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:text-blue-400 transition-all duration-300 relative group"
                    style={{ 
                      color: '#F7F7F7', 
                      textDecoration: 'none',
                      fontSize: '20px',
                      padding: isLast ? '14px 16px 14px 16px' : '14px 16px'
                    }}
                  >
                    <strong>{item.name}</strong>
                    <span className="absolute bottom-1 left-4 right-4 h-1 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-bold transition-all duration-300 hover:text-blue-400 relative group"
                  style={{ 
                    color: isActive ? '#3b82f6' : '#F7F7F7', 
                    textDecoration: 'none',
                    fontSize: '20px',
                    padding: isLast ? '14px 16px 14px 16px' : '14px 16px'
                  }}
                >
                  <strong>{item.name}</strong>
                  <span className={`absolute bottom-1 left-4 right-4 h-1 bg-blue-400 transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Button - visible on mobile only */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 mr-4"
            aria-label="Toggle mobile menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: '#010812' }}
        >
          <div className="py-4 space-y-2 border-t border-slate-700">
            {navigationItems.map((item) => {
              const isActive = normalizedPathname === item.href;

              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-lg font-bold hover:text-blue-400 hover:bg-slate-800/50 transition-all duration-300"
                    style={{ color: '#F7F7F7' }}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-bold hover:text-blue-400 hover:bg-slate-800/50 transition-all duration-300"
                  style={{ color: isActive ? '#3b82f6' : '#F7F7F7' }}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
} 