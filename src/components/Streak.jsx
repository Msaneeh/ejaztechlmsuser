import { Flame } from "lucide-react";

const Streak = () => {
  const totalStreak = 12;
  const days = [
    { label: "M", active: true },
    { label: "T", active: true },
    { label: "W", active: true },
    { label: "T", active: true },
    { label: "F", active: true },
    { label: "S", active: false },
    { label: "S", active: true },
  ];

  return (
    <div className="glass-panel relative flex h-full flex-col overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10 mb-4 flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/15">
            <Flame className="h-4 w-4 text-green-500" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-tight text-primary-text">
              {totalStreak} day streak
            </span>
            <span className="text-[11px] font-normal tracking-wide text-muted-text">
              Keep it going!
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 items-center">
        <div className="flex w-full items-center justify-between gap-1.5">
          {days.map((day, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                  day.active
                    ? "border-green-500/40 bg-green-500/15 text-green-500"
                    : "border-border-brand bg-surface2 text-muted-text"
                }`}
              >
                {day.active ? (
                  <Flame className="h-4 w-4" />
                ) : (
                  <span className="text-muted-text">•</span>
                )}
              </div>
              <span className="text-[10px] font-medium tracking-wide text-muted-text">
                {day.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Streak;