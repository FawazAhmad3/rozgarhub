import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import serviceDetails from '../data/service-details.json';

interface ServiceItem {
  id: string;
  name: string;
}

interface FullServiceItem {
  id: string;
  name: string;
  description: string;
  images: string[];
  videos?: string[];
}

interface ServiceContextType {
  openService: (service: ServiceItem) => void;
  closeService: () => void;
  selectedService: FullServiceItem | null;
  isModalOpen: boolean;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const ServiceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedService, setSelectedService] = useState<FullServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openService = (service: ServiceItem) => {
    const details = (serviceDetails as any)[service.id];
    if (details) {
      setSelectedService({
        id: service.id,
        ...details
      });
      setIsModalOpen(true);
    }
  };

  const closeService = () => {
    setIsModalOpen(false);
  };

  return (
    <ServiceContext.Provider value={{ openService, closeService, selectedService, isModalOpen }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useService must be used within a ServiceProvider');
  }
  return context;
};
