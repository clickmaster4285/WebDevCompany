// components/ui/ServicesDropdown.tsx

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { serviceData } from '@/data/services';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicesDropdownProps {
  className?: string;
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function ServicesDropdown({ 
  className = '', 
  isMobile = false,
  onItemClick 
}: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const services = Object.values(serviceData);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => {
    setIsOpen(false);
    if (onItemClick) onItemClick();
  };

  // Mobile version - accordion style
  if (isMobile) {
    return (
      <div className={className}>
        <button
          onClick={handleToggle}
          className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600"
        >
          <span className="font-medium">Services</span>
          <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pl-4 pt-2 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      pathname === `/services/${service.slug}`
                        ? 'text-blue-600 font-medium bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={handleClose}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Desktop version - dropdown
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={handleToggle}
        onMouseEnter={() => setIsOpen(true)}
        className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
          pathname?.startsWith('/services') 
            ? 'text-blue-600 font-semibold' 
            : 'text-gray-700 hover:text-blue-600'
        }`}
        aria-expanded={isOpen}
      >
        <span>Services</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 max-h-[80vh] overflow-y-auto"
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
              Our Services
            </div>
            
            {services.map((service) => {
              const isActive = pathname === `/services/${service.slug}`;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 text-sm transition-colors ${
                    isActive
                      ? 'text-blue-600 font-medium bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={handleClose}
                >
                  <span>{service.title}</span>
                  {isActive && (
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}