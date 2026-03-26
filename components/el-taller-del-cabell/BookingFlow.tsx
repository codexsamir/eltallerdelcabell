'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { useSalon } from '@/context/SalonContext';
import { RevealCard } from './RevealCard';
import { SectionHeading } from './SectionHeading';

const slots = ['09:30', '10:15', '11:00', '12:30', '15:30', '16:15', '17:00', '18:00'];
const staffList = ['Marta', 'Claudia', 'Laura'];

export function BookingFlow({ initialService }: { initialService?: string }) {
  const { selectedService, setSelectedService, addAppointment } = useSalon();

  const [step, setStep] = useState(1);
  const [date, setDate] = useState('2026-03-30');
  const [time, setTime] = useState(slots[2]);
  const [staff, setStaff] = useState(staffList[0]);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (initialService) setSelectedService(initialService);
  }, [initialService, setSelectedService]);

  const service = initialService || selectedService;

  function confirm() {
    addAppointment({ service, date, time, staff });
    setConfirmed(true);
    setStep(4);
  }

  return (
    <main className="min-h-screen bg-[#fafaf8] px-6 pb-24 pt-36 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <SectionHeading
          label="Booking"
          title="Calendar selection, time slots, staff choice, and confirmation"
          subtitle="Secure your appointment in a guided flow built for speed on mobile and desktop."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <RevealCard delay={0} className="premium-shadow rounded-3xl bg-[#f4efea] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#2E2E2E]/70">Step {step} of 4</p>
            <h2 className="mt-3 text-4xl">{service}</h2>

            {step === 1 ? (
              <div className="mt-6 space-y-4">
                <label className="block text-sm uppercase tracking-wide">Select Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  min="2026-03-26"
                  className="rounded-3xl border-0 bg-[#fafaf8] p-3"
                  aria-label="Select booking date"
                />
                <button
                  onClick={() => setStep(2)}
                  className="rounded-full bg-[#8C6A5D] px-6 py-3 text-sm uppercase tracking-wide text-[#fafaf8]"
                  aria-label="Continue to time slots"
                >
                  Continue
                </button>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="mt-6 space-y-4">
                <p className="text-sm uppercase tracking-wide">Choose Time Slot</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={`rounded-full px-3 py-2 text-sm ${
                        time === slot ? 'bg-[#8C6A5D] text-[#fafaf8]' : 'bg-[#fafaf8] text-[#2E2E2E]/80'
                      }`}
                      aria-label={`Select ${slot}`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(3)}
                  className="rounded-full bg-[#8C6A5D] px-6 py-3 text-sm uppercase tracking-wide text-[#fafaf8]"
                  aria-label="Continue to staff selection"
                >
                  Continue
                </button>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="mt-6 space-y-4">
                <p className="text-sm uppercase tracking-wide">Select Staff</p>
                <div className="grid gap-3">
                  {staffList.map((person) => (
                    <button
                      key={person}
                      onClick={() => setStaff(person)}
                      className={`rounded-3xl p-4 text-left ${
                        staff === person ? 'bg-[#8C6A5D] text-[#fafaf8]' : 'bg-[#fafaf8] text-[#2E2E2E]/80'
                      }`}
                      aria-label={`Select ${person}`}
                    >
                      {person}
                    </button>
                  ))}
                </div>
                <button
                  onClick={confirm}
                  className="rounded-full bg-[#2E2E2E] px-6 py-3 text-sm uppercase tracking-wide text-[#fafaf8]"
                  aria-label="Confirm booking"
                >
                  Confirm Booking
                </button>
              </div>
            ) : null}

            {step === 4 && confirmed ? (
              <div className="mt-6 rounded-3xl bg-[#fafaf8] p-6">
                <div className="inline-flex items-center gap-2 text-[#8C6A5D]">
                  <CheckCircle2 size={18} />
                  <span className="text-sm uppercase tracking-wide">Confirmed</span>
                </div>
                <p className="mt-3 text-[#2E2E2E]/80">
                  Your appointment is booked for {date} at {time} with {staff}.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-block text-sm uppercase tracking-wide text-[#8C6A5D]"
                  aria-label="Back to homepage"
                >
                  Back to homepage
                </Link>
              </div>
            ) : null}
          </RevealCard>

          <RevealCard delay={80} className="premium-shadow h-fit rounded-3xl bg-[#f4efea] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#2E2E2E]/70">Summary</p>
            <div className="mt-4 space-y-2 text-sm text-[#2E2E2E]/80">
              <p>Service: {service}</p>
              <p>Date: {date}</p>
              <p>Time: {time}</p>
              <p>Stylist: {staff}</p>
            </div>
            <Link
              href="/services"
              className="mt-6 inline-block rounded-full bg-[#8C6A5D] px-5 py-3 text-xs uppercase tracking-wide text-[#fafaf8]"
              aria-label="Back to services"
            >
              Change Service
            </Link>
          </RevealCard>
        </div>
      </div>
    </main>
  );
}
