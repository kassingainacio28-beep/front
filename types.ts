import { LucideIcon } from 'lucide-react';

export interface CarCategory {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapsLink: string;
  hours: string;
}