import { BookCheck, File, Flame, GraduationCap, Trophy, Zap } from "lucide-react";

const LearningStats = ({ stats }) => {
  const statCards = [
    { label: "Total XP", value: stats.totalXp.toLocaleString(), emoji: <Zap /> },
    { label: "Rank", value: `#${stats.rank}`, emoji: <Trophy /> },
    { label: "Streak", value: `${stats.streak} days`, emoji: <Flame /> },
    { label: "Phases Done", value: stats.phasesCompleted, emoji: <BookCheck /> },
    { label: "Tasks", value: stats.tasksSubmitted, emoji: <File /> },
    { label: "Certificates", value: stats.certificatesEarned, emoji: <GraduationCap /> },
  ];

  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-xs sm:p-6">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10">
        <h3 className="text-sm font-semibold tracking-tight text-primary-text">
          Learning Stats
        </h3>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {statCards.map((sta) => (
            <div
              key={sta.label}
              className="flex flex-col items-start gap-1 rounded-2xl border border-border-brand bg-surface2/60 p-3"
            >
              <span className="text-lg">{sta.emoji}</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                {sta.label}
              </span>
              <span className="text-base font-semibold text-primary-text">
                {sta.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningStats;