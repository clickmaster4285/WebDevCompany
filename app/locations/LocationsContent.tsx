// app/location/LocationsContent.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllLocationPages, LocationPageData } from '@/data/locationdata';

export default function LocationsContent() {
  const [locations, setLocations] = useState<LocationPageData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState<string>('all');

  useEffect(() => {
    const allLocations = getAllLocationPages();
    setLocations(allLocations);
  }, []);

  const states = ['all', ...new Set(locations.map(loc => loc.state))];

  const filteredLocations = locations.filter(loc => {
    const matchesSearch = loc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          loc.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          loc.primarySectors.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesState = selectedState === 'all' || loc.state === selectedState;
    return matchesSearch && matchesState;
  });

  const groupedLocations = filteredLocations.reduce((acc, loc) => {
    if (!acc[loc.state]) {
      acc[loc.state] = [];
    }
    acc[loc.state].push(loc);
    return acc;
  }, {} as Record<string, LocationPageData[]>);

  const sortedStates = Object.keys(groupedLocations).sort();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-transparent to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass border border-white/10">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-ink-mute uppercase tracking-wider">
                {locations.length} {locations.length === 1 ? 'Location' : 'Locations'} Across the US
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink">
              Find Your <span className="text-violet">Local</span> Web Development Partner
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-soft">
              Senior-led web development serving top US metros with genuine local market 
              understanding and conversion-focused expertise.
            </p>

            {/* Search and Filter */}
            <div className="mt-8 max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by city, region, or industry..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-3 pl-12 bg-surface-1/50 glass rounded-xl border border-white/10 text-ink placeholder:text-ink-mute focus:outline-none focus:border-violet/50 transition-all"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-mute"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-mute hover:text-ink transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>

              
            </div>

            
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {filteredLocations.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-ink">No locations found</h3>
                <p className="text-ink-mute mt-2">Try adjusting your search or filter</p>
              </motion.div>
            ) : (
              <div className="space-y-12">
                {sortedStates.map((state, stateIndex) => (
                  <motion.div
                    key={state}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: stateIndex * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold text-ink">
                        {state}
                      </h2>
                      <span className="text-sm text-ink-mute">
                        ({groupedLocations[state].length})
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {groupedLocations[state].map((location, index) => (
                        <motion.div
                          key={location.slug}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ y: -4 }}
                        >
                          <Link
                            href={`/locations/${location.slug}`}
                            className="block h-full glass rounded-xl border border-white/5 p-5 hover:border-violet/30 transition-all hover:shadow-violet/10 hover:shadow-xl group"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-lg font-semibold text-ink group-hover:text-violet transition-colors">
                                  {location.city}
                                </h3>
                                <p className="text-sm text-ink-mute">
                                  {location.region}
                                </p>
                              </div>
                              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet/10 flex items-center justify-center group-hover:bg-violet/20 transition-colors">
                                <svg className="w-4 h-4 text-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            </div>

                            <div className="flex flex-wrap gap-1.5 mt-3">
                              {location.primarySectors.slice(0, 2).map((sector, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-ink-soft border border-white/5"
                                >
                                  {sector}
                                </span>
                              ))}
                              {location.primarySectors.length > 2 && (
                                <span className="text-xs px-2 py-0.5 rounded-full text-ink-mute">
                                  +{location.primarySectors.length - 2}
                                </span>
                              )}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-2xl border border-white/10 p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-ink">
              Don't See Your City?
            </h2>
            <p className="mt-3 text-ink-soft max-w-2xl mx-auto">
              We serve businesses across the US with remote-first delivery. 
              Get in touch and let's discuss your project.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 bg-violet hover:bg-violet/90 text-white font-semibold rounded-xl transition-all shadow-violet hover:shadow-xl"
              >
                Start a Project
              </Link>
              <Link
                href="/web-development-services"
                className="px-6 py-3 glass text-ink-soft font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 