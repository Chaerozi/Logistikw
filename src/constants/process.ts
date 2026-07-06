import { ProcessStep } from '../types';

export const shipmentProcess: ProcessStep[] = [
  {
    id: 'pickup',
    step: 1,
    title: 'Pickup Request',
    description: 'Schedule a pickup and we will come to you.',
    icon: 'Package',
  },
  {
    id: 'warehouse',
    step: 2,
    title: 'Warehouse',
    description: 'Items sorted and stored at our facilities.',
    icon: 'Warehouse',
  },
  {
    id: 'transportation',
    step: 3,
    title: 'Transportation',
    description: 'Fast transit via road, sea, or air.',
    icon: 'Truck',
  },
  {
    id: 'distribution',
    step: 4,
    title: 'Distribution Center',
    description: 'Processing at destination hub.',
    icon: 'Building2',
  },
  {
    id: 'delivered',
    step: 5,
    title: 'Delivered',
    description: 'Package delivered to your doorstep.',
    icon: 'CheckCircle',
  },
];
