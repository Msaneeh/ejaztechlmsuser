import { BookOpen, Clock, ExternalLink, GraduationCap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const WeekDetailModal = ({ open, week, phaseName, onClose, onStartLesson }) => {
  if (!week) return null;

  const isLocked = week.status === "locked";

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="glass-panel max-w-md rounded-[1.75rem] border-border-brand">
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
            <GraduationCap className="h-5 w-5" />
          </div>
          <DialogTitle className="text-center text-lg font-semibold tracking-tight text-primary-text">
            Week {week.number}: {week.title}
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-text">
            {phaseName}
          </DialogDescription>
        </DialogHeader>

        {/* Meta row */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] text-muted-text">
          <span className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            {week.lessons} lessons
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {week.duration}
          </span>
        </div>

        {/* What you'll learn */}
        <div className="mt-4 rounded-2xl border border-border-brand bg-surface2/60 p-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
            What you'll learn
          </p>
          {week.objectives?.length > 0 ? (
            <ul className="space-y-1.5">
              {week.objectives.map((obj, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-muted-strong"
                >
                  <span className="mt-0.5 text-gold">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-muted-text">
              Complete the previous weeks to unlock this content.
            </p>
          )}
        </div>

        <DialogFooter className="mt-4 flex-col gap-2 sm:flex-row sm:justify-center">
          <Button
            variant="ghost"
            onClick={onClose}
            className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
          >
            Close
          </Button>
          <Button
            disabled={isLocked || !week.lessonLink}
            onClick={() => onStartLesson(week.lessonLink)}
            className="btn-primary h-9 rounded-full px-4 text-xs font-medium disabled:opacity-40"
          >
            {isLocked ? "Locked" : "Start Lesson"}
            {!isLocked && <ExternalLink className="ml-1 h-3.5 w-3.5" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WeekDetailModal;