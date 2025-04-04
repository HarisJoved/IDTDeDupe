'use client';
import { useState, useEffect } from 'react';
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Check if link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? 'py-2 bg-[#1e2e3e] shadow-md' : 'py-4 bg-[#2C3E50]'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo with Link - Updated to use the new image */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <div className="relative h-12 w-44 md:h-14 md:w-52 lg:h-16 lg:w-60">
            <Image
              src="/images/dedupeLightMode.PNG" 
              alt="IDT Data Governor Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {[
            { href: '/solution', label: 'Solutions' },
            { href: '/scenarios', label: 'Case Studies' },
            { href: '/about', label: 'About Us' },
            { href: '/contact', label: 'Contact' },
            { href: '/faqs', label: 'FAQs' }
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`px-3 py-2 text-sm lg:text-base rounded-md transition-colors ${
                isActive(link.href) 
                  ? 'bg-emerald-600 text-white font-medium' 
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none transition-colors hover:bg-white/10 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation (Toggle visibility based on state) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#1e2e3e] py-3 px-4 shadow-lg animate-slideDown border-t border-white/10">
          {[
            { href: '/solution', label: 'Solutions' },
            { href: '/scenarios', label: 'Case Studies' },
            { href: '/about', label: 'About Us' },
            { href: '/contact', label: 'Contact' },
            { href: '/faqs', label: 'FAQs' }
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`block py-3 px-4 rounded-md transition-colors ${
                isActive(link.href) 
                  ? 'bg-emerald-600 text-white font-medium mb-1' 
                  : 'text-white/90 hover:bg-white/10 hover:text-white mb-1'
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
} 