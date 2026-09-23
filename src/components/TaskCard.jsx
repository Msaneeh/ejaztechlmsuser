import { HourglassCog, Inbox, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TaskRequirements from "./TaskRequirements";
import TaskSubmissionSummary from "./TaskSubmissionSummary";

// Store icon references, not instantiated JSX — enables consistent sizing
const statusConfig = {
  pending: {
    label: "Pending",
    icon: HourglassCog,
    badge: "border-border-brand bg-surface2 text-primary-text",
  },
  submitted: {
    label: "Submitted",
    icon: Inbox,
    badge: "border-blue-500/30 bg-blue-500/15 text-blue-600",
  },
  graded: {
    label: "Graded",
    icon: Check,
    badge: "border-green-500/30 bg-green-500/15 text-green-600",
  },
};

const TaskCard = ({ task, isOpen, onToggle, onSubmit }) => {
  const config = statusConfig[task.status] || statusConfig.pending;
  const StatusIcon = config.icon;

  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      {/* Header — click to expand */}
      <button
        type="button"
        onClick={() => onToggle(task.id)}
        className="relative z-10 flex w-full items-center justify-between gap-3 p-4 text-left sm:p-5 cursor-pointer"
      >
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface2 text-muted-strong">
            <StatusIcon className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="truncate text-base font-semibold tracking-tight text-primary-text sm:text-lg">
                {task.title}
              </h2>
              <Badge
                variant="outline"
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${config.badge}`}
              >
                {config.label}
              </Badge>
            </div>

            <div className="mt-0.5 flex flex-wrap items-center gap-2 text-[11px] text-muted-text">
              <span>{task.phase}</span>
              <span className="text-border">•</span>
              <span>{task.week}</span>
              <span className="text-border">•</span>
              <span>
                Due{" "}
                {new Date(task.dueDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="text-border">•</span>
              <span>{task.xp} XP</span>
            </div>
          </div>
        </div>

        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-text transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div className="relative z-10 px-4 pb-4 sm:px-5 sm:pb-5">
          <p className="text-sm text-muted-text">{task.description}</p>

          <TaskRequirements requirements={task.requirements} />
          <TaskSubmissionSummary submission={task.submission} />

          <div className="mt-4 flex justify-start">
            <Button
              onClick={() => onSubmit(task.id)}
              className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
            >
              {task.submission ? "View / Edit Submission" : "Submit Task"}
              <span className="ml-1.5">→</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;