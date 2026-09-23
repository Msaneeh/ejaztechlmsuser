import { CheckCircle2, PlayCircle, Lock, Clock, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const weekStatusConfig = {
  completed: { icon: CheckCircle2, color: "text-green-500" },
  "in-progress": { icon: PlayCircle, color: "text-primary-text" },
  locked: { icon: Lock, color: "text-muted-text" },
};

const PhaseWeekRow = ({ week, onClick }) => {
  const config = weekStatusConfig[week.status] || weekStatusConfig.locked;
  const WeekIcon = config.icon;
  const isLocked = week.status === "locked";

  return (
    <div
      className={`flex items-center justify-between rounded-2xl border border-transparent px-3 py-3 transition-colors sm:px-4 ${
        isLocked
          ? "opacity-60"
          : "hover:border-border-brand hover:bg-surface2/60"
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface2 ${config.color}`}
        >
          <WeekIcon className="h-4 w-4" />
        </div>

        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
            Week {week.number}
          </span>
          <p className="truncate text-sm font-medium text-primary-text">
            {week.title}
          </p>
          <div className="mt-0.5 flex flex-wrap items-center gap-3 text-[11px] text-muted-text">
            <span className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              {week.lessons} lessons
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {week.duration}
            </span>
          </div>
        </div>
      </div>

      {!isLocked && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClick}
          className="btn-glass h-8 shrink-0 rounded-full px-3 text-xs font-medium"
        >
          {week.status === "completed" ? "Review" : "Continue"}
          <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      )}
    </div>
  );
};

export default PhaseWeekRow;