import { Calendar, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TaskInfoCard = ({ task }) => {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10 flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-base font-semibold tracking-tight text-primary-text sm:text-lg">
            {task.title}
          </h2>
          <Badge
            variant="outline"
            className="rounded-full border-border-brand bg-surface2 px-2.5 py-0.5 text-[10px] font-medium text-muted-strong"
          >
            {task.phase} • {task.week}
          </Badge>
        </div>

        <p className="text-xs text-muted-text sm:text-sm">
          {task.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-text">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Due{" "}
            {new Date(task.dueDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Trophy className="h-3 w-3" />
            {task.xp} XP
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskInfoCard;