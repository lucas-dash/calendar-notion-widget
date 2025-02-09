import MonthCalendar from '@/components/MonthCalendar';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function Home() {
  return (
    <div className="bg-background">
      <div className="hidden">
        <ModeToggle />
      </div>
      <main className="min-h-screen flex items-center justify-center">
        <section className="w-max">
          <MonthCalendar />
        </section>
      </main>
    </div>
  );
}
