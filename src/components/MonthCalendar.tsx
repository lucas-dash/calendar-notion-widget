'use client';

import { Calendar } from './ui/calendar';

export default function MonthCalendar() {
  const date = new Date();

  return (
    <Calendar
      mode="single"
      selected={date}
      weekStartsOn={1}
      className="rounded-md border"
    />
  );
}
