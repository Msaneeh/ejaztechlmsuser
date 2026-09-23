import { ArrowLeft, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const QuizHeader = ({ phaseName, currentIndex, total, onExit }) => {
  const progressPercent = ((currentIndex + 1) / total) * 100;

  return (
    <div className="shrink-0">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onExit}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-all hover:bg-surface2/70 hover:text-primary-text hover:border-border cursor-pointer"
          aria-label="Exit quiz"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-2">
          <Brain className="h-5 w-5 shrink-0 text-muted-strong" />
          <h1 className="truncate text-lg font-semibold tracking-tight text-primary-text sm:text-xl">
            {phaseName}
          </h1>
        </div>

        <Badge
          variant="outline"
          className="shrink-0 rounded-full border-border-brand bg-surface2 px-2.5 py-0.5 text-[10px] font-medium text-muted-strong"
        >
          Question {currentIndex + 1} / {total}
        </Badge>
      </div>

      
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface2">
        <div
          className="h-full rounded-full bg-primary-text transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};

export default QuizHeader;