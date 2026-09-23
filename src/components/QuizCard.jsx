import { CheckCircle2, FileText, Lock, HelpCircle, Clock, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LastAttemptSummary from "./LastAttemptSummary";
import QuizCardActions from "./QuizCardActions";

const statusConfig = {
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    iconBg: "bg-green-500/15 text-green-600",
    badge: "border-green-500/30 bg-green-500/15 text-green-600",
  },
  available: {
    label: "Available",
    icon: FileText,
    iconBg: "bg-surface2 text-primary-text",
    badge: "border-border-brand bg-surface2 text-primary-text",
  },
  locked: {
    label: "Locked",
    icon: Lock,
    iconBg: "bg-surface2 text-muted-text",
    badge: "border-border-brand bg-surface2 text-muted-text",
  },
};

const QuizCard = ({ quiz, onStartClick }) => {
  const config = statusConfig[quiz.status] || statusConfig.locked;
  const StatusIcon = config.icon;
  const isLocked = quiz.status === "locked";
  const isCompleted = quiz.status === "completed";

  return (
    <div
      className={`glass-panel relative overflow-hidden rounded-[2rem] shadow-xs ${
        isLocked ? "opacity-70" : ""
      }`}
    >
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10 flex flex-col gap-3 p-4 sm:p-5">
        {/* Header row */}
        <div className="flex items-start gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${config.iconBg}`}
          >
            <StatusIcon className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="truncate text-base font-semibold tracking-tight text-primary-text sm:text-lg">
                {quiz.phase}
              </h2>
              <Badge
                variant="outline"
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${config.badge}`}
              >
                {config.label}
              </Badge>
            </div>

            <p className="mt-0.5 text-xs text-muted-text">
              {quiz.description}
            </p>

            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[11px] text-muted-text">
              <span className="inline-flex items-center gap-1">
                <HelpCircle className="h-3 w-3" />
                {quiz.questionsCount} questions
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {quiz.duration}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Target className="h-3 w-3" />
                Pass: {quiz.passingScore}%
              </span>
              {quiz.attemptsAllowed === 1 && (
                <>
                  <span>•</span>
                  <span className="font-medium text-muted-strong">
                    One attempt only
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Last attempt summary */}
        {isCompleted && quiz.lastScore !== null && (
          <LastAttemptSummary
            lastScore={quiz.lastScore}
            passingScore={quiz.passingScore}
            lastAttemptDate={quiz.lastAttemptDate}
            attemptsUsed={quiz.attemptsUsed}
            attemptsAllowed={quiz.attemptsAllowed}
          />
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <QuizCardActions
            status={quiz.status}
            onStartClick={() => onStartClick(quiz)}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizCard;