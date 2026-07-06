import { GalleryItem, Video } from '../types';

// Products for the gallery - easily replaceable with real company data
export const galleryProducts: GalleryItem[] = [
  {
    id: 'product-1',
    title: 'Export Freight Forwarding',
    category: 'export',
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete export freight forwarding services with customs documentation, cargo consolidation, and multi-modal transport options.',
  },
  {
    id: 'product-2',
    title: 'Ocean Export Services',
    category: 'export',
    image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cost-effective sea freight solutions for bulk exports with container loading and port-to-port delivery.',
  },
  {
    id: 'product-3',
    title: 'Air Cargo Export',
    category: 'export',
    image: 'https://images.pexels.com/photos/62623/airplane-departure-airport-sky-62623.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Fast air cargo services for time-sensitive exports with premium handling and global reach.',
  },
  {
    id: 'product-4',
    title: 'Import Clearance Services',
    category: 'import',
    image: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive import customs clearance with regulatory compliance and duty optimization.',
  },
  {
    id: 'product-5',
    title: 'Import Warehousing',
    category: 'import',
    image: 'https://images.pexels.com/photos/4393637/pexels-photo-4393637.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Secure bonded warehousing for imported goods with inventory management and distribution services.',
  },
  {
    id: 'product-6',
    title: 'Cold Chain Logistics',
    category: 'import',
    image: 'https://images.pexels.com/photos/4397895/pexels-photo-4397895.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Temperature-controlled logistics for perishable goods, pharmaceuticals, and food products.',
  },
];

// Videos for the gallery - easily replaceable with real company data
export const galleryVideos: Video[] = [
  {
    id: 'video-1',
    title: 'Company Profile',
    description: 'Learn about our mission, values, and commitment to excellence in logistics.',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '3:45',
  },
  {
    id: 'video-2',
    title: 'Warehouse Tour',
    description: 'Take a virtual tour of our state-of-the-art warehouse facilities.',
    thumbnail: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '5:20',
  },
  {
    id: 'video-3',
    title: 'Fleet Operations',
    description: 'See our diverse fleet of delivery vehicles in action across Indonesia.',
    thumbnail: 'https://images.pexels.com/photos/2199691/pexels-photo-2199691.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '4:15',
  },
];
