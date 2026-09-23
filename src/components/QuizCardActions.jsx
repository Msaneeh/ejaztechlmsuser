import { Button } from "@/components/ui/button";
import { CheckCircle2, Lock, ArrowRight } from "lucide-react";

const QuizCardActions = ({ status, onStartClick }) => {
  if (status === "available") {
    return (
      <Button
        onClick={onStartClick}
        className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
      >
        Take Phase Quiz
        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
      </Button>
    );
  }

  if (status === "completed") {
    return (
      <Button
        disabled
        className="btn-glass h-9 rounded-full px-4 text-xs font-medium opacity-60 cursor-not-allowed"
      >
        <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" />
        Already Attempted
      </Button>
    );
  }

  // locked
  return (
    <Button
      disabled
      className="btn-glass h-9 rounded-full px-4 text-xs font-medium opacity-60 cursor-not-allowed"
    >
      <Lock className="mr-1.5 h-3.5 w-3.5" />
      Complete previous phases to unlock
    </Button>
  );
};

export default QuizCardActions;