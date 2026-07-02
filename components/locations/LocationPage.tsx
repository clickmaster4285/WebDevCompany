// components/location/LocationPage.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LocationPageData } from '@/data/locationdata';
import { AboveTheFold } from './AboveTheFold';
import { FeaturedAnswerBlock } from './FeaturedAnswerBlock';
import { WhatBusinessesNeed } from './WhatBusinessesNeed';
import { HowWeServe } from './HowWeServe';
import { ServicesTable, getDefaultServices } from './ServicesTable';
import { ComparisonTable, getDefaultComparisonOptions } from './ComparisonTable';
import { ProcessSteps, getDefaultProcessSteps } from './ProcessSteps';
import { CaseStudy } from './CaseStudy';
import { BusinessCase } from './BusinessCase';
import { FAQ, getDefaultFAQs } from './FAQ';
import { CTASection } from './CTASection';

interface LocationPageProps {
  data: LocationPageData;
}

export const LocationPage: React.FC<LocationPageProps> = ({ data }) => {
  const {
    city,
    state,
    region,
    primarySectors,
    pricingRange,
    credibilityBar,
    primaryCTA,
    secondaryCTA,
    buyerPersona,
    pageNumber
  } = data;

  const services = getDefaultServices(city, region);
  const comparisonOptions = getDefaultComparisonOptions(city, region, primarySectors[0]);
  const processSteps = getDefaultProcessSteps(city);
  const faqs = getDefaultFAQs(city, region, primarySectors, pricingRange);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Number Indicator */}
        {/* <div className="flex items-center justify-end gap-2 py-4 text-xs text-ink-mute">
          <span className="inline-block w-1 h-1 rounded-full bg-violet"></span>
          Page {pageNumber}
        </div> */}

        {/* Above the Fold - Ensure it doesn't overlap */}
        <div className="relative">
          <AboveTheFold
            city={city}
            state={state}
            region={region}
            primarySectors={primarySectors}
            credibilityBar={credibilityBar}
            primaryCTA={primaryCTA}
            secondaryCTA={secondaryCTA}
          />
        </div>

        {/* Content Sections */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          <FeaturedAnswerBlock
            city={city}
            primarySectors={primarySectors}
            pricingRange={pricingRange}
            region={region}
          />

          <WhatBusinessesNeed
            city={city}
            region={region}
            primarySectors={primarySectors}
            buyerPersona={buyerPersona}
          />

          <HowWeServe
            city={city}
            region={region}
            primarySectors={primarySectors}
            pricingRange={pricingRange}
          />

          <ServicesTable services={services} city={city} region={region} />

          <ComparisonTable options={comparisonOptions} city={city} region={region} />

          <ProcessSteps steps={processSteps} city={city} />

          <CaseStudy region={region} primarySectors={primarySectors} />

          <BusinessCase city={city} region={region} primarySector={primarySectors[0]} />

          <FAQ items={faqs} city={city} />

          <CTASection city={city} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
        </div>
      </div>
    </div>
  );
};