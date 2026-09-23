import { Check, Trash2, Trophy, BookOpen, TrendingUp, HelpCircle, Info, ChevronRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Type → icon + accent config
const typeConfig = {
  achievement: { icon: Trophy, accent: "bg-gold/15 text-gold" },
  course: { icon: BookOpen, accent: "bg-primary-text/10 text-primary-text" },
  leaderboard: { icon: TrendingUp, accent: "bg-green-500/15 text-green-500" },
  quiz: { icon: HelpCircle, accent: "bg-accent-dim text-muted-strong" },
  system: { icon: Info, accent: "bg-surface2 text-muted-text" },
};

const NotificationItem = ({
  notification,
  onMarkRead,
  onDelete,
  onActionClick,
}) => {
  const { id, type, title, message, time, read, action } = notification;
  const config = typeConfig[type] || typeConfig.system;
  const Icon = config.icon;

  return (
    <div
      className={`group relative flex items-start gap-3 rounded-2xl border p-3 transition-colors sm:p-4 ${
        read
          ? "border-transparent bg-transparent hover:bg-surface2/60"
          : "border-border-brand bg-surface2"
      }`}
    >
      {/* Type icon */}
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${config.accent}`}
      >
        <Icon className="h-4 w-4" />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold tracking-tight text-primary-text">
            {title}
          </span>
          {!read && (
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-gold"
              aria-label="Unread"
            />
          )}
        </div>

        <p className="mt-0.5 text-xs text-muted-text">{message}</p>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-muted-text">
          <span>{time}</span>
          {action && (
            <>
              <span className="text-border">•</span>
              <button
                onClick={() => onActionClick(action.href)}
                className="inline-flex items-center gap-0.5 font-medium text-primary-text hover:underline"
              >
                {action.label}
                <ChevronRight className="h-3 w-3" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Row actions — visible on hover */}
      <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
        {!read && (
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => onMarkRead(id)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-muted-text transition-colors hover:bg-surface2 hover:text-primary-text"
                aria-label="Mark as read"
              >
                <Check className="h-3.5 w-3.5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>Mark as read</TooltipContent>
          </Tooltip>
        )}

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => onDelete(id)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-text transition-colors hover:bg-destructive/10 hover:text-destructive"
              aria-label="Delete notification"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Delete</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default NotificationItem;