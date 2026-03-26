'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type Appointment = {
  service: string;
  date: string;
  time: string;
  staff: string;
};

type SalonContextValue = {
  selectedService: string;
  setSelectedService: (service: string) => void;
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
};

const SalonContext = createContext<SalonContextValue | null>(null);

export function SalonProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState('Women\'s Haircut');
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const value = useMemo(
    () => ({
      selectedService,
      setSelectedService,
      appointments,
      addAppointment: (appointment: Appointment) =>
        setAppointments((prev) => [...prev, appointment])
    }),
    [appointments, selectedService]
  );

  return <SalonContext.Provider value={value}>{children}</SalonContext.Provider>;
}

export function useSalon() {
  const context = useContext(SalonContext);
  if (!context) {
    throw new Error('useSalon must be used within a SalonProvider');
  }
  return context;
}
