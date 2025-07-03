'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems } from '../../data/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const normalizedPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

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
          >
            <strong>Michael Cronin</strong>
            <span className={`absolute bottom-0 left-4 right-0 h-1 bg-blue-400 transform transition-transform duration-300 ${normalizedPathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          {/* Navigation Links - pushed all the way right */}
          <div className="flex items-center overflow-x-auto whitespace-nowrap max-w-full">
            {navigationItems.map((item, index) => {
              // Normalize paths by removing trailing slashes for comparison
              const normalizedPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
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
        </div>
      </div>
    </nav>
  );
} 