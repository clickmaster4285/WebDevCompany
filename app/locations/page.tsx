// app/location/page.tsx

import { Metadata } from 'next';
import LocationsContent from './LocationsContent';

export const metadata: Metadata = {
  title: 'Web Development Company Locations | Serving Top US Metros',
  description: 'Find a web development company near you. We serve Austin, Boston, Chicago, Dallas, Denver, Los Angeles, Miami, New York, Phoenix, Seattle, and more.'
};

export default function LocationsPage() {
  return <LocationsContent />;
}