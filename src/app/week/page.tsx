import WeekCalendar from '@/components/WeekCalendar';

export default function WeekPage() {
  return (
    <div className="bg-background">
      <main className="min-h-screen flex items-center justify-center">
        <section className="w-max">
          <WeekCalendar />
        </section>
      </main>
    </div>
  );
}
