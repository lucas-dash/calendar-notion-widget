'use client';

import {
  addDays,
  addWeeks,
  format,
  isSameMonth,
  isToday,
  startOfWeek,
} from 'date-fns';
import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WeekCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });

  const goToPreviousWeek = () => setCurrentDate(addWeeks(currentDate, -1));
  const goToNextWeek = () => setCurrentDate(addWeeks(currentDate, 1));
  const goToCurrentWeek = () => setCurrentDate(new Date());

  const days = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfCurrentWeek, i)
  );

  return (
    <section className="border border-border py-3 px-4 rounded-3xl">
      <div className="flex w-full justify-between items-center pb-3">
        <h3 className="font-semibold pl-2">
          {format(currentDate, 'LLLL yyyy')}
        </h3>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={goToPreviousWeek}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToCurrentWeek}
            className="h-8 w-8"
          >
            <Calendar className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNextWeek}
            className="h-8 w-8 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {days.map((day) => (
          <div
            key={day.toString()}
            className={`p-2 text-center rounded-full ${
              isSameMonth(day, currentDate) ? '' : 'text-primary'
            } ${isToday(day) ? ' bg-primary font-semibold' : ''}`}
          >
            <div
              className={
                isToday(day) ? 'text-secondary font-semibold' : 'font-semibold'
              }
            >
              {format(day, 'EEEEEE')}
            </div>
            <div className={isToday(day) ? 'bg-secondary rounded-full' : ''}>
              {format(day, 'd')}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
