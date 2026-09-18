import { Button } from "@/components/ui/button";
import { ChevronRight, Trophy } from "lucide-react";
import { Link } from "react-router-dom";


const LeaderBordList = () => {

  const leaderboard = [
    { rank: 1, name: "Aisha Bello", xp: 2450, isUser: false },
    { rank: 2, name: "Sani", xp: 2180, isUser: true },
    { rank: 3, name: "Chinedu O.", xp: 1950, isUser: false },
    { rank: 4, name: "Fatima Y.", xp: 1720, isUser: false },
    { rank: 5, name: "Tunde A.", xp: 1540, isUser: false },
    { rank: 6, name: "Ngozi K.", xp: 1420, isUser: false },
    { rank: 7, name: "Ibrahim M.", xp: 1300, isUser: false },
  ];

  return (
    <div className="glass-panel relative flex h-full flex-col overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10 mb-3 flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-4 w-4 text-muted-strong" />
          <h3 className="text-base font-semibold tracking-tight text-primary-text">
            Leaderboard
          </h3>
        </div>
        <Button
          className="btn-glass rounded-full px-3 py-1.5 text-xs font-medium"
        >
          <Link to="/leaderbord" className="flex items-center gap-1">
          View All
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
        </Button>
      </div>

      <div className="relative z-10 -mr-2 min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-2">
        {leaderboard.map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center justify-between rounded-xl px-3 py-2 transition-colors ${
              entry.isUser
                ? "bg-surface2 border border-border-brand"
                : "hover:bg-surface2/60"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${
                  entry.rank === 1
                    ? "bg-gold text-white"
                    : entry.rank === 2
                    ? "bg-primary-text text-bg"
                    : entry.rank === 3
                    ? "bg-muted-strong text-bg"
                    : "bg-surface2 text-muted-text"
                }`}
              >
                {entry.rank}
              </span>
              <span className="text-sm font-medium text-primary-text">
                {entry.name}
                {entry.isUser && (
                  <span className="ml-2 text-[10px] font-normal text-muted-text">
                    (you)
                  </span>
                )}
              </span>
            </div>
            <span className="text-xs font-semibold text-muted-strong">
              {entry.xp.toLocaleString()} XP
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBordList;